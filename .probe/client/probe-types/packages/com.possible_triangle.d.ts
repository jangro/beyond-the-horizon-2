declare module "com.possible_triangle.sliceanddice.recipe.CuttingProcessingRecipe" {
import {$CuttingProcessingRecipe$Companion, $CuttingProcessingRecipe$Companion$$Type} from "com.possible_triangle.sliceanddice.recipe.CuttingProcessingRecipe$Companion"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CuttingProcessingRecipe$Params, $CuttingProcessingRecipe$Params$$Type} from "com.possible_triangle.sliceanddice.recipe.CuttingProcessingRecipe$Params"
import {$List, $List$$Type} from "java.util.List"
import {$IAssemblyRecipe, $IAssemblyRecipe$$Type} from "com.simibubi.create.content.processing.sequenced.IAssemblyRecipe"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SequencedAssemblySubCategory, $SequencedAssemblySubCategory$$Type} from "com.simibubi.create.compat.jei.category.sequencedAssembly.SequencedAssemblySubCategory"
import {$ProcessingRecipe, $ProcessingRecipe$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipe"
import {$FluidIngredient, $FluidIngredient$$Type} from "com.simibubi.create.foundation.fluid.FluidIngredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Set, $Set$$Type} from "java.util.Set"

export class $CuttingProcessingRecipe extends $ProcessingRecipe<($RecipeInput), ($CuttingProcessingRecipe$Params)> implements $IAssemblyRecipe {
static readonly "Companion": $CuttingProcessingRecipe$Companion

constructor(arg0: $CuttingProcessingRecipe$Params$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "validate"(): $List<(string)>
public "copy"(arg0: $CuttingProcessingRecipe$Params$$Type): $CuttingProcessingRecipe
public "addAssemblyIngredients"(arg0: $List$$Type<($Ingredient$$Type)>): void
public "addRequiredMachines"(arg0: $Set$$Type<($ItemLike$$Type)>): void
public "getJEISubCategory"(): $Supplier<($Supplier<($SequencedAssemblySubCategory)>)>
public "component1"(): $CuttingProcessingRecipe$Params
public "getParams"(): $CuttingProcessingRecipe$Params
public static "copy$default"(arg0: $CuttingProcessingRecipe$$Type, arg1: $CuttingProcessingRecipe$Params$$Type, arg2: integer, arg3: any): $CuttingProcessingRecipe
public "getDescriptionForAssembly"(): $Component
public "supportsAssembly"(): boolean
public "addAssemblyFluidIngredients"(arg0: $List$$Type<($FluidIngredient$$Type)>): void
get "jEISubCategory"(): $Supplier<($Supplier<($SequencedAssemblySubCategory)>)>
get "params"(): $CuttingProcessingRecipe$Params
get "descriptionForAssembly"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuttingProcessingRecipe$$Type = ($CuttingProcessingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuttingProcessingRecipe_ = $CuttingProcessingRecipe$$Type;
}}
declare module "com.possible_triangle.sliceanddice.recipe.CuttingProcessingRecipe$Params$Companion" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CuttingProcessingRecipe$Params, $CuttingProcessingRecipe$Params$$Type} from "com.possible_triangle.sliceanddice.recipe.CuttingProcessingRecipe$Params"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CuttingProcessingRecipe$Params$Companion {

constructor(arg0: $DefaultConstructorMarker$$Type)

public "getSTREAM_CODEC"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CuttingProcessingRecipe$Params)>
public "getCODEC"(): $MapCodec<($CuttingProcessingRecipe$Params)>
get "sTREAM_CODEC"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CuttingProcessingRecipe$Params)>
get "cODEC"(): $MapCodec<($CuttingProcessingRecipe$Params)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuttingProcessingRecipe$Params$Companion$$Type = ($CuttingProcessingRecipe$Params$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuttingProcessingRecipe$Params$Companion_ = $CuttingProcessingRecipe$Params$Companion$$Type;
}}
declare module "com.possible_triangle.sliceanddice.block.slicer.SlicerItemHandler" {
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$List, $List$$Type} from "java.util.List"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$SlicerBlockEntity, $SlicerBlockEntity$$Type} from "com.possible_triangle.sliceanddice.block.slicer.SlicerBlockEntity"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export class $SlicerItemHandler implements $IItemHandlerModifiable {

constructor(arg0: $SlicerBlockEntity$$Type)

public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "kjs$self"(): $IItemHandler
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "isMutable"(): boolean
public "getSlots"(): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "isEmpty"(): boolean
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "clear"(arg0: $ItemPredicate$$Type): void
public "clear"(): void
public "find"(arg0: $ItemPredicate$$Type): integer
public "find"(): integer
public "count"(): integer
public "count"(arg0: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "countNonEmpty"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "asContainer"(): $Container
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicerItemHandler$$Type = ($SlicerItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicerItemHandler_ = $SlicerItemHandler$$Type;
}}
declare module "com.possible_triangle.sliceanddice.block.sprinkler.SprinklerBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SprinklerBlockEntity, $SprinklerBlockEntity$$Type} from "com.possible_triangle.sliceanddice.block.sprinkler.SprinklerBlockEntity"
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
import {$SprinklerBlock$Companion, $SprinklerBlock$Companion$$Type} from "com.possible_triangle.sliceanddice.block.sprinkler.SprinklerBlock$Companion"
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
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SprinklerBlock extends $Block implements $IWrenchable, $IBE<($SprinklerBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "Companion": $SprinklerBlock$Companion
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

public "getBlockEntityClass"(): $Class<($SprinklerBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($SprinklerBlockEntity)>
public static "access$getSHAPE$cp"(): $VoxelShape
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $SprinklerBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($SprinklerBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SprinklerBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SprinklerBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($SprinklerBlockEntity)>): void
public "asHolder"(): $Holder<(any)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
get "blockEntityClass"(): $Class<($SprinklerBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($SprinklerBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SprinklerBlock$$Type = ($SprinklerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SprinklerBlock_ = $SprinklerBlock$$Type;
}}
declare module "com.possible_triangle.sliceanddice.block.sprinkler.SprinklerBlock$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"

export class $SprinklerBlock$Companion {

constructor(arg0: $DefaultConstructorMarker$$Type)

public "getSHAPE"(): $VoxelShape
get "sHAPE"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SprinklerBlock$Companion$$Type = ($SprinklerBlock$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SprinklerBlock$Companion_ = $SprinklerBlock$Companion$$Type;
}}
declare module "com.possible_triangle.sliceanddice.block.sprinkler.WetAir$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $WetAir$Companion {

constructor(arg0: $DefaultConstructorMarker$$Type)

public "check"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WetAir$Companion$$Type = ($WetAir$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WetAir$Companion_ = $WetAir$Companion$$Type;
}}
declare module "com.possible_triangle.sliceanddice.recipe.CuttingProcessingRecipe$Params" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CuttingProcessingRecipe$Params$Companion, $CuttingProcessingRecipe$Params$Companion$$Type} from "com.possible_triangle.sliceanddice.recipe.CuttingProcessingRecipe$Params$Companion"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ProcessingRecipeParams, $ProcessingRecipeParams$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipeParams"

export class $CuttingProcessingRecipe$Params extends $ProcessingRecipeParams {
static readonly "Companion": $CuttingProcessingRecipe$Params$Companion
static "CODEC": $MapCodec<($ProcessingRecipeParams)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ProcessingRecipeParams)>

constructor()

public "getTool"(): $Ingredient
public static "access$getCODEC$cp"(): $MapCodec<(any)>
public "getConverted"(): boolean
public "setTool"(arg0: $Ingredient$$Type): void
public "setConverted"(arg0: boolean): void
public static "access$getSTREAM_CODEC$cp"(): $StreamCodec<(any), (any)>
get "tool"(): $Ingredient
get "converted"(): boolean
set "tool"(value: $Ingredient$$Type)
set "converted"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuttingProcessingRecipe$Params$$Type = ($CuttingProcessingRecipe$Params);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuttingProcessingRecipe$Params_ = $CuttingProcessingRecipe$Params$$Type;
}}
declare module "com.possible_triangle.sliceanddice.block.slicer.SlicerArmInteractionType" {
import {$ArmInteractionPointType, $ArmInteractionPointType$$Type} from "com.simibubi.create.content.kinetics.mechanicalArm.ArmInteractionPointType"
import {$ArmInteractionPoint, $ArmInteractionPoint$$Type} from "com.simibubi.create.content.kinetics.mechanicalArm.ArmInteractionPoint"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SlicerArmInteractionType extends $ArmInteractionPointType {
static readonly "SORTED_TYPES_VIEW": $List<($ArmInteractionPointType)>
static readonly "INSTANCE": $SlicerArmInteractionType


public "canCreatePoint"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "createPoint"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ArmInteractionPoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicerArmInteractionType$$Type = ($SlicerArmInteractionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicerArmInteractionType_ = $SlicerArmInteractionType$$Type;
}}
declare module "com.possible_triangle.sliceanddice.recipe.CuttingProcessingRecipe$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$IRecipeTypeInfo, $IRecipeTypeInfo$$Type} from "com.simibubi.create.foundation.recipe.IRecipeTypeInfo"

export class $CuttingProcessingRecipe$Companion implements $IRecipeTypeInfo {

constructor(arg0: $DefaultConstructorMarker$$Type)

public "getId"(): $ResourceLocation
public "getType"<I extends $RecipeInput, R extends $Recipe<(I)>>(): $RecipeType<(R)>
public "getSerializer"<T extends $RecipeSerializer<(any)>>(): T
get "id"(): $ResourceLocation
get "type"(): $RecipeType<(R)>
get "serializer"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuttingProcessingRecipe$Companion$$Type = ($CuttingProcessingRecipe$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuttingProcessingRecipe$Companion_ = $CuttingProcessingRecipe$Companion$$Type;
}}
declare module "com.possible_triangle.sliceanddice.recipe.CuttingProcessingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CuttingProcessingRecipe, $CuttingProcessingRecipe$$Type} from "com.possible_triangle.sliceanddice.recipe.CuttingProcessingRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CuttingProcessingRecipe$Serializer implements $RecipeSerializer<($CuttingProcessingRecipe)> {
static readonly "INSTANCE": $CuttingProcessingRecipe$Serializer


public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CuttingProcessingRecipe)>
public "codec"(): $MapCodec<($CuttingProcessingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuttingProcessingRecipe$Serializer$$Type = ($CuttingProcessingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuttingProcessingRecipe$Serializer_ = $CuttingProcessingRecipe$Serializer$$Type;
}}
declare module "com.possible_triangle.sliceanddice.block.sprinkler.SprinklerBlockEntity$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"

export class $SprinklerBlockEntity$Companion {

constructor(arg0: $DefaultConstructorMarker$$Type)

public "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SprinklerBlockEntity$Companion$$Type = ($SprinklerBlockEntity$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SprinklerBlockEntity$Companion_ = $SprinklerBlockEntity$Companion$$Type;
}}
declare module "com.possible_triangle.sliceanddice.block.sprinkler.WetAir" {
import {$WetAir$Companion, $WetAir$Companion$$Type} from "com.possible_triangle.sliceanddice.block.sprinkler.WetAir$Companion"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$AirBlock, $AirBlock$$Type} from "net.minecraft.world.level.block.AirBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WetAir extends $AirBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($AirBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "Companion": $WetAir$Companion
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

public static "check"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WetAir$$Type = ($WetAir);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WetAir_ = $WetAir$$Type;
}}
declare module "com.possible_triangle.sliceanddice.mixins.RecipeManagerAccessor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"

export interface $RecipeManagerAccessor {

 "getByName"(): $Map<($ResourceLocation), ($RecipeHolder<(any)>)>
 "setByName"(arg0: $Map$$Type<($ResourceLocation$$Type), ($RecipeHolder$$Type<(any)>)>): void
 "setByType"(arg0: $Multimap$$Type<($RecipeType$$Type<(any)>), ($RecipeHolder$$Type<(any)>)>): void
 "getByType"(): $Multimap<($RecipeType<(any)>), ($RecipeHolder<(any)>)>
get "byName"(): $Map<($ResourceLocation), ($RecipeHolder<(any)>)>
set "byName"(value: $Map$$Type<($ResourceLocation$$Type), ($RecipeHolder$$Type<(any)>)>)
set "byType"(value: $Multimap$$Type<($RecipeType$$Type<(any)>), ($RecipeHolder$$Type<(any)>)>)
get "byType"(): $Multimap<($RecipeType<(any)>), ($RecipeHolder<(any)>)>
}

export namespace $RecipeManagerAccessor {
const probejs$$marker: never
}
export class $RecipeManagerAccessor$$Static implements $RecipeManagerAccessor {


 "getByName"(): $Map<($ResourceLocation), ($RecipeHolder<(any)>)>
 "setByName"(arg0: $Map$$Type<($ResourceLocation$$Type), ($RecipeHolder$$Type<(any)>)>): void
 "setByType"(arg0: $Multimap$$Type<($RecipeType$$Type<(any)>), ($RecipeHolder$$Type<(any)>)>): void
 "getByType"(): $Multimap<($RecipeType<(any)>), ($RecipeHolder<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeManagerAccessor$$Type = ($RecipeManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeManagerAccessor_ = $RecipeManagerAccessor$$Type;
}}
declare module "com.possible_triangle.sliceanddice.block.slicer.SlicerBlockEntity" {
import {$SlicerBlockEntity$Companion, $SlicerBlockEntity$Companion$$Type} from "com.possible_triangle.sliceanddice.block.slicer.SlicerBlockEntity$Companion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BasinOperatingBlockEntity, $BasinOperatingBlockEntity$$Type} from "com.simibubi.create.content.processing.basin.BasinOperatingBlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$$Type} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$SlicerItemHandler, $SlicerItemHandler$$Type} from "com.possible_triangle.sliceanddice.block.slicer.SlicerItemHandler"
import {$DeferralBehaviour, $DeferralBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.simple.DeferralBehaviour"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$PressingBehaviour, $PressingBehaviour$$Type} from "com.simibubi.create.content.kinetics.press.PressingBehaviour"
import {$TransportedItemStack, $TransportedItemStack$$Type} from "com.simibubi.create.content.kinetics.belt.transport.TransportedItemStack"
import {$PressingBehaviour$PressingBehaviourSpecifics, $PressingBehaviour$PressingBehaviourSpecifics$$Type} from "com.simibubi.create.content.kinetics.press.PressingBehaviour$PressingBehaviourSpecifics"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SlicerBlockEntity extends $BasinOperatingBlockEntity implements $PressingBehaviour$PressingBehaviourSpecifics {
static readonly "Companion": $SlicerBlockEntity$Companion
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "basinRemoved": boolean
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
 "source": $BlockPos
 "basinChecker": $DeferralBehaviour
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "continueWithPreviousRecipe"(): boolean
public "getRenderedHeadRotationSpeed"(): float
public "addToTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "playSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getParticleAmount"(): integer
public "getCorrectDirection"(): boolean
public "getCuttingBehaviour"(): $PressingBehaviour
public "getRenderedHeadOffset"(arg0: float): float
public "tryProcessInBasin"(arg0: boolean): boolean
public "tryProcessOnBelt"(arg0: $TransportedItemStack$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean): boolean
public "canProcessInBulk"(): boolean
public "tryProcessInWorld"(arg0: $ItemEntity$$Type, arg1: boolean): boolean
public "startProcessingBasin"(): void
public "onPressingCompleted"(): void
public "getKineticSpeed"(): float
public static "access$getInventory$p"(arg0: $SlicerBlockEntity$$Type): $SlicerItemHandler
public "setHeldItem"(arg0: $ItemStack$$Type): void
public "getCanProcess"(): boolean
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getHeldItem"(): $ItemStack
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "renderedHeadRotationSpeed"(): float
get "particleAmount"(): integer
get "correctDirection"(): boolean
get "cuttingBehaviour"(): $PressingBehaviour
get "kineticSpeed"(): float
set "heldItem"(value: $ItemStack$$Type)
get "canProcess"(): boolean
get "heldItem"(): $ItemStack
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicerBlockEntity$$Type = ($SlicerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicerBlockEntity_ = $SlicerBlockEntity$$Type;
}}
declare module "com.possible_triangle.sliceanddice.block.slicer.SlicerBlockEntity$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"

export class $SlicerBlockEntity$Companion {

constructor(arg0: $DefaultConstructorMarker$$Type)

public "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicerBlockEntity$Companion$$Type = ($SlicerBlockEntity$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicerBlockEntity$Companion_ = $SlicerBlockEntity$Companion$$Type;
}}
declare module "com.possible_triangle.sliceanddice.block.sprinkler.SprinklerBlockEntity" {
import {$SmartFluidTankBehaviour, $SmartFluidTankBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.fluid.SmartFluidTankBehaviour"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$SprinklerBlockEntity$Companion, $SprinklerBlockEntity$Companion$$Type} from "com.possible_triangle.sliceanddice.block.sprinkler.SprinklerBlockEntity$Companion"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$$Type} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SprinklerBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation {
static readonly "Companion": $SprinklerBlockEntity$Companion
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tick"(): void
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public static "access$getTank$p"(arg0: $SprinklerBlockEntity$$Type): $SmartFluidTankBehaviour
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SprinklerBlockEntity$$Type = ($SprinklerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SprinklerBlockEntity_ = $SprinklerBlockEntity$$Type;
}}
declare module "com.possible_triangle.sliceanddice.block.slicer.SlicerBlock" {
import {$KineticBlock, $KineticBlock$$Type} from "com.simibubi.create.content.kinetics.base.KineticBlock"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IRotate$SpeedLevel, $IRotate$SpeedLevel$$Type} from "com.simibubi.create.content.kinetics.base.IRotate$SpeedLevel"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ICogWheel, $ICogWheel$$Type} from "com.simibubi.create.content.kinetics.simpleRelays.ICogWheel"
import {$SlicerBlockEntity, $SlicerBlockEntity$$Type} from "com.possible_triangle.sliceanddice.block.slicer.SlicerBlockEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SlicerBlock extends $KineticBlock implements $IBE<($SlicerBlockEntity)>, $ICogWheel {
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

public "getParticleTargetRadius"(): float
public "getParticleInitialRadius"(): float
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getBlockEntityClass"(): $Class<($SlicerBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($SlicerBlockEntity)>
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $SlicerBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($SlicerBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SlicerBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SlicerBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($SlicerBlockEntity)>): void
public "isDedicatedCogWheel"(): boolean
public static "isDedicatedCogWheel"(arg0: $Block$$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$$Type): boolean
public "isSmallCog"(): boolean
public static "isSmallCog"(arg0: $Block$$Type): boolean
public static "isSmallCog"(arg0: $BlockState$$Type): boolean
public "isLargeCog"(): boolean
public static "isLargeCog"(arg0: $Block$$Type): boolean
public static "isLargeCog"(arg0: $BlockState$$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
get "particleTargetRadius"(): float
get "particleInitialRadius"(): float
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
get "blockEntityClass"(): $Class<($SlicerBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($SlicerBlockEntity)>
get "dedicatedCogWheel"(): boolean
get "smallCog"(): boolean
get "largeCog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlicerBlock$$Type = ($SlicerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlicerBlock_ = $SlicerBlock$$Type;
}}
