declare module "earth.terrarium.chipped.common.items.WorkbenchItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $WorkbenchItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchItem$$Type = ($WorkbenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchItem_ = $WorkbenchItem$$Type;
}}
declare module "earth.terrarium.chipped.common.blocks.WorkbenchBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$WorkbenchBlock$WorkbenchModelType, $WorkbenchBlock$WorkbenchModelType$$Type} from "earth.terrarium.chipped.common.blocks.WorkbenchBlock$WorkbenchModelType"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WorkbenchBlock extends $HorizontalDirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WorkbenchBlock)>
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
static readonly "MODEL_TYPE": $EnumProperty<($WorkbenchBlock$WorkbenchModelType)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
/**
 * 
 * @deprecated
 */
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchBlock$$Type = ($WorkbenchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchBlock_ = $WorkbenchBlock$$Type;
}}
declare module "earth.terrarium.chipped.common.blocks.SpecialPointedDripstoneBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Fallable, $Fallable$$Type} from "net.minecraft.world.level.block.Fallable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$DripstoneThickness, $DripstoneThickness$$Type} from "net.minecraft.world.level.block.state.properties.DripstoneThickness"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$FallingBlockEntity, $FallingBlockEntity$$Type} from "net.minecraft.world.entity.item.FallingBlockEntity"
import {$BlockBehaviour$OffsetType, $BlockBehaviour$OffsetType$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$OffsetType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$Random, $Random$$Type} from "java.util.Random"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SpecialPointedDripstoneBlock extends $Block implements $Fallable, $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "TIP_DIRECTION": $DirectionProperty
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "THICKNESS": $EnumProperty<($DripstoneThickness)>
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $Random$$Type): void
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "fallOn"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, fallDistance: float): void
public "isPathfindable"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, type: $PathComputationType$$Type): boolean
public "randomTick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $Random$$Type): void
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "animateTick"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, random: $Random$$Type): void
public static "canDrip"(state: $BlockState$$Type): boolean
public "getOffsetType"(): $BlockBehaviour$OffsetType
public "onBrokenAfterFall"(level: $Level$$Type, pos: $BlockPos$$Type, fallingBlock: $FallingBlockEntity$$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "onProjectileHit"(level: $Level$$Type, state: $BlockState$$Type, hit: $BlockHitResult$$Type, projectile: $Projectile$$Type): void
public "getMaxHorizontalOffset"(): float
public "getOcclusionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "getPistonPushReaction"(state: $BlockState$$Type): $PushReaction
public static "growStalactiteOrStalagmiteIfPossible"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $Random$$Type): void
public "isCollisionShapeFullBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public static "maybeFillCauldron"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, randChance: float): void
public "getHurtsEntitySelector"(): $Predicate<($Entity)>
public static "getCauldronFillFluidType"(level: $Level$$Type, pos: $BlockPos$$Type): $Fluid
public "onLand"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $FallingBlockEntity$$Type): void
public "getFallDamageSource"(arg0: $Entity$$Type): $DamageSource
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "offsetType"(): $BlockBehaviour$OffsetType
get "maxHorizontalOffset"(): float
get "hurtsEntitySelector"(): $Predicate<($Entity)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialPointedDripstoneBlock$$Type = ($SpecialPointedDripstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialPointedDripstoneBlock_ = $SpecialPointedDripstoneBlock$$Type;
}}
declare module "earth.terrarium.chipped.common.blocks.WorkbenchBlock$WorkbenchModelType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $WorkbenchBlock$WorkbenchModelType extends $Enum<($WorkbenchBlock$WorkbenchModelType)> implements $StringRepresentable {
static readonly "SIDE": $WorkbenchBlock$WorkbenchModelType
static readonly "MAIN": $WorkbenchBlock$WorkbenchModelType


public "toString"(): StringJS
public static "values"(): ($WorkbenchBlock$WorkbenchModelType)[]
public static "valueOf"(name: StringJS): $WorkbenchBlock$WorkbenchModelType
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchBlock$WorkbenchModelType$$Type = (("main") | ("side"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchBlock$WorkbenchModelType_ = $WorkbenchBlock$WorkbenchModelType$$Type;
}}
declare module "earth.terrarium.chipped.common.recipes.ChippedRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CodecRecipe, $CodecRecipe$$Type} from "com.teamresourceful.resourcefullib.common.recipe.CodecRecipe"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ByteCodec, $ByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$CodecRecipeSerializer, $CodecRecipeSerializer$$Type} from "com.teamresourceful.resourcefullib.common.recipe.CodecRecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ChippedRecipe extends $Record implements $CodecRecipe<($RecipeInput)> {
static readonly "CODEC": $MapCodec<($ChippedRecipe)>
static readonly "NETWORK_CODEC": $ByteCodec<($ChippedRecipe)>

constructor(ingredients: $List$$Type<($Ingredient$$Type)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(recipeInput: $RecipeInput$$Type, level: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "ingredients"(): $List<($Ingredient)>
public "getResults"(stack: $ItemStack$$Type): $Stream<($ItemStack)>
public "serializer"(): $CodecRecipeSerializer<($CodecRecipe<($RecipeInput)>)>
public "getResultItem"(provider: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(container: $RecipeInput$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(pWidth: integer, pHeight: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "special"(): boolean
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChippedRecipe$$Type = ({"ingredients"?: $List$$Type<($Ingredient$$Type)>}) | ([ingredients?: $List$$Type<($Ingredient$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChippedRecipe_ = $ChippedRecipe$$Type;
}}
declare module "earth.terrarium.chipped.common.blocks.SpecialLanternBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SpecialLanternBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "THICC_LANTERN_SHAPE": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "CHONK_LANTERN_SHAPE": $VoxelShape
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "TALL_LANTERN_SHAPE": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "DONUT_LANTERN_SHAPE_EAST": $VoxelShape
static readonly "DONUT_LANTERN_SHAPE_NORTH": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type, shape: $VoxelShape$$Type)
constructor(properties: $BlockBehaviour$Properties$$Type, toEast: $VoxelShape$$Type, toNorth: $VoxelShape$$Type)

public "getShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "getShape"(state: $BlockState$$Type): $VoxelShape
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialLanternBlock$$Type = ($SpecialLanternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialLanternBlock_ = $SpecialLanternBlock$$Type;
}}
declare module "earth.terrarium.chipped.common.blocks.DirectionBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DirectionBlock extends $HorizontalDirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($HorizontalDirectionalBlock)>
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionBlock$$Type = ($DirectionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionBlock_ = $DirectionBlock$$Type;
}}
