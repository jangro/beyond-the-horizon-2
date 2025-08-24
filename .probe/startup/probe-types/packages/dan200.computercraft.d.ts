declare module "dan200.computercraft.api.client.turtle.RegisterTurtleUpgradeModeller" {
import {$TurtleUpgradeModeller, $TurtleUpgradeModeller$$Type} from "dan200.computercraft.api.client.turtle.TurtleUpgradeModeller"
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export interface $RegisterTurtleUpgradeModeller {

 "register"<T extends $ITurtleUpgrade>(arg0: $UpgradeType$$Type<(T)>, arg1: $TurtleUpgradeModeller$$Type<(T)>): void

(arg0: $UpgradeType<(T)>, arg1: $TurtleUpgradeModeller<(T)>): void
}

export namespace $RegisterTurtleUpgradeModeller {
const probejs$$marker: never
}
export class $RegisterTurtleUpgradeModeller$$Static implements $RegisterTurtleUpgradeModeller {


 "register"<T extends $ITurtleUpgrade>(arg0: $UpgradeType$$Type<(T)>, arg1: $TurtleUpgradeModeller$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterTurtleUpgradeModeller$$Type = ((arg0: $UpgradeType<(T)>, arg1: $TurtleUpgradeModeller<(T)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterTurtleUpgradeModeller_ = $RegisterTurtleUpgradeModeller$$Type;
}}
declare module "dan200.computercraft.core.computer.ComputerSide" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$List, $List$$Type} from "java.util.List"

export class $ComputerSide extends $Enum<($ComputerSide)> {
static readonly "NAMES": $List<(string)>
static readonly "TOP": $ComputerSide
static readonly "LEFT": $ComputerSide
static readonly "BACK": $ComputerSide
static readonly "FRONT": $ComputerSide
static readonly "RIGHT": $ComputerSide
static readonly "COUNT": integer
static readonly "BOTTOM": $ComputerSide


public "getName"(): string
public static "values"(): ($ComputerSide)[]
public static "valueOf"(arg0: integer): $ComputerSide
public static "valueOf"(arg0: string): $ComputerSide
public static "valueOfInsensitive"(arg0: string): $ComputerSide
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerSide$$Type = (("bottom") | ("top") | ("back") | ("front") | ("right") | ("left"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerSide_ = $ComputerSide$$Type;
}}
declare module "dan200.computercraft.api.turtle.TurtleVerb" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TurtleVerb extends $Enum<($TurtleVerb)> {
static readonly "DIG": $TurtleVerb
static readonly "ATTACK": $TurtleVerb


public static "values"(): ($TurtleVerb)[]
public static "valueOf"(arg0: string): $TurtleVerb
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleVerb$$Type = (("dig") | ("attack"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleVerb_ = $TurtleVerb$$Type;
}}
declare module "dan200.computercraft.core.terminal.Palette" {
import {$Colour, $Colour$$Type} from "dan200.computercraft.core.util.Colour"

export class $Palette {
static readonly "PALETTE_SIZE": integer
static readonly "DEFAULT": $Palette

constructor(arg0: boolean)

public "setColour"(arg0: integer, arg1: double, arg2: double, arg3: double): void
public "setColour"(arg0: integer, arg1: $Colour$$Type): void
public "getColour"(arg0: integer): (double)[]
public "resetColours"(): void
public static "encodeRGB8"(arg0: (double)[]): integer
public static "decodeRGB8"(arg0: integer): (double)[]
public "getRenderColours"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Palette$$Type = ($Palette);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Palette_ = $Palette$$Type;
}}
declare module "dan200.computercraft.core.util.Colour" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Colour extends $Enum<($Colour)> {
static readonly "WHITE": $Colour
static readonly "BLUE": $Colour
static readonly "PURPLE": $Colour
static readonly "GREEN": $Colour
static readonly "RED": $Colour
static readonly "LIGHT_GREY": $Colour
static readonly "PINK": $Colour
static readonly "LIGHT_BLUE": $Colour
static readonly "LIME": $Colour
static readonly "BLACK": $Colour
static readonly "MAGENTA": $Colour
static readonly "VALUES": ($Colour)[]
static readonly "YELLOW": $Colour
static readonly "CYAN": $Colour
static readonly "BROWN": $Colour
static readonly "GREY": $Colour
static readonly "ORANGE": $Colour


public "getG"(): float
public "getB"(): float
public static "values"(): ($Colour)[]
public static "valueOf"(arg0: string): $Colour
public "getHex"(): integer
public "getR"(): float
public static "fromInt"(arg0: integer): $Colour
public "getARGB"(): integer
get "g"(): float
get "b"(): float
get "hex"(): integer
get "r"(): float
get "aRGB"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Colour$$Type = (("black") | ("red") | ("green") | ("brown") | ("blue") | ("purple") | ("cyan") | ("light_grey") | ("grey") | ("pink") | ("lime") | ("yellow") | ("light_blue") | ("magenta") | ("orange") | ("white"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Colour_ = $Colour$$Type;
}}
declare module "dan200.computercraft.api.peripheral.IDynamicPeripheral" {
import {$ILuaContext, $ILuaContext$$Type} from "dan200.computercraft.api.lua.ILuaContext"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$IComputerAccess, $IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$IArguments, $IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"

export interface $IDynamicPeripheral extends $IPeripheral {

 "getMethodNames"(): (string)[]
 "callMethod"(arg0: $IComputerAccess$$Type, arg1: $ILuaContext$$Type, arg2: integer, arg3: $IArguments$$Type): $MethodResult
 "equals"(arg0: $IPeripheral$$Type): boolean
 "getType"(): string
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$$Type): void
 "detach"(arg0: $IComputerAccess$$Type): void
 "getAdditionalTypes"(): $Set<(string)>
get "methodNames"(): (string)[]
get "type"(): string
get "target"(): any
get "additionalTypes"(): $Set<(string)>
}

export namespace $IDynamicPeripheral {
const probejs$$marker: never
}
export class $IDynamicPeripheral$$Static implements $IDynamicPeripheral {


 "getMethodNames"(): (string)[]
 "callMethod"(arg0: $IComputerAccess$$Type, arg1: $ILuaContext$$Type, arg2: integer, arg3: $IArguments$$Type): $MethodResult
 "equals"(arg0: $IPeripheral$$Type): boolean
 "getType"(): string
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$$Type): void
 "detach"(arg0: $IComputerAccess$$Type): void
 "getAdditionalTypes"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDynamicPeripheral$$Type = ($IDynamicPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDynamicPeripheral_ = $IDynamicPeripheral$$Type;
}}
declare module "dan200.computercraft.shared.pocket.core.PocketServerComputer" {
import {$PocketBrain, $PocketBrain$$Type} from "dan200.computercraft.shared.pocket.core.PocketBrain"
import {$ServerComputer, $ServerComputer$$Type} from "dan200.computercraft.shared.computer.core.ServerComputer"
import {$MetricsObserver, $MetricsObserver$$Type} from "dan200.computercraft.core.metrics.MetricsObserver"
import {$ComputerComponent, $ComputerComponent$$Type} from "dan200.computercraft.api.component.ComputerComponent"

export class $PocketServerComputer extends $ServerComputer {
static readonly "METRICS": $ComputerComponent<($MetricsObserver)>


public "getBrain"(): $PocketBrain
get "brain"(): $PocketBrain
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketServerComputer$$Type = ($PocketServerComputer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketServerComputer_ = $PocketServerComputer$$Type;
}}
declare module "dan200.computercraft.api.peripheral.IComputerAccess" {
import {$WritableMount, $WritableMount$$Type} from "dan200.computercraft.api.filesystem.WritableMount"
import {$Mount, $Mount$$Type} from "dan200.computercraft.api.filesystem.Mount"
import {$Map, $Map$$Type} from "java.util.Map"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$WorkMonitor, $WorkMonitor$$Type} from "dan200.computercraft.api.peripheral.WorkMonitor"

export interface $IComputerAccess {

 "mount"(arg0: string, arg1: $Mount$$Type): string
 "mount"(arg0: string, arg1: $Mount$$Type, arg2: string): string
 "unmount"(arg0: string): void
 "getID"(): integer
 "getAvailablePeripheral"(arg0: string): $IPeripheral
 "getMainThreadMonitor"(): $WorkMonitor
 "getAttachmentName"(): string
 "queueEvent"(arg0: string, ...arg1: (any)[]): void
 "mountWritable"(arg0: string, arg1: $WritableMount$$Type, arg2: string): string
 "mountWritable"(arg0: string, arg1: $WritableMount$$Type): string
 "getAvailablePeripherals"(): $Map<(string), ($IPeripheral)>
get "iD"(): integer
get "mainThreadMonitor"(): $WorkMonitor
get "attachmentName"(): string
get "availablePeripherals"(): $Map<(string), ($IPeripheral)>
}

export namespace $IComputerAccess {
const probejs$$marker: never
}
export class $IComputerAccess$$Static implements $IComputerAccess {


 "mount"(arg0: string, arg1: $Mount$$Type): string
 "mount"(arg0: string, arg1: $Mount$$Type, arg2: string): string
 "unmount"(arg0: string): void
 "getID"(): integer
 "getAvailablePeripheral"(arg0: string): $IPeripheral
 "getMainThreadMonitor"(): $WorkMonitor
 "getAttachmentName"(): string
 "queueEvent"(arg0: string, ...arg1: (any)[]): void
 "mountWritable"(arg0: string, arg1: $WritableMount$$Type, arg2: string): string
 "mountWritable"(arg0: string, arg1: $WritableMount$$Type): string
 "getAvailablePeripherals"(): $Map<(string), ($IPeripheral)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComputerAccess$$Type = ($IComputerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComputerAccess_ = $IComputerAccess$$Type;
}}
declare module "dan200.computercraft.shared.computer.terminal.NetworkedTerminal" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Terminal, $Terminal$$Type} from "dan200.computercraft.core.terminal.Terminal"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export class $NetworkedTerminal extends $Terminal {

constructor(arg0: integer, arg1: integer, arg2: boolean)
constructor(arg0: integer, arg1: integer, arg2: boolean, arg3: $Runnable$$Type)

public "readFromNBT"(arg0: $CompoundTag$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedTerminal$$Type = ($NetworkedTerminal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkedTerminal_ = $NetworkedTerminal$$Type;
}}
declare module "dan200.computercraft.api.peripheral.IPeripheral" {
import {$IComputerAccess, $IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $IPeripheral {

 "equals"(arg0: $IPeripheral$$Type): boolean
 "getType"(): string
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$$Type): void
 "detach"(arg0: $IComputerAccess$$Type): void
 "getAdditionalTypes"(): $Set<(string)>
get "type"(): string
get "target"(): any
get "additionalTypes"(): $Set<(string)>
}

export namespace $IPeripheral {
const probejs$$marker: never
}
export class $IPeripheral$$Static implements $IPeripheral {


 "equals"(arg0: $IPeripheral$$Type): boolean
 "getType"(): string
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$$Type): void
 "detach"(arg0: $IComputerAccess$$Type): void
 "getAdditionalTypes"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheral$$Type = ($IPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheral_ = $IPeripheral$$Type;
}}
declare module "dan200.computercraft.shared.computer.terminal.TerminalState" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$NetworkedTerminal, $NetworkedTerminal$$Type} from "dan200.computercraft.shared.computer.terminal.NetworkedTerminal"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"

export class $TerminalState {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($TerminalState)>


public "size"(): integer
public "apply"(arg0: $NetworkedTerminal$$Type): void
public "create"(): $NetworkedTerminal
public static "create"(arg0: $NetworkedTerminal$$Type): $TerminalState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalState$$Type = ($TerminalState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalState_ = $TerminalState$$Type;
}}
declare module "dan200.computercraft.shared.container.BasicContainer" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BasicContainer extends $Container {

 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "getItems"(): $List<($ItemStack)>
 "clearContent"(): void
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "stillValid"(arg0: $Player$$Type): boolean
 "setChanged"(): void
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "getMaxStackSize"(): integer
 "canReceiveTransferCooldown"(): boolean
 "setTransferCooldown"(arg0: long): void
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "self"(): $Container
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "clear"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "asContainer"(): $Container
 "isEmpty"(): boolean
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "clear"(arg0: $ItemPredicate$$Type): void
 "find"(arg0: $ItemPredicate$$Type): integer
 "find"(): integer
 "count"(): integer
 "count"(arg0: $ItemPredicate$$Type): integer
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
get "empty"(): boolean
get "items"(): $List<($ItemStack)>
get "containerSize"(): integer
get "maxStackSize"(): integer
set "transferCooldown"(value: long)
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export namespace $BasicContainer {
function defaultSetItems(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $List$$Type<($ItemStack$$Type)>): void
function stillValidBlockEntity(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
function stillValidBlockEntity(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
function tryClear(arg0: any): void
const probejs$$marker: never
}
export class $BasicContainer$$Static implements $BasicContainer {


 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "getItem"(arg0: integer): $ItemStack
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "getItems"(): $List<($ItemStack)>
 "clearContent"(): void
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
static "defaultSetItems"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $List$$Type<($ItemStack$$Type)>): void
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "stillValid"(arg0: $Player$$Type): boolean
 "setChanged"(): void
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "getMaxStackSize"(): integer
static "tryClear"(arg0: any): void
 "canReceiveTransferCooldown"(): boolean
 "setTransferCooldown"(arg0: long): void
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "self"(): $Container
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "clear"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "asContainer"(): $Container
 "isEmpty"(): boolean
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "clear"(arg0: $ItemPredicate$$Type): void
 "find"(arg0: $ItemPredicate$$Type): integer
 "find"(): integer
 "count"(): integer
 "count"(arg0: $ItemPredicate$$Type): integer
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicContainer$$Type = ($BasicContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicContainer_ = $BasicContainer$$Type;
}}
declare module "dan200.computercraft.shared.lectern.CustomLecternBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LecternBlock, $LecternBlock$$Type} from "net.minecraft.world.level.block.LecternBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CustomLecternBlock extends $LecternBlock {
static readonly "SHAPE_NORTH": $VoxelShape
static readonly "SHAPE_SOUTH": $VoxelShape
static readonly "SHAPE_BASE": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "HAS_BOOK": $BooleanProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "SHAPE_COMMON": $VoxelShape
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE_POST": $VoxelShape
static readonly "SHAPE_TOP_PLATE": $VoxelShape
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "SHAPE_COLLISION": $VoxelShape
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "SHAPE_WEST": $VoxelShape
 "item": $Item
static readonly "CODEC": $MapCodec<($LecternBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "SHAPE_EAST": $VoxelShape
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getDescriptionId"(): string
/**
 * 
 * @deprecated
 */
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public static "tryPlaceItem"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $ItemStack$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomLecternBlock$$Type = ($CustomLecternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomLecternBlock_ = $CustomLecternBlock$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.modem.wired.CableBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$CableBlock, $CableBlock$$Type} from "dan200.computercraft.shared.peripheral.modem.wired.CableBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $CableBlockItem extends $BlockItem {
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

constructor(arg0: $CableBlock$$Type, arg1: $Item$Properties$$Type)

public "getDescriptionId"(): string
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBlockItem$$Type = ($CableBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBlockItem_ = $CableBlockItem$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.monitor.ServerMonitor" {
import {$NetworkedTerminal, $NetworkedTerminal$$Type} from "dan200.computercraft.shared.computer.terminal.NetworkedTerminal"

export class $ServerMonitor {


public "getTerminal"(): $NetworkedTerminal
get "terminal"(): $NetworkedTerminal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerMonitor$$Type = ($ServerMonitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerMonitor_ = $ServerMonitor$$Type;
}}
declare module "dan200.computercraft.shared.turtle.items.TurtleItem" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TurtleBlock, $TurtleBlock$$Type} from "dan200.computercraft.shared.turtle.blocks.TurtleBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CauldronInteraction, $CauldronInteraction$$Type} from "net.minecraft.core.cauldron.CauldronInteraction"
import {$UpgradeData, $UpgradeData$$Type} from "dan200.computercraft.api.upgrades.UpgradeData"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$TurtleOverlay, $TurtleOverlay$$Type} from "dan200.computercraft.shared.turtle.TurtleOverlay"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TurtleItem extends $BlockItem {
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
static readonly "CAULDRON_INTERACTION": $CauldronInteraction
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TurtleBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public static "getOverlay"(arg0: $ItemStack$$Type): $TurtleOverlay
public "getCreatorModId"(arg0: $ItemStack$$Type): string
public static "getUpgradeWithData"(arg0: $ItemStack$$Type, arg1: $TurtleSide$$Type): $UpgradeData<($ITurtleUpgrade)>
public static "getUpgrade"(arg0: $ItemStack$$Type, arg1: $TurtleSide$$Type): $ITurtleUpgrade
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
export type $TurtleItem$$Type = ($TurtleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleItem_ = $TurtleItem$$Type;
}}
declare module "dan200.computercraft.api.lua.LuaTable" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $LuaTable<K, V> extends $Map<(K), (V)> {

 "remove"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "length"(): integer
 "getBoolean"(arg0: integer): boolean
 "getBoolean"(arg0: string): boolean
 "getInt"(arg0: string): integer
 "getInt"(arg0: integer): integer
 "getLong"(arg0: integer): long
 "getLong"(arg0: string): long
 "getDouble"(arg0: integer): double
 "getDouble"(arg0: string): double
 "clear"(): void
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
 "getTable"(arg0: string): $Map<(any), (any)>
 "getTable"(arg0: integer): $Map<(any), (any)>
 "getString"(arg0: integer): string
 "getString"(arg0: string): string
 "optInt"(arg0: string): $Optional<(integer)>
 "optInt"(arg0: integer): $Optional<(integer)>
 "optBoolean"(arg0: string): $Optional<(boolean)>
 "optBoolean"(arg0: integer): $Optional<(boolean)>
 "optString"(arg0: integer): $Optional<(string)>
 "optString"(arg0: string): $Optional<(string)>
 "optTable"(arg0: integer): $Optional<($Map<(any), (any)>)>
 "optTable"(arg0: string): $Optional<($Map<(any), (any)>)>
 "optLong"(arg0: string): $Optional<(long)>
 "optLong"(arg0: integer): $Optional<(long)>
 "optDouble"(arg0: string): $Optional<(double)>
 "optDouble"(arg0: integer): $Optional<(double)>
 "optFiniteDouble"(arg0: string): $Optional<(double)>
 "optFiniteDouble"(arg0: integer): $Optional<(double)>
 "getFiniteDouble"(arg0: string): double
 "getFiniteDouble"(arg0: integer): double
 "remove"(arg0: any, arg1: any): boolean
 "size"(): integer
 "get"(arg0: any): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
[index: string | number]: V
get "empty"(): boolean
}

export namespace $LuaTable {
function copyOf<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
function of<K, V>(): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
function entry<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
function ofEntries<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
const probejs$$marker: never
}
export class $LuaTable$$Static<K, V> implements $LuaTable {


 "remove"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "length"(): integer
 "getBoolean"(arg0: integer): boolean
 "getBoolean"(arg0: string): boolean
 "getInt"(arg0: string): integer
 "getInt"(arg0: integer): integer
 "getLong"(arg0: integer): long
 "getLong"(arg0: string): long
 "getDouble"(arg0: integer): double
 "getDouble"(arg0: string): double
 "clear"(): void
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
 "getTable"(arg0: string): $Map<(any), (any)>
 "getTable"(arg0: integer): $Map<(any), (any)>
 "getString"(arg0: integer): string
 "getString"(arg0: string): string
 "optInt"(arg0: string): $Optional<(integer)>
 "optInt"(arg0: integer): $Optional<(integer)>
 "optBoolean"(arg0: string): $Optional<(boolean)>
 "optBoolean"(arg0: integer): $Optional<(boolean)>
 "optString"(arg0: integer): $Optional<(string)>
 "optString"(arg0: string): $Optional<(string)>
 "optTable"(arg0: integer): $Optional<($Map<(any), (any)>)>
 "optTable"(arg0: string): $Optional<($Map<(any), (any)>)>
 "optLong"(arg0: string): $Optional<(long)>
 "optLong"(arg0: integer): $Optional<(long)>
 "optDouble"(arg0: string): $Optional<(double)>
 "optDouble"(arg0: integer): $Optional<(double)>
 "optFiniteDouble"(arg0: string): $Optional<(double)>
 "optFiniteDouble"(arg0: integer): $Optional<(double)>
 "getFiniteDouble"(arg0: string): double
 "getFiniteDouble"(arg0: integer): double
 "remove"(arg0: any, arg1: any): boolean
 "size"(): integer
 "get"(arg0: any): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
static "of"<K, V>(): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaTable$$Type<K, V> = ($LuaTable<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaTable_<K, V> = $LuaTable$$Type<(K), (V)>;
}}
declare module "dan200.computercraft.shared.computer.blocks.ComputerBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AbstractComputerBlockEntity, $AbstractComputerBlockEntity$$Type} from "dan200.computercraft.shared.computer.blocks.AbstractComputerBlockEntity"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$ComputerFamily, $ComputerFamily$$Type} from "dan200.computercraft.shared.computer.core.ComputerFamily"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ComputerBlockEntity extends $AbstractComputerBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<($ComputerBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ComputerFamily$$Type)

/**
 * 
 * @deprecated
 */
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getDirection"(): $Direction
public "peripheral"(): $IPeripheral
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "direction"(): $Direction
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerBlockEntity$$Type = ($ComputerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerBlockEntity_ = $ComputerBlockEntity$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.printer.PrinterBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$HorizontalContainerBlock, $HorizontalContainerBlock$$Type} from "dan200.computercraft.shared.common.HorizontalContainerBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PrinterBlock extends $HorizontalContainerBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "BOTTOM": $BooleanProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "TOP": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrinterBlock$$Type = ($PrinterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrinterBlock_ = $PrinterBlock$$Type;
}}
declare module "dan200.computercraft.shared.recipe.function.RecipeFunction" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RecipeFunction$Type, $RecipeFunction$Type$$Type} from "dan200.computercraft.shared.recipe.function.RecipeFunction$Type"

export interface $RecipeFunction {

 "apply"(arg0: $CraftingInput$$Type, arg1: $ItemStack$$Type): $ItemStack
 "getType"(): $RecipeFunction$Type<(any)>
get "type"(): $RecipeFunction$Type<(any)>
}

export namespace $RecipeFunction {
const LIST_STREAM_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($List<($RecipeFunction)>)>
const CODEC: $Codec<($RecipeFunction)>
const LIST_CODEC: $Codec<($List<($RecipeFunction)>)>
const STREAM_CODEC: $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeFunction)>
const REGISTRY: $ResourceKey<($Registry<($RecipeFunction$Type<(any)>)>)>
const probejs$$marker: never
}
export class $RecipeFunction$$Static implements $RecipeFunction {
static readonly "LIST_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($List<($RecipeFunction)>)>
static readonly "CODEC": $Codec<($RecipeFunction)>
static readonly "LIST_CODEC": $Codec<($List<($RecipeFunction)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeFunction)>
static readonly "REGISTRY": $ResourceKey<($Registry<($RecipeFunction$Type<(any)>)>)>


 "apply"(arg0: $CraftingInput$$Type, arg1: $ItemStack$$Type): $ItemStack
 "getType"(): $RecipeFunction$Type<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeFunction$$Type = ($RecipeFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeFunction_ = $RecipeFunction$$Type;
}}
declare module "dan200.computercraft.shared.turtle.TurtleOverlay" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TurtleOverlay extends $Record {
static readonly "CODEC": $Codec<($Holder<($TurtleOverlay)>)>
static readonly "ELF_MODEL": $ResourceLocation
static readonly "DIRECT_CODEC": $Codec<($TurtleOverlay)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($TurtleOverlay)>)>
static readonly "REGISTRY": $ResourceKey<($Registry<($TurtleOverlay)>)>

constructor(model: $ResourceLocation$$Type, showElfOverlay: boolean)

public "model"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "showElfOverlay"(arg0: $TurtleOverlay$$Type, arg1: boolean): boolean
public "showElfOverlay"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ComputercraftTurtleOverlay
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ComputercraftTurtleOverlayTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleOverlay$$Type = (Special.ComputercraftTurtleOverlay) | ({"model"?: $ResourceLocation$$Type, "showElfOverlay"?: boolean}) | ([model?: $ResourceLocation$$Type, showElfOverlay?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleOverlay_ = $TurtleOverlay$$Type;
}}
declare module "dan200.computercraft.core.metrics.Metric$Counter" {
import {$Metric, $Metric$$Type} from "dan200.computercraft.core.metrics.Metric"

export class $Metric$Counter extends $Metric {

constructor(arg0: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Metric$Counter$$Type = ($Metric$Counter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Metric$Counter_ = $Metric$Counter$$Type;
}}
declare module "dan200.computercraft.shared.media.items.PrintoutItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $PrintoutItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintoutItem$$Type = ($PrintoutItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintoutItem_ = $PrintoutItem$$Type;
}}
declare module "dan200.computercraft.shared.computer.blocks.ComputerBlock" {
import {$ComputerState, $ComputerState$$Type} from "dan200.computercraft.shared.computer.core.ComputerState"
import {$AbstractComputerBlock, $AbstractComputerBlock$$Type} from "dan200.computercraft.shared.computer.blocks.AbstractComputerBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RegistryEntry, $RegistryEntry$$Type} from "dan200.computercraft.shared.platform.RegistryEntry"
import {$ComputerBlockEntity, $ComputerBlockEntity$$Type} from "dan200.computercraft.shared.computer.blocks.ComputerBlockEntity"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ComputerBlock<T extends $ComputerBlockEntity> extends $AbstractComputerBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STATE": $EnumProperty<($ComputerState)>
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
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $RegistryEntry$$Type<($BlockEntityType$$Type<(T)>)>)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerBlock$$Type<T> = ($ComputerBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerBlock_<T> = $ComputerBlock$$Type<(T)>;
}}
declare module "dan200.computercraft.api.upgrades.UpgradeData" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UpgradeBase, $UpgradeBase$$Type} from "dan200.computercraft.api.upgrades.UpgradeBase"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $UpgradeData<T extends $UpgradeBase> extends $Record {

constructor(holder: $Holder$Reference$$Type<(T)>, data: $DataComponentPatch$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<T extends $UpgradeBase>(arg0: $Holder$Reference$$Type<(T)>, arg1: $DataComponentPatch$$Type): $UpgradeData<(T)>
public "data"(): $DataComponentPatch
public "holder"(): $Holder$Reference<(T)>
public "upgrade"(): T
public "getUpgradeItem"(): $ItemStack
public static "ofDefault"<T extends $UpgradeBase>(arg0: $Holder$Reference$$Type<(T)>): $UpgradeData<(T)>
get "upgradeItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeData$$Type<T> = ({"holder"?: $Holder$Reference$$Type<(any)>, "data"?: $DataComponentPatch$$Type}) | ([holder?: $Holder$Reference$$Type<(any)>, data?: $DataComponentPatch$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeData_<T> = $UpgradeData$$Type<(T)>;
}}
declare module "dan200.computercraft.shared.computer.core.ServerComputerRegistry" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ServerComputer, $ServerComputer$$Type} from "dan200.computercraft.shared.computer.core.ServerComputer"

export class $ServerComputerRegistry {

constructor()

public "get"(arg0: $UUID$$Type): $ServerComputer
public "get"(arg0: integer, arg1: $UUID$$Type): $ServerComputer
public "getComputers"(): $Collection<($ServerComputer)>
public "getSessionID"(): integer
get "computers"(): $Collection<($ServerComputer)>
get "sessionID"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerComputerRegistry$$Type = ($ServerComputerRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerComputerRegistry_ = $ServerComputerRegistry$$Type;
}}
declare module "dan200.computercraft.shared.computer.core.ServerComputer" {
import {$ComputerState, $ComputerState$$Type} from "dan200.computercraft.shared.computer.core.ComputerState"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ServerComputer$Properties, $ServerComputer$Properties$$Type} from "dan200.computercraft.shared.computer.core.ServerComputer$Properties"
import {$TerminalState, $TerminalState$$Type} from "dan200.computercraft.shared.computer.terminal.TerminalState"
import {$ComputerComponent, $ComputerComponent$$Type} from "dan200.computercraft.api.component.ComputerComponent"
import {$WorkMonitor, $WorkMonitor$$Type} from "dan200.computercraft.api.peripheral.WorkMonitor"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$WritableMount, $WritableMount$$Type} from "dan200.computercraft.api.filesystem.WritableMount"
import {$ComputerEnvironment, $ComputerEnvironment$$Type} from "dan200.computercraft.core.computer.ComputerEnvironment"
import {$ComputerSide, $ComputerSide$$Type} from "dan200.computercraft.core.computer.ComputerSide"
import {$ComputerEvents$Receiver, $ComputerEvents$Receiver$$Type} from "dan200.computercraft.core.computer.ComputerEvents$Receiver"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MetricsObserver, $MetricsObserver$$Type} from "dan200.computercraft.core.metrics.MetricsObserver"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$ComputerFamily, $ComputerFamily$$Type} from "dan200.computercraft.shared.computer.core.ComputerFamily"

export class $ServerComputer implements $ComputerEnvironment, $ComputerEvents$Receiver {
static readonly "METRICS": $ComputerComponent<($MetricsObserver)>

constructor(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $ServerComputer$Properties$$Type)

public "getPosition"(): $BlockPos
public "setLabel"(arg0: string): void
public "getLabel"(): string
public "shutdown"(): void
public "register"(): $UUID
public static "properties"(arg0: integer, arg1: $ComputerFamily$$Type): $ServerComputer$Properties
public "isOn"(): boolean
public "getState"(): $ComputerState
public "close"(): void
public "getFamily"(): $ComputerFamily
public "getID"(): integer
public "getDay"(): integer
public "keepAlive"(): void
public "getLevel"(): $ServerLevel
public "getTimeOfDay"(): double
public "getBundledRedstoneOutput"(arg0: $ComputerSide$$Type): integer
public "setPosition"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): void
public "turnOn"(): void
public "reboot"(): void
public "getMainThreadMonitor"(): $WorkMonitor
public "pollRedstoneChanges"(): integer
public "getTerminalState"(): $TerminalState
public "getRedstoneOutput"(arg0: $ComputerSide$$Type): integer
public "setRedstoneInput"(arg0: $ComputerSide$$Type, arg1: integer, arg2: integer): void
public "createRootMount"(): $WritableMount
public "getInstanceUUID"(): $UUID
public "queueEvent"(arg0: string): void
public "queueEvent"(arg0: string, arg1: (any)[]): void
public "getPeripheral"(arg0: $ComputerSide$$Type): $IPeripheral
public "checkUsable"(arg0: $Player$$Type): boolean
public "setPeripheral"(arg0: $ComputerSide$$Type, arg1: $IPeripheral$$Type): void
public "getMetrics"(): $MetricsObserver
get "position"(): $BlockPos
set "label"(value: string)
get "label"(): string
get "on"(): boolean
get "state"(): $ComputerState
get "family"(): $ComputerFamily
get "iD"(): integer
get "day"(): integer
get "level"(): $ServerLevel
get "timeOfDay"(): double
get "mainThreadMonitor"(): $WorkMonitor
get "terminalState"(): $TerminalState
get "instanceUUID"(): $UUID
get "metrics"(): $MetricsObserver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerComputer$$Type = ($ServerComputer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerComputer_ = $ServerComputer$$Type;
}}
declare module "dan200.computercraft.shared.common.HorizontalContainerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HorizontalContainerBlock extends $BaseEntityBlock {
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
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalContainerBlock$$Type = ($HorizontalContainerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalContainerBlock_ = $HorizontalContainerBlock$$Type;
}}
declare module "dan200.computercraft.api.client.turtle.RegisterTurtleModellersEvent" {
import {$TurtleUpgradeModeller, $TurtleUpgradeModeller$$Type} from "dan200.computercraft.api.client.turtle.TurtleUpgradeModeller"
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$RegisterTurtleUpgradeModeller, $RegisterTurtleUpgradeModeller$$Type} from "dan200.computercraft.api.client.turtle.RegisterTurtleUpgradeModeller"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $RegisterTurtleModellersEvent extends $Event implements $IModBusEvent, $RegisterTurtleUpgradeModeller {

constructor(arg0: $RegisterTurtleUpgradeModeller$$Type)

public "register"<T extends $ITurtleUpgrade>(arg0: $UpgradeType$$Type<(T)>, arg1: $TurtleUpgradeModeller$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterTurtleModellersEvent$$Type = ($RegisterTurtleModellersEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterTurtleModellersEvent_ = $RegisterTurtleModellersEvent$$Type;
}}
declare module "dan200.computercraft.core.metrics.Metric" {
import {$Map, $Map$$Type} from "java.util.Map"

export class $Metric {


public static "formatBytes"(arg0: long): string
public "name"(): string
public "toString"(): string
public "format"(arg0: long): string
public "id"(): integer
public "unit"(): string
public static "metrics"(): $Map<(string), ($Metric)>
public static "formatDefault"(arg0: long): string
public static "formatTime"(arg0: long): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Metric$$Type = ($Metric);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Metric_ = $Metric$$Type;
}}
declare module "dan200.computercraft.api.lua.MethodResult" {
import {$ILuaCallback, $ILuaCallback$$Type} from "dan200.computercraft.api.lua.ILuaCallback"

export class $MethodResult {


public static "of"(): $MethodResult
public static "of"(...arg0: (any)[]): $MethodResult
public static "of"(arg0: any): $MethodResult
public static "yield"(arg0: (any)[], arg1: $ILuaCallback$$Type): $MethodResult
public "getResult"(): (any)[]
public "getCallback"(): $ILuaCallback
public static "pullEvent"(arg0: string, arg1: $ILuaCallback$$Type): $MethodResult
public "getErrorAdjust"(): integer
public static "pullEventRaw"(arg0: string, arg1: $ILuaCallback$$Type): $MethodResult
public "adjustError"(arg0: integer): $MethodResult
get "result"(): (any)[]
get "callback"(): $ILuaCallback
get "errorAdjust"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodResult$$Type = ($MethodResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodResult_ = $MethodResult$$Type;
}}
declare module "dan200.computercraft.shared.computer.core.ComputerState" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ComputerState extends $Enum<($ComputerState)> implements $StringRepresentable {
static readonly "BLINKING": $ComputerState
static readonly "OFF": $ComputerState
static readonly "ON": $ComputerState


public "toString"(): string
public static "values"(): ($ComputerState)[]
public static "valueOf"(arg0: string): $ComputerState
public "getTexture"(): string
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "texture"(): string
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerState$$Type = (("off") | ("on") | ("blinking"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerState_ = $ComputerState$$Type;
}}
declare module "dan200.computercraft.shared.media.items.DiskItem" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $DiskItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiskItem$$Type = ($DiskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiskItem_ = $DiskItem$$Type;
}}
declare module "dan200.computercraft.shared.computer.blocks.AbstractComputerBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AbstractComputerBlockEntity, $AbstractComputerBlockEntity$$Type} from "dan200.computercraft.shared.computer.blocks.AbstractComputerBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IBundledRedstoneBlock, $IBundledRedstoneBlock$$Type} from "dan200.computercraft.shared.common.IBundledRedstoneBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AbstractComputerBlock<T extends $AbstractComputerBlockEntity> extends $HorizontalDirectionalBlock implements $IBundledRedstoneBlock, $EntityBlock {
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
 "hasCollision": boolean


public "getBundledRedstoneOutput"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<U extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(U)>): $BlockEntityTicker<(U)>
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractComputerBlock$$Type<T> = ($AbstractComputerBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractComputerBlock_<T> = $AbstractComputerBlock$$Type<(T)>;
}}
declare module "dan200.computercraft.api.lua.LuaTask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LuaTask {

 "execute"(): (any)[]

(): (any)[]
}

export namespace $LuaTask {
const probejs$$marker: never
}
export class $LuaTask$$Static implements $LuaTask {


 "execute"(): (any)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaTask$$Type = (() => (any)[]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaTask_ = $LuaTask$$Type;
}}
declare module "dan200.computercraft.api.client.turtle.TurtleUpgradeModeller" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ModelLocation, $ModelLocation$$Type} from "dan200.computercraft.api.client.ModelLocation"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$TransformedModel, $TransformedModel$$Type} from "dan200.computercraft.api.client.TransformedModel"

export interface $TurtleUpgradeModeller<T extends $ITurtleUpgrade> {

 "getModel"(arg0: T, arg1: $ITurtleAccess$$Type, arg2: $TurtleSide$$Type, arg3: $DataComponentPatch$$Type): $TransformedModel
 "getDependencies"(): $Stream<($ResourceLocation)>

(arg0: T, arg1: $ITurtleAccess, arg2: $TurtleSide, arg3: $DataComponentPatch): $TransformedModel$$Type
get "dependencies"(): $Stream<($ResourceLocation)>
}

export namespace $TurtleUpgradeModeller {
function sided<T extends $ITurtleUpgrade>(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): $TurtleUpgradeModeller<(T)>
function sided<T extends $ITurtleUpgrade>(arg0: $ModelLocation$$Type, arg1: $ModelLocation$$Type): $TurtleUpgradeModeller<(T)>
function flatItem<T extends $ITurtleUpgrade>(): $TurtleUpgradeModeller<(T)>
const probejs$$marker: never
}
export class $TurtleUpgradeModeller$$Static<T extends $ITurtleUpgrade> implements $TurtleUpgradeModeller {


 "getModel"(arg0: T, arg1: $ITurtleAccess$$Type, arg2: $TurtleSide$$Type, arg3: $DataComponentPatch$$Type): $TransformedModel
static "sided"<T extends $ITurtleUpgrade>(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): $TurtleUpgradeModeller<(T)>
static "sided"<T extends $ITurtleUpgrade>(arg0: $ModelLocation$$Type, arg1: $ModelLocation$$Type): $TurtleUpgradeModeller<(T)>
 "getDependencies"(): $Stream<($ResourceLocation)>
static "flatItem"<T extends $ITurtleUpgrade>(): $TurtleUpgradeModeller<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleUpgradeModeller$$Type<T> = ((arg0: T, arg1: $ITurtleAccess, arg2: $TurtleSide, arg3: $DataComponentPatch) => $TransformedModel$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleUpgradeModeller_<T> = $TurtleUpgradeModeller$$Type<(T)>;
}}
declare module "dan200.computercraft.shared.peripheral.modem.wired.WiredModemFullBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WiredModemFullBlock extends $Block implements $EntityBlock {
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
static readonly "PERIPHERAL_ON": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "MODEM_ON": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WiredModemFullBlock$$Type = ($WiredModemFullBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WiredModemFullBlock_ = $WiredModemFullBlock$$Type;
}}
declare module "dan200.computercraft.shared.computer.core.TerminalSize" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TerminalSize extends $Record {
static readonly "CODEC": $Codec<($TerminalSize)>
static readonly "MAX_SIZE": integer
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($TerminalSize)>

constructor(width: integer, height: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "width"(): integer
public "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalSize$$Type = ({"height"?: integer, "width"?: integer}) | ([height?: integer, width?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalSize_ = $TerminalSize$$Type;
}}
declare module "dan200.computercraft.api.filesystem.WritableMount" {
import {$SeekableByteChannel, $SeekableByteChannel$$Type} from "java.nio.channels.SeekableByteChannel"
import {$Mount, $Mount$$Type} from "dan200.computercraft.api.filesystem.Mount"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$OpenOption, $OpenOption$$Type} from "java.nio.file.OpenOption"
import {$BasicFileAttributes, $BasicFileAttributes$$Type} from "java.nio.file.attribute.BasicFileAttributes"

export interface $WritableMount extends $Mount {

 "getCapacity"(): long
 "delete"(arg0: string): void
 "isReadOnly"(arg0: string): boolean
 "rename"(arg0: string, arg1: string): void
 "makeDirectory"(arg0: string): void
 "openFile"(arg0: string, arg1: $Set$$Type<($OpenOption$$Type)>): $SeekableByteChannel
 "getRemainingSpace"(): long
 "list"(arg0: string, arg1: $List$$Type<(string)>): void
 "getSize"(arg0: string): long
 "getAttributes"(arg0: string): $BasicFileAttributes
 "exists"(arg0: string): boolean
 "isDirectory"(arg0: string): boolean
 "openForRead"(arg0: string): $SeekableByteChannel
get "capacity"(): long
get "remainingSpace"(): long
}

export namespace $WritableMount {
const probejs$$marker: never
}
export class $WritableMount$$Static implements $WritableMount {


 "getCapacity"(): long
 "delete"(arg0: string): void
 "isReadOnly"(arg0: string): boolean
 "rename"(arg0: string, arg1: string): void
 "makeDirectory"(arg0: string): void
 "openFile"(arg0: string, arg1: $Set$$Type<($OpenOption$$Type)>): $SeekableByteChannel
 "getRemainingSpace"(): long
 "list"(arg0: string, arg1: $List$$Type<(string)>): void
 "getSize"(arg0: string): long
 "getAttributes"(arg0: string): $BasicFileAttributes
 "exists"(arg0: string): boolean
 "isDirectory"(arg0: string): boolean
 "openForRead"(arg0: string): $SeekableByteChannel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableMount$$Type = ($WritableMount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritableMount_ = $WritableMount$$Type;
}}
declare module "dan200.computercraft.api.filesystem.Mount" {
import {$SeekableByteChannel, $SeekableByteChannel$$Type} from "java.nio.channels.SeekableByteChannel"
import {$List, $List$$Type} from "java.util.List"
import {$BasicFileAttributes, $BasicFileAttributes$$Type} from "java.nio.file.attribute.BasicFileAttributes"

export interface $Mount {

 "list"(arg0: string, arg1: $List$$Type<(string)>): void
 "getSize"(arg0: string): long
 "getAttributes"(arg0: string): $BasicFileAttributes
 "exists"(arg0: string): boolean
 "isDirectory"(arg0: string): boolean
 "openForRead"(arg0: string): $SeekableByteChannel
}

export namespace $Mount {
const probejs$$marker: never
}
export class $Mount$$Static implements $Mount {


 "list"(arg0: string, arg1: $List$$Type<(string)>): void
 "getSize"(arg0: string): long
 "getAttributes"(arg0: string): $BasicFileAttributes
 "exists"(arg0: string): boolean
 "isDirectory"(arg0: string): boolean
 "openForRead"(arg0: string): $SeekableByteChannel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mount$$Type = ($Mount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mount_ = $Mount$$Type;
}}
declare module "dan200.computercraft.core.computer.ComputerEvents$Receiver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ComputerEvents$Receiver {

 "queueEvent"(arg0: string, arg1: (any)[]): void

(arg0: string, arg1: (any)[]): void
}

export namespace $ComputerEvents$Receiver {
const probejs$$marker: never
}
export class $ComputerEvents$Receiver$$Static implements $ComputerEvents$Receiver {


 "queueEvent"(arg0: string, arg1: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerEvents$Receiver$$Type = ((arg0: string, arg1: (any)[]) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerEvents$Receiver_ = $ComputerEvents$Receiver$$Type;
}}
declare module "dan200.computercraft.shared.turtle.upgrades.TurtleTool" {
import {$TurtleToolSpec, $TurtleToolSpec$$Type} from "dan200.computercraft.impl.upgrades.TurtleToolSpec"
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TurtleVerb, $TurtleVerb$$Type} from "dan200.computercraft.api.turtle.TurtleVerb"
import {$TurtleCommandResult, $TurtleCommandResult$$Type} from "dan200.computercraft.api.turtle.TurtleCommandResult"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$AbstractTurtleUpgrade, $AbstractTurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.AbstractTurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $TurtleTool extends $AbstractTurtleUpgrade {
static readonly "CODEC": $MapCodec<($TurtleTool)>

constructor(arg0: $TurtleToolSpec$$Type)

public "getType"(): $UpgradeType<($TurtleTool)>
public "useTool"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type, arg2: $TurtleVerb$$Type, arg3: $Direction$$Type): $TurtleCommandResult
public "getUpgradeItem"(arg0: $DataComponentPatch$$Type): $ItemStack
public "isItemSuitable"(arg0: $ItemStack$$Type): boolean
public "getUpgradeData"(arg0: $ItemStack$$Type): $DataComponentPatch
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($TurtleTool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleTool$$Type = ($TurtleTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleTool_ = $TurtleTool$$Type;
}}
declare module "dan200.computercraft.api.turtle.ITurtleUpgrade" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TurtleUpgradeType, $TurtleUpgradeType$$Type} from "dan200.computercraft.api.turtle.TurtleUpgradeType"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TurtleVerb, $TurtleVerb$$Type} from "dan200.computercraft.api.turtle.TurtleVerb"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TurtleCommandResult, $TurtleCommandResult$$Type} from "dan200.computercraft.api.turtle.TurtleCommandResult"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$UpgradeBase, $UpgradeBase$$Type} from "dan200.computercraft.api.upgrades.UpgradeBase"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"

export interface $ITurtleUpgrade extends $UpgradeBase {

 "update"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): void
 "getType"(): $UpgradeType<($ITurtleUpgrade)>
 "createPeripheral"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): $IPeripheral
 "getPersistedData"(arg0: $DataComponentPatch$$Type): $DataComponentPatch
 "useTool"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type, arg2: $TurtleVerb$$Type, arg3: $Direction$$Type): $TurtleCommandResult
 "getUpgradeType"(): $TurtleUpgradeType
 "getCraftingItem"(): $ItemStack
 "getAdjective"(): $Component
 "getUpgradeItem"(arg0: $DataComponentPatch$$Type): $ItemStack
 "isItemSuitable"(arg0: $ItemStack$$Type): boolean
 "getUpgradeData"(arg0: $ItemStack$$Type): $DataComponentPatch
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "upgradeType"(): $TurtleUpgradeType
get "craftingItem"(): $ItemStack
get "adjective"(): $Component
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ComputercraftTurtleUpgrade
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ComputercraftTurtleUpgradeTag
}

export namespace $ITurtleUpgrade {
const REGISTRY: $ResourceKey<($Registry<($ITurtleUpgrade)>)>
function createKey(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
function typeRegistry(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
function getDefaultAdjective(arg0: $ResourceLocation$$Type): string
const probejs$$marker: never
}
export class $ITurtleUpgrade$$Static implements $ITurtleUpgrade {
static readonly "REGISTRY": $ResourceKey<($Registry<($ITurtleUpgrade)>)>


 "update"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): void
 "getType"(): $UpgradeType<($ITurtleUpgrade)>
static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
 "createPeripheral"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): $IPeripheral
 "getPersistedData"(arg0: $DataComponentPatch$$Type): $DataComponentPatch
 "useTool"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type, arg2: $TurtleVerb$$Type, arg3: $Direction$$Type): $TurtleCommandResult
static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
 "getUpgradeType"(): $TurtleUpgradeType
 "getCraftingItem"(): $ItemStack
static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
 "getAdjective"(): $Component
 "getUpgradeItem"(arg0: $DataComponentPatch$$Type): $ItemStack
 "isItemSuitable"(arg0: $ItemStack$$Type): boolean
 "getUpgradeData"(arg0: $ItemStack$$Type): $DataComponentPatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITurtleUpgrade$$Type = (Special.ComputercraftTurtleUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITurtleUpgrade_ = $ITurtleUpgrade$$Type;
}}
declare module "dan200.computercraft.api.client.ModelLocation" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ModelManager, $ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"

export class $ModelLocation {


public "getModel"(arg0: $ModelManager$$Type): $BakedModel
public "getDependencies"(): $Stream<($ResourceLocation)>
public static "ofResource"(arg0: $ResourceLocation$$Type): $ModelLocation
public static "ofModel"(arg0: $ModelResourceLocation$$Type): $ModelLocation
get "dependencies"(): $Stream<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLocation$$Type = ($ModelLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelLocation_ = $ModelLocation$$Type;
}}
declare module "dan200.computercraft.api.turtle.TurtleCommand" {
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$TurtleCommandResult, $TurtleCommandResult$$Type} from "dan200.computercraft.api.turtle.TurtleCommandResult"

export interface $TurtleCommand {

 "execute"(arg0: $ITurtleAccess$$Type): $TurtleCommandResult

(arg0: $ITurtleAccess): $TurtleCommandResult$$Type
}

export namespace $TurtleCommand {
const probejs$$marker: never
}
export class $TurtleCommand$$Static implements $TurtleCommand {


 "execute"(arg0: $ITurtleAccess$$Type): $TurtleCommandResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleCommand$$Type = ((arg0: $ITurtleAccess) => $TurtleCommandResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleCommand_ = $TurtleCommand$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.modem.wired.CableBlockItem$Cable" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CableBlock, $CableBlock$$Type} from "dan200.computercraft.shared.peripheral.modem.wired.CableBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CableBlockItem, $CableBlockItem$$Type} from "dan200.computercraft.shared.peripheral.modem.wired.CableBlockItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CableBlockItem$Cable extends $CableBlockItem {
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

constructor(arg0: $CableBlock$$Type, arg1: $Item$Properties$$Type)

public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
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
export type $CableBlockItem$Cable$$Type = ($CableBlockItem$Cable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBlockItem$Cable_ = $CableBlockItem$Cable$$Type;
}}
declare module "dan200.computercraft.core.metrics.MetricsObserver" {
import {$Metric$Counter, $Metric$Counter$$Type} from "dan200.computercraft.core.metrics.Metric$Counter"
import {$Metric$Event, $Metric$Event$$Type} from "dan200.computercraft.core.metrics.Metric$Event"

export interface $MetricsObserver {

 "observe"(arg0: $Metric$Event$$Type, arg1: long): void
 "observe"(arg0: $Metric$Counter$$Type): void
}

export namespace $MetricsObserver {
function discard(): $MetricsObserver
const probejs$$marker: never
}
export class $MetricsObserver$$Static implements $MetricsObserver {


static "discard"(): $MetricsObserver
 "observe"(arg0: $Metric$Event$$Type, arg1: long): void
 "observe"(arg0: $Metric$Counter$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetricsObserver$$Type = ($MetricsObserver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MetricsObserver_ = $MetricsObserver$$Type;
}}
declare module "dan200.computercraft.core.methods.PeripheralMethod" {
import {$ILuaContext, $ILuaContext$$Type} from "dan200.computercraft.api.lua.ILuaContext"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$IComputerAccess, $IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$IArguments, $IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"

export interface $PeripheralMethod {

 "apply"(arg0: any, arg1: $ILuaContext$$Type, arg2: $IComputerAccess$$Type, arg3: $IArguments$$Type): $MethodResult

(arg0: any, arg1: $ILuaContext, arg2: $IComputerAccess, arg3: $IArguments): $MethodResult$$Type
}

export namespace $PeripheralMethod {
const probejs$$marker: never
}
export class $PeripheralMethod$$Static implements $PeripheralMethod {


 "apply"(arg0: any, arg1: $ILuaContext$$Type, arg2: $IComputerAccess$$Type, arg3: $IArguments$$Type): $MethodResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralMethod$$Type = ((arg0: any, arg1: $ILuaContext, arg2: $IComputerAccess, arg3: $IArguments) => $MethodResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralMethod_ = $PeripheralMethod$$Type;
}}
declare module "dan200.computercraft.api.turtle.TurtleToolDurability" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $TurtleToolDurability extends $Enum<($TurtleToolDurability)> implements $StringRepresentable {
static readonly "CODEC": $StringRepresentable$EnumCodec<($TurtleToolDurability)>
static readonly "NEVER": $TurtleToolDurability
static readonly "WHEN_ENCHANTED": $TurtleToolDurability
static readonly "ALWAYS": $TurtleToolDurability


public static "values"(): ($TurtleToolDurability)[]
public static "valueOf"(arg0: string): $TurtleToolDurability
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
export type $TurtleToolDurability$$Type = (("always") | ("when_enchanted") | ("never"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleToolDurability_ = $TurtleToolDurability$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.modem.wired.CableBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CableModemVariant, $CableModemVariant$$Type} from "dan200.computercraft.shared.peripheral.modem.wired.CableModemVariant"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CableBlock extends $Block implements $SimpleWaterloggedBlock, $EntityBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "CABLE": $BooleanProperty
 "descriptionId": string
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MODEM": $EnumProperty<($CableModemVariant)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "onCustomDestroyBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public static "correctConnections"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $BlockState
public static "doesConnectVisually"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public static "canConnectIn"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBlock$$Type = ($CableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBlock_ = $CableBlock$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.redstone.RedstoneRelayBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IBundledRedstoneBlock, $IBundledRedstoneBlock$$Type} from "dan200.computercraft.shared.common.IBundledRedstoneBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RedstoneRelayBlock extends $HorizontalDirectionalBlock implements $EntityBlock, $IBundledRedstoneBlock {
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
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

/**
 * 
 * @deprecated
 */
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getBundledRedstoneOutput"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
/**
 * 
 * @deprecated
 */
public "isSignalSource"(arg0: $BlockState$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
/**
 * 
 * @deprecated
 */
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneRelayBlock$$Type = ($RedstoneRelayBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneRelayBlock_ = $RedstoneRelayBlock$$Type;
}}
declare module "dan200.computercraft.api.turtle.TurtleAnimation" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TurtleAnimation extends $Enum<($TurtleAnimation)> {
static readonly "TURN_RIGHT": $TurtleAnimation
static readonly "SWING_LEFT_TOOL": $TurtleAnimation
static readonly "MOVE_UP": $TurtleAnimation
static readonly "MOVE_DOWN": $TurtleAnimation
static readonly "TURN_LEFT": $TurtleAnimation
static readonly "MOVE_BACK": $TurtleAnimation
static readonly "MOVE_FORWARD": $TurtleAnimation
static readonly "NONE": $TurtleAnimation
static readonly "SWING_RIGHT_TOOL": $TurtleAnimation
static readonly "WAIT": $TurtleAnimation
static readonly "SHORT_WAIT": $TurtleAnimation


public static "values"(): ($TurtleAnimation)[]
public static "valueOf"(arg0: string): $TurtleAnimation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleAnimation$$Type = (("none") | ("move_forward") | ("move_back") | ("move_up") | ("move_down") | ("turn_left") | ("turn_right") | ("swing_left_tool") | ("swing_right_tool") | ("wait") | ("short_wait"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleAnimation_ = $TurtleAnimation$$Type;
}}
declare module "dan200.computercraft.api.pocket.AbstractPocketUpgrade" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $AbstractPocketUpgrade implements $IPocketUpgrade {


public "getCraftingItem"(): $ItemStack
public "getAdjective"(): $Component
public "update"(arg0: $IPocketAccess$$Type, arg1: $IPeripheral$$Type): void
public "getType"(): $UpgradeType<($IPocketUpgrade)>
public "createPeripheral"(arg0: $IPocketAccess$$Type): $IPeripheral
public "onRightClick"(arg0: $Level$$Type, arg1: $IPocketAccess$$Type, arg2: $IPeripheral$$Type): boolean
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
public "getUpgradeItem"(arg0: $DataComponentPatch$$Type): $ItemStack
public "isItemSuitable"(arg0: $ItemStack$$Type): boolean
public "getUpgradeData"(arg0: $ItemStack$$Type): $DataComponentPatch
get "craftingItem"(): $ItemStack
get "adjective"(): $Component
get "type"(): $UpgradeType<($IPocketUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPocketUpgrade$$Type = ($AbstractPocketUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPocketUpgrade_ = $AbstractPocketUpgrade$$Type;
}}
declare module "dan200.computercraft.api.pocket.IPocketUpgrade" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$UpgradeBase, $UpgradeBase$$Type} from "dan200.computercraft.api.upgrades.UpgradeBase"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export interface $IPocketUpgrade extends $UpgradeBase {

 "update"(arg0: $IPocketAccess$$Type, arg1: $IPeripheral$$Type): void
 "getType"(): $UpgradeType<($IPocketUpgrade)>
 "createPeripheral"(arg0: $IPocketAccess$$Type): $IPeripheral
 "onRightClick"(arg0: $Level$$Type, arg1: $IPocketAccess$$Type, arg2: $IPeripheral$$Type): boolean
 "getCraftingItem"(): $ItemStack
 "getAdjective"(): $Component
 "getUpgradeItem"(arg0: $DataComponentPatch$$Type): $ItemStack
 "isItemSuitable"(arg0: $ItemStack$$Type): boolean
 "getUpgradeData"(arg0: $ItemStack$$Type): $DataComponentPatch
get "type"(): $UpgradeType<($IPocketUpgrade)>
get "craftingItem"(): $ItemStack
get "adjective"(): $Component
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ComputercraftPocketUpgrade
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ComputercraftPocketUpgradeTag
}

export namespace $IPocketUpgrade {
const REGISTRY: $ResourceKey<($Registry<($IPocketUpgrade)>)>
function typeRegistry(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
function getDefaultAdjective(arg0: $ResourceLocation$$Type): string
const probejs$$marker: never
}
export class $IPocketUpgrade$$Static implements $IPocketUpgrade {
static readonly "REGISTRY": $ResourceKey<($Registry<($IPocketUpgrade)>)>


 "update"(arg0: $IPocketAccess$$Type, arg1: $IPeripheral$$Type): void
 "getType"(): $UpgradeType<($IPocketUpgrade)>
 "createPeripheral"(arg0: $IPocketAccess$$Type): $IPeripheral
 "onRightClick"(arg0: $Level$$Type, arg1: $IPocketAccess$$Type, arg2: $IPeripheral$$Type): boolean
static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
 "getCraftingItem"(): $ItemStack
static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
 "getAdjective"(): $Component
 "getUpgradeItem"(arg0: $DataComponentPatch$$Type): $ItemStack
 "isItemSuitable"(arg0: $ItemStack$$Type): boolean
 "getUpgradeData"(arg0: $ItemStack$$Type): $DataComponentPatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPocketUpgrade$$Type = (Special.ComputercraftPocketUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPocketUpgrade_ = $IPocketUpgrade$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.modem.wireless.WirelessModemBlockEntity" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WirelessModemBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<($WirelessModemBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean)

public "clearRemoved"(): void
public "setRemoved"(): void
/**
 * 
 * @deprecated
 */
public "setBlockState"(arg0: $BlockState$$Type): void
public "getPeripheral"(arg0: $Direction$$Type): $IPeripheral
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
set "blockState"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessModemBlockEntity$$Type = ($WirelessModemBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessModemBlockEntity_ = $WirelessModemBlockEntity$$Type;
}}
declare module "dan200.computercraft.impl.upgrades.TurtleToolSpec" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TurtleToolDurability, $TurtleToolDurability$$Type} from "dan200.computercraft.api.turtle.TurtleToolDurability"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TurtleToolSpec extends $Record {
static readonly "DEFAULT_DAMAGE_MULTIPLIER": float
static readonly "CODEC": $MapCodec<($TurtleToolSpec)>

constructor(adjective: $Component$$Type, item: $Item$$Type, damageMultiplier: float, allowEnchantments: boolean, consumeDurability: $TurtleToolDurability$$Type, breakable: $Optional$$Type<($TagKey$$Type<($Block$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "item"(): $Item
public "consumeDurability"(): $TurtleToolDurability
public "breakable"(): $Optional<($TagKey<($Block)>)>
public "damageMultiplier"(): float
public "adjective"(): $Component
public "allowEnchantments"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleToolSpec$$Type = ({"consumeDurability"?: $TurtleToolDurability$$Type, "item"?: $Item$$Type, "breakable"?: ($TagKey$$Type<($Block$$Type)>)?, "damageMultiplier"?: float, "allowEnchantments"?: boolean, "adjective"?: $Component$$Type}) | ([consumeDurability?: $TurtleToolDurability$$Type, item?: $Item$$Type, breakable?: ($TagKey$$Type<($Block$$Type)>)?, damageMultiplier?: float, allowEnchantments?: boolean, adjective?: $Component$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleToolSpec_ = $TurtleToolSpec$$Type;
}}
declare module "dan200.computercraft.api.component.ComputerComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ComputerComponent<T> {


public "toString"(): string
public static "create"<T>(arg0: string, arg1: string): $ComputerComponent<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerComponent$$Type<T> = ($ComputerComponent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerComponent_<T> = $ComputerComponent$$Type<(T)>;
}}
declare module "dan200.computercraft.core.terminal.TextBuffer" {
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $TextBuffer {

constructor(arg0: character, arg1: integer)
constructor(arg0: string)

public "length"(): integer
public "toString"(): string
public "charAt"(arg0: integer): character
public "fill"(arg0: character): void
public "fill"(arg0: character, arg1: integer, arg2: integer): void
public "write"(arg0: $TextBuffer$$Type): void
public "write"(arg0: string, arg1: integer): void
public "write"(arg0: string): void
public "write"(arg0: $ByteBuffer$$Type, arg1: integer): void
public "setChar"(arg0: integer, arg1: character): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextBuffer$$Type = ($TextBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextBuffer_ = $TextBuffer$$Type;
}}
declare module "dan200.computercraft.api.lua.IArguments" {
import {$LuaTable, $LuaTable$$Type} from "dan200.computercraft.api.lua.LuaTable"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export interface $IArguments {

 "drop"(arg0: integer): $IArguments
 "get"(arg0: integer): any
 "getBoolean"(arg0: integer): boolean
 "getInt"(arg0: integer): integer
 "getLong"(arg0: integer): long
 "getDouble"(arg0: integer): double
 "getBytes"(arg0: integer): $ByteBuffer
 "count"(): integer
 "getType"(arg0: integer): string
 "getTable"(arg0: integer): $Map<(any), (any)>
 "getAll"(): (any)[]
 "getString"(arg0: integer): string
 "escapes"(): void
 "getEnum"<T extends $Enum<(T)>>(arg0: integer, arg1: $Class$$Type<(T)>): T
 "optInt"(arg0: integer): $Optional<(integer)>
 "optInt"(arg0: integer, arg1: integer): integer
 "optBoolean"(arg0: integer): $Optional<(boolean)>
 "optBoolean"(arg0: integer, arg1: boolean): boolean
 "optString"(arg0: integer): $Optional<(string)>
 "optString"(arg0: integer, arg1: string): string
 "optTable"(arg0: integer, arg1: $Map$$Type<(any), (any)>): $Map<(any), (any)>
 "optTable"(arg0: integer): $Optional<($Map<(any), (any)>)>
 "optLong"(arg0: integer, arg1: long): long
 "optLong"(arg0: integer): $Optional<(long)>
 "optDouble"(arg0: integer): $Optional<(double)>
 "optDouble"(arg0: integer, arg1: double): double
 "optEnum"<T extends $Enum<(T)>>(arg0: integer, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getTableUnsafe"(arg0: integer): $LuaTable<(any), (any)>
 "optBytes"(arg0: integer): $Optional<($ByteBuffer)>
 "optTableUnsafe"(arg0: integer): $Optional<($LuaTable<(any), (any)>)>
 "getStringCoerced"(arg0: integer): string
 "getBytesCoerced"(arg0: integer): $ByteBuffer
 "optFiniteDouble"(arg0: integer, arg1: double): double
 "optFiniteDouble"(arg0: integer): $Optional<(double)>
 "getFiniteDouble"(arg0: integer): double
get "all"(): (any)[]
}

export namespace $IArguments {
const probejs$$marker: never
}
export class $IArguments$$Static implements $IArguments {


 "drop"(arg0: integer): $IArguments
 "get"(arg0: integer): any
 "getBoolean"(arg0: integer): boolean
 "getInt"(arg0: integer): integer
 "getLong"(arg0: integer): long
 "getDouble"(arg0: integer): double
 "getBytes"(arg0: integer): $ByteBuffer
 "count"(): integer
 "getType"(arg0: integer): string
 "getTable"(arg0: integer): $Map<(any), (any)>
 "getAll"(): (any)[]
 "getString"(arg0: integer): string
 "escapes"(): void
 "getEnum"<T extends $Enum<(T)>>(arg0: integer, arg1: $Class$$Type<(T)>): T
 "optInt"(arg0: integer): $Optional<(integer)>
 "optInt"(arg0: integer, arg1: integer): integer
 "optBoolean"(arg0: integer): $Optional<(boolean)>
 "optBoolean"(arg0: integer, arg1: boolean): boolean
 "optString"(arg0: integer): $Optional<(string)>
 "optString"(arg0: integer, arg1: string): string
 "optTable"(arg0: integer, arg1: $Map$$Type<(any), (any)>): $Map<(any), (any)>
 "optTable"(arg0: integer): $Optional<($Map<(any), (any)>)>
 "optLong"(arg0: integer, arg1: long): long
 "optLong"(arg0: integer): $Optional<(long)>
 "optDouble"(arg0: integer): $Optional<(double)>
 "optDouble"(arg0: integer, arg1: double): double
 "optEnum"<T extends $Enum<(T)>>(arg0: integer, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getTableUnsafe"(arg0: integer): $LuaTable<(any), (any)>
 "optBytes"(arg0: integer): $Optional<($ByteBuffer)>
 "optTableUnsafe"(arg0: integer): $Optional<($LuaTable<(any), (any)>)>
 "getStringCoerced"(arg0: integer): string
 "getBytesCoerced"(arg0: integer): $ByteBuffer
 "optFiniteDouble"(arg0: integer, arg1: double): double
 "optFiniteDouble"(arg0: integer): $Optional<(double)>
 "getFiniteDouble"(arg0: integer): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IArguments$$Type = ($IArguments);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IArguments_ = $IArguments$$Type;
}}
declare module "dan200.computercraft.api.turtle.AbstractTurtleUpgrade" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TurtleUpgradeType, $TurtleUpgradeType$$Type} from "dan200.computercraft.api.turtle.TurtleUpgradeType"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TurtleVerb, $TurtleVerb$$Type} from "dan200.computercraft.api.turtle.TurtleVerb"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TurtleCommandResult, $TurtleCommandResult$$Type} from "dan200.computercraft.api.turtle.TurtleCommandResult"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"

export class $AbstractTurtleUpgrade implements $ITurtleUpgrade {


public "getCraftingItem"(): $ItemStack
public "getAdjective"(): $Component
public "getUpgradeType"(): $TurtleUpgradeType
public "update"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): void
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public "createPeripheral"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): $IPeripheral
public "getPersistedData"(arg0: $DataComponentPatch$$Type): $DataComponentPatch
public "useTool"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type, arg2: $TurtleVerb$$Type, arg3: $Direction$$Type): $TurtleCommandResult
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
public "getUpgradeItem"(arg0: $DataComponentPatch$$Type): $ItemStack
public "isItemSuitable"(arg0: $ItemStack$$Type): boolean
public "getUpgradeData"(arg0: $ItemStack$$Type): $DataComponentPatch
get "craftingItem"(): $ItemStack
get "adjective"(): $Component
get "upgradeType"(): $TurtleUpgradeType
get "type"(): $UpgradeType<($ITurtleUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTurtleUpgrade$$Type = ($AbstractTurtleUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTurtleUpgrade_ = $AbstractTurtleUpgrade$$Type;
}}
declare module "dan200.computercraft.shared.command.arguments.RepeatArgumentType" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$List, $List$$Type} from "java.util.List"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"

export class $RepeatArgumentType<T, U> implements $ArgumentType<($List<(T)>)> {


public "getExamples"(): $Collection<(string)>
public "parse"(arg0: $StringReader$$Type): any
public static "some"<T>(arg0: $ArgumentType$$Type<(T)>, arg1: $SimpleCommandExceptionType$$Type): $RepeatArgumentType<(T), (T)>
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public static "someFlat"<T>(arg0: $ArgumentType$$Type<($List$$Type<(T)>)>, arg1: $SimpleCommandExceptionType$$Type): $RepeatArgumentType<(T), ($List<(T)>)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $List<(T)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatArgumentType$$Type<T, U> = ($RepeatArgumentType<(T), (U)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepeatArgumentType_<T, U> = $RepeatArgumentType$$Type<(T), (U)>;
}}
declare module "dan200.computercraft.shared.turtle.blocks.TurtleBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$TurtleBlockEntity, $TurtleBlockEntity$$Type} from "dan200.computercraft.shared.turtle.blocks.TurtleBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AbstractComputerBlock, $AbstractComputerBlock$$Type} from "dan200.computercraft.shared.computer.blocks.AbstractComputerBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RegistryEntry, $RegistryEntry$$Type} from "dan200.computercraft.shared.platform.RegistryEntry"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TurtleBlock extends $AbstractComputerBlock<($TurtleBlockEntity)> implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "IMMUNE_EXPLOSION_RESISTANCE": float
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
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $RegistryEntry$$Type<($BlockEntityType$$Type<($TurtleBlockEntity$$Type)>)>)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getTicker"<U extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(U)>): $BlockEntityTicker<(U)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public "asHolder"(): $Holder<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleBlock$$Type = ($TurtleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleBlock_ = $TurtleBlock$$Type;
}}
declare module "dan200.computercraft.core.terminal.Terminal" {
import {$TextBuffer, $TextBuffer$$Type} from "dan200.computercraft.core.terminal.TextBuffer"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Palette, $Palette$$Type} from "dan200.computercraft.core.terminal.Palette"
import {$Colour, $Colour$$Type} from "dan200.computercraft.core.util.Colour"

export class $Terminal {

constructor(arg0: integer, arg1: integer, arg2: boolean)
constructor(arg0: integer, arg1: integer, arg2: boolean, arg3: $Runnable$$Type)

public "getWidth"(): integer
public "getHeight"(): integer
public "reset"(): void
public "clear"(): void
public "write"(arg0: string): void
public "resize"(arg0: integer, arg1: integer): void
public "setChanged"(): void
public "getPalette"(): $Palette
public "setLine"(arg0: integer, arg1: string, arg2: string, arg3: string): void
public "getLine"(arg0: integer): $TextBuffer
public "blit"(arg0: $ByteBuffer$$Type, arg1: $ByteBuffer$$Type, arg2: $ByteBuffer$$Type): void
public "scroll"(arg0: integer): void
public "getTextColourLine"(arg0: integer): $TextBuffer
public "setTextColour"(arg0: integer): void
public "getTextColour"(): integer
public static "getColour"(arg0: character, arg1: $Colour$$Type): integer
public "setCursorPos"(arg0: integer, arg1: integer): void
public "isColour"(): boolean
public "setCursorBlink"(arg0: boolean): void
public "getCursorX"(): integer
public "getCursorY"(): integer
public "getCursorBlink"(): boolean
public "clearLine"(): void
public "getBackgroundColourLine"(arg0: integer): $TextBuffer
public "setBackgroundColour"(arg0: integer): void
public "getBackgroundColour"(): integer
get "width"(): integer
get "height"(): integer
get "palette"(): $Palette
set "textColour"(value: integer)
get "textColour"(): integer
get "colour"(): boolean
set "cursorBlink"(value: boolean)
get "cursorX"(): integer
get "cursorY"(): integer
get "cursorBlink"(): boolean
set "backgroundColour"(value: integer)
get "backgroundColour"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Terminal$$Type = ($Terminal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Terminal_ = $Terminal$$Type;
}}
declare module "dan200.computercraft.shared.turtle.upgrades.TurtleCraftingTable" {
import {$AbstractTurtleUpgrade, $AbstractTurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.AbstractTurtleUpgrade"
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtleCraftingTable extends $AbstractTurtleUpgrade {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($TurtleCraftingTable)>
public "createPeripheral"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): $IPeripheral
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($TurtleCraftingTable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleCraftingTable$$Type = ($TurtleCraftingTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleCraftingTable_ = $TurtleCraftingTable$$Type;
}}
declare module "dan200.computercraft.api.lua.ILuaContext" {
import {$LuaTask, $LuaTask$$Type} from "dan200.computercraft.api.lua.LuaTask"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"

export interface $ILuaContext {

 "executeMainThreadTask"(arg0: $LuaTask$$Type): $MethodResult
 "issueMainThreadTask"(arg0: $LuaTask$$Type): long

(arg0: $LuaTask): long
}

export namespace $ILuaContext {
const probejs$$marker: never
}
export class $ILuaContext$$Static implements $ILuaContext {


 "executeMainThreadTask"(arg0: $LuaTask$$Type): $MethodResult
 "issueMainThreadTask"(arg0: $LuaTask$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaContext$$Type = ((arg0: $LuaTask) => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILuaContext_ = $ILuaContext$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.monitor.MonitorBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RegistryEntry, $RegistryEntry$$Type} from "dan200.computercraft.shared.platform.RegistryEntry"
import {$MonitorEdgeState, $MonitorEdgeState$$Type} from "dan200.computercraft.shared.peripheral.monitor.MonitorEdgeState"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$MonitorBlockEntity, $MonitorBlockEntity$$Type} from "dan200.computercraft.shared.peripheral.monitor.MonitorBlockEntity"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $MonitorBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STATE": $EnumProperty<($MonitorEdgeState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "ORIENTATION": $DirectionProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $RegistryEntry$$Type<($BlockEntityType$$Type<($MonitorBlockEntity$$Type)>)>)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonitorBlock$$Type = ($MonitorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonitorBlock_ = $MonitorBlock$$Type;
}}
declare module "dan200.computercraft.shared.platform.RegistryEntry" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"

export interface $RegistryEntry<U> extends $Supplier<(U)> {

 "id"(): $ResourceLocation
 "get"(): U
}

export namespace $RegistryEntry {
function codec<T>(arg0: $Registry$$Type<(T)>): $Codec<($RegistryEntry<(T)>)>
const probejs$$marker: never
}
export class $RegistryEntry$$Static<U> implements $RegistryEntry {


 "id"(): $ResourceLocation
static "codec"<T>(arg0: $Registry$$Type<(T)>): $Codec<($RegistryEntry<(T)>)>
 "get"(): U
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$$Type<U> = ($RegistryEntry<(U)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryEntry_<U> = $RegistryEntry$$Type<(U)>;
}}
declare module "dan200.computercraft.api.pocket.IPocketAccess" {
import {$UpgradeData, $UpgradeData$$Type} from "dan200.computercraft.api.upgrades.UpgradeData"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $IPocketAccess {

 "getPosition"(): $Vec3
 "getEntity"(): $Entity
 "getLevel"(): $ServerLevel
 "setLight"(arg0: integer): void
 "setColour"(arg0: integer): void
 "setUpgrade"(arg0: $UpgradeData$$Type<($IPocketUpgrade$$Type)>): void
 "getUpgrade"(): $UpgradeData<($IPocketUpgrade)>
 "getColour"(): integer
 "getLight"(): integer
 "getUpgradeData"(): $DataComponentPatch
 "setUpgradeData"(arg0: $DataComponentPatch$$Type): void
 "invalidatePeripheral"(): void
get "position"(): $Vec3
get "entity"(): $Entity
get "level"(): $ServerLevel
set "light"(value: integer)
set "colour"(value: integer)
set "upgrade"(value: $UpgradeData$$Type<($IPocketUpgrade$$Type)>)
get "upgrade"(): $UpgradeData<($IPocketUpgrade)>
get "colour"(): integer
get "light"(): integer
get "upgradeData"(): $DataComponentPatch
set "upgradeData"(value: $DataComponentPatch$$Type)
}

export namespace $IPocketAccess {
const probejs$$marker: never
}
export class $IPocketAccess$$Static implements $IPocketAccess {


 "getPosition"(): $Vec3
 "getEntity"(): $Entity
 "getLevel"(): $ServerLevel
 "setLight"(arg0: integer): void
 "setColour"(arg0: integer): void
 "setUpgrade"(arg0: $UpgradeData$$Type<($IPocketUpgrade$$Type)>): void
 "getUpgrade"(): $UpgradeData<($IPocketUpgrade)>
 "getColour"(): integer
 "getLight"(): integer
 "getUpgradeData"(): $DataComponentPatch
 "setUpgradeData"(arg0: $DataComponentPatch$$Type): void
 "invalidatePeripheral"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPocketAccess$$Type = ($IPocketAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPocketAccess_ = $IPocketAccess$$Type;
}}
declare module "dan200.computercraft.api.turtle.TurtleCommandResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TurtleCommandResult {


public static "failure"(): $TurtleCommandResult
public static "failure"(arg0: string): $TurtleCommandResult
public static "success"(): $TurtleCommandResult
public static "success"(arg0: (any)[]): $TurtleCommandResult
public "getErrorMessage"(): string
public "isSuccess"(): boolean
public "getResults"(): (any)[]
get "errorMessage"(): string
get "results"(): (any)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleCommandResult$$Type = ($TurtleCommandResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleCommandResult_ = $TurtleCommandResult$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.monitor.MonitorBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ClientMonitor, $ClientMonitor$$Type} from "dan200.computercraft.shared.peripheral.monitor.ClientMonitor"
import {$TerminalState, $TerminalState$$Type} from "dan200.computercraft.shared.computer.terminal.TerminalState"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ServerMonitor, $ServerMonitor$$Type} from "dan200.computercraft.shared.peripheral.monitor.ServerMonitor"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MonitorBlockEntity extends $BlockEntity {
static readonly "RENDER_PIXEL_SCALE": double
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "RENDER_MARGIN": double
static readonly "RENDER_BORDER": double

constructor(arg0: $BlockEntityType$$Type<($MonitorBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean)

public "getWidth"(): integer
public "getHeight"(): integer
public "read"(arg0: $TerminalState$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "clearRemoved"(): void
public "getDirection"(): $Direction
public "setRemoved"(): void
public "getRight"(): $Direction
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getRenderBoundingBox"(): $AABB
public "getCachedServerMonitor"(): $ServerMonitor
public "getOriginClientMonitor"(): $ClientMonitor
public "getXIndex"(): integer
public "getYIndex"(): integer
public "getFront"(): $Direction
public "peripheral"(): $IPeripheral
public "getDown"(): $Direction
public "getOrientation"(): $Direction
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "width"(): integer
get "height"(): integer
get "direction"(): $Direction
get "right"(): $Direction
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "renderBoundingBox"(): $AABB
get "cachedServerMonitor"(): $ServerMonitor
get "originClientMonitor"(): $ClientMonitor
get "xIndex"(): integer
get "yIndex"(): integer
get "front"(): $Direction
get "down"(): $Direction
get "orientation"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonitorBlockEntity$$Type = ($MonitorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonitorBlockEntity_ = $MonitorBlockEntity$$Type;
}}
declare module "dan200.computercraft.shared.pocket.core.PocketHolder" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ServerComputer, $ServerComputer$$Type} from "dan200.computercraft.shared.computer.core.ServerComputer"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $PocketHolder {

 "pos"(): $Vec3
 "level"(): $ServerLevel
 "isValid"(arg0: $ServerComputer$$Type): boolean
 "blockPos"(): $BlockPos
 "setChanged"(): void
 "isTerminalAlwaysVisible"(): boolean
get "terminalAlwaysVisible"(): boolean
}

export namespace $PocketHolder {
const probejs$$marker: never
}
export class $PocketHolder$$Static implements $PocketHolder {


 "pos"(): $Vec3
 "level"(): $ServerLevel
 "isValid"(arg0: $ServerComputer$$Type): boolean
 "blockPos"(): $BlockPos
 "setChanged"(): void
 "isTerminalAlwaysVisible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketHolder$$Type = ($PocketHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketHolder_ = $PocketHolder$$Type;
}}
declare module "dan200.computercraft.api.turtle.TurtleSide" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TurtleSide extends $Enum<($TurtleSide)> {
static readonly "LEFT": $TurtleSide
static readonly "RIGHT": $TurtleSide


public static "values"(): ($TurtleSide)[]
public static "valueOf"(arg0: string): $TurtleSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleSide$$Type = (("left") | ("right"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleSide_ = $TurtleSide$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.modem.wireless.WirelessModemBlock" {
import {$WirelessModemBlockEntity, $WirelessModemBlockEntity$$Type} from "dan200.computercraft.shared.peripheral.modem.wireless.WirelessModemBlockEntity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$DirectionalBlock, $DirectionalBlock$$Type} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RegistryEntry, $RegistryEntry$$Type} from "dan200.computercraft.shared.platform.RegistryEntry"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $WirelessModemBlock extends $DirectionalBlock implements $SimpleWaterloggedBlock, $EntityBlock {
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
 "hasCollision": boolean
static readonly "ON": $BooleanProperty

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $RegistryEntry$$Type<($BlockEntityType$$Type<($WirelessModemBlockEntity$$Type)>)>)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessModemBlock$$Type = ($WirelessModemBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessModemBlock_ = $WirelessModemBlock$$Type;
}}
declare module "dan200.computercraft.shared.computer.blocks.CommandComputerBlock" {
import {$ComputerState, $ComputerState$$Type} from "dan200.computercraft.shared.computer.core.ComputerState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GameMasterBlock, $GameMasterBlock$$Type} from "net.minecraft.world.level.block.GameMasterBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RegistryEntry, $RegistryEntry$$Type} from "dan200.computercraft.shared.platform.RegistryEntry"
import {$ComputerBlockEntity, $ComputerBlockEntity$$Type} from "dan200.computercraft.shared.computer.blocks.ComputerBlockEntity"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ComputerBlock, $ComputerBlock$$Type} from "dan200.computercraft.shared.computer.blocks.ComputerBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CommandComputerBlock<T extends $ComputerBlockEntity> extends $ComputerBlock<(T)> implements $GameMasterBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STATE": $EnumProperty<($ComputerState)>
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
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $RegistryEntry$$Type<($BlockEntityType$$Type<(T)>)>)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandComputerBlock$$Type<T> = ($CommandComputerBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandComputerBlock_<T> = $CommandComputerBlock$$Type<(T)>;
}}
declare module "dan200.computercraft.api.client.TransformedModel" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ModelLocation, $ModelLocation$$Type} from "dan200.computercraft.api.client.ModelLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Transformation, $Transformation$$Type} from "com.mojang.math.Transformation"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TransformedModel extends $Record {

constructor(arg0: $BakedModel$$Type)
constructor(model: $BakedModel$$Type, matrix: $Transformation$$Type)

public "model"(): $BakedModel
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $ModelLocation$$Type): $TransformedModel
public static "of"(arg0: $ModelResourceLocation$$Type): $TransformedModel
public static "of"(arg0: $ResourceLocation$$Type): $TransformedModel
public static "of"(arg0: $ItemStack$$Type, arg1: $Transformation$$Type): $TransformedModel
public "matrix"(): $Transformation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformedModel$$Type = ({"model"?: $BakedModel$$Type, "matrix"?: $Transformation$$Type}) | ([model?: $BakedModel$$Type, matrix?: $Transformation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformedModel_ = $TransformedModel$$Type;
}}
declare module "dan200.computercraft.shared.pocket.peripherals.PocketSpeaker" {
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$AbstractPocketUpgrade, $AbstractPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.AbstractPocketUpgrade"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketSpeaker extends $AbstractPocketUpgrade {

constructor(arg0: $ItemStack$$Type)

public "update"(arg0: $IPocketAccess$$Type, arg1: $IPeripheral$$Type): void
public "getType"(): $UpgradeType<($PocketSpeaker)>
public "createPeripheral"(arg0: $IPocketAccess$$Type): $IPeripheral
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($PocketSpeaker)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketSpeaker$$Type = ($PocketSpeaker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketSpeaker_ = $PocketSpeaker$$Type;
}}
declare module "dan200.computercraft.shared.pocket.peripherals.PocketModem" {
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$AbstractPocketUpgrade, $AbstractPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.AbstractPocketUpgrade"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketModem extends $AbstractPocketUpgrade {
static readonly "CODEC": $MapCodec<($PocketModem)>

constructor(arg0: $ItemStack$$Type, arg1: boolean)

public "update"(arg0: $IPocketAccess$$Type, arg1: $IPeripheral$$Type): void
public "getType"(): $UpgradeType<($PocketModem)>
public "createPeripheral"(arg0: $IPocketAccess$$Type): $IPeripheral
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($PocketModem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketModem$$Type = ($PocketModem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketModem_ = $PocketModem$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.monitor.ClientMonitor" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Terminal, $Terminal$$Type} from "dan200.computercraft.core.terminal.Terminal"
import {$MonitorBlockEntity, $MonitorBlockEntity$$Type} from "dan200.computercraft.shared.peripheral.monitor.MonitorBlockEntity"
import {$ClientMonitor$RenderState, $ClientMonitor$RenderState$$Type} from "dan200.computercraft.shared.peripheral.monitor.ClientMonitor$RenderState"

export class $ClientMonitor {

constructor(arg0: $MonitorBlockEntity$$Type)

public "getOrigin"(): $MonitorBlockEntity
public "getTerminal"(): $Terminal
public "pollTerminalChanged"(): boolean
public "getRenderState"<T extends $ClientMonitor$RenderState>(arg0: $Supplier$$Type<(T)>): T
get "origin"(): $MonitorBlockEntity
get "terminal"(): $Terminal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientMonitor$$Type = ($ClientMonitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientMonitor_ = $ClientMonitor$$Type;
}}
declare module "dan200.computercraft.core.computer.ComputerEnvironment" {
import {$WritableMount, $WritableMount$$Type} from "dan200.computercraft.api.filesystem.WritableMount"
import {$MetricsObserver, $MetricsObserver$$Type} from "dan200.computercraft.core.metrics.MetricsObserver"

export interface $ComputerEnvironment {

 "getDay"(): integer
 "getTimeOfDay"(): double
 "createRootMount"(): $WritableMount
 "getMetrics"(): $MetricsObserver
get "day"(): integer
get "timeOfDay"(): double
get "metrics"(): $MetricsObserver
}

export namespace $ComputerEnvironment {
const probejs$$marker: never
}
export class $ComputerEnvironment$$Static implements $ComputerEnvironment {


 "getDay"(): integer
 "getTimeOfDay"(): double
 "createRootMount"(): $WritableMount
 "getMetrics"(): $MetricsObserver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerEnvironment$$Type = ($ComputerEnvironment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerEnvironment_ = $ComputerEnvironment$$Type;
}}
declare module "dan200.computercraft.shared.lectern.CustomLecternBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CustomLecternBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getItem"(): $ItemStack
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "item"(): $ItemStack
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomLecternBlockEntity$$Type = ($CustomLecternBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomLecternBlockEntity_ = $CustomLecternBlockEntity$$Type;
}}
declare module "dan200.computercraft.shared.recipe.BasicRecipeSerialiser" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BasicRecipeSerialiser<T extends $Recipe<(any)>> extends $Record implements $RecipeSerializer<(T)> {

constructor(codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicRecipeSerialiser$$Type<T> = ({"streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (any)>, "codec"?: $MapCodec$$Type<(any)>}) | ([streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (any)>, codec?: $MapCodec$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicRecipeSerialiser_<T> = $BasicRecipeSerialiser$$Type<(T)>;
}}
declare module "dan200.computercraft.api.turtle.TurtleUpgradeType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TurtleUpgradeType extends $Enum<($TurtleUpgradeType)> {
static readonly "PERIPHERAL": $TurtleUpgradeType
static readonly "BOTH": $TurtleUpgradeType
static readonly "TOOL": $TurtleUpgradeType


public static "values"(): ($TurtleUpgradeType)[]
public static "valueOf"(arg0: string): $TurtleUpgradeType
public "isTool"(): boolean
public "isPeripheral"(): boolean
get "tool"(): boolean
get "peripheral"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleUpgradeType$$Type = (("tool") | ("peripheral") | ("both"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleUpgradeType_ = $TurtleUpgradeType$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.diskdrive.DiskDriveBlock" {
import {$DiskDriveState, $DiskDriveState$$Type} from "dan200.computercraft.shared.peripheral.diskdrive.DiskDriveState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$HorizontalContainerBlock, $HorizontalContainerBlock$$Type} from "dan200.computercraft.shared.common.HorizontalContainerBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DiskDriveBlock extends $HorizontalContainerBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STATE": $EnumProperty<($DiskDriveState)>
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
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<U extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(U)>): $BlockEntityTicker<(U)>
public static "defaultUseItemOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiskDriveBlock$$Type = ($DiskDriveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiskDriveBlock_ = $DiskDriveBlock$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.monitor.ClientMonitor$RenderState" {
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"

export interface $ClientMonitor$RenderState extends $AutoCloseable {

 "close"(): void

(): void
}

export namespace $ClientMonitor$RenderState {
const probejs$$marker: never
}
export class $ClientMonitor$RenderState$$Static implements $ClientMonitor$RenderState {


 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientMonitor$RenderState$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientMonitor$RenderState_ = $ClientMonitor$RenderState$$Type;
}}
declare module "dan200.computercraft.shared.turtle.upgrades.TurtleModem" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TurtleVerb, $TurtleVerb$$Type} from "dan200.computercraft.api.turtle.TurtleVerb"
import {$TurtleCommandResult, $TurtleCommandResult$$Type} from "dan200.computercraft.api.turtle.TurtleCommandResult"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$AbstractTurtleUpgrade, $AbstractTurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.AbstractTurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $TurtleModem extends $AbstractTurtleUpgrade {
static readonly "CODEC": $MapCodec<($TurtleModem)>

constructor(arg0: $ItemStack$$Type, arg1: boolean)

public "update"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): void
public "getType"(): $UpgradeType<($TurtleModem)>
public "advanced"(): boolean
public "createPeripheral"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): $IPeripheral
public "getPersistedData"(arg0: $DataComponentPatch$$Type): $DataComponentPatch
public "useTool"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type, arg2: $TurtleVerb$$Type, arg3: $Direction$$Type): $TurtleCommandResult
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($TurtleModem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleModem$$Type = ($TurtleModem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleModem_ = $TurtleModem$$Type;
}}
declare module "dan200.computercraft.core.metrics.Metric$Event" {
import {$LongFunction, $LongFunction$$Type} from "java.util.function.LongFunction"
import {$Metric, $Metric$$Type} from "dan200.computercraft.core.metrics.Metric"

export class $Metric$Event extends $Metric {

constructor(arg0: string, arg1: string, arg2: $LongFunction$$Type<(string)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Metric$Event$$Type = ($Metric$Event);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Metric$Event_ = $Metric$Event$$Type;
}}
declare module "dan200.computercraft.shared.common.IBundledRedstoneBlock" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IBundledRedstoneBlock {

 "getBundledRedstoneOutput"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer

(arg0: $Level, arg1: $BlockPos, arg2: $Direction): integer
}

export namespace $IBundledRedstoneBlock {
const probejs$$marker: never
}
export class $IBundledRedstoneBlock$$Static implements $IBundledRedstoneBlock {


 "getBundledRedstoneOutput"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBundledRedstoneBlock$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $Direction) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBundledRedstoneBlock_ = $IBundledRedstoneBlock$$Type;
}}
declare module "dan200.computercraft.api.turtle.ITurtleAccess" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TurtleAnimation, $TurtleAnimation$$Type} from "dan200.computercraft.api.turtle.TurtleAnimation"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TurtleCommand, $TurtleCommand$$Type} from "dan200.computercraft.api.turtle.TurtleCommand"
import {$UpgradeData, $UpgradeData$$Type} from "dan200.computercraft.api.upgrades.UpgradeData"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"

export interface $ITurtleAccess {

 "getPosition"(): $BlockPos
 "getLevel"(): $Level
 "playAnimation"(arg0: $TurtleAnimation$$Type): void
 "isRemoved"(): boolean
 "getDirection"(): $Direction
 "getInventory"(): $Container
 "teleportTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "getUpgradeWithData"(arg0: $TurtleSide$$Type): $UpgradeData<($ITurtleUpgrade)>
 "getSelectedSlot"(): integer
 "setSelectedSlot"(arg0: integer): void
 "setFuelLevel"(arg0: integer): void
 "getFuelLevel"(): integer
 "getFuelLimit"(): integer
 "setColour"(arg0: integer): void
 "setUpgrade"(arg0: $TurtleSide$$Type, arg1: $UpgradeData$$Type<($ITurtleUpgrade$$Type)>): void
 "getUpgrade"(arg0: $TurtleSide$$Type): $ITurtleUpgrade
 "getPeripheral"(arg0: $TurtleSide$$Type): $IPeripheral
 "consumeFuel"(arg0: integer): boolean
 "getColour"(): integer
 "getUpgradeData"(arg0: $TurtleSide$$Type): $DataComponentPatch
 "setDirection"(arg0: $Direction$$Type): void
 "isFuelNeeded"(): boolean
 "addFuel"(arg0: integer): void
 "executeCommand"(arg0: $TurtleCommand$$Type): $MethodResult
 "setUpgradeData"(arg0: $TurtleSide$$Type, arg1: $DataComponentPatch$$Type): void
 "getOwningPlayer"(): $GameProfile
get "position"(): $BlockPos
get "level"(): $Level
get "removed"(): boolean
get "direction"(): $Direction
get "inventory"(): $Container
get "selectedSlot"(): integer
set "selectedSlot"(value: integer)
set "fuelLevel"(value: integer)
get "fuelLevel"(): integer
get "fuelLimit"(): integer
set "colour"(value: integer)
get "colour"(): integer
set "direction"(value: $Direction$$Type)
get "fuelNeeded"(): boolean
get "owningPlayer"(): $GameProfile
}

export namespace $ITurtleAccess {
const probejs$$marker: never
}
export class $ITurtleAccess$$Static implements $ITurtleAccess {


 "getPosition"(): $BlockPos
 "getLevel"(): $Level
 "playAnimation"(arg0: $TurtleAnimation$$Type): void
 "isRemoved"(): boolean
 "getDirection"(): $Direction
 "getInventory"(): $Container
 "teleportTo"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "getUpgradeWithData"(arg0: $TurtleSide$$Type): $UpgradeData<($ITurtleUpgrade)>
 "getSelectedSlot"(): integer
 "setSelectedSlot"(arg0: integer): void
 "setFuelLevel"(arg0: integer): void
 "getFuelLevel"(): integer
 "getFuelLimit"(): integer
 "setColour"(arg0: integer): void
 "setUpgrade"(arg0: $TurtleSide$$Type, arg1: $UpgradeData$$Type<($ITurtleUpgrade$$Type)>): void
 "getUpgrade"(arg0: $TurtleSide$$Type): $ITurtleUpgrade
 "getPeripheral"(arg0: $TurtleSide$$Type): $IPeripheral
 "consumeFuel"(arg0: integer): boolean
 "getColour"(): integer
 "getUpgradeData"(arg0: $TurtleSide$$Type): $DataComponentPatch
 "setDirection"(arg0: $Direction$$Type): void
 "isFuelNeeded"(): boolean
 "addFuel"(arg0: integer): void
 "executeCommand"(arg0: $TurtleCommand$$Type): $MethodResult
 "setUpgradeData"(arg0: $TurtleSide$$Type, arg1: $DataComponentPatch$$Type): void
 "getOwningPlayer"(): $GameProfile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITurtleAccess$$Type = ($ITurtleAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITurtleAccess_ = $ITurtleAccess$$Type;
}}
declare module "dan200.computercraft.api.upgrades.UpgradeTypeImpl" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$UpgradeBase, $UpgradeBase$$Type} from "dan200.computercraft.api.upgrades.UpgradeBase"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $UpgradeTypeImpl<T extends $UpgradeBase> extends $Record implements $UpgradeType<(T)> {


public static "create"<T extends $UpgradeBase>(arg0: $MapCodec$$Type<(T)>): $UpgradeType<(T)>
public "codec"(): $MapCodec<(T)>
public static "simple"<T extends $UpgradeBase>(arg0: T): $UpgradeType<(T)>
public static "simpleWithCustomItem"<T extends $UpgradeBase>(arg0: $Function$$Type<($ItemStack), (T)>): $UpgradeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeTypeImpl$$Type<T> = ({"codec"?: $MapCodec$$Type<(any)>}) | ([codec?: $MapCodec$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeTypeImpl_<T> = $UpgradeTypeImpl$$Type<(T)>;
}}
declare module "dan200.computercraft.shared.peripheral.diskdrive.DiskDriveState" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $DiskDriveState extends $Enum<($DiskDriveState)> implements $StringRepresentable {
static readonly "INVALID": $DiskDriveState
static readonly "EMPTY": $DiskDriveState
static readonly "FULL": $DiskDriveState


public static "values"(): ($DiskDriveState)[]
public static "valueOf"(arg0: string): $DiskDriveState
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
export type $DiskDriveState$$Type = (("empty") | ("full") | ("invalid"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiskDriveState_ = $DiskDriveState$$Type;
}}
declare module "dan200.computercraft.shared.turtle.blocks.TurtleBlockEntity" {
import {$AbstractComputerBlockEntity, $AbstractComputerBlockEntity$$Type} from "dan200.computercraft.shared.computer.blocks.AbstractComputerBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BasicContainer, $BasicContainer$$Type} from "dan200.computercraft.shared.container.BasicContainer"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$TurtleOverlay, $TurtleOverlay$$Type} from "dan200.computercraft.shared.turtle.TurtleOverlay"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$ComputerFamily, $ComputerFamily$$Type} from "dan200.computercraft.shared.computer.core.ComputerFamily"

export class $TurtleBlockEntity extends $AbstractComputerBlockEntity implements $BasicContainer {
static readonly "INVENTORY_WIDTH": integer
static readonly "INVENTORY_HEIGHT": integer
static readonly "INVENTORY_SIZE": integer
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<($TurtleBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $IntSupplier$$Type, arg4: $ComputerFamily$$Type)

/**
 * 
 * @deprecated
 */
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "getItems"(): $List<(any)>
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getDirection"(): $Direction
public "getOverlay"(): $TurtleOverlay
public "stillValid"(arg0: $Player$$Type): boolean
public "setChanged"(): void
public "getAccess"(): $ITurtleAccess
public "getRenderOffset"(arg0: float): $Vec3
public "neighborChanged"(arg0: $BlockPos$$Type): void
public "onTileEntityChange"(): void
public "getToolRenderAngle"(arg0: $TurtleSide$$Type, arg1: float): float
public "notifyMoveStart"(): void
public "getItemSnapshot"(arg0: integer): $ItemStack
public "transferStateFrom"(arg0: $TurtleBlockEntity$$Type): void
public "notifyMoveEnd"(): void
public "getRenderYaw"(arg0: float): float
public "getFuelLimit"(): integer
public "peripheral"(): $IPeripheral
public "getUpgrade"(arg0: $TurtleSide$$Type): $ITurtleUpgrade
public "getColour"(): integer
public "loadClient"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadServer"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setDirection"(arg0: $Direction$$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "getItem"(arg0: integer): $ItemStack
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public static "defaultSetItems"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $List$$Type<($ItemStack$$Type)>): void
public "getUpdatePacket"(): $Packet<(any)>
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "getMaxStackSize"(): integer
public static "tryClear"(arg0: any): void
public "canReceiveTransferCooldown"(): boolean
public "setTransferCooldown"(arg0: long): void
public "lithium$itemInsertionTestRequiresStackSize1"(): boolean
public "self"(): $Container
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "isMutable"(): boolean
public "getSlots"(): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "clear"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "asContainer"(): $Container
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public "isEmpty"(): boolean
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "clear"(arg0: $ItemPredicate$$Type): void
public "find"(arg0: $ItemPredicate$$Type): integer
public "find"(): integer
public "count"(): integer
public "count"(arg0: $ItemPredicate$$Type): integer
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "countNonEmpty"(): integer
public "getAllItems"(): $List<($ItemStack)>
get "items"(): $List<(any)>
get "direction"(): $Direction
get "overlay"(): $TurtleOverlay
get "access"(): $ITurtleAccess
get "fuelLimit"(): integer
get "colour"(): integer
set "direction"(value: $Direction$$Type)
get "empty"(): boolean
get "containerSize"(): integer
get "updatePacket"(): $Packet<(any)>
get "maxStackSize"(): integer
set "transferCooldown"(value: long)
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleBlockEntity$$Type = ($TurtleBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleBlockEntity_ = $TurtleBlockEntity$$Type;
}}
declare module "dan200.computercraft.shared.computer.core.ServerComputer$Properties" {
import {$TerminalSize, $TerminalSize$$Type} from "dan200.computercraft.shared.computer.core.TerminalSize"
import {$ComputerComponent, $ComputerComponent$$Type} from "dan200.computercraft.api.component.ComputerComponent"

export class $ServerComputer$Properties {


public "label"(arg0: string): $ServerComputer$Properties
public "addComponent"<T>(arg0: $ComputerComponent$$Type<(T)>, arg1: T): $ServerComputer$Properties
public "storageCapacity"(arg0: long): $ServerComputer$Properties
public "terminalSize"(arg0: $TerminalSize$$Type): $ServerComputer$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerComputer$Properties$$Type = ($ServerComputer$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerComputer$Properties_ = $ServerComputer$Properties$$Type;
}}
declare module "dan200.computercraft.shared.command.arguments.RepeatArgumentType$Template" {
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$RepeatArgumentType, $RepeatArgumentType$$Type} from "dan200.computercraft.shared.command.arguments.RepeatArgumentType"
import {$RepeatArgumentType$Info, $RepeatArgumentType$Info$$Type} from "dan200.computercraft.shared.command.arguments.RepeatArgumentType$Info"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $RepeatArgumentType$Template extends $Record implements $ArgumentTypeInfo$Template<($RepeatArgumentType<(any), (any)>)> {

constructor(info: $RepeatArgumentType$Info$$Type, child: $ArgumentTypeInfo$Template$$Type<(any)>, flatten: boolean, some: $SimpleCommandExceptionType$$Type)

public "type"(): $ArgumentTypeInfo<($RepeatArgumentType<(any), (any)>), (any)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "info"(): $RepeatArgumentType$Info
public "child"(): $ArgumentTypeInfo$Template<(any)>
public "flatten"(): boolean
public "instantiate"(arg0: $CommandBuildContext$$Type): $ArgumentType<(any)>
public "some"(): $SimpleCommandExceptionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatArgumentType$Template$$Type = ({"some"?: $SimpleCommandExceptionType$$Type, "info"?: $RepeatArgumentType$Info$$Type, "child"?: $ArgumentTypeInfo$Template$$Type<(never)>, "flatten"?: boolean}) | ([some?: $SimpleCommandExceptionType$$Type, info?: $RepeatArgumentType$Info$$Type, child?: $ArgumentTypeInfo$Template$$Type<(never)>, flatten?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepeatArgumentType$Template_ = $RepeatArgumentType$Template$$Type;
}}
declare module "dan200.computercraft.api.lua.ILuaCallback" {
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"

export interface $ILuaCallback {

 "resume"(arg0: (any)[]): $MethodResult

(arg0: (any)[]): $MethodResult$$Type
}

export namespace $ILuaCallback {
const probejs$$marker: never
}
export class $ILuaCallback$$Static implements $ILuaCallback {


 "resume"(arg0: (any)[]): $MethodResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaCallback$$Type = ((arg0: (any)[]) => $MethodResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILuaCallback_ = $ILuaCallback$$Type;
}}
declare module "dan200.computercraft.shared.pocket.core.PocketBrain" {
import {$UpgradeData, $UpgradeData$$Type} from "dan200.computercraft.api.upgrades.UpgradeData"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ServerComputer$Properties, $ServerComputer$Properties$$Type} from "dan200.computercraft.shared.computer.core.ServerComputer$Properties"
import {$PocketServerComputer, $PocketServerComputer$$Type} from "dan200.computercraft.shared.pocket.core.PocketServerComputer"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$PocketHolder, $PocketHolder$$Type} from "dan200.computercraft.shared.pocket.core.PocketHolder"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PocketBrain implements $IPocketAccess {

constructor(arg0: $PocketHolder$$Type, arg1: $UpgradeData$$Type<($IPocketUpgrade$$Type)>, arg2: integer, arg3: $ServerComputer$Properties$$Type)

public "getPosition"(): $Vec3
public "getEntity"(): $Entity
public "getLevel"(): $ServerLevel
public "setLight"(arg0: integer): void
public "updateItem"(arg0: $ItemStack$$Type): boolean
public "updateHolder"(arg0: $PocketHolder$$Type): void
public "computer"(): $PocketServerComputer
public "setColour"(arg0: integer): void
public "setUpgrade"(arg0: $UpgradeData$$Type<($IPocketUpgrade$$Type)>): void
public "getUpgrade"(): $UpgradeData<($IPocketUpgrade)>
public "getColour"(): integer
public "getLight"(): integer
public "getUpgradeData"(): $DataComponentPatch
public "setUpgradeData"(arg0: $DataComponentPatch$$Type): void
public "invalidatePeripheral"(): void
get "position"(): $Vec3
get "entity"(): $Entity
get "level"(): $ServerLevel
set "light"(value: integer)
set "colour"(value: integer)
set "upgrade"(value: $UpgradeData$$Type<($IPocketUpgrade$$Type)>)
get "upgrade"(): $UpgradeData<($IPocketUpgrade)>
get "colour"(): integer
get "light"(): integer
get "upgradeData"(): $DataComponentPatch
set "upgradeData"(value: $DataComponentPatch$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketBrain$$Type = ($PocketBrain);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketBrain_ = $PocketBrain$$Type;
}}
declare module "dan200.computercraft.shared.pocket.items.PocketComputerItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PocketServerComputer, $PocketServerComputer$$Type} from "dan200.computercraft.shared.pocket.core.PocketServerComputer"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ServerComputerRegistry, $ServerComputerRegistry$$Type} from "dan200.computercraft.shared.computer.core.ServerComputerRegistry"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UpgradeData, $UpgradeData$$Type} from "dan200.computercraft.api.upgrades.UpgradeData"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerComputer, $ServerComputer$$Type} from "dan200.computercraft.shared.computer.core.ServerComputer"
import {$PocketHolder, $PocketHolder$$Type} from "dan200.computercraft.shared.pocket.core.PocketHolder"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ComputerFamily, $ComputerFamily$$Type} from "dan200.computercraft.shared.computer.core.ComputerFamily"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $PocketComputerItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $ComputerFamily$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "open"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $PocketHolder$$Type, arg3: boolean): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getFamily"(): $ComputerFamily
public "tick"(arg0: $ItemStack$$Type, arg1: $PocketHolder$$Type, arg2: boolean): void
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "onCraftedPostProcess"(arg0: $ItemStack$$Type, arg1: $Level$$Type): void
public "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
public "getCreatorModId"(arg0: $ItemStack$$Type): string
public static "getServerComputer"(arg0: $MinecraftServer$$Type, arg1: $ItemStack$$Type): $PocketServerComputer
public static "getServerComputer"(arg0: $ServerComputerRegistry$$Type, arg1: $ItemStack$$Type): $PocketServerComputer
public static "getUpgradeWithData"(arg0: $ItemStack$$Type): $UpgradeData<($IPocketUpgrade)>
public static "isServerComputer"(arg0: $ServerComputer$$Type, arg1: $ItemStack$$Type): boolean
public static "setUpgrade"(arg0: $ItemStack$$Type, arg1: $UpgradeData$$Type<($IPocketUpgrade$$Type)>): void
public static "getUpgrade"(arg0: $ItemStack$$Type): $IPocketUpgrade
get "family"(): $ComputerFamily
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketComputerItem$$Type = ($PocketComputerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketComputerItem_ = $PocketComputerItem$$Type;
}}
declare module "dan200.computercraft.api.upgrades.UpgradeType" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$UpgradeBase, $UpgradeBase$$Type} from "dan200.computercraft.api.upgrades.UpgradeBase"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $UpgradeType<T extends $UpgradeBase> {

 "codec"(): $MapCodec<(T)>

(): $MapCodec$$Type<(T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ComputercraftTurtleUpgradeType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ComputercraftTurtleUpgradeTypeTag
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ComputercraftPocketUpgradeType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ComputercraftPocketUpgradeTypeTag
}

export namespace $UpgradeType {
function create<T extends $UpgradeBase>(arg0: $MapCodec$$Type<(T)>): $UpgradeType<(T)>
function simple<T extends $UpgradeBase>(arg0: T): $UpgradeType<(T)>
function simpleWithCustomItem<T extends $UpgradeBase>(arg0: $Function$$Type<($ItemStack), (T)>): $UpgradeType<(T)>
const probejs$$marker: never
}
export class $UpgradeType$$Static<T extends $UpgradeBase> implements $UpgradeType {


static "create"<T extends $UpgradeBase>(arg0: $MapCodec$$Type<(T)>): $UpgradeType<(T)>
 "codec"(): $MapCodec<(T)>
static "simple"<T extends $UpgradeBase>(arg0: T): $UpgradeType<(T)>
static "simpleWithCustomItem"<T extends $UpgradeBase>(arg0: $Function$$Type<($ItemStack), (T)>): $UpgradeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$$Type<T> = (Special.ComputercraftTurtleUpgradeType) | (Special.ComputercraftPocketUpgradeType) | (() => $MapCodec$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType_<T> = $UpgradeType$$Type<(T)>;
}}
declare module "dan200.computercraft.shared.computer.core.ComputerFamily" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ComputerFamily extends $Enum<($ComputerFamily)> {
static readonly "COMMAND": $ComputerFamily
static readonly "NORMAL": $ComputerFamily
static readonly "ADVANCED": $ComputerFamily


public static "values"(): ($ComputerFamily)[]
public static "valueOf"(arg0: string): $ComputerFamily
public "checkUsable"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerFamily$$Type = (("normal") | ("advanced") | ("command"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerFamily_ = $ComputerFamily$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.modem.wired.CableBlockItem$WiredModem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CableBlock, $CableBlock$$Type} from "dan200.computercraft.shared.peripheral.modem.wired.CableBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CableBlockItem, $CableBlockItem$$Type} from "dan200.computercraft.shared.peripheral.modem.wired.CableBlockItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CableBlockItem$WiredModem extends $CableBlockItem {
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

constructor(arg0: $CableBlock$$Type, arg1: $Item$Properties$$Type)

public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
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
export type $CableBlockItem$WiredModem$$Type = ($CableBlockItem$WiredModem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBlockItem$WiredModem_ = $CableBlockItem$WiredModem$$Type;
}}
declare module "dan200.computercraft.shared.computer.blocks.AbstractComputerBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MenuConstructor, $MenuConstructor$$Type} from "net.minecraft.world.inventory.MenuConstructor"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Nameable, $Nameable$$Type} from "net.minecraft.world.Nameable"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ServerComputer, $ServerComputer$$Type} from "dan200.computercraft.shared.computer.core.ServerComputer"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ComputerFamily, $ComputerFamily$$Type} from "dan200.computercraft.shared.computer.core.ComputerFamily"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractComputerBlockEntity extends $BlockEntity implements $Nameable, $MenuConstructor {
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<($AbstractComputerBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ComputerFamily$$Type)

public "setLabel"(arg0: string): void
public "getLabel"(): string
public "getName"(): $Component
public "getFamily"(): $ComputerFamily
public "getDisplayName"(): $Component
/**
 * 
 * @deprecated
 */
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "hasCustomName"(): boolean
public "setRemoved"(): void
public "getCustomName"(): $Component
public "isAdminOnly"(): boolean
public "getComputerID"(): integer
public "setComputerID"(arg0: integer): void
public "onlyOpCanSetNbt"(): boolean
public "neighborChanged"(arg0: $BlockPos$$Type): void
public "getUpdatePacket"(): $Packet<(any)>
public "getServerComputer"(): $ServerComputer
public "createServerComputer"(): $ServerComputer
public "neighbourShapeChanged"(arg0: $Direction$$Type): void
public "isUsable"(arg0: $Player$$Type): boolean
public "updateRedstone"(): void
public "updateInputsImmediately"(): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
set "label"(value: string)
get "label"(): string
get "name"(): $Component
get "family"(): $ComputerFamily
get "displayName"(): $Component
get "customName"(): $Component
get "adminOnly"(): boolean
get "computerID"(): integer
set "computerID"(value: integer)
get "updatePacket"(): $Packet<(any)>
get "serverComputer"(): $ServerComputer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractComputerBlockEntity$$Type = ($AbstractComputerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractComputerBlockEntity_ = $AbstractComputerBlockEntity$$Type;
}}
declare module "dan200.computercraft.shared.recipe.function.RecipeFunction$Type" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RecipeFunction, $RecipeFunction$$Type} from "dan200.computercraft.shared.recipe.function.RecipeFunction"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RecipeFunction$Type<T extends $RecipeFunction> extends $Record {

constructor(codec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "codec"(): $MapCodec<(T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ComputercraftRecipeFunction
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ComputercraftRecipeFunctionTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeFunction$Type$$Type<T> = (Special.ComputercraftRecipeFunction) | ({"streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (any)>, "codec"?: $MapCodec$$Type<(any)>}) | ([streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (any)>, codec?: $MapCodec$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeFunction$Type_<T> = $RecipeFunction$Type$$Type<(T)>;
}}
declare module "dan200.computercraft.shared.peripheral.monitor.MonitorEdgeState" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $MonitorEdgeState extends $Enum<($MonitorEdgeState)> implements $StringRepresentable {
static readonly "RUD": $MonitorEdgeState
static readonly "RU": $MonitorEdgeState
static readonly "D": $MonitorEdgeState
static readonly "LR": $MonitorEdgeState
static readonly "LU": $MonitorEdgeState
static readonly "L": $MonitorEdgeState
static readonly "LRU": $MonitorEdgeState
static readonly "UD": $MonitorEdgeState
static readonly "R": $MonitorEdgeState
static readonly "RD": $MonitorEdgeState
static readonly "U": $MonitorEdgeState
static readonly "LRUD": $MonitorEdgeState
static readonly "LD": $MonitorEdgeState
static readonly "LUD": $MonitorEdgeState
static readonly "NONE": $MonitorEdgeState
static readonly "LRD": $MonitorEdgeState


public "toString"(): string
public static "values"(): ($MonitorEdgeState)[]
public static "valueOf"(arg0: string): $MonitorEdgeState
public "getSerializedName"(): string
public static "fromConnections"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $MonitorEdgeState
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
export type $MonitorEdgeState$$Type = (("none") | ("l") | ("r") | ("lr") | ("u") | ("d") | ("ud") | ("rd") | ("ld") | ("ru") | ("lu") | ("lrd") | ("rud") | ("lud") | ("lru") | ("lrud"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonitorEdgeState_ = $MonitorEdgeState$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.speaker.SpeakerBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpeakerBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
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
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<U extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(U)>): $BlockEntityTicker<(U)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeakerBlock$$Type = ($SpeakerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpeakerBlock_ = $SpeakerBlock$$Type;
}}
declare module "dan200.computercraft.api.peripheral.WorkMonitor" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $WorkMonitor {

 "canWork"(): boolean
 "shouldWork"(): boolean
 "trackWork"(arg0: long, arg1: $TimeUnit$$Type): void
 "runWork"(arg0: $Runnable$$Type): boolean
}

export namespace $WorkMonitor {
const probejs$$marker: never
}
export class $WorkMonitor$$Static implements $WorkMonitor {


 "canWork"(): boolean
 "shouldWork"(): boolean
 "trackWork"(arg0: long, arg1: $TimeUnit$$Type): void
 "runWork"(arg0: $Runnable$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkMonitor$$Type = ($WorkMonitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkMonitor_ = $WorkMonitor$$Type;
}}
declare module "dan200.computercraft.api.upgrades.UpgradeBase" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export interface $UpgradeBase {

 "getType"(): $UpgradeType<(any)>
 "getCraftingItem"(): $ItemStack
 "getAdjective"(): $Component
 "getUpgradeItem"(arg0: $DataComponentPatch$$Type): $ItemStack
 "isItemSuitable"(arg0: $ItemStack$$Type): boolean
 "getUpgradeData"(arg0: $ItemStack$$Type): $DataComponentPatch
get "type"(): $UpgradeType<(any)>
get "craftingItem"(): $ItemStack
get "adjective"(): $Component
}

export namespace $UpgradeBase {
function getDefaultAdjective(arg0: $ResourceLocation$$Type): string
const probejs$$marker: never
}
export class $UpgradeBase$$Static implements $UpgradeBase {


 "getType"(): $UpgradeType<(any)>
 "getCraftingItem"(): $ItemStack
static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
 "getAdjective"(): $Component
 "getUpgradeItem"(arg0: $DataComponentPatch$$Type): $ItemStack
 "isItemSuitable"(arg0: $ItemStack$$Type): boolean
 "getUpgradeData"(arg0: $ItemStack$$Type): $DataComponentPatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeBase$$Type = ($UpgradeBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeBase_ = $UpgradeBase$$Type;
}}
declare module "dan200.computercraft.shared.peripheral.modem.wired.CableModemVariant" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $CableModemVariant extends $Enum<($CableModemVariant)> implements $StringRepresentable {
static readonly "NorthOff": $CableModemVariant
static readonly "WestOnPeripheral": $CableModemVariant
static readonly "WestOff": $CableModemVariant
static readonly "EastOnPeripheral": $CableModemVariant
static readonly "DownOffPeripheral": $CableModemVariant
static readonly "EastOff": $CableModemVariant
static readonly "SouthOff": $CableModemVariant
static readonly "EastOffPeripheral": $CableModemVariant
static readonly "DownOnPeripheral": $CableModemVariant
static readonly "SouthOnPeripheral": $CableModemVariant
static readonly "UpOn": $CableModemVariant
static readonly "UpOff": $CableModemVariant
static readonly "EastOn": $CableModemVariant
static readonly "SouthOn": $CableModemVariant
static readonly "DownOff": $CableModemVariant
static readonly "DownOn": $CableModemVariant
static readonly "WestOffPeripheral": $CableModemVariant
static readonly "NorthOn": $CableModemVariant
static readonly "UpOnPeripheral": $CableModemVariant
static readonly "WestOn": $CableModemVariant
static readonly "NorthOnPeripheral": $CableModemVariant
static readonly "UpOffPeripheral": $CableModemVariant
static readonly "SouthOffPeripheral": $CableModemVariant
static readonly "NorthOffPeripheral": $CableModemVariant
static readonly "None": $CableModemVariant


public "toString"(): string
public static "values"(): ($CableModemVariant)[]
public static "valueOf"(arg0: string): $CableModemVariant
public static "from"(arg0: $Direction$$Type): $CableModemVariant
public static "from"(arg0: $Direction$$Type, arg1: boolean, arg2: boolean): $CableModemVariant
public "getSerializedName"(): string
public "isPeripheralOn"(): boolean
public "getFacing"(): $Direction
public "isModemOn"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "serializedName"(): string
get "peripheralOn"(): boolean
get "facing"(): $Direction
get "modemOn"(): boolean
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableModemVariant$$Type = (("none") | ("down_off") | ("up_off") | ("north_off") | ("south_off") | ("west_off") | ("east_off") | ("down_on") | ("up_on") | ("north_on") | ("south_on") | ("west_on") | ("east_on") | ("down_off_peripheral") | ("up_off_peripheral") | ("north_off_peripheral") | ("south_off_peripheral") | ("west_off_peripheral") | ("east_off_peripheral") | ("down_on_peripheral") | ("up_on_peripheral") | ("north_on_peripheral") | ("south_on_peripheral") | ("west_on_peripheral") | ("east_on_peripheral"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableModemVariant_ = $CableModemVariant$$Type;
}}
declare module "dan200.computercraft.shared.command.arguments.RepeatArgumentType$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$RepeatArgumentType, $RepeatArgumentType$$Type} from "dan200.computercraft.shared.command.arguments.RepeatArgumentType"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$RepeatArgumentType$Template, $RepeatArgumentType$Template$$Type} from "dan200.computercraft.shared.command.arguments.RepeatArgumentType$Template"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $RepeatArgumentType$Info implements $ArgumentTypeInfo<($RepeatArgumentType<(any), (any)>), ($RepeatArgumentType$Template)> {

constructor()

public "unpack"(arg0: $RepeatArgumentType$$Type<(any), (any)>): $RepeatArgumentType$Template
public "unpack"(arg0: $ArgumentType$$Type<(any)>): $ArgumentTypeInfo$Template<(any)>
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $RepeatArgumentType$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template<(any)>
public "serializeToJson"(arg0: $RepeatArgumentType$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatArgumentType$Info$$Type = ($RepeatArgumentType$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepeatArgumentType$Info_ = $RepeatArgumentType$Info$$Type;
}}
declare module "dan200.computercraft.shared.turtle.upgrades.TurtleSpeaker" {
import {$AbstractTurtleUpgrade, $AbstractTurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.AbstractTurtleUpgrade"
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtleSpeaker extends $AbstractTurtleUpgrade {

constructor(arg0: $ItemStack$$Type)

public "update"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): void
public "getType"(): $UpgradeType<($TurtleSpeaker)>
public "createPeripheral"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): $IPeripheral
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($TurtleSpeaker)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleSpeaker$$Type = ($TurtleSpeaker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleSpeaker_ = $TurtleSpeaker$$Type;
}}
