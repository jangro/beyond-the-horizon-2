declare module "appeng.parts.automation.AnnihilationPlanePartItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PartItem, $PartItem$$Type} from "appeng.items.parts.PartItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$AnnihilationPlanePart, $AnnihilationPlanePart$$Type} from "appeng.parts.automation.AnnihilationPlanePart"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $AnnihilationPlanePartItem extends $PartItem<($AnnihilationPlanePart)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getEnchantmentValue"(): integer
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public static "getId"(arg0: $IPartItem$$Type<(any)>): $ResourceLocation
public static "byId"(arg0: $ResourceLocation$$Type): $IPartItem<(any)>
public static "getNetworkId"(arg0: $IPartItem$$Type<(any)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(any)>
public "asItem"(): $Item
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnihilationPlanePartItem$$Type = ($AnnihilationPlanePartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnihilationPlanePartItem_ = $AnnihilationPlanePartItem$$Type;
}}
declare module "appeng.parts.automation.PlaneConnections" {
import {$List, $List$$Type} from "java.util.List"

export class $PlaneConnections {
static readonly "PERMUTATIONS": $List<($PlaneConnections)>


public "getIndex"(): integer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "of"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $PlaneConnections
public "isDown"(): boolean
public "isLeft"(): boolean
public "isUp"(): boolean
public "isRight"(): boolean
get "index"(): integer
get "down"(): boolean
get "left"(): boolean
get "up"(): boolean
get "right"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaneConnections$$Type = ($PlaneConnections);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaneConnections_ = $PlaneConnections$$Type;
}}
declare module "appeng.parts.ICableBusContainer" {
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SelectedPart, $SelectedPart$$Type} from "appeng.api.parts.SelectedPart"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$CableBusRenderState, $CableBusRenderState$$Type} from "appeng.client.render.cablebus.CableBusRenderState"

export interface $ICableBusContainer {

 "isEmpty"(): boolean
 "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "isLadder"(arg0: $LivingEntity$$Type): boolean
 "getLightValue"(): integer
 "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
 "getRenderState"(): $CableBusRenderState
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
 "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "onEntityCollision"(arg0: $Entity$$Type): void
 "canConnectRedstone"(arg0: $Direction$$Type): boolean
 "isProvidingStrongPower"(arg0: $Direction$$Type): integer
 "isProvidingWeakPower"(arg0: $Direction$$Type): integer
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
get "empty"(): boolean
get "lightValue"(): integer
get "renderState"(): $CableBusRenderState
}

export namespace $ICableBusContainer {
const probejs$$marker: never
}
export class $ICableBusContainer$$Static implements $ICableBusContainer {


 "isEmpty"(): boolean
 "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "isLadder"(arg0: $LivingEntity$$Type): boolean
 "getLightValue"(): integer
 "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
 "getRenderState"(): $CableBusRenderState
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
 "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "onEntityCollision"(arg0: $Entity$$Type): void
 "canConnectRedstone"(arg0: $Direction$$Type): boolean
 "isProvidingStrongPower"(arg0: $Direction$$Type): integer
 "isProvidingWeakPower"(arg0: $Direction$$Type): integer
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICableBusContainer$$Type = ($ICableBusContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICableBusContainer_ = $ICableBusContainer$$Type;
}}
declare module "appeng.parts.automation.AnnihilationPlanePart" {
import {$TickRateModulation, $TickRateModulation$$Type} from "appeng.api.networking.ticking.TickRateModulation"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$IGridTickable, $IGridTickable$$Type} from "appeng.api.networking.ticking.IGridTickable"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPartCollisionHelper, $IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$AEBasePart, $AEBasePart$$Type} from "appeng.parts.AEBasePart"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$ItemEnchantments, $ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$PlaneConnections, $PlaneConnections$$Type} from "appeng.parts.automation.PlaneConnections"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IPartModel, $IPartModel$$Type} from "appeng.api.parts.IPartModel"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"

export class $AnnihilationPlanePart extends $AEBasePart implements $IGridTickable {

constructor(arg0: $IPartItem$$Type<(any)>)

public "getConnections"(): $PlaneConnections
public "getModelData"(): $ModelData
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
public "addToWorld"(): void
public "onUpdateShape"(arg0: $Direction$$Type): void
public static "getModels"(): $List<($IPartModel)>
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "getEnchantments"(): $ItemEnchantments
public "onEntityCollision"(arg0: $Entity$$Type): void
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getStaticModels"(): $IPartModel
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public static "tryClear"(arg0: any): void
get "connections"(): $PlaneConnections
get "modelData"(): $ModelData
get "enchantments"(): $ItemEnchantments
get "staticModels"(): $IPartModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnnihilationPlanePart$$Type = ($AnnihilationPlanePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnnihilationPlanePart_ = $AnnihilationPlanePart$$Type;
}}
declare module "appeng.parts.CableBusContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$IPartHost, $IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IFacadeContainer, $IFacadeContainer$$Type} from "appeng.api.parts.IFacadeContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$CableBusRenderState, $CableBusRenderState$$Type} from "appeng.client.render.cablebus.CableBusRenderState"
import {$ICableBusContainer, $ICableBusContainer$$Type} from "appeng.parts.ICableBusContainer"
import {$AEColor, $AEColor$$Type} from "appeng.api.util.AEColor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$DimensionalBlockPos, $DimensionalBlockPos$$Type} from "appeng.api.util.DimensionalBlockPos"
import {$AEMultiBlockEntity, $AEMultiBlockEntity$$Type} from "appeng.helpers.AEMultiBlockEntity"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SelectedPart, $SelectedPart$$Type} from "appeng.api.parts.SelectedPart"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $CableBusContainer implements $AEMultiBlockEntity, $ICableBusContainer {

constructor(arg0: $IPartHost$$Type)

public "cleanup"(): void
public "getShape"(): $VoxelShape
public static "isLoading"(): boolean
public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "isLadder"(arg0: $LivingEntity$$Type): boolean
public "clearContent"(): void
public "getLightValue"(): integer
public "getColor"(): $AEColor
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
public "isBlocked"(arg0: $Direction$$Type): boolean
public "getBlockEntity"(): $BlockEntity
public "setHost"(arg0: $IPartHost$$Type): void
public "getRenderState"(): $CableBusRenderState
public "addPartDrops"(arg0: $List$$Type<($ItemStack$$Type)>): $List<($ItemStack)>
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
public "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
public "markForSave"(): void
public "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
public "removePart"(arg0: $IPart$$Type): boolean
public "partChanged"(): void
public "isInWorld"(): boolean
public "addToWorld"(): void
public "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
public "getPart"(arg0: $Direction$$Type): $IPart
public "markForUpdate"(): void
public "hasRedstone"(): boolean
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "clearContainer"(): void
public "updateConnections"(): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "notifyNeighbors"(): void
public "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "onEntityCollision"(arg0: $Entity$$Type): void
public "canConnectRedstone"(arg0: $Direction$$Type): boolean
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "isProvidingStrongPower"(arg0: $Direction$$Type): integer
public "isProvidingWeakPower"(arg0: $Direction$$Type): integer
public "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
public "getFacadeContainer"(): $IFacadeContainer
public "removePartFromSide"(arg0: $Direction$$Type): void
public "notifyNeighborNow"(arg0: $Direction$$Type): void
public "removeFromWorld"(): void
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "isRequiresDynamicRender"(): boolean
public "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
get "shape"(): $VoxelShape
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "lightValue"(): integer
get "color"(): $AEColor
get "blockEntity"(): $BlockEntity
set "host"(value: $IPartHost$$Type)
get "renderState"(): $CableBusRenderState
get "inWorld"(): boolean
get "facadeContainer"(): $IFacadeContainer
get "requiresDynamicRender"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBusContainer$$Type = ($CableBusContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBusContainer_ = $CableBusContainer$$Type;
}}
declare module "appeng.parts.AEBasePart" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$BusSupport, $BusSupport$$Type} from "appeng.api.parts.BusSupport"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPartCollisionHelper, $IPartCollisionHelper$$Type} from "appeng.api.parts.IPartCollisionHelper"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AECableType, $AECableType$$Type} from "appeng.api.util.AECableType"
import {$IPartHost, $IPartHost$$Type} from "appeng.api.parts.IPartHost"
import {$IDebugExportable, $IDebugExportable$$Type} from "appeng.util.IDebugExportable"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$Reference2IntMap, $Reference2IntMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2IntMap"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IPowerChannelState, $IPowerChannelState$$Type} from "appeng.api.implementations.IPowerChannelState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IActionHost, $IActionHost$$Type} from "appeng.api.networking.security.IActionHost"
import {$IPart, $IPart$$Type} from "appeng.api.parts.IPart"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Nameable, $Nameable$$Type} from "net.minecraft.world.Nameable"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$SettingsFrom, $SettingsFrom$$Type} from "appeng.util.SettingsFrom"
import {$IManagedGridNode, $IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPartModel, $IPartModel$$Type} from "appeng.api.parts.IPartModel"
import {$CrashReportCategory, $CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"
import {$ISegmentedInventory, $ISegmentedInventory$$Type} from "appeng.api.inventories.ISegmentedInventory"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $AEBasePart implements $IPart, $IActionHost, $ISegmentedInventory, $IPowerChannelState, $Nameable, $IDebugExportable {

constructor(arg0: $IPartItem$$Type<(any)>)

public "getHost"(): $IPartHost
public "isActive"(): boolean
public "getLevel"(): $Level
public "getName"(): $Component
public "isPowered"(): boolean
public "getCustomName"(): $Component
public "getBlockEntity"(): $BlockEntity
public "isClientSide"(): boolean
public "getSide"(): $Direction
public "getMainNode"(): $IManagedGridNode
public "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
public "getPartItem"(): $IPartItem<(any)>
public "exportSettings"(arg0: $SettingsFrom$$Type): $DataComponentMap
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "onUseItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "addToWorld"(): void
public "debugExport"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Reference2IntMap$$Type<(any)>, arg3: $Reference2IntMap$$Type<($IGridNode$$Type)>): void
public "getGridNode"(): $IGridNode
public "onPlacement"(arg0: $Player$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "useStandardMemoryCard"(): boolean
public "readVisualStateFromNBT"(arg0: $CompoundTag$$Type): void
public "isMissingChannel"(): boolean
public "getActionableNode"(): $IGridNode
public "addEntityCrashInfo"(arg0: $CrashReportCategory$$Type): void
public "writeVisualStateToNBT"(arg0: $CompoundTag$$Type): void
public "removeFromWorld"(): void
public "setPartHostInfo"(arg0: $Direction$$Type, arg1: $IPartHost$$Type, arg2: $BlockEntity$$Type): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "isSolid"(): boolean
public "isLadder"(arg0: $LivingEntity$$Type): boolean
public "clearContent"(): void
public "getModelData"(): $ModelData
public "getLightLevel"(): integer
public "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
public "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
public "renderDynamic"(arg0: float, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): void
public "onUpdateShape"(arg0: $Direction$$Type): void
public "onShiftClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "addPartDrop"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
public "onClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "canBePlacedOn"(arg0: $BusSupport$$Type): boolean
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
public "onEntityCollision"(arg0: $Entity$$Type): void
public "canConnectRedstone"(): boolean
public "getStaticModels"(): $IPartModel
public "requireDynamicRender"(): boolean
public "isProvidingStrongPower"(): integer
public "isProvidingWeakPower"(): integer
public "getExternalFacingNode"(): $IGridNode
public "onUseWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "getExternalCableConnectionType"(): $AECableType
public "getDesiredConnectionType"(): $AECableType
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
get "host"(): $IPartHost
get "active"(): boolean
get "level"(): $Level
get "name"(): $Component
get "powered"(): boolean
get "customName"(): $Component
get "blockEntity"(): $BlockEntity
get "clientSide"(): boolean
get "side"(): $Direction
get "mainNode"(): $IManagedGridNode
get "partItem"(): $IPartItem<(any)>
get "gridNode"(): $IGridNode
get "missingChannel"(): boolean
get "actionableNode"(): $IGridNode
get "solid"(): boolean
get "modelData"(): $ModelData
get "lightLevel"(): integer
get "staticModels"(): $IPartModel
get "providingStrongPower"(): boolean
get "providingWeakPower"(): boolean
get "externalFacingNode"(): $IGridNode
get "externalCableConnectionType"(): $AECableType
get "desiredConnectionType"(): $AECableType
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEBasePart$$Type = ($AEBasePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEBasePart_ = $AEBasePart$$Type;
}}
