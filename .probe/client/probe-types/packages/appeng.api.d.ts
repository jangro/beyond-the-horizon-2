declare module "appeng.api.config.PowerMultiplier" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PowerMultiplier extends $Enum<($PowerMultiplier)> {
static readonly "CONFIG": $PowerMultiplier
 "multiplier": double
static readonly "ONE": $PowerMultiplier


public static "values"(): ($PowerMultiplier)[]
public static "valueOf"(arg0: string): $PowerMultiplier
public "multiply"(arg0: double): double
public "divide"(arg0: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerMultiplier$$Type = (("one") | ("config"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PowerMultiplier_ = $PowerMultiplier$$Type;
}}
declare module "appeng.api.config.CpuSelectionMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CpuSelectionMode extends $Enum<($CpuSelectionMode)> {
static readonly "PLAYER_ONLY": $CpuSelectionMode
static readonly "MACHINE_ONLY": $CpuSelectionMode
static readonly "ANY": $CpuSelectionMode


public static "values"(): ($CpuSelectionMode)[]
public static "valueOf"(arg0: string): $CpuSelectionMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CpuSelectionMode$$Type = (("any") | ("player_only") | ("machine_only"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CpuSelectionMode_ = $CpuSelectionMode$$Type;
}}
declare module "appeng.api.util.IConfigManagerListener" {
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Setting, $Setting$$Type} from "appeng.api.config.Setting"

export interface $IConfigManagerListener {

 "onSettingChanged"(arg0: $IConfigManager$$Type, arg1: $Setting$$Type<(any)>): void

(arg0: $IConfigManager, arg1: $Setting<(any)>): void
}

export namespace $IConfigManagerListener {
const probejs$$marker: never
}
export class $IConfigManagerListener$$Static implements $IConfigManagerListener {


 "onSettingChanged"(arg0: $IConfigManager$$Type, arg1: $Setting$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigManagerListener$$Type = ((arg0: $IConfigManager, arg1: $Setting<(any)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigManagerListener_ = $IConfigManagerListener$$Type;
}}
declare module "appeng.api.implementations.blockentities.IMEChest" {
import {$IChestOrDrive, $IChestOrDrive$$Type} from "appeng.api.implementations.blockentities.IChestOrDrive"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$StorageCell, $StorageCell$$Type} from "appeng.api.storage.cells.StorageCell"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$CellState, $CellState$$Type} from "appeng.api.storage.cells.CellState"

export interface $IMEChest extends $IChestOrDrive, $IEnergySource {

 "isPowered"(): boolean
 "getCellInventory"(arg0: integer): $MEStorage
 "getCellCount"(): integer
 "getCellStatus"(arg0: integer): $CellState
 "getCellItem"(arg0: integer): $Item
 "isCellBlinking"(arg0: integer): boolean
 "getOriginalCellInventory"(arg0: integer): $StorageCell
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
 "getActionableNode"(): $IGridNode
get "powered"(): boolean
get "cellCount"(): integer
get "actionableNode"(): $IGridNode
}

export namespace $IMEChest {
function empty(): $IEnergySource
const probejs$$marker: never
}
export class $IMEChest$$Static implements $IMEChest {


 "isPowered"(): boolean
 "getCellInventory"(arg0: integer): $MEStorage
 "getCellCount"(): integer
 "getCellStatus"(arg0: integer): $CellState
 "getCellItem"(arg0: integer): $Item
 "isCellBlinking"(arg0: integer): boolean
 "getOriginalCellInventory"(arg0: integer): $StorageCell
static "empty"(): $IEnergySource
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
 "getActionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMEChest$$Type = ($IMEChest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMEChest_ = $IMEChest$$Type;
}}
declare module "appeng.api.stacks.KeyCounter" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Object2LongMap$Entry, $Object2LongMap$Entry$$Type} from "it.unimi.dsi.fastutil.objects.Object2LongMap$Entry"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $KeyCounter implements $Iterable<($Object2LongMap$Entry<($AEKey)>)> {

constructor()

public "remove"(arg0: $AEKey$$Type): long
public "remove"(arg0: $AEKey$$Type, arg1: long): void
public "size"(): integer
public "reset"(): void
public "get"(arg0: $AEKey$$Type): long
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: $AEKey$$Type, arg1: long): void
public "iterator"(): $Iterator<($Object2LongMap$Entry<($AEKey)>)>
public "addAll"(arg0: $KeyCounter$$Type): void
public "set"(arg0: $AEKey$$Type, arg1: long): void
public "keySet"(): $Set<($AEKey)>
public "removeAll"(arg0: $KeyCounter$$Type): void
public "getFirstEntry"(): $Object2LongMap$Entry<($AEKey)>
public "getFirstEntry"<T extends $AEKey>(arg0: $Class$$Type<(T)>): $Object2LongMap$Entry<($AEKey)>
public "removeEmptySubmaps"(): void
public "findFuzzy"(arg0: $AEKey$$Type, arg1: $FuzzyMode$$Type): $Collection<($Object2LongMap$Entry<($AEKey)>)>
public "removeZeros"(): void
public "getFirstKey"(): $AEKey
public "getFirstKey"<T extends $AEKey>(arg0: $Class$$Type<(T)>): T
public "spliterator"(): $Spliterator<($Object2LongMap$Entry<($AEKey)>)>
public "forEach"(arg0: $Consumer$$Type<($Object2LongMap$Entry<($AEKey)>)>): void
[Symbol.iterator](): IterableIterator<$Object2LongMap$Entry<($AEKey)>>;
get "empty"(): boolean
get "firstEntry"(): $Object2LongMap$Entry<($AEKey)>
get "firstKey"(): $AEKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyCounter$$Type = ($KeyCounter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyCounter_ = $KeyCounter$$Type;
}}
declare module "appeng.api.networking.IGridNodeListener$State" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $IGridNodeListener$State extends $Enum<($IGridNodeListener$State)> {
static readonly "CHANNEL": $IGridNodeListener$State
static readonly "POWER": $IGridNodeListener$State
static readonly "GRID_BOOT": $IGridNodeListener$State


public static "values"(): ($IGridNodeListener$State)[]
public static "valueOf"(arg0: string): $IGridNodeListener$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridNodeListener$State$$Type = (("power") | ("channel") | ("grid_boot"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridNodeListener$State_ = $IGridNodeListener$State$$Type;
}}
declare module "appeng.api.stacks.AmountFormat" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $AmountFormat extends $Enum<($AmountFormat)> {
static readonly "SLOT_LARGE_FONT": $AmountFormat
static readonly "SLOT": $AmountFormat
static readonly "FULL": $AmountFormat


public static "values"(): ($AmountFormat)[]
public static "valueOf"(arg0: string): $AmountFormat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmountFormat$$Type = (("full") | ("slot") | ("slot_large_font"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmountFormat_ = $AmountFormat$$Type;
}}
declare module "appeng.api.crafting.InvalidPatternTooltipStrategy" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PatternDetailsTooltip, $PatternDetailsTooltip$$Type} from "appeng.api.crafting.PatternDetailsTooltip"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export interface $InvalidPatternTooltipStrategy {

 "getTooltip"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Exception$$Type, arg3: $TooltipFlag$$Type): $PatternDetailsTooltip

(arg0: $ItemStack, arg1: $Level, arg2: $Exception, arg3: $TooltipFlag): $PatternDetailsTooltip$$Type
}

export namespace $InvalidPatternTooltipStrategy {
const probejs$$marker: never
}
export class $InvalidPatternTooltipStrategy$$Static implements $InvalidPatternTooltipStrategy {


 "getTooltip"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Exception$$Type, arg3: $TooltipFlag$$Type): $PatternDetailsTooltip
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvalidPatternTooltipStrategy$$Type = ((arg0: $ItemStack, arg1: $Level, arg2: $Exception, arg3: $TooltipFlag) => $PatternDetailsTooltip$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InvalidPatternTooltipStrategy_ = $InvalidPatternTooltipStrategy$$Type;
}}
declare module "appeng.api.orientation.RelativeSide" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $RelativeSide extends $Enum<($RelativeSide)> {
static readonly "TOP": $RelativeSide
static readonly "LEFT": $RelativeSide
static readonly "FRONT": $RelativeSide
static readonly "BACK": $RelativeSide
static readonly "RIGHT": $RelativeSide
static readonly "BOTTOM": $RelativeSide


public static "values"(): ($RelativeSide)[]
public static "valueOf"(arg0: string): $RelativeSide
public static "fromUnrotatedSide"(arg0: $Direction$$Type): $RelativeSide
public "getUnrotatedSide"(): $Direction
get "unrotatedSide"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RelativeSide$$Type = (("front") | ("back") | ("top") | ("bottom") | ("left") | ("right"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RelativeSide_ = $RelativeSide$$Type;
}}
declare module "appeng.api.parts.IPartHost" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$DimensionalBlockPos, $DimensionalBlockPos$$Type} from "appeng.api.util.DimensionalBlockPos"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$ICustomCableConnection, $ICustomCableConnection$$Type} from "appeng.api.parts.ICustomCableConnection"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$SelectedPart, $SelectedPart$$Type} from "appeng.api.parts.SelectedPart"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IFacadeContainer, $IFacadeContainer$$Type} from "appeng.api.parts.IFacadeContainer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export interface $IPartHost extends $ICustomCableConnection {

 "isEmpty"(): boolean
 "getLocation"(): $DimensionalBlockPos
 "cleanup"(): void
 "clearContainer"(): void
 "getColor"(): $AEColor
 "isBlocked"(arg0: $Direction$$Type): boolean
 "getBlockEntity"(): $BlockEntity
 "notifyNeighbors"(): void
 "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
 "getFacadeContainer"(): $IFacadeContainer
 "removePartFromSide"(arg0: $Direction$$Type): void
 "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
 "notifyNeighborNow"(arg0: $Direction$$Type): void
 "isInWorld"(): boolean
 "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
 "markForSave"(): void
 "partChanged"(): void
 "removePart"(arg0: $IPart$$Type): boolean
 "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
 "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
 "markForUpdate"(): void
 "getPart"(arg0: $Direction$$Type): $IPart
 "hasRedstone"(): boolean
 "getCableConnectionLength"(arg0: $AECableType$$Type): float
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "color"(): $AEColor
get "blockEntity"(): $BlockEntity
get "facadeContainer"(): $IFacadeContainer
get "inWorld"(): boolean
}

export namespace $IPartHost {
const probejs$$marker: never
}
export class $IPartHost$$Static implements $IPartHost {


 "isEmpty"(): boolean
 "getLocation"(): $DimensionalBlockPos
 "cleanup"(): void
 "clearContainer"(): void
 "getColor"(): $AEColor
 "isBlocked"(arg0: $Direction$$Type): boolean
 "getBlockEntity"(): $BlockEntity
 "notifyNeighbors"(): void
 "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
 "getFacadeContainer"(): $IFacadeContainer
 "removePartFromSide"(arg0: $Direction$$Type): void
 "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
 "notifyNeighborNow"(arg0: $Direction$$Type): void
 "isInWorld"(): boolean
 "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
 "markForSave"(): void
 "partChanged"(): void
 "removePart"(arg0: $IPart$$Type): boolean
 "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
 "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
 "markForUpdate"(): void
 "getPart"(arg0: $Direction$$Type): $IPart
 "hasRedstone"(): boolean
 "getCableConnectionLength"(arg0: $AECableType$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartHost$$Type = ($IPartHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartHost_ = $IPartHost$$Type;
}}
declare module "appeng.api.networking.IGrid" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ITickManager, $ITickManager$$Type} from "appeng.api.networking.ticking.ITickManager"
import {$IPathingService, $IPathingService$$Type} from "appeng.api.networking.pathing.IPathingService"
import {$IStorageService, $IStorageService$$Type} from "appeng.api.networking.storage.IStorageService"
import {$GridEvent, $GridEvent$$Type} from "appeng.api.networking.events.GridEvent"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$IGridService, $IGridService$$Type} from "appeng.api.networking.IGridService"
import {$ISpatialService, $ISpatialService$$Type} from "appeng.api.networking.spatial.ISpatialService"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IEnergyService, $IEnergyService$$Type} from "appeng.api.networking.energy.IEnergyService"
import {$ICraftingService, $ICraftingService$$Type} from "appeng.api.networking.crafting.ICraftingService"

export interface $IGrid {

 "size"(): integer
 "isEmpty"(): boolean
 "export"(arg0: $JsonWriter$$Type): void
 "getService"<C extends $IGridService>(arg0: $Class$$Type<(C)>): C
 "postEvent"<T extends $GridEvent>(arg0: T): T
 "getMachineClasses"(): $Iterable<($Class<(any)>)>
 "getMachineNodes"(arg0: $Class$$Type<(any)>): $Iterable<($IGridNode)>
 "getActiveMachines"<T>(arg0: $Class$$Type<(T)>): $Set<(T)>
 "getStorageService"(): $IStorageService
 "getEnergyService"(): $IEnergyService
 "getCraftingService"(): $ICraftingService
 "getPathingService"(): $IPathingService
 "getSpatialService"(): $ISpatialService
 "getMachines"<T>(arg0: $Class$$Type<(T)>): $Set<(T)>
 "getTickManager"(): $ITickManager
 "getPivot"(): $IGridNode
 "getNodes"(): $Iterable<($IGridNode)>
get "empty"(): boolean
get "machineClasses"(): $Iterable<($Class<(any)>)>
get "storageService"(): $IStorageService
get "energyService"(): $IEnergyService
get "craftingService"(): $ICraftingService
get "pathingService"(): $IPathingService
get "spatialService"(): $ISpatialService
get "tickManager"(): $ITickManager
get "pivot"(): $IGridNode
get "nodes"(): $Iterable<($IGridNode)>
}

export namespace $IGrid {
const probejs$$marker: never
}
export class $IGrid$$Static implements $IGrid {


 "size"(): integer
 "isEmpty"(): boolean
 "export"(arg0: $JsonWriter$$Type): void
 "getService"<C extends $IGridService>(arg0: $Class$$Type<(C)>): C
 "postEvent"<T extends $GridEvent>(arg0: T): T
 "getMachineClasses"(): $Iterable<($Class<(any)>)>
 "getMachineNodes"(arg0: $Class$$Type<(any)>): $Iterable<($IGridNode)>
 "getActiveMachines"<T>(arg0: $Class$$Type<(T)>): $Set<(T)>
 "getStorageService"(): $IStorageService
 "getEnergyService"(): $IEnergyService
 "getCraftingService"(): $ICraftingService
 "getPathingService"(): $IPathingService
 "getSpatialService"(): $ISpatialService
 "getMachines"<T>(arg0: $Class$$Type<(T)>): $Set<(T)>
 "getTickManager"(): $ITickManager
 "getPivot"(): $IGridNode
 "getNodes"(): $Iterable<($IGridNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGrid$$Type = ($IGrid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGrid_ = $IGrid$$Type;
}}
declare module "appeng.api.implementations.IPowerChannelState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPowerChannelState {

 "isActive"(): boolean
 "isPowered"(): boolean
get "active"(): boolean
get "powered"(): boolean
}

export namespace $IPowerChannelState {
const probejs$$marker: never
}
export class $IPowerChannelState$$Static implements $IPowerChannelState {


 "isActive"(): boolean
 "isPowered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPowerChannelState$$Type = ($IPowerChannelState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPowerChannelState_ = $IPowerChannelState$$Type;
}}
declare module "appeng.api.networking.crafting.ICraftingProvider" {
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IGridNodeService, $IGridNodeService$$Type} from "appeng.api.networking.IGridNodeService"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $ICraftingProvider extends $IGridNodeService {

 "isBusy"(): boolean
 "getAvailablePatterns"(): $List<($IPatternDetails)>
 "getPatternPriority"(): integer
 "getEmitableItems"(): $Set<($AEKey)>
 "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[]): boolean
get "busy"(): boolean
get "availablePatterns"(): $List<($IPatternDetails)>
get "patternPriority"(): integer
get "emitableItems"(): $Set<($AEKey)>
}

export namespace $ICraftingProvider {
function requestUpdate(arg0: $IManagedGridNode$$Type): void
const probejs$$marker: never
}
export class $ICraftingProvider$$Static implements $ICraftingProvider {


 "isBusy"(): boolean
 "getAvailablePatterns"(): $List<($IPatternDetails)>
 "getPatternPriority"(): integer
 "getEmitableItems"(): $Set<($AEKey)>
static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
 "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[]): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingProvider$$Type = ($ICraftingProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingProvider_ = $ICraftingProvider$$Type;
}}
declare module "appeng.api.inventories.InternalInventory" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemTransfer, $ItemTransfer$$Type} from "appeng.api.inventories.ItemTransfer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $InternalInventory extends $Iterable<($ItemStack)>, $ItemTransfer {

 "size"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "iterator"(): $Iterator<($ItemStack)>
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getStackInSlot"(arg0: integer): $ItemStack
 "getRedstoneSignal"(): integer
 "getSubInventory"(arg0: integer, arg1: integer): $InternalInventory
 "removeSimilarItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "sendChangeNotification"(arg0: integer): void
 "setItemDirect"(arg0: integer, arg1: $ItemStack$$Type): void
 "toItemHandler"(): $IItemHandler
 "toContainer"(): $Container
 "getSlotInv"(arg0: integer): $InternalInventory
 "simulateAdd"(arg0: $ItemStack$$Type): $ItemStack
 "removeItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "addItems"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "addItems"(arg0: $ItemStack$$Type): $ItemStack
 "spliterator"(): $Spliterator<($ItemStack)>
 "forEach"(arg0: $Consumer$$Type<($ItemStack)>): void
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "redstoneSignal"(): integer
}

export namespace $InternalInventory {
function empty(): $InternalInventory
function wrapExternal(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ItemTransfer
const probejs$$marker: never
}
export class $InternalInventory$$Static implements $InternalInventory {


 "size"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "iterator"(): $Iterator<($ItemStack)>
static "empty"(): $InternalInventory
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getStackInSlot"(arg0: integer): $ItemStack
 "getRedstoneSignal"(): integer
 "getSubInventory"(arg0: integer, arg1: integer): $InternalInventory
 "removeSimilarItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "sendChangeNotification"(arg0: integer): void
 "setItemDirect"(arg0: integer, arg1: $ItemStack$$Type): void
static "wrapExternal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ItemTransfer
 "toItemHandler"(): $IItemHandler
 "toContainer"(): $Container
 "getSlotInv"(arg0: integer): $InternalInventory
 "simulateAdd"(arg0: $ItemStack$$Type): $ItemStack
 "removeItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "addItems"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "addItems"(arg0: $ItemStack$$Type): $ItemStack
 "spliterator"(): $Spliterator<($ItemStack)>
 "forEach"(arg0: $Consumer$$Type<($ItemStack)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalInventory$$Type = ($InternalInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InternalInventory_ = $InternalInventory$$Type;
}}
declare module "appeng.api.networking.IGridConnection" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $IGridConnection {

 "b"(): $IGridNode
 "a"(): $IGridNode
 "destroy"(): void
 "getDirection"(arg0: $IGridNode$$Type): $Direction
 "getUsedChannels"(): integer
 "isInWorld"(): boolean
 "getOtherSide"(arg0: $IGridNode$$Type): $IGridNode
get "usedChannels"(): integer
get "inWorld"(): boolean
}

export namespace $IGridConnection {
const probejs$$marker: never
}
export class $IGridConnection$$Static implements $IGridConnection {


 "b"(): $IGridNode
 "a"(): $IGridNode
 "destroy"(): void
 "getDirection"(arg0: $IGridNode$$Type): $Direction
 "getUsedChannels"(): integer
 "isInWorld"(): boolean
 "getOtherSide"(arg0: $IGridNode$$Type): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridConnection$$Type = ($IGridConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridConnection_ = $IGridConnection$$Type;
}}
declare module "appeng.api.networking.crafting.ICraftingSimulationRequester" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"

export interface $ICraftingSimulationRequester {

 "getGridNode"(): $IGridNode
 "getActionSource"(): $IActionSource

(): $IActionSource$$Type
get "gridNode"(): $IGridNode
get "actionSource"(): $IActionSource
}

export namespace $ICraftingSimulationRequester {
const probejs$$marker: never
}
export class $ICraftingSimulationRequester$$Static implements $ICraftingSimulationRequester {


 "getGridNode"(): $IGridNode
 "getActionSource"(): $IActionSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingSimulationRequester$$Type = (() => $IActionSource$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingSimulationRequester_ = $ICraftingSimulationRequester$$Type;
}}
declare module "appeng.api.crafting.IPatternDetails" {
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$List, $List$$Type} from "java.util.List"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PatternDetailsTooltip, $PatternDetailsTooltip$$Type} from "appeng.api.crafting.PatternDetailsTooltip"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$IPatternDetails$PatternInputSink, $IPatternDetails$PatternInputSink$$Type} from "appeng.api.crafting.IPatternDetails$PatternInputSink"
import {$IPatternDetails$IInput, $IPatternDetails$IInput$$Type} from "appeng.api.crafting.IPatternDetails$IInput"

export interface $IPatternDetails {

 "getInputs"(): ($IPatternDetails$IInput)[]
 "getDefinition"(): $AEItemKey
 "getTooltip"(arg0: $Level$$Type, arg1: $TooltipFlag$$Type): $PatternDetailsTooltip
 "getOutputs"(): $List<($GenericStack)>
 "getPrimaryOutput"(): $GenericStack
 "pushInputsToExternalInventory"(arg0: ($KeyCounter$$Type)[], arg1: $IPatternDetails$PatternInputSink$$Type): void
 "supportsPushInputsToExternalInventory"(): boolean
get "inputs"(): ($IPatternDetails$IInput)[]
get "definition"(): $AEItemKey
get "outputs"(): $List<($GenericStack)>
get "primaryOutput"(): $GenericStack
}

export namespace $IPatternDetails {
const probejs$$marker: never
}
export class $IPatternDetails$$Static implements $IPatternDetails {


 "getInputs"(): ($IPatternDetails$IInput)[]
 "getDefinition"(): $AEItemKey
 "getTooltip"(arg0: $Level$$Type, arg1: $TooltipFlag$$Type): $PatternDetailsTooltip
 "getOutputs"(): $List<($GenericStack)>
 "getPrimaryOutput"(): $GenericStack
 "pushInputsToExternalInventory"(arg0: ($KeyCounter$$Type)[], arg1: $IPatternDetails$PatternInputSink$$Type): void
 "supportsPushInputsToExternalInventory"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPatternDetails$$Type = ($IPatternDetails);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPatternDetails_ = $IPatternDetails$$Type;
}}
declare module "appeng.api.networking.energy.IEnergySource" {
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"

export interface $IEnergySource {

 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double

(arg0: double, arg1: $Actionable, arg2: $PowerMultiplier): double
}

export namespace $IEnergySource {
function empty(): $IEnergySource
const probejs$$marker: never
}
export class $IEnergySource$$Static implements $IEnergySource {


static "empty"(): $IEnergySource
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergySource$$Type = ((arg0: double, arg1: $Actionable, arg2: $PowerMultiplier) => double);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergySource_ = $IEnergySource$$Type;
}}
declare module "appeng.api.stacks.AEKeyType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEKeyFilter, $AEKeyFilter$$Type} from "appeng.api.storage.AEKeyFilter"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AmountFormat, $AmountFormat$$Type} from "appeng.api.stacks.AmountFormat"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AEKeyType {
static readonly "CODEC": $Codec<($AEKeyType)>
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($AEKeyType)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKeyType)>

constructor(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<($AEKey$$Type)>, arg2: $Component$$Type)

public static "items"(): $AEKeyType
public "getKeyClass"(): $Class<($AEKey)>
public "getDescription"(): $Component
public "toString"(): string
public "contains"(arg0: $AEKey$$Type): boolean
public "filter"(): $AEKeyFilter
public "getId"(): $ResourceLocation
public "tryCast"(arg0: $AEKey$$Type): $AEKey
public "getTagNames"(): $Stream<($TagKey<(any)>)>
public static "fluids"(): $AEKeyType
public "codec"(): $MapCodec<($AEKey)>
public "getAmountPerUnit"(): integer
public "getAmountPerByte"(): integer
public "getAmountPerOperation"(): integer
public "getRawId"(): byte
public static "fromRawId"(arg0: integer): $AEKeyType
public "getUnitSymbol"(): string
public "formatAmount"(arg0: long, arg1: $AmountFormat$$Type): string
public "loadKeyFromTag"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $AEKey
public "readFromPacket"(arg0: $RegistryFriendlyByteBuf$$Type): $AEKey
public "supportsFuzzyRangeSearch"(): boolean
get "keyClass"(): $Class<($AEKey)>
get "description"(): $Component
get "id"(): $ResourceLocation
get "tagNames"(): $Stream<($TagKey<(any)>)>
get "amountPerUnit"(): integer
get "amountPerByte"(): integer
get "amountPerOperation"(): integer
get "rawId"(): byte
get "unitSymbol"(): string
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Ae2Keytypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.Ae2KeytypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEKeyType$$Type = (Special.Ae2Keytypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEKeyType_ = $AEKeyType$$Type;
}}
declare module "appeng.api.networking.crafting.ICraftingPlan" {
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$Map, $Map$$Type} from "java.util.Map"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"

export interface $ICraftingPlan {

 "bytes"(): long
 "finalOutput"(): $GenericStack
 "multiplePaths"(): boolean
 "usedItems"(): $KeyCounter
 "emittedItems"(): $KeyCounter
 "patternTimes"(): $Map<($IPatternDetails), (long)>
 "simulation"(): boolean
 "missingItems"(): $KeyCounter
}

export namespace $ICraftingPlan {
const probejs$$marker: never
}
export class $ICraftingPlan$$Static implements $ICraftingPlan {


 "bytes"(): long
 "finalOutput"(): $GenericStack
 "multiplePaths"(): boolean
 "usedItems"(): $KeyCounter
 "emittedItems"(): $KeyCounter
 "patternTimes"(): $Map<($IPatternDetails), (long)>
 "simulation"(): boolean
 "missingItems"(): $KeyCounter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingPlan$$Type = ($ICraftingPlan);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingPlan_ = $ICraftingPlan$$Type;
}}
declare module "appeng.api.storage.ITerminalHost" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ILinkStatus, $ILinkStatus$$Type} from "appeng.api.storage.ILinkStatus"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$ISubMenuHost, $ISubMenuHost$$Type} from "appeng.api.storage.ISubMenuHost"

export interface $ITerminalHost extends $IUpgradeableObject, $IConfigurableObject, $ISubMenuHost {

 "getInventory"(): $MEStorage
 "getLinkStatus"(): $ILinkStatus
 "getCloseHotkey"(): string
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getUpgrades"(): $IUpgradeInventory
 "getConfigManager"(): $IConfigManager
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
get "inventory"(): $MEStorage
get "linkStatus"(): $ILinkStatus
get "closeHotkey"(): string
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "mainMenuIcon"(): $ItemStack
}

export namespace $ITerminalHost {
const probejs$$marker: never
}
export class $ITerminalHost$$Static implements $ITerminalHost {


 "getInventory"(): $MEStorage
 "getLinkStatus"(): $ILinkStatus
 "getCloseHotkey"(): string
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getUpgrades"(): $IUpgradeInventory
 "getConfigManager"(): $IConfigManager
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalHost$$Type = ($ITerminalHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalHost_ = $ITerminalHost$$Type;
}}
declare module "appeng.api.config.PowerUnit" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $PowerUnit extends $Enum<($PowerUnit)> {
 "conversionRatio": double
static readonly "AE": $PowerUnit
readonly "unlocalizedName": string
readonly "symbolName": string
static readonly "FE": $PowerUnit


public static "values"(): ($PowerUnit)[]
public static "valueOf"(arg0: string): $PowerUnit
public "textComponent"(): $Component
public "convertTo"(arg0: $PowerUnit$$Type, arg1: double): double
public "getSymbolName"(): string
get "symbolName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerUnit$$Type = (("ae") | ("fe"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PowerUnit_ = $PowerUnit$$Type;
}}
declare module "appeng.api.stacks.AEItemKey" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AEKeyFilter, $AEKeyFilter$$Type} from "appeng.api.storage.AEKeyFilter"
import {$List, $List$$Type} from "java.util.List"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AEItemKey extends $AEKey {
static readonly "CODEC": $Codec<($AEItemKey)>
static readonly "MAP_CODEC": $MapCodec<($AEItemKey)>
static readonly "TYPE_FIELD": string
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKey)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKey)>


public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $Ingredient$$Type): boolean
public "matches"(arg0: $ItemStack$$Type): boolean
public static "matches"(arg0: $AEKey$$Type, arg1: $ItemStack$$Type): boolean
public static "of"(arg0: $ItemStack$$Type): $AEItemKey
public static "of"(arg0: $ItemLike$$Type): $AEItemKey
public static "filter"(): $AEKeyFilter
public "getId"(): $ResourceLocation
public "getType"(): $AEKeyType
public static "is"(arg0: $AEKey$$Type): boolean
public "is"(arg0: $ItemLike$$Type): boolean
public "getItem"(): $Item
public "toStack"(arg0: integer): $ItemStack
public "toStack"(): $ItemStack
public static "fromTag"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $AEItemKey
public "isDamaged"(): boolean
public "toTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getMaxStackSize"(): integer
public "getFuzzySearchValue"(): integer
public "wrapForDisplayOrFilter"(): $ItemStack
public "getFuzzySearchMaxValue"(): integer
public "getReadOnlyStack"(): $ItemStack
public "hasComponents"(): boolean
public "dropSecondary"(): $AEItemKey
public "getPrimaryKey"(): any
public "writeToPacket"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "isTagged"(arg0: $TagKey$$Type<(any)>): boolean
public static "fromPacket"(arg0: $RegistryFriendlyByteBuf$$Type): $AEItemKey
public "addDrops"(arg0: long, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $Level$$Type, arg3: $BlockPos$$Type): void
get "id"(): $ResourceLocation
get "type"(): $AEKeyType
get "item"(): $Item
get "damaged"(): boolean
get "maxStackSize"(): integer
get "fuzzySearchValue"(): integer
get "fuzzySearchMaxValue"(): integer
get "readOnlyStack"(): $ItemStack
get "primaryKey"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEItemKey$$Type = ($AEItemKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEItemKey_ = $AEItemKey$$Type;
}}
declare module "appeng.api.networking.energy.IEnergyService" {
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$IGridService, $IGridService$$Type} from "appeng.api.networking.IGridService"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"

export interface $IEnergyService extends $IGridService, $IEnergySource {

 "getIdlePowerUsage"(): double
 "getChannelPowerUsage"(): double
 "getAvgPowerUsage"(): double
 "getAvgPowerInjection"(): double
 "isNetworkPowered"(): boolean
 "getMaxStoredPower"(): double
 "getEnergyDemand"(arg0: double): double
 "injectPower"(arg0: double, arg1: $Actionable$$Type): double
 "getStoredPower"(): double
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
get "idlePowerUsage"(): double
get "channelPowerUsage"(): double
get "avgPowerUsage"(): double
get "avgPowerInjection"(): double
get "networkPowered"(): boolean
get "maxStoredPower"(): double
get "storedPower"(): double
}

export namespace $IEnergyService {
function empty(): $IEnergySource
const probejs$$marker: never
}
export class $IEnergyService$$Static implements $IEnergyService {


 "getIdlePowerUsage"(): double
 "getChannelPowerUsage"(): double
 "getAvgPowerUsage"(): double
 "getAvgPowerInjection"(): double
 "isNetworkPowered"(): boolean
 "getMaxStoredPower"(): double
 "getEnergyDemand"(arg0: double): double
 "injectPower"(arg0: double, arg1: $Actionable$$Type): double
 "getStoredPower"(): double
static "empty"(): $IEnergySource
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyService$$Type = ($IEnergyService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyService_ = $IEnergyService$$Type;
}}
declare module "appeng.api.networking.IGridNodeService" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IGridNodeService {

}

export namespace $IGridNodeService {
const probejs$$marker: never
}
export class $IGridNodeService$$Static implements $IGridNodeService {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridNodeService$$Type = ($IGridNodeService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridNodeService_ = $IGridNodeService$$Type;
}}
declare module "appeng.api.util.AECableType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$AECableVariant, $AECableVariant$$Type} from "appeng.api.util.AECableVariant"
import {$AECableSize, $AECableSize$$Type} from "appeng.api.util.AECableSize"

export class $AECableType extends $Enum<($AECableType)> {
static readonly "GLASS": $AECableType
static readonly "VALIDCABLES": ($AECableType)[]
static readonly "COVERED": $AECableType
static readonly "NONE": $AECableType
static readonly "SMART": $AECableType
static readonly "DENSE_COVERED": $AECableType
static readonly "DENSE_SMART": $AECableType


public "size"(): $AECableSize
public static "values"(): ($AECableType)[]
public static "min"(arg0: $AECableType$$Type, arg1: $AECableType$$Type): $AECableType
public static "max"(arg0: $AECableType$$Type, arg1: $AECableType$$Type): $AECableType
public static "valueOf"(arg0: string): $AECableType
public "isValid"(): boolean
public "variant"(): $AECableVariant
public "isDense"(): boolean
public "isSmart"(): boolean
get "valid"(): boolean
get "dense"(): boolean
get "smart"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AECableType$$Type = (("none") | ("glass") | ("covered") | ("smart") | ("dense_covered") | ("dense_smart"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AECableType_ = $AECableType$$Type;
}}
declare module "appeng.api.networking.spatial.ISpatialService" {
import {$IGridService, $IGridService$$Type} from "appeng.api.networking.IGridService"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ISpatialService extends $IGridService {

 "getLevel"(): $Level
 "getMin"(): $BlockPos
 "getMax"(): $BlockPos
 "currentEfficiency"(): float
 "requiredPower"(): long
 "hasRegion"(): boolean
 "isValidRegion"(): boolean
get "level"(): $Level
get "min"(): $BlockPos
get "max"(): $BlockPos
get "validRegion"(): boolean
}

export namespace $ISpatialService {
const probejs$$marker: never
}
export class $ISpatialService$$Static implements $ISpatialService {


 "getLevel"(): $Level
 "getMin"(): $BlockPos
 "getMax"(): $BlockPos
 "currentEfficiency"(): float
 "requiredPower"(): long
 "hasRegion"(): boolean
 "isValidRegion"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpatialService$$Type = ($ISpatialService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpatialService_ = $ISpatialService$$Type;
}}
declare module "appeng.api.networking.crafting.CalculationStrategy" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CalculationStrategy extends $Enum<($CalculationStrategy)> {
static readonly "CRAFT_LESS": $CalculationStrategy
static readonly "REPORT_MISSING_ITEMS": $CalculationStrategy


public static "values"(): ($CalculationStrategy)[]
public static "valueOf"(arg0: string): $CalculationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CalculationStrategy$$Type = (("report_missing_items") | ("craft_less"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CalculationStrategy_ = $CalculationStrategy$$Type;
}}
declare module "appeng.api.util.DimensionalBlockPos" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $DimensionalBlockPos {

constructor(arg0: $Level$$Type, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type)
constructor(arg0: $BlockEntity$$Type)
constructor(arg0: $DimensionalBlockPos$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "isInWorld"(arg0: $LevelAccessor$$Type): boolean
get "level"(): $Level
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionalBlockPos$$Type = ($DimensionalBlockPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionalBlockPos_ = $DimensionalBlockPos$$Type;
}}
declare module "appeng.api.storage.AEKeyFilter" {
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $AEKeyFilter {

 "matches"(arg0: $AEKey$$Type): boolean

(arg0: $AEKey): boolean
}

export namespace $AEKeyFilter {
function none(): $AEKeyFilter
const probejs$$marker: never
}
export class $AEKeyFilter$$Static implements $AEKeyFilter {


 "matches"(arg0: $AEKey$$Type): boolean
static "none"(): $AEKeyFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEKeyFilter$$Type = ((arg0: $AEKey) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEKeyFilter_ = $AEKeyFilter$$Type;
}}
declare module "appeng.api.inventories.BaseInternalInventory" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemTransfer, $ItemTransfer$$Type} from "appeng.api.inventories.ItemTransfer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BaseInternalInventory implements $InternalInventory {

constructor()

public "toItemHandler"(): $IItemHandler
public "size"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($ItemStack)>
public static "empty"(): $InternalInventory
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getStackInSlot"(arg0: integer): $ItemStack
public "getRedstoneSignal"(): integer
public "getSubInventory"(arg0: integer, arg1: integer): $InternalInventory
public "removeSimilarItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
public "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
public "sendChangeNotification"(arg0: integer): void
public "setItemDirect"(arg0: integer, arg1: $ItemStack$$Type): void
public static "wrapExternal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ItemTransfer
public "toContainer"(): $Container
public "getSlotInv"(arg0: integer): $InternalInventory
public "simulateAdd"(arg0: $ItemStack$$Type): $ItemStack
public "removeItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
public "simulateRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
public "addItems"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "addItems"(arg0: $ItemStack$$Type): $ItemStack
public "spliterator"(): $Spliterator<($ItemStack)>
public "forEach"(arg0: $Consumer$$Type<($ItemStack)>): void
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "redstoneSignal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseInternalInventory$$Type = ($BaseInternalInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseInternalInventory_ = $BaseInternalInventory$$Type;
}}
declare module "appeng.api.util.KeyTypeSelection" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$KeyTypeSelection$Listener, $KeyTypeSelection$Listener$$Type} from "appeng.api.util.KeyTypeSelection$Listener"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $KeyTypeSelection {

constructor(arg0: $Runnable$$Type, arg1: $Predicate$$Type<($AEKeyType)>)
constructor(arg0: $KeyTypeSelection$Listener$$Type, arg1: $Predicate$$Type<($AEKeyType)>)

public "isEnabled"(arg0: $AEKeyType$$Type): boolean
public "enabled"(): $Map<($AEKeyType), (boolean)>
public "setEnabled"(arg0: $AEKeyType$$Type, arg1: boolean): void
public "enabledPredicate"(): $Predicate<($AEKeyType)>
public "setEnabledSet"(arg0: $List$$Type<($AEKeyType$$Type)>): void
public "enabledSet"(): $List<($AEKeyType)>
public static "forStack"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($AEKeyType)>): $KeyTypeSelection
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyTypeSelection$$Type = ($KeyTypeSelection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyTypeSelection_ = $KeyTypeSelection$$Type;
}}
declare module "appeng.api.orientation.IOrientableBlock" {
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IOrientableBlock {

 "getOrientationStrategy"(): $IOrientationStrategy
 "getOrientation"(arg0: $BlockState$$Type): $BlockOrientation

(): $IOrientationStrategy$$Type
get "orientationStrategy"(): $IOrientationStrategy
}

export namespace $IOrientableBlock {
const probejs$$marker: never
}
export class $IOrientableBlock$$Static implements $IOrientableBlock {


 "getOrientationStrategy"(): $IOrientationStrategy
 "getOrientation"(arg0: $BlockState$$Type): $BlockOrientation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOrientableBlock$$Type = (() => $IOrientationStrategy$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOrientableBlock_ = $IOrientableBlock$$Type;
}}
declare module "appeng.api.config.Actionable" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Actionable extends $Enum<($Actionable)> {
static readonly "MODULATE": $Actionable
static readonly "SIMULATE": $Actionable


public static "values"(): ($Actionable)[]
public static "valueOf"(arg0: string): $Actionable
public static "of"(arg0: $IFluidHandler$FluidAction$$Type): $Actionable
public static "ofSimulate"(arg0: boolean): $Actionable
public "getFluidAction"(): $IFluidHandler$FluidAction
public "isSimulate"(): boolean
get "fluidAction"(): $IFluidHandler$FluidAction
get "simulate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Actionable$$Type = (("modulate") | ("simulate"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Actionable_ = $Actionable$$Type;
}}
declare module "appeng.api.crafting.IPatternDetails$IInput" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"

export interface $IPatternDetails$IInput {

 "getMultiplier"(): long
 "isValid"(arg0: $AEKey$$Type, arg1: $Level$$Type): boolean
 "getPossibleInputs"(): ($GenericStack)[]
 "getRemainingKey"(arg0: $AEKey$$Type): $AEKey
get "multiplier"(): long
get "possibleInputs"(): ($GenericStack)[]
}

export namespace $IPatternDetails$IInput {
const probejs$$marker: never
}
export class $IPatternDetails$IInput$$Static implements $IPatternDetails$IInput {


 "getMultiplier"(): long
 "isValid"(arg0: $AEKey$$Type, arg1: $Level$$Type): boolean
 "getPossibleInputs"(): ($GenericStack)[]
 "getRemainingKey"(arg0: $AEKey$$Type): $AEKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPatternDetails$IInput$$Type = ($IPatternDetails$IInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPatternDetails$IInput_ = $IPatternDetails$IInput$$Type;
}}
declare module "appeng.api.networking.events.statistics.GridChunkEvent$GridChunkAdded" {
import {$GridChunkEvent, $GridChunkEvent$$Type} from "appeng.api.networking.events.statistics.GridChunkEvent"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $GridChunkEvent$GridChunkAdded extends $GridChunkEvent {

constructor(arg0: $ServerLevel$$Type, arg1: $ChunkPos$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridChunkEvent$GridChunkAdded$$Type = ($GridChunkEvent$GridChunkAdded);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridChunkEvent$GridChunkAdded_ = $GridChunkEvent$GridChunkAdded$$Type;
}}
declare module "appeng.api.util.IConfigManager" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IConfigManagerBuilder, $IConfigManagerBuilder$$Type} from "appeng.api.util.IConfigManagerBuilder"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$IConfigManagerListener, $IConfigManagerListener$$Type} from "appeng.api.util.IConfigManagerListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Setting, $Setting$$Type} from "appeng.api.config.Setting"

export interface $IConfigManager {

 "getSetting"<T extends $Enum<(T)>>(arg0: $Setting$$Type<(T)>): T
 "getSettings"(): $Set<($Setting<(any)>)>
 "exportSettings"(): $Map<(string), (string)>
 "importSettings"(arg0: $Map$$Type<(string), (string)>): boolean
 "hasSetting"(arg0: $Setting$$Type<(any)>): boolean
 "putSetting"<T extends $Enum<(T)>>(arg0: $Setting$$Type<(T)>, arg1: T): void
 "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): boolean
 "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
get "settings"(): $Set<($Setting<(any)>)>
}

export namespace $IConfigManager {
function builder(arg0: $ItemStack$$Type): $IConfigManagerBuilder
function builder(arg0: $Supplier$$Type<($ItemStack$$Type)>): $IConfigManagerBuilder
function builder(arg0: $Runnable$$Type): $IConfigManagerBuilder
function builder(arg0: $IConfigManagerListener$$Type): $IConfigManagerBuilder
const probejs$$marker: never
}
export class $IConfigManager$$Static implements $IConfigManager {


 "getSetting"<T extends $Enum<(T)>>(arg0: $Setting$$Type<(T)>): T
 "getSettings"(): $Set<($Setting<(any)>)>
static "builder"(arg0: $ItemStack$$Type): $IConfigManagerBuilder
static "builder"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $IConfigManagerBuilder
static "builder"(arg0: $Runnable$$Type): $IConfigManagerBuilder
static "builder"(arg0: $IConfigManagerListener$$Type): $IConfigManagerBuilder
 "exportSettings"(): $Map<(string), (string)>
 "importSettings"(arg0: $Map$$Type<(string), (string)>): boolean
 "hasSetting"(arg0: $Setting$$Type<(any)>): boolean
 "putSetting"<T extends $Enum<(T)>>(arg0: $Setting$$Type<(T)>, arg1: T): void
 "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): boolean
 "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigManager$$Type = ($IConfigManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigManager_ = $IConfigManager$$Type;
}}
declare module "appeng.api.parts.IPartCollisionHelper" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $IPartCollisionHelper {

 "addBox"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
 "isBBCollision"(): boolean
 "getWorldX"(): $Direction
 "getWorldY"(): $Direction
 "getWorldZ"(): $Direction
get "bBCollision"(): boolean
get "worldX"(): $Direction
get "worldY"(): $Direction
get "worldZ"(): $Direction
}

export namespace $IPartCollisionHelper {
const probejs$$marker: never
}
export class $IPartCollisionHelper$$Static implements $IPartCollisionHelper {


 "addBox"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
 "isBBCollision"(): boolean
 "getWorldX"(): $Direction
 "getWorldY"(): $Direction
 "getWorldZ"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartCollisionHelper$$Type = ($IPartCollisionHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartCollisionHelper_ = $IPartCollisionHelper$$Type;
}}
declare module "appeng.api.util.IConfigManagerBuilder" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Setting, $Setting$$Type} from "appeng.api.config.Setting"

export interface $IConfigManagerBuilder {

 "build"(): $IConfigManager
 "registerSetting"<T extends $Enum<(T)>>(arg0: $Setting$$Type<(T)>, arg1: T): $IConfigManagerBuilder
}

export namespace $IConfigManagerBuilder {
const probejs$$marker: never
}
export class $IConfigManagerBuilder$$Static implements $IConfigManagerBuilder {


 "build"(): $IConfigManager
 "registerSetting"<T extends $Enum<(T)>>(arg0: $Setting$$Type<(T)>, arg1: T): $IConfigManagerBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigManagerBuilder$$Type = ($IConfigManagerBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigManagerBuilder_ = $IConfigManagerBuilder$$Type;
}}
declare module "appeng.api.upgrades.IUpgradeableObject" {
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"

export interface $IUpgradeableObject {

 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getUpgrades"(): $IUpgradeInventory
get "upgrades"(): $IUpgradeInventory
}

export namespace $IUpgradeableObject {
const probejs$$marker: never
}
export class $IUpgradeableObject$$Static implements $IUpgradeableObject {


 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getUpgrades"(): $IUpgradeInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeableObject$$Type = ($IUpgradeableObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeableObject_ = $IUpgradeableObject$$Type;
}}
declare module "appeng.api.parts.IFacadePart" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IPartCollisionHelper, $IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFacadePart {

 "getItem"(): $Item
 "getItemStack"(): $ItemStack
 "getBlockState"(): $BlockState
 "getSide"(): $Direction
 "onClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "getBoxes"(arg0: $IPartCollisionHelper$$Type, arg1: boolean): void
 "onUseItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "getTextureItem"(): $ItemStack
get "item"(): $Item
get "itemStack"(): $ItemStack
get "blockState"(): $BlockState
get "side"(): $Direction
get "textureItem"(): $ItemStack
}

export namespace $IFacadePart {
const probejs$$marker: never
}
export class $IFacadePart$$Static implements $IFacadePart {


 "getItem"(): $Item
 "getItemStack"(): $ItemStack
 "getBlockState"(): $BlockState
 "getSide"(): $Direction
 "onClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "getBoxes"(arg0: $IPartCollisionHelper$$Type, arg1: boolean): void
 "onUseItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "getTextureItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacadePart$$Type = ($IFacadePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacadePart_ = $IFacadePart$$Type;
}}
declare module "appeng.api.implementations.blockentities.ICraftingMachine" {
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PatternContainerGroup, $PatternContainerGroup$$Type} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $ICraftingMachine {

 "getCraftingMachineInfo"(): $PatternContainerGroup
 "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[], arg2: $Direction$$Type): boolean
 "acceptsPlans"(): boolean
get "craftingMachineInfo"(): $PatternContainerGroup
}

export namespace $ICraftingMachine {
function of(arg0: $BlockEntity$$Type, arg1: $Direction$$Type): $ICraftingMachine
function of(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ICraftingMachine
const probejs$$marker: never
}
export class $ICraftingMachine$$Static implements $ICraftingMachine {


static "of"(arg0: $BlockEntity$$Type, arg1: $Direction$$Type): $ICraftingMachine
static "of"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ICraftingMachine
 "getCraftingMachineInfo"(): $PatternContainerGroup
 "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[], arg2: $Direction$$Type): boolean
 "acceptsPlans"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingMachine$$Type = ($ICraftingMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingMachine_ = $ICraftingMachine$$Type;
}}
declare module "appeng.api.networking.events.statistics.GridChunkEvent$GridChunkRemoved" {
import {$GridChunkEvent, $GridChunkEvent$$Type} from "appeng.api.networking.events.statistics.GridChunkEvent"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $GridChunkEvent$GridChunkRemoved extends $GridChunkEvent {

constructor(arg0: $ServerLevel$$Type, arg1: $ChunkPos$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridChunkEvent$GridChunkRemoved$$Type = ($GridChunkEvent$GridChunkRemoved);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridChunkEvent$GridChunkRemoved_ = $GridChunkEvent$GridChunkRemoved$$Type;
}}
declare module "appeng.api.networking.ticking.TickingRequest" {
import {$TickRates, $TickRates$$Type} from "appeng.core.settings.TickRates"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TickingRequest extends $Record {

constructor(minTickRate: integer, maxTickRate: integer, isSleeping: boolean, initialTickRate: integer)
constructor(arg0: $TickRates$$Type, arg1: boolean)
constructor(arg0: integer, arg1: integer, arg2: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isSleeping"(): boolean
public "initialTickRate"(): integer
public "minTickRate"(): integer
public "maxTickRate"(): integer
get "sleeping"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingRequest$$Type = ({"isSleeping"?: boolean, "minTickRate"?: integer, "maxTickRate"?: integer, "initialTickRate"?: integer}) | ([isSleeping?: boolean, minTickRate?: integer, maxTickRate?: integer, initialTickRate?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingRequest_ = $TickingRequest$$Type;
}}
declare module "appeng.api.networking.crafting.ICraftingRequester" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ImmutableSet, $ImmutableSet$$Type} from "com.google.common.collect.ImmutableSet"
import {$IActionHost, $IActionHost$$Type} from "appeng.api.networking.security.IActionHost"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$IGridNodeService, $IGridNodeService$$Type} from "appeng.api.networking.IGridNodeService"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ICraftingLink, $ICraftingLink$$Type} from "appeng.api.networking.crafting.ICraftingLink"

export interface $ICraftingRequester extends $IActionHost, $IGridNodeService {

 "insertCraftedItems"(arg0: $ICraftingLink$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
 "getRequestedJobs"(): $ImmutableSet<($ICraftingLink)>
 "jobStateChange"(arg0: $ICraftingLink$$Type): void
 "getActionableNode"(): $IGridNode
get "requestedJobs"(): $ImmutableSet<($ICraftingLink)>
get "actionableNode"(): $IGridNode
}

export namespace $ICraftingRequester {
const probejs$$marker: never
}
export class $ICraftingRequester$$Static implements $ICraftingRequester {


 "insertCraftedItems"(arg0: $ICraftingLink$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
 "getRequestedJobs"(): $ImmutableSet<($ICraftingLink)>
 "jobStateChange"(arg0: $ICraftingLink$$Type): void
 "getActionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingRequester$$Type = ($ICraftingRequester);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingRequester_ = $ICraftingRequester$$Type;
}}
declare module "appeng.api.storage.cells.CellState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CellState extends $Enum<($CellState)> {
static readonly "TYPES_FULL": $CellState
static readonly "ABSENT": $CellState
static readonly "EMPTY": $CellState
static readonly "NOT_EMPTY": $CellState
static readonly "FULL": $CellState


public static "values"(): ($CellState)[]
public static "valueOf"(arg0: string): $CellState
public "getStateColor"(): integer
get "stateColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CellState$$Type = (("absent") | ("empty") | ("not_empty") | ("types_full") | ("full"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CellState_ = $CellState$$Type;
}}
declare module "appeng.api.implementations.blockentities.IWirelessAccessPoint" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$DimensionalBlockPos, $DimensionalBlockPos$$Type} from "appeng.api.util.DimensionalBlockPos"
import {$IActionHost, $IActionHost$$Type} from "appeng.api.networking.security.IActionHost"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"

export interface $IWirelessAccessPoint extends $IActionHost {

 "getRange"(): double
 "getLocation"(): $DimensionalBlockPos
 "isActive"(): boolean
 "getGrid"(): $IGrid
 "getActionableNode"(): $IGridNode
get "range"(): double
get "location"(): $DimensionalBlockPos
get "active"(): boolean
get "grid"(): $IGrid
get "actionableNode"(): $IGridNode
}

export namespace $IWirelessAccessPoint {
const probejs$$marker: never
}
export class $IWirelessAccessPoint$$Static implements $IWirelessAccessPoint {


 "getRange"(): double
 "getLocation"(): $DimensionalBlockPos
 "isActive"(): boolean
 "getGrid"(): $IGrid
 "getActionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWirelessAccessPoint$$Type = ($IWirelessAccessPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWirelessAccessPoint_ = $IWirelessAccessPoint$$Type;
}}
declare module "appeng.api.networking.crafting.CraftingSubmitErrorCode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CraftingSubmitErrorCode extends $Enum<($CraftingSubmitErrorCode)> {
static readonly "INCOMPLETE_PLAN": $CraftingSubmitErrorCode
static readonly "MISSING_INGREDIENT": $CraftingSubmitErrorCode
static readonly "NO_CPU_FOUND": $CraftingSubmitErrorCode
static readonly "CPU_BUSY": $CraftingSubmitErrorCode
static readonly "CPU_OFFLINE": $CraftingSubmitErrorCode
static readonly "CPU_TOO_SMALL": $CraftingSubmitErrorCode
static readonly "NO_SUITABLE_CPU_FOUND": $CraftingSubmitErrorCode


public static "values"(): ($CraftingSubmitErrorCode)[]
public static "valueOf"(arg0: string): $CraftingSubmitErrorCode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingSubmitErrorCode$$Type = (("incomplete_plan") | ("no_cpu_found") | ("no_suitable_cpu_found") | ("cpu_busy") | ("cpu_offline") | ("cpu_too_small") | ("missing_ingredient"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingSubmitErrorCode_ = $CraftingSubmitErrorCode$$Type;
}}
declare module "appeng.api.config.FuzzyMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $FuzzyMode extends $Enum<($FuzzyMode)> implements $StringRepresentable {
static readonly "PERCENT_75": $FuzzyMode
static readonly "PERCENT_99": $FuzzyMode
static readonly "CODEC": $Codec<($FuzzyMode)>
static readonly "PERCENT_25": $FuzzyMode
readonly "percentage": float
readonly "breakPoint": float
static readonly "IGNORE_ALL": $FuzzyMode
static readonly "PERCENT_50": $FuzzyMode
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($FuzzyMode)>


public static "values"(): ($FuzzyMode)[]
public static "valueOf"(arg0: string): $FuzzyMode
public "getSerializedName"(): string
public "calculateBreakPoint"(arg0: integer): integer
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
export type $FuzzyMode$$Type = (("ignore_all") | ("percent_99") | ("percent_75") | ("percent_50") | ("percent_25"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuzzyMode_ = $FuzzyMode$$Type;
}}
declare module "appeng.api.parts.IFacadeContainer" {
import {$IPartHost, $IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IFacadePart, $IFacadePart$$Type} from "appeng.api.parts.IFacadePart"

export interface $IFacadeContainer {

 "isEmpty"(): boolean
 "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
 "canAddFacade"(arg0: $IFacadePart$$Type): boolean
 "addFacade"(arg0: $IFacadePart$$Type): boolean
 "getFacade"(arg0: $Direction$$Type): $IFacadePart
 "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "removeFacade"(arg0: $IPartHost$$Type, arg1: $Direction$$Type): void
get "empty"(): boolean
}

export namespace $IFacadeContainer {
const probejs$$marker: never
}
export class $IFacadeContainer$$Static implements $IFacadeContainer {


 "isEmpty"(): boolean
 "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
 "canAddFacade"(arg0: $IFacadePart$$Type): boolean
 "addFacade"(arg0: $IFacadePart$$Type): boolean
 "getFacade"(arg0: $Direction$$Type): $IFacadePart
 "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "removeFacade"(arg0: $IPartHost$$Type, arg1: $Direction$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacadeContainer$$Type = ($IFacadeContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacadeContainer_ = $IFacadeContainer$$Type;
}}
declare module "appeng.api.networking.crafting.ICraftingService" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CalculationStrategy, $CalculationStrategy$$Type} from "appeng.api.networking.crafting.CalculationStrategy"
import {$AEKeyFilter, $AEKeyFilter$$Type} from "appeng.api.storage.AEKeyFilter"
import {$ImmutableSet, $ImmutableSet$$Type} from "com.google.common.collect.ImmutableSet"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ICraftingSubmitResult, $ICraftingSubmitResult$$Type} from "appeng.api.networking.crafting.ICraftingSubmitResult"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ICraftingProvider, $ICraftingProvider$$Type} from "appeng.api.networking.crafting.ICraftingProvider"
import {$ICraftingSimulationRequester, $ICraftingSimulationRequester$$Type} from "appeng.api.networking.crafting.ICraftingSimulationRequester"
import {$ICraftingRequester, $ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$IGridService, $IGridService$$Type} from "appeng.api.networking.IGridService"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ICraftingCPU, $ICraftingCPU$$Type} from "appeng.api.networking.crafting.ICraftingCPU"
import {$ICraftingPlan, $ICraftingPlan$$Type} from "appeng.api.networking.crafting.ICraftingPlan"

export interface $ICraftingService extends $IGridService {

 "getFuzzyCraftable"(arg0: $AEKey$$Type, arg1: $AEKeyFilter$$Type): $AEKey
 "getRequestedAmount"(arg0: $AEKey$$Type): long
 "isRequestingAny"(): boolean
 "getCraftingFor"(arg0: $AEKey$$Type): $Collection<($IPatternDetails)>
 "isCraftable"(arg0: $AEKey$$Type): boolean
 "submitJob"(arg0: $ICraftingPlan$$Type, arg1: $ICraftingRequester$$Type, arg2: $ICraftingCPU$$Type, arg3: boolean, arg4: $IActionSource$$Type): $ICraftingSubmitResult
 "getCpus"(): $ImmutableSet<($ICraftingCPU)>
 "canEmitFor"(arg0: $AEKey$$Type): boolean
 "getCraftables"(arg0: $AEKeyFilter$$Type): $Set<($AEKey)>
 "isRequesting"(arg0: $AEKey$$Type): boolean
 "refreshNodeCraftingProvider"(arg0: $IGridNode$$Type): void
 "addGlobalCraftingProvider"(arg0: $ICraftingProvider$$Type): void
 "removeGlobalCraftingProvider"(arg0: $ICraftingProvider$$Type): void
 "refreshGlobalCraftingProvider"(arg0: $ICraftingProvider$$Type): void
 "beginCraftingCalculation"(arg0: $Level$$Type, arg1: $ICraftingSimulationRequester$$Type, arg2: $AEKey$$Type, arg3: long, arg4: $CalculationStrategy$$Type): $Future<($ICraftingPlan)>
get "requestingAny"(): boolean
get "cpus"(): $ImmutableSet<($ICraftingCPU)>
}

export namespace $ICraftingService {
const probejs$$marker: never
}
export class $ICraftingService$$Static implements $ICraftingService {


 "getFuzzyCraftable"(arg0: $AEKey$$Type, arg1: $AEKeyFilter$$Type): $AEKey
 "getRequestedAmount"(arg0: $AEKey$$Type): long
 "isRequestingAny"(): boolean
 "getCraftingFor"(arg0: $AEKey$$Type): $Collection<($IPatternDetails)>
 "isCraftable"(arg0: $AEKey$$Type): boolean
 "submitJob"(arg0: $ICraftingPlan$$Type, arg1: $ICraftingRequester$$Type, arg2: $ICraftingCPU$$Type, arg3: boolean, arg4: $IActionSource$$Type): $ICraftingSubmitResult
 "getCpus"(): $ImmutableSet<($ICraftingCPU)>
 "canEmitFor"(arg0: $AEKey$$Type): boolean
 "getCraftables"(arg0: $AEKeyFilter$$Type): $Set<($AEKey)>
 "isRequesting"(arg0: $AEKey$$Type): boolean
 "refreshNodeCraftingProvider"(arg0: $IGridNode$$Type): void
 "addGlobalCraftingProvider"(arg0: $ICraftingProvider$$Type): void
 "removeGlobalCraftingProvider"(arg0: $ICraftingProvider$$Type): void
 "refreshGlobalCraftingProvider"(arg0: $ICraftingProvider$$Type): void
 "beginCraftingCalculation"(arg0: $Level$$Type, arg1: $ICraftingSimulationRequester$$Type, arg2: $AEKey$$Type, arg3: long, arg4: $CalculationStrategy$$Type): $Future<($ICraftingPlan)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingService$$Type = ($ICraftingService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingService_ = $ICraftingService$$Type;
}}
declare module "appeng.api.stacks.AEKey" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AmountFormat, $AmountFormat$$Type} from "appeng.api.stacks.AmountFormat"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"

export class $AEKey {
static readonly "CODEC": $Codec<($AEKey)>
static readonly "MAP_CODEC": $MapCodec<($AEKey)>
static readonly "TYPE_FIELD": string
static readonly "OPTIONAL_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKey)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKey)>

constructor()

public static "readKey"(arg0: $RegistryFriendlyByteBuf$$Type): $AEKey
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "matches"(arg0: $GenericStack$$Type): boolean
public "getId"(): $ResourceLocation
public "getType"(): $AEKeyType
public "getDisplayName"(): $Component
public "fuzzyEquals"(arg0: $AEKey$$Type, arg1: $FuzzyMode$$Type): boolean
public "getModId"(): string
public static "writeKey"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $AEKey$$Type): void
public "toTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getAmountPerUnit"(): integer
public "getAmountPerByte"(): integer
public "getFuzzySearchValue"(): integer
public static "writeOptionalKey"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $AEKey$$Type): void
public static "readOptionalKey"(arg0: $RegistryFriendlyByteBuf$$Type): $AEKey
public "wrapForDisplayOrFilter"(): $ItemStack
public "getFuzzySearchMaxValue"(): integer
public "getAmountPerOperation"(): integer
public "hasComponents"(): boolean
public "getUnitSymbol"(): string
public "formatAmount"(arg0: long, arg1: $AmountFormat$$Type): string
public static "fromTagGeneric"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $AEKey
public "dropSecondary"(): $AEKey
public "getPrimaryKey"(): any
public "toTagGeneric"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "writeToPacket"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "isTagged"(arg0: $TagKey$$Type<(any)>): boolean
public "addDrops"(arg0: long, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $Level$$Type, arg3: $BlockPos$$Type): void
public "supportsFuzzyRangeSearch"(): boolean
get "id"(): $ResourceLocation
get "type"(): $AEKeyType
get "displayName"(): $Component
get "modId"(): string
get "amountPerUnit"(): integer
get "amountPerByte"(): integer
get "fuzzySearchValue"(): integer
get "fuzzySearchMaxValue"(): integer
get "amountPerOperation"(): integer
get "unitSymbol"(): string
get "primaryKey"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEKey$$Type = ($AEKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEKey_ = $AEKey$$Type;
}}
declare module "appeng.api.networking.events.statistics.GridChunkEvent" {
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$GridStatisticsEvent, $GridStatisticsEvent$$Type} from "appeng.api.networking.events.statistics.GridStatisticsEvent"

export class $GridChunkEvent extends $GridStatisticsEvent {

constructor(arg0: $ServerLevel$$Type, arg1: $ChunkPos$$Type)

public "getLevel"(): $ServerLevel
public "getChunkPos"(): $ChunkPos
get "level"(): $ServerLevel
get "chunkPos"(): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridChunkEvent$$Type = ($GridChunkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridChunkEvent_ = $GridChunkEvent$$Type;
}}
declare module "appeng.api.parts.IPartItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"

export interface $IPartItem<P extends $IPart> extends $ItemLike {

 "createPart"(): P
 "getPartClass"(): $Class<(P)>
 "asItem"(): $Item
get "partClass"(): $Class<(P)>
}

export namespace $IPartItem {
function getId(arg0: $IPartItem$$Type<(any)>): $ResourceLocation
function byId(arg0: $ResourceLocation$$Type): $IPartItem<(any)>
function getNetworkId(arg0: $IPartItem$$Type<(any)>): integer
function byNetworkId(arg0: integer): $IPartItem<(any)>
const probejs$$marker: never
}
export class $IPartItem$$Static<P extends $IPart> implements $IPartItem {


static "getId"(arg0: $IPartItem$$Type<(any)>): $ResourceLocation
static "byId"(arg0: $ResourceLocation$$Type): $IPartItem<(any)>
 "createPart"(): P
 "getPartClass"(): $Class<(P)>
static "getNetworkId"(arg0: $IPartItem$$Type<(any)>): integer
static "byNetworkId"(arg0: integer): $IPartItem<(any)>
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartItem$$Type<P> = ($IPartItem<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartItem_<P> = $IPartItem$$Type<(P)>;
}}
declare module "appeng.api.networking.pathing.ControllerState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ControllerState extends $Enum<($ControllerState)> {
static readonly "CONTROLLER_ONLINE": $ControllerState
static readonly "CONTROLLER_CONFLICT": $ControllerState
static readonly "NO_CONTROLLER": $ControllerState


public static "values"(): ($ControllerState)[]
public static "valueOf"(arg0: string): $ControllerState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerState$$Type = (("no_controller") | ("controller_online") | ("controller_conflict"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerState_ = $ControllerState$$Type;
}}
declare module "appeng.api.networking.security.IActionSource" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IActionHost, $IActionHost$$Type} from "appeng.api.networking.security.IActionHost"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $IActionSource {

 "context"<T>(arg0: $Class$$Type<(T)>): $Optional<(T)>
 "player"(): $Optional<($Player)>
 "machine"(): $Optional<($IActionHost)>
}

export namespace $IActionSource {
function empty(): $IActionSource
function ofMachine(arg0: $IActionHost$$Type): $IActionSource
function ofPlayer(arg0: $Player$$Type): $IActionSource
function ofPlayer(arg0: $Player$$Type, arg1: $IActionHost$$Type): $IActionSource
const probejs$$marker: never
}
export class $IActionSource$$Static implements $IActionSource {


 "context"<T>(arg0: $Class$$Type<(T)>): $Optional<(T)>
static "empty"(): $IActionSource
 "player"(): $Optional<($Player)>
static "ofMachine"(arg0: $IActionHost$$Type): $IActionSource
 "machine"(): $Optional<($IActionHost)>
static "ofPlayer"(arg0: $Player$$Type): $IActionSource
static "ofPlayer"(arg0: $Player$$Type, arg1: $IActionHost$$Type): $IActionSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IActionSource$$Type = ($IActionSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IActionSource_ = $IActionSource$$Type;
}}
declare module "appeng.api.storage.MEStorage" {
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $MEStorage {

 "getDescription"(): $Component
 "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
 "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
 "getAvailableStacks"(): $KeyCounter
 "getAvailableStacks"(arg0: $KeyCounter$$Type): void
 "isPreferredStorageFor"(arg0: $AEKey$$Type, arg1: $IActionSource$$Type): boolean

(): $Component$$Type
get "description"(): $Component
get "availableStacks"(): $KeyCounter
}

export namespace $MEStorage {
function checkPreconditions(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
const probejs$$marker: never
}
export class $MEStorage$$Static implements $MEStorage {


 "getDescription"(): $Component
 "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
 "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
 "getAvailableStacks"(): $KeyCounter
 "getAvailableStacks"(arg0: $KeyCounter$$Type): void
 "isPreferredStorageFor"(arg0: $AEKey$$Type, arg1: $IActionSource$$Type): boolean
static "checkPreconditions"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEStorage$$Type = (() => $Component$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEStorage_ = $MEStorage$$Type;
}}
declare module "appeng.api.util.KeyTypeSelectionHost" {
import {$KeyTypeSelection, $KeyTypeSelection$$Type} from "appeng.api.util.KeyTypeSelection"

export interface $KeyTypeSelectionHost {

 "getKeyTypeSelection"(): $KeyTypeSelection

(): $KeyTypeSelection$$Type
get "keyTypeSelection"(): $KeyTypeSelection
}

export namespace $KeyTypeSelectionHost {
const probejs$$marker: never
}
export class $KeyTypeSelectionHost$$Static implements $KeyTypeSelectionHost {


 "getKeyTypeSelection"(): $KeyTypeSelection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyTypeSelectionHost$$Type = (() => $KeyTypeSelection$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyTypeSelectionHost_ = $KeyTypeSelectionHost$$Type;
}}
declare module "appeng.api.networking.ticking.ITickManager" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IGridService, $IGridService$$Type} from "appeng.api.networking.IGridService"

export interface $ITickManager extends $IGridService {

 "alertDevice"(arg0: $IGridNode$$Type): boolean
 "sleepDevice"(arg0: $IGridNode$$Type): boolean
 "wakeDevice"(arg0: $IGridNode$$Type): boolean
}

export namespace $ITickManager {
const probejs$$marker: never
}
export class $ITickManager$$Static implements $ITickManager {


 "alertDevice"(arg0: $IGridNode$$Type): boolean
 "sleepDevice"(arg0: $IGridNode$$Type): boolean
 "wakeDevice"(arg0: $IGridNode$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickManager$$Type = ($ITickManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickManager_ = $ITickManager$$Type;
}}
declare module "appeng.api.crafting.IPatternDetails$PatternInputSink" {
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $IPatternDetails$PatternInputSink {

 "pushInput"(arg0: $AEKey$$Type, arg1: long): void

(arg0: $AEKey, arg1: long): void
}

export namespace $IPatternDetails$PatternInputSink {
const probejs$$marker: never
}
export class $IPatternDetails$PatternInputSink$$Static implements $IPatternDetails$PatternInputSink {


 "pushInput"(arg0: $AEKey$$Type, arg1: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPatternDetails$PatternInputSink$$Type = ((arg0: $AEKey, arg1: long) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPatternDetails$PatternInputSink_ = $IPatternDetails$PatternInputSink$$Type;
}}
declare module "appeng.api.config.IncludeExclude" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $IncludeExclude extends $Enum<($IncludeExclude)> {
static readonly "BLACKLIST": $IncludeExclude
static readonly "WHITELIST": $IncludeExclude


public static "values"(): ($IncludeExclude)[]
public static "valueOf"(arg0: string): $IncludeExclude
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncludeExclude$$Type = (("whitelist") | ("blacklist"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IncludeExclude_ = $IncludeExclude$$Type;
}}
declare module "appeng.api.networking.crafting.ICraftingLink" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $ICraftingLink {

 "isDone"(): boolean
 "cancel"(): void
 "isStandalone"(): boolean
 "isCanceled"(): boolean
 "getCraftingID"(): $UUID
 "writeToNBT"(arg0: $CompoundTag$$Type): void
get "done"(): boolean
get "standalone"(): boolean
get "canceled"(): boolean
get "craftingID"(): $UUID
}

export namespace $ICraftingLink {
const probejs$$marker: never
}
export class $ICraftingLink$$Static implements $ICraftingLink {


 "isDone"(): boolean
 "cancel"(): void
 "isStandalone"(): boolean
 "isCanceled"(): boolean
 "getCraftingID"(): $UUID
 "writeToNBT"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingLink$$Type = ($ICraftingLink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingLink_ = $ICraftingLink$$Type;
}}
declare module "appeng.api.networking.IInWorldGridNodeHost" {
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $IInWorldGridNodeHost {

 "getGridNode"(arg0: $Direction$$Type): $IGridNode
 "getCableConnectionType"(arg0: $Direction$$Type): $AECableType

(arg0: $Direction): $IGridNode$$Type
}

export namespace $IInWorldGridNodeHost {
const probejs$$marker: never
}
export class $IInWorldGridNodeHost$$Static implements $IInWorldGridNodeHost {


 "getGridNode"(arg0: $Direction$$Type): $IGridNode
 "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInWorldGridNodeHost$$Type = ((arg0: $Direction) => $IGridNode$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInWorldGridNodeHost_ = $IInWorldGridNodeHost$$Type;
}}
declare module "appeng.api.behaviors.GenericInternalInventory" {
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"

export interface $GenericInternalInventory {

 "getCapacity"(arg0: $AEKeyType$$Type): long
 "size"(): integer
 "extract"(arg0: integer, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
 "insert"(arg0: integer, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
 "getKey"(arg0: integer): $AEKey
 "getStack"(arg0: integer): $GenericStack
 "endBatch"(): void
 "getAmount"(arg0: integer): long
 "onChange"(): void
 "setStack"(arg0: integer, arg1: $GenericStack$$Type): void
 "isSupportedType"(arg0: $AEKeyType$$Type): boolean
 "isSupportedType"(arg0: $AEKey$$Type): boolean
 "endBatchSuppressed"(): void
 "getMaxAmount"(arg0: $AEKey$$Type): long
 "isAllowedIn"(arg0: integer, arg1: $AEKey$$Type): boolean
 "beginBatch"(): void
 "canExtract"(): boolean
 "canInsert"(): boolean
}

export namespace $GenericInternalInventory {
const probejs$$marker: never
}
export class $GenericInternalInventory$$Static implements $GenericInternalInventory {


 "getCapacity"(arg0: $AEKeyType$$Type): long
 "size"(): integer
 "extract"(arg0: integer, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
 "insert"(arg0: integer, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
 "getKey"(arg0: integer): $AEKey
 "getStack"(arg0: integer): $GenericStack
 "endBatch"(): void
 "getAmount"(arg0: integer): long
 "onChange"(): void
 "setStack"(arg0: integer, arg1: $GenericStack$$Type): void
 "isSupportedType"(arg0: $AEKeyType$$Type): boolean
 "isSupportedType"(arg0: $AEKey$$Type): boolean
 "endBatchSuppressed"(): void
 "getMaxAmount"(arg0: $AEKey$$Type): long
 "isAllowedIn"(arg0: integer, arg1: $AEKey$$Type): boolean
 "beginBatch"(): void
 "canExtract"(): boolean
 "canInsert"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericInternalInventory$$Type = ($GenericInternalInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericInternalInventory_ = $GenericInternalInventory$$Type;
}}
declare module "appeng.api.networking.pathing.ChannelMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ChannelMode extends $Enum<($ChannelMode)> {
static readonly "X2": $ChannelMode
static readonly "X3": $ChannelMode
static readonly "INFINITE": $ChannelMode
static readonly "X4": $ChannelMode
static readonly "DEFAULT": $ChannelMode


public static "values"(): ($ChannelMode)[]
public static "valueOf"(arg0: string): $ChannelMode
public "getCableCapacityFactor"(): integer
public "getAdHocNetworkChannels"(): integer
get "cableCapacityFactor"(): integer
get "adHocNetworkChannels"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelMode$$Type = (("infinite") | ("default") | ("x2") | ("x3") | ("x4"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelMode_ = $ChannelMode$$Type;
}}
declare module "appeng.api.inventories.ISegmentedInventory" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"

export interface $ISegmentedInventory {

 "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory

(arg0: $ResourceLocation): $InternalInventory$$Type
}

export namespace $ISegmentedInventory {
const CONFIG: $ResourceLocation
const STORAGE: $ResourceLocation
const CELLS: $ResourceLocation
const UPGRADES: $ResourceLocation
const probejs$$marker: never
}
export class $ISegmentedInventory$$Static implements $ISegmentedInventory {
static readonly "CONFIG": $ResourceLocation
static readonly "STORAGE": $ResourceLocation
static readonly "CELLS": $ResourceLocation
static readonly "UPGRADES": $ResourceLocation


 "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISegmentedInventory$$Type = ((arg0: $ResourceLocation) => $InternalInventory$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISegmentedInventory_ = $ISegmentedInventory$$Type;
}}
declare module "appeng.api.crafting.EncodedPatternDecoder" {
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $EncodedPatternDecoder<T extends $IPatternDetails> {

 "decode"(arg0: $AEItemKey$$Type, arg1: $Level$$Type): T

(arg0: $AEItemKey, arg1: $Level): T
}

export namespace $EncodedPatternDecoder {
const probejs$$marker: never
}
export class $EncodedPatternDecoder$$Static<T extends $IPatternDetails> implements $EncodedPatternDecoder {


 "decode"(arg0: $AEItemKey$$Type, arg1: $Level$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EncodedPatternDecoder$$Type<T> = ((arg0: $AEItemKey, arg1: $Level) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EncodedPatternDecoder_<T> = $EncodedPatternDecoder$$Type<(T)>;
}}
declare module "appeng.api.storage.cells.IBasicCellItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$$Type} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $IBasicCellItem extends $ICellWorkbenchItem {

 "getBytes"(arg0: $ItemStack$$Type): integer
 "getKeyType"(): $AEKeyType
 "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
 "getBytesPerType"(arg0: $ItemStack$$Type): integer
 "storableInStorageCell"(): boolean
 "getTotalTypes"(arg0: $ItemStack$$Type): integer
 "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
 "getIdleDrain"(): double
 "isStorageCell"(arg0: $ItemStack$$Type): boolean
 "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
 "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
 "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
 "isEditable"(arg0: $ItemStack$$Type): boolean
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
get "keyType"(): $AEKeyType
get "idleDrain"(): double
}

export namespace $IBasicCellItem {
const probejs$$marker: never
}
export class $IBasicCellItem$$Static implements $IBasicCellItem {


 "getBytes"(arg0: $ItemStack$$Type): integer
 "getKeyType"(): $AEKeyType
 "getCellTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
 "getBytesPerType"(arg0: $ItemStack$$Type): integer
 "storableInStorageCell"(): boolean
 "getTotalTypes"(arg0: $ItemStack$$Type): integer
 "isBlackListed"(arg0: $ItemStack$$Type, arg1: $AEKey$$Type): boolean
 "getIdleDrain"(): double
 "isStorageCell"(arg0: $ItemStack$$Type): boolean
 "addCellInformationToTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
 "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
 "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
 "isEditable"(arg0: $ItemStack$$Type): boolean
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBasicCellItem$$Type = ($IBasicCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBasicCellItem_ = $IBasicCellItem$$Type;
}}
declare module "appeng.api.networking.storage.IStorageService" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$IGridService, $IGridService$$Type} from "appeng.api.networking.IGridService"
import {$IStorageProvider, $IStorageProvider$$Type} from "appeng.api.storage.IStorageProvider"

export interface $IStorageService extends $IGridService {

 "getInventory"(): $MEStorage
 "invalidateCache"(): void
 "getCachedInventory"(): $KeyCounter
 "addGlobalStorageProvider"(arg0: $IStorageProvider$$Type): void
 "removeGlobalStorageProvider"(arg0: $IStorageProvider$$Type): void
 "refreshNodeStorageProvider"(arg0: $IGridNode$$Type): void
 "refreshGlobalStorageProvider"(arg0: $IStorageProvider$$Type): void
get "inventory"(): $MEStorage
get "cachedInventory"(): $KeyCounter
}

export namespace $IStorageService {
const probejs$$marker: never
}
export class $IStorageService$$Static implements $IStorageService {


 "getInventory"(): $MEStorage
 "invalidateCache"(): void
 "getCachedInventory"(): $KeyCounter
 "addGlobalStorageProvider"(arg0: $IStorageProvider$$Type): void
 "removeGlobalStorageProvider"(arg0: $IStorageProvider$$Type): void
 "refreshNodeStorageProvider"(arg0: $IGridNode$$Type): void
 "refreshGlobalStorageProvider"(arg0: $IStorageProvider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageService$$Type = ($IStorageService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageService_ = $IStorageService$$Type;
}}
declare module "appeng.api.parts.BusSupport" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $BusSupport extends $Enum<($BusSupport)> {
static readonly "DENSE_CABLE": $BusSupport
static readonly "CABLE": $BusSupport


public static "values"(): ($BusSupport)[]
public static "valueOf"(arg0: string): $BusSupport
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BusSupport$$Type = (("cable") | ("dense_cable"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BusSupport_ = $BusSupport$$Type;
}}
declare module "appeng.api.networking.crafting.ICraftingCPU" {
import {$CpuSelectionMode, $CpuSelectionMode$$Type} from "appeng.api.config.CpuSelectionMode"
import {$CraftingJobStatus, $CraftingJobStatus$$Type} from "appeng.api.networking.crafting.CraftingJobStatus"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $ICraftingCPU {

 "getName"(): $Component
 "isBusy"(): boolean
 "getSelectionMode"(): $CpuSelectionMode
 "getAvailableStorage"(): long
 "getCoProcessors"(): integer
 "getJobStatus"(): $CraftingJobStatus
 "cancelJob"(): void
get "name"(): $Component
get "busy"(): boolean
get "selectionMode"(): $CpuSelectionMode
get "availableStorage"(): long
get "coProcessors"(): integer
get "jobStatus"(): $CraftingJobStatus
}

export namespace $ICraftingCPU {
const probejs$$marker: never
}
export class $ICraftingCPU$$Static implements $ICraftingCPU {


 "getName"(): $Component
 "isBusy"(): boolean
 "getSelectionMode"(): $CpuSelectionMode
 "getAvailableStorage"(): long
 "getCoProcessors"(): integer
 "getJobStatus"(): $CraftingJobStatus
 "cancelJob"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingCPU$$Type = ($ICraftingCPU);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingCPU_ = $ICraftingCPU$$Type;
}}
declare module "appeng.api.networking.crafting.ICraftingSubmitResult" {
import {$CraftingSubmitErrorCode, $CraftingSubmitErrorCode$$Type} from "appeng.api.networking.crafting.CraftingSubmitErrorCode"
import {$ICraftingLink, $ICraftingLink$$Type} from "appeng.api.networking.crafting.ICraftingLink"

export interface $ICraftingSubmitResult {

 "successful"(): boolean
 "link"(): $ICraftingLink
 "errorCode"(): $CraftingSubmitErrorCode
 "errorDetail"(): any
}

export namespace $ICraftingSubmitResult {
const probejs$$marker: never
}
export class $ICraftingSubmitResult$$Static implements $ICraftingSubmitResult {


 "successful"(): boolean
 "link"(): $ICraftingLink
 "errorCode"(): $CraftingSubmitErrorCode
 "errorDetail"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingSubmitResult$$Type = ($ICraftingSubmitResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingSubmitResult_ = $ICraftingSubmitResult$$Type;
}}
declare module "appeng.api.parts.IPartModel" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"

export interface $IPartModel {

 "requireCableConnection"(): boolean
 "getModels"(): $List<($ResourceLocation)>
get "models"(): $List<($ResourceLocation)>
}

export namespace $IPartModel {
const probejs$$marker: never
}
export class $IPartModel$$Static implements $IPartModel {


 "requireCableConnection"(): boolean
 "getModels"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartModel$$Type = ($IPartModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartModel_ = $IPartModel$$Type;
}}
declare module "appeng.api.networking.events.GridEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GridEvent {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridEvent$$Type = ($GridEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridEvent_ = $GridEvent$$Type;
}}
declare module "appeng.api.storage.ISubMenuHost" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"

export interface $ISubMenuHost {

 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
get "mainMenuIcon"(): $ItemStack
}

export namespace $ISubMenuHost {
const probejs$$marker: never
}
export class $ISubMenuHost$$Static implements $ISubMenuHost {


 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubMenuHost$$Type = ($ISubMenuHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubMenuHost_ = $ISubMenuHost$$Type;
}}
declare module "appeng.api.crafting.PatternDetailsTooltip" {
import {$PatternDetailsTooltip$Property, $PatternDetailsTooltip$Property$$Type} from "appeng.api.crafting.PatternDetailsTooltip$Property"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$List, $List$$Type} from "java.util.List"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"

export class $PatternDetailsTooltip {
static readonly "OUTPUT_TEXT_PRODUCES": $Component
static readonly "OUTPUT_TEXT_CRAFTS": $Component

constructor(arg0: $Component$$Type)

public "getInputs"(): $List<($GenericStack)>
public "getProperties"(): $List<($PatternDetailsTooltip$Property)>
public "addProperty"(arg0: $Component$$Type): void
public "addProperty"(arg0: $Component$$Type, arg1: $Component$$Type): void
public "getOutputs"(): $List<($GenericStack)>
public "addInputsAndOutputs"(arg0: $IPatternDetails$$Type): void
public "addOutput"(arg0: $AEKey$$Type, arg1: long): void
public "addOutput"(arg0: $GenericStack$$Type): void
public "addInput"(arg0: $AEKey$$Type, arg1: long): void
public "addInput"(arg0: $GenericStack$$Type): void
public "getOutputMethod"(): $Component
public "setOutputMethod"(arg0: $Component$$Type): void
get "inputs"(): $List<($GenericStack)>
get "properties"(): $List<($PatternDetailsTooltip$Property)>
get "outputs"(): $List<($GenericStack)>
get "outputMethod"(): $Component
set "outputMethod"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternDetailsTooltip$$Type = ($PatternDetailsTooltip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternDetailsTooltip_ = $PatternDetailsTooltip$$Type;
}}
declare module "appeng.api.implementations.menuobjects.IMenuItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"

export interface $IMenuItem {

 "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(any)>

(arg0: $Player, arg1: $ItemMenuHostLocator, arg2: $BlockHitResult): $ItemMenuHost$$Type<(any)>
}

export namespace $IMenuItem {
const probejs$$marker: never
}
export class $IMenuItem$$Static implements $IMenuItem {


 "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMenuItem$$Type = ((arg0: $Player, arg1: $ItemMenuHostLocator, arg2: $BlockHitResult) => $ItemMenuHost$$Type<(any)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMenuItem_ = $IMenuItem$$Type;
}}
declare module "appeng.api.implementations.menuobjects.IPortableTerminal" {
import {$ITerminalHost, $ITerminalHost$$Type} from "appeng.api.storage.ITerminalHost"
import {$ILinkStatus, $ILinkStatus$$Type} from "appeng.api.storage.ILinkStatus"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"

export interface $IPortableTerminal extends $ITerminalHost, $IEnergySource {

 "getInventory"(): $MEStorage
 "getLinkStatus"(): $ILinkStatus
 "getCloseHotkey"(): string
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getUpgrades"(): $IUpgradeInventory
 "getConfigManager"(): $IConfigManager
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
get "inventory"(): $MEStorage
get "linkStatus"(): $ILinkStatus
get "closeHotkey"(): string
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "mainMenuIcon"(): $ItemStack
}

export namespace $IPortableTerminal {
function empty(): $IEnergySource
const probejs$$marker: never
}
export class $IPortableTerminal$$Static implements $IPortableTerminal {


 "getInventory"(): $MEStorage
 "getLinkStatus"(): $ILinkStatus
 "getCloseHotkey"(): string
static "empty"(): $IEnergySource
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
 "getUpgrades"(): $IUpgradeInventory
 "getConfigManager"(): $IConfigManager
 "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
 "getMainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPortableTerminal$$Type = ($IPortableTerminal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPortableTerminal_ = $IPortableTerminal$$Type;
}}
declare module "appeng.api.storage.IStorageMounts" {
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"

export interface $IStorageMounts {

 "mount"(arg0: $MEStorage$$Type): void
 "mount"(arg0: $MEStorage$$Type, arg1: integer): void

(arg0: $MEStorage, arg1: integer): void
}

export namespace $IStorageMounts {
const DEFAULT_PRIORITY: integer
const probejs$$marker: never
}
export class $IStorageMounts$$Static implements $IStorageMounts {
static readonly "DEFAULT_PRIORITY": integer


 "mount"(arg0: $MEStorage$$Type): void
 "mount"(arg0: $MEStorage$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageMounts$$Type = ((arg0: $MEStorage, arg1: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageMounts_ = $IStorageMounts$$Type;
}}
declare module "appeng.api.util.KeyTypeSelection$Listener" {
import {$KeyTypeSelection, $KeyTypeSelection$$Type} from "appeng.api.util.KeyTypeSelection"

export interface $KeyTypeSelection$Listener {

 "onKeyTypeSelectionChanged"(arg0: $KeyTypeSelection$$Type): void

(arg0: $KeyTypeSelection): void
}

export namespace $KeyTypeSelection$Listener {
const probejs$$marker: never
}
export class $KeyTypeSelection$Listener$$Static implements $KeyTypeSelection$Listener {


 "onKeyTypeSelectionChanged"(arg0: $KeyTypeSelection$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyTypeSelection$Listener$$Type = ((arg0: $KeyTypeSelection) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyTypeSelection$Listener_ = $KeyTypeSelection$Listener$$Type;
}}
declare module "appeng.api.util.AECableSize" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $AECableSize extends $Enum<($AECableSize)> {
static readonly "DENSE": $AECableSize
static readonly "NONE": $AECableSize
static readonly "NORMAL": $AECableSize


public static "values"(): ($AECableSize)[]
public static "min"(arg0: $AECableSize$$Type, arg1: $AECableSize$$Type): $AECableSize
public static "max"(arg0: $AECableSize$$Type, arg1: $AECableSize$$Type): $AECableSize
public static "valueOf"(arg0: string): $AECableSize
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AECableSize$$Type = (("none") | ("normal") | ("dense"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AECableSize_ = $AECableSize$$Type;
}}
declare module "appeng.api.implementations.menuobjects.ItemMenuHost" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"

export class $ItemMenuHost<T extends $Item> implements $IUpgradeableObject {

constructor(arg0: T, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type)

public "getLocator"(): $ItemMenuHostLocator
public "insert"(arg0: $Player$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "tick"(): void
public "isValid"(): boolean
public "getItem"(): T
public "getPlayerInventorySlot"(): integer
public "consumeIdlePower"(arg0: $Actionable$$Type): boolean
public "getPlayer"(): $Player
public "getItemStack"(): $ItemStack
public "isClientSide"(): boolean
public "getUpgrades"(): $IUpgradeInventory
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
get "locator"(): $ItemMenuHostLocator
get "valid"(): boolean
get "item"(): T
get "playerInventorySlot"(): integer
get "player"(): $Player
get "itemStack"(): $ItemStack
get "clientSide"(): boolean
get "upgrades"(): $IUpgradeInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMenuHost$$Type<T> = ($ItemMenuHost<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMenuHost_<T> = $ItemMenuHost$$Type<(T)>;
}}
declare module "appeng.api.networking.IManagedGridNode" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IGridNodeService, $IGridNodeService$$Type} from "appeng.api.networking.IGridNodeService"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$GridFlags, $GridFlags$$Type} from "appeng.api.networking.GridFlags"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IManagedGridNode {

 "addService"<T extends $IGridNodeService>(arg0: $Class$$Type<(T)>, arg1: T): $IManagedGridNode
 "destroy"(): void
 "create"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "isActive"(): boolean
 "getNode"(): $IGridNode
 "ifPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
 "ifPresent"(arg0: $BiConsumer$$Type<($IGrid), ($IGridNode)>): boolean
 "isPowered"(): boolean
 "isReady"(): boolean
 "setFlags"(...arg0: ($GridFlags$$Type)[]): $IManagedGridNode
 "setExposedOnSides"(arg0: $Set$$Type<($Direction$$Type)>): $IManagedGridNode
 "setOwningPlayerId"(arg0: integer): void
 "setIdlePowerUsage"(arg0: double): $IManagedGridNode
 "setOwningPlayer"(arg0: $Player$$Type): void
 "saveToNBT"(arg0: $CompoundTag$$Type): void
 "hasGridBooted"(): boolean
 "getGrid"(): $IGrid
 "setInWorldNode"(arg0: boolean): $IManagedGridNode
 "setGridColor"(arg0: $AEColor$$Type): $IManagedGridNode
 "setTagName"(arg0: string): $IManagedGridNode
 "isOnline"(): boolean
 "loadFromNBT"(arg0: $CompoundTag$$Type): void
 "setVisualRepresentation"(arg0: $ItemStack$$Type): $IManagedGridNode
 "setVisualRepresentation"(arg0: $AEItemKey$$Type): $IManagedGridNode
 "setVisualRepresentation"(arg0: $ItemLike$$Type): $IManagedGridNode
get "active"(): boolean
get "node"(): $IGridNode
get "powered"(): boolean
get "ready"(): boolean
set "flags"(value: ($GridFlags$$Type)[])
set "exposedOnSides"(value: $Set$$Type<($Direction$$Type)>)
set "owningPlayerId"(value: integer)
set "idlePowerUsage"(value: double)
set "owningPlayer"(value: $Player$$Type)
get "grid"(): $IGrid
set "inWorldNode"(value: boolean)
set "gridColor"(value: $AEColor$$Type)
set "tagName"(value: string)
get "online"(): boolean
set "visualRepresentation"(value: $ItemStack$$Type)
set "visualRepresentation"(value: $AEItemKey$$Type)
set "visualRepresentation"(value: $ItemLike$$Type)
}

export namespace $IManagedGridNode {
const probejs$$marker: never
}
export class $IManagedGridNode$$Static implements $IManagedGridNode {


 "addService"<T extends $IGridNodeService>(arg0: $Class$$Type<(T)>, arg1: T): $IManagedGridNode
 "destroy"(): void
 "create"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "isActive"(): boolean
 "getNode"(): $IGridNode
 "ifPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
 "ifPresent"(arg0: $BiConsumer$$Type<($IGrid), ($IGridNode)>): boolean
 "isPowered"(): boolean
 "isReady"(): boolean
 "setFlags"(...arg0: ($GridFlags$$Type)[]): $IManagedGridNode
 "setExposedOnSides"(arg0: $Set$$Type<($Direction$$Type)>): $IManagedGridNode
 "setOwningPlayerId"(arg0: integer): void
 "setIdlePowerUsage"(arg0: double): $IManagedGridNode
 "setOwningPlayer"(arg0: $Player$$Type): void
 "saveToNBT"(arg0: $CompoundTag$$Type): void
 "hasGridBooted"(): boolean
 "getGrid"(): $IGrid
 "setInWorldNode"(arg0: boolean): $IManagedGridNode
 "setGridColor"(arg0: $AEColor$$Type): $IManagedGridNode
 "setTagName"(arg0: string): $IManagedGridNode
 "isOnline"(): boolean
 "loadFromNBT"(arg0: $CompoundTag$$Type): void
 "setVisualRepresentation"(arg0: $ItemStack$$Type): $IManagedGridNode
 "setVisualRepresentation"(arg0: $AEItemKey$$Type): $IManagedGridNode
 "setVisualRepresentation"(arg0: $ItemLike$$Type): $IManagedGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedGridNode$$Type = ($IManagedGridNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManagedGridNode_ = $IManagedGridNode$$Type;
}}
declare module "appeng.api.networking.IGridVisitor" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"

export interface $IGridVisitor {

 "visitNode"(arg0: $IGridNode$$Type): boolean

(arg0: $IGridNode): boolean
}

export namespace $IGridVisitor {
const probejs$$marker: never
}
export class $IGridVisitor$$Static implements $IGridVisitor {


 "visitNode"(arg0: $IGridNode$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridVisitor$$Type = ((arg0: $IGridNode) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridVisitor_ = $IGridVisitor$$Type;
}}
declare module "appeng.api.implementations.items.IFacadeItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IFacadePart, $IFacadePart$$Type} from "appeng.api.parts.IFacadePart"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFacadeItem {

 "getTextureBlockState"(arg0: $ItemStack$$Type): $BlockState
 "getTextureItem"(arg0: $ItemStack$$Type): $ItemStack
 "createPartFromItemStack"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): $IFacadePart
}

export namespace $IFacadeItem {
const probejs$$marker: never
}
export class $IFacadeItem$$Static implements $IFacadeItem {


 "getTextureBlockState"(arg0: $ItemStack$$Type): $BlockState
 "getTextureItem"(arg0: $ItemStack$$Type): $ItemStack
 "createPartFromItemStack"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): $IFacadePart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFacadeItem$$Type = ($IFacadeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFacadeItem_ = $IFacadeItem$$Type;
}}
declare module "appeng.api.networking.GridFlags" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $GridFlags extends $Enum<($GridFlags)> {
static readonly "COMPRESSED_CHANNEL": $GridFlags
static readonly "CANNOT_CARRY_COMPRESSED": $GridFlags
static readonly "CANNOT_CARRY": $GridFlags
static readonly "DENSE_CAPACITY": $GridFlags
static readonly "PREFERRED": $GridFlags
static readonly "MULTIBLOCK": $GridFlags
static readonly "REQUIRE_CHANNEL": $GridFlags


public static "values"(): ($GridFlags)[]
public static "valueOf"(arg0: string): $GridFlags
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridFlags$$Type = (("require_channel") | ("compressed_channel") | ("cannot_carry") | ("cannot_carry_compressed") | ("dense_capacity") | ("multiblock") | ("preferred"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridFlags_ = $GridFlags$$Type;
}}
declare module "appeng.api.upgrades.IUpgradeInventory" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemTransfer, $ItemTransfer$$Type} from "appeng.api.inventories.ItemTransfer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IUpgradeInventory extends $InternalInventory {

 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "getMaxInstalled"(arg0: $ItemLike$$Type): integer
 "getUpgradableItem"(): $ItemLike
 "isInstalled"(arg0: $ItemLike$$Type): boolean
 "readFromNBT"(arg0: $CompoundTag$$Type, arg1: string, arg2: $HolderLookup$Provider$$Type): void
 "writeToNBT"(arg0: $CompoundTag$$Type, arg1: string, arg2: $HolderLookup$Provider$$Type): void
 "size"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "iterator"(): $Iterator<($ItemStack)>
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getStackInSlot"(arg0: integer): $ItemStack
 "getRedstoneSignal"(): integer
 "getSubInventory"(arg0: integer, arg1: integer): $InternalInventory
 "removeSimilarItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "sendChangeNotification"(arg0: integer): void
 "setItemDirect"(arg0: integer, arg1: $ItemStack$$Type): void
 "toItemHandler"(): $IItemHandler
 "toContainer"(): $Container
 "getSlotInv"(arg0: integer): $InternalInventory
 "simulateAdd"(arg0: $ItemStack$$Type): $ItemStack
 "removeItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "addItems"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "addItems"(arg0: $ItemStack$$Type): $ItemStack
 "spliterator"(): $Spliterator<($ItemStack)>
 "forEach"(arg0: $Consumer$$Type<($ItemStack)>): void
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "upgradableItem"(): $ItemLike
get "redstoneSignal"(): integer
}

export namespace $IUpgradeInventory {
function empty(): $InternalInventory
function wrapExternal(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ItemTransfer
const probejs$$marker: never
}
export class $IUpgradeInventory$$Static implements $IUpgradeInventory {


 "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
 "getMaxInstalled"(arg0: $ItemLike$$Type): integer
 "getUpgradableItem"(): $ItemLike
 "isInstalled"(arg0: $ItemLike$$Type): boolean
 "readFromNBT"(arg0: $CompoundTag$$Type, arg1: string, arg2: $HolderLookup$Provider$$Type): void
 "writeToNBT"(arg0: $CompoundTag$$Type, arg1: string, arg2: $HolderLookup$Provider$$Type): void
 "size"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "iterator"(): $Iterator<($ItemStack)>
static "empty"(): $InternalInventory
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getStackInSlot"(arg0: integer): $ItemStack
 "getRedstoneSignal"(): integer
 "getSubInventory"(arg0: integer, arg1: integer): $InternalInventory
 "removeSimilarItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "sendChangeNotification"(arg0: integer): void
 "setItemDirect"(arg0: integer, arg1: $ItemStack$$Type): void
static "wrapExternal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ItemTransfer
 "toItemHandler"(): $IItemHandler
 "toContainer"(): $Container
 "getSlotInv"(arg0: integer): $InternalInventory
 "simulateAdd"(arg0: $ItemStack$$Type): $ItemStack
 "removeItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "addItems"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "addItems"(arg0: $ItemStack$$Type): $ItemStack
 "spliterator"(): $Spliterator<($ItemStack)>
 "forEach"(arg0: $Consumer$$Type<($ItemStack)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeInventory$$Type = ($IUpgradeInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeInventory_ = $IUpgradeInventory$$Type;
}}
declare module "appeng.api.upgrades.IUpgradeableItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"

export interface $IUpgradeableItem extends $ItemLike {

 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item

(): $Item$$Type
}

export namespace $IUpgradeableItem {
const probejs$$marker: never
}
export class $IUpgradeableItem$$Static implements $IUpgradeableItem {


 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeableItem$$Type = (() => $Item$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeableItem_ = $IUpgradeableItem$$Type;
}}
declare module "appeng.api.features.IGridLinkableHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"

export interface $IGridLinkableHandler {

 "link"(arg0: $ItemStack$$Type, arg1: $GlobalPos$$Type): void
 "unlink"(arg0: $ItemStack$$Type): void
 "canLink"(arg0: $ItemStack$$Type): boolean
}

export namespace $IGridLinkableHandler {
const probejs$$marker: never
}
export class $IGridLinkableHandler$$Static implements $IGridLinkableHandler {


 "link"(arg0: $ItemStack$$Type, arg1: $GlobalPos$$Type): void
 "unlink"(arg0: $ItemStack$$Type): void
 "canLink"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridLinkableHandler$$Type = ($IGridLinkableHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridLinkableHandler_ = $IGridLinkableHandler$$Type;
}}
declare module "appeng.api.networking.IGridServiceProvider" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IGridServiceProvider {

 "removeNode"(arg0: $IGridNode$$Type): void
 "addNode"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
 "onServerStartTick"(): void
 "onServerEndTick"(): void
 "onLevelStartTick"(arg0: $Level$$Type): void
 "onLevelEndTick"(arg0: $Level$$Type): void
 "saveNodeData"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
 "debugDump"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type): void
}

export namespace $IGridServiceProvider {
const probejs$$marker: never
}
export class $IGridServiceProvider$$Static implements $IGridServiceProvider {


 "removeNode"(arg0: $IGridNode$$Type): void
 "addNode"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
 "onServerStartTick"(): void
 "onServerEndTick"(): void
 "onLevelStartTick"(arg0: $Level$$Type): void
 "onLevelEndTick"(arg0: $Level$$Type): void
 "saveNodeData"(arg0: $IGridNode$$Type, arg1: $CompoundTag$$Type): void
 "debugDump"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridServiceProvider$$Type = ($IGridServiceProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridServiceProvider_ = $IGridServiceProvider$$Type;
}}
declare module "appeng.api.implementations.blockentities.PatternContainerGroup" {
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PatternContainerGroup extends $Record {

constructor(icon: $AEItemKey$$Type, name: $Component$$Type, tooltip: $List$$Type<($Component$$Type)>)

public "name"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "tooltip"(): $List<($Component)>
public "icon"(): $AEItemKey
public static "fromMachine"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $PatternContainerGroup
public static "readFromPacket"(arg0: $RegistryFriendlyByteBuf$$Type): $PatternContainerGroup
public "writeToPacket"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "nothing"(): $PatternContainerGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternContainerGroup$$Type = ({"icon"?: $AEItemKey$$Type, "tooltip"?: $List$$Type<($Component$$Type)>, "name"?: $Component$$Type}) | ([icon?: $AEItemKey$$Type, tooltip?: $List$$Type<($Component$$Type)>, name?: $Component$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternContainerGroup_ = $PatternContainerGroup$$Type;
}}
declare module "appeng.api.implementations.blockentities.ICrankable" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ICrankable {

 "canTurn"(): boolean
 "applyTurn"(): void
}

export namespace $ICrankable {
function get(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ICrankable
const probejs$$marker: never
}
export class $ICrankable$$Static implements $ICrankable {


static "get"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ICrankable
 "canTurn"(): boolean
 "applyTurn"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICrankable$$Type = ($ICrankable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICrankable_ = $ICrankable$$Type;
}}
declare module "appeng.api.storage.ILinkStatus" {
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $ILinkStatus {

 "connected"(): boolean
 "statusDescription"(): $Component
}

export namespace $ILinkStatus {
function ofConnected(): $ILinkStatus
function ofDisconnected(arg0: $Component$$Type): $ILinkStatus
function ofDisconnected(): $ILinkStatus
function ofManagedNode(arg0: $IManagedGridNode$$Type): $ILinkStatus
const probejs$$marker: never
}
export class $ILinkStatus$$Static implements $ILinkStatus {


 "connected"(): boolean
 "statusDescription"(): $Component
static "ofConnected"(): $ILinkStatus
static "ofDisconnected"(arg0: $Component$$Type): $ILinkStatus
static "ofDisconnected"(): $ILinkStatus
static "ofManagedNode"(arg0: $IManagedGridNode$$Type): $ILinkStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILinkStatus$$Type = ($ILinkStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILinkStatus_ = $ILinkStatus$$Type;
}}
declare module "appeng.api.parts.RegisterPartCapabilitiesEvent" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$IPartHost, $IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterPartCapabilitiesEvent extends $Event implements $IModBusEvent {

constructor()

public "register"<T, C, P extends $IPart>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $ICapabilityProvider$$Type<(P), (C), (T)>, arg2: $Class$$Type<(P)>): void
public "registerContext"<T, C>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $Function$$Type<(C), ($Direction$$Type)>): void
public "addHostType"<T extends ($BlockEntity) & ($IPartHost)>(arg0: $BlockEntityType$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterPartCapabilitiesEvent$$Type = ($RegisterPartCapabilitiesEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterPartCapabilitiesEvent_ = $RegisterPartCapabilitiesEvent$$Type;
}}
declare module "appeng.api.util.AEColor" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$List, $List$$Type} from "java.util.List"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $AEColor extends $Enum<($AEColor)> implements $StringRepresentable {
readonly "mediumVariant": integer
readonly "englishName": string
static readonly "GRAY": $AEColor
readonly "translationKey": string
static readonly "BLUE": $AEColor
static readonly "TINTINDEX_BRIGHT": integer
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($AEColor)>
static readonly "VALID_COLORS": $List<($AEColor)>
static readonly "PINK": $AEColor
readonly "whiteVariant": integer
static readonly "BLACK": $AEColor
static readonly "TRANSPARENT": $AEColor
static readonly "BROWN": $AEColor
static readonly "ORANGE": $AEColor
static readonly "WHITE": $AEColor
static readonly "TINTINDEX_DARK": integer
readonly "registryPrefix": string
static readonly "CODEC": $Codec<($AEColor)>
readonly "contrastTextColor": integer
static readonly "TINTINDEX_MEDIUM_BRIGHT": integer
static readonly "PURPLE": $AEColor
static readonly "GREEN": $AEColor
static readonly "TINTINDEX_MEDIUM": integer
static readonly "RED": $AEColor
readonly "dye": $DyeColor
static readonly "LIGHT_GRAY": $AEColor
static readonly "LIGHT_BLUE": $AEColor
static readonly "LIME": $AEColor
static readonly "MAGENTA": $AEColor
static readonly "YELLOW": $AEColor
static readonly "CYAN": $AEColor
readonly "blackVariant": integer


public "toString"(): string
public static "values"(): ($AEColor)[]
public static "valueOf"(arg0: string): $AEColor
public "getSerializedName"(): string
public "getVariantByTintIndex"(arg0: integer): integer
public static "fromDye"(arg0: $DyeColor$$Type): $AEColor
public "getEnglishName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "serializedName"(): string
get "englishName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEColor$$Type = (("white") | ("light_gray") | ("gray") | ("black") | ("lime") | ("yellow") | ("orange") | ("brown") | ("red") | ("pink") | ("magenta") | ("purple") | ("blue") | ("light_blue") | ("cyan") | ("green") | ("fluix"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEColor_ = $AEColor$$Type;
}}
declare module "appeng.api.stacks.AEFluidKeys" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $AEFluidKeys extends $AEKeyType {
static readonly "CODEC": $Codec<($AEKeyType)>
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($AEKeyType)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKeyType)>


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEFluidKeys$$Type = ($AEFluidKeys);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEFluidKeys_ = $AEFluidKeys$$Type;
}}
declare module "appeng.api.orientation.IOrientationStrategy" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$RelativeSide, $RelativeSide$$Type} from "appeng.api.orientation.RelativeSide"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IOrientationStrategy {

 "getProperties"(): $Collection<($Property<(any)>)>
 "allowsPlayerRotation"(): boolean
 "getSpin"(arg0: $BlockState$$Type): integer
 "getSide"(arg0: $BlockState$$Type, arg1: $RelativeSide$$Type): $Direction
 "setUp"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "getStateForPlacement"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
 "getAllStates"(arg0: $BlockState$$Type): $Stream<($BlockState)>
 "setFacing"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "getFacing"(arg0: $BlockState$$Type): $Direction
 "setOrientation"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $Direction$$Type): $BlockState
 "setOrientation"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: integer): $BlockState
 "setSpin"(arg0: $BlockState$$Type, arg1: integer): $BlockState

(): $Collection$$Type<($Property$$Type<(any)>)>
get "properties"(): $Collection<($Property<(any)>)>
}

export namespace $IOrientationStrategy {
const SPIN: $IntegerProperty
function get(arg0: $BlockState$$Type): $IOrientationStrategy
const probejs$$marker: never
}
export class $IOrientationStrategy$$Static implements $IOrientationStrategy {
static readonly "SPIN": $IntegerProperty


static "get"(arg0: $BlockState$$Type): $IOrientationStrategy
 "getProperties"(): $Collection<($Property<(any)>)>
 "allowsPlayerRotation"(): boolean
 "getSpin"(arg0: $BlockState$$Type): integer
 "getSide"(arg0: $BlockState$$Type, arg1: $RelativeSide$$Type): $Direction
 "setUp"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "getStateForPlacement"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
 "getAllStates"(arg0: $BlockState$$Type): $Stream<($BlockState)>
 "setFacing"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "getFacing"(arg0: $BlockState$$Type): $Direction
 "setOrientation"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $Direction$$Type): $BlockState
 "setOrientation"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: integer): $BlockState
 "setSpin"(arg0: $BlockState$$Type, arg1: integer): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOrientationStrategy$$Type = (() => $Collection$$Type<($Property$$Type<(any)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOrientationStrategy_ = $IOrientationStrategy$$Type;
}}
declare module "appeng.api.storage.AEKeySlotFilter" {
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export interface $AEKeySlotFilter {

 "isAllowed"(arg0: integer, arg1: $AEKey$$Type): boolean

(arg0: integer, arg1: $AEKey): boolean
}

export namespace $AEKeySlotFilter {
const probejs$$marker: never
}
export class $AEKeySlotFilter$$Static implements $AEKeySlotFilter {


 "isAllowed"(arg0: integer, arg1: $AEKey$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEKeySlotFilter$$Type = ((arg0: integer, arg1: $AEKey) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEKeySlotFilter_ = $AEKeySlotFilter$$Type;
}}
declare module "appeng.api.implementations.items.IStorageComponent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IStorageComponent {

 "getBytes"(arg0: $ItemStack$$Type): integer
 "isStorageComponent"(arg0: $ItemStack$$Type): boolean
}

export namespace $IStorageComponent {
const probejs$$marker: never
}
export class $IStorageComponent$$Static implements $IStorageComponent {


 "getBytes"(arg0: $ItemStack$$Type): integer
 "isStorageComponent"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageComponent$$Type = ($IStorageComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageComponent_ = $IStorageComponent$$Type;
}}
declare module "appeng.api.networking.ticking.IGridTickable" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IGridNodeService, $IGridNodeService$$Type} from "appeng.api.networking.IGridNodeService"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export interface $IGridTickable extends $IGridNodeService {

 "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
 "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
}

export namespace $IGridTickable {
const probejs$$marker: never
}
export class $IGridTickable$$Static implements $IGridTickable {


 "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
 "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridTickable$$Type = ($IGridTickable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridTickable_ = $IGridTickable$$Type;
}}
declare module "appeng.api.util.AECableVariant" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $AECableVariant extends $Enum<($AECableVariant)> {
static readonly "GLASS": $AECableVariant
static readonly "COVERED": $AECableVariant
static readonly "NONE": $AECableVariant
static readonly "SMART": $AECableVariant


public static "values"(): ($AECableVariant)[]
public static "min"(arg0: $AECableVariant$$Type, arg1: $AECableVariant$$Type): $AECableVariant
public static "max"(arg0: $AECableVariant$$Type, arg1: $AECableVariant$$Type): $AECableVariant
public static "valueOf"(arg0: string): $AECableVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AECableVariant$$Type = (("none") | ("glass") | ("covered") | ("smart"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AECableVariant_ = $AECableVariant$$Type;
}}
declare module "appeng.api.networking.security.IActionHost" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"

export interface $IActionHost {

 "getActionableNode"(): $IGridNode

(): $IGridNode$$Type
get "actionableNode"(): $IGridNode
}

export namespace $IActionHost {
const probejs$$marker: never
}
export class $IActionHost$$Static implements $IActionHost {


 "getActionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IActionHost$$Type = (() => $IGridNode$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IActionHost_ = $IActionHost$$Type;
}}
declare module "appeng.api.storage.cells.ICellWorkbenchItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$IUpgradeableItem, $IUpgradeableItem$$Type} from "appeng.api.upgrades.IUpgradeableItem"

export interface $ICellWorkbenchItem extends $IUpgradeableItem {

 "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
 "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
 "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
 "isEditable"(arg0: $ItemStack$$Type): boolean
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
}

export namespace $ICellWorkbenchItem {
const probejs$$marker: never
}
export class $ICellWorkbenchItem$$Static implements $ICellWorkbenchItem {


 "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
 "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
 "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
 "isEditable"(arg0: $ItemStack$$Type): boolean
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICellWorkbenchItem$$Type = ($ICellWorkbenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICellWorkbenchItem_ = $ICellWorkbenchItem$$Type;
}}
declare module "appeng.api.inventories.ItemTransfer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"

export interface $ItemTransfer {

 "removeSimilarItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateAdd"(arg0: $ItemStack$$Type): $ItemStack
 "removeItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "addItems"(arg0: $ItemStack$$Type): $ItemStack
 "addItems"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
}

export namespace $ItemTransfer {
const probejs$$marker: never
}
export class $ItemTransfer$$Static implements $ItemTransfer {


 "removeSimilarItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateSimilarRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $FuzzyMode$$Type, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateAdd"(arg0: $ItemStack$$Type): $ItemStack
 "removeItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "simulateRemove"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "addItems"(arg0: $ItemStack$$Type): $ItemStack
 "addItems"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransfer$$Type = ($ItemTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTransfer_ = $ItemTransfer$$Type;
}}
declare module "appeng.api.implementations.blockentities.IChestOrDrive" {
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$StorageCell, $StorageCell$$Type} from "appeng.api.storage.cells.StorageCell"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IActionHost, $IActionHost$$Type} from "appeng.api.networking.security.IActionHost"
import {$CellState, $CellState$$Type} from "appeng.api.storage.cells.CellState"

export interface $IChestOrDrive extends $IActionHost {

 "isPowered"(): boolean
 "getCellInventory"(arg0: integer): $MEStorage
 "getCellCount"(): integer
 "getCellStatus"(arg0: integer): $CellState
 "getCellItem"(arg0: integer): $Item
 "isCellBlinking"(arg0: integer): boolean
 "getOriginalCellInventory"(arg0: integer): $StorageCell
 "getActionableNode"(): $IGridNode
get "powered"(): boolean
get "cellCount"(): integer
get "actionableNode"(): $IGridNode
}

export namespace $IChestOrDrive {
const probejs$$marker: never
}
export class $IChestOrDrive$$Static implements $IChestOrDrive {


 "isPowered"(): boolean
 "getCellInventory"(arg0: integer): $MEStorage
 "getCellCount"(): integer
 "getCellStatus"(arg0: integer): $CellState
 "getCellItem"(arg0: integer): $Item
 "isCellBlinking"(arg0: integer): boolean
 "getOriginalCellInventory"(arg0: integer): $StorageCell
 "getActionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChestOrDrive$$Type = ($IChestOrDrive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChestOrDrive_ = $IChestOrDrive$$Type;
}}
declare module "appeng.api.implementations.blockentities.IColorableBlockEntity" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $IColorableBlockEntity {

 "getColor"(): $AEColor
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
get "color"(): $AEColor
}

export namespace $IColorableBlockEntity {
const probejs$$marker: never
}
export class $IColorableBlockEntity$$Static implements $IColorableBlockEntity {


 "getColor"(): $AEColor
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColorableBlockEntity$$Type = ($IColorableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColorableBlockEntity_ = $IColorableBlockEntity$$Type;
}}
declare module "appeng.api.implementations.items.IAEItemPowerStorage" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$AccessRestriction, $AccessRestriction$$Type} from "appeng.api.config.AccessRestriction"

export interface $IAEItemPowerStorage {

 "getAECurrentPower"(arg0: $ItemStack$$Type): double
 "getAEMaxPower"(arg0: $ItemStack$$Type): double
 "getPowerFlow"(arg0: $ItemStack$$Type): $AccessRestriction
 "injectAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
 "extractAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
 "getChargeRate"(arg0: $ItemStack$$Type): double
}

export namespace $IAEItemPowerStorage {
const probejs$$marker: never
}
export class $IAEItemPowerStorage$$Static implements $IAEItemPowerStorage {


 "getAECurrentPower"(arg0: $ItemStack$$Type): double
 "getAEMaxPower"(arg0: $ItemStack$$Type): double
 "getPowerFlow"(arg0: $ItemStack$$Type): $AccessRestriction
 "injectAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
 "extractAEPower"(arg0: $ItemStack$$Type, arg1: double, arg2: $Actionable$$Type): double
 "getChargeRate"(arg0: $ItemStack$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEItemPowerStorage$$Type = ($IAEItemPowerStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAEItemPowerStorage_ = $IAEItemPowerStorage$$Type;
}}
declare module "appeng.api.implementations.items.MemoryCardMessages" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $MemoryCardMessages extends $Enum<($MemoryCardMessages)> {
static readonly "SETTINGS_RESET": $MemoryCardMessages
static readonly "SETTINGS_CLEARED": $MemoryCardMessages
static readonly "SETTINGS_SAVED": $MemoryCardMessages
static readonly "INVALID_MACHINE": $MemoryCardMessages
static readonly "SETTINGS_LOADED": $MemoryCardMessages


public static "values"(): ($MemoryCardMessages)[]
public static "valueOf"(arg0: string): $MemoryCardMessages
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryCardMessages$$Type = (("invalid_machine") | ("settings_loaded") | ("settings_saved") | ("settings_reset") | ("settings_cleared"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryCardMessages_ = $MemoryCardMessages$$Type;
}}
declare module "appeng.api.stacks.GenericStack" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GenericStack extends $Record {
static readonly "FAULT_TOLERANT_LIST_CODEC": $Codec<($List<($GenericStack)>)>
static readonly "CODEC": $Codec<($GenericStack)>
static readonly "AMOUNT_FIELD": string
static readonly "FAULT_TOLERANT_NULLABLE_LIST_CODEC": $Codec<($List<($GenericStack)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($GenericStack)>

constructor(what: $AEKey$$Type, amount: long)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "isWrapped"(arg0: $ItemStack$$Type): boolean
public static "sum"(arg0: $GenericStack$$Type, arg1: $GenericStack$$Type): $GenericStack
public static "writeBuffer"(arg0: $GenericStack$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public "what"(): $AEKey
public static "readBuffer"(arg0: $RegistryFriendlyByteBuf$$Type): $GenericStack
public "amount"(): long
public static "getStackSizeOrZero"(arg0: $GenericStack$$Type): long
public static "unwrapItemStack"(arg0: $ItemStack$$Type): $GenericStack
public static "wrapInItemStack"(arg0: $AEKey$$Type, arg1: long): $ItemStack
public static "wrapInItemStack"(arg0: $GenericStack$$Type): $ItemStack
public static "fromFluidStack"(arg0: $FluidStack$$Type): $GenericStack
public static "fromItemStack"(arg0: $ItemStack$$Type): $GenericStack
public static "writeTag"(arg0: $HolderLookup$Provider$$Type, arg1: $GenericStack$$Type): $CompoundTag
public static "readTag"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $GenericStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericStack$$Type = ({"amount"?: long, "what"?: $AEKey$$Type}) | ([amount?: long, what?: $AEKey$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericStack_ = $GenericStack$$Type;
}}
declare module "appeng.api.config.LockCraftingMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $LockCraftingMode extends $Enum<($LockCraftingMode)> {
static readonly "LOCK_UNTIL_PULSE": $LockCraftingMode
static readonly "LOCK_UNTIL_RESULT": $LockCraftingMode
static readonly "NONE": $LockCraftingMode
static readonly "LOCK_WHILE_HIGH": $LockCraftingMode
static readonly "LOCK_WHILE_LOW": $LockCraftingMode


public static "values"(): ($LockCraftingMode)[]
public static "valueOf"(arg0: string): $LockCraftingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockCraftingMode$$Type = (("none") | ("lock_until_pulse") | ("lock_while_high") | ("lock_while_low") | ("lock_until_result"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockCraftingMode_ = $LockCraftingMode$$Type;
}}
declare module "appeng.api.networking.events.statistics.GridStatisticsEvent" {
import {$GridEvent, $GridEvent$$Type} from "appeng.api.networking.events.GridEvent"

export class $GridStatisticsEvent extends $GridEvent {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridStatisticsEvent$$Type = ($GridStatisticsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridStatisticsEvent_ = $GridStatisticsEvent$$Type;
}}
declare module "appeng.api.networking.ticking.TickRateModulation" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TickRateModulation extends $Enum<($TickRateModulation)> {
static readonly "SAME": $TickRateModulation
static readonly "URGENT": $TickRateModulation
static readonly "SLEEP": $TickRateModulation
static readonly "IDLE": $TickRateModulation
static readonly "FASTER": $TickRateModulation
static readonly "SLOWER": $TickRateModulation


public static "values"(): ($TickRateModulation)[]
public static "valueOf"(arg0: string): $TickRateModulation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickRateModulation$$Type = (("sleep") | ("idle") | ("slower") | ("same") | ("faster") | ("urgent"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickRateModulation_ = $TickRateModulation$$Type;
}}
declare module "appeng.api.networking.energy.IAEPowerStorage" {
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$IGridNodeService, $IGridNodeService$$Type} from "appeng.api.networking.IGridNodeService"
import {$AccessRestriction, $AccessRestriction$$Type} from "appeng.api.config.AccessRestriction"

export interface $IAEPowerStorage extends $IEnergySource, $IGridNodeService {

 "getPriority"(): integer
 "isAEPublicPowerStorage"(): boolean
 "getAECurrentPower"(): double
 "getAEMaxPower"(): double
 "getPowerFlow"(): $AccessRestriction
 "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
get "priority"(): integer
get "aEPublicPowerStorage"(): boolean
get "aECurrentPower"(): double
get "aEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
}

export namespace $IAEPowerStorage {
function empty(): $IEnergySource
const probejs$$marker: never
}
export class $IAEPowerStorage$$Static implements $IAEPowerStorage {


 "getPriority"(): integer
 "isAEPublicPowerStorage"(): boolean
 "getAECurrentPower"(): double
 "getAEMaxPower"(): double
 "getPowerFlow"(): $AccessRestriction
 "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
static "empty"(): $IEnergySource
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEPowerStorage$$Type = ($IAEPowerStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAEPowerStorage_ = $IAEPowerStorage$$Type;
}}
declare module "appeng.api.parts.SelectedPart" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$IFacadePart, $IFacadePart$$Type} from "appeng.api.parts.IFacadePart"

export class $SelectedPart {
readonly "side": $Direction
readonly "part": $IPart
readonly "facade": $IFacadePart

constructor()
constructor(arg0: $IPart$$Type, arg1: $Direction$$Type)
constructor(arg0: $IFacadePart$$Type, arg1: $Direction$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectedPart$$Type = ($SelectedPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectedPart_ = $SelectedPart$$Type;
}}
declare module "appeng.api.orientation.BlockOrientation" {
import {$Direction$AxisDirection, $Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RelativeSide, $RelativeSide$$Type} from "appeng.api.orientation.RelativeSide"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Transformation, $Transformation$$Type} from "com.mojang.math.Transformation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockOrientation extends $Enum<($BlockOrientation)> {
static readonly "UP_SOUTH": $BlockOrientation
static readonly "EAST_SOUTH": $BlockOrientation
static readonly "SOUTH_DOWN": $BlockOrientation
static readonly "UP_NORTH": $BlockOrientation
static readonly "NORTH_UP": $BlockOrientation
static readonly "NORTH_WEST": $BlockOrientation
static readonly "EAST_NORTH": $BlockOrientation
static readonly "DOWN_EAST": $BlockOrientation
static readonly "DOWN_WEST": $BlockOrientation
static readonly "UP_WEST": $BlockOrientation
static readonly "DOWN_SOUTH": $BlockOrientation
static readonly "EAST_UP": $BlockOrientation
static readonly "DOWN_NORTH": $BlockOrientation
static readonly "UP_EAST": $BlockOrientation
static readonly "EAST_DOWN": $BlockOrientation
static readonly "WEST_NORTH": $BlockOrientation
static readonly "NORTH_EAST": $BlockOrientation
static readonly "SOUTH_UP": $BlockOrientation
static readonly "SOUTH_EAST": $BlockOrientation
static readonly "WEST_SOUTH": $BlockOrientation
static readonly "WEST_DOWN": $BlockOrientation
static readonly "SOUTH_WEST": $BlockOrientation
static readonly "NORTH_DOWN": $BlockOrientation
static readonly "WEST_UP": $BlockOrientation


public static "get"(arg0: $Direction$$Type): $BlockOrientation
public static "get"(arg0: $Direction$$Type, arg1: $Direction$$Type): $BlockOrientation
public static "get"(arg0: $Direction$$Type, arg1: integer): $BlockOrientation
public static "get"(arg0: $BlockEntity$$Type): $BlockOrientation
public static "get"(arg0: $BlockState$$Type): $BlockOrientation
public static "get"(arg0: $IOrientationStrategy$$Type, arg1: $BlockState$$Type): $BlockOrientation
public static "values"(): ($BlockOrientation)[]
public static "valueOf"(arg0: string): $BlockOrientation
public "rotate"(arg0: $Direction$$Type): $Direction
public "rotateClockwiseAround"(arg0: $Direction$Axis$$Type, arg1: $Direction$AxisDirection$$Type): $BlockOrientation
public "rotateClockwiseAround"(arg0: $Direction$$Type): $BlockOrientation
public "getSpin"(): integer
public "getSide"(arg0: $RelativeSide$$Type): $Direction
public "getSides"(arg0: $Set$$Type<($RelativeSide$$Type)>): $Set<($Direction)>
public "setOn"(arg0: $BlockEntity$$Type): void
public "setOn"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getTransformation"(): $Transformation
public "getRelativeSide"(arg0: $Direction$$Type): $RelativeSide
public "getQuaternion"(): $Quaternionf
public "getAngleX"(): integer
public "getAngleY"(): integer
public "getAngleZ"(): integer
public "isRedundant"(): boolean
public "resultingRotate"(arg0: $Direction$$Type): $Direction
public "getRelativeSides"(arg0: $Set$$Type<($Direction$$Type)>): $Set<($RelativeSide)>
get "spin"(): integer
set "on"(value: $BlockEntity$$Type)
get "transformation"(): $Transformation
get "quaternion"(): $Quaternionf
get "angleX"(): integer
get "angleY"(): integer
get "angleZ"(): integer
get "redundant"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockOrientation$$Type = (("down_north") | ("down_west") | ("down_south") | ("down_east") | ("up_north") | ("up_east") | ("up_south") | ("up_west") | ("north_up") | ("north_west") | ("north_down") | ("north_east") | ("south_up") | ("south_east") | ("south_down") | ("south_west") | ("west_up") | ("west_south") | ("west_down") | ("west_north") | ("east_up") | ("east_north") | ("east_down") | ("east_south"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockOrientation_ = $BlockOrientation$$Type;
}}
declare module "appeng.api.config.Setting" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $Setting<T extends $Enum<(T)>> {

constructor(arg0: string, arg1: $Class$$Type<(T)>)
constructor(arg0: string, arg1: $Class$$Type<(T)>, arg2: $EnumSet$$Type<(T)>)

public "getName"(): string
public "toString"(): string
public "getValue"(arg0: $IConfigManager$$Type): T
public "copy"(arg0: $IConfigManager$$Type, arg1: $IConfigManager$$Type): void
public "getValues"(): $Set<(T)>
public "setFromString"(arg0: $IConfigManager$$Type, arg1: string): void
public "getEnumClass"(): $Class<(T)>
get "name"(): string
get "values"(): $Set<(T)>
get "enumClass"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Setting$$Type<T> = ($Setting<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Setting_<T> = $Setting$$Type<(T)>;
}}
declare module "appeng.api.storage.cells.StorageCell" {
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$CellState, $CellState$$Type} from "appeng.api.storage.cells.CellState"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $StorageCell extends $MEStorage {

 "persist"(): void
 "getStatus"(): $CellState
 "getIdleDrain"(): double
 "canFitInsideCell"(): boolean
 "getDescription"(): $Component
 "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
 "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
 "getAvailableStacks"(): $KeyCounter
 "getAvailableStacks"(arg0: $KeyCounter$$Type): void
 "isPreferredStorageFor"(arg0: $AEKey$$Type, arg1: $IActionSource$$Type): boolean
get "status"(): $CellState
get "idleDrain"(): double
get "description"(): $Component
get "availableStacks"(): $KeyCounter
}

export namespace $StorageCell {
function checkPreconditions(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
const probejs$$marker: never
}
export class $StorageCell$$Static implements $StorageCell {


 "persist"(): void
 "getStatus"(): $CellState
 "getIdleDrain"(): double
 "canFitInsideCell"(): boolean
 "getDescription"(): $Component
 "extract"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
 "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): long
 "getAvailableStacks"(): $KeyCounter
 "getAvailableStacks"(arg0: $KeyCounter$$Type): void
 "isPreferredStorageFor"(arg0: $AEKey$$Type, arg1: $IActionSource$$Type): boolean
static "checkPreconditions"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type, arg3: $IActionSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCell$$Type = ($StorageCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageCell_ = $StorageCell$$Type;
}}
declare module "appeng.api.networking.pathing.IPathingService" {
import {$ChannelMode, $ChannelMode$$Type} from "appeng.api.networking.pathing.ChannelMode"
import {$IGridService, $IGridService$$Type} from "appeng.api.networking.IGridService"
import {$ControllerState, $ControllerState$$Type} from "appeng.api.networking.pathing.ControllerState"

export interface $IPathingService extends $IGridService {

 "repath"(): void
 "getUsedChannels"(): integer
 "isNetworkBooting"(): boolean
 "getControllerState"(): $ControllerState
 "getChannelMode"(): $ChannelMode
get "usedChannels"(): integer
get "networkBooting"(): boolean
get "controllerState"(): $ControllerState
get "channelMode"(): $ChannelMode
}

export namespace $IPathingService {
const probejs$$marker: never
}
export class $IPathingService$$Static implements $IPathingService {


 "repath"(): void
 "getUsedChannels"(): integer
 "isNetworkBooting"(): boolean
 "getControllerState"(): $ControllerState
 "getChannelMode"(): $ChannelMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPathingService$$Type = ($IPathingService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPathingService_ = $IPathingService$$Type;
}}
declare module "appeng.api.stacks.AEItemKeys" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $AEItemKeys extends $AEKeyType {
static readonly "CODEC": $Codec<($AEKeyType)>
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($AEKeyType)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKeyType)>


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEItemKeys$$Type = ($AEItemKeys);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEItemKeys_ = $AEItemKeys$$Type;
}}
declare module "appeng.api.implementations.items.IMemoryCard" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MemoryCardMessages, $MemoryCardMessages$$Type} from "appeng.api.implementations.items.MemoryCardMessages"

export interface $IMemoryCard {

 "notifyUser"(arg0: $Player$$Type, arg1: $MemoryCardMessages$$Type): void

(arg0: $Player, arg1: $MemoryCardMessages): void
}

export namespace $IMemoryCard {
const probejs$$marker: never
}
export class $IMemoryCard$$Static implements $IMemoryCard {


 "notifyUser"(arg0: $Player$$Type, arg1: $MemoryCardMessages$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMemoryCard$$Type = ((arg0: $Player, arg1: $MemoryCardMessages) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMemoryCard_ = $IMemoryCard$$Type;
}}
declare module "appeng.api.implementations.items.ISpatialStorageCell" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ISpatialStorageCell {

 "getMaxStoredDim"(arg0: $ItemStack$$Type): integer
 "getAllocatedPlotId"(arg0: $ItemStack$$Type): integer
 "isSpatialStorage"(arg0: $ItemStack$$Type): boolean
 "doSpatialTransition"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: integer): boolean
}

export namespace $ISpatialStorageCell {
const probejs$$marker: never
}
export class $ISpatialStorageCell$$Static implements $ISpatialStorageCell {


 "getMaxStoredDim"(arg0: $ItemStack$$Type): integer
 "getAllocatedPlotId"(arg0: $ItemStack$$Type): integer
 "isSpatialStorage"(arg0: $ItemStack$$Type): boolean
 "doSpatialTransition"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpatialStorageCell$$Type = ($ISpatialStorageCell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpatialStorageCell_ = $ISpatialStorageCell$$Type;
}}
declare module "appeng.api.networking.IGridNode" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IGridNodeService, $IGridNodeService$$Type} from "appeng.api.networking.IGridNodeService"
import {$GridFlags, $GridFlags$$Type} from "appeng.api.networking.GridFlags"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$IGridConnection, $IGridConnection$$Type} from "appeng.api.networking.IGridConnection"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IGridVisitor, $IGridVisitor$$Type} from "appeng.api.networking.IGridVisitor"
import {$CrashReportCategory, $CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $IGridNode {

 "isActive"(): boolean
 "getOwner"(): any
 "getLevel"(): $ServerLevel
 "getService"<T extends $IGridNodeService>(arg0: $Class$$Type<(T)>): T
 "fillCrashReportCategory"(arg0: $CrashReportCategory$$Type): void
 "getConnections"(): $List<($IGridConnection)>
 "isPowered"(): boolean
 "hasFlag"(arg0: $GridFlags$$Type): boolean
 "getConnectedSides"(): $Set<($Direction)>
 "getInWorldConnections"(): $Map<($Direction), ($IGridConnection)>
 "getOwningPlayerId"(): integer
 "getIdlePowerUsage"(): double
 "getUsedChannels"(): integer
 "hasGridBooted"(): boolean
 "beginVisit"(arg0: $IGridVisitor$$Type): void
 "getGrid"(): $IGrid
 "getGridColor"(): $AEColor
 "getMaxChannels"(): integer
 "isOnline"(): boolean
 "getOwningPlayerProfileId"(): $UUID
 "meetsChannelRequirements"(): boolean
 "getVisualRepresentation"(): $AEItemKey
get "active"(): boolean
get "owner"(): any
get "level"(): $ServerLevel
get "connections"(): $List<($IGridConnection)>
get "powered"(): boolean
get "connectedSides"(): $Set<($Direction)>
get "inWorldConnections"(): $Map<($Direction), ($IGridConnection)>
get "owningPlayerId"(): integer
get "idlePowerUsage"(): double
get "usedChannels"(): integer
get "grid"(): $IGrid
get "gridColor"(): $AEColor
get "maxChannels"(): integer
get "online"(): boolean
get "owningPlayerProfileId"(): $UUID
get "visualRepresentation"(): $AEItemKey
}

export namespace $IGridNode {
const probejs$$marker: never
}
export class $IGridNode$$Static implements $IGridNode {


 "isActive"(): boolean
 "getOwner"(): any
 "getLevel"(): $ServerLevel
 "getService"<T extends $IGridNodeService>(arg0: $Class$$Type<(T)>): T
 "fillCrashReportCategory"(arg0: $CrashReportCategory$$Type): void
 "getConnections"(): $List<($IGridConnection)>
 "isPowered"(): boolean
 "hasFlag"(arg0: $GridFlags$$Type): boolean
 "getConnectedSides"(): $Set<($Direction)>
 "getInWorldConnections"(): $Map<($Direction), ($IGridConnection)>
 "getOwningPlayerId"(): integer
 "getIdlePowerUsage"(): double
 "getUsedChannels"(): integer
 "hasGridBooted"(): boolean
 "beginVisit"(arg0: $IGridVisitor$$Type): void
 "getGrid"(): $IGrid
 "getGridColor"(): $AEColor
 "getMaxChannels"(): integer
 "isOnline"(): boolean
 "getOwningPlayerProfileId"(): $UUID
 "meetsChannelRequirements"(): boolean
 "getVisualRepresentation"(): $AEItemKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridNode$$Type = ($IGridNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridNode_ = $IGridNode$$Type;
}}
declare module "appeng.api.parts.ICustomCableConnection" {
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"

export interface $ICustomCableConnection {

 "getCableConnectionLength"(arg0: $AECableType$$Type): float

(arg0: $AECableType): float
}

export namespace $ICustomCableConnection {
const probejs$$marker: never
}
export class $ICustomCableConnection$$Static implements $ICustomCableConnection {


 "getCableConnectionLength"(arg0: $AECableType$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomCableConnection$$Type = ((arg0: $AECableType) => float);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomCableConnection_ = $ICustomCableConnection$$Type;
}}
declare module "appeng.api.crafting.PatternDetailsTooltip$Property" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PatternDetailsTooltip$Property extends $Record {

constructor(name: $Component$$Type, value: $Component$$Type)

public "name"(): $Component
public "value"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternDetailsTooltip$Property$$Type = ({"name"?: $Component$$Type, "value"?: $Component$$Type}) | ([name?: $Component$$Type, value?: $Component$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternDetailsTooltip$Property_ = $PatternDetailsTooltip$Property$$Type;
}}
declare module "appeng.api.storage.IStorageProvider" {
import {$IStorageMounts, $IStorageMounts$$Type} from "appeng.api.storage.IStorageMounts"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IGridNodeService, $IGridNodeService$$Type} from "appeng.api.networking.IGridNodeService"

export interface $IStorageProvider extends $IGridNodeService {

 "mountInventories"(arg0: $IStorageMounts$$Type): void

(arg0: $IStorageMounts): void
}

export namespace $IStorageProvider {
function requestUpdate(arg0: $IManagedGridNode$$Type): void
const probejs$$marker: never
}
export class $IStorageProvider$$Static implements $IStorageProvider {


 "mountInventories"(arg0: $IStorageMounts$$Type): void
static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageProvider$$Type = ((arg0: $IStorageMounts) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageProvider_ = $IStorageProvider$$Type;
}}
declare module "appeng.api.parts.IPart" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BusSupport, $BusSupport$$Type} from "appeng.api.parts.BusSupport"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPartCollisionHelper, $IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$ICustomCableConnection, $ICustomCableConnection$$Type} from "appeng.api.parts.ICustomCableConnection"
import {$IPartHost, $IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartModel, $IPartModel$$Type} from "appeng.api.parts.IPartModel"
import {$CrashReportCategory, $CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export interface $IPart extends $ICustomCableConnection, $Clearable {

 "getLightLevel"(): integer
 "isSolid"(): boolean
 "isLadder"(arg0: $LivingEntity$$Type): boolean
 "clearContent"(): void
 "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
 "getModelData"(): $ModelData
 "getGridNode"(): $IGridNode
 "onEntityCollision"(arg0: $Entity$$Type): void
 "canConnectRedstone"(): boolean
 "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
 "addEntityCrashInfo"(arg0: $CrashReportCategory$$Type): void
 "readVisualStateFromNBT"(arg0: $CompoundTag$$Type): void
 "writeVisualStateToNBT"(arg0: $CompoundTag$$Type): void
 "removeFromWorld"(): void
 "setPartHostInfo"(arg0: $Direction$$Type, arg1: $IPartHost$$Type, arg2: $BlockEntity$$Type): void
 "requireDynamicRender"(): boolean
 "isProvidingStrongPower"(): integer
 "isProvidingWeakPower"(): integer
 "getExternalFacingNode"(): $IGridNode
 "onUseWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "getStaticModels"(): $IPartModel
 "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "onPlacement"(arg0: $Player$$Type): void
 "addToWorld"(): void
 "renderDynamic"(arg0: float, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): void
 "onUpdateShape"(arg0: $Direction$$Type): void
 "onClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "onShiftClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "addPartDrop"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
 "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
 "getPartItem"(): $IPartItem<(any)>
 "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
 "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
 "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
 "onUseItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "canBePlacedOn"(arg0: $BusSupport$$Type): boolean
 "getExternalCableConnectionType"(): $AECableType
 "getDesiredConnectionType"(): $AECableType
 "getCableConnectionLength"(arg0: $AECableType$$Type): float
get "lightLevel"(): integer
get "solid"(): boolean
get "modelData"(): $ModelData
get "gridNode"(): $IGridNode
get "providingStrongPower"(): boolean
get "providingWeakPower"(): boolean
get "externalFacingNode"(): $IGridNode
get "staticModels"(): $IPartModel
get "partItem"(): $IPartItem<(any)>
get "externalCableConnectionType"(): $AECableType
get "desiredConnectionType"(): $AECableType
}

export namespace $IPart {
function tryClear(arg0: any): void
const probejs$$marker: never
}
export class $IPart$$Static implements $IPart {


 "getLightLevel"(): integer
 "isSolid"(): boolean
 "isLadder"(arg0: $LivingEntity$$Type): boolean
 "clearContent"(): void
 "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
 "getModelData"(): $ModelData
 "getGridNode"(): $IGridNode
 "onEntityCollision"(arg0: $Entity$$Type): void
 "canConnectRedstone"(): boolean
 "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
 "addEntityCrashInfo"(arg0: $CrashReportCategory$$Type): void
 "readVisualStateFromNBT"(arg0: $CompoundTag$$Type): void
 "writeVisualStateToNBT"(arg0: $CompoundTag$$Type): void
 "removeFromWorld"(): void
 "setPartHostInfo"(arg0: $Direction$$Type, arg1: $IPartHost$$Type, arg2: $BlockEntity$$Type): void
 "requireDynamicRender"(): boolean
 "isProvidingStrongPower"(): integer
 "isProvidingWeakPower"(): integer
 "getExternalFacingNode"(): $IGridNode
 "onUseWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "getStaticModels"(): $IPartModel
 "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "onPlacement"(arg0: $Player$$Type): void
 "addToWorld"(): void
 "renderDynamic"(arg0: float, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): void
 "onUpdateShape"(arg0: $Direction$$Type): void
 "onClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "onShiftClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "addPartDrop"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
 "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
 "getPartItem"(): $IPartItem<(any)>
 "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
 "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
 "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
 "onUseItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "canBePlacedOn"(arg0: $BusSupport$$Type): boolean
 "getExternalCableConnectionType"(): $AECableType
 "getDesiredConnectionType"(): $AECableType
 "getCableConnectionLength"(arg0: $AECableType$$Type): float
static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPart$$Type = ($IPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPart_ = $IPart$$Type;
}}
declare module "appeng.api.util.IConfigurableObject" {
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"

export interface $IConfigurableObject {

 "getConfigManager"(): $IConfigManager

(): $IConfigManager$$Type
get "configManager"(): $IConfigManager
}

export namespace $IConfigurableObject {
const probejs$$marker: never
}
export class $IConfigurableObject$$Static implements $IConfigurableObject {


 "getConfigManager"(): $IConfigManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurableObject$$Type = (() => $IConfigManager$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurableObject_ = $IConfigurableObject$$Type;
}}
declare module "appeng.api.networking.crafting.CraftingJobStatus" {
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CraftingJobStatus extends $Record {

constructor(crafting: $GenericStack$$Type, totalItems: long, progress: long, elapsedTimeNanos: long)

public "progress"(): long
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "crafting"(): $GenericStack
public "totalItems"(): long
public "elapsedTimeNanos"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingJobStatus$$Type = ({"progress"?: long, "elapsedTimeNanos"?: long, "crafting"?: $GenericStack$$Type, "totalItems"?: long}) | ([progress?: long, elapsedTimeNanos?: long, crafting?: $GenericStack$$Type, totalItems?: long]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingJobStatus_ = $CraftingJobStatus$$Type;
}}
declare module "appeng.api.config.AccessRestriction" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $AccessRestriction extends $Enum<($AccessRestriction)> {
static readonly "READ": $AccessRestriction
static readonly "NO_ACCESS": $AccessRestriction
static readonly "WRITE": $AccessRestriction
static readonly "READ_WRITE": $AccessRestriction


public static "values"(): ($AccessRestriction)[]
public static "valueOf"(arg0: string): $AccessRestriction
public "isAllowInsertion"(): boolean
public "isAllowExtraction"(): boolean
get "allowInsertion"(): boolean
get "allowExtraction"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessRestriction$$Type = (("no_access") | ("read") | ("write") | ("read_write"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessRestriction_ = $AccessRestriction$$Type;
}}
declare module "appeng.api.networking.IGridService" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IGridService {

}

export namespace $IGridService {
const probejs$$marker: never
}
export class $IGridService$$Static implements $IGridService {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridService$$Type = ($IGridService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridService_ = $IGridService$$Type;
}}
