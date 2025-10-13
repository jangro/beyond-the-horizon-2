declare module "dev.architectury.mixin.forge.neoforge.LiquidBlockAccessor" {
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"

export interface $LiquidBlockAccessor {

 "getFluid"(): $FlowingFluid

(): $FlowingFluid$$Type
get "fluid"(): $FlowingFluid
}

export namespace $LiquidBlockAccessor {
const probejs$$marker: never
}
export class $LiquidBlockAccessor$$Static implements $LiquidBlockAccessor {


 "getFluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlockAccessor$$Type = (() => $FlowingFluid$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LiquidBlockAccessor_ = $LiquidBlockAccessor$$Type;
}}
declare module "dev.architectury.core.fluid.ArchitecturyFlowingFluid$Flowing" {
import {$ArchitecturyFlowingFluid, $ArchitecturyFlowingFluid$$Type} from "dev.architectury.core.fluid.ArchitecturyFlowingFluid"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ArchitecturyFluidAttributes, $ArchitecturyFluidAttributes$$Type} from "dev.architectury.core.fluid.ArchitecturyFluidAttributes"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $ArchitecturyFlowingFluid$Flowing extends $ArchitecturyFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(attributes: $ArchitecturyFluidAttributes$$Type)

public "getAmount"(state: $FluidState$$Type): integer
public "isSource"(state: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$Flowing$$Type = ($ArchitecturyFlowingFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFlowingFluid$Flowing_ = $ArchitecturyFlowingFluid$Flowing$$Type;
}}
declare module "dev.architectury.impl.ItemPropertiesExtensionImpl" {
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$DeferredSupplier, $DeferredSupplier$$Type} from "dev.architectury.registry.registries.DeferredSupplier"

export interface $ItemPropertiesExtensionImpl {

 "arch$getTab"(): $CreativeModeTab
 "arch$getTabSupplier"(): $DeferredSupplier<($CreativeModeTab)>
}

export namespace $ItemPropertiesExtensionImpl {
const probejs$$marker: never
}
export class $ItemPropertiesExtensionImpl$$Static implements $ItemPropertiesExtensionImpl {


 "arch$getTab"(): $CreativeModeTab
 "arch$getTabSupplier"(): $DeferredSupplier<($CreativeModeTab)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPropertiesExtensionImpl$$Type = ($ItemPropertiesExtensionImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPropertiesExtensionImpl_ = $ItemPropertiesExtensionImpl$$Type;
}}
declare module "dev.architectury.registry.registries.DeferredSupplier" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$OptionalSupplier, $OptionalSupplier$$Type} from "dev.architectury.utils.OptionalSupplier"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $DeferredSupplier<T> extends $OptionalSupplier<(T)> {

 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "getRegistryId"(): $ResourceLocation
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "get"(): T
get "key"(): $ResourceKey<(T)>
get "id"(): $ResourceLocation
get "registryKey"(): $ResourceKey<($Registry<(T)>)>
get "registryId"(): $ResourceLocation
get "present"(): boolean
get "orNull"(): T
}

export namespace $DeferredSupplier {
const probejs$$marker: never
}
export class $DeferredSupplier$$Static<T> implements $DeferredSupplier {


 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "getRegistryId"(): $ResourceLocation
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredSupplier$$Type<T> = ($DeferredSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredSupplier_<T> = $DeferredSupplier$$Type<(T)>;
}}
declare module "dev.architectury.registry.menu.ExtendedMenuProvider" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $ExtendedMenuProvider extends $MenuProvider {

 "saveExtraData"(arg0: $FriendlyByteBuf$$Type): void
 "getDisplayName"(): $Component
 "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
 "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
 "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
get "displayName"(): $Component
}

export namespace $ExtendedMenuProvider {
const probejs$$marker: never
}
export class $ExtendedMenuProvider$$Static implements $ExtendedMenuProvider {


 "saveExtraData"(arg0: $FriendlyByteBuf$$Type): void
 "getDisplayName"(): $Component
 "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
 "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
 "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedMenuProvider$$Type = ($ExtendedMenuProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedMenuProvider_ = $ExtendedMenuProvider$$Type;
}}
declare module "dev.architectury.utils.value.IntValue" {
import {$Value, $Value$$Type} from "dev.architectury.utils.value.Value"
import {$IntConsumer as $IntConsumer$0, $IntConsumer$$Type as $IntConsumer$0$$Type} from "java.util.function.IntConsumer"
import {$IntConsumer, $IntConsumer$$Type} from "it.unimi.dsi.fastutil.ints.IntConsumer"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IntValue extends $Value<(integer)>, $IntSupplier, $IntConsumer {

 "get"(): integer
 "getAsInt"(): integer
 "andThen"(arg0: $IntConsumer$0$$Type): $IntConsumer$0
 "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
/**
 * 
 * @deprecated
 */
 "andThen"(arg0: $Consumer$$Type<(integer)>): $Consumer<(integer)>
/**
 * 
 * @deprecated
 */
 "accept"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "accept"(arg0: integer): void
 "accept"(arg0: integer): void
get "asInt"(): integer
}

export namespace $IntValue {
const probejs$$marker: never
}
export class $IntValue$$Static implements $IntValue {


 "get"(): integer
 "getAsInt"(): integer
 "andThen"(arg0: $IntConsumer$0$$Type): $IntConsumer$0
 "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
/**
 * 
 * @deprecated
 */
 "andThen"(arg0: $Consumer$$Type<(integer)>): $Consumer<(integer)>
/**
 * 
 * @deprecated
 */
 "accept"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "accept"(arg0: integer): void
 "accept"(arg0: integer): void
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
declare module "dev.architectury.utils.value.Value" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Value<T> extends $Supplier<(T)>, $Consumer<(T)> {

 "get"(): T
 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
 "accept"(arg0: T): void
}

export namespace $Value {
const probejs$$marker: never
}
export class $Value$$Static<T> implements $Value {


 "get"(): T
 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
 "accept"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Value$$Type<T> = ($Value<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Value_<T> = $Value$$Type<(T)>;
}}
declare module "dev.architectury.core.block.ArchitecturyLiquidBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArchitecturyLiquidBlock extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(fluid: $Supplier$$Type<($FlowingFluid$$Type)>, properties: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyLiquidBlock$$Type = ($ArchitecturyLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyLiquidBlock_ = $ArchitecturyLiquidBlock$$Type;
}}
declare module "dev.architectury.core.fluid.ArchitecturyFluidAttributes" {
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export interface $ArchitecturyFluidAttributes {

 "getBlock"(): $LiquidBlock
 "getName"(): $Component
 "getName"(stack: $FluidStack$$Type): $Component
 "getTickDelay"(arg0: $LevelReader$$Type): integer
 "getTickDelay"(): integer
 "getDensity"(stack: $FluidStack$$Type): integer
 "getDensity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getDensity"(): integer
 "getTemperature"(): integer
 "getTemperature"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getTemperature"(stack: $FluidStack$$Type): integer
 "getViscosity"(): integer
 "getViscosity"(stack: $FluidStack$$Type): integer
 "getViscosity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getRarity"(stack: $FluidStack$$Type): $Rarity
 "getRarity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $Rarity
 "getRarity"(): $Rarity
 "getColor"(): integer
 "getColor"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): integer
 "getColor"(stack: $FluidStack$$Type): integer
/**
 * 
 * @deprecated
 */
 "getColor"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getSourceFluid"(): $Fluid
 "getBucketItem"(): $Item
 "getLuminosity"(): integer
 "getLuminosity"(stack: $FluidStack$$Type): integer
 "getLuminosity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getFillSound"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $SoundEvent
 "getFillSound"(stack: $FluidStack$$Type): $SoundEvent
 "getFillSound"(): $SoundEvent
 "getEmptySound"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $SoundEvent
 "getEmptySound"(stack: $FluidStack$$Type): $SoundEvent
 "getEmptySound"(): $SoundEvent
 "getDropOff"(): integer
 "getDropOff"(arg0: $LevelReader$$Type): integer
/**
 * 
 * @deprecated
 */
 "getFlowingTexture"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getFlowingTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
 "getFlowingTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
 "getTranslationKey"(): StringJS
 "getTranslationKey"(arg0: $FluidStack$$Type): StringJS
 "getSlopeFindDistance"(): integer
 "getSlopeFindDistance"(arg0: $LevelReader$$Type): integer
 "getOverlayTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getOverlayTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
 "getOverlayTexture"(): $ResourceLocation
 "canConvertToSource"(): boolean
 "isLighterThanAir"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isLighterThanAir"(stack: $FluidStack$$Type): boolean
 "isLighterThanAir"(): boolean
 "getExplosionResistance"(): float
 "getFlowingFluid"(): $Fluid
 "getSourceTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
 "getSourceTexture"(stack: $FluidStack$$Type): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "getSourceTexture"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getSourceTexture"(): $ResourceLocation
get "block"(): $LiquidBlock
get "name"(): $Component
get "tickDelay"(): integer
get "density"(): integer
get "temperature"(): integer
get "viscosity"(): integer
get "rarity"(): $Rarity
get "color"(): integer
get "sourceFluid"(): $Fluid
get "bucketItem"(): $Item
get "luminosity"(): integer
get "fillSound"(): $SoundEvent
get "emptySound"(): $SoundEvent
get "dropOff"(): integer
get "flowingTexture"(): $ResourceLocation
get "translationKey"(): StringJS
get "slopeFindDistance"(): integer
get "overlayTexture"(): $ResourceLocation
get "lighterThanAir"(): boolean
get "explosionResistance"(): float
get "flowingFluid"(): $Fluid
get "sourceTexture"(): $ResourceLocation
}

export namespace $ArchitecturyFluidAttributes {
const probejs$$marker: never
}
export class $ArchitecturyFluidAttributes$$Static implements $ArchitecturyFluidAttributes {


 "getBlock"(): $LiquidBlock
 "getName"(): $Component
 "getName"(stack: $FluidStack$$Type): $Component
 "getTickDelay"(arg0: $LevelReader$$Type): integer
 "getTickDelay"(): integer
 "getDensity"(stack: $FluidStack$$Type): integer
 "getDensity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getDensity"(): integer
 "getTemperature"(): integer
 "getTemperature"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getTemperature"(stack: $FluidStack$$Type): integer
 "getViscosity"(): integer
 "getViscosity"(stack: $FluidStack$$Type): integer
 "getViscosity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getRarity"(stack: $FluidStack$$Type): $Rarity
 "getRarity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $Rarity
 "getRarity"(): $Rarity
 "getColor"(): integer
 "getColor"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): integer
 "getColor"(stack: $FluidStack$$Type): integer
/**
 * 
 * @deprecated
 */
 "getColor"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getSourceFluid"(): $Fluid
 "getBucketItem"(): $Item
 "getLuminosity"(): integer
 "getLuminosity"(stack: $FluidStack$$Type): integer
 "getLuminosity"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
 "getFillSound"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $SoundEvent
 "getFillSound"(stack: $FluidStack$$Type): $SoundEvent
 "getFillSound"(): $SoundEvent
 "getEmptySound"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $SoundEvent
 "getEmptySound"(stack: $FluidStack$$Type): $SoundEvent
 "getEmptySound"(): $SoundEvent
 "getDropOff"(): integer
 "getDropOff"(arg0: $LevelReader$$Type): integer
/**
 * 
 * @deprecated
 */
 "getFlowingTexture"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getFlowingTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
 "getFlowingTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
 "getTranslationKey"(): StringJS
 "getTranslationKey"(arg0: $FluidStack$$Type): StringJS
 "getSlopeFindDistance"(): integer
 "getSlopeFindDistance"(arg0: $LevelReader$$Type): integer
 "getOverlayTexture"(stack: $FluidStack$$Type): $ResourceLocation
 "getOverlayTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
 "getOverlayTexture"(): $ResourceLocation
 "canConvertToSource"(): boolean
 "isLighterThanAir"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isLighterThanAir"(stack: $FluidStack$$Type): boolean
 "isLighterThanAir"(): boolean
 "getExplosionResistance"(): float
 "getFlowingFluid"(): $Fluid
 "getSourceTexture"(state: $FluidState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): $ResourceLocation
 "getSourceTexture"(stack: $FluidStack$$Type): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "getSourceTexture"(arg0: $FluidStack$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): $ResourceLocation
 "getSourceTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFluidAttributes$$Type = ($ArchitecturyFluidAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFluidAttributes_ = $ArchitecturyFluidAttributes$$Type;
}}
declare module "dev.architectury.core.fluid.ArchitecturyFluidAttributesForge" {
import {$FluidType$Properties, $FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ArchitecturyFluidAttributes, $ArchitecturyFluidAttributes$$Type} from "dev.architectury.core.fluid.ArchitecturyFluidAttributes"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"

export class $ArchitecturyFluidAttributesForge extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor(builder: $FluidType$Properties$$Type, fluid: $Fluid$$Type, attributes: $ArchitecturyFluidAttributes$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFluidAttributesForge$$Type = ($ArchitecturyFluidAttributesForge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFluidAttributesForge_ = $ArchitecturyFluidAttributesForge$$Type;
}}
declare module "dev.architectury.fluid.FluidStack" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$DataComponentHolder, $DataComponentHolder$$Type} from "net.minecraft.core.component.DataComponentHolder"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$TooltipProvider, $TooltipProvider$$Type} from "net.minecraft.world.item.component.TooltipProvider"

export class $FluidStack implements $DataComponentHolder {
static readonly "CODEC": $Codec<($FluidStack)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidStack)>


public "grow"(amount: long): void
public static "create"(fluid: $Supplier$$Type<($Fluid$$Type)>, amount: long, patch: $DataComponentPatch$$Type): $FluidStack
public static "create"(fluid: $Supplier$$Type<($Fluid$$Type)>, amount: long): $FluidStack
public static "create"(fluid: $Holder$$Type<($Fluid)>, amount: long, patch: $DataComponentPatch$$Type): $FluidStack
public static "create"(fluid: $Holder$$Type<($Fluid)>, amount: long): $FluidStack
public static "create"(stack: $FluidStack$$Type, amount: long): $FluidStack
public static "create"(fluid: $Fluid$$Type, amount: long): $FluidStack
public static "create"(fluid: $Fluid$$Type, amount: long, patch: $DataComponentPatch$$Type): $FluidStack
public "getName"(): $Component
public "remove"<T>(type: $DataComponentType$$Type<(T)>): T
public "equals"(o: any): boolean
public "hashCode"(): integer
public "update"<T>(type: $DataComponentType$$Type<(T)>, component: T, updater: $UnaryOperator$$Type<(T)>): T
public "update"<T, U>(type: $DataComponentType$$Type<(T)>, component: T, updateContext: U, updater: $BiFunction$$Type<(T), (U), (T)>): T
public "isEmpty"(): boolean
public static "empty"(): $FluidStack
public "set"<T>(type: $DataComponentType$$Type<(T)>, component: T): T
public static "init"(): void
public "write"(buf: $RegistryFriendlyByteBuf$$Type): void
public "write"(provider: $HolderLookup$Provider$$Type, tag: $Tag$$Type): $Tag
public static "read"(buf: $RegistryFriendlyByteBuf$$Type): $FluidStack
public static "read"(provider: $HolderLookup$Provider$$Type, tag: $Tag$$Type): $Optional<($FluidStack)>
public "copy"(): $FluidStack
public "shrink"(amount: long): void
public "getAmount"(): long
public "getFluid"(): $Fluid
public "getPatch"(): $DataComponentPatch
public "getComponents"(): $DataComponentMap
public "getRawFluid"(): $Fluid
public static "bucketAmount"(): long
public "isFluidEqual"(other: $FluidStack$$Type): boolean
public "copyWithAmount"(amount: long): $FluidStack
public "setAmount"(amount: long): void
public "getTranslationKey"(): StringJS
public "applyComponents"(patch: $DataComponentPatch$$Type): void
public "applyComponents"(patch: $DataComponentMap$$Type): void
public "getRawFluidSupplier"(): $Supplier<($Fluid)>
public "isFluidStackEqual"(other: $FluidStack$$Type): boolean
public "isComponentEqual"(other: $FluidStack$$Type): boolean
public "has"(arg0: $DataComponentType$$Type<(any)>): boolean
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
public "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(any)>)>): boolean
public "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
public "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
public "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
get "name"(): $Component
get "amount"(): long
get "fluid"(): $Fluid
get "patch"(): $DataComponentPatch
get "components"(): $DataComponentMap
get "rawFluid"(): $Fluid
set "amount"(value: long)
get "translationKey"(): StringJS
get "rawFluidSupplier"(): $Supplier<($Fluid)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$$Type = ($FluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStack_ = $FluidStack$$Type;
}}
declare module "dev.architectury.registry.registries.options.RegistrarOption" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistrarOption {

}

export namespace $RegistrarOption {
const probejs$$marker: never
}
export class $RegistrarOption$$Static implements $RegistrarOption {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarOption$$Type = ($RegistrarOption);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrarOption_ = $RegistrarOption$$Type;
}}
declare module "dev.architectury.event.EventResult" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"

export class $EventResult {


public static "pass"(): $EventResult
public "isFalse"(): boolean
public static "interrupt"(value: boolean): $EventResult
public "value"(): boolean
public "isEmpty"(): boolean
public "isPresent"(): boolean
public "isTrue"(): boolean
public static "interruptFalse"(): $EventResult
public static "interruptTrue"(): $EventResult
public "asMinecraft"(): $InteractionResult
public static "interruptDefault"(): $EventResult
public "interruptsFurtherEvaluation"(): boolean
get "false"(): boolean
get "empty"(): boolean
get "present"(): boolean
get "true"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventResult$$Type = ($EventResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventResult_ = $EventResult$$Type;
}}
declare module "dev.architectury.mixin.forge.neoforge.BucketItemAccessor" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"

export interface $BucketItemAccessor {

 "getContent"(): $Fluid

(): $Fluid$$Type
get "content"(): $Fluid
}

export namespace $BucketItemAccessor {
const probejs$$marker: never
}
export class $BucketItemAccessor$$Static implements $BucketItemAccessor {


 "getContent"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketItemAccessor$$Type = (() => $Fluid$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BucketItemAccessor_ = $BucketItemAccessor$$Type;
}}
declare module "dev.architectury.core.fluid.ArchitecturyFlowingFluid$Source" {
import {$ArchitecturyFlowingFluid, $ArchitecturyFlowingFluid$$Type} from "dev.architectury.core.fluid.ArchitecturyFlowingFluid"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ArchitecturyFluidAttributes, $ArchitecturyFluidAttributes$$Type} from "dev.architectury.core.fluid.ArchitecturyFluidAttributes"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $ArchitecturyFlowingFluid$Source extends $ArchitecturyFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(attributes: $ArchitecturyFluidAttributes$$Type)

public "getAmount"(state: $FluidState$$Type): integer
public "isSource"(state: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$Source$$Type = ($ArchitecturyFlowingFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFlowingFluid$Source_ = $ArchitecturyFlowingFluid$Source$$Type;
}}
declare module "dev.architectury.extensions.injected.InjectedFluidExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$$Type} from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $InjectedFluidExtension extends $InjectedRegistryEntryExtension<($Fluid)> {

 "arch$holder"(): $Holder<($Fluid)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedFluidExtension {
const probejs$$marker: never
}
export class $InjectedFluidExtension$$Static implements $InjectedFluidExtension {


 "arch$holder"(): $Holder<($Fluid)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedFluidExtension$$Type = ($InjectedFluidExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedFluidExtension_ = $InjectedFluidExtension$$Type;
}}
declare module "dev.architectury.utils.Env" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Dist, $Dist$$Type} from "net.neoforged.api.distmarker.Dist"

export class $Env extends $Enum<($Env)> {
static readonly "SERVER": $Env
static readonly "CLIENT": $Env


public static "values"(): ($Env)[]
public static "valueOf"(name: StringJS): $Env
public static "fromPlatform"(type: any): $Env
public "toPlatform"(): $Dist
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Env$$Type = (("client") | ("server"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Env_ = $Env$$Type;
}}
declare module "dev.architectury.event.forge.EventHandlerImplCommon$LevelEventAttachment" {
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export interface $EventHandlerImplCommon$LevelEventAttachment {

 "architectury$getAttachedLevel"(): $LevelAccessor
 "architectury$attachLevel"(arg0: $LevelAccessor$$Type): void
}

export namespace $EventHandlerImplCommon$LevelEventAttachment {
const probejs$$marker: never
}
export class $EventHandlerImplCommon$LevelEventAttachment$$Static implements $EventHandlerImplCommon$LevelEventAttachment {


 "architectury$getAttachedLevel"(): $LevelAccessor
 "architectury$attachLevel"(arg0: $LevelAccessor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventHandlerImplCommon$LevelEventAttachment$$Type = ($EventHandlerImplCommon$LevelEventAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventHandlerImplCommon$LevelEventAttachment_ = $EventHandlerImplCommon$LevelEventAttachment$$Type;
}}
declare module "dev.architectury.extensions.injected.InjectedLiquidBlockExtension" {
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"

export interface $InjectedLiquidBlockExtension {

 "arch$getFluid"(): $FlowingFluid
}

export namespace $InjectedLiquidBlockExtension {
const probejs$$marker: never
}
export class $InjectedLiquidBlockExtension$$Static implements $InjectedLiquidBlockExtension {


 "arch$getFluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedLiquidBlockExtension$$Type = ($InjectedLiquidBlockExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedLiquidBlockExtension_ = $InjectedLiquidBlockExtension$$Type;
}}
declare module "dev.architectury.extensions.injected.InjectedItemExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$$Type} from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $InjectedItemExtension extends $InjectedRegistryEntryExtension<($Item)> {

 "arch$holder"(): $Holder<($Item)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedItemExtension {
const probejs$$marker: never
}
export class $InjectedItemExtension$$Static implements $InjectedItemExtension {


 "arch$holder"(): $Holder<($Item)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedItemExtension$$Type = ($InjectedItemExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedItemExtension_ = $InjectedItemExtension$$Type;
}}
declare module "dev.architectury.registry.registries.RegistrySupplier" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$HolderOwner, $HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Registrar, $Registrar$$Type} from "dev.architectury.registry.registries.Registrar"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DeferredSupplier, $DeferredSupplier$$Type} from "dev.architectury.registry.registries.DeferredSupplier"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$DataMapType, $DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$RegistrarManager, $RegistrarManager$$Type} from "dev.architectury.registry.registries.RegistrarManager"
import {$Holder$Kind, $Holder$Kind$$Type} from "net.minecraft.core.Holder$Kind"

export interface $RegistrySupplier<T> extends $DeferredSupplier<(T)>, $Holder<(T)> {

 "listen"(callback: $Consumer$$Type<(T)>): void
 "getRegistrar"(): $Registrar<(T)>
 "getRegistrarManager"(): $RegistrarManager
 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "getRegistryId"(): $ResourceLocation
 "unwrap"(): $Either<($ResourceKey<(T)>), (T)>
 "is"(arg0: $Predicate$$Type<($ResourceKey<(T)>)>): boolean
 "is"(arg0: $TagKey$$Type<(T)>): boolean
/**
 * 
 * @deprecated
 */
 "is"(arg0: $Holder$$Type<(T)>): boolean
 "is"(arg0: $ResourceKey$$Type<(T)>): boolean
 "is"(arg0: $ResourceLocation$$Type): boolean
 "tags"(): $Stream<($TagKey<(T)>)>
 "value"(): T
 "kind"(): $Holder$Kind
 "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
 "unwrapKey"(): $Optional<($ResourceKey<(T)>)>
 "isBound"(): boolean
 "getRegisteredName"(): StringJS
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "unwrapLookup"(): $HolderLookup$RegistryLookup<(T)>
 "getDelegate"(): $Holder<(T)>
 "get"(): T
 "getData"<T>(arg0: $DataMapType$$Type<(T), (T)>): T
get "registrar"(): $Registrar<(T)>
get "registrarManager"(): $RegistrarManager
get "key"(): $ResourceKey<(T)>
get "id"(): $ResourceLocation
get "registryKey"(): $ResourceKey<($Registry<(T)>)>
get "registryId"(): $ResourceLocation
get "bound"(): boolean
get "registeredName"(): StringJS
get "present"(): boolean
get "orNull"(): T
get "delegate"(): $Holder<(T)>
}

export namespace $RegistrySupplier {
function direct<T>(arg0: T): $Holder<(T)>
const probejs$$marker: never
}
export class $RegistrySupplier$$Static<T> implements $RegistrySupplier {


 "listen"(callback: $Consumer$$Type<(T)>): void
 "getRegistrar"(): $Registrar<(T)>
 "getRegistrarManager"(): $RegistrarManager
 "getKey"(): $ResourceKey<(T)>
 "getId"(): $ResourceLocation
 "getRegistryKey"(): $ResourceKey<($Registry<(T)>)>
 "getRegistryId"(): $ResourceLocation
 "unwrap"(): $Either<($ResourceKey<(T)>), (T)>
 "is"(arg0: $Predicate$$Type<($ResourceKey<(T)>)>): boolean
 "is"(arg0: $TagKey$$Type<(T)>): boolean
/**
 * 
 * @deprecated
 */
 "is"(arg0: $Holder$$Type<(T)>): boolean
 "is"(arg0: $ResourceKey$$Type<(T)>): boolean
 "is"(arg0: $ResourceLocation$$Type): boolean
static "direct"<T>(arg0: T): $Holder<(T)>
 "tags"(): $Stream<($TagKey<(T)>)>
 "value"(): T
 "kind"(): $Holder$Kind
 "canSerializeIn"(arg0: $HolderOwner$$Type<(T)>): boolean
 "unwrapKey"(): $Optional<($ResourceKey<(T)>)>
 "isBound"(): boolean
 "getRegisteredName"(): StringJS
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "unwrapLookup"(): $HolderLookup$RegistryLookup<(T)>
 "getDelegate"(): $Holder<(T)>
 "get"(): T
 "getData"<T>(arg0: $DataMapType$$Type<(T), (T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrySupplier$$Type<T> = ($RegistrySupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrySupplier_<T> = $RegistrySupplier$$Type<(T)>;
}}
declare module "dev.architectury.extensions.injected.InjectedRegistryEntryExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $InjectedRegistryEntryExtension<T> {

 "arch$holder"(): $Holder<(T)>
 "arch$registryName"(): $ResourceLocation

(): $Holder$$Type<(T)>
}

export namespace $InjectedRegistryEntryExtension {
const probejs$$marker: never
}
export class $InjectedRegistryEntryExtension$$Static<T> implements $InjectedRegistryEntryExtension {


 "arch$holder"(): $Holder<(T)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedRegistryEntryExtension$$Type<T> = (() => $Holder$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedRegistryEntryExtension_<T> = $InjectedRegistryEntryExtension$$Type<(T)>;
}}
declare module "dev.architectury.extensions.injected.InjectedBlockExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$$Type} from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $InjectedBlockExtension extends $InjectedRegistryEntryExtension<($Block)> {

 "arch$holder"(): $Holder<($Block)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedBlockExtension {
const probejs$$marker: never
}
export class $InjectedBlockExtension$$Static implements $InjectedBlockExtension {


 "arch$holder"(): $Holder<($Block)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedBlockExtension$$Type = ($InjectedBlockExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedBlockExtension_ = $InjectedBlockExtension$$Type;
}}
declare module "dev.architectury.utils.OptionalSupplier" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $OptionalSupplier<T> extends $Supplier<(T)> {

 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "get"(): T
get "present"(): boolean
get "orNull"(): T
}

export namespace $OptionalSupplier {
const probejs$$marker: never
}
export class $OptionalSupplier$$Static<T> implements $OptionalSupplier {


 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "toOptional"(): $Optional<(T)>
 "getOrNull"(): T
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalSupplier$$Type<T> = ($OptionalSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalSupplier_<T> = $OptionalSupplier$$Type<(T)>;
}}
declare module "dev.architectury.registry.registries.RegistrarBuilder" {
import {$RegistrarOption, $RegistrarOption$$Type} from "dev.architectury.registry.registries.options.RegistrarOption"
import {$Registrar, $Registrar$$Type} from "dev.architectury.registry.registries.Registrar"

export interface $RegistrarBuilder<T> {

 "option"(arg0: $RegistrarOption$$Type): $RegistrarBuilder<(T)>
 "build"(): $Registrar<(T)>
 "syncToClients"(): $RegistrarBuilder<(T)>
}

export namespace $RegistrarBuilder {
const probejs$$marker: never
}
export class $RegistrarBuilder$$Static<T> implements $RegistrarBuilder {


 "option"(arg0: $RegistrarOption$$Type): $RegistrarBuilder<(T)>
 "build"(): $Registrar<(T)>
 "syncToClients"(): $RegistrarBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarBuilder$$Type<T> = ($RegistrarBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrarBuilder_<T> = $RegistrarBuilder$$Type<(T)>;
}}
declare module "dev.architectury.extensions.injected.InjectedItemPropertiesExtension" {
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DeferredSupplier, $DeferredSupplier$$Type} from "dev.architectury.registry.registries.DeferredSupplier"

export interface $InjectedItemPropertiesExtension {

 "arch$tab"(tab: $CreativeModeTab$$Type): $Item$Properties
 "arch$tab"(tab: $DeferredSupplier$$Type<($CreativeModeTab$$Type)>): $Item$Properties
 "arch$tab"(tab: $ResourceKey$$Type<($CreativeModeTab)>): $Item$Properties
}

export namespace $InjectedItemPropertiesExtension {
const probejs$$marker: never
}
export class $InjectedItemPropertiesExtension$$Static implements $InjectedItemPropertiesExtension {


 "arch$tab"(tab: $CreativeModeTab$$Type): $Item$Properties
 "arch$tab"(tab: $DeferredSupplier$$Type<($CreativeModeTab$$Type)>): $Item$Properties
 "arch$tab"(tab: $ResourceKey$$Type<($CreativeModeTab)>): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedItemPropertiesExtension$$Type = ($InjectedItemPropertiesExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedItemPropertiesExtension_ = $InjectedItemPropertiesExtension$$Type;
}}
declare module "dev.architectury.extensions.injected.InjectedEntityTypeExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InjectedRegistryEntryExtension, $InjectedRegistryEntryExtension$$Type} from "dev.architectury.extensions.injected.InjectedRegistryEntryExtension"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $InjectedEntityTypeExtension extends $InjectedRegistryEntryExtension<($EntityType<(any)>)> {

 "arch$holder"(): $Holder<($EntityType<(any)>)>
 "arch$registryName"(): $ResourceLocation
}

export namespace $InjectedEntityTypeExtension {
const probejs$$marker: never
}
export class $InjectedEntityTypeExtension$$Static implements $InjectedEntityTypeExtension {


 "arch$holder"(): $Holder<($EntityType<(any)>)>
 "arch$registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedEntityTypeExtension$$Type = ($InjectedEntityTypeExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedEntityTypeExtension_ = $InjectedEntityTypeExtension$$Type;
}}
declare module "dev.architectury.registry.registries.RegistrarManager" {
import {$RegistrarBuilder, $RegistrarBuilder$$Type} from "dev.architectury.registry.registries.RegistrarBuilder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Registrar, $Registrar$$Type} from "dev.architectury.registry.registries.Registrar"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $RegistrarManager {


public static "get"(modId: StringJS): $RegistrarManager
public "get"<T>(key: $ResourceKey$$Type<($Registry<(T)>)>): $Registrar<(T)>
/**
 * 
 * @deprecated
 */
public "get"<T>(registry: $Registry$$Type<(T)>): $Registrar<(T)>
public "builder"<T>(registryId: $ResourceLocation$$Type, ...typeGetter: (T)[]): $RegistrarBuilder<(T)>
/**
 * 
 * @deprecated
 */
public static "getId"<T>(object: T, fallback: $Registry$$Type<(T)>): $ResourceLocation
public static "getId"<T>(object: T, fallback: $ResourceKey$$Type<($Registry<(T)>)>): $ResourceLocation
public "getModId"(): StringJS
public "forRegistry"<T>(key: $ResourceKey$$Type<($Registry<(T)>)>, callback: $Consumer$$Type<($Registrar<(T)>)>): void
get "modId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrarManager$$Type = ($RegistrarManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrarManager_ = $RegistrarManager$$Type;
}}
declare module "dev.architectury.extensions.injected.InjectedBucketItemExtension" {
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"

export interface $InjectedBucketItemExtension {

 "arch$getFluid"(): $Fluid
}

export namespace $InjectedBucketItemExtension {
const probejs$$marker: never
}
export class $InjectedBucketItemExtension$$Static implements $InjectedBucketItemExtension {


 "arch$getFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InjectedBucketItemExtension$$Type = ($InjectedBucketItemExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InjectedBucketItemExtension_ = $InjectedBucketItemExtension$$Type;
}}
declare module "dev.architectury.core.fluid.ArchitecturyFlowingFluid" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"

export class $ArchitecturyFlowingFluid extends $BaseFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "isSame"(fluid: $Fluid$$Type): boolean
public "getTickDelay"(level: $LevelReader$$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "pickupSound"(): $Optional<($SoundEvent)>
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyFlowingFluid$$Type = ($ArchitecturyFlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyFlowingFluid_ = $ArchitecturyFlowingFluid$$Type;
}}
declare module "dev.architectury.event.events.client.ClientCommandRegistrationEvent$ClientCommandSourceStack" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SharedSuggestionProvider, $SharedSuggestionProvider$$Type} from "net.minecraft.commands.SharedSuggestionProvider"
import {$Message, $Message$$Type} from "com.mojang.brigadier.Message"
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$LocalPlayer, $LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$SharedSuggestionProvider$ElementSuggestionType, $SharedSuggestionProvider$ElementSuggestionType$$Type} from "net.minecraft.commands.SharedSuggestionProvider$ElementSuggestionType"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$$Type} from "net.minecraft.commands.SharedSuggestionProvider$TextCoordinates"

export interface $ClientCommandRegistrationEvent$ClientCommandSourceStack extends $SharedSuggestionProvider {

 "arch$getPlayer"(): $LocalPlayer
 "arch$getLevel"(): $ClientLevel
 "arch$sendSuccess"(arg0: $Supplier$$Type<($Component$$Type)>, arg1: boolean): void
 "arch$sendFailure"(arg0: $Component$$Type): void
 "arch$getPosition"(): $Vec3
 "arch$getRotation"(): $Vec2
 "levels"(): $Set<($ResourceKey<($Level)>)>
 "registryAccess"(): $RegistryAccess
 "getRecipeNames"(): $Stream<($ResourceLocation)>
 "getAllTeams"(): $Collection<(StringJS)>
 "hasPermission"(arg0: integer): boolean
 "getAvailableSounds"(): $Stream<($ResourceLocation)>
 "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "enabledFeatures"(): $FeatureFlagSet
 "getOnlinePlayerNames"(): $Collection<(StringJS)>
 "getSelectedEntities"(): $Collection<(StringJS)>
 "customSuggestion"(arg0: $CommandContext$$Type<(any)>): $CompletableFuture<($Suggestions)>
 "getCustomTabSugggestions"(): $Collection<(StringJS)>
 "suggestRegistryElements"(arg0: $ResourceKey$$Type<($Registry<(any)>)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type, arg3: $CommandContext$$Type<(any)>): $CompletableFuture<($Suggestions)>
 "suggestRegistryElements"(arg0: $Registry$$Type<(any)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type): void
get "recipeNames"(): $Stream<($ResourceLocation)>
get "allTeams"(): $Collection<(StringJS)>
get "availableSounds"(): $Stream<($ResourceLocation)>
get "relevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "absoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
get "onlinePlayerNames"(): $Collection<(StringJS)>
get "selectedEntities"(): $Collection<(StringJS)>
get "customTabSugggestions"(): $Collection<(StringJS)>
}

export namespace $ClientCommandRegistrationEvent$ClientCommandSourceStack {
function matchesSubStr(arg0: StringJS, arg1: StringJS): boolean
function suggest(arg0: (StringJS)[], arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggest(arg0: $Iterable$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggest(arg0: $Stream$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggest<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), (StringJS)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
function filterResources<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Consumer$$Type<(T)>): void
function filterResources<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: StringJS, arg3: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg4: $Consumer$$Type<(T)>): void
function suggestResource(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggestResource<T>(arg0: $Stream$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
function suggestResource<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
function suggestCoordinates(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
function suggest2DCoordinates(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
const probejs$$marker: never
}
export class $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Static implements $ClientCommandRegistrationEvent$ClientCommandSourceStack {


 "arch$getPlayer"(): $LocalPlayer
 "arch$getLevel"(): $ClientLevel
 "arch$sendSuccess"(arg0: $Supplier$$Type<($Component$$Type)>, arg1: boolean): void
 "arch$sendFailure"(arg0: $Component$$Type): void
 "arch$getPosition"(): $Vec3
 "arch$getRotation"(): $Vec2
 "levels"(): $Set<($ResourceKey<($Level)>)>
 "registryAccess"(): $RegistryAccess
static "matchesSubStr"(arg0: StringJS, arg1: StringJS): boolean
 "getRecipeNames"(): $Stream<($ResourceLocation)>
 "getAllTeams"(): $Collection<(StringJS)>
 "hasPermission"(arg0: integer): boolean
static "suggest"(arg0: (StringJS)[], arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: $Iterable$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"(arg0: $Stream$$Type<(StringJS)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggest"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), (StringJS)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Consumer$$Type<(T)>): void
static "filterResources"<T>(arg0: $Iterable$$Type<(T)>, arg1: StringJS, arg2: StringJS, arg3: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg4: $Consumer$$Type<(T)>): void
 "getAvailableSounds"(): $Stream<($ResourceLocation)>
static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggestResource"<T>(arg0: $Stream$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggestResource"<T>(arg0: $Iterable$$Type<(T)>, arg1: $SuggestionsBuilder$$Type, arg2: $Function$$Type<(T), ($ResourceLocation$$Type)>, arg3: $Function$$Type<(T), ($Message$$Type)>): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Iterable$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
static "suggestResource"(arg0: $Stream$$Type<($ResourceLocation$$Type)>, arg1: $SuggestionsBuilder$$Type, arg2: StringJS): $CompletableFuture<($Suggestions)>
 "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
static "suggestCoordinates"(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
static "suggest2DCoordinates"(arg0: StringJS, arg1: $Collection$$Type<($SharedSuggestionProvider$TextCoordinates$$Type)>, arg2: $SuggestionsBuilder$$Type, arg3: $Predicate$$Type<(StringJS)>): $CompletableFuture<($Suggestions)>
 "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "enabledFeatures"(): $FeatureFlagSet
 "getOnlinePlayerNames"(): $Collection<(StringJS)>
 "getSelectedEntities"(): $Collection<(StringJS)>
 "customSuggestion"(arg0: $CommandContext$$Type<(any)>): $CompletableFuture<($Suggestions)>
 "getCustomTabSugggestions"(): $Collection<(StringJS)>
 "suggestRegistryElements"(arg0: $ResourceKey$$Type<($Registry<(any)>)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type, arg3: $CommandContext$$Type<(any)>): $CompletableFuture<($Suggestions)>
 "suggestRegistryElements"(arg0: $Registry$$Type<(any)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$$Type, arg2: $SuggestionsBuilder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Type = ($ClientCommandRegistrationEvent$ClientCommandSourceStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientCommandRegistrationEvent$ClientCommandSourceStack_ = $ClientCommandRegistrationEvent$ClientCommandSourceStack$$Type;
}}
declare module "dev.architectury.registry.registries.Registrar" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistrySupplier, $RegistrySupplier$$Type} from "dev.architectury.registry.registries.RegistrySupplier"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $Registrar<T> extends $Iterable<(T)> {

 "getIds"(): $Set<($ResourceLocation)>
 "delegate"(arg0: $ResourceLocation$$Type): $RegistrySupplier<(T)>
 "get"(arg0: $ResourceLocation$$Type): T
 "wrap"<R extends T>(obj: R): $RegistrySupplier<(R)>
 "contains"(arg0: $ResourceLocation$$Type): boolean
 "entrySet"(): $Set<($Map$Entry<($ResourceKey<(T)>), (T)>)>
 "getKey"(arg0: T): $Optional<($ResourceKey<(T)>)>
 "register"<E extends T>(arg0: $ResourceLocation$$Type, arg1: $Supplier$$Type<(E)>): $RegistrySupplier<(E)>
 "key"(): $ResourceKey<($Registry<(T)>)>
 "listen"<R extends T>(supplier: $RegistrySupplier$$Type<(R)>, callback: $Consumer$$Type<(R)>): void
 "listen"(arg0: $ResourceLocation$$Type, arg1: $Consumer$$Type<(T)>): void
 "getId"(arg0: T): $ResourceLocation
 "containsValue"(arg0: T): boolean
 "getHolder"(id: $ResourceLocation$$Type): $Holder<(T)>
 "getHolder"(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
 "byRawId"(arg0: integer): T
 "getRawId"(arg0: T): integer
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
[Symbol.iterator](): IterableIterator<T>;
get "ids"(): $Set<($ResourceLocation)>
}

export namespace $Registrar {
const probejs$$marker: never
}
export class $Registrar$$Static<T> implements $Registrar {


 "getIds"(): $Set<($ResourceLocation)>
 "delegate"(arg0: $ResourceLocation$$Type): $RegistrySupplier<(T)>
 "get"(arg0: $ResourceLocation$$Type): T
 "wrap"<R extends T>(obj: R): $RegistrySupplier<(R)>
 "contains"(arg0: $ResourceLocation$$Type): boolean
 "entrySet"(): $Set<($Map$Entry<($ResourceKey<(T)>), (T)>)>
 "getKey"(arg0: T): $Optional<($ResourceKey<(T)>)>
 "register"<E extends T>(arg0: $ResourceLocation$$Type, arg1: $Supplier$$Type<(E)>): $RegistrySupplier<(E)>
 "key"(): $ResourceKey<($Registry<(T)>)>
 "listen"<R extends T>(supplier: $RegistrySupplier$$Type<(R)>, callback: $Consumer$$Type<(R)>): void
 "listen"(arg0: $ResourceLocation$$Type, arg1: $Consumer$$Type<(T)>): void
 "getId"(arg0: T): $ResourceLocation
 "containsValue"(arg0: T): boolean
 "getHolder"(id: $ResourceLocation$$Type): $Holder<(T)>
 "getHolder"(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
 "byRawId"(arg0: integer): T
 "getRawId"(arg0: T): integer
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registrar$$Type<T> = ($Registrar<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registrar_<T> = $Registrar$$Type<(T)>;
}}
declare module "dev.architectury.core.item.ArchitecturyBucketItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BucketItem, $BucketItem$$Type} from "net.minecraft.world.item.BucketItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ArchitecturyBucketItem extends $BucketItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(fluid: $Supplier$$Type<($Fluid$$Type)>, properties: $Item$Properties$$Type)

public "getContainedFluid"(): $Fluid
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "containedFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitecturyBucketItem$$Type = ($ArchitecturyBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitecturyBucketItem_ = $ArchitecturyBucketItem$$Type;
}}
