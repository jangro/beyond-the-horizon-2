declare module "appeng.menu.me.common.IClientRepo" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$GridInventoryEntry, $GridInventoryEntry$$Type} from "appeng.menu.me.common.GridInventoryEntry"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $IClientRepo {

 "getAllEntries"(): $Set<($GridInventoryEntry)>
 "handleUpdate"(arg0: boolean, arg1: $List$$Type<($GridInventoryEntry$$Type)>): void
 "getByIngredient"(arg0: $Ingredient$$Type): $Collection<($GridInventoryEntry)>
get "allEntries"(): $Set<($GridInventoryEntry)>
}

export namespace $IClientRepo {
const probejs$$marker: never
}
export class $IClientRepo$$Static implements $IClientRepo {


 "getAllEntries"(): $Set<($GridInventoryEntry)>
 "handleUpdate"(arg0: boolean, arg1: $List$$Type<($GridInventoryEntry$$Type)>): void
 "getByIngredient"(arg0: $Ingredient$$Type): $Collection<($GridInventoryEntry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientRepo$$Type = ($IClientRepo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientRepo_ = $IClientRepo$$Type;
}}
declare module "appeng.menu.me.common.GridInventoryEntry" {
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"

export class $GridInventoryEntry {

constructor(arg0: long, arg1: $AEKey$$Type, arg2: long, arg3: long, arg4: boolean)

public "getSerial"(): long
public "getWhat"(): $AEKey
public "isCraftable"(): boolean
public "getStoredAmount"(): long
public "getRequestableAmount"(): long
public "isMeaningful"(): boolean
get "serial"(): long
get "what"(): $AEKey
get "craftable"(): boolean
get "storedAmount"(): long
get "requestableAmount"(): long
get "meaningful"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GridInventoryEntry$$Type = ($GridInventoryEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GridInventoryEntry_ = $GridInventoryEntry$$Type;
}}
declare module "appeng.menu.guisync.LinkStatusAwareMenu" {
import {$ILinkStatus, $ILinkStatus$$Type} from "appeng.api.storage.ILinkStatus"

export interface $LinkStatusAwareMenu {

 "setLinkStatus"(arg0: $ILinkStatus$$Type): void

(arg0: $ILinkStatus): void
set "linkStatus"(value: $ILinkStatus$$Type)
}

export namespace $LinkStatusAwareMenu {
const probejs$$marker: never
}
export class $LinkStatusAwareMenu$$Static implements $LinkStatusAwareMenu {


 "setLinkStatus"(arg0: $ILinkStatus$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkStatusAwareMenu$$Type = ((arg0: $ILinkStatus) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkStatusAwareMenu_ = $LinkStatusAwareMenu$$Type;
}}
declare module "appeng.menu.locator.ItemMenuHostLocator" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Logger, $Logger$$Type} from "org.slf4j.Logger"

export interface $ItemMenuHostLocator extends $MenuHostLocator {

 "locate"<T>(arg0: $Player$$Type, arg1: $Class$$Type<(T)>): T
 "hitResult"(): $BlockHitResult
 "locateItem"(arg0: $Player$$Type): $ItemStack
 "getPlayerInventorySlot"(): integer
get "playerInventorySlot"(): integer
}

export namespace $ItemMenuHostLocator {
const LOG: $Logger
const probejs$$marker: never
}
export class $ItemMenuHostLocator$$Static implements $ItemMenuHostLocator {
static readonly "LOG": $Logger


 "locate"<T>(arg0: $Player$$Type, arg1: $Class$$Type<(T)>): T
 "hitResult"(): $BlockHitResult
 "locateItem"(arg0: $Player$$Type): $ItemStack
 "getPlayerInventorySlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemMenuHostLocator$$Type = ($ItemMenuHostLocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemMenuHostLocator_ = $ItemMenuHostLocator$$Type;
}}
declare module "appeng.menu.me.common.IMEInteractionHandler" {
import {$InventoryAction, $InventoryAction$$Type} from "appeng.helpers.InventoryAction"

export interface $IMEInteractionHandler {

 "handleInteraction"(arg0: long, arg1: $InventoryAction$$Type): void

(arg0: long, arg1: $InventoryAction): void
}

export namespace $IMEInteractionHandler {
const probejs$$marker: never
}
export class $IMEInteractionHandler$$Static implements $IMEInteractionHandler {


 "handleInteraction"(arg0: long, arg1: $InventoryAction$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMEInteractionHandler$$Type = ((arg0: long, arg1: $InventoryAction) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMEInteractionHandler_ = $IMEInteractionHandler$$Type;
}}
declare module "appeng.menu.me.common.MEStorageMenu" {
import {$ILinkStatus, $ILinkStatus$$Type} from "appeng.api.storage.ILinkStatus"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$KeyTypeSelection, $KeyTypeSelection$$Type} from "appeng.api.util.KeyTypeSelection"
import {$List, $List$$Type} from "java.util.List"
import {$InventoryAction, $InventoryAction$$Type} from "appeng.helpers.InventoryAction"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$KeyTypeSelectionMenu, $KeyTypeSelectionMenu$$Type} from "appeng.menu.interfaces.KeyTypeSelectionMenu"
import {$ShortSet, $ShortSet$$Type} from "it.unimi.dsi.fastutil.shorts.ShortSet"
import {$LinkStatusAwareMenu, $LinkStatusAwareMenu$$Type} from "appeng.menu.guisync.LinkStatusAwareMenu"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Object2IntOpenHashMap, $Object2IntOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntOpenHashMap"
import {$IMEInteractionHandler, $IMEInteractionHandler$$Type} from "appeng.menu.me.common.IMEInteractionHandler"
import {$KeyTypeSelectionMenu$SyncedKeyTypes, $KeyTypeSelectionMenu$SyncedKeyTypes$$Type} from "appeng.menu.interfaces.KeyTypeSelectionMenu$SyncedKeyTypes"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ITerminalHost, $ITerminalHost$$Type} from "appeng.api.storage.ITerminalHost"
import {$AEBaseMenu, $AEBaseMenu$$Type} from "appeng.menu.AEBaseMenu"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$ToolboxMenu, $ToolboxMenu$$Type} from "appeng.menu.ToolboxMenu"
import {$IClientRepo, $IClientRepo$$Type} from "appeng.menu.me.common.IClientRepo"

export class $MEStorageMenu extends $AEBaseMenu implements $IConfigurableObject, $IMEInteractionHandler, $LinkStatusAwareMenu, $KeyTypeSelectionMenu {
readonly "quickcraftSlots": $Set<($Slot)>
 "stateId": integer
static readonly "PORTABLE_FLUID_CELL_TYPE": $MenuType<($MEStorageMenu)>
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
 "searchKeyTypes": $KeyTypeSelectionMenu$SyncedKeyTypes
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
 "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
static readonly "PORTABLE_ITEM_CELL_TYPE": $MenuType<($MEStorageMenu)>
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
static readonly "WIRELESS_TYPE": $MenuType<($MEStorageMenu)>
 "containerId": integer
static readonly "TYPE": $MenuType<($MEStorageMenu)>
 "activeCraftingJobs": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(any)>, arg1: integer, arg2: $Inventory$$Type, arg3: $ITerminalHost$$Type)

public "getHost"(): $ITerminalHost
public "isKeyVisible"(arg0: $AEKey$$Type): boolean
public "getClientRepo"(): $IClientRepo
public "getToolbox"(): $ToolboxMenu
public "getViewCells"(): $List<($ItemStack)>
public "setClientRepo"(arg0: $IClientRepo$$Type): void
public "hasIngredient"(arg0: $Ingredient$$Type, arg1: $Object2IntOpenHashMap$$Type<(any)>): boolean
public "setLinkStatus"(arg0: $ILinkStatus$$Type): void
public "getLinkStatus"(): $ILinkStatus
public "getGridNode"(): $IGridNode
public "handleInteraction"(arg0: long, arg1: $InventoryAction$$Type): void
public "broadcastChanges"(): void
public "getConfigManager"(): $IConfigManager
public "setGui"(arg0: $Runnable$$Type): void
public "canConfigureTypeFilter"(): boolean
public "onServerDataSync"(arg0: $ShortSet$$Type): void
public "getServerKeyTypeSelection"(): $KeyTypeSelection
public "getClientKeyTypeSelection"(): $KeyTypeSelectionMenu$SyncedKeyTypes
public "selectKeyType"(arg0: $AEKeyType$$Type, arg1: boolean): void
get "host"(): $ITerminalHost
get "clientRepo"(): $IClientRepo
get "toolbox"(): $ToolboxMenu
get "viewCells"(): $List<($ItemStack)>
set "clientRepo"(value: $IClientRepo$$Type)
set "linkStatus"(value: $ILinkStatus$$Type)
get "linkStatus"(): $ILinkStatus
get "gridNode"(): $IGridNode
get "configManager"(): $IConfigManager
set "gui"(value: $Runnable$$Type)
get "serverKeyTypeSelection"(): $KeyTypeSelection
get "clientKeyTypeSelection"(): $KeyTypeSelectionMenu$SyncedKeyTypes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEStorageMenu$$Type = ($MEStorageMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEStorageMenu_ = $MEStorageMenu$$Type;
}}
declare module "appeng.menu.AEBaseMenu" {
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$InventoryAction, $InventoryAction$$Type} from "appeng.helpers.InventoryAction"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$SlotSemantic, $SlotSemantic$$Type} from "appeng.menu.SlotSemantic"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ShortSet, $ShortSet$$Type} from "it.unimi.dsi.fastutil.shorts.ShortSet"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ClickType, $ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AEBaseMenuAccessor, $AEBaseMenuAccessor$$Type} from "gripe._90.polyeng.mixin.AEBaseMenuAccessor"

export class $AEBaseMenu extends $AbstractContainerMenu implements $AEBaseMenuAccessor {
readonly "quickcraftSlots": $Set<($Slot)>
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
 "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(any)>, arg1: integer, arg2: $Inventory$$Type, arg3: any)

public "getTarget"(): any
public "setFilter"(arg0: integer, arg1: $ItemStack$$Type): void
public "setLocator"(arg0: $MenuHostLocator$$Type): void
public "getLocator"(): $MenuHostLocator
public "getPlayer"(): $Player
public "stillValid"(arg0: $Player$$Type): boolean
public "canDragTo"(arg0: $Slot$$Type): boolean
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$$Type, arg3: $Player$$Type): void
public "getBlockEntity"(): $BlockEntity
public "isClientSide"(): boolean
public "getSlots"(arg0: $SlotSemantic$$Type): $List<($Slot)>
public "hideSlot"(arg0: StringJS): void
public "isValidMenu"(): boolean
public "setValidMenu"(arg0: boolean): void
public "isValidForSlot"(arg0: $Slot$$Type, arg1: $ItemStack$$Type): boolean
public "doAction"(arg0: $ServerPlayer$$Type, arg1: $InventoryAction$$Type, arg2: integer, arg3: long): void
public "onSlotChange"(arg0: $Slot$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getPlayerInventory"(): $Inventory
public "sendAllDataToRemote"(): void
public "initializeContents"(arg0: integer, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $ItemStack$$Type): void
public "broadcastChanges"(): void
public "addClientSideSlot"(arg0: $Slot$$Type, arg1: $SlotSemantic$$Type): $Slot
public "removeClientSideSlot"(arg0: $Slot$$Type): void
public "isClientSideSlot"(arg0: $Slot$$Type): boolean
public "getSlotSemantic"(arg0: $Slot$$Type): $SlotSemantic
public "isPlayerSideSlot"(arg0: $Slot$$Type): boolean
public "swapSlotContents"(arg0: integer, arg1: integer): void
public "onServerDataSync"(arg0: $ShortSet$$Type): void
public "receiveServerSyncData"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "receiveClientAction"(arg0: StringJS, arg1: StringJS): void
public "callSendClientAction"(arg0: StringJS): void
public "getActionSource"(): $IActionSource
public "lockPlayerInventorySlot"(arg0: integer): void
public "isPlayerInventorySlotLocked"(arg0: integer): boolean
public "isReturnedFromSubScreen"(): boolean
public "setReturnedFromSubScreen"(arg0: boolean): void
get "target"(): any
set "locator"(value: $MenuHostLocator$$Type)
get "locator"(): $MenuHostLocator
get "player"(): $Player
get "blockEntity"(): $BlockEntity
get "clientSide"(): boolean
get "validMenu"(): boolean
set "validMenu"(value: boolean)
get "playerInventory"(): $Inventory
get "actionSource"(): $IActionSource
get "returnedFromSubScreen"(): boolean
set "returnedFromSubScreen"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseMenu$$Type = ($AEBaseMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBaseMenu_ = $AEBaseMenu$$Type;
}}
declare module "appeng.menu.interfaces.KeyTypeSelectionMenu$SyncedKeyTypes" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$PacketWritable, $PacketWritable$$Type} from "appeng.menu.guisync.PacketWritable"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $KeyTypeSelectionMenu$SyncedKeyTypes extends $Record implements $PacketWritable {

constructor()
constructor(keyTypes: $Map$$Type<($AEKeyType$$Type), (boolean)>)
constructor(arg0: $RegistryFriendlyByteBuf$$Type)

public "keyTypes"(): $Map<($AEKeyType), (boolean)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "enabledSet"(): $List<($AEKeyType)>
public "writeToPacket"(arg0: $RegistryFriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyTypeSelectionMenu$SyncedKeyTypes$$Type = ({"keyTypes"?: $Map$$Type<($AEKeyType$$Type), (boolean)>}) | ([keyTypes?: $Map$$Type<($AEKeyType$$Type), (boolean)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyTypeSelectionMenu$SyncedKeyTypes_ = $KeyTypeSelectionMenu$SyncedKeyTypes$$Type;
}}
declare module "appeng.menu.SlotSemantic" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SlotSemantic extends $Record {

constructor(id: StringJS, playerSide: boolean, quickMovePriority: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): StringJS
public "playerSide"(): boolean
public "quickMovePriority"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotSemantic$$Type = ({"playerSide"?: boolean, "quickMovePriority"?: integer, "id"?: StringJS}) | ([playerSide?: boolean, quickMovePriority?: integer, id?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotSemantic_ = $SlotSemantic$$Type;
}}
declare module "appeng.menu.ToolboxMenu" {
import {$AEBaseMenu, $AEBaseMenu$$Type} from "appeng.menu.AEBaseMenu"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $ToolboxMenu {

constructor(arg0: $AEBaseMenu$$Type)

public "tick"(): void
public "getName"(): $Component
public "isPresent"(): boolean
get "name"(): $Component
get "present"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolboxMenu$$Type = ($ToolboxMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolboxMenu_ = $ToolboxMenu$$Type;
}}
declare module "appeng.menu.ISubMenu" {
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$ISubMenuHost, $ISubMenuHost$$Type} from "appeng.api.storage.ISubMenuHost"

export interface $ISubMenu {

 "getHost"(): $ISubMenuHost
 "getLocator"(): $MenuHostLocator
get "host"(): $ISubMenuHost
get "locator"(): $MenuHostLocator
}

export namespace $ISubMenu {
const probejs$$marker: never
}
export class $ISubMenu$$Static implements $ISubMenu {


 "getHost"(): $ISubMenuHost
 "getLocator"(): $MenuHostLocator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubMenu$$Type = ($ISubMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubMenu_ = $ISubMenu$$Type;
}}
declare module "appeng.menu.locator.MenuHostLocator" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $MenuHostLocator {

 "locate"<T>(arg0: $Player$$Type, arg1: $Class$$Type<(T)>): T

(arg0: $Player, arg1: $Class<(T)>): T
}

export namespace $MenuHostLocator {
const probejs$$marker: never
}
export class $MenuHostLocator$$Static implements $MenuHostLocator {


 "locate"<T>(arg0: $Player$$Type, arg1: $Class$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuHostLocator$$Type = ((arg0: $Player, arg1: $Class<(T)>) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuHostLocator_ = $MenuHostLocator$$Type;
}}
declare module "appeng.menu.interfaces.KeyTypeSelectionMenu" {
import {$KeyTypeSelection, $KeyTypeSelection$$Type} from "appeng.api.util.KeyTypeSelection"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$KeyTypeSelectionMenu$SyncedKeyTypes, $KeyTypeSelectionMenu$SyncedKeyTypes$$Type} from "appeng.menu.interfaces.KeyTypeSelectionMenu$SyncedKeyTypes"

export interface $KeyTypeSelectionMenu {

 "selectKeyType"(arg0: $AEKeyType$$Type, arg1: boolean): void
 "getServerKeyTypeSelection"(): $KeyTypeSelection
 "getClientKeyTypeSelection"(): $KeyTypeSelectionMenu$SyncedKeyTypes
get "serverKeyTypeSelection"(): $KeyTypeSelection
get "clientKeyTypeSelection"(): $KeyTypeSelectionMenu$SyncedKeyTypes
}

export namespace $KeyTypeSelectionMenu {
const probejs$$marker: never
}
export class $KeyTypeSelectionMenu$$Static implements $KeyTypeSelectionMenu {


 "selectKeyType"(arg0: $AEKeyType$$Type, arg1: boolean): void
 "getServerKeyTypeSelection"(): $KeyTypeSelection
 "getClientKeyTypeSelection"(): $KeyTypeSelectionMenu$SyncedKeyTypes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyTypeSelectionMenu$$Type = ($KeyTypeSelectionMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyTypeSelectionMenu_ = $KeyTypeSelectionMenu$$Type;
}}
declare module "appeng.menu.guisync.PacketWritable" {
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"

export interface $PacketWritable {

 "writeToPacket"(arg0: $RegistryFriendlyByteBuf$$Type): void

(arg0: $RegistryFriendlyByteBuf): void
}

export namespace $PacketWritable {
const probejs$$marker: never
}
export class $PacketWritable$$Static implements $PacketWritable {


 "writeToPacket"(arg0: $RegistryFriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketWritable$$Type = ((arg0: $RegistryFriendlyByteBuf) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketWritable_ = $PacketWritable$$Type;
}}
