declare module "appeng.parts.automation.AnnihilationPlanePartItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PartItem, $PartItem$$Type} from "appeng.items.parts.PartItem"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AnnihilationPlanePart, $AnnihilationPlanePart$$Type} from "appeng.parts.automation.AnnihilationPlanePart"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $AnnihilationPlanePartItem extends $PartItem<($AnnihilationPlanePart)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "CALLING_DAMAGEABLE_FROM_ANVIL": $ThreadLocal<(any)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "getEnchantmentValue"(): integer
public "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public static "getId"(arg0: $IPartItem$$Type<(any)>): $ResourceLocation
public static "byId"(arg0: $ResourceLocation$$Type): $IPartItem<(any)>
public static "getNetworkId"(arg0: $IPartItem$$Type<(any)>): integer
public static "byNetworkId"(arg0: integer): $IPartItem<(any)>
public "asItem"(): $Item
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


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "of"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $PlaneConnections
public "getIndex"(): integer
public "isUp"(): boolean
public "isLeft"(): boolean
public "isDown"(): boolean
public "isRight"(): boolean
get "index"(): integer
get "up"(): boolean
get "left"(): boolean
get "down"(): boolean
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
import {$SelectedPart, $SelectedPart$$Type} from "appeng.api.parts.SelectedPart"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$CableBusRenderState, $CableBusRenderState$$Type} from "appeng.client.render.cablebus.CableBusRenderState"

export interface $ICableBusContainer {

 "isEmpty"(): boolean
 "isLadder"(arg0: $LivingEntity$$Type): boolean
 "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
 "getLightValue"(): integer
 "onEntityCollision"(arg0: $Entity$$Type): void
 "canConnectRedstone"(arg0: $Direction$$Type): boolean
 "isProvidingStrongPower"(arg0: $Direction$$Type): integer
 "isProvidingWeakPower"(arg0: $Direction$$Type): integer
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
 "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "getRenderState"(): $CableBusRenderState
get "empty"(): boolean
get "lightValue"(): integer
get "renderState"(): $CableBusRenderState
}

export namespace $ICableBusContainer {
const probejs$$marker: never
}
export class $ICableBusContainer$$Static implements $ICableBusContainer {


 "isEmpty"(): boolean
 "isLadder"(arg0: $LivingEntity$$Type): boolean
 "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
 "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
 "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
 "getLightValue"(): integer
 "onEntityCollision"(arg0: $Entity$$Type): void
 "canConnectRedstone"(arg0: $Direction$$Type): boolean
 "isProvidingStrongPower"(arg0: $Direction$$Type): integer
 "isProvidingWeakPower"(arg0: $Direction$$Type): integer
 "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
 "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
 "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
 "getRenderState"(): $CableBusRenderState
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
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IPartModel, $IPartModel$$Type} from "appeng.api.parts.IPartModel"
import {$TickingRequest, $TickingRequest$$Type} from "appeng.api.networking.ticking.TickingRequest"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $AnnihilationPlanePart extends $AEBasePart implements $IGridTickable {

constructor(arg0: $IPartItem$$Type<(any)>)

public "getConnections"(): $PlaneConnections
public "getModelData"(): $ModelData
public "onEntityCollision"(arg0: $Entity$$Type): void
public "getEnchantments"(): $ItemEnchantments
public "getTickingRequest"(arg0: $IGridNode$$Type): $TickingRequest
public "getStaticModels"(): $IPartModel
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "addToWorld"(): void
public "onUpdateShape"(arg0: $Direction$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
public "tickingRequest"(arg0: $IGridNode$$Type, arg1: integer): $TickRateModulation
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public static "getModels"(): $List<($IPartModel)>
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
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
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
import {$SelectedPart, $SelectedPart$$Type} from "appeng.api.parts.SelectedPart"
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$IPartItem, $IPartItem$$Type} from "appeng.api.parts.IPartItem"

export class $CableBusContainer implements $AEMultiBlockEntity, $ICableBusContainer {

constructor(arg0: $IPartHost$$Type)

public "isEmpty"(): boolean
public "getLocation"(): $DimensionalBlockPos
public "cleanup"(): void
public "getShape"(): $VoxelShape
public static "isLoading"(): boolean
public "isLadder"(arg0: $LivingEntity$$Type): boolean
public "useWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "clearContent"(): void
public "clearContainer"(): void
public "getColor"(): $AEColor
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
public "isBlocked"(arg0: $Direction$$Type): boolean
public "getBlockEntity"(): $BlockEntity
public "getLightValue"(): integer
public "getGridNode"(arg0: $Direction$$Type): $IGridNode
public "setHost"(arg0: $IPartHost$$Type): void
public "onEntityCollision"(arg0: $Entity$$Type): void
public "canConnectRedstone"(arg0: $Direction$$Type): boolean
public "notifyNeighbors"(): void
public "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "removeFromWorld"(): void
public "isProvidingStrongPower"(arg0: $Direction$$Type): integer
public "isProvidingWeakPower"(arg0: $Direction$$Type): integer
public "selectPartLocal"(arg0: $Vec3$$Type): $SelectedPart
public "getFacadeContainer"(): $IFacadeContainer
public "removePartFromSide"(arg0: $Direction$$Type): void
public "notifyNeighborNow"(arg0: $Direction$$Type): void
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "updateConnections"(): void
public "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
public "isInWorld"(): boolean
public "addToWorld"(): void
public "onUpdateShape"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): void
public "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
public "replacePart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): T
public "markForSave"(): void
public "partChanged"(): void
public "removePart"(arg0: $IPart$$Type): boolean
public "recolourBlock"(arg0: $Direction$$Type, arg1: $AEColor$$Type, arg2: $Player$$Type): boolean
public "getRenderState"(): $CableBusRenderState
public "addPart"<T extends $IPart>(arg0: $IPartItem$$Type<(T)>, arg1: $Direction$$Type, arg2: $Player$$Type): T
public "canAddPart"(arg0: $ItemStack$$Type, arg1: $Direction$$Type): boolean
public "markForUpdate"(): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getPart"(arg0: $Direction$$Type): $IPart
public "hasRedstone"(): boolean
public "addPartDrops"(arg0: $List$$Type<($ItemStack$$Type)>): $List<($ItemStack)>
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "isRequiresDynamicRender"(): boolean
public "selectPartWorld"(arg0: $Vec3$$Type): $SelectedPart
get "empty"(): boolean
get "location"(): $DimensionalBlockPos
get "shape"(): $VoxelShape
get "color"(): $AEColor
get "blockEntity"(): $BlockEntity
get "lightValue"(): integer
set "host"(value: $IPartHost$$Type)
get "facadeContainer"(): $IFacadeContainer
get "inWorld"(): boolean
get "renderState"(): $CableBusRenderState
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
import {$IGridNode, $IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
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

public "getName"(): $Component
public "getHost"(): $IPartHost
public "isActive"(): boolean
public "getLevel"(): $Level
public "isPowered"(): boolean
public "getBlockEntity"(): $BlockEntity
public "isClientSide"(): boolean
public "getCustomName"(): $Component
public "getSide"(): $Direction
public "getGridNode"(): $IGridNode
public "addEntityCrashInfo"(arg0: $CrashReportCategory$$Type): void
public "readVisualStateFromNBT"(arg0: $CompoundTag$$Type): void
public "isMissingChannel"(): boolean
public "getActionableNode"(): $IGridNode
public "writeVisualStateToNBT"(arg0: $CompoundTag$$Type): void
public "removeFromWorld"(): void
public "setPartHostInfo"(arg0: $Direction$$Type, arg1: $IPartHost$$Type, arg2: $BlockEntity$$Type): void
public "getSubInventory"(arg0: $ResourceLocation$$Type): $InternalInventory
public "useStandardMemoryCard"(): boolean
public "onPlacement"(arg0: $Player$$Type): void
public "addToWorld"(): void
public "getMainNode"(): $IManagedGridNode
public "readFromStream"(arg0: $RegistryFriendlyByteBuf$$Type): boolean
public "getPartItem"(): $IPartItem<(any)>
public "exportSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$Builder$$Type): void
public "exportSettings"(arg0: $SettingsFrom$$Type): $DataComponentMap
public "importSettings"(arg0: $SettingsFrom$$Type, arg1: $DataComponentMap$$Type, arg2: $Player$$Type): void
public "onUseItemOn"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "debugExport"(arg0: $JsonWriter$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Reference2IntMap$$Type<(any)>, arg3: $Reference2IntMap$$Type<($IGridNode$$Type)>): void
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToStream"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getCableConnectionLength"(arg0: $AECableType$$Type): float
public "getLightLevel"(): integer
public "isSolid"(): boolean
public "isLadder"(arg0: $LivingEntity$$Type): boolean
public "clearContent"(): void
public "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type): void
public "getModelData"(): $ModelData
public "onEntityCollision"(arg0: $Entity$$Type): void
public "canConnectRedstone"(): boolean
public "addAdditionalDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
public "requireDynamicRender"(): boolean
public "isProvidingStrongPower"(): integer
public "isProvidingWeakPower"(): integer
public "getExternalFacingNode"(): $IGridNode
public "onUseWithoutItem"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "getStaticModels"(): $IPartModel
public "onNeighborChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "renderDynamic"(arg0: float, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): void
public "onUpdateShape"(arg0: $Direction$$Type): void
public "onClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "onShiftClicked"(arg0: $Player$$Type, arg1: $Vec3$$Type): boolean
public "addPartDrop"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean): void
public "getBoxes"(arg0: $IPartCollisionHelper$$Type): void
public "canBePlacedOn"(arg0: $BusSupport$$Type): boolean
public "getExternalCableConnectionType"(): $AECableType
public "getDesiredConnectionType"(): $AECableType
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public static "tryClear"(arg0: any): void
get "name"(): $Component
get "host"(): $IPartHost
get "active"(): boolean
get "level"(): $Level
get "powered"(): boolean
get "blockEntity"(): $BlockEntity
get "clientSide"(): boolean
get "customName"(): $Component
get "side"(): $Direction
get "gridNode"(): $IGridNode
get "missingChannel"(): boolean
get "actionableNode"(): $IGridNode
get "mainNode"(): $IManagedGridNode
get "partItem"(): $IPartItem<(any)>
get "lightLevel"(): integer
get "solid"(): boolean
get "modelData"(): $ModelData
get "providingStrongPower"(): boolean
get "providingWeakPower"(): boolean
get "externalFacingNode"(): $IGridNode
get "staticModels"(): $IPartModel
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
