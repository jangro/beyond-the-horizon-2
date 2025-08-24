declare module "com.mrh0.createaddition.blocks.rolling_mill.RollingMillBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$RecipeWrapper, $RecipeWrapper$$Type} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$KineticBlockEntity, $KineticBlockEntity$$Type} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$$Type} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$RollingRecipe, $RollingRecipe$$Type} from "com.mrh0.createaddition.recipe.rolling.RollingRecipe"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $RollingMillBlockEntity extends $KineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "timer": integer
 "networkDirty": boolean
 "capability": $IItemHandler
 "updateSpeed": boolean
 "inputInv": $ItemStackHandler
static readonly "ATTACHMENTS_NBT_KEY": string
 "source": $BlockPos
 "outputInv": $ItemStackHandler
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "invalidate"(): void
public "find"(arg0: $RecipeWrapper$$Type, arg1: $Level$$Type): $Optional<($RecipeHolder<($RollingRecipe)>)>
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "destroy"(): void
public "tick"(): void
public "getProcessingSpeed"(): integer
public "spawnParticles"(): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "tickAudio"(): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "processingSpeed"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollingMillBlockEntity$$Type = ($RollingMillBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RollingMillBlockEntity_ = $RollingMillBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.energy.network.EnergyNetwork" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IWireNode, $IWireNode$$Type} from "com.mrh0.createaddition.energy.IWireNode"

export class $EnergyNetwork {

constructor(arg0: $Level$$Type)

public "invalidate"(): void
public "pull"(arg0: integer): integer
public "pull"(arg0: integer, arg1: boolean): integer
public "getId"(): integer
public "removed"(): void
public static "nextNode"(arg0: $Level$$Type, arg1: $EnergyNetwork$$Type, arg2: $Map$$Type<(string), ($IWireNode$$Type)>, arg3: $IWireNode$$Type, arg4: integer): $EnergyNetwork
public "push"(arg0: integer, arg1: boolean): integer
public "push"(arg0: integer): integer
public "tick"(arg0: integer): void
public "isValid"(): boolean
public "demand"(arg0: integer): integer
public "getPulled"(): integer
public "getPushed"(): integer
public "getDemand"(): integer
public "getBuff"(): integer
public "getMaxBuff"(): integer
get "id"(): integer
get "valid"(): boolean
get "pulled"(): integer
get "pushed"(): integer
get "buff"(): integer
get "maxBuff"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyNetwork$$Type = ($EnergyNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyNetwork_ = $EnergyNetwork$$Type;
}}
declare module "com.mrh0.createaddition.energy.AbstractElectricBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractElectricBlockEntity extends $SmartBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getCapacity"(): integer
public "tick"(): void
public "isEnergyOutput"(arg0: $Direction$$Type): boolean
public "isEnergyInput"(arg0: $Direction$$Type): boolean
public "updateCache"(arg0: $Direction$$Type): void
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getMaxIn"(): integer
public "getMaxOut"(): integer
/**
 * 
 * @deprecated
 */
public "outputTick"(arg0: integer): void
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "capacity"(): integer
get "maxIn"(): integer
get "maxOut"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractElectricBlockEntity$$Type = ($AbstractElectricBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractElectricBlockEntity_ = $AbstractElectricBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.index.CAFluids$NoColorFluidAttributes" {
import {$FluidType$Properties, $FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$AllFluids$TintedFluidType, $AllFluids$TintedFluidType$$Type} from "com.simibubi.create.AllFluids$TintedFluidType"

export class $CAFluids$NoColorFluidAttributes extends $AllFluids$TintedFluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor(arg0: $FluidType$Properties$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CAFluids$NoColorFluidAttributes$$Type = ($CAFluids$NoColorFluidAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CAFluids$NoColorFluidAttributes_ = $CAFluids$NoColorFluidAttributes$$Type;
}}
declare module "com.mrh0.createaddition.recipe.FluidRecipeWrapper" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $FluidRecipeWrapper implements $Container, $RecipeInput {
 "fluid": $FluidStack

constructor(arg0: $FluidStack$$Type)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "size"(): integer
public "isEmpty"(): boolean
public "getItem"(arg0: integer): $ItemStack
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "setChanged"(): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
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
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
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
get "empty"(): boolean
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
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidRecipeWrapper$$Type = ($FluidRecipeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidRecipeWrapper_ = $FluidRecipeWrapper$$Type;
}}
declare module "com.mrh0.createaddition.blocks.connector.LargeConnectorBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$WireConnectResult, $WireConnectResult$$Type} from "com.mrh0.createaddition.energy.WireConnectResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ConnectorType, $ConnectorType$$Type} from "com.mrh0.createaddition.blocks.connector.ConnectorType"
import {$IWireNode, $IWireNode$$Type} from "com.mrh0.createaddition.energy.IWireNode"
import {$AbstractConnectorBlockEntity$InterfaceEnergyHandler, $AbstractConnectorBlockEntity$InterfaceEnergyHandler$$Type} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity$InterfaceEnergyHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractConnectorBlockEntity, $AbstractConnectorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity"
import {$LocalNode, $LocalNode$$Type} from "com.mrh0.createaddition.energy.LocalNode"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LargeConnectorBlockEntity extends $AbstractConnectorBlockEntity {
static readonly "OFFSET_NORTH": $Vec3
static readonly "OFFSET_DOWN": $Vec3
 "internal": $AbstractConnectorBlockEntity$InterfaceEnergyHandler
static readonly "OFFSET_WEST": $Vec3
static readonly "OFFSET_EAST": $Vec3
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "OFFSET_UP": $Vec3
static readonly "OFFSET_SOUTH": $Vec3

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getMaxWireLength"(): integer
public "getConnectorType"(): $ConnectorType
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getNodeCount"(): integer
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getMaxIn"(): integer
public "getMaxOut"(): integer
public "getNodeOffset"(arg0: integer): $Vec3
public static "connect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
public static "disconnect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
public static "getTypeOfConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
public static "readNodeBlockPos"(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
public static "readNodeWireType"(arg0: $CompoundTag$$Type, arg1: integer): $WireType
public static "readNodeOtherIndex"(arg0: $CompoundTag$$Type, arg1: integer): integer
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
public static "getWireNode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
public static "dropWire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public static "getNbtNode"(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "maxWireLength"(): integer
get "connectorType"(): $ConnectorType
get "nodeCount"(): integer
get "maxIn"(): integer
get "maxOut"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeConnectorBlockEntity$$Type = ($LargeConnectorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeConnectorBlockEntity_ = $LargeConnectorBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.recipe.rolling.RollingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeWrapper, $RecipeWrapper$$Type} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"
import {$ProcessingRecipeParams, $ProcessingRecipeParams$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipeParams"
import {$IRecipeTypeInfo, $IRecipeTypeInfo$$Type} from "com.simibubi.create.foundation.recipe.IRecipeTypeInfo"
import {$StandardProcessingRecipe, $StandardProcessingRecipe$$Type} from "com.simibubi.create.content.processing.recipe.StandardProcessingRecipe"

export class $RollingRecipe extends $StandardProcessingRecipe<($RecipeWrapper)> {
static readonly "TYPE_INFO": $IRecipeTypeInfo

constructor(arg0: $ProcessingRecipeParams$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeWrapper$$Type, arg1: $Level$$Type): boolean
public "getResultStack"(): $ItemStack
public "getIngredient"(): $Ingredient
get "resultStack"(): $ItemStack
get "ingredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollingRecipe$$Type = ($RollingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RollingRecipe_ = $RollingRecipe$$Type;
}}
declare module "com.mrh0.createaddition.recipe.charging.ChargingRecipe" {
import {$ProcessingRecipe, $ProcessingRecipe$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipe"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ChargingRecipeParams, $ChargingRecipeParams$$Type} from "com.mrh0.createaddition.recipe.charging.ChargingRecipeParams"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeWrapper, $RecipeWrapper$$Type} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"
import {$IRecipeTypeInfo, $IRecipeTypeInfo$$Type} from "com.simibubi.create.foundation.recipe.IRecipeTypeInfo"

export class $ChargingRecipe extends $ProcessingRecipe<($RecipeWrapper), ($ChargingRecipeParams)> {
static readonly "TYPE_INFO": $IRecipeTypeInfo
 "maxChargeRate": integer
 "energy": integer

constructor(arg0: $ChargingRecipeParams$$Type)

public "matches"(arg0: $RecipeWrapper$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getMaxChargeRate"(): integer
public "getResultStack"(): $ItemStack
public "getEnergy"(): integer
get "maxChargeRate"(): integer
get "resultStack"(): $ItemStack
get "energy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingRecipe$$Type = ($ChargingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingRecipe_ = $ChargingRecipe$$Type;
}}
declare module "com.mrh0.createaddition.energy.LocalNode" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$NodeRotation, $NodeRotation$$Type} from "com.mrh0.createaddition.energy.NodeRotation"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $LocalNode {
static readonly "OTHER": string
static readonly "NODES": string
static readonly "X": string
static readonly "Y": string
static readonly "Z": string
static readonly "ID": string
static readonly "TYPE": string

constructor(arg0: $BlockEntity$$Type, arg1: integer, arg2: integer, arg3: $WireType$$Type, arg4: $BlockPos$$Type)
constructor(arg0: $BlockEntity$$Type, arg1: $CompoundTag$$Type)

public "write"(arg0: $CompoundTag$$Type): void
public "getType"(): $WireType
public "getIndex"(): integer
public "isInvalid"(): boolean
public "invalid"(): void
public "getPos"(): $BlockPos
public "getRelativePos"(): $Vec3i
public "updateRelative"(arg0: $NodeRotation$$Type): void
public "getOtherIndex"(): integer
get "type"(): $WireType
get "index"(): integer
get "pos"(): $BlockPos
get "relativePos"(): $Vec3i
get "otherIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalNode$$Type = ($LocalNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalNode_ = $LocalNode$$Type;
}}
declare module "com.mrh0.createaddition.network.IObserveBlockEntity" {
import {$ObservePacketPayload, $ObservePacketPayload$$Type} from "com.mrh0.createaddition.network.ObservePacketPayload"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $IObserveBlockEntity {

 "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void

(arg0: $ServerPlayer, arg1: $ObservePacketPayload): void
}

export namespace $IObserveBlockEntity {
const probejs$$marker: never
}
export class $IObserveBlockEntity$$Static implements $IObserveBlockEntity {


 "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IObserveBlockEntity$$Type = ((arg0: $ServerPlayer, arg1: $ObservePacketPayload) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IObserveBlockEntity_ = $IObserveBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.blocks.redstone_relay.RedstoneRelayBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DataGenContext, $DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$VoxelShaper, $VoxelShaper$$Type} from "net.createmod.catnip.math.VoxelShaper"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$RedstoneRelayBlockEntity, $RedstoneRelayBlockEntity$$Type} from "com.mrh0.createaddition.blocks.redstone_relay.RedstoneRelayBlockEntity"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable, $IWrenchable$$Type} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$TransformableBlock, $TransformableBlock$$Type} from "com.simibubi.create.api.contraption.transformable.TransformableBlock"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RedstoneRelayBlock extends $Block implements $IBE<($RedstoneRelayBlockEntity)>, $IWrenchable, $TransformableBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "VERTICAL_SHAPE": $VoxelShaper
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "HORIZONTAL_SHAPE_Z": $VoxelShape
 "descriptionId": string
static readonly "VERTICAL": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "HORIZONTAL_SHAPE_MAIN": $VoxelShape
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "HORIZONTAL_SHAPE_X": $VoxelShape
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "transform"(arg0: $BlockState$$Type, arg1: $StructureTransform$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getBlockEntityClass"(): $Class<($RedstoneRelayBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($RedstoneRelayBlockEntity)>
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($RedstoneRelayBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $RedstoneRelayBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($RedstoneRelayBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($RedstoneRelayBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($RedstoneRelayBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($RedstoneRelayBlockEntity)>): void
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($RedstoneRelayBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($RedstoneRelayBlockEntity)>
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
declare module "com.mrh0.createaddition.item.WireSpool" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $WireSpool extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "setContent"(arg0: $CompoundTag$$Type, arg1: $BlockPos$$Type, arg2: integer): $CompoundTag
public static "getNode"(arg0: $CompoundTag$$Type): integer
public static "hasPos"(arg0: $CompoundTag$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "getPos"(arg0: $CompoundTag$$Type): $BlockPos
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "isRemover"(arg0: $Item$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireSpool$$Type = ($WireSpool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireSpool_ = $WireSpool$$Type;
}}
declare module "com.mrh0.createaddition.blocks.modular_accumulator.ModularAccumulatorBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IObserveBlockEntity, $IObserveBlockEntity$$Type} from "com.mrh0.createaddition.network.IObserveBlockEntity"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$$Type} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$IDebugDrawer, $IDebugDrawer$$Type} from "com.mrh0.createaddition.debug.IDebugDrawer"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$ThresholdSwitchObservable, $ThresholdSwitchObservable$$Type} from "com.simibubi.create.content.redstone.thresholdSwitch.ThresholdSwitchObservable"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$InternalEnergyStorage, $InternalEnergyStorage$$Type} from "com.mrh0.createaddition.energy.InternalEnergyStorage"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LerpedFloat, $LerpedFloat$$Type} from "net.createmod.catnip.animation.LerpedFloat"
import {$ObservePacketPayload, $ObservePacketPayload$$Type} from "com.mrh0.createaddition.network.ObservePacketPayload"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$IMultiTileEnergyContainer, $IMultiTileEnergyContainer$$Type} from "com.mrh0.createaddition.energy.IMultiTileEnergyContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ModularAccumulatorBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IMultiTileEnergyContainer, $IObserveBlockEntity, $IDebugDrawer, $ThresholdSwitchObservable {
 "gauge": $LerpedFloat
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getWidth"(): integer
public "getHeight"(): integer
public "getMinValue"(): integer
public "getMaxValue"(): integer
public "format"(arg0: integer): $MutableComponent
public "initialize"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getSize"(arg0: integer): integer
public "tick"(): void
public "setSize"(arg0: integer, arg1: integer): void
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public "getMaxLength"(arg0: $Direction$Axis$$Type, arg1: integer): integer
public "onChunkUnloaded"(): void
public "getLastKnownPos"(): $BlockPos
public "removeController"(arg0: boolean): void
public static "getCapacityMultiplier"(): integer
public "notifyMultiUpdated"(): void
public "getMainConnectionAxis"(): $Direction$Axis
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "getCurrentValue"(): integer
public "sendDataImmediately"(): void
public "getControllerBE"(): $BlockEntity
public "tickOutput"(): void
public "tickOutputSide"(arg0: $Direction$$Type): void
public "applySize"(arg0: integer): void
public "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void
public "hasAccumulator"(): boolean
public "drawDebug"(): void
public "getFillState"(): float
public "updateCache"(): void
public "getEnergy"(): $InternalEnergyStorage
public "getController"(): $BlockPos
public "observe"(): void
public "sendData"(): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "tickAudio"(): void
public "setController"(arg0: $BlockPos$$Type): void
public "isController"(): boolean
public "getMaxWidth"(): integer
public static "getMaxHeight"(): integer
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getTotalAccumulatorSize"(): integer
public "preventConnectivityUpdate"(): void
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
public "modifyExtraData"(arg0: any): any
public "setExtraData"(arg0: any): void
public "getMainAxisOf"(arg0: $BlockEntity$$Type): $Direction$Axis
public "getExtraData"(): any
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "width"(): integer
get "height"(): integer
get "minValue"(): integer
get "maxValue"(): integer
set "width"(value: integer)
set "height"(value: integer)
get "lastKnownPos"(): $BlockPos
get "mainConnectionAxis"(): $Direction$Axis
get "currentValue"(): integer
get "controllerBE"(): $BlockEntity
get "fillState"(): float
get "energy"(): $InternalEnergyStorage
get "controller"(): $BlockPos
set "controller"(value: $BlockPos$$Type)
get "controller"(): boolean
get "maxWidth"(): integer
get "totalAccumulatorSize"(): integer
set "extraData"(value: any)
get "extraData"(): any
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularAccumulatorBlockEntity$$Type = ($ModularAccumulatorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularAccumulatorBlockEntity_ = $ModularAccumulatorBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.blocks.electric_motor.ElectricMotorBlockEntity" {
import {$GeneratingKineticBlockEntity, $GeneratingKineticBlockEntity$$Type} from "com.simibubi.create.content.kinetics.base.GeneratingKineticBlockEntity"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$List, $List$$Type} from "java.util.List"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ScrollValueBehaviour$StepContext, $ScrollValueBehaviour$StepContext$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour$StepContext"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$$Type} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ElectricMotorBlockEntity extends $GeneratingKineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
 "reActivateSource": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<($ElectricMotorBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "initialize"(): void
public static "step"(arg0: $ScrollValueBehaviour$StepContext$$Type): integer
public "tick"(): void
public static "getDurationAngle"(arg0: float, arg1: float, arg2: float): float
public static "getDurationDistance"(arg0: float, arg1: float, arg2: float): float
public "getGeneratedStress"(): integer
public "getEnergyConsumption"(): integer
public "calculateAddedStressCapacity"(): float
public "lazyTick"(): void
public "setRPM"(arg0: float): boolean
public "getRPM"(): float
public "getGeneratedSpeed"(): float
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "isPoweredState"(): boolean
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "tickAudio"(): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public static "getEnergyConsumptionRate"(arg0: float): integer
public "updateGeneratedRotation"(arg0: integer): void
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "generatedStress"(): integer
get "energyConsumption"(): integer
set "rPM"(value: float)
get "rPM"(): float
get "generatedSpeed"(): float
get "poweredState"(): boolean
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricMotorBlockEntity$$Type = ($ElectricMotorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricMotorBlockEntity_ = $ElectricMotorBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.energy.WireConnectResult" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $WireConnectResult extends $Enum<($WireConnectResult)> {
static readonly "LINKED": $WireConnectResult
static readonly "LINKED_OUT": $WireConnectResult
static readonly "EXISTS": $WireConnectResult
static readonly "CONNECT": $WireConnectResult
static readonly "INVALID": $WireConnectResult
static readonly "REQUIRES_HIGH_CURRENT": $WireConnectResult
static readonly "CONNECT_OUT": $WireConnectResult
static readonly "OBSTRUCTED": $WireConnectResult
static readonly "CONNECT_IN": $WireConnectResult
static readonly "NO_CONNECTION": $WireConnectResult
static readonly "COUNT": $WireConnectResult
static readonly "LINKED_IN": $WireConnectResult
static readonly "LONG": $WireConnectResult
static readonly "REMOVED": $WireConnectResult


public static "values"(): ($WireConnectResult)[]
public static "valueOf"(arg0: string): $WireConnectResult
public "getMessage"(): $Component
public static "getLink"(arg0: boolean, arg1: boolean): $WireConnectResult
public "isLinked"(): boolean
public "isConnect"(): boolean
public static "getConnect"(arg0: boolean, arg1: boolean): $WireConnectResult
get "message"(): $Component
get "linked"(): boolean
get "connect"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireConnectResult$$Type = (("linked") | ("linked_in") | ("linked_out") | ("connect") | ("connect_in") | ("connect_out") | ("long") | ("obstructed") | ("count") | ("removed") | ("exists") | ("no_connection") | ("invalid") | ("requires_high_current"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireConnectResult_ = $WireConnectResult$$Type;
}}
declare module "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ProcessingRecipe$Factory, $ProcessingRecipe$Factory$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipe$Factory"
import {$LiquidBurningRecipe, $LiquidBurningRecipe$$Type} from "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipe"
import {$LiquidBurningRecipeParams, $LiquidBurningRecipeParams$$Type} from "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipeParams"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $LiquidBurningRecipe$Serializer<R extends $LiquidBurningRecipe> implements $RecipeSerializer<(R)> {

constructor(arg0: $ProcessingRecipe$Factory$$Type<($LiquidBurningRecipeParams), (R)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public "codec"(): $MapCodec<(R)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBurningRecipe$Serializer$$Type<R> = ($LiquidBurningRecipe$Serializer<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBurningRecipe$Serializer_<R> = $LiquidBurningRecipe$Serializer$$Type<(R)>;
}}
declare module "com.mrh0.createaddition.blocks.alternator.AlternatorBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IRotate$SpeedLevel, $IRotate$SpeedLevel$$Type} from "com.simibubi.create.content.kinetics.base.IRotate$SpeedLevel"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$DirectionalKineticBlock, $DirectionalKineticBlock$$Type} from "com.simibubi.create.content.kinetics.base.DirectionalKineticBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$VoxelShaper, $VoxelShaper$$Type} from "net.createmod.catnip.math.VoxelShaper"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$AlternatorBlockEntity, $AlternatorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.alternator.AlternatorBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$IRotate, $IRotate$$Type} from "com.simibubi.create.content.kinetics.base.IRotate"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AlternatorBlock extends $DirectionalKineticBlock implements $IBE<($AlternatorBlockEntity)>, $IRotate {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "ALTERNATOR_SHAPE": $VoxelShaper
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($AlternatorBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($AlternatorBlockEntity)>
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $AlternatorBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($AlternatorBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($AlternatorBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($AlternatorBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($AlternatorBlockEntity)>): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "asHolder"(): $Holder<(any)>
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
get "blockEntityClass"(): $Class<($AlternatorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($AlternatorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlternatorBlock$$Type = ($AlternatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlternatorBlock_ = $AlternatorBlock$$Type;
}}
declare module "com.mrh0.createaddition.blocks.connector.SmallLightConnectorBlock" {
import {$AbstractConnectorBlock, $AbstractConnectorBlock$$Type} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DataGenContext, $DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$VoxelShaper, $VoxelShaper$$Type} from "net.createmod.catnip.math.VoxelShaper"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ConnectorMode, $ConnectorMode$$Type} from "com.mrh0.createaddition.blocks.connector.base.ConnectorMode"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ConnectorVariant, $ConnectorVariant$$Type} from "com.mrh0.createaddition.blocks.connector.base.ConnectorVariant"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$SmallLightConnectorBlockEntity, $SmallLightConnectorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.connector.SmallLightConnectorBlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SmallLightConnectorBlock extends $AbstractConnectorBlock<($SmallLightConnectorBlockEntity)> {
static readonly "MODE": $EnumProperty<($ConnectorMode)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "VARIANT": $EnumProperty<($ConnectorVariant)>
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "CONNECTOR_SHAPE": $VoxelShaper
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($SmallLightConnectorBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($SmallLightConnectorBlockEntity)>
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($SmallLightConnectorBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($SmallLightConnectorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($SmallLightConnectorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallLightConnectorBlock$$Type = ($SmallLightConnectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallLightConnectorBlock_ = $SmallLightConnectorBlock$$Type;
}}
declare module "com.mrh0.createaddition.blocks.connector.SmallLightConnectorBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$WireConnectResult, $WireConnectResult$$Type} from "com.mrh0.createaddition.energy.WireConnectResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ConnectorType, $ConnectorType$$Type} from "com.mrh0.createaddition.blocks.connector.ConnectorType"
import {$IWireNode, $IWireNode$$Type} from "com.mrh0.createaddition.energy.IWireNode"
import {$AbstractConnectorBlockEntity$InterfaceEnergyHandler, $AbstractConnectorBlockEntity$InterfaceEnergyHandler$$Type} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity$InterfaceEnergyHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractConnectorBlockEntity, $AbstractConnectorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity"
import {$LocalNode, $LocalNode$$Type} from "com.mrh0.createaddition.energy.LocalNode"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SmallLightConnectorBlockEntity extends $AbstractConnectorBlockEntity {
static readonly "OFFSET_NORTH": $Vec3
static readonly "OFFSET_DOWN": $Vec3
 "internal": $AbstractConnectorBlockEntity$InterfaceEnergyHandler
static readonly "OFFSET_WEST": $Vec3
static readonly "OFFSET_EAST": $Vec3
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "OFFSET_UP": $Vec3
static readonly "OFFSET_SOUTH": $Vec3

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getMaxWireLength"(): integer
public "getConnectorType"(): $ConnectorType
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getNodeCount"(): integer
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getMaxIn"(): integer
public "getMaxOut"(): integer
public "getNodeOffset"(arg0: integer): $Vec3
public static "connect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
public static "disconnect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
public static "getTypeOfConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
public static "readNodeBlockPos"(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
public static "readNodeWireType"(arg0: $CompoundTag$$Type, arg1: integer): $WireType
public static "readNodeOtherIndex"(arg0: $CompoundTag$$Type, arg1: integer): integer
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
public static "getWireNode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
public static "dropWire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public static "getNbtNode"(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "maxWireLength"(): integer
get "connectorType"(): $ConnectorType
get "nodeCount"(): integer
get "maxIn"(): integer
get "maxOut"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallLightConnectorBlockEntity$$Type = ($SmallLightConnectorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallLightConnectorBlockEntity_ = $SmallLightConnectorBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.blocks.creative_energy.CreativeEnergyBlockEntity" {
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CrateBlockEntity, $CrateBlockEntity$$Type} from "com.simibubi.create.content.logistics.crate.CrateBlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreativeEnergyBlockEntity extends $CrateBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tick"(): void
public "firstTick"(): void
public "updateCache"(): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeEnergyBlockEntity$$Type = ($CreativeEnergyBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeEnergyBlockEntity_ = $CreativeEnergyBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.blocks.liquid_blaze_burner.LiquidBlazeBurnerBlockEntity" {
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$LiquidBlazeBurnerBlockEntity$FuelType, $LiquidBlazeBurnerBlockEntity$FuelType$$Type} from "com.mrh0.createaddition.blocks.liquid_blaze_burner.LiquidBlazeBurnerBlockEntity$FuelType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IObserveBlockEntity, $IObserveBlockEntity$$Type} from "com.mrh0.createaddition.network.IObserveBlockEntity"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$$Type} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ObservePacketPayload, $ObservePacketPayload$$Type} from "com.mrh0.createaddition.network.ObservePacketPayload"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlazeBurnerBlock$HeatLevel, $BlazeBurnerBlock$HeatLevel$$Type} from "com.simibubi.create.content.processing.burner.BlazeBurnerBlock$HeatLevel"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$LiquidBurningRecipe, $LiquidBurningRecipe$$Type} from "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipe"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $LiquidBlazeBurnerBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IObserveBlockEntity {
readonly "stockKeeper": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
 "first": boolean
static readonly "MAX_HEAT_CAPACITY": integer

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "find"(arg0: $FluidStack$$Type, arg1: $Level$$Type): $Optional<($RecipeHolder<($LiquidBurningRecipe)>)>
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "tick"(): void
public "isCreative"(): boolean
public "lazyTick"(): void
public static "registerCapability"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "updateBlockState"(): void
public "getHeatLevelFromBlock"(): $BlazeBurnerBlock$HeatLevel
public "spawnParticleBurst"(arg0: boolean): void
public "getHeatLevelForRender"(): $BlazeBurnerBlock$HeatLevel
public "isValidBlockAbove"(): boolean
public "getRemainingBurnTime"(): integer
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "burningTick"(): void
public "getActiveFuel"(): $LiquidBlazeBurnerBlockEntity$FuelType
public "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void
public "isCreativeFuel"(arg0: $ItemStack$$Type): boolean
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "creative"(): boolean
get "heatLevelFromBlock"(): $BlazeBurnerBlock$HeatLevel
get "heatLevelForRender"(): $BlazeBurnerBlock$HeatLevel
get "validBlockAbove"(): boolean
get "remainingBurnTime"(): integer
get "activeFuel"(): $LiquidBlazeBurnerBlockEntity$FuelType
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlazeBurnerBlockEntity$$Type = ($LiquidBlazeBurnerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBlazeBurnerBlockEntity_ = $LiquidBlazeBurnerBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.blocks.cake.CACakeBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DataGenContext, $DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$CakeBlock, $CakeBlock$$Type} from "net.minecraft.world.level.block.CakeBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CACakeBlock extends $CakeBlock {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "FULL_CAKE_SIGNAL": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CakeBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MAX_BITES": integer
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
 "hasCollision": boolean
static readonly "BITES": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "makeBlockState"<T extends $Block>(arg0: $DataGenContext$$Type<($Block$$Type), (T)>, arg1: $RegistrateBlockstateProvider$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CACakeBlock$$Type = ($CACakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CACakeBlock_ = $CACakeBlock$$Type;
}}
declare module "com.mrh0.createaddition.debug.IDebugDrawer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDebugDrawer {

 "drawDebug"(): void

(): void
}

export namespace $IDebugDrawer {
const probejs$$marker: never
}
export class $IDebugDrawer$$Static implements $IDebugDrawer {


 "drawDebug"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDebugDrawer$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDebugDrawer_ = $IDebugDrawer$$Type;
}}
declare module "com.mrh0.createaddition.blocks.liquid_blaze_burner.LiquidBlazeBurnerBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlazeBurnerBlock, $BlazeBurnerBlock$$Type} from "com.simibubi.create.content.processing.burner.BlazeBurnerBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable, $IWrenchable$$Type} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$Random, $Random$$Type} from "java.util.Random"
import {$BlazeBurnerBlock$HeatLevel, $BlazeBurnerBlock$HeatLevel$$Type} from "com.simibubi.create.content.processing.burner.BlazeBurnerBlock$HeatLevel"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$LiquidBlazeBurnerBlockEntity, $LiquidBlazeBurnerBlockEntity$$Type} from "com.mrh0.createaddition.blocks.liquid_blaze_burner.LiquidBlazeBurnerBlockEntity"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LiquidBlazeBurnerBlock extends $HorizontalDirectionalBlock implements $IBE<($LiquidBlazeBurnerBlockEntity)>, $IWrenchable {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlazeBurnerBlock)>
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Random$$Type): void
public "asItem"(): $Item
public "getBlockEntityClass"(): $Class<($LiquidBlazeBurnerBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($LiquidBlazeBurnerBlockEntity)>
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "getLight"(arg0: $BlockState$$Type): integer
public static "getHeatLevelOf"(arg0: $BlockState$$Type): $BlazeBurnerBlock$HeatLevel
public static "tryInsert"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: boolean, arg5: boolean, arg6: boolean): $InteractionResultHolder<($ItemStack)>
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $LiquidBlazeBurnerBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($LiquidBlazeBurnerBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($LiquidBlazeBurnerBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($LiquidBlazeBurnerBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($LiquidBlazeBurnerBlockEntity)>): void
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($LiquidBlazeBurnerBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($LiquidBlazeBurnerBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlazeBurnerBlock$$Type = ($LiquidBlazeBurnerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBlazeBurnerBlock_ = $LiquidBlazeBurnerBlock$$Type;
}}
declare module "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity$InterfaceEnergyHandler" {
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$AbstractConnectorBlockEntity, $AbstractConnectorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity"

export class $AbstractConnectorBlockEntity$InterfaceEnergyHandler implements $IEnergyStorage {

constructor(arg0: $AbstractConnectorBlockEntity$$Type)

public "getEnergyStored"(): integer
public "getMaxEnergyStored"(): integer
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "canExtract"(): boolean
public "canReceive"(): boolean
public "extractEnergy"(arg0: integer, arg1: boolean): integer
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConnectorBlockEntity$InterfaceEnergyHandler$$Type = ($AbstractConnectorBlockEntity$InterfaceEnergyHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractConnectorBlockEntity$InterfaceEnergyHandler_ = $AbstractConnectorBlockEntity$InterfaceEnergyHandler$$Type;
}}
declare module "com.mrh0.createaddition.energy.IEnergyProvider" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"

export interface $IEnergyProvider {

 "getEnergyStorage"(arg0: $Direction$$Type): $IEnergyStorage

(arg0: $Direction): $IEnergyStorage$$Type
}

export namespace $IEnergyProvider {
const probejs$$marker: never
}
export class $IEnergyProvider$$Static implements $IEnergyProvider {


 "getEnergyStorage"(arg0: $Direction$$Type): $IEnergyStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyProvider$$Type = ((arg0: $Direction) => $IEnergyStorage$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyProvider_ = $IEnergyProvider$$Type;
}}
declare module "com.mrh0.createaddition.blocks.portable_energy_interface.PortableEnergyInterfaceBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$WrenchableDirectionalBlock, $WrenchableDirectionalBlock$$Type} from "com.simibubi.create.foundation.block.WrenchableDirectionalBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$PortableEnergyInterfaceBlockEntity, $PortableEnergyInterfaceBlockEntity$$Type} from "com.mrh0.createaddition.blocks.portable_energy_interface.PortableEnergyInterfaceBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PortableEnergyInterfaceBlock extends $WrenchableDirectionalBlock implements $IBE<($PortableEnergyInterfaceBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WrenchableDirectionalBlock)>
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($PortableEnergyInterfaceBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($PortableEnergyInterfaceBlockEntity)>
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $PortableEnergyInterfaceBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($PortableEnergyInterfaceBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($PortableEnergyInterfaceBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($PortableEnergyInterfaceBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($PortableEnergyInterfaceBlockEntity)>): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($PortableEnergyInterfaceBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($PortableEnergyInterfaceBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableEnergyInterfaceBlock$$Type = ($PortableEnergyInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableEnergyInterfaceBlock_ = $PortableEnergyInterfaceBlock$$Type;
}}
declare module "com.mrh0.createaddition.item.BiomassPelletBlock" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BiomassPelletBlock extends $BlockItem {
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

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(any)>): integer
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
export type $BiomassPelletBlock$$Type = ($BiomassPelletBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomassPelletBlock_ = $BiomassPelletBlock$$Type;
}}
declare module "com.mrh0.createaddition.item.BiomassPellet" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $BiomassPellet extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(any)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomassPellet$$Type = ($BiomassPellet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomassPellet_ = $BiomassPellet$$Type;
}}
declare module "com.mrh0.createaddition.recipe.charging.ChargingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ChargingRecipeParams, $ChargingRecipeParams$$Type} from "com.mrh0.createaddition.recipe.charging.ChargingRecipeParams"
import {$ChargingRecipe, $ChargingRecipe$$Type} from "com.mrh0.createaddition.recipe.charging.ChargingRecipe"
import {$ProcessingRecipe$Factory, $ProcessingRecipe$Factory$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipe$Factory"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ChargingRecipe$Serializer<R extends $ChargingRecipe> implements $RecipeSerializer<(R)> {

constructor(arg0: $ProcessingRecipe$Factory$$Type<($ChargingRecipeParams), (R)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public "codec"(): $MapCodec<(R)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingRecipe$Serializer$$Type<R> = ($ChargingRecipe$Serializer<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingRecipe$Serializer_<R> = $ChargingRecipe$Serializer$$Type<(R)>;
}}
declare module "com.mrh0.createaddition.item.DiamondGritSandpaper" {
import {$IClientItemExtensions, $IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SandPaperItem, $SandPaperItem$$Type} from "com.simibubi.create.content.equipment.sandPaper.SandPaperItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $DiamondGritSandpaper extends $SandPaperItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiamondGritSandpaper$$Type = ($DiamondGritSandpaper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiamondGritSandpaper_ = $DiamondGritSandpaper$$Type;
}}
declare module "com.mrh0.createaddition.energy.NodeRotation" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"

export class $NodeRotation extends $Enum<($NodeRotation)> implements $StringRepresentable {
static readonly "Z_CLOCKWISE_90": $NodeRotation
static readonly "ROTATION": $EnumProperty<($NodeRotation)>
static readonly "Y_CLOCKWISE_90": $NodeRotation
static readonly "Z_COUNTERCLOCKWISE_90": $NodeRotation
static readonly "Y_COUNTERCLOCKWISE_90": $NodeRotation
static readonly "X_CLOCKWISE_90": $NodeRotation
static readonly "X_CLOCKWISE_180": $NodeRotation
static readonly "VALUES": ($NodeRotation)[]
static readonly "Y_CLOCKWISE_180": $NodeRotation
static readonly "NONE": $NodeRotation
static readonly "X_COUNTERCLOCKWISE_90": $NodeRotation
static readonly "Z_CLOCKWISE_180": $NodeRotation


public static "get"(arg0: $Direction$Axis$$Type, arg1: $Rotation$$Type): $NodeRotation
public static "values"(): ($NodeRotation)[]
public static "valueOf"(arg0: string): $NodeRotation
public "rotate"(arg0: $Direction$$Type, arg1: boolean): $Direction
public "getRotation"(): $Rotation
public "getAxis"(): $Direction$Axis
public "getSerializedName"(): string
public "updateRelative"(arg0: $Vec3i$$Type): $Vec3i
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "rotation"(): $Rotation
get "axis"(): $Direction$Axis
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeRotation$$Type = (("none") | ("y_clockwise_90") | ("y_clockwise_180") | ("y_counterclockwise_90") | ("x_clockwise_90") | ("x_clockwise_180") | ("x_counterclockwise_90") | ("z_clockwise_90") | ("z_clockwise_180") | ("z_counterclockwise_90"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodeRotation_ = $NodeRotation$$Type;
}}
declare module "com.mrh0.createaddition.blocks.alternator.AlternatorBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$KineticBlockEntity, $KineticBlockEntity$$Type} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IEnergyProvider, $IEnergyProvider$$Type} from "com.mrh0.createaddition.energy.IEnergyProvider"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$$Type} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AlternatorBlockEntity extends $KineticBlockEntity implements $IEnergyProvider {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tick"(): void
public "firstTick"(): void
public "getEnergyStorage"(arg0: $Direction$$Type): $IEnergyStorage
public "calculateStressApplied"(): float
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "isEnergyOutput"(arg0: $Direction$$Type): boolean
public "isEnergyInput"(arg0: $Direction$$Type): boolean
public "updateCache"(): void
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickAudio"(): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public static "getEnergyProductionRate"(arg0: integer): integer
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlternatorBlockEntity$$Type = ($AlternatorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlternatorBlockEntity_ = $AlternatorBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.blocks.portable_energy_interface.PortableEnergyInterfaceBlockEntity" {
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Contraption, $Contraption$$Type} from "com.simibubi.create.content.contraptions.Contraption"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$PortableStorageInterfaceBlockEntity, $PortableStorageInterfaceBlockEntity$$Type} from "com.simibubi.create.content.contraptions.actors.psi.PortableStorageInterfaceBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PortableEnergyInterfaceBlockEntity extends $PortableStorageInterfaceBlockEntity {
 "keepAlive": integer
static readonly "ANIMATION": integer
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isConnected"(): boolean
public "getCapacity"(): integer
public "startTransferringTo"(arg0: $Contraption$$Type, arg1: float): void
public "getEnergy"(): integer
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "connected"(): boolean
get "capacity"(): integer
get "energy"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableEnergyInterfaceBlockEntity$$Type = ($PortableEnergyInterfaceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableEnergyInterfaceBlockEntity_ = $PortableEnergyInterfaceBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.energy.IMultiTileEnergyContainer" {
import {$IMultiBlockEntityContainer, $IMultiBlockEntityContainer$$Type} from "com.simibubi.create.foundation.blockEntity.IMultiBlockEntityContainer"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IMultiTileEnergyContainer extends $IMultiBlockEntityContainer {

 "getWidth"(): integer
 "getHeight"(): integer
 "setWidth"(arg0: integer): void
 "setHeight"(arg0: integer): void
 "getMaxLength"(arg0: $Direction$Axis$$Type, arg1: integer): integer
 "getLastKnownPos"(): $BlockPos
 "removeController"(arg0: boolean): void
 "notifyMultiUpdated"(): void
 "modifyExtraData"(arg0: any): any
 "getMainConnectionAxis"(): $Direction$Axis
 "getControllerBE"<T extends ($BlockEntity) & ($IMultiBlockEntityContainer)>(): T
 "setExtraData"(arg0: any): void
 "getMainAxisOf"(arg0: $BlockEntity$$Type): $Direction$Axis
 "getExtraData"(): any
 "getController"(): $BlockPos
 "setController"(arg0: $BlockPos$$Type): void
 "isController"(): boolean
 "getMaxWidth"(): integer
 "preventConnectivityUpdate"(): void
get "width"(): integer
get "height"(): integer
set "width"(value: integer)
set "height"(value: integer)
get "lastKnownPos"(): $BlockPos
get "mainConnectionAxis"(): $Direction$Axis
get "controllerBE"(): T
set "extraData"(value: any)
get "extraData"(): any
get "controller"(): $BlockPos
set "controller"(value: $BlockPos$$Type)
get "controller"(): boolean
get "maxWidth"(): integer
}

export namespace $IMultiTileEnergyContainer {
const probejs$$marker: never
}
export class $IMultiTileEnergyContainer$$Static implements $IMultiTileEnergyContainer {


 "getWidth"(): integer
 "getHeight"(): integer
 "setWidth"(arg0: integer): void
 "setHeight"(arg0: integer): void
 "getMaxLength"(arg0: $Direction$Axis$$Type, arg1: integer): integer
 "getLastKnownPos"(): $BlockPos
 "removeController"(arg0: boolean): void
 "notifyMultiUpdated"(): void
 "modifyExtraData"(arg0: any): any
 "getMainConnectionAxis"(): $Direction$Axis
 "getControllerBE"<T extends ($BlockEntity) & ($IMultiBlockEntityContainer)>(): T
 "setExtraData"(arg0: any): void
 "getMainAxisOf"(arg0: $BlockEntity$$Type): $Direction$Axis
 "getExtraData"(): any
 "getController"(): $BlockPos
 "setController"(arg0: $BlockPos$$Type): void
 "isController"(): boolean
 "getMaxWidth"(): integer
 "preventConnectivityUpdate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiTileEnergyContainer$$Type = ($IMultiTileEnergyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiTileEnergyContainer_ = $IMultiTileEnergyContainer$$Type;
}}
declare module "com.mrh0.createaddition.item.ElectrumAmulet" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ElectrumAmulet extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectrumAmulet$$Type = ($ElectrumAmulet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectrumAmulet_ = $ElectrumAmulet$$Type;
}}
declare module "com.mrh0.createaddition.blocks.rolling_mill.RollingMillBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RollingMillBlockEntity, $RollingMillBlockEntity$$Type} from "com.mrh0.createaddition.blocks.rolling_mill.RollingMillBlockEntity"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$HorizontalKineticBlock, $HorizontalKineticBlock$$Type} from "com.simibubi.create.content.kinetics.base.HorizontalKineticBlock"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $RollingMillBlock extends $HorizontalKineticBlock implements $IBE<($RollingMillBlockEntity)> {
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
static readonly "ROLLING_MILL_SHAPE": $VoxelShape
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean
static readonly "HORIZONTAL_FACING": $Property<($Direction)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateEntityAfterFallOn"(arg0: $BlockGetter$$Type, arg1: $Entity$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getBlockEntityClass"(): $Class<($RollingMillBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($RollingMillBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $RollingMillBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($RollingMillBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($RollingMillBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($RollingMillBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($RollingMillBlockEntity)>): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
get "blockEntityClass"(): $Class<($RollingMillBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($RollingMillBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollingMillBlock$$Type = ($RollingMillBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RollingMillBlock_ = $RollingMillBlock$$Type;
}}
declare module "com.mrh0.createaddition.index.CAArmInteractions$LiquidBlazeBurnerType" {
import {$ArmInteractionPointType, $ArmInteractionPointType$$Type} from "com.simibubi.create.content.kinetics.mechanicalArm.ArmInteractionPointType"
import {$ArmInteractionPoint, $ArmInteractionPoint$$Type} from "com.simibubi.create.content.kinetics.mechanicalArm.ArmInteractionPoint"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CAArmInteractions$LiquidBlazeBurnerType extends $ArmInteractionPointType {
static readonly "SORTED_TYPES_VIEW": $List<($ArmInteractionPointType)>

constructor()

public "canCreatePoint"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "createPoint"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ArmInteractionPoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CAArmInteractions$LiquidBlazeBurnerType$$Type = ($CAArmInteractions$LiquidBlazeBurnerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CAArmInteractions$LiquidBlazeBurnerType_ = $CAArmInteractions$LiquidBlazeBurnerType$$Type;
}}
declare module "com.mrh0.createaddition.blocks.modular_accumulator.ModularAccumulatorBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DataGenContext, $DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ModularAccumulatorBlockEntity, $ModularAccumulatorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.modular_accumulator.ModularAccumulatorBlockEntity"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IWrenchable, $IWrenchable$$Type} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ModularAccumulatorBlock extends $Block implements $IWrenchable, $IBE<($ModularAccumulatorBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SILENCED_METAL": $SoundType
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
 "hasCollision": boolean


public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "regular"(arg0: $BlockBehaviour$Properties$$Type): $ModularAccumulatorBlock
public "getBlockEntityClass"(): $Class<($ModularAccumulatorBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($ModularAccumulatorBlockEntity)>
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "isAccumulator"(arg0: $BlockState$$Type): boolean
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($ModularAccumulatorBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ModularAccumulatorBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($ModularAccumulatorBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ModularAccumulatorBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ModularAccumulatorBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($ModularAccumulatorBlockEntity)>): void
public "asHolder"(): $Holder<(any)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($ModularAccumulatorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($ModularAccumulatorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularAccumulatorBlock$$Type = ($ModularAccumulatorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularAccumulatorBlock_ = $ModularAccumulatorBlock$$Type;
}}
declare module "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipe" {
import {$ProcessingRecipe, $ProcessingRecipe$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipe"
import {$FluidRecipeWrapper, $FluidRecipeWrapper$$Type} from "com.mrh0.createaddition.recipe.FluidRecipeWrapper"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$FluidIngredient, $FluidIngredient$$Type} from "com.simibubi.create.foundation.fluid.FluidIngredient"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LiquidBurningRecipeParams, $LiquidBurningRecipeParams$$Type} from "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipeParams"
import {$IRecipeTypeInfo, $IRecipeTypeInfo$$Type} from "com.simibubi.create.foundation.recipe.IRecipeTypeInfo"

export class $LiquidBurningRecipe extends $ProcessingRecipe<($FluidRecipeWrapper), ($LiquidBurningRecipeParams)> {
static readonly "TYPE_INFO": $IRecipeTypeInfo

constructor(arg0: $LiquidBurningRecipeParams$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $FluidRecipeWrapper$$Type, arg1: $Level$$Type): boolean
public "getBurnTime"(): integer
public "getFluidInput"(): $FluidIngredient
public "isSuperheated"(): boolean
get "burnTime"(): integer
get "fluidInput"(): $FluidIngredient
get "superheated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBurningRecipe$$Type = ($LiquidBurningRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBurningRecipe_ = $LiquidBurningRecipe$$Type;
}}
declare module "com.mrh0.createaddition.blocks.redstone_relay.RedstoneRelayBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IObserveBlockEntity, $IObserveBlockEntity$$Type} from "com.mrh0.createaddition.network.IObserveBlockEntity"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$EnergyNetwork, $EnergyNetwork$$Type} from "com.mrh0.createaddition.energy.network.EnergyNetwork"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$$Type} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ObservePacketPayload, $ObservePacketPayload$$Type} from "com.mrh0.createaddition.network.ObservePacketPayload"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$WireConnectResult, $WireConnectResult$$Type} from "com.mrh0.createaddition.energy.WireConnectResult"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ConnectorType, $ConnectorType$$Type} from "com.mrh0.createaddition.blocks.connector.ConnectorType"
import {$IWireNode, $IWireNode$$Type} from "com.mrh0.createaddition.energy.IWireNode"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LocalNode, $LocalNode$$Type} from "com.mrh0.createaddition.energy.LocalNode"

export class $RedstoneRelayBlockEntity extends $SmartBlockEntity implements $IWireNode, $IHaveGoggleInformation, $IObserveBlockEntity {
static "OUT_VERTICAL_OFFSET_SOUTH": $Vec3
static "OUT_VERTICAL_OFFSET_NORTH": $Vec3
static "OFFSET_EAST": $Vec3
static readonly "ATTACHMENTS_NBT_KEY": string
static "IN_VERTICAL_OFFSET_SOUTH": $Vec3
static "OUT_VERTICAL_OFFSET_WEST": $Vec3
static "OFFSET_SOUTH": $Vec3
static "OFFSET_NORTH": $Vec3
static "OUT_VERTICAL_OFFSET_EAST": $Vec3
static "OFFSET_WEST": $Vec3
static "IN_VERTICAL_OFFSET_WEST": $Vec3
static "IN_VERTICAL_OFFSET_EAST": $Vec3
static readonly "NODE_COUNT": integer
static "IN_VERTICAL_OFFSET_NORTH": $Vec3

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "remove"(): void
public "removeNode"(arg0: integer, arg1: boolean): void
public "tick"(): void
public "setNode"(arg0: integer, arg1: integer, arg2: $BlockPos$$Type, arg3: $WireType$$Type): void
public "getNetwork"(arg0: integer): $EnergyNetwork
public "getPos"(): $BlockPos
public "getAvailableNode"(arg0: $Vec3$$Type): integer
public "invalidateNodeCache"(): void
public "invalidateLocalNodes"(): void
public "getMaxWireLength"(): integer
public "getConnectorType"(): $ConnectorType
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "getLocalNode"(arg0: integer): $LocalNode
public "getWireNode"(arg0: integer): $IWireNode
public "getThroughput"(): integer
public "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void
public "getDemand"(): integer
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "setNetwork"(arg0: integer, arg1: $EnergyNetwork$$Type): void
public "getNodeCount"(): integer
public "getNodeOffset"(arg0: integer): $Vec3
public "isNodeInput"(arg0: integer): boolean
public "isNodeOutput"(arg0: integer): boolean
public "isNodeIndeciesConnected"(arg0: integer, arg1: integer): boolean
public "getNodeType"(arg0: integer): $WireType
public static "connect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
public "removeNode"(arg0: $LocalNode$$Type, arg1: boolean): void
public "removeNode"(arg0: integer): void
public "removeNode"(arg0: $LocalNode$$Type): void
public static "disconnect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
public static "getTypeOfConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
public "getAvailableNode"(): integer
public "hasConnectionTo"(arg0: $BlockPos$$Type): boolean
public "disconnectWires"(): void
public "getConnectionTo"(arg0: $BlockPos$$Type): $LocalNode
public "getOtherNodeIndex"(arg0: integer): integer
public static "readNodeBlockPos"(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
public static "readNodeWireType"(arg0: $CompoundTag$$Type, arg1: integer): $WireType
public static "readNodeOtherIndex"(arg0: $CompoundTag$$Type, arg1: integer): integer
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
public "validateLocalNodes"(arg0: ($LocalNode$$Type)[]): boolean
public "handleWireCache"(arg0: $Level$$Type, arg1: $Set$$Type<($LocalNode$$Type)>): void
public "hasAnyConnection"(): boolean
public "convertOldNbt"(arg0: $CompoundTag$$Type): void
public "awakeNetwork"(arg0: $Level$$Type): boolean
public static "getWireNode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
public "isNetworkValid"(arg0: integer): boolean
public static "dropWire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "dropWire"(arg0: $Level$$Type, arg1: $LocalNode$$Type): void
public static "getNbtNode"(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
public "hasConnection"(arg0: integer): boolean
public "getNodePos"(arg0: integer): $BlockPos
public "dropWires"(arg0: $Level$$Type, arg1: boolean): void
public "dropWires"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: boolean): void
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "pos"(): $BlockPos
get "maxWireLength"(): integer
get "connectorType"(): $ConnectorType
get "throughput"(): integer
get "demand"(): integer
get "nodeCount"(): integer
get "availableNode"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneRelayBlockEntity$$Type = ($RedstoneRelayBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneRelayBlockEntity_ = $RedstoneRelayBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.blocks.digital_adapter.DigitalAdapterBlockEntity" {
import {$SpeedControllerBlockEntity, $SpeedControllerBlockEntity$$Type} from "com.simibubi.create.content.kinetics.speedController.SpeedControllerBlockEntity"
import {$List, $List$$Type} from "java.util.List"
import {$HosePulleyBlockEntity, $HosePulleyBlockEntity$$Type} from "com.simibubi.create.content.fluids.hosePulley.HosePulleyBlockEntity"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$MechanicalBearingBlockEntity, $MechanicalBearingBlockEntity$$Type} from "com.simibubi.create.content.contraptions.bearing.MechanicalBearingBlockEntity"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$MechanicalPistonBlockEntity, $MechanicalPistonBlockEntity$$Type} from "com.simibubi.create.content.contraptions.piston.MechanicalPistonBlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$StressGaugeBlockEntity, $StressGaugeBlockEntity$$Type} from "com.simibubi.create.content.kinetics.gauge.StressGaugeBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$PulleyBlockEntity, $PulleyBlockEntity$$Type} from "com.simibubi.create.content.contraptions.pulley.PulleyBlockEntity"
import {$ElevatorPulleyBlockEntity, $ElevatorPulleyBlockEntity$$Type} from "com.simibubi.create.content.contraptions.elevator.ElevatorPulleyBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpeedGaugeBlockEntity, $SpeedGaugeBlockEntity$$Type} from "com.simibubi.create.content.kinetics.gauge.SpeedGaugeBlockEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DigitalAdapterBlockEntity extends $BlockEntity {
readonly "textLines": $List<($MutableComponent)>
static readonly "MAX_LINES": integer
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "EMPTY_LINE": $MutableComponent

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "append"(arg0: integer, arg1: $MutableComponent$$Type): void
public "getSpeedController"(arg0: $Direction$$Type): $SpeedControllerBlockEntity
public "getElevatorPulley"(arg0: $Direction$$Type): $ElevatorPulleyBlockEntity
public "getMechanicalPiston"(arg0: $Direction$$Type): $MechanicalPistonBlockEntity
public "getMechanicalBearing"(arg0: $Direction$$Type): $MechanicalBearingBlockEntity
public "setLine"(arg0: integer): integer
public "getLine"(): integer
public "clearAll"(): void
public "getTargetSpeed"(arg0: $Direction$$Type): integer
public "setTextLine"(arg0: integer, arg1: $MutableComponent$$Type): void
public "clearLine"(arg0: integer): void
public "getTextLine"(arg0: integer): $MutableComponent
public "incrementLine"(): void
public "getRopePulley"(arg0: $Direction$$Type): $PulleyBlockEntity
public "getHosePulley"(arg0: $Direction$$Type): $HosePulleyBlockEntity
public "getStressGauge"(arg0: $Direction$$Type): $StressGaugeBlockEntity
public "getSpeedGauge"(arg0: $Direction$$Type): $SpeedGaugeBlockEntity
public "setTargetSpeed"(arg0: $Direction$$Type, arg1: integer): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
set "line"(value: integer)
get "line"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigitalAdapterBlockEntity$$Type = ($DigitalAdapterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DigitalAdapterBlockEntity_ = $DigitalAdapterBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.blocks.connector.base.ConnectorVariant" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ConnectorVariant extends $Enum<($ConnectorVariant)> implements $StringRepresentable {
static readonly "Girder": $ConnectorVariant
static readonly "Default": $ConnectorVariant


public static "values"(): ($ConnectorVariant)[]
public static "test"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ConnectorVariant
public static "valueOf"(arg0: string): $ConnectorVariant
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
export type $ConnectorVariant$$Type = (("default") | ("girder"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectorVariant_ = $ConnectorVariant$$Type;
}}
declare module "com.mrh0.createaddition.blocks.connector.SmallConnectorBlock" {
import {$AbstractConnectorBlock, $AbstractConnectorBlock$$Type} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DataGenContext, $DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$VoxelShaper, $VoxelShaper$$Type} from "net.createmod.catnip.math.VoxelShaper"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SmallConnectorBlockEntity, $SmallConnectorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.connector.SmallConnectorBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ConnectorMode, $ConnectorMode$$Type} from "com.mrh0.createaddition.blocks.connector.base.ConnectorMode"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ConnectorVariant, $ConnectorVariant$$Type} from "com.mrh0.createaddition.blocks.connector.base.ConnectorVariant"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SmallConnectorBlock extends $AbstractConnectorBlock<($SmallConnectorBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MODE": $EnumProperty<($ConnectorMode)>
static readonly "CONNECTOR_SHAPE": $VoxelShaper
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "VARIANT": $EnumProperty<($ConnectorVariant)>
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($SmallConnectorBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($SmallConnectorBlockEntity)>
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($SmallConnectorBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($SmallConnectorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($SmallConnectorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallConnectorBlock$$Type = ($SmallConnectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallConnectorBlock_ = $SmallConnectorBlock$$Type;
}}
declare module "com.mrh0.createaddition.blocks.modular_accumulator.ModularAccumulatorDisplaySource" {
import {$ModularGuiLineBuilder, $ModularGuiLineBuilder$$Type} from "com.simibubi.create.foundation.gui.ModularGuiLineBuilder"
import {$DisplaySource, $DisplaySource$$Type} from "com.simibubi.create.api.behaviour.display.DisplaySource"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DisplayLinkContext, $DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$PercentOrProgressBarDisplaySource, $PercentOrProgressBarDisplaySource$$Type} from "com.simibubi.create.content.redstone.displayLink.source.PercentOrProgressBarDisplaySource"
import {$SimpleRegistry$Multi, $SimpleRegistry$Multi$$Type} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"

export class $ModularAccumulatorDisplaySource extends $PercentOrProgressBarDisplaySource {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(any)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

public "initConfigurationWidgets"(arg0: $DisplayLinkContext$$Type, arg1: $ModularGuiLineBuilder$$Type, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularAccumulatorDisplaySource$$Type = ($ModularAccumulatorDisplaySource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularAccumulatorDisplaySource_ = $ModularAccumulatorDisplaySource$$Type;
}}
declare module "com.mrh0.createaddition.energy.IWireNode" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$WireConnectResult, $WireConnectResult$$Type} from "com.mrh0.createaddition.energy.WireConnectResult"
import {$EnergyNetwork, $EnergyNetwork$$Type} from "com.mrh0.createaddition.energy.network.EnergyNetwork"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConnectorType, $ConnectorType$$Type} from "com.mrh0.createaddition.blocks.connector.ConnectorType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LocalNode, $LocalNode$$Type} from "com.mrh0.createaddition.energy.LocalNode"

export interface $IWireNode {

 "getNodeType"(arg0: integer): $WireType
 "removeNode"(arg0: $LocalNode$$Type, arg1: boolean): void
 "removeNode"(arg0: integer): void
 "removeNode"(arg0: $LocalNode$$Type): void
 "removeNode"(arg0: integer, arg1: boolean): void
 "setNode"(arg0: integer, arg1: integer, arg2: $BlockPos$$Type, arg3: $WireType$$Type): void
 "getNetwork"(arg0: integer): $EnergyNetwork
 "getPos"(): $BlockPos
 "getAvailableNode"(): integer
 "getAvailableNode"(arg0: $Vec3$$Type): integer
 "hasConnectionTo"(arg0: $BlockPos$$Type): boolean
 "disconnectWires"(): void
 "getConnectionTo"(arg0: $BlockPos$$Type): $LocalNode
 "getOtherNodeIndex"(arg0: integer): integer
 "invalidateNodeCache"(): void
 "validateLocalNodes"(arg0: ($LocalNode$$Type)[]): boolean
 "handleWireCache"(arg0: $Level$$Type, arg1: $Set$$Type<($LocalNode$$Type)>): void
 "hasAnyConnection"(): boolean
 "getMaxWireLength"(): integer
 "getConnectorType"(): $ConnectorType
 "convertOldNbt"(arg0: $CompoundTag$$Type): void
 "awakeNetwork"(arg0: $Level$$Type): boolean
 "getLocalNode"(arg0: integer): $LocalNode
 "getWireNode"(arg0: integer): $IWireNode
 "isNetworkValid"(arg0: integer): boolean
 "dropWire"(arg0: $Level$$Type, arg1: $LocalNode$$Type): void
 "hasConnection"(arg0: integer): boolean
 "setNetwork"(arg0: integer, arg1: $EnergyNetwork$$Type): void
 "getNodeCount"(): integer
 "getNodePos"(arg0: integer): $BlockPos
 "getNodeOffset"(arg0: integer): $Vec3
 "isNodeInput"(arg0: integer): boolean
 "isNodeOutput"(arg0: integer): boolean
 "dropWires"(arg0: $Level$$Type, arg1: boolean): void
 "dropWires"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: boolean): void
 "isNodeIndeciesConnected"(arg0: integer, arg1: integer): boolean
get "pos"(): $BlockPos
get "availableNode"(): integer
get "maxWireLength"(): integer
get "connectorType"(): $ConnectorType
get "nodeCount"(): integer
}

export namespace $IWireNode {
function connect(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
function disconnect(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
function getTypeOfConnection(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
function readNodeBlockPos(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
function readNodeWireType(arg0: $CompoundTag$$Type, arg1: integer): $WireType
function readNodeOtherIndex(arg0: $CompoundTag$$Type, arg1: integer): integer
function getWireNodeFrom(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
function getWireNode(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
function dropWire(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
function getNbtNode(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
const probejs$$marker: never
}
export class $IWireNode$$Static implements $IWireNode {


 "getNodeType"(arg0: integer): $WireType
static "connect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
 "removeNode"(arg0: $LocalNode$$Type, arg1: boolean): void
 "removeNode"(arg0: integer): void
 "removeNode"(arg0: $LocalNode$$Type): void
 "removeNode"(arg0: integer, arg1: boolean): void
 "setNode"(arg0: integer, arg1: integer, arg2: $BlockPos$$Type, arg3: $WireType$$Type): void
 "getNetwork"(arg0: integer): $EnergyNetwork
static "disconnect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
 "getPos"(): $BlockPos
static "getTypeOfConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
 "getAvailableNode"(): integer
 "getAvailableNode"(arg0: $Vec3$$Type): integer
 "hasConnectionTo"(arg0: $BlockPos$$Type): boolean
 "disconnectWires"(): void
 "getConnectionTo"(arg0: $BlockPos$$Type): $LocalNode
 "getOtherNodeIndex"(arg0: integer): integer
static "readNodeBlockPos"(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
static "readNodeWireType"(arg0: $CompoundTag$$Type, arg1: integer): $WireType
static "readNodeOtherIndex"(arg0: $CompoundTag$$Type, arg1: integer): integer
static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
 "invalidateNodeCache"(): void
 "validateLocalNodes"(arg0: ($LocalNode$$Type)[]): boolean
 "handleWireCache"(arg0: $Level$$Type, arg1: $Set$$Type<($LocalNode$$Type)>): void
 "hasAnyConnection"(): boolean
 "getMaxWireLength"(): integer
 "getConnectorType"(): $ConnectorType
 "convertOldNbt"(arg0: $CompoundTag$$Type): void
 "awakeNetwork"(arg0: $Level$$Type): boolean
 "getLocalNode"(arg0: integer): $LocalNode
static "getWireNode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
 "getWireNode"(arg0: integer): $IWireNode
 "isNetworkValid"(arg0: integer): boolean
static "dropWire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
 "dropWire"(arg0: $Level$$Type, arg1: $LocalNode$$Type): void
static "getNbtNode"(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
 "hasConnection"(arg0: integer): boolean
 "setNetwork"(arg0: integer, arg1: $EnergyNetwork$$Type): void
 "getNodeCount"(): integer
 "getNodePos"(arg0: integer): $BlockPos
 "getNodeOffset"(arg0: integer): $Vec3
 "isNodeInput"(arg0: integer): boolean
 "isNodeOutput"(arg0: integer): boolean
 "dropWires"(arg0: $Level$$Type, arg1: boolean): void
 "dropWires"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: boolean): void
 "isNodeIndeciesConnected"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWireNode$$Type = ($IWireNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWireNode_ = $IWireNode$$Type;
}}
declare module "com.mrh0.createaddition.blocks.modular_accumulator.ModularAccumulatorBlockItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ModularAccumulatorBlockItem extends $BlockItem {
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

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

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
export type $ModularAccumulatorBlockItem$$Type = ($ModularAccumulatorBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularAccumulatorBlockItem_ = $ModularAccumulatorBlockItem$$Type;
}}
declare module "com.mrh0.createaddition.blocks.connector.LargeConnectorBlock" {
import {$AbstractConnectorBlock, $AbstractConnectorBlock$$Type} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DataGenContext, $DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$VoxelShaper, $VoxelShaper$$Type} from "net.createmod.catnip.math.VoxelShaper"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LargeConnectorBlockEntity, $LargeConnectorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.connector.LargeConnectorBlockEntity"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ConnectorMode, $ConnectorMode$$Type} from "com.mrh0.createaddition.blocks.connector.base.ConnectorMode"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ConnectorVariant, $ConnectorVariant$$Type} from "com.mrh0.createaddition.blocks.connector.base.ConnectorVariant"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LargeConnectorBlock extends $AbstractConnectorBlock<($LargeConnectorBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MODE": $EnumProperty<($ConnectorMode)>
static readonly "CONNECTOR_SHAPE": $VoxelShaper
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "VARIANT": $EnumProperty<($ConnectorVariant)>
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($LargeConnectorBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($LargeConnectorBlockEntity)>
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($LargeConnectorBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($LargeConnectorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($LargeConnectorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeConnectorBlock$$Type = ($LargeConnectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeConnectorBlock_ = $LargeConnectorBlock$$Type;
}}
declare module "com.mrh0.createaddition.blocks.creative_energy.CreativeEnergyBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$CrateBlock, $CrateBlock$$Type} from "com.simibubi.create.content.logistics.crate.CrateBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CreativeEnergyBlockEntity, $CreativeEnergyBlockEntity$$Type} from "com.mrh0.createaddition.blocks.creative_energy.CreativeEnergyBlockEntity"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CreativeEnergyBlock extends $CrateBlock implements $IBE<($CreativeEnergyBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CrateBlock)>
static readonly "CREATIVE_ENERGY_SHAPE": $VoxelShape
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($CreativeEnergyBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CreativeEnergyBlockEntity)>
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CreativeEnergyBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CreativeEnergyBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CreativeEnergyBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CreativeEnergyBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CreativeEnergyBlockEntity)>): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($CreativeEnergyBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CreativeEnergyBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeEnergyBlock$$Type = ($CreativeEnergyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeEnergyBlock_ = $CreativeEnergyBlock$$Type;
}}
declare module "com.mrh0.createaddition.energy.WireType" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $WireType extends $Enum<($WireType)> {
static readonly "GOLD": $WireType
static readonly "FESTIVE": $WireType
static readonly "COPPER": $WireType
static readonly "ELECTRUM": $WireType


public static "values"(): ($WireType)[]
public static "valueOf"(arg0: string): $WireType
public static "of"(arg0: $Item$$Type): $WireType
public static "fromIndex"(arg0: integer): $WireType
public "transfer"(): integer
public "getIndex"(): integer
public "getGreen"(): integer
public "getBlue"(): integer
public "getRed"(): integer
public "getDrop"(): $ItemStack
public "getSourceDrop"(): $ItemStack
public "isFestive"(): boolean
get "index"(): integer
get "green"(): integer
get "blue"(): integer
get "red"(): integer
get "drop"(): $ItemStack
get "sourceDrop"(): $ItemStack
get "festive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireType$$Type = (("copper") | ("gold") | ("electrum") | ("festive"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WireType_ = $WireType$$Type;
}}
declare module "com.mrh0.createaddition.effect.ShockingEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ShockingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShockingEffect$$Type = ($ShockingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShockingEffect_ = $ShockingEffect$$Type;
}}
declare module "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IObserveBlockEntity, $IObserveBlockEntity$$Type} from "com.mrh0.createaddition.network.IObserveBlockEntity"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$EnergyNetwork, $EnergyNetwork$$Type} from "com.mrh0.createaddition.energy.network.EnergyNetwork"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$$Type} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$IDebugDrawer, $IDebugDrawer$$Type} from "com.mrh0.createaddition.debug.IDebugDrawer"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AbstractConnectorBlockEntity$InterfaceEnergyHandler, $AbstractConnectorBlockEntity$InterfaceEnergyHandler$$Type} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity$InterfaceEnergyHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ConnectorMode, $ConnectorMode$$Type} from "com.mrh0.createaddition.blocks.connector.base.ConnectorMode"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ObservePacketPayload, $ObservePacketPayload$$Type} from "com.mrh0.createaddition.network.ObservePacketPayload"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IEnergyProvider, $IEnergyProvider$$Type} from "com.mrh0.createaddition.energy.IEnergyProvider"
import {$WireConnectResult, $WireConnectResult$$Type} from "com.mrh0.createaddition.energy.WireConnectResult"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ConnectorType, $ConnectorType$$Type} from "com.mrh0.createaddition.blocks.connector.ConnectorType"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$IWireNode, $IWireNode$$Type} from "com.mrh0.createaddition.energy.IWireNode"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LocalNode, $LocalNode$$Type} from "com.mrh0.createaddition.energy.LocalNode"

export class $AbstractConnectorBlockEntity extends $SmartBlockEntity implements $IWireNode, $IObserveBlockEntity, $IHaveGoggleInformation, $IDebugDrawer, $IEnergyProvider {
 "internal": $AbstractConnectorBlockEntity$InterfaceEnergyHandler
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getMode"(): $ConnectorMode
public "getCapacity"(): integer
public "remove"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "removeNode"(arg0: integer, arg1: boolean): void
public "tick"(): void
public "setNode"(arg0: integer, arg1: integer, arg2: $BlockPos$$Type, arg3: $WireType$$Type): void
public "getNetwork"(arg0: integer): $EnergyNetwork
public "firstTick"(): void
public "getPos"(): $BlockPos
public "getEnergyStorage"(arg0: $Direction$$Type): $IEnergyStorage
public "invalidateNodeCache"(): void
public "invalidateLocalNodes"(): void
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "getLocalNode"(arg0: integer): $LocalNode
public "getWireNode"(arg0: integer): $IWireNode
public "ignoreCapSide"(): boolean
public "isEnergyOutput"(arg0: $Direction$$Type): boolean
public "isEnergyInput"(arg0: $Direction$$Type): boolean
public "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void
public "drawDebug"(): void
public "setNetwork"(arg0: integer, arg1: $EnergyNetwork$$Type): void
public "getMaxIn"(): integer
public "getMaxOut"(): integer
public "updateExternalEnergyStorage"(): void
public "getNodeType"(arg0: integer): $WireType
public static "connect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
public "removeNode"(arg0: $LocalNode$$Type, arg1: boolean): void
public "removeNode"(arg0: integer): void
public "removeNode"(arg0: $LocalNode$$Type): void
public static "disconnect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
public static "getTypeOfConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
public "getAvailableNode"(): integer
public "getAvailableNode"(arg0: $Vec3$$Type): integer
public "hasConnectionTo"(arg0: $BlockPos$$Type): boolean
public "disconnectWires"(): void
public "getConnectionTo"(arg0: $BlockPos$$Type): $LocalNode
public "getOtherNodeIndex"(arg0: integer): integer
public static "readNodeBlockPos"(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
public static "readNodeWireType"(arg0: $CompoundTag$$Type, arg1: integer): $WireType
public static "readNodeOtherIndex"(arg0: $CompoundTag$$Type, arg1: integer): integer
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
public "validateLocalNodes"(arg0: ($LocalNode$$Type)[]): boolean
public "handleWireCache"(arg0: $Level$$Type, arg1: $Set$$Type<($LocalNode$$Type)>): void
public "hasAnyConnection"(): boolean
public "getMaxWireLength"(): integer
public "getConnectorType"(): $ConnectorType
public "convertOldNbt"(arg0: $CompoundTag$$Type): void
public "awakeNetwork"(arg0: $Level$$Type): boolean
public static "getWireNode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
public "isNetworkValid"(arg0: integer): boolean
public static "dropWire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "dropWire"(arg0: $Level$$Type, arg1: $LocalNode$$Type): void
public static "getNbtNode"(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
public "hasConnection"(arg0: integer): boolean
public "getNodeCount"(): integer
public "getNodePos"(arg0: integer): $BlockPos
public "getNodeOffset"(arg0: integer): $Vec3
public "isNodeInput"(arg0: integer): boolean
public "isNodeOutput"(arg0: integer): boolean
public "dropWires"(arg0: $Level$$Type, arg1: boolean): void
public "dropWires"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: boolean): void
public "isNodeIndeciesConnected"(arg0: integer, arg1: integer): boolean
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "mode"(): $ConnectorMode
get "capacity"(): integer
get "pos"(): $BlockPos
get "maxIn"(): integer
get "maxOut"(): integer
get "availableNode"(): integer
get "maxWireLength"(): integer
get "connectorType"(): $ConnectorType
get "nodeCount"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConnectorBlockEntity$$Type = ($AbstractConnectorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractConnectorBlockEntity_ = $AbstractConnectorBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.blocks.connector.ConnectorType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ConnectorType extends $Enum<($ConnectorType)> {
static readonly "Small": $ConnectorType
static readonly "Large": $ConnectorType


public static "values"(): ($ConnectorType)[]
public static "valueOf"(arg0: string): $ConnectorType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectorType$$Type = (("small") | ("large"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectorType_ = $ConnectorType$$Type;
}}
declare module "com.mrh0.createaddition.network.ObservePacketPayload" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder, $StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket, $ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket, $ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CustomPacketPayload$FallbackProvider, $CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ObservePacketPayload extends $Record implements $CustomPacketPayload {
static readonly "TYPE": $CustomPacketPayload$Type<($ObservePacketPayload)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ObservePacketPayload)>

constructor(pos: $BlockPos$$Type, node: integer)

public "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $BlockPos
public "node"(): integer
public static "tick"(): void
public static "send"(arg0: $BlockPos$$Type, arg1: integer): boolean
public static "createType"<T extends $CustomPacketPayload>(arg0: string): $CustomPacketPayload$Type<(T)>
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObservePacketPayload$$Type = ({"pos"?: $BlockPos$$Type, "node"?: integer}) | ([pos?: $BlockPos$$Type, node?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObservePacketPayload_ = $ObservePacketPayload$$Type;
}}
declare module "com.mrh0.createaddition.blocks.digital_adapter.DigitalAdapterBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable, $IWrenchable$$Type} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$DigitalAdapterBlockEntity, $DigitalAdapterBlockEntity$$Type} from "com.mrh0.createaddition.blocks.digital_adapter.DigitalAdapterBlockEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $DigitalAdapterBlock extends $Block implements $IBE<($DigitalAdapterBlockEntity)>, $IWrenchable {
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
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityClass"(): $Class<($DigitalAdapterBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($DigitalAdapterBlockEntity)>
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $DigitalAdapterBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($DigitalAdapterBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($DigitalAdapterBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($DigitalAdapterBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($DigitalAdapterBlockEntity)>): void
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($DigitalAdapterBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($DigitalAdapterBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigitalAdapterBlock$$Type = ($DigitalAdapterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DigitalAdapterBlock_ = $DigitalAdapterBlock$$Type;
}}
declare module "com.mrh0.createaddition.blocks.tesla_coil.TeslaCoilBlockEntity" {
import {$AbstractElectricBlockEntity, $AbstractElectricBlockEntity$$Type} from "com.mrh0.createaddition.energy.AbstractElectricBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IObserveBlockEntity, $IObserveBlockEntity$$Type} from "com.mrh0.createaddition.network.IObserveBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$$Type} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BeltProcessingBehaviour, $BeltProcessingBehaviour$$Type} from "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour"
import {$ChargingRecipe, $ChargingRecipe$$Type} from "com.mrh0.createaddition.recipe.charging.ChargingRecipe"
import {$ObservePacketPayload, $ObservePacketPayload$$Type} from "com.mrh0.createaddition.network.ObservePacketPayload"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$RecipeWrapper, $RecipeWrapper$$Type} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $TeslaCoilBlockEntity extends $AbstractElectricBlockEntity implements $IHaveGoggleInformation, $IObserveBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": string
 "processingBehaviour": $BeltProcessingBehaviour

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getCapacity"(): integer
public "find"(arg0: $RecipeWrapper$$Type, arg1: $Level$$Type): $Optional<($RecipeHolder<($ChargingRecipe)>)>
public "tick"(): void
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "isPoweredState"(): boolean
public "isEnergyOutput"(arg0: $Direction$$Type): boolean
public "isEnergyInput"(arg0: $Direction$$Type): boolean
public "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "tickAudio"(): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getMaxIn"(): integer
public "getMaxOut"(): integer
public "getConsumption"(): integer
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "capacity"(): integer
get "poweredState"(): boolean
get "maxIn"(): integer
get "maxOut"(): integer
get "consumption"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeslaCoilBlockEntity$$Type = ($TeslaCoilBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeslaCoilBlockEntity_ = $TeslaCoilBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.blocks.digital_adapter.DigitalAdapterDisplaySource" {
import {$DisplaySource, $DisplaySource$$Type} from "com.simibubi.create.api.behaviour.display.DisplaySource"
import {$DisplayTargetStats, $DisplayTargetStats$$Type} from "com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DisplayLinkContext, $DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$SimpleRegistry$Multi, $SimpleRegistry$Multi$$Type} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"

export class $DigitalAdapterDisplaySource extends $DisplaySource {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(any)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

public "provideText"(arg0: $DisplayLinkContext$$Type, arg1: $DisplayTargetStats$$Type): $List<($MutableComponent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigitalAdapterDisplaySource$$Type = ($DigitalAdapterDisplaySource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DigitalAdapterDisplaySource_ = $DigitalAdapterDisplaySource$$Type;
}}
declare module "com.mrh0.createaddition.blocks.tesla_coil.TeslaCoilBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DataGenContext, $DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$VoxelShaper, $VoxelShaper$$Type} from "net.createmod.catnip.math.VoxelShaper"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable, $IWrenchable$$Type} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$TeslaCoilBlockEntity, $TeslaCoilBlockEntity$$Type} from "com.mrh0.createaddition.blocks.tesla_coil.TeslaCoilBlockEntity"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TeslaCoilBlock extends $Block implements $IBE<($TeslaCoilBlockEntity)>, $IWrenchable {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "TESLA_COIL_SHAPE": $VoxelShaper
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "setPowered"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "getBlockEntityClass"(): $Class<($TeslaCoilBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($TeslaCoilBlockEntity)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($TeslaCoilBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $TeslaCoilBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($TeslaCoilBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($TeslaCoilBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($TeslaCoilBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($TeslaCoilBlockEntity)>): void
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($TeslaCoilBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($TeslaCoilBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeslaCoilBlock$$Type = ($TeslaCoilBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeslaCoilBlock_ = $TeslaCoilBlock$$Type;
}}
declare module "com.mrh0.createaddition.blocks.electric_motor.ElectricMotorBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$DirectionalKineticBlock, $DirectionalKineticBlock$$Type} from "com.simibubi.create.content.kinetics.base.DirectionalKineticBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$VoxelShaper, $VoxelShaper$$Type} from "net.createmod.catnip.math.VoxelShaper"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ElectricMotorBlockEntity, $ElectricMotorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.electric_motor.ElectricMotorBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ElectricMotorBlock extends $DirectionalKineticBlock implements $IBE<($ElectricMotorBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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
static readonly "ELECTRIC_MOTOR_SHAPE": $VoxelShaper
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "setPowered"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "hideStressImpact"(): boolean
public "getBlockEntityClass"(): $Class<($ElectricMotorBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($ElectricMotorBlockEntity)>
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ElectricMotorBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($ElectricMotorBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ElectricMotorBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ElectricMotorBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($ElectricMotorBlockEntity)>): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
get "blockEntityClass"(): $Class<($ElectricMotorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($ElectricMotorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricMotorBlock$$Type = ($ElectricMotorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricMotorBlock_ = $ElectricMotorBlock$$Type;
}}
declare module "com.mrh0.createaddition.blocks.connector.base.ConnectorMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ConnectorMode extends $Enum<($ConnectorMode)> implements $StringRepresentable {
static readonly "Pull": $ConnectorMode
static readonly "Passive": $ConnectorMode
static readonly "Push": $ConnectorMode
static readonly "None": $ConnectorMode


public "getNext"(): $ConnectorMode
public static "values"(): ($ConnectorMode)[]
public static "test"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ConnectorMode
public static "valueOf"(arg0: string): $ConnectorMode
public "isActive"(): boolean
public "getTooltip"(): $MutableComponent
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "next"(): $ConnectorMode
get "active"(): boolean
get "tooltip"(): $MutableComponent
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectorMode$$Type = (("push") | ("pull") | ("none") | ("passive"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectorMode_ = $ConnectorMode$$Type;
}}
declare module "com.mrh0.createaddition.blocks.barbed_wire.BarbedWireBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IShearable, $IShearable$$Type} from "net.neoforged.neoforge.common.IShearable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DataGenContext, $DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BarbedWireBlock extends $Block implements $IShearable {
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
static readonly "VERTICAL": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean
static readonly "HORIZONTAL_FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($BarbedWireBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public "isShearable"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): boolean
public "onSheared"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): $List<($ItemStack)>
public "spawnShearedDrop"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BarbedWireBlock$$Type = ($BarbedWireBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarbedWireBlock_ = $BarbedWireBlock$$Type;
}}
declare module "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable, $IWrenchable$$Type} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$AbstractConnectorBlockEntity, $AbstractConnectorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ConnectorMode, $ConnectorMode$$Type} from "com.mrh0.createaddition.blocks.connector.base.ConnectorMode"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ConnectorVariant, $ConnectorVariant$$Type} from "com.mrh0.createaddition.blocks.connector.base.ConnectorVariant"
import {$TransformableBlock, $TransformableBlock$$Type} from "com.simibubi.create.api.contraption.transformable.TransformableBlock"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AbstractConnectorBlock<BE extends $AbstractConnectorBlockEntity> extends $Block implements $IBE<(BE)>, $IWrenchable, $TransformableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MODE": $EnumProperty<($ConnectorMode)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "VARIANT": $EnumProperty<($ConnectorVariant)>
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

public "transform"(arg0: $BlockState$$Type, arg1: $StructureTransform$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): BE
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityClass"(): $Class<(BE)>
public "getBlockEntityType"(): $BlockEntityType<(BE)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(BE)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(BE), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(BE), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<(BE)>): void
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<(BE)>
get "blockEntityType"(): $BlockEntityType<(BE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConnectorBlock$$Type<BE> = ($AbstractConnectorBlock<(BE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractConnectorBlock_<BE> = $AbstractConnectorBlock$$Type<(BE)>;
}}
declare module "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipeParams" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ProcessingRecipeParams, $ProcessingRecipeParams$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipeParams"

export class $LiquidBurningRecipeParams extends $ProcessingRecipeParams {
static "CODEC": $MapCodec<($LiquidBurningRecipeParams)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($LiquidBurningRecipeParams)>

constructor()

public "getBurnTime"(): integer
public "isSuperheated"(): boolean
get "burnTime"(): integer
get "superheated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBurningRecipeParams$$Type = ($LiquidBurningRecipeParams);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBurningRecipeParams_ = $LiquidBurningRecipeParams$$Type;
}}
declare module "com.mrh0.createaddition.blocks.liquid_blaze_burner.LiquidBlazeBurnerBlockEntity$FuelType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $LiquidBlazeBurnerBlockEntity$FuelType extends $Enum<($LiquidBlazeBurnerBlockEntity$FuelType)> {
static readonly "NONE": $LiquidBlazeBurnerBlockEntity$FuelType
static readonly "SPECIAL": $LiquidBlazeBurnerBlockEntity$FuelType
static readonly "NORMAL": $LiquidBlazeBurnerBlockEntity$FuelType


public static "values"(): ($LiquidBlazeBurnerBlockEntity$FuelType)[]
public static "valueOf"(arg0: string): $LiquidBlazeBurnerBlockEntity$FuelType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlazeBurnerBlockEntity$FuelType$$Type = (("none") | ("normal") | ("special"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBlazeBurnerBlockEntity$FuelType_ = $LiquidBlazeBurnerBlockEntity$FuelType$$Type;
}}
declare module "com.mrh0.createaddition.blocks.connector.SmallConnectorBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$WireConnectResult, $WireConnectResult$$Type} from "com.mrh0.createaddition.energy.WireConnectResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ConnectorType, $ConnectorType$$Type} from "com.mrh0.createaddition.blocks.connector.ConnectorType"
import {$IWireNode, $IWireNode$$Type} from "com.mrh0.createaddition.energy.IWireNode"
import {$AbstractConnectorBlockEntity$InterfaceEnergyHandler, $AbstractConnectorBlockEntity$InterfaceEnergyHandler$$Type} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity$InterfaceEnergyHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractConnectorBlockEntity, $AbstractConnectorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity"
import {$LocalNode, $LocalNode$$Type} from "com.mrh0.createaddition.energy.LocalNode"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SmallConnectorBlockEntity extends $AbstractConnectorBlockEntity {
static readonly "OFFSET_NORTH": $Vec3
static readonly "OFFSET_DOWN": $Vec3
 "internal": $AbstractConnectorBlockEntity$InterfaceEnergyHandler
static readonly "OFFSET_WEST": $Vec3
static readonly "OFFSET_EAST": $Vec3
static readonly "ATTACHMENTS_NBT_KEY": string
static readonly "OFFSET_UP": $Vec3
static readonly "OFFSET_SOUTH": $Vec3

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getMaxWireLength"(): integer
public "getConnectorType"(): $ConnectorType
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getNodeCount"(): integer
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getMaxIn"(): integer
public "getMaxOut"(): integer
public "getNodeOffset"(arg0: integer): $Vec3
public static "connect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
public static "disconnect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
public static "getTypeOfConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
public static "readNodeBlockPos"(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
public static "readNodeWireType"(arg0: $CompoundTag$$Type, arg1: integer): $WireType
public static "readNodeOtherIndex"(arg0: $CompoundTag$$Type, arg1: integer): integer
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
public static "getWireNode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
public static "dropWire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public static "getNbtNode"(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "maxWireLength"(): integer
get "connectorType"(): $ConnectorType
get "nodeCount"(): integer
get "maxIn"(): integer
get "maxOut"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallConnectorBlockEntity$$Type = ($SmallConnectorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallConnectorBlockEntity_ = $SmallConnectorBlockEntity$$Type;
}}
declare module "com.mrh0.createaddition.recipe.charging.ChargingRecipeParams" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ProcessingRecipeParams, $ProcessingRecipeParams$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipeParams"

export class $ChargingRecipeParams extends $ProcessingRecipeParams {
static "CODEC": $MapCodec<($ChargingRecipeParams)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChargingRecipeParams)>

constructor()

public "getMaxChargeRate"(): integer
public "getEnergy"(): integer
get "maxChargeRate"(): integer
get "energy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargingRecipeParams$$Type = ($ChargingRecipeParams);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargingRecipeParams_ = $ChargingRecipeParams$$Type;
}}
declare module "com.mrh0.createaddition.energy.InternalEnergyStorage" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EnergyStorage, $EnergyStorage$$Type} from "net.neoforged.neoforge.energy.EnergyStorage"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $InternalEnergyStorage extends $EnergyStorage {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "setCapacity"(arg0: integer): void
public "toString"(): string
public "write"(arg0: $CompoundTag$$Type, arg1: string): $CompoundTag
public "write"(arg0: $CompoundTag$$Type): $CompoundTag
public "read"(arg0: $CompoundTag$$Type): void
public "read"(arg0: $CompoundTag$$Type, arg1: string): void
public "getSpace"(): integer
public "internalProduceEnergy"(arg0: integer): integer
public "internalConsumeEnergy"(arg0: integer): integer
public "setEnergy"(arg0: integer): void
public "canExtract"(): boolean
public "canReceive"(): boolean
/**
 * 
 * @deprecated
 */
public "outputToSide"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: integer): void
set "capacity"(value: integer)
get "space"(): integer
set "energy"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalEnergyStorage$$Type = ($InternalEnergyStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InternalEnergyStorage_ = $InternalEnergyStorage$$Type;
}}
