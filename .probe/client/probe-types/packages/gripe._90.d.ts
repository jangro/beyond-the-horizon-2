declare module "gripe._90.arseng.item.SourceCellItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$StorageTier, $StorageTier$$Type} from "appeng.items.storage.StorageTier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ISourceCellItem, $ISourceCellItem$$Type} from "gripe._90.arseng.me.cell.ISourceCellItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$AEBaseItem, $AEBaseItem$$Type} from "appeng.items.AEBaseItem"

export class $SourceCellItem extends $AEBaseItem implements $ISourceCellItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $StorageTier$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getTotalBytes"(): long
public "getIdleDrain"(): double
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getTier"(): $StorageTier
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "isEditable"(arg0: $ItemStack$$Type): boolean
public "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "totalBytes"(): long
get "idleDrain"(): double
get "tier"(): $StorageTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceCellItem$$Type = ($SourceCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceCellItem_ = $SourceCellItem$$Type;
}}
declare module "gripe._90.arseng.me.key.SourceKeyType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AEKeyType, $AEKeyType$$Type} from "appeng.api.stacks.AEKeyType"
import {$RegisterEvent, $RegisterEvent$$Type} from "net.neoforged.neoforge.registries.RegisterEvent"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SourceKeyType extends $AEKeyType {
static readonly "CODEC": $Codec<($AEKeyType)>
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($AEKeyType)>)>
static readonly "SOURCE": $Component
static readonly "TYPE": $AEKeyType
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AEKeyType)>


public static "register"(arg0: $RegisterEvent$$Type): void
public "codec"(): $MapCodec<($AEKey)>
public "readFromPacket"(arg0: $RegistryFriendlyByteBuf$$Type): $AEKey
public "getAmountPerOperation"(): integer
public "getAmountPerByte"(): integer
get "amountPerOperation"(): integer
get "amountPerByte"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceKeyType$$Type = ($SourceKeyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceKeyType_ = $SourceKeyType$$Type;
}}
declare module "gripe._90.polyeng.mixin.AEBaseMenuAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AEBaseMenuAccessor {

 "callSendClientAction"(arg0: StringJS): void

(arg0: StringJS): void
}

export namespace $AEBaseMenuAccessor {
const probejs$$marker: never
}
export class $AEBaseMenuAccessor$$Static implements $AEBaseMenuAccessor {


 "callSendClientAction"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBaseMenuAccessor$$Type = ((arg0: StringJS) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBaseMenuAccessor_ = $AEBaseMenuAccessor$$Type;
}}
declare module "gripe._90.arseng.block.SourceConverterBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$$Type} from "appeng.block.AEBaseEntityBlock"
import {$SourceConverterBlockEntity, $SourceConverterBlockEntity$$Type} from "gripe._90.arseng.block.entity.SourceConverterBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SourceConverterBlock extends $AEBaseEntityBlock<($SourceConverterBlockEntity)> {
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
 "hasCollision": boolean

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceConverterBlock$$Type = ($SourceConverterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceConverterBlock_ = $SourceConverterBlock$$Type;
}}
declare module "gripe._90.arseng.block.entity.SourceConverterBlockEntity" {
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$IEnergySource, $IEnergySource$$Type} from "appeng.api.networking.energy.IEnergySource"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$IExternalPowerSink, $IExternalPowerSink$$Type} from "appeng.blockentity.powersink.IExternalPowerSink"
import {$PowerUnit, $PowerUnit$$Type} from "appeng.api.config.PowerUnit"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AccessRestriction, $AccessRestriction$$Type} from "appeng.api.config.AccessRestriction"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SourceConverterBlockEntity extends $AENetworkedBlockEntity implements $IExternalPowerSink {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
public "getPowerFlow"(): $AccessRestriction
public "getAEMaxPower"(): double
public "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public static "registerCapability"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getAECurrentPower"(): double
public "getExternalPowerDemand"(arg0: $PowerUnit$$Type, arg1: double): double
public "injectExternalPower"(arg0: $PowerUnit$$Type, arg1: double, arg2: $Actionable$$Type): double
public "isAEPublicPowerStorage"(): boolean
public "getPriority"(): integer
public "saveChanges"(): void
public static "empty"(): $IEnergySource
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "powerFlow"(): $AccessRestriction
get "aEMaxPower"(): double
get "aECurrentPower"(): double
get "aEPublicPowerStorage"(): boolean
get "priority"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceConverterBlockEntity$$Type = ($SourceConverterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceConverterBlockEntity_ = $SourceConverterBlockEntity$$Type;
}}
declare module "gripe._90.arseng.block.MESourceJarBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MESourceJarBlockEntity, $MESourceJarBlockEntity$$Type} from "gripe._90.arseng.block.entity.MESourceJarBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$$Type} from "appeng.block.AEBaseEntityBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IOrientationStrategy, $IOrientationStrategy$$Type} from "appeng.api.orientation.IOrientationStrategy"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $MESourceJarBlock extends $AEBaseEntityBlock<($MESourceJarBlockEntity)> implements $SimpleWaterloggedBlock {
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
 "hasCollision": boolean

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getOrientationStrategy"(): $IOrientationStrategy
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public "asHolder"(): $Holder<(any)>
get "orientationStrategy"(): $IOrientationStrategy
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MESourceJarBlock$$Type = ($MESourceJarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MESourceJarBlock_ = $MESourceJarBlock$$Type;
}}
declare module "gripe._90.arseng.block.entity.MESourceJarBlockEntity" {
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$AENetworkedBlockEntity, $AENetworkedBlockEntity$$Type} from "appeng.blockentity.grid.AENetworkedBlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ISourceCap, $ISourceCap$$Type} from "com.hollingsworth.arsnouveau.api.source.ISourceCap"
import {$BlockOrientation, $BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerTickingBlockEntity, $ServerTickingBlockEntity$$Type} from "appeng.blockentity.ServerTickingBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MESourceJarBlockEntity extends $AENetworkedBlockEntity implements $ISourceCap, $ServerTickingBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getSource"(): integer
public "serverTick"(): void
public "setSource"(arg0: integer): void
public "clampedFill"(): integer
public "getMaxExtract"(): integer
public "getMaxReceive"(): integer
public "setMaxSource"(arg0: integer): void
public "receiveSource"(arg0: integer, arg1: boolean): integer
public "extractSource"(arg0: integer, arg1: boolean): integer
public static "registerCapability"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "canAcceptSource"(arg0: integer): boolean
public "canProvideSource"(arg0: integer): boolean
public "getSourceCapacity"(): integer
public "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
public "getMaxSource"(): integer
public "canExtract"(): boolean
public "canReceive"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "source"(): integer
set "source"(value: integer)
get "maxExtract"(): integer
get "maxReceive"(): integer
set "maxSource"(value: integer)
get "sourceCapacity"(): integer
get "maxSource"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MESourceJarBlockEntity$$Type = ($MESourceJarBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MESourceJarBlockEntity_ = $MESourceJarBlockEntity$$Type;
}}
declare module "gripe._90.arseng.me.cell.ISourceCellItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICellWorkbenchItem, $ICellWorkbenchItem$$Type} from "appeng.api.storage.cells.ICellWorkbenchItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ConfigInventory, $ConfigInventory$$Type} from "appeng.util.ConfigInventory"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"

export interface $ISourceCellItem extends $ICellWorkbenchItem {

 "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
 "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
 "getTotalBytes"(): long
 "getIdleDrain"(): double
 "isEditable"(arg0: $ItemStack$$Type): boolean
 "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
get "totalBytes"(): long
get "idleDrain"(): double
}

export namespace $ISourceCellItem {
const probejs$$marker: never
}
export class $ISourceCellItem$$Static implements $ISourceCellItem {


 "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
 "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
 "getTotalBytes"(): long
 "getIdleDrain"(): double
 "isEditable"(arg0: $ItemStack$$Type): boolean
 "getConfigInventory"(arg0: $ItemStack$$Type): $ConfigInventory
 "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
 "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISourceCellItem$$Type = ($ISourceCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISourceCellItem_ = $ISourceCellItem$$Type;
}}
declare module "gripe._90.arseng.item.PortableSourceCellItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$StorageTier, $StorageTier$$Type} from "appeng.items.storage.StorageTier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FuzzyMode, $FuzzyMode$$Type} from "appeng.api.config.FuzzyMode"
import {$ItemMenuHost, $ItemMenuHost$$Type} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ISourceCellItem, $ISourceCellItem$$Type} from "gripe._90.arseng.me.cell.ISourceCellItem"
import {$ItemMenuHostLocator, $ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeInventory, $IUpgradeInventory$$Type} from "appeng.api.upgrades.IUpgradeInventory"
import {$AbstractPortableCell, $AbstractPortableCell$$Type} from "appeng.items.tools.powered.AbstractPortableCell"

export class $PortableSourceCellItem extends $AbstractPortableCell implements $ISourceCellItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $StorageTier$$Type)

public "getChargeRate"(arg0: $ItemStack$$Type): double
public "getTotalBytes"(): long
public "getIdleDrain"(): double
public "getUpgrades"(arg0: $ItemStack$$Type): $IUpgradeInventory
public "getRecipeId"(): $ResourceLocation
public "getTier"(): $StorageTier
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getFuzzyMode"(arg0: $ItemStack$$Type): $FuzzyMode
public "setFuzzyMode"(arg0: $ItemStack$$Type, arg1: $FuzzyMode$$Type): void
public "getMenuHost"(arg0: $Player$$Type, arg1: $ItemMenuHostLocator$$Type, arg2: $BlockHitResult$$Type): $ItemMenuHost<(any)>
public "asItem"(): $Item
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "totalBytes"(): long
get "idleDrain"(): double
get "recipeId"(): $ResourceLocation
get "tier"(): $StorageTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableSourceCellItem$$Type = ($PortableSourceCellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableSourceCellItem_ = $PortableSourceCellItem$$Type;
}}
