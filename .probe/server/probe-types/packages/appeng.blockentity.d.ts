declare module "appeng.blockentity.grid.AENetworkedBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IGridConnectedBlockEntity, $IGridConnectedBlockEntity$$Type} from "appeng.me.helpers.IGridConnectedBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AENetworkedBlockEntity extends $AEBaseBlockEntity implements $IGridConnectedBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "getMainNode"(): $IManagedGridNode
public "clearRemoved"(): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "onChunkUnloaded"(): void
public "setOwner"(arg0: $Player$$Type): void
public "ifGridPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
public "saveChanges"(): void
public "getGridNode"(): $IGridNode
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getActionableNode"(): $IGridNode
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$$Type)
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AENetworkedBlockEntity$$Type = ($AENetworkedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AENetworkedBlockEntity_ = $AENetworkedBlockEntity$$Type;
}}
declare module "appeng.blockentity.storage.SkyChestBlockEntity" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AEBaseInvBlockEntity, $AEBaseInvBlockEntity$$Type} from "appeng.blockentity.AEBaseInvBlockEntity"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ClientTickingBlockEntity, $ClientTickingBlockEntity$$Type} from "appeng.blockentity.ClientTickingBlockEntity"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LidBlockEntity, $LidBlockEntity$$Type} from "net.minecraft.world.level.block.entity.LidBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SkyChestBlockEntity extends $AEBaseInvBlockEntity implements $ClientTickingBlockEntity, $LidBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($SkyChestBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "recheckOpen"(): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "clientTick"(): void
public "getOpenNess"(arg0: float): float
public "disassembleWithWrench"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockHitResult$$Type, arg3: $ItemStack$$Type): $InteractionResult
public "getInternalInventory"(): $InternalInventory
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyChestBlockEntity$$Type = ($SkyChestBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkyChestBlockEntity_ = $SkyChestBlockEntity$$Type;
}}
declare module "appeng.blockentity.crafting.IMolecularAssemblerSupportedPattern$CraftingGridAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IMolecularAssemblerSupportedPattern$CraftingGridAccessor {

 "set"(arg0: integer, arg1: $ItemStack$$Type): void

(arg0: integer, arg1: $ItemStack): void
}

export namespace $IMolecularAssemblerSupportedPattern$CraftingGridAccessor {
const probejs$$marker: never
}
export class $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$$Static implements $IMolecularAssemblerSupportedPattern$CraftingGridAccessor {


 "set"(arg0: integer, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$$Type = ((arg0: integer, arg1: $ItemStack) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMolecularAssemblerSupportedPattern$CraftingGridAccessor_ = $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$$Type;
}}
declare module "appeng.blockentity.storage.SkyStoneTankBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IFluidTank, $IFluidTank$$Type} from "net.neoforged.neoforge.fluids.IFluidTank"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SkyStoneTankBlockEntity extends $AEBaseBlockEntity {
static readonly "BUCKET_CAPACITY": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onPlayerUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): boolean
public "getTank"(): $IFluidTank
public "getFluidHandler"(): $IFluidHandler
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "tank"(): $IFluidTank
get "fluidHandler"(): $IFluidHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyStoneTankBlockEntity$$Type = ($SkyStoneTankBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkyStoneTankBlockEntity_ = $SkyStoneTankBlockEntity$$Type;
}}
declare module "appeng.blockentity.misc.PaintSplotchesBlockEntity" {
import {$PaintSplotches, $PaintSplotches$$Type} from "appeng.block.paint.PaintSplotches"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Splotch, $Splotch$$Type} from "appeng.helpers.Splotch"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PaintSplotchesBlockEntity extends $AEBaseBlockEntity {
static readonly "SPLOTCHES": $ModelProperty<($PaintSplotches)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getModelData"(): $ModelData
public "getDots"(): $Collection<($Splotch)>
public "cleanSide"(arg0: $Direction$$Type): void
public "addBlot"(arg0: $ItemStack$$Type, arg1: $Direction$$Type, arg2: $Vec3$$Type): void
public "addBlot"(arg0: $AEColor$$Type, arg1: boolean, arg2: $Direction$$Type, arg3: $Vec3$$Type): void
public "isSideValid"(arg0: $Direction$$Type): boolean
public "neighborChanged"(): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "modelData"(): $ModelData
get "dots"(): $Collection<($Splotch)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSplotchesBlockEntity$$Type = ($PaintSplotchesBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSplotchesBlockEntity_ = $PaintSplotchesBlockEntity$$Type;
}}
declare module "appeng.blockentity.ServerTickingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerTickingBlockEntity {

 "serverTick"(): void

(): void
}

export namespace $ServerTickingBlockEntity {
const probejs$$marker: never
}
export class $ServerTickingBlockEntity$$Static implements $ServerTickingBlockEntity {


 "serverTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTickingBlockEntity$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerTickingBlockEntity_ = $ServerTickingBlockEntity$$Type;
}}
declare module "appeng.blockentity.crafting.CraftingBlockEntity" {
import {$IPowerChannelState, $IPowerChannelState$$Type} from "appeng.api.implementations.IPowerChannelState"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AbstractCraftingUnitBlock, $AbstractCraftingUnitBlock$$Type} from "appeng.block.crafting.AbstractCraftingUnitBlock"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IAEMultiBlock, $IAEMultiBlock$$Type} from "appeng.me.cluster.IAEMultiBlock"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CraftingCPUCluster, $CraftingCPUCluster$$Type} from "appeng.me.cluster.implementations.CraftingCPUCluster"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CraftingBlockEntity extends $AENetworkedBlockEntity implements $IAEMultiBlock<($CraftingCPUCluster)>, $IPowerChannelState, $IConfigurableObject {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "isValid"(): boolean
public "setName"(arg0: StringJS): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isPowered"(): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getModelData"(): $ModelData
public "setBlockState"(arg0: $BlockState$$Type): void
public "disconnect"(arg0: boolean): void
public "isCoreBlock"(): boolean
public "getUnitBlock"(): $AbstractCraftingUnitBlock<(any)>
public "updateSubType"(arg0: boolean): void
public "setCoreBlock"(arg0: boolean): void
public "getCluster"(): $CraftingCPUCluster
public "breakCluster"(): void
public "onReady"(): void
public "isFormed"(): boolean
public "updateStatus"(arg0: $CraftingCPUCluster$$Type): void
public "getConfigManager"(): $IConfigManager
public "updateMultiBlock"(arg0: $BlockPos$$Type): void
public "setPreviousState"(arg0: $CompoundTag$$Type): void
public "getPreviousState"(): $CompoundTag
public "getStorageBytes"(): long
public "getAcceleratorThreads"(): integer
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "valid"(): boolean
set "name"(value: StringJS)
get "powered"(): boolean
get "modelData"(): $ModelData
set "blockState"(value: $BlockState$$Type)
get "coreBlock"(): boolean
get "unitBlock"(): $AbstractCraftingUnitBlock<(any)>
set "coreBlock"(value: boolean)
get "cluster"(): $CraftingCPUCluster
get "formed"(): boolean
get "configManager"(): $IConfigManager
set "previousState"(value: $CompoundTag$$Type)
get "previousState"(): $CompoundTag
get "storageBytes"(): long
get "acceleratorThreads"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingBlockEntity$$Type = ($CraftingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingBlockEntity_ = $CraftingBlockEntity$$Type;
}}
declare module "appeng.blockentity.spatial.SpatialPylonBlockEntity$ClientState" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$SpatialPylonBlockEntity$AxisPosition, $SpatialPylonBlockEntity$AxisPosition$$Type} from "appeng.blockentity.spatial.SpatialPylonBlockEntity$AxisPosition"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SpatialPylonBlockEntity$ClientState extends $Record {
static readonly "DEFAULT": $SpatialPylonBlockEntity$ClientState

constructor(powered: boolean, online: boolean, axisPosition: $SpatialPylonBlockEntity$AxisPosition$$Type, axis: $Direction$Axis$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "axis"(): $Direction$Axis
public "powered"(): boolean
public "online"(): boolean
public static "readFromNbt"(arg0: $CompoundTag$$Type): $SpatialPylonBlockEntity$ClientState
public static "readFromStream"(arg0: $FriendlyByteBuf$$Type): $SpatialPylonBlockEntity$ClientState
public "writeToNbt"(arg0: $CompoundTag$$Type): void
public "writeToStream"(arg0: $FriendlyByteBuf$$Type): void
public "axisPosition"(): $SpatialPylonBlockEntity$AxisPosition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$ClientState$$Type = ({"axisPosition"?: $SpatialPylonBlockEntity$AxisPosition$$Type, "online"?: boolean, "powered"?: boolean, "axis"?: $Direction$Axis$$Type}) | ([axisPosition?: $SpatialPylonBlockEntity$AxisPosition$$Type, online?: boolean, powered?: boolean, axis?: $Direction$Axis$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonBlockEntity$ClientState_ = $SpatialPylonBlockEntity$ClientState$$Type;
}}
declare module "appeng.blockentity.misc.MysteriousCubeBlockEntity" {
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MysteriousCubeBlockEntity extends $AEBaseBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MysteriousCubeBlockEntity$$Type = ($MysteriousCubeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MysteriousCubeBlockEntity_ = $MysteriousCubeBlockEntity$$Type;
}}
declare module "appeng.blockentity.misc.CrankBlockEntity" {
import {$ClientTickingBlockEntity, $ClientTickingBlockEntity$$Type} from "appeng.blockentity.ClientTickingBlockEntity"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$$Type} from "appeng.blockentity.ServerTickingBlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CrankBlockEntity extends $AEBaseBlockEntity implements $ServerTickingBlockEntity, $ClientTickingBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "POWER_PER_CRANK_TURN": integer

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "power"(): boolean
public "serverTick"(): void
public "clientTick"(): void
public "getVisibleRotation"(): float
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "visibleRotation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrankBlockEntity$$Type = ($CrankBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrankBlockEntity_ = $CrankBlockEntity$$Type;
}}
declare module "appeng.blockentity.CommonTickingBlockEntity" {
import {$ClientTickingBlockEntity, $ClientTickingBlockEntity$$Type} from "appeng.blockentity.ClientTickingBlockEntity"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$$Type} from "appeng.blockentity.ServerTickingBlockEntity"

export interface $CommonTickingBlockEntity extends $ServerTickingBlockEntity, $ClientTickingBlockEntity {

 "serverTick"(): void
 "clientTick"(): void
 "commonTick"(): void

(): void
}

export namespace $CommonTickingBlockEntity {
const probejs$$marker: never
}
export class $CommonTickingBlockEntity$$Static implements $CommonTickingBlockEntity {


 "serverTick"(): void
 "clientTick"(): void
 "commonTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTickingBlockEntity$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonTickingBlockEntity_ = $CommonTickingBlockEntity$$Type;
}}
declare module "appeng.blockentity.misc.VibrationChamberBlockEntity" {
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$AENetworkedInvBlockEntity, $AENetworkedInvBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $VibrationChamberBlockEntity extends $AENetworkedInvBlockEntity implements $IGridTickable, $IUpgradeableObject {
 "isOn": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public static "getBurnTime"(arg0: $ItemStack$$Type): integer
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public static "hasBurnTime"(arg0: $ItemStack$$Type): boolean
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getUpgrades"(): $IUpgradeInventory
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getEnergyPerFuelTick"(): double
public "getRemainingFuelTicks"(): double
public "getFuelItemFuelTicks"(): double
public "getMaxFuelTicksPerTick"(): double
public "getMaxEnergyRate"(): double
public "getMinFuelTicksPerTick"(): double
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getInternalInventory"(): $InternalInventory
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "getCurrentFuelTicksPerTick"(): double
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "upgrades"(): $IUpgradeInventory
get "energyPerFuelTick"(): double
get "remainingFuelTicks"(): double
get "fuelItemFuelTicks"(): double
get "maxFuelTicksPerTick"(): double
get "maxEnergyRate"(): double
get "minFuelTicksPerTick"(): double
get "internalInventory"(): $InternalInventory
get "currentFuelTicksPerTick"(): double
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VibrationChamberBlockEntity$$Type = ($VibrationChamberBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VibrationChamberBlockEntity_ = $VibrationChamberBlockEntity$$Type;
}}
declare module "appeng.blockentity.crafting.IMolecularAssemblerSupportedPattern" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$IMolecularAssemblerSupportedPattern$CraftingGridAccessor, $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$$Type} from "appeng.blockentity.crafting.IMolecularAssemblerSupportedPattern$CraftingGridAccessor"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$PatternDetailsTooltip, $PatternDetailsTooltip$$Type} from "appeng.api.crafting.PatternDetailsTooltip"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$IPatternDetails$IInput, $IPatternDetails$IInput$$Type} from "appeng.api.crafting.IPatternDetails$IInput"
import {$IPatternDetails$PatternInputSink, $IPatternDetails$PatternInputSink$$Type} from "appeng.api.crafting.IPatternDetails$PatternInputSink"

export interface $IMolecularAssemblerSupportedPattern extends $IPatternDetails {

 "isItemValid"(arg0: integer, arg1: $AEItemKey$$Type, arg2: $Level$$Type): boolean
 "isSlotEnabled"(arg0: integer): boolean
 "assemble"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): $ItemStack
 "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
 "supportsPushInputsToExternalInventory"(): boolean
 "fillCraftingGrid"(arg0: ($KeyCounter$$Type)[], arg1: $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$$Type): void
 "getDefinition"(): $AEItemKey
 "getInputs"(): ($IPatternDetails$IInput)[]
 "getTooltip"(arg0: $Level$$Type, arg1: $TooltipFlag$$Type): $PatternDetailsTooltip
 "getOutputs"(): $List<($GenericStack)>
 "getPrimaryOutput"(): $GenericStack
 "pushInputsToExternalInventory"(arg0: ($KeyCounter$$Type)[], arg1: $IPatternDetails$PatternInputSink$$Type): void
get "definition"(): $AEItemKey
get "inputs"(): ($IPatternDetails$IInput)[]
get "outputs"(): $List<($GenericStack)>
get "primaryOutput"(): $GenericStack
}

export namespace $IMolecularAssemblerSupportedPattern {
const probejs$$marker: never
}
export class $IMolecularAssemblerSupportedPattern$$Static implements $IMolecularAssemblerSupportedPattern {


 "isItemValid"(arg0: integer, arg1: $AEItemKey$$Type, arg2: $Level$$Type): boolean
 "isSlotEnabled"(arg0: integer): boolean
 "assemble"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): $ItemStack
 "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
 "supportsPushInputsToExternalInventory"(): boolean
 "fillCraftingGrid"(arg0: ($KeyCounter$$Type)[], arg1: $IMolecularAssemblerSupportedPattern$CraftingGridAccessor$$Type): void
 "getDefinition"(): $AEItemKey
 "getInputs"(): ($IPatternDetails$IInput)[]
 "getTooltip"(arg0: $Level$$Type, arg1: $TooltipFlag$$Type): $PatternDetailsTooltip
 "getOutputs"(): $List<($GenericStack)>
 "getPrimaryOutput"(): $GenericStack
 "pushInputsToExternalInventory"(arg0: ($KeyCounter$$Type)[], arg1: $IPatternDetails$PatternInputSink$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMolecularAssemblerSupportedPattern$$Type = ($IMolecularAssemblerSupportedPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMolecularAssemblerSupportedPattern_ = $IMolecularAssemblerSupportedPattern$$Type;
}}
declare module "appeng.blockentity.AEBaseInvBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventoryHost, $InternalInventoryHost$$Type} from "appeng.util.inv.InternalInventoryHost"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AEBaseInvBlockEntity extends $AEBaseBlockEntity implements $InternalInventoryHost {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "saveChangedInventory"(arg0: $AppEngInternalInventory$$Type): void
public "getExposedItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "getInternalInventory"(): $InternalInventory
public "isClientSide"(): boolean
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseInvBlockEntity$$Type = ($AEBaseInvBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBaseInvBlockEntity_ = $AEBaseInvBlockEntity$$Type;
}}
declare module "appeng.blockentity.qnb.QuantumBridgeBlockEntity" {
import {$QnbFormedState, $QnbFormedState$$Type} from "appeng.block.qnb.QnbFormedState"
import {$QuantumCluster, $QuantumCluster$$Type} from "appeng.me.cluster.implementations.QuantumCluster"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$AENetworkedInvBlockEntity, $AENetworkedInvBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$IAECluster, $IAECluster$$Type} from "appeng.me.cluster.IAECluster"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IAEMultiBlock, $IAEMultiBlock$$Type} from "appeng.me.cluster.IAEMultiBlock"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$$Type} from "appeng.blockentity.ServerTickingBlockEntity"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $QuantumBridgeBlockEntity extends $AENetworkedInvBlockEntity implements $IAEMultiBlock<($QuantumCluster)>, $ServerTickingBlockEntity {
static readonly "FORMED_STATE": $ModelProperty<($QnbFormedState)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isValid"(): boolean
public "serverTick"(): void
public "isPowered"(): boolean
public "setRemoved"(): void
public "getModelData"(): $ModelData
public "disconnect"(arg0: boolean): void
public "hasQES"(): boolean
public "getQEFrequency"(): long
public "neighborUpdate"(arg0: $BlockPos$$Type): void
public "isCorner"(): boolean
public "getCluster"(): $IAECluster
public "onReady"(): void
public "getCorner"(): byte
public "isFormed"(): boolean
public "updateStatus"(arg0: $QuantumCluster$$Type, arg1: byte, arg2: boolean): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "onChunkUnloaded"(): void
public static "assignFrequency"(arg0: $ItemStack$$Type): void
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "breakClusterOnRemove"(): void
public "getInternalInventory"(): $InternalInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getExposedInventoryForSide"(arg0: $Direction$$Type): $InternalInventory
public "getAdjacentQuantumBridges"(): $EnumSet<($Direction)>
public static "isValidEntangledSingularity"(arg0: $ItemStack$$Type): boolean
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "valid"(): boolean
get "powered"(): boolean
get "modelData"(): $ModelData
get "qEFrequency"(): long
get "corner"(): boolean
get "cluster"(): $IAECluster
get "corner"(): byte
get "formed"(): boolean
get "internalInventory"(): $InternalInventory
get "adjacentQuantumBridges"(): $EnumSet<($Direction)>
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumBridgeBlockEntity$$Type = ($QuantumBridgeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumBridgeBlockEntity_ = $QuantumBridgeBlockEntity$$Type;
}}
declare module "appeng.blockentity.networking.ControllerBlockEntity" {
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ControllerBlockEntity extends $AENetworkedPoweredBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "updateState"(): void
public "onReady"(): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getInternalInventory"(): $InternalInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerBlockEntity$$Type = ($ControllerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerBlockEntity_ = $ControllerBlockEntity$$Type;
}}
declare module "appeng.blockentity.crafting.PatternProviderBlockEntity" {
import {$PatternProviderLogicHost, $PatternProviderLogicHost$$Type} from "appeng.helpers.patternprovider.PatternProviderLogicHost"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PatternProviderLogic, $PatternProviderLogic$$Type} from "appeng.helpers.patternprovider.PatternProviderLogic"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$PatternContainerGroup, $PatternContainerGroup$$Type} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$AEItemKey, $AEItemKey$$Type} from "appeng.api.stacks.AEItemKey"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $PatternProviderBlockEntity extends $AENetworkedBlockEntity implements $PatternProviderLogicHost {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setBlockState"(arg0: $BlockState$$Type): void
public "getTargets"(): $EnumSet<($Direction)>
public "onReady"(): void
public "getLogic"(): $PatternProviderLogic
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getMainMenuIcon"(): $ItemStack
public "getTerminalIcon"(): $AEItemKey
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
public "getBlockEntity"(): $BlockEntity
public "saveChanges"(): void
public "getGrid"(): $IGrid
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "isVisibleInTerminal"(): boolean
public "getTerminalSortOrder"(): long
public "getTerminalGroup"(): $PatternContainerGroup
public "getTerminalPatternInventory"(): $InternalInventory
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
set "blockState"(value: $BlockState$$Type)
get "targets"(): $EnumSet<($Direction)>
get "logic"(): $PatternProviderLogic
get "mainMenuIcon"(): $ItemStack
get "terminalIcon"(): $AEItemKey
set "priority"(value: integer)
get "priority"(): integer
get "blockEntity"(): $BlockEntity
get "grid"(): $IGrid
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "visibleInTerminal"(): boolean
get "terminalSortOrder"(): long
get "terminalGroup"(): $PatternContainerGroup
get "terminalPatternInventory"(): $InternalInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternProviderBlockEntity$$Type = ($PatternProviderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternProviderBlockEntity_ = $PatternProviderBlockEntity$$Type;
}}
declare module "appeng.blockentity.powersink.AEBasePoweredBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$IAEPowerStorage, $IAEPowerStorage$$Type} from "appeng.api.networking.energy.IAEPowerStorage"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$AEBaseInvBlockEntity, $AEBaseInvBlockEntity$$Type} from "appeng.blockentity.AEBaseInvBlockEntity"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$IExternalPowerSink, $IExternalPowerSink$$Type} from "appeng.blockentity.powersink.IExternalPowerSink"
import {$PowerUnit, $PowerUnit$$Type} from "appeng.api.config.PowerUnit"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AccessRestriction, $AccessRestriction$$Type} from "appeng.api.config.AccessRestriction"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AEBasePoweredBlockEntity extends $AEBaseInvBlockEntity implements $IAEPowerStorage, $IExternalPowerSink {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public "getPowerFlow"(): $AccessRestriction
public "getAEMaxPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
public "getEnergyStorage"(arg0: $Direction$$Type): $IEnergyStorage
public "setInternalMaxPower"(arg0: double): void
public "getInternalMaxPower"(): double
public "setInternalPowerFlow"(arg0: $AccessRestriction$$Type): void
public "getAECurrentPower"(): double
public "getExternalPowerDemand"(arg0: $PowerUnit$$Type, arg1: double): double
public "injectExternalPower"(arg0: $PowerUnit$$Type, arg1: double, arg2: $Actionable$$Type): double
public "isAEPublicPowerStorage"(): boolean
public "getInternalCurrentPower"(): double
public "setInternalCurrentPower"(arg0: double): void
public "setInternalPublicPowerStorage"(arg0: boolean): void
public "getPriority"(): integer
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "powerFlow"(): $AccessRestriction
get "aEMaxPower"(): double
set "internalMaxPower"(value: double)
get "internalMaxPower"(): double
set "internalPowerFlow"(value: $AccessRestriction$$Type)
get "aECurrentPower"(): double
get "aEPublicPowerStorage"(): boolean
get "internalCurrentPower"(): double
set "internalCurrentPower"(value: double)
set "internalPublicPowerStorage"(value: boolean)
get "priority"(): integer
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePoweredBlockEntity$$Type = ($AEBasePoweredBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBasePoweredBlockEntity_ = $AEBasePoweredBlockEntity$$Type;
}}
declare module "appeng.blockentity.networking.EnergyAcceptorBlockEntity" {
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergyAcceptorBlockEntity extends $AENetworkedPoweredBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getInternalInventory"(): $InternalInventory
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyAcceptorBlockEntity$$Type = ($EnergyAcceptorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyAcceptorBlockEntity_ = $EnergyAcceptorBlockEntity$$Type;
}}
declare module "appeng.blockentity.misc.InterfaceBlockEntity" {
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$InterfaceLogicHost, $InterfaceLogicHost$$Type} from "appeng.helpers.InterfaceLogicHost"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MenuHostLocator, $MenuHostLocator$$Type} from "appeng.menu.locator.MenuHostLocator"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$InterfaceLogic, $InterfaceLogic$$Type} from "appeng.helpers.InterfaceLogic"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IPriorityHost, $IPriorityHost$$Type} from "appeng.helpers.IPriorityHost"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"

export class $InterfaceBlockEntity extends $AENetworkedBlockEntity implements $IPriorityHost, $IUpgradeableObject, $IConfigurableObject, $InterfaceLogicHost {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getMainMenuIcon"(): $ItemStack
public "getInterfaceLogic"(): $InterfaceLogic
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getUpgrades"(): $IUpgradeInventory
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "getConfigManager"(): $IConfigManager
public "getStorage"(): $GenericStackInv
public "openMenu"(arg0: $Player$$Type, arg1: $MenuHostLocator$$Type): void
public "getBlockEntity"(): $BlockEntity
public "getConfig"(): $GenericStackInv
public "saveChanges"(): void
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "mainMenuIcon"(): $ItemStack
get "interfaceLogic"(): $InterfaceLogic
set "priority"(value: integer)
get "priority"(): integer
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "storage"(): $GenericStackInv
get "blockEntity"(): $BlockEntity
get "config"(): $GenericStackInv
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceBlockEntity$$Type = ($InterfaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceBlockEntity_ = $InterfaceBlockEntity$$Type;
}}
declare module "appeng.blockentity.ClientTickingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientTickingBlockEntity {

 "clientTick"(): void

(): void
}

export namespace $ClientTickingBlockEntity {
const probejs$$marker: never
}
export class $ClientTickingBlockEntity$$Static implements $ClientTickingBlockEntity {


 "clientTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientTickingBlockEntity$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientTickingBlockEntity_ = $ClientTickingBlockEntity$$Type;
}}
declare module "appeng.blockentity.spatial.SpatialPylonBlockEntity" {
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IAEMultiBlock, $IAEMultiBlock$$Type} from "appeng.me.cluster.IAEMultiBlock"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$SpatialPylonBlockEntity$ClientState, $SpatialPylonBlockEntity$ClientState$$Type} from "appeng.blockentity.spatial.SpatialPylonBlockEntity$ClientState"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SpatialPylonCluster, $SpatialPylonCluster$$Type} from "appeng.me.cluster.implementations.SpatialPylonCluster"

export class $SpatialPylonBlockEntity extends $AENetworkedBlockEntity implements $IAEMultiBlock<($SpatialPylonCluster)> {
static readonly "STATE": $ModelProperty<($SpatialPylonBlockEntity$ClientState)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isValid"(): boolean
public "setRemoved"(): void
public "getModelData"(): $ModelData
public "disconnect"(arg0: boolean): void
public "getCluster"(): $SpatialPylonCluster
public "onReady"(): void
public "updateStatus"(arg0: $SpatialPylonCluster$$Type): void
public "getClientState"(): $SpatialPylonBlockEntity$ClientState
public "onChunkUnloaded"(): void
public "neighborChanged"(arg0: $BlockPos$$Type): void
public "recalculateDisplay"(): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "valid"(): boolean
get "modelData"(): $ModelData
get "cluster"(): $SpatialPylonCluster
get "clientState"(): $SpatialPylonBlockEntity$ClientState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$$Type = ($SpatialPylonBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonBlockEntity_ = $SpatialPylonBlockEntity$$Type;
}}
declare module "appeng.blockentity.powersink.IExternalPowerSink" {
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$IAEPowerStorage, $IAEPowerStorage$$Type} from "appeng.api.networking.energy.IAEPowerStorage"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$PowerUnit, $PowerUnit$$Type} from "appeng.api.config.PowerUnit"
import {$AccessRestriction, $AccessRestriction$$Type} from "appeng.api.config.AccessRestriction"

export interface $IExternalPowerSink extends $IAEPowerStorage {

 "getExternalPowerDemand"(arg0: $PowerUnit$$Type, arg1: double): double
 "injectExternalPower"(arg0: $PowerUnit$$Type, arg1: double, arg2: $Actionable$$Type): double
 "getPriority"(): integer
 "getPowerFlow"(): $AccessRestriction
 "getAEMaxPower"(): double
 "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
 "getAECurrentPower"(): double
 "isAEPublicPowerStorage"(): boolean
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
get "priority"(): integer
get "powerFlow"(): $AccessRestriction
get "aEMaxPower"(): double
get "aECurrentPower"(): double
get "aEPublicPowerStorage"(): boolean
}

export namespace $IExternalPowerSink {
function empty(): $IEnergySource
const probejs$$marker: never
}
export class $IExternalPowerSink$$Static implements $IExternalPowerSink {


 "getExternalPowerDemand"(arg0: $PowerUnit$$Type, arg1: double): double
 "injectExternalPower"(arg0: $PowerUnit$$Type, arg1: double, arg2: $Actionable$$Type): double
 "getPriority"(): integer
 "getPowerFlow"(): $AccessRestriction
 "getAEMaxPower"(): double
 "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
 "getAECurrentPower"(): double
 "isAEPublicPowerStorage"(): boolean
static "empty"(): $IEnergySource
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExternalPowerSink$$Type = ($IExternalPowerSink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExternalPowerSink_ = $IExternalPowerSink$$Type;
}}
declare module "appeng.blockentity.crafting.CraftingMonitorBlockEntity" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$IColorableBlockEntity, $IColorableBlockEntity$$Type} from "appeng.api.implementations.blockentities.IColorableBlockEntity"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$CraftingBlockEntity, $CraftingBlockEntity$$Type} from "appeng.blockentity.crafting.CraftingBlockEntity"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CraftingMonitorBlockEntity extends $CraftingBlockEntity implements $IColorableBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getModelData"(): $ModelData
public "getColor"(): $AEColor
public "setJob"(arg0: $GenericStack$$Type): void
public "getJobProgress"(): $GenericStack
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "modelData"(): $ModelData
get "color"(): $AEColor
set "job"(value: $GenericStack$$Type)
get "jobProgress"(): $GenericStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMonitorBlockEntity$$Type = ($CraftingMonitorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingMonitorBlockEntity_ = $CraftingMonitorBlockEntity$$Type;
}}
declare module "appeng.blockentity.networking.WirelessAccessPointBlockEntity" {
import {$IPowerChannelState, $IPowerChannelState$$Type} from "appeng.api.implementations.IPowerChannelState"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IWirelessAccessPoint, $IWirelessAccessPoint$$Type} from "appeng.api.implementations.blockentities.IWirelessAccessPoint"
import {$DimensionalBlockPos, $DimensionalBlockPos$$Type} from "appeng.api.util.DimensionalBlockPos"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$AENetworkedInvBlockEntity, $AENetworkedInvBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WirelessAccessPointBlockEntity extends $AENetworkedInvBlockEntity implements $IWirelessAccessPoint, $IPowerChannelState {
static readonly "POWERED_FLAG": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "CHANNEL_FLAG": integer

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "getRange"(): double
public "isPowered"(): boolean
public "getClientFlags"(): integer
public "saveChanges"(): void
public "onReady"(): void
public "getGrid"(): $IGrid
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getInternalInventory"(): $InternalInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getActionableNode"(): $IGridNode
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "location"(): $DimensionalBlockPos
get "range"(): double
get "powered"(): boolean
get "clientFlags"(): integer
get "grid"(): $IGrid
get "internalInventory"(): $InternalInventory
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessAccessPointBlockEntity$$Type = ($WirelessAccessPointBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessAccessPointBlockEntity_ = $WirelessAccessPointBlockEntity$$Type;
}}
declare module "appeng.blockentity.spatial.SpatialAnchorBlockEntity" {
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$GridChunkEvent$GridChunkAdded, $GridChunkEvent$GridChunkAdded$$Type} from "appeng.api.networking.events.statistics.GridChunkEvent$GridChunkAdded"
import {$IOverlayDataSource, $IOverlayDataSource$$Type} from "appeng.client.render.overlay.IOverlayDataSource"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$DimensionalBlockPos, $DimensionalBlockPos$$Type} from "appeng.api.util.DimensionalBlockPos"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$GridChunkEvent$GridChunkRemoved, $GridChunkEvent$GridChunkRemoved$$Type} from "appeng.api.networking.events.statistics.GridChunkEvent$GridChunkRemoved"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $SpatialAnchorBlockEntity extends $AENetworkedBlockEntity implements $IGridTickable, $IConfigurableObject, $IOverlayDataSource {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "chunkAdded"(arg0: $GridChunkEvent$GridChunkAdded$$Type): void
public "chunkRemoved"(arg0: $GridChunkEvent$GridChunkRemoved$$Type): void
public "registerChunk"(arg0: $ChunkPos$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getConfigManager"(): $IConfigManager
public "getLoadedChunks"(): $Set<($ChunkPos)>
public "getOverlayChunks"(): $Set<($ChunkPos)>
public "getOverlayBlockEntity"(): $BlockEntity
public "getOverlayColor"(): integer
public "countLoadedChunks"(): integer
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getOverlaySourceLocation"(): $DimensionalBlockPos
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "configManager"(): $IConfigManager
get "loadedChunks"(): $Set<($ChunkPos)>
get "overlayChunks"(): $Set<($ChunkPos)>
get "overlayBlockEntity"(): $BlockEntity
get "overlayColor"(): integer
get "overlaySourceLocation"(): $DimensionalBlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialAnchorBlockEntity$$Type = ($SpatialAnchorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialAnchorBlockEntity_ = $SpatialAnchorBlockEntity$$Type;
}}
declare module "appeng.blockentity.spatial.SpatialIOPortBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AENetworkedInvBlockEntity, $AENetworkedInvBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpatialIOPortBlockEntity extends $AENetworkedInvBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getRedstoneState"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "updateRedstoneState"(): void
public "getInternalInventory"(): $InternalInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "redstoneState"(): boolean
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialIOPortBlockEntity$$Type = ($SpatialIOPortBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialIOPortBlockEntity_ = $SpatialIOPortBlockEntity$$Type;
}}
declare module "appeng.blockentity.misc.ChargerBlockEntity" {
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ICrankable, $ICrankable$$Type} from "appeng.api.implementations.blockentities.ICrankable"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChargerBlockEntity extends $AENetworkedPoweredBlockEntity implements $IGridTickable {
static readonly "POWER_MAXIMUM_AMOUNT": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getCrankable"(arg0: $Direction$$Type): $ICrankable
public "isWorking"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getInternalInventory"(): $InternalInventory
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "working"(): boolean
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargerBlockEntity$$Type = ($ChargerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargerBlockEntity_ = $ChargerBlockEntity$$Type;
}}
declare module "appeng.blockentity.storage.MEChestBlockEntity" {
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$ILinkStatus, $ILinkStatus$$Type} from "appeng.api.storage.ILinkStatus"
import {$KeyTypeSelectionHost, $KeyTypeSelectionHost$$Type} from "appeng.api.util.KeyTypeSelectionHost"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$KeyTypeSelection, $KeyTypeSelection$$Type} from "appeng.api.util.KeyTypeSelection"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$IStorageProvider, $IStorageProvider$$Type} from "appeng.api.storage.IStorageProvider"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$IStorageMounts, $IStorageMounts$$Type} from "appeng.api.storage.IStorageMounts"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IMEChest, $IMEChest$$Type} from "appeng.api.implementations.blockentities.IMEChest"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$$Type} from "appeng.blockentity.ServerTickingBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ITerminalHost, $ITerminalHost$$Type} from "appeng.api.storage.ITerminalHost"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$IColorableBlockEntity, $IColorableBlockEntity$$Type} from "appeng.api.implementations.blockentities.IColorableBlockEntity"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IPriorityHost, $IPriorityHost$$Type} from "appeng.helpers.IPriorityHost"
import {$StorageCell, $StorageCell$$Type} from "appeng.api.storage.cells.StorageCell"
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$CellState, $CellState$$Type} from "appeng.api.storage.cells.CellState"

export class $MEChestBlockEntity extends $AENetworkedPoweredBlockEntity implements $IMEChest, $ITerminalHost, $IPriorityHost, $IColorableBlockEntity, $ServerTickingBlockEntity, $IStorageProvider, $KeyTypeSelectionHost {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "serverTick"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isPowered"(): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getColor"(): $AEColor
public "getInventory"(): $MEStorage
public "getMEStorage"(arg0: $Direction$$Type): $MEStorage
public "getCellItem"(arg0: integer): $Item
public "isCellBlinking"(arg0: integer): boolean
public "setCell"(arg0: $ItemStack$$Type): void
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "getLinkStatus"(): $ILinkStatus
public "getCellCount"(): integer
public "getCellStatus"(arg0: integer): $CellState
public "openGui"(arg0: $Player$$Type): boolean
public "getCell"(): $ItemStack
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "getConfigManager"(): $IConfigManager
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getKeyTypeSelection"(): $KeyTypeSelection
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "openCellInventoryMenu"(arg0: $Player$$Type): void
public "mountInventories"(arg0: $IStorageMounts$$Type): void
public "getCellInventory"(arg0: integer): $MEStorage
public "getInternalInventory"(): $InternalInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getOriginalCellInventory"(arg0: integer): $StorageCell
public "getCloseHotkey"(): StringJS
public static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
public static "empty"(): $IEnergySource
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getUpgrades"(): $IUpgradeInventory
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
set "priority"(value: integer)
get "priority"(): integer
get "powered"(): boolean
get "color"(): $AEColor
get "inventory"(): $MEStorage
set "cell"(value: $ItemStack$$Type)
get "linkStatus"(): $ILinkStatus
get "cellCount"(): integer
get "cell"(): $ItemStack
get "configManager"(): $IConfigManager
get "mainMenuIcon"(): $ItemStack
get "keyTypeSelection"(): $KeyTypeSelection
get "internalInventory"(): $InternalInventory
get "closeHotkey"(): StringJS
get "upgrades"(): $IUpgradeInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MEChestBlockEntity$$Type = ($MEChestBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MEChestBlockEntity_ = $MEChestBlockEntity$$Type;
}}
declare module "appeng.blockentity.misc.CondenserBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$AEBaseInvBlockEntity, $AEBaseInvBlockEntity$$Type} from "appeng.blockentity.AEBaseInvBlockEntity"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CondenserBlockEntity extends $AEBaseInvBlockEntity implements $IConfigurableObject {
static readonly "BYTE_MULTIPLIER": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getStorage"(): double
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getMEStorage"(): $MEStorage
public "addPower"(arg0: double): void
public "getExternalInv"(): $InternalInventory
public "getStoredPower"(): double
public "getFluidHandler"(): $IFluidHandler
public "getConfigManager"(): $IConfigManager
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getRequiredPower"(): double
public "getInternalInventory"(): $InternalInventory
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "storage"(): double
get "mEStorage"(): $MEStorage
get "externalInv"(): $InternalInventory
get "storedPower"(): double
get "fluidHandler"(): $IFluidHandler
get "configManager"(): $IConfigManager
get "requiredPower"(): double
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CondenserBlockEntity$$Type = ($CondenserBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CondenserBlockEntity_ = $CondenserBlockEntity$$Type;
}}
declare module "appeng.blockentity.networking.CrystalResonanceGeneratorBlockEntity" {
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Set, $Set$$Type} from "java.util.Set"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CrystalResonanceGeneratorBlockEntity extends $AENetworkedBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isSuppressed"(): boolean
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "suppressed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalResonanceGeneratorBlockEntity$$Type = ($CrystalResonanceGeneratorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalResonanceGeneratorBlockEntity_ = $CrystalResonanceGeneratorBlockEntity$$Type;
}}
declare module "appeng.blockentity.spatial.SpatialPylonBlockEntity$AxisPosition" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $SpatialPylonBlockEntity$AxisPosition extends $Enum<($SpatialPylonBlockEntity$AxisPosition)> {
static readonly "START": $SpatialPylonBlockEntity$AxisPosition
static readonly "END": $SpatialPylonBlockEntity$AxisPosition
static readonly "NONE": $SpatialPylonBlockEntity$AxisPosition
static readonly "MIDDLE": $SpatialPylonBlockEntity$AxisPosition


public static "values"(): ($SpatialPylonBlockEntity$AxisPosition)[]
public static "valueOf"(arg0: StringJS): $SpatialPylonBlockEntity$AxisPosition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonBlockEntity$AxisPosition$$Type = (("none") | ("start") | ("middle") | ("end"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonBlockEntity$AxisPosition_ = $SpatialPylonBlockEntity$AxisPosition$$Type;
}}
declare module "appeng.blockentity.networking.EnergyCellBlockEntity" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$IAEPowerStorage, $IAEPowerStorage$$Type} from "appeng.api.networking.energy.IAEPowerStorage"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$AccessRestriction, $AccessRestriction$$Type} from "appeng.api.config.AccessRestriction"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $EnergyCellBlockEntity extends $AENetworkedBlockEntity implements $IAEPowerStorage, $IGridTickable {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getPriority"(): integer
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "onReady"(): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public "getPowerFlow"(): $AccessRestriction
public "getAEMaxPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getAECurrentPower"(): double
public "isAEPublicPowerStorage"(): boolean
public static "getStorageLevelFromFillFactor"(arg0: double): integer
public static "empty"(): $IEnergySource
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "priority"(): integer
get "powerFlow"(): $AccessRestriction
get "aEMaxPower"(): double
get "aECurrentPower"(): double
get "aEPublicPowerStorage"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCellBlockEntity$$Type = ($EnergyCellBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCellBlockEntity_ = $EnergyCellBlockEntity$$Type;
}}
declare module "appeng.blockentity.storage.IOPortBlockEntity" {
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$AENetworkedInvBlockEntity, $AENetworkedInvBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$StorageCell, $StorageCell$$Type} from "appeng.api.storage.cells.StorageCell"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $IOPortBlockEntity extends $AENetworkedInvBlockEntity implements $IUpgradeableObject, $IConfigurableObject, $IGridTickable {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getUpgrades"(): $IUpgradeInventory
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getConfigManager"(): $IConfigManager
public "matchesFullnessMode"(arg0: $StorageCell$$Type): boolean
public "updateRedstoneState"(): void
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getInternalInventory"(): $InternalInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOPortBlockEntity$$Type = ($IOPortBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOPortBlockEntity_ = $IOPortBlockEntity$$Type;
}}
declare module "appeng.blockentity.networking.CableBusBlockEntity" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Reference2IntMap, $Reference2IntMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntMap"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IFacadeContainer, $IFacadeContainer$$Type} from "appeng.api.parts.IFacadeContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CableBusContainer, $CableBusContainer$$Type} from "appeng.parts.CableBusContainer"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$DimensionalBlockPos, $DimensionalBlockPos$$Type} from "appeng.api.util.DimensionalBlockPos"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$AEMultiBlockEntity, $AEMultiBlockEntity$$Type} from "appeng.helpers.AEMultiBlockEntity"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$SelectedPart, $SelectedPart$$Type} from "appeng.api.parts.SelectedPart"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $CableBusBlockEntity extends $AEBaseBlockEntity implements $AEMultiBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "cleanup"(): void
public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getModelData"(): $ModelData
public "getColor"(): $AEColor
public "isBlocked"(arg0: $Direction$$Type): boolean
public "getCableBus"(): $CableBusContainer
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "onReady"(): void
public "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
public "markForSave"(): void
public "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
public "removePart"(arg0: $IPart$$Type): boolean
public "partChanged"(): void
public "isInWorld"(): boolean
public "debugExport"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Reference2IntMap$$Type<(any)>, arg3: $Reference2IntMap$$Type<($IGridNode$$Type)>): void
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
public "getPart"(arg0: $Direction$$Type): $IPart
public "markForUpdate"(): void
public "hasRedstone"(): boolean
public "clearRemoved"(): void
public "clearContainer"(): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "notifyNeighbors"(): void
public "onChunkUnloaded"(): void
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "disassembleWithWrench"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockHitResult$$Type, arg3: $ItemStack$$Type): $InteractionResult
public "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
public "getFacadeContainer"(): $IFacadeContainer
public "removePartFromSide"(arg0: $Direction$$Type): void
public "notifyNeighborNow"(arg0: $Direction$$Type): void
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "modelData"(): $ModelData
get "color"(): $AEColor
get "cableBus"(): $CableBusContainer
get "inWorld"(): boolean
get "facadeContainer"(): $IFacadeContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusBlockEntity$$Type = ($CableBusBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBusBlockEntity_ = $CableBusBlockEntity$$Type;
}}
declare module "appeng.blockentity.misc.InscriberBlockEntity" {
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$ICrankable, $ICrankable$$Type} from "appeng.api.implementations.blockentities.ICrankable"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$InscriberRecipe, $InscriberRecipe$$Type} from "appeng.recipes.handlers.InscriberRecipe"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $InscriberBlockEntity extends $AENetworkedPoweredBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getTask"(): $InscriberRecipe
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isSmash"(): boolean
public "setSmash"(arg0: boolean): void
public "getClientStart"(): long
public "isRepeatSmash"(): boolean
public "setRepeatSmash"(arg0: boolean): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "getCrankable"(arg0: $Direction$$Type): $ICrankable
public "getUpgrades"(): $IUpgradeInventory
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getConfigManager"(): $IConfigManager
public "getProcessingTime"(): integer
public "getMaxProcessingTime"(): integer
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getInternalInventory"(): $InternalInventory
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "task"(): $InscriberRecipe
get "smash"(): boolean
set "smash"(value: boolean)
get "clientStart"(): long
get "repeatSmash"(): boolean
set "repeatSmash"(value: boolean)
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "processingTime"(): integer
get "maxProcessingTime"(): integer
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriberBlockEntity$$Type = ($InscriberBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InscriberBlockEntity_ = $InscriberBlockEntity$$Type;
}}
declare module "appeng.blockentity.grid.AENetworkedPoweredBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$AEBasePoweredBlockEntity, $AEBasePoweredBlockEntity$$Type} from "appeng.blockentity.powersink.AEBasePoweredBlockEntity"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IGridConnectedBlockEntity, $IGridConnectedBlockEntity$$Type} from "appeng.me.helpers.IGridConnectedBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AENetworkedPoweredBlockEntity extends $AEBasePoweredBlockEntity implements $IGridConnectedBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "getMainNode"(): $IManagedGridNode
public "clearRemoved"(): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "onChunkUnloaded"(): void
public "setOwner"(arg0: $Player$$Type): void
public "ifGridPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
public "saveChanges"(): void
public "getGridNode"(): $IGridNode
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getActionableNode"(): $IGridNode
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$$Type)
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AENetworkedPoweredBlockEntity$$Type = ($AENetworkedPoweredBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AENetworkedPoweredBlockEntity_ = $AENetworkedPoweredBlockEntity$$Type;
}}
declare module "appeng.blockentity.crafting.MolecularAssemblerBlockEntity" {
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ICraftingMachine, $ICraftingMachine$$Type} from "appeng.api.implementations.blockentities.ICraftingMachine"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$AENetworkedInvBlockEntity, $AENetworkedInvBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$KeyCounter, $KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PatternContainerGroup, $PatternContainerGroup$$Type} from "appeng.api.implementations.blockentities.PatternContainerGroup"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IPowerChannelState, $IPowerChannelState$$Type} from "appeng.api.implementations.IPowerChannelState"
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$AssemblerAnimationStatus, $AssemblerAnimationStatus$$Type} from "appeng.client.render.crafting.AssemblerAnimationStatus"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IMolecularAssemblerSupportedPattern, $IMolecularAssemblerSupportedPattern$$Type} from "appeng.blockentity.crafting.IMolecularAssemblerSupportedPattern"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $MolecularAssemblerBlockEntity extends $AENetworkedInvBlockEntity implements $IUpgradeableObject, $IGridTickable, $ICraftingMachine, $IPowerChannelState {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INV_MAIN": $ResourceLocation

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isPowered"(): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "acceptsPlans"(): boolean
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[], arg2: $Direction$$Type): boolean
public "getUpgrades"(): $IUpgradeInventory
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getCraftingProgress"(): integer
public "getAnimationStatus"(): $AssemblerAnimationStatus
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getCraftingMachineInfo"(): $PatternContainerGroup
public "setAnimationStatus"(arg0: $AssemblerAnimationStatus$$Type): void
public "getCurrentPattern"(): $IMolecularAssemblerSupportedPattern
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getInternalInventory"(): $InternalInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public static "of"(arg0: $BlockEntity$$Type, arg1: $Direction$$Type): $ICraftingMachine
public static "of"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ICraftingMachine
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "powered"(): boolean
get "upgrades"(): $IUpgradeInventory
get "craftingProgress"(): integer
get "animationStatus"(): $AssemblerAnimationStatus
get "craftingMachineInfo"(): $PatternContainerGroup
set "animationStatus"(value: $AssemblerAnimationStatus$$Type)
get "currentPattern"(): $IMolecularAssemblerSupportedPattern
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MolecularAssemblerBlockEntity$$Type = ($MolecularAssemblerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MolecularAssemblerBlockEntity_ = $MolecularAssemblerBlockEntity$$Type;
}}
declare module "appeng.blockentity.storage.DriveBlockEntity" {
import {$IChestOrDrive, $IChestOrDrive$$Type} from "appeng.api.implementations.blockentities.IChestOrDrive"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$IStorageProvider, $IStorageProvider$$Type} from "appeng.api.storage.IStorageProvider"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$AENetworkedInvBlockEntity, $AENetworkedInvBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedInvBlockEntity"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$IStorageMounts, $IStorageMounts$$Type} from "appeng.api.storage.IStorageMounts"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ISubMenu, $ISubMenu$$Type} from "appeng.menu.ISubMenu"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MEStorage, $MEStorage$$Type} from "appeng.api.storage.MEStorage"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IPriorityHost, $IPriorityHost$$Type} from "appeng.helpers.IPriorityHost"
import {$StorageCell, $StorageCell$$Type} from "appeng.api.storage.cells.StorageCell"
import {$CellState, $CellState$$Type} from "appeng.api.storage.cells.CellState"

export class $DriveBlockEntity extends $AENetworkedInvBlockEntity implements $IChestOrDrive, $IPriorityHost, $IStorageProvider {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "isPowered"(): boolean
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getModelData"(): $ModelData
public "openMenu"(arg0: $Player$$Type): void
public "getCellItem"(arg0: integer): $Item
public "isCellBlinking"(arg0: integer): boolean
public "getCellCount"(): integer
public "getCellStatus"(arg0: integer): $CellState
public "onReady"(): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "returnToMainMenu"(arg0: $Player$$Type, arg1: $ISubMenu$$Type): void
public "getMainMenuIcon"(): $ItemStack
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "mountInventories"(arg0: $IStorageMounts$$Type): void
public "getCellInventory"(arg0: integer): $MEStorage
public "getInternalInventory"(): $InternalInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getOriginalCellInventory"(arg0: integer): $StorageCell
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
public "getActionableNode"(): $IGridNode
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
set "priority"(value: integer)
get "priority"(): integer
get "powered"(): boolean
get "modelData"(): $ModelData
get "cellCount"(): integer
get "mainMenuIcon"(): $ItemStack
get "internalInventory"(): $InternalInventory
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DriveBlockEntity$$Type = ($DriveBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DriveBlockEntity_ = $DriveBlockEntity$$Type;
}}
declare module "appeng.blockentity.misc.LightDetectorBlockEntity" {
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$CommonTickingBlockEntity, $CommonTickingBlockEntity$$Type} from "appeng.blockentity.CommonTickingBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LightDetectorBlockEntity extends $AEBaseBlockEntity implements $CommonTickingBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "commonTick"(): void
public "updateLight"(): void
public "isExposedToLight"(): boolean
public "serverTick"(): void
public "clientTick"(): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "exposedToLight"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightDetectorBlockEntity$$Type = ($LightDetectorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightDetectorBlockEntity_ = $LightDetectorBlockEntity$$Type;
}}
declare module "appeng.blockentity.grid.AENetworkedInvBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$AEBaseInvBlockEntity, $AEBaseInvBlockEntity$$Type} from "appeng.blockentity.AEBaseInvBlockEntity"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IGridConnectedBlockEntity, $IGridConnectedBlockEntity$$Type} from "appeng.me.helpers.IGridConnectedBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AENetworkedInvBlockEntity extends $AEBaseInvBlockEntity implements $IGridConnectedBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onReady"(): void
public "getMainNode"(): $IManagedGridNode
public "clearRemoved"(): void
public "onChunkUnloaded"(): void
public "setOwner"(arg0: $Player$$Type): void
public "ifGridPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
public "saveChanges"(): void
public "getGridNode"(): $IGridNode
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getActionableNode"(): $IGridNode
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$$Type)
get "gridNode"(): $IGridNode
get "actionableNode"(): $IGridNode
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AENetworkedInvBlockEntity$$Type = ($AENetworkedInvBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AENetworkedInvBlockEntity_ = $AENetworkedInvBlockEntity$$Type;
}}
declare module "appeng.blockentity.misc.CellWorkbenchBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeableObject, $IUpgradeableObject$$Type} from "appeng.api.upgrades.IUpgradeableObject"
import {$List, $List$$Type} from "java.util.List"
import {$IConfigInvHost, $IConfigInvHost$$Type} from "appeng.helpers.IConfigInvHost"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$AppEngInternalInventory, $AppEngInternalInventory$$Type} from "appeng.util.inv.AppEngInternalInventory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$$Type} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$IConfigManager, $IConfigManager$$Type} from "appeng.api.util.IConfigManager"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IConfigurableObject, $IConfigurableObject$$Type} from "appeng.api.util.IConfigurableObject"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$$Type} from "appeng.blockentity.AEBaseBlockEntity"
import {$InternalInventoryHost, $InternalInventoryHost$$Type} from "appeng.util.inv.InternalInventoryHost"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$GenericStackInv, $GenericStackInv$$Type} from "appeng.helpers.externalstorage.GenericStackInv"

export class $CellWorkbenchBlockEntity extends $AEBaseBlockEntity implements $IConfigurableObject, $IUpgradeableObject, $InternalInventoryHost, $IConfigInvHost {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public static "copy"(arg0: $GenericStackInv$$Type, arg1: $GenericStackInv$$Type): void
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getConfig"(): $GenericStackInv
public "getUpgrades"(): $IUpgradeInventory
public "getCell"(): $ICellWorkbenchItem
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getConfigManager"(): $IConfigManager
public "saveChangedInventory"(arg0: $AppEngInternalInventory$$Type): void
public "onChangeInventory"(arg0: $AppEngInternalInventory$$Type, arg1: integer): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "isUpgradedWith"(arg0: $ItemLike$$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$$Type): integer
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "config"(): $GenericStackInv
get "upgrades"(): $IUpgradeInventory
get "cell"(): $ICellWorkbenchItem
get "configManager"(): $IConfigManager
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CellWorkbenchBlockEntity$$Type = ($CellWorkbenchBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CellWorkbenchBlockEntity_ = $CellWorkbenchBlockEntity$$Type;
}}
declare module "appeng.blockentity.misc.GrowthAcceleratorBlockEntity" {
import {$IPowerChannelState, $IPowerChannelState$$Type} from "appeng.api.implementations.IPowerChannelState"
import {$AENetworkedPoweredBlockEntity, $AENetworkedPoweredBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedPoweredBlockEntity"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$IGridNodeListener$State, $IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ICrankable, $ICrankable$$Type} from "appeng.api.implementations.blockentities.ICrankable"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GrowthAcceleratorBlockEntity extends $AENetworkedPoweredBlockEntity implements $IPowerChannelState {
static readonly "MAX_STORED_POWER": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isActive"(): boolean
public "isPowered"(): boolean
public "getCrankable"(arg0: $Direction$$Type): $ICrankable
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getInternalInventory"(): $InternalInventory
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "active"(): boolean
get "powered"(): boolean
get "internalInventory"(): $InternalInventory
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowthAcceleratorBlockEntity$$Type = ($GrowthAcceleratorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowthAcceleratorBlockEntity_ = $GrowthAcceleratorBlockEntity$$Type;
}}
declare module "appeng.blockentity.AEBaseBlockEntity" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IDebugExportable, $IDebugExportable$$Type} from "appeng.util.IDebugExportable"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Reference2IntMap, $Reference2IntMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntMap"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Nameable, $Nameable$$Type} from "net.minecraft.world.Nameable"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ISegmentedInventory, $ISegmentedInventory$$Type} from "appeng.api.inventories.ISegmentedInventory"

export class $AEBaseBlockEntity extends $BlockEntity implements $Nameable, $ISegmentedInventory, $Clearable, $IDebugExportable {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getName"(): $Component
public "setName"(arg0: StringJS): void
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCustomName"(): $Component
public "loadTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getModelData"(): $ModelData
public "setBlockState"(arg0: $BlockState$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getBlockEntity"(): $BlockEntity
public "isClientSide"(): boolean
public "getTop"(): $Direction
public "saveChanges"(): void
public "onReady"(): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type, arg2: $Player$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $Player$$Type): $DataComponentMap
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "debugExport"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Reference2IntMap$$Type<(any)>, arg3: $Reference2IntMap$$Type<($IGridNode$$Type)>): void
public "notLoaded"(): boolean
public "getGlobalPos"(): $GlobalPos
public "getFront"(): $Direction
public "markForUpdate"(): void
public "getOrientation"(): $BlockOrientation
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "addAdditionalDrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "markForClientUpdate"(): void
public "disassembleWithWrench"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockHitResult$$Type, arg3: $ItemStack$$Type): $InteractionResult
public "getQueuedForReady"(): byte
public "getReadyInvoked"(): byte
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public static "registerBlockEntityItem"(arg0: $BlockEntityType$$Type<(any)>, arg1: $Item$$Type): void
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "name"(): $Component
set "name"(value: StringJS)
get "customName"(): $Component
get "modelData"(): $ModelData
set "blockState"(value: $BlockState$$Type)
get "blockEntity"(): $BlockEntity
get "clientSide"(): boolean
get "top"(): $Direction
get "globalPos"(): $GlobalPos
get "front"(): $Direction
get "orientation"(): $BlockOrientation
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "queuedForReady"(): byte
get "readyInvoked"(): byte
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseBlockEntity$$Type = ($AEBaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBaseBlockEntity_ = $AEBaseBlockEntity$$Type;
}}
declare module "appeng.blockentity.networking.CreativeEnergyCellBlockEntity" {
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$IAEPowerStorage, $IAEPowerStorage$$Type} from "appeng.api.networking.energy.IAEPowerStorage"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AccessRestriction, $AccessRestriction$$Type} from "appeng.api.config.AccessRestriction"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreativeEnergyCellBlockEntity extends $AENetworkedBlockEntity implements $IAEPowerStorage {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getPriority"(): integer
public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public "getPowerFlow"(): $AccessRestriction
public "getAEMaxPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "getAECurrentPower"(): double
public "isAEPublicPowerStorage"(): boolean
public static "empty"(): $IEnergySource
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "priority"(): integer
get "powerFlow"(): $AccessRestriction
get "aEMaxPower"(): double
get "aECurrentPower"(): double
get "aEPublicPowerStorage"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeEnergyCellBlockEntity$$Type = ($CreativeEnergyCellBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeEnergyCellBlockEntity_ = $CreativeEnergyCellBlockEntity$$Type;
}}
