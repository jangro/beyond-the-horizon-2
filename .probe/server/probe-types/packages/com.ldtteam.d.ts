declare module "com.ldtteam.domumornamentum.item.decoration.TimberFrameBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$TimberFrameBlock, $TimberFrameBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.TimberFrameBlock"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TimberFrameBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $TimberFrameBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimberFrameBlockItem$$Type = ($TimberFrameBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimberFrameBlockItem_ = $TimberFrameBlockItem$$Type;
}}
declare module "com.ldtteam.blockui.Alignment" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Alignment extends $Enum<($Alignment)> {
static readonly "TOP_LEFT": $Alignment
static readonly "TOP_MIDDLE": $Alignment
static readonly "BOTTOM_RIGHT": $Alignment
static readonly "TOP_RIGHT": $Alignment
static readonly "BOTTOM_MIDDLE": $Alignment
static readonly "MIDDLE": $Alignment
static readonly "MIDDLE_RIGHT": $Alignment
static readonly "BOTTOM_LEFT": $Alignment
static readonly "MIDDLE_LEFT": $Alignment


public static "values"(): ($Alignment)[]
public static "valueOf"(arg0: string): $Alignment
public "isHorizontalCentered"(): boolean
public "isBottomAligned"(): boolean
public "isVerticalCentered"(): boolean
public "isRightAligned"(): boolean
get "horizontalCentered"(): boolean
get "bottomAligned"(): boolean
get "verticalCentered"(): boolean
get "rightAligned"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Alignment$$Type = (("top_left") | ("top_middle") | ("top_right") | ("middle_left") | ("middle") | ("middle_right") | ("bottom_left") | ("bottom_middle") | ("bottom_right"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Alignment_ = $Alignment$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $ICachedItemGroupBlock {

 "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
 "resetCache"(): void
}

export namespace $ICachedItemGroupBlock {
const probejs$$marker: never
}
export class $ICachedItemGroupBlock$$Static implements $ICachedItemGroupBlock {


 "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
 "resetCache"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICachedItemGroupBlock$$Type = ($ICachedItemGroupBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICachedItemGroupBlock_ = $ICachedItemGroupBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.AbstractBlockPane" {
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IronBarsBlock, $IronBarsBlock$$Type} from "net.minecraft.world.level.block.IronBarsBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlockPane<B extends $AbstractBlockPane<(B)>> extends $IronBarsBlock implements $IDOBlock<(B)> {
static "PROPERTIES": $ImmutableMap<($Direction), ($BooleanProperty)>
 "shapeByIndex": ($VoxelShape)[]
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($IronBarsBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "collisionShapeByIndex": ($VoxelShape)[]
 "hasCollision": boolean


public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public "asHolder"(): $Holder<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockPane$$Type<B> = ($AbstractBlockPane<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockPane_<B> = $AbstractBlockPane$$Type<(B)>;
}}
declare module "com.ldtteam.domumornamentum.block.types.DoorType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $DoorType extends $Enum<($DoorType)> implements $StringRepresentable {
static readonly "WAFFLE": $DoorType
static readonly "VERTICALLY_STRIPED": $DoorType
static readonly "FULL": $DoorType
static readonly "PORT_MANTEAU": $DoorType


public static "values"(): ($DoorType)[]
public static "valueOf"(arg0: string): $DoorType
public "getTranslationKeySuffix"(): string
public "getDefaultEnglishTranslation"(): string
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "translationKeySuffix"(): string
get "defaultEnglishTranslation"(): string
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorType$$Type = (("full") | ("port_manteau") | ("vertically_striped") | ("waffle"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoorType_ = $DoorType$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.PillarBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$PillarShapeType, $PillarShapeType$$Type} from "com.ldtteam.domumornamentum.block.types.PillarShapeType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$AbstractBlock, $AbstractBlock$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PillarBlock extends $AbstractBlock<($PillarBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COLUMN": $EnumProperty<($PillarShapeType)>
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
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

constructor()

public "destroy"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PillarBlock$$Type = ($PillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PillarBlock_ = $PillarBlock$$Type;
}}
declare module "com.ldtteam.structurize.items.ItemCaliper" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractItemWithPosSelector, $AbstractItemWithPosSelector$$Type} from "com.ldtteam.structurize.items.AbstractItemWithPosSelector"

export class $ItemCaliper extends $AbstractItemWithPosSelector {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "onAirRightClick"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $ItemStack$$Type): $InteractionResult
public "getRegisteredItemInstance"(): $AbstractItemWithPosSelector
get "registeredItemInstance"(): $AbstractItemWithPosSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCaliper$$Type = ($ItemCaliper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCaliper_ = $ItemCaliper$$Type;
}}
declare module "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData$Builder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"

export class $MaterialTextureData$Builder {

constructor()

public "build"(): $MaterialTextureData
public "setComponent"(arg0: $ResourceLocation$$Type, arg1: $Block$$Type): $MaterialTextureData$Builder
public "writeToItemStack"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialTextureData$Builder$$Type = ($MaterialTextureData$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialTextureData$Builder_ = $MaterialTextureData$Builder$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.AbstractBlockDirectional" {
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlockDirectional<B extends $AbstractBlockDirectional<(B)>> extends $HorizontalDirectionalBlock implements $IDOBlock<(B)> {
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public "asHolder"(): $Holder<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockDirectional$$Type<B> = ($AbstractBlockDirectional<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockDirectional_<B> = $AbstractBlockDirectional$$Type<(B)>;
}}
declare module "com.ldtteam.structurize.util.BlueprintPositionInfo" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockInfo, $BlockInfo$$Type} from "com.ldtteam.structurize.util.BlockInfo"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlueprintPositionInfo {
readonly "entities": ($CompoundTag)[]

constructor(arg0: $BlockPos$$Type, arg1: $BlockInfo$$Type, arg2: ($CompoundTag$$Type)[])

public "getEntities"(): ($CompoundTag)[]
public "getPos"(): $BlockPos
public "getBlockInfo"(): $BlockInfo
get "entities"(): ($CompoundTag)[]
get "pos"(): $BlockPos
get "blockInfo"(): $BlockInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintPositionInfo$$Type = ($BlueprintPositionInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlueprintPositionInfo_ = $BlueprintPositionInfo$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.FramedLightBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$FramedLightBlock, $FramedLightBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.FramedLightBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $FramedLightBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $FramedLightBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedLightBlockItem$$Type = ($FramedLightBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedLightBlockItem_ = $FramedLightBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.types.FramedLightType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $FramedLightType extends $Enum<($FramedLightType)> implements $StringRepresentable {
static readonly "CROSSED": $FramedLightType
static readonly "LANTERN": $FramedLightType
static readonly "CENTER": $FramedLightType
static readonly "FRAMED": $FramedLightType
static readonly "VERTICAL": $FramedLightType
static readonly "FOUR": $FramedLightType
static readonly "HORIZONTAL": $FramedLightType


public "getName"(): string
public static "values"(): ($FramedLightType)[]
public static "valueOf"(arg0: string): $FramedLightType
public "getSerializedName"(): string
public "getLangName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "name"(): string
get "serializedName"(): string
get "langName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedLightType$$Type = (("vertical_light") | ("crossed_light") | ("framed_light") | ("horizontal_light") | ("fancy_light") | ("four_light") | ("center_light"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedLightType_ = $FramedLightType$$Type;
}}
declare module "com.ldtteam.blockui.BOGuiGraphics" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BlockStateRenderingData, $BlockStateRenderingData$$Type} from "com.ldtteam.blockui.mod.item.BlockStateRenderingData"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Cursor, $Cursor$$Type} from "com.ldtteam.blockui.util.cursor.Cursor"

export class $BOGuiGraphics extends $GuiGraphics {
 "minecraft": $Minecraft
static readonly "MIN_GUI_Z": float
static readonly "MAX_GUI_Z": float

constructor(arg0: $Minecraft$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$BufferSource$$Type)

public "drawString"(arg0: string, arg1: float, arg2: float, arg3: integer): integer
public "drawString"(arg0: string, arg1: float, arg2: float, arg3: integer, arg4: boolean): integer
public "setCursor"(arg0: $Cursor$$Type): void
public "renderItemDecorations"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): void
public "renderItemDecorations"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: string): void
public "applyCursor"(arg0: integer): void
public "renderBlockStateAsItem"(arg0: $BlockStateRenderingData$$Type, arg1: $ItemStack$$Type): void
public static "getAltSpeedFactor"(): double
public "popMvPose"(): void
public "pushMvApplyPose"(): void
public static "bufferSource"(arg0: $GuiGraphics$$Type): $MultiBufferSource
set "cursor"(value: $Cursor$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BOGuiGraphics$$Type = ($BOGuiGraphics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BOGuiGraphics_ = $BOGuiGraphics$$Type;
}}
declare module "com.ldtteam.structurize.blocks.interfaces.ILeveledBlueprintAnchorBlock" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $ILeveledBlueprintAnchorBlock {

 "getLevel"(arg0: $CompoundTag$$Type): integer

(arg0: $CompoundTag): integer
}

export namespace $ILeveledBlueprintAnchorBlock {
const probejs$$marker: never
}
export class $ILeveledBlueprintAnchorBlock$$Static implements $ILeveledBlueprintAnchorBlock {


 "getLevel"(arg0: $CompoundTag$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILeveledBlueprintAnchorBlock$$Type = ((arg0: $CompoundTag) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILeveledBlueprintAnchorBlock_ = $ILeveledBlueprintAnchorBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.types.ShingleShapeType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ShingleShapeType extends $Enum<($ShingleShapeType)> {
static readonly "CONCAVE": $ShingleShapeType
static readonly "CONVEX": $ShingleShapeType
static readonly "STRAIGHT": $ShingleShapeType


public static "values"(): ($ShingleShapeType)[]
public static "valueOf"(arg0: string): $ShingleShapeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShingleShapeType$$Type = (("concave") | ("convex") | ("straight"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShingleShapeType_ = $ShingleShapeType$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.PostBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AbstractPostBlock, $AbstractPostBlock$$Type} from "com.ldtteam.domumornamentum.block.AbstractPostBlock"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$PostType, $PostType$$Type} from "com.ldtteam.domumornamentum.block.types.PostType"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PostBlock extends $AbstractPostBlock<($PostBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPRIGHT": $BooleanProperty
static readonly "TYPE": $EnumProperty<($PostType)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PostBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $List<($IMateriallyTexturedBlockComponent)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $List<($IMateriallyTexturedBlockComponent)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostBlock$$Type = ($PostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostBlock_ = $PostBlock$$Type;
}}
declare module "com.ldtteam.blockui.views.BOWindow" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BOWindow$WindowRenderType, $BOWindow$WindowRenderType$$Type} from "com.ldtteam.blockui.views.BOWindow$WindowRenderType"
import {$View, $View$$Type} from "com.ldtteam.blockui.views.View"
import {$BOGuiGraphics, $BOGuiGraphics$$Type} from "com.ldtteam.blockui.BOGuiGraphics"
import {$BOScreen, $BOScreen$$Type} from "com.ldtteam.blockui.BOScreen"
import {$PaneParams, $PaneParams$$Type} from "com.ldtteam.blockui.PaneParams"

export class $BOWindow extends $View {
static readonly "DEFAULT_HEIGHT": integer
static readonly "HALF_BIAS": double
static readonly "DEFAULT_WIDTH": integer

constructor(arg0: integer, arg1: integer)
constructor()
constructor(arg0: $ResourceLocation$$Type)

public "close"(): void
public "open"(): void
public "onClosed"(): void
public "getRenderType"(): $BOWindow$WindowRenderType
public "getScreen"(): $BOScreen
public "onMouseReleased"(arg0: double, arg1: double): boolean
public "getXmlResourceLocation"(): $ResourceLocation
public "doesWindowPauseGame"(): boolean
public "onUnhandledKeyTyped"(arg0: integer, arg1: integer): boolean
public "loadParams"(arg0: $PaneParams$$Type): void
public "hasLightbox"(): boolean
public "onOpened"(): void
public "onKeyTyped"(arg0: character, arg1: integer): boolean
public "openAsLayer"(): void
public "drawSelf"(arg0: $BOGuiGraphics$$Type, arg1: double, arg2: double): void
get "renderType"(): $BOWindow$WindowRenderType
get "screen"(): $BOScreen
get "xmlResourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BOWindow$$Type = ($BOWindow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BOWindow_ = $BOWindow$$Type;
}}
declare module "com.ldtteam.structurize.placement.structure.IStructureHandler" {
import {$Blueprint, $Blueprint$$Type} from "com.ldtteam.structurize.blueprints.v1.Blueprint"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RotationMirror, $RotationMirror$$Type} from "com.ldtteam.structurize.api.RotationMirror"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IStructureHandler {

 "onCompletion"(): void
 "consume"(arg0: $List$$Type<($ItemStack$$Type)>): void
 "isCreative"(): boolean
 "getInventory"(): $IItemHandler
 "isReady"(): boolean
 "setMd5"(arg0: string): void
 "getMd5"(): string
 "getRotationMirror"(): $RotationMirror
 "setBlueprint"(arg0: $Blueprint$$Type): void
 "fancyPlacement"(): boolean
 "getWorld"(): $Level
 "getHeldItem"(): $ItemStack
 "getWorldPos"(): $BlockPos
 "getBluePrint"(): $Blueprint
 "triggerSuccess"(arg0: $BlockPos$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean): void
 "hasBluePrint"(): boolean
 "isCorrectMD5"(arg0: string): boolean
 "isStackFree"(arg0: $ItemStack$$Type): boolean
 "allowReplace"(): boolean
 "getMaxBlocksCheckedPerCall"(): integer
 "shouldBlocksBeConsideredEqual"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
 "getStructurePosFromWorld"(arg0: $BlockPos$$Type): $BlockPos
 "getProgressPosInWorld"(arg0: $BlockPos$$Type): $BlockPos
 "triggerEntitySuccess"(arg0: $BlockPos$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean): void
 "getStepsPerCall"(): integer
 "replaceWithSolidBlock"(arg0: $BlockState$$Type): boolean
 "hasRequiredItems"(arg0: $List$$Type<($ItemStack$$Type)>): boolean
 "prePlacementLogic"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
 "getSolidBlockForPos"(arg0: $BlockPos$$Type, arg1: $Function$$Type<($BlockPos), ($BlockState$$Type)>): $BlockState
get "creative"(): boolean
get "inventory"(): $IItemHandler
get "ready"(): boolean
set "md5"(value: string)
get "md5"(): string
get "rotationMirror"(): $RotationMirror
set "blueprint"(value: $Blueprint$$Type)
get "world"(): $Level
get "heldItem"(): $ItemStack
get "worldPos"(): $BlockPos
get "bluePrint"(): $Blueprint
get "maxBlocksCheckedPerCall"(): integer
get "stepsPerCall"(): integer
}

export namespace $IStructureHandler {
const probejs$$marker: never
}
export class $IStructureHandler$$Static implements $IStructureHandler {


 "onCompletion"(): void
 "consume"(arg0: $List$$Type<($ItemStack$$Type)>): void
 "isCreative"(): boolean
 "getInventory"(): $IItemHandler
 "isReady"(): boolean
 "setMd5"(arg0: string): void
 "getMd5"(): string
 "getRotationMirror"(): $RotationMirror
 "setBlueprint"(arg0: $Blueprint$$Type): void
 "fancyPlacement"(): boolean
 "getWorld"(): $Level
 "getHeldItem"(): $ItemStack
 "getWorldPos"(): $BlockPos
 "getBluePrint"(): $Blueprint
 "triggerSuccess"(arg0: $BlockPos$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean): void
 "hasBluePrint"(): boolean
 "isCorrectMD5"(arg0: string): boolean
 "isStackFree"(arg0: $ItemStack$$Type): boolean
 "allowReplace"(): boolean
 "getMaxBlocksCheckedPerCall"(): integer
 "shouldBlocksBeConsideredEqual"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
 "getStructurePosFromWorld"(arg0: $BlockPos$$Type): $BlockPos
 "getProgressPosInWorld"(arg0: $BlockPos$$Type): $BlockPos
 "triggerEntitySuccess"(arg0: $BlockPos$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean): void
 "getStepsPerCall"(): integer
 "replaceWithSolidBlock"(arg0: $BlockState$$Type): boolean
 "hasRequiredItems"(arg0: $List$$Type<($ItemStack$$Type)>): boolean
 "prePlacementLogic"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
 "getSolidBlockForPos"(arg0: $BlockPos$$Type, arg1: $Function$$Type<($BlockPos), ($BlockState$$Type)>): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStructureHandler$$Type = ($IStructureHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStructureHandler_ = $IStructureHandler$$Type;
}}
declare module "com.ldtteam.structurize.api.RotationMirror" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RotationMirror extends $Enum<($RotationMirror)> {
static readonly "R180": $RotationMirror
static readonly "MIR_R90": $RotationMirror
static readonly "CODEC": $Codec<($RotationMirror)>
static readonly "NOT_MIRRORED": ($RotationMirror)[]
static readonly "R90": $RotationMirror
static readonly "MIRRORED": ($RotationMirror)[]
static readonly "NONE": $RotationMirror
static readonly "MIR_R270": $RotationMirror
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RotationMirror)>
static readonly "R270": $RotationMirror
static readonly "MIR_NONE": $RotationMirror
static readonly "MIR_R180": $RotationMirror


public static "values"(): ($RotationMirror)[]
public static "valueOf"(arg0: string): $RotationMirror
public "add"(arg0: $RotationMirror$$Type): $RotationMirror
public static "of"(arg0: $Rotation$$Type, arg1: $Mirror$$Type): $RotationMirror
public "isMirrored"(): boolean
public "rotate"(arg0: $Rotation$$Type): $RotationMirror
public "rotation"(): $Rotation
public "mirror"(): $Mirror
/**
 * 
 * @deprecated
 */
public "applyToBlockState"(arg0: $BlockState$$Type): $BlockState
public "applyToBlockState"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $BlockState
public "mirrorate"(arg0: $Mirror$$Type): $RotationMirror
public "mirrorate"(): $RotationMirror
public "applyToPos"(arg0: $BlockPos$$Type): $BlockPos
public "applyToPos"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): $BlockPos
public "applyToPos"(arg0: $Vec3$$Type, arg1: $BlockPos$$Type): $Vec3
public "applyToPos"(arg0: $Vec3$$Type): $Vec3
public "calcDifferenceTowards"(arg0: $RotationMirror$$Type): $RotationMirror
get "mirrored"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationMirror$$Type = (("none") | ("r90") | ("r180") | ("r270") | ("mir_none") | ("mir_r90") | ("mir_r180") | ("mir_r270"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationMirror_ = $RotationMirror$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.AbstractBlockFence" {
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FenceBlock, $FenceBlock$$Type} from "net.minecraft.world.level.block.FenceBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlockFence<B extends $AbstractBlockFence<(B)>> extends $FenceBlock implements $IDOBlock<(B)> {
 "shapeByIndex": ($VoxelShape)[]
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FenceBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "collisionShapeByIndex": ($VoxelShape)[]
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "getDirectionalProperties"(): $Map<($Direction), ($BooleanProperty)>
public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public "asHolder"(): $Holder<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockFence$$Type<B> = ($AbstractBlockFence<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockFence_<B> = $AbstractBlockFence$$Type<(B)>;
}}
declare module "com.ldtteam.structurize.blocks.schematic.BlockTagSubstitution" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockSubstitution, $BlockSubstitution$$Type} from "com.ldtteam.structurize.blocks.schematic.BlockSubstitution"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IAnchorBlock, $IAnchorBlock$$Type} from "com.ldtteam.structurize.blocks.interfaces.IAnchorBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockTagSubstitution extends $BlockSubstitution implements $IAnchorBlock, $EntityBlock {
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

constructor()

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTagSubstitution$$Type = ($BlockTagSubstitution);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTagSubstitution_ = $BlockTagSubstitution$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.vanilla.FenceGateBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractBlockFenceGate, $AbstractBlockFenceGate$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlockFenceGate"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$FenceGateBlock as $FenceGateBlock$0, $FenceGateBlock$$Type as $FenceGateBlock$0$$Type} from "net.minecraft.world.level.block.FenceGateBlock"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FenceGateBlock extends $AbstractBlockFenceGate<($FenceGateBlock)> implements $IMateriallyTexturedBlock, $EntityBlock, $ICachedItemGroupBlock {
static readonly "IN_WALL": $BooleanProperty
readonly "closeSound": $SoundEvent
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FenceGateBlock$0)>
readonly "openSound": $SoundEvent
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceGateBlock$$Type = ($FenceGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceGateBlock_ = $FenceGateBlock$$Type;
}}
declare module "com.ldtteam.blockui.UiRenderMacros" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$GuiSpriteScaling, $GuiSpriteScaling$$Type} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BufferBuilder, $BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$UiRenderMacros$ResolvedBlit, $UiRenderMacros$ResolvedBlit$$Type} from "com.ldtteam.blockui.UiRenderMacros$ResolvedBlit"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"

export class $UiRenderMacros {
static readonly "HALF_BIAS": double

constructor()

public static "fill"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public static "fill"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public static "line"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public static "line"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public static "blitSprite"(arg0: $PoseStack$$Type, arg1: $TextureAtlasSprite$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public static "blitSprite"(arg0: $PoseStack$$Type, arg1: $TextureAtlasSprite$$Type, arg2: $GuiSpriteScaling$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "fillGradient"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "fillGradient"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
public static "blit"(arg0: $PoseStack$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public static "blit"(arg0: $PoseStack$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer): void
public static "blit"(arg0: $PoseStack$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public static "blit"(arg0: $PoseStack$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float): void
public static "hLine"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public static "hLine"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public static "vLine"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public static "vLine"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public static "drawLineRectGradient"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "drawLineRectGradient"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public static "drawLineRectGradient"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer): void
public static "populateBlitTriangles"(arg0: $BufferBuilder$$Type, arg1: $Matrix4f$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
public static "populateFillTriangles"(arg0: $Matrix4f$$Type, arg1: $BufferBuilder$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public static "drawLineRect"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "drawLineRect"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public static "drawLineRect"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
public static "drawEntity"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: double, arg4: float, arg5: float, arg6: float, arg7: $Entity$$Type): void
public static "resolveSprite"(arg0: $TextureAtlasSprite$$Type, arg1: $GuiSpriteScaling$$Type): $UiRenderMacros$ResolvedBlit
public static "populateFillGradientTriangles"(arg0: $Matrix4f$$Type, arg1: $BufferBuilder$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UiRenderMacros$$Type = ($UiRenderMacros);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UiRenderMacros_ = $UiRenderMacros$$Type;
}}
declare module "com.ldtteam.structurize.blocks.schematic.BlockSolidSubstitution" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockSolidSubstitution extends $Block {
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

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSolidSubstitution$$Type = ($BlockSolidSubstitution);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSolidSubstitution_ = $BlockSolidSubstitution$$Type;
}}
declare module "com.ldtteam.structurize.blueprints.v1.Blueprint" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ClipBlockStateContext, $ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AuxiliaryLightManager, $AuxiliaryLightManager$$Type} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$IFakeLevelBlockGetter, $IFakeLevelBlockGetter$$Type} from "com.ldtteam.common.fakelevel.IFakeLevelBlockGetter"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$RotationMirror, $RotationMirror$$Type} from "com.ldtteam.structurize.api.RotationMirror"
import {$BlockInfo, $BlockInfo$$Type} from "com.ldtteam.structurize.util.BlockInfo"
import {$BlueprintPositionInfo, $BlueprintPositionInfo$$Type} from "com.ldtteam.structurize.util.BlueprintPositionInfo"
import {$ClipContext, $ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$CrashReportCategory, $CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export class $Blueprint implements $IFakeLevelBlockGetter {

constructor(arg0: short, arg1: short, arg2: short, arg3: short, arg4: $List$$Type<($BlockState$$Type)>, arg5: (((short)[])[])[], arg6: ($CompoundTag$$Type)[], arg7: $List$$Type<(string)>, arg8: $HolderLookup$Provider$$Type)
constructor(arg0: short, arg1: short, arg2: short, arg3: $HolderLookup$Provider$$Type)

public "getHeight"(): integer
public "getEntities"(): ($CompoundTag)[]
public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "setName"(arg0: string): $Blueprint
public "getFileName"(): string
/**
 * 
 * @deprecated
 */
public "getItem"(arg0: $BlockPos$$Type): $Item
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getStructure"(): (((short)[])[])[]
public "getPalette"(): ($BlockState)[]
public "setFileName"(arg0: string): $Blueprint
public "getFilePath"(): $Path
public "getRegistryAccess"(): $HolderLookup$Provider
public "getBlockInfoAsMap"(): $Map<($BlockPos), ($BlockInfo)>
public "getPrimaryBlockOffset"(): $BlockPos
public "getBlockInfoAsList"(): $List<($BlockInfo)>
public "getTileEntities"(): ((($CompoundTag)[])[])[]
public "setCachePrimaryOffset"(arg0: $BlockPos$$Type): void
public "getTileEntityData"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): $CompoundTag
public "setRotationMirror"(arg0: $RotationMirror$$Type, arg1: $Level$$Type): void
public "getRotationMirror"(): $RotationMirror
public "setPackName"(arg0: string): $Blueprint
public "getPackName"(): string
public "getSizeX"(): integer
public "getSizeZ"(): integer
public "getSizeY"(): short
public "addBlockState"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "getPalleteSize"(): short
public "setFilePath"(arg0: $Path$$Type): $Blueprint
public "setRotationMirrorRelative"(arg0: $RotationMirror$$Type, arg1: $Level$$Type): void
public "setMissingMods"(...arg0: (string)[]): $Blueprint
public "setEntities"(arg0: ($CompoundTag$$Type)[]): void
public "setArchitects"(arg0: (string)[]): void
public "getArchitects"(): (string)[]
public "getMissingMods"(): (string)[]
public "getCachedEntitiesAsMap"(): $Map<($BlockPos), (($CompoundTag)[])>
public "getRequiredMods"(): $List<(string)>
public "getEntitiesAsList"(): $List<($CompoundTag)>
public "getBluePrintPositionInfo"(arg0: $BlockPos$$Type, arg1: boolean): $BlueprintPositionInfo
public "describeSelfInCrashReport"(arg0: $CrashReportCategory$$Type): void
public "getMinX"(): integer
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getMinBuildHeight"(): integer
public "getAABB"(): $AABB
public "getMaxX"(): integer
public "getMinZ"(): integer
public "getMaxZ"(): integer
public "isPosInside"(arg0: $BlockPos$$Type): boolean
public "isPosOutside"(arg0: $BlockPos$$Type): boolean
public "getRawBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getRawBlockStateFunction"(): $Function<($BlockPos), ($BlockState)>
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public "getMaxLightLevel"(): integer
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getMaxBuildHeight"(): integer
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getSectionIndex"(arg0: integer): integer
public "getSectionsCount"(): integer
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
public "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
public "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
public "hasBiomes"(): boolean
public "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
get "height"(): integer
get "entities"(): ($CompoundTag)[]
get "name"(): string
set "name"(value: string)
get "fileName"(): string
get "structure"(): (((short)[])[])[]
get "palette"(): ($BlockState)[]
set "fileName"(value: string)
get "filePath"(): $Path
get "registryAccess"(): $HolderLookup$Provider
get "blockInfoAsMap"(): $Map<($BlockPos), ($BlockInfo)>
get "primaryBlockOffset"(): $BlockPos
get "blockInfoAsList"(): $List<($BlockInfo)>
get "tileEntities"(): ((($CompoundTag)[])[])[]
set "cachePrimaryOffset"(value: $BlockPos$$Type)
get "rotationMirror"(): $RotationMirror
set "packName"(value: string)
get "packName"(): string
get "sizeX"(): integer
get "sizeZ"(): integer
get "sizeY"(): short
get "palleteSize"(): short
set "filePath"(value: $Path$$Type)
set "missingMods"(value: (string)[])
set "entities"(value: ($CompoundTag$$Type)[])
set "architects"(value: (string)[])
get "architects"(): (string)[]
get "missingMods"(): (string)[]
get "cachedEntitiesAsMap"(): $Map<($BlockPos), (($CompoundTag)[])>
get "requiredMods"(): $List<(string)>
get "entitiesAsList"(): $List<($CompoundTag)>
get "minX"(): integer
get "minBuildHeight"(): integer
get "aABB"(): $AABB
get "maxX"(): integer
get "minZ"(): integer
get "maxZ"(): integer
get "rawBlockStateFunction"(): $Function<($BlockPos), ($BlockState)>
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "maxBuildHeight"(): integer
get "sectionsCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Blueprint$$Type = ($Blueprint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Blueprint_ = $Blueprint$$Type;
}}
declare module "com.ldtteam.blockui.BOScreen" {
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$$Type} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"
import {$BOWindow, $BOWindow$$Type} from "com.ldtteam.blockui.views.BOWindow"

export class $BOScreen extends $Screen {
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
static "isMouseLeftDown": boolean
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

constructor(arg0: $BOWindow$$Type)

public "removed"(): void
public "tick"(): void
public "isPauseScreen"(): boolean
public "getWindow"(): $BOWindow
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "getFramebufferWidth"(): integer
public "getFramebufferHeight"(): integer
public "getRenderScale"(): double
public "getAbsoluteMouseX"(): integer
public "getVanillaGuiScale"(): double
public "getAbsoluteMouseY"(): integer
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "owo$PANORAMA_RENDERER"(): $CubeMap
get "pauseScreen"(): boolean
get "window"(): $BOWindow
get "framebufferWidth"(): integer
get "framebufferHeight"(): integer
get "renderScale"(): double
get "absoluteMouseX"(): integer
get "vanillaGuiScale"(): double
get "absoluteMouseY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BOScreen$$Type = ($BOScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BOScreen_ = $BOScreen$$Type;
}}
declare module "com.ldtteam.blockui.UiRenderMacros$ResolvedBlit" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"

export interface $UiRenderMacros$ResolvedBlit {

 "blit"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void

(arg0: $PoseStack, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}

export namespace $UiRenderMacros$ResolvedBlit {
const EMPTY: $UiRenderMacros$ResolvedBlit
const probejs$$marker: never
}
export class $UiRenderMacros$ResolvedBlit$$Static implements $UiRenderMacros$ResolvedBlit {
static readonly "EMPTY": $UiRenderMacros$ResolvedBlit


 "blit"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UiRenderMacros$ResolvedBlit$$Type = ((arg0: $PoseStack, arg1: integer, arg2: integer, arg3: integer, arg4: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UiRenderMacros$ResolvedBlit_ = $UiRenderMacros$ResolvedBlit$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.vanilla.WallBlock" {
import {$WallSide, $WallSide$$Type} from "net.minecraft.world.level.block.state.properties.WallSide"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractBlockWall, $AbstractBlockWall$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlockWall"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$WallBlock as $WallBlock$0, $WallBlock$$Type as $WallBlock$0$$Type} from "net.minecraft.world.level.block.WallBlock"

export class $WallBlock extends $AbstractBlockWall<($WallBlock)> implements $IMateriallyTexturedBlock, $EntityBlock, $ICachedItemGroupBlock {
static "PROPERTIES": $ImmutableMap<($Direction), ($EnumProperty<($WallSide)>)>
 "shapeByIndex": $Map<($BlockState), ($VoxelShape)>
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UP": $BooleanProperty
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallBlock$0)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "collisionShapeByIndex": $Map<($BlockState), ($VoxelShape)>
 "hasCollision": boolean

constructor()

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallBlock$$Type = ($WallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallBlock_ = $WallBlock$$Type;
}}
declare module "com.ldtteam.structurize.placement.handlers.placement.PlacementError" {
import {$PlacementError$PlacementErrorType, $PlacementError$PlacementErrorType$$Type} from "com.ldtteam.structurize.placement.handlers.placement.PlacementError$PlacementErrorType"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $PlacementError {

constructor(arg0: $PlacementError$PlacementErrorType$$Type, arg1: $BlockPos$$Type)

public "setType"(arg0: $PlacementError$PlacementErrorType$$Type): void
public "getType"(): $PlacementError$PlacementErrorType
public "setPos"(arg0: $BlockPos$$Type): void
public "getPos"(): $BlockPos
public static "blockListToCommaSeparatedString"(arg0: $List$$Type<($BlockPos$$Type)>): string
public static "partitionPlacementErrorsByErrorType"(arg0: $List$$Type<($PlacementError$$Type)>): $Map<($PlacementError$PlacementErrorType), ($List<($BlockPos)>)>
set "type"(value: $PlacementError$PlacementErrorType$$Type)
get "type"(): $PlacementError$PlacementErrorType
set "pos"(value: $BlockPos$$Type)
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementError$$Type = ($PlacementError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementError_ = $PlacementError$$Type;
}}
declare module "com.ldtteam.common.fakelevel.IFakeLevelBlockGetter" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ClipBlockStateContext, $ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AuxiliaryLightManager, $AuxiliaryLightManager$$Type} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext, $ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$CrashReportCategory, $CrashReportCategory$$Type} from "net.minecraft.CrashReportCategory"

export interface $IFakeLevelBlockGetter extends $BlockGetter {

 "getMinX"(): integer
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getMinBuildHeight"(): integer
 "getSizeX"(): integer
 "getSizeZ"(): integer
 "getAABB"(): $AABB
 "getMaxX"(): integer
 "getMinZ"(): integer
 "getMaxZ"(): integer
 "isPosInside"(arg0: $BlockPos$$Type): boolean
 "isPosOutside"(arg0: $BlockPos$$Type): boolean
 "getRawBlockState"(arg0: $BlockPos$$Type): $BlockState
 "describeSelfInCrashReport"(arg0: $CrashReportCategory$$Type): void
 "getRawBlockStateFunction"(): $Function<($BlockPos), ($BlockState)>
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getHeight"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getSectionsCount"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
get "minX"(): integer
get "minBuildHeight"(): integer
get "sizeX"(): integer
get "sizeZ"(): integer
get "aABB"(): $AABB
get "maxX"(): integer
get "minZ"(): integer
get "maxZ"(): integer
get "rawBlockStateFunction"(): $Function<($BlockPos), ($BlockState)>
get "maxLightLevel"(): integer
get "height"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "maxBuildHeight"(): integer
get "sectionsCount"(): integer
}

export namespace $IFakeLevelBlockGetter {
function traverseBlocks<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
const probejs$$marker: never
}
export class $IFakeLevelBlockGetter$$Static implements $IFakeLevelBlockGetter {


 "getMinX"(): integer
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "getMinBuildHeight"(): integer
 "getSizeX"(): integer
 "getSizeZ"(): integer
 "getAABB"(): $AABB
 "getMaxX"(): integer
 "getMinZ"(): integer
 "getMaxZ"(): integer
 "isPosInside"(arg0: $BlockPos$$Type): boolean
 "isPosOutside"(arg0: $BlockPos$$Type): boolean
 "getRawBlockState"(arg0: $BlockPos$$Type): $BlockState
 "describeSelfInCrashReport"(arg0: $CrashReportCategory$$Type): void
 "getRawBlockStateFunction"(): $Function<($BlockPos), ($BlockState)>
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getHeight"(): integer
static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getSectionsCount"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFakeLevelBlockGetter$$Type = ($IFakeLevelBlockGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFakeLevelBlockGetter_ = $IFakeLevelBlockGetter$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.vanilla.DoorBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$DoubleHighBlockItemWithClientBePlacement, $DoubleHighBlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.DoubleHighBlockItemWithClientBePlacement"
import {$DoorBlock, $DoorBlock$$Type} from "com.ldtteam.domumornamentum.block.vanilla.DoorBlock"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $DoorBlockItem extends $DoubleHighBlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $DoorBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorBlockItem$$Type = ($DoorBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoorBlockItem_ = $DoorBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.interfaces.IDOBlock" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $IDOBlock<B extends $IDOBlock<(B)>> {

 "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
 "getRegistryName"(): $ResourceLocation

(): $ResourceLocation$$Type
get "registryName"(): $ResourceLocation
}

export namespace $IDOBlock {
const probejs$$marker: never
}
export class $IDOBlock$$Static<B extends $IDOBlock<(B)>> implements $IDOBlock {


 "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
 "getRegistryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDOBlock$$Type<B> = (() => $ResourceLocation$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDOBlock_<B> = $IDOBlock$$Type<(B)>;
}}
declare module "com.ldtteam.domumornamentum.item.vanilla.WallBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$WallBlock, $WallBlock$$Type} from "com.ldtteam.domumornamentum.block.vanilla.WallBlock"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $WallBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $WallBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallBlockItem$$Type = ($WallBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallBlockItem_ = $WallBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.vanilla.TrapdoorBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AbstractBlockTrapdoor, $AbstractBlockTrapdoor$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlockTrapdoor"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$TrapdoorType, $TrapdoorType$$Type} from "com.ldtteam.domumornamentum.block.types.TrapdoorType"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$TrapDoorBlock, $TrapDoorBlock$$Type} from "net.minecraft.world.level.block.TrapDoorBlock"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TrapdoorBlock extends $AbstractBlockTrapdoor<($TrapdoorBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "TYPE": $EnumProperty<($TrapdoorType)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TrapDoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrapdoorBlock$$Type = ($TrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrapdoorBlock_ = $TrapdoorBlock$$Type;
}}
declare module "com.ldtteam.structurize.items.ItemScanTool" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BoxPreviewData, $BoxPreviewData$$Type} from "com.ldtteam.structurize.storage.rendering.types.BoxPreviewData"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ScanToolData$Slot, $ScanToolData$Slot$$Type} from "com.ldtteam.structurize.util.ScanToolData$Slot"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IScrollableItem, $IScrollableItem$$Type} from "com.ldtteam.structurize.api.IScrollableItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ScanToolData, $ScanToolData$$Type} from "com.ldtteam.structurize.util.ScanToolData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractItemWithPosSelector, $AbstractItemWithPosSelector$$Type} from "com.ldtteam.structurize.items.AbstractItemWithPosSelector"
import {$ISpecialBlockPickItem, $ISpecialBlockPickItem$$Type} from "com.ldtteam.structurize.api.ISpecialBlockPickItem"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemScanTool extends $AbstractItemWithPosSelector implements $IScrollableItem, $ISpecialBlockPickItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()
constructor(arg0: $Item$Properties$$Type)

public static "saveStructure"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ScanToolData$Slot$$Type, arg3: boolean): void
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "loadSlot"(arg0: $ScanToolData$$Type, arg1: $ItemStack$$Type): $ScanToolData$Slot
public static "getBox"(arg0: $ItemStack$$Type, arg1: $Player$$Type): $BoxPreviewData
public "getHighlightTip"(arg0: $ItemStack$$Type, arg1: $Component$$Type): $Component
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
/**
 * 
 * @deprecated
 */
public static "getStructureName"(arg0: $ItemStack$$Type): string
/**
 * 
 * @deprecated
 */
public static "setStructureName"(arg0: $ItemStack$$Type, arg1: string): void
public "onAirRightClick"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $ItemStack$$Type): $InteractionResult
public "onBlockPick"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $BlockPos$$Type, arg3: boolean): $InteractionResult
public "onTeleport"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public static "getAnchorPos"(arg0: $ItemStack$$Type): $BlockPos
/**
 * 
 * @deprecated
 */
public static "setAnchorPos"(arg0: $ItemStack$$Type, arg1: $BlockPos$$Type): void
public "onMouseScroll"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: double, arg3: double, arg4: boolean): $InteractionResult
public "getRegisteredItemInstance"(): $AbstractItemWithPosSelector
get "registeredItemInstance"(): $AbstractItemWithPosSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScanTool$$Type = ($ItemScanTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScanTool_ = $ItemScanTool$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.vanilla.TrapdoorBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$TrapdoorBlock, $TrapdoorBlock$$Type} from "com.ldtteam.domumornamentum.block.vanilla.TrapdoorBlock"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TrapdoorBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $TrapdoorBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrapdoorBlockItem$$Type = ($TrapdoorBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrapdoorBlockItem_ = $TrapdoorBlockItem$$Type;
}}
declare module "com.ldtteam.structurize.blocks.schematic.BlockFluidSubstitution" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockFluidSubstitution extends $Block {
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

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFluidSubstitution$$Type = ($BlockFluidSubstitution);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFluidSubstitution_ = $BlockFluidSubstitution$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.vanilla.StairBlock" {
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StairBlock as $StairBlock$0, $StairBlock$$Type as $StairBlock$0$$Type} from "net.minecraft.world.level.block.StairBlock"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$StairsShape, $StairsShape$$Type} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $StairBlock extends $StairBlock$0 implements $IMateriallyTexturedBlock, $EntityBlock, $ICachedItemGroupBlock, $IDOBlock<($StairBlock)> {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StairBlock$0)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getRegistryName"(): $ResourceLocation
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "registryName"(): $ResourceLocation
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StairBlock$$Type = ($StairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StairBlock_ = $StairBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.types.TimberFrameType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $TimberFrameType extends $Enum<($TimberFrameType)> implements $StringRepresentable {
static readonly "PLAIN": $TimberFrameType
static readonly "ONE_CROSSED_RL": $TimberFrameType
static readonly "FRAMED": $TimberFrameType
static readonly "HORIZONTAL_PLAIN": $TimberFrameType
static readonly "SIDE_FRAMED": $TimberFrameType
static readonly "DOUBLE_CROSSED": $TimberFrameType
static readonly "DOWN_GATED": $TimberFrameType
static readonly "ONE_CROSSED_LR": $TimberFrameType
static readonly "UP_GATED": $TimberFrameType
static readonly "SIDE_FRAMED_HORIZONTAL": $TimberFrameType


public "getName"(): string
public static "values"(): ($TimberFrameType)[]
public static "valueOf"(arg0: string): $TimberFrameType
public "getPrevious"(): $TimberFrameType
public "getSerializedName"(): string
public "isRotatable"(): boolean
public "getLangName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "name"(): string
get "previous"(): $TimberFrameType
get "serializedName"(): string
get "rotatable"(): boolean
get "langName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimberFrameType$$Type = (("plain") | ("double_crossed") | ("framed") | ("side_framed") | ("up_gated") | ("down_gated") | ("one_crossed_lr") | ("one_crossed_rl") | ("horizontal_plain") | ("side_framed_horizontal"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimberFrameType_ = $TimberFrameType$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.AllBrickBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$AbstractBlock, $AbstractBlock$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AllBrickBlock extends $AbstractBlock<($AllBrickBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
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

constructor()

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllBrickBlock$$Type = ($AllBrickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllBrickBlock_ = $AllBrickBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.AbstractPanelBlockTrapdoor" {
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AbstractPanelBlockTrapdoor<B extends $AbstractPanelBlockTrapdoor<(B)>> extends $HorizontalDirectionalBlock implements $IDOBlock<(B)>, $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "registryName"(): $ResourceLocation
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPanelBlockTrapdoor$$Type<B> = ($AbstractPanelBlockTrapdoor<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPanelBlockTrapdoor_<B> = $AbstractPanelBlockTrapdoor$$Type<(B)>;
}}
declare module "com.ldtteam.structurize.blocks.interfaces.IRequirementsBlueprintAnchorBlock" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$LocalPlayer, $LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$List, $List$$Type} from "java.util.List"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IRequirementsBlueprintAnchorBlock {

 "getRequirements"(arg0: $ClientLevel$$Type, arg1: $BlockPos$$Type, arg2: $LocalPlayer$$Type): $List<($MutableComponent)>
 "areRequirementsMet"(arg0: $ClientLevel$$Type, arg1: $BlockPos$$Type, arg2: $LocalPlayer$$Type): boolean
}

export namespace $IRequirementsBlueprintAnchorBlock {
const probejs$$marker: never
}
export class $IRequirementsBlueprintAnchorBlock$$Static implements $IRequirementsBlueprintAnchorBlock {


 "getRequirements"(arg0: $ClientLevel$$Type, arg1: $BlockPos$$Type, arg2: $LocalPlayer$$Type): $List<($MutableComponent)>
 "areRequirementsMet"(arg0: $ClientLevel$$Type, arg1: $BlockPos$$Type, arg2: $LocalPlayer$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRequirementsBlueprintAnchorBlock$$Type = ($IRequirementsBlueprintAnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRequirementsBlueprintAnchorBlock_ = $IRequirementsBlueprintAnchorBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.recipe.architectscutter.ArchitectsCutterRecipe" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ArchitectsCutterRecipeInput, $ArchitectsCutterRecipeInput$$Type} from "com.ldtteam.domumornamentum.recipe.architectscutter.ArchitectsCutterRecipeInput"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ArchitectsCutterRecipe implements $Recipe<($ArchitectsCutterRecipeInput)> {
static readonly "CODEC": $MapCodec<($ArchitectsCutterRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ArchitectsCutterRecipe)>

constructor(arg0: $ResourceLocation$$Type, arg1: integer, arg2: $DataComponentPatch$$Type)
constructor(arg0: $Holder$$Type<($Block)>, arg1: integer, arg2: $DataComponentPatch$$Type)

public "getBlock"(): $Block
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $ArchitectsCutterRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getCount"(): integer
public "getType"(): $RecipeType<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $ArchitectsCutterRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getComponentPatch"(): $DataComponentPatch
public "getBlockName"(): $ResourceLocation
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): string
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $ArchitectsCutterRecipeInput$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "block"(): $Block
get "count"(): integer
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
get "componentPatch"(): $DataComponentPatch
get "blockName"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): string
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitectsCutterRecipe$$Type = ($ArchitectsCutterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitectsCutterRecipe_ = $ArchitectsCutterRecipe$$Type;
}}
declare module "com.ldtteam.domumornamentum.recipe.architectscutter.ArchitectsCutterRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ArchitectsCutterRecipe, $ArchitectsCutterRecipe$$Type} from "com.ldtteam.domumornamentum.recipe.architectscutter.ArchitectsCutterRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ArchitectsCutterRecipeSerializer implements $RecipeSerializer<($ArchitectsCutterRecipe)> {

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ArchitectsCutterRecipe)>
public "codec"(): $MapCodec<($ArchitectsCutterRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitectsCutterRecipeSerializer$$Type = ($ArchitectsCutterRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitectsCutterRecipeSerializer_ = $ArchitectsCutterRecipeSerializer$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.vanilla.FenceBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$AbstractBlockFence, $AbstractBlockFence$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlockFence"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FenceBlock as $FenceBlock$0, $FenceBlock$$Type as $FenceBlock$0$$Type} from "net.minecraft.world.level.block.FenceBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $FenceBlock extends $AbstractBlockFence<($FenceBlock)> implements $IMateriallyTexturedBlock, $EntityBlock, $ICachedItemGroupBlock {
 "shapeByIndex": ($VoxelShape)[]
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FenceBlock$0)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "collisionShapeByIndex": ($VoxelShape)[]
 "hasCollision": boolean

constructor()

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceBlock$$Type = ($FenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceBlock_ = $FenceBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.AbstractBlockFenceGate" {
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FenceGateBlock, $FenceGateBlock$$Type} from "net.minecraft.world.level.block.FenceGateBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlockFenceGate<B extends $AbstractBlockFenceGate<(B)>> extends $FenceGateBlock implements $IDOBlock<(B)> {
static readonly "IN_WALL": $BooleanProperty
readonly "closeSound": $SoundEvent
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FenceGateBlock)>
readonly "openSound": $SoundEvent
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public "asHolder"(): $Holder<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockFenceGate$$Type<B> = ($AbstractBlockFenceGate<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockFenceGate_<B> = $AbstractBlockFenceGate$$Type<(B)>;
}}
declare module "com.ldtteam.structurize.blocks.interfaces.INamedBlueprintAnchorBlock" {
import {$List, $List$$Type} from "java.util.List"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $INamedBlueprintAnchorBlock {

 "getDesc"(): $List<($MutableComponent)>
 "getBlueprintDisplayName"(): $Component

(): $Component$$Type
get "desc"(): $List<($MutableComponent)>
get "blueprintDisplayName"(): $Component
}

export namespace $INamedBlueprintAnchorBlock {
const probejs$$marker: never
}
export class $INamedBlueprintAnchorBlock$$Static implements $INamedBlueprintAnchorBlock {


 "getDesc"(): $List<($MutableComponent)>
 "getBlueprintDisplayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INamedBlueprintAnchorBlock$$Type = (() => $Component$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INamedBlueprintAnchorBlock_ = $INamedBlueprintAnchorBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.interfaces.IDoItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"

export interface $IDoItem {

 "getGroup"(): $ResourceLocation
 "getInputIds"(): $List<($ResourceLocation)>
 "renderPreview"(): boolean

(): $ResourceLocation$$Type
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}

export namespace $IDoItem {
const probejs$$marker: never
}
export class $IDoItem$$Static implements $IDoItem {


 "getGroup"(): $ResourceLocation
 "getInputIds"(): $List<($ResourceLocation)>
 "renderPreview"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDoItem$$Type = (() => $ResourceLocation$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDoItem_ = $IDoItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.PillarBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PillarBlock, $PillarBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.PillarBlock"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $PillarBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $PillarBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PillarBlockItem$$Type = ($PillarBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PillarBlockItem_ = $PillarBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.ExtraBlockItem" {
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ExtraBlock, $ExtraBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.ExtraBlock"

export class $ExtraBlockItem extends $BlockItemWithClientBePlacement {
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

constructor(arg0: $ExtraBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
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
export type $ExtraBlockItem$$Type = ($ExtraBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraBlockItem_ = $ExtraBlockItem$$Type;
}}
declare module "com.ldtteam.blockui.MouseEventCallback" {
import {$Pane, $Pane$$Type} from "com.ldtteam.blockui.Pane"

export interface $MouseEventCallback {

 "accept"(arg0: $Pane$$Type, arg1: double, arg2: double): boolean

(arg0: $Pane, arg1: double, arg2: double): boolean
}

export namespace $MouseEventCallback {
const probejs$$marker: never
}
export class $MouseEventCallback$$Static implements $MouseEventCallback {


 "accept"(arg0: $Pane$$Type, arg1: double, arg2: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseEventCallback$$Type = ((arg0: $Pane, arg1: double, arg2: double) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseEventCallback_ = $MouseEventCallback$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.types.FancyTrapdoorType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $FancyTrapdoorType extends $Enum<($FancyTrapdoorType)> implements $StringRepresentable {
static readonly "CREEPER": $FancyTrapdoorType
static readonly "FULL": $FancyTrapdoorType


public static "values"(): ($FancyTrapdoorType)[]
public static "valueOf"(arg0: string): $FancyTrapdoorType
public "getTranslationKeySuffix"(): string
public "getDefaultEnglishTranslation"(): string
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "translationKeySuffix"(): string
get "defaultEnglishTranslation"(): string
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyTrapdoorType$$Type = (("full") | ("creeper"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyTrapdoorType_ = $FancyTrapdoorType$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.DynamicTimberFrameBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DynamicTimberFrameBlock, $DynamicTimberFrameBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.DynamicTimberFrameBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $DynamicTimberFrameBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $DynamicTimberFrameBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicTimberFrameBlockItem$$Type = ($DynamicTimberFrameBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicTimberFrameBlockItem_ = $DynamicTimberFrameBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.DOStairBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$StairsShape, $StairsShape$$Type} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $DOStairBlock extends $Block implements $SimpleWaterloggedBlock {
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
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $Supplier$$Type<($BlockState$$Type)>, arg1: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "isStairs"(arg0: $BlockState$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
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
export type $DOStairBlock$$Type = ($DOStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DOStairBlock_ = $DOStairBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.TimberFrameBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TimberFrameType, $TimberFrameType$$Type} from "com.ldtteam.domumornamentum.block.types.TimberFrameType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$AbstractBlock, $AbstractBlock$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TimberFrameBlock extends $AbstractBlock<($TimberFrameBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
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

constructor(arg0: $TimberFrameType$$Type)

public static "getName"(arg0: $TimberFrameType$$Type): string
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getTimberFrameType"(): $TimberFrameType
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "timberFrameType"(): $TimberFrameType
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimberFrameBlock$$Type = ($TimberFrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimberFrameBlock_ = $TimberFrameBlock$$Type;
}}
declare module "com.ldtteam.blockui.Pane" {
import {$UiRenderMacros, $UiRenderMacros$$Type} from "com.ldtteam.blockui.UiRenderMacros"
import {$View, $View$$Type} from "com.ldtteam.blockui.views.View"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BOGuiGraphics, $BOGuiGraphics$$Type} from "com.ldtteam.blockui.BOGuiGraphics"
import {$PaneParams, $PaneParams$$Type} from "com.ldtteam.blockui.PaneParams"
import {$Cursor, $Cursor$$Type} from "com.ldtteam.blockui.util.cursor.Cursor"
import {$Alignment, $Alignment$$Type} from "com.ldtteam.blockui.Alignment"
import {$BOWindow, $BOWindow$$Type} from "com.ldtteam.blockui.views.BOWindow"

export class $Pane extends $UiRenderMacros {
static readonly "HALF_BIAS": double

constructor()
constructor(arg0: $PaneParams$$Type)

public "getWidth"(): integer
public "getHeight"(): integer
public "getY"(): integer
public "off"(): void
public "isEnabled"(): boolean
public "getParent"(): $View
public "on"(): void
public "enable"(): void
public "getID"(): string
public "setID"(arg0: string): void
public "setSize"(arg0: integer, arg1: integer): void
public "getWindow"(): $BOWindow
public "setWindow"(arg0: $BOWindow$$Type): void
public "setCursor"(arg0: $Cursor$$Type): void
public "isVisible"(): boolean
public static "clearFocus"(): void
public "setPosition"(arg0: integer, arg1: integer): void
public "getCursor"(): $Cursor
public "setVisible"(arg0: boolean): void
public "setEnabled"(arg0: boolean): void
public "drawSelfLast"(arg0: $BOGuiGraphics$$Type, arg1: double, arg2: double): void
public "findPaneByID"(arg0: string): $Pane
public "findPaneByType"<T extends $Pane>(arg0: $Class$$Type<(T)>): T
public "disable"(): void
public "getAlignment"(): $Alignment
public "draw"(arg0: $BOGuiGraphics$$Type, arg1: double, arg2: double): void
public "show"(): void
public "moveBy"(arg0: integer, arg1: integer): void
public "getX"(): integer
public "click"(arg0: double, arg1: double): boolean
public "hide"(): void
public "handleRightClick"(arg0: double, arg1: double): boolean
public "findFirstPaneByType"<T extends $Pane>(arg0: $Class$$Type<(T)>): T
public "findPaneOfTypeByID"<T extends $Pane>(arg0: string, arg1: $Class$$Type<(T)>): T
public "wasCursorInPane"(): boolean
public static "setFocus"(arg0: $Pane$$Type): void
public "setFocus"(): void
public "isPointInPane"(arg0: double, arg1: double): boolean
public "shouldDraw"(): boolean
public "isFocus"(): boolean
public static "getFocus"(): $Pane
public "onUpdate"(): void
public "setHoverPane"(arg0: $Pane$$Type): $Pane
public "putInside"(arg0: $View$$Type): void
public "parseChildren"(arg0: $PaneParams$$Type): void
public "setAlignment"(arg0: $Alignment$$Type): void
public "drawHidden"(): void
public "drawLast"(arg0: $BOGuiGraphics$$Type, arg1: double, arg2: double): void
public "isClickable"(): boolean
public "canHandleClick"(arg0: double, arg1: double): boolean
public "onKeyTyped"(arg0: character, arg1: integer): boolean
public "scrollInput"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "setParentView"(arg0: $View$$Type): void
public "getHoverPane"(): $Pane
public "handleClick"(arg0: double, arg1: double): boolean
public "drawSelf"(arg0: $BOGuiGraphics$$Type, arg1: double, arg2: double): void
public "onMouseDrag"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "onFocusLost"(): void
public "onFocus"(): void
public "rightClick"(arg0: double, arg1: double): boolean
get "width"(): integer
get "height"(): integer
get "y"(): integer
get "enabled"(): boolean
get "parent"(): $View
get "iD"(): string
set "iD"(value: string)
get "window"(): $BOWindow
set "window"(value: $BOWindow$$Type)
set "cursor"(value: $Cursor$$Type)
get "visible"(): boolean
get "cursor"(): $Cursor
set "visible"(value: boolean)
set "enabled"(value: boolean)
get "alignment"(): $Alignment
get "x"(): integer
get "focus"(): boolean
set "hoverPane"(value: $Pane$$Type)
set "alignment"(value: $Alignment$$Type)
get "clickable"(): boolean
set "parentView"(value: $View$$Type)
get "hoverPane"(): $Pane
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pane$$Type = ($Pane);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pane_ = $Pane$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.AbstractPostBlock" {
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$DirectionalBlock, $DirectionalBlock$$Type} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$PostType, $PostType$$Type} from "com.ldtteam.domumornamentum.block.types.PostType"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AbstractPostBlock<B extends $AbstractPostBlock<(B)>> extends $DirectionalBlock implements $IDOBlock<(B)> {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPRIGHT": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($PostType)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public "asHolder"(): $Holder<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPostBlock$$Type<B> = ($AbstractPostBlock<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPostBlock_<B> = $AbstractPostBlock$$Type<(B)>;
}}
declare module "com.ldtteam.structurize.api.IScrollableItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IScrollableItem {

 "onMouseScroll"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: double, arg3: double, arg4: boolean): $InteractionResult

(arg0: $Player, arg1: $ItemStack, arg2: double, arg3: double, arg4: boolean): $InteractionResult$$Type
}

export namespace $IScrollableItem {
const probejs$$marker: never
}
export class $IScrollableItem$$Static implements $IScrollableItem {


 "onMouseScroll"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: double, arg3: double, arg4: boolean): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScrollableItem$$Type = ((arg0: $Player, arg1: $ItemStack, arg2: double, arg3: double, arg4: boolean) => $InteractionResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScrollableItem_ = $IScrollableItem$$Type;
}}
declare module "com.ldtteam.structurize.util.ScanToolData$Slot" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BoxPreviewData, $BoxPreviewData$$Type} from "com.ldtteam.structurize.storage.rendering.types.BoxPreviewData"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ScanToolData$Slot extends $Record {
static readonly "CODEC": $Codec<($ScanToolData$Slot)>
static readonly "EMPTY": $ScanToolData$Slot
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ScanToolData$Slot)>

constructor(name: string, box: $BoxPreviewData$$Type)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "box"(): $BoxPreviewData
public "withName"(arg0: string): $ScanToolData$Slot
public "withBox"(arg0: $BoxPreviewData$$Type): $ScanToolData$Slot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScanToolData$Slot$$Type = ({"name"?: string, "box"?: $BoxPreviewData$$Type}) | ([name?: string, box?: $BoxPreviewData$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScanToolData$Slot_ = $ScanToolData$Slot$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $IMateriallyTexturedBlockComponent {

 "getDefault"(): $Block
 "getId"(): $ResourceLocation
 "isOptional"(): boolean
 "getValidSkins"(): $TagKey<($Block)>
get "default"(): $Block
get "id"(): $ResourceLocation
get "optional"(): boolean
get "validSkins"(): $TagKey<($Block)>
}

export namespace $IMateriallyTexturedBlockComponent {
const probejs$$marker: never
}
export class $IMateriallyTexturedBlockComponent$$Static implements $IMateriallyTexturedBlockComponent {


 "getDefault"(): $Block
 "getId"(): $ResourceLocation
 "isOptional"(): boolean
 "getValidSkins"(): $TagKey<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMateriallyTexturedBlockComponent$$Type = ($IMateriallyTexturedBlockComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMateriallyTexturedBlockComponent_ = $IMateriallyTexturedBlockComponent$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.ShingleSlabBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ShingleSlabShapeType, $ShingleSlabShapeType$$Type} from "com.ldtteam.domumornamentum.block.types.ShingleSlabShapeType"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractBlockDirectional, $AbstractBlockDirectional$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlockDirectional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ShingleSlabBlock extends $AbstractBlockDirectional<($ShingleSlabBlock)> implements $SimpleWaterloggedBlock, $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ShingleSlabBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $EnumProperty<($ShingleSlabShapeType)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getComponents"(): $List<($IMateriallyTexturedBlockComponent)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public "asHolder"(): $Holder<(any)>
get "components"(): $List<($IMateriallyTexturedBlockComponent)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "pickupSound"(): $Optional<($SoundEvent)>
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShingleSlabBlock$$Type = ($ShingleSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShingleSlabBlock_ = $ShingleSlabBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.types.PillarShapeType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $PillarShapeType extends $Enum<($PillarShapeType)> implements $StringRepresentable {
static readonly "PILLAR_COLUMN": $PillarShapeType
static readonly "PILLAR_CAPITAL": $PillarShapeType
static readonly "PILLAR_BASE": $PillarShapeType
static readonly "FULL_PILLAR": $PillarShapeType


public "getSpecificationName"(): string
public static "values"(): ($PillarShapeType)[]
public static "valueOf"(arg0: string): $PillarShapeType
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "specificationName"(): string
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PillarShapeType$$Type = (("pillar_base") | ("pillar_capital") | ("pillar_column") | ("full_pillar"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PillarShapeType_ = $PillarShapeType$$Type;
}}
declare module "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MaterialTextureData$Builder, $MaterialTextureData$Builder$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData$Builder"
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MaterialTextureData extends $Record {
static readonly "CODEC": $Codec<($MaterialTextureData)>
static readonly "EMPTY": $MaterialTextureData
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MaterialTextureData)>

constructor(getTexturedComponents: $Map$$Type<($ResourceLocation$$Type), ($Block$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "builder"(): $MaterialTextureData$Builder
public "retainComponentsFromBlock"(arg0: $IMateriallyTexturedBlock$$Type): $MaterialTextureData
/**
 * 
 * @deprecated
 */
public "serializeNBT"(): $CompoundTag
public "writeToItemStack"(arg0: $ItemStack$$Type): void
public static "updateItemStack"(arg0: $ItemStack$$Type, arg1: $UnaryOperator$$Type<($MaterialTextureData)>): void
public static "readFromItemStack"(arg0: $ItemStack$$Type): $MaterialTextureData
public "getTexturedComponents"(): $Map<($ResourceLocation), ($Block)>
/**
 * 
 * @deprecated
 */
public static "deserializeFromNBT"(arg0: $CompoundTag$$Type): $MaterialTextureData
get "empty"(): boolean
get "texturedComponents"(): $Map<($ResourceLocation), ($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialTextureData$$Type = ({"getTexturedComponents"?: $Map$$Type<($ResourceLocation$$Type), ($Block$$Type)>}) | ([getTexturedComponents?: $Map$$Type<($ResourceLocation$$Type), ($Block$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialTextureData_ = $MaterialTextureData$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.FancyDoorBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$DoubleHighBlockItemWithClientBePlacement, $DoubleHighBlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.DoubleHighBlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FancyDoorBlock, $FancyDoorBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.FancyDoorBlock"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $FancyDoorBlockItem extends $DoubleHighBlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $FancyDoorBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyDoorBlockItem$$Type = ($FancyDoorBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyDoorBlockItem_ = $FancyDoorBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.entity.block.IMateriallyTexturedBlockEntity" {
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"

export interface $IMateriallyTexturedBlockEntity {

 "updateTextureDataWith"(arg0: $MaterialTextureData$$Type): void
 "getTextureData"(): $MaterialTextureData
get "textureData"(): $MaterialTextureData
}

export namespace $IMateriallyTexturedBlockEntity {
const probejs$$marker: never
}
export class $IMateriallyTexturedBlockEntity$$Static implements $IMateriallyTexturedBlockEntity {


 "updateTextureDataWith"(arg0: $MaterialTextureData$$Type): void
 "getTextureData"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMateriallyTexturedBlockEntity$$Type = ($IMateriallyTexturedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMateriallyTexturedBlockEntity_ = $IMateriallyTexturedBlockEntity$$Type;
}}
declare module "com.ldtteam.structurize.blocks.interfaces.IInvisibleBlueprintAnchorBlock" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $IInvisibleBlueprintAnchorBlock {

 "isVisible"(arg0: $CompoundTag$$Type): boolean

(arg0: $CompoundTag): boolean
}

export namespace $IInvisibleBlueprintAnchorBlock {
const probejs$$marker: never
}
export class $IInvisibleBlueprintAnchorBlock$$Static implements $IInvisibleBlueprintAnchorBlock {


 "isVisible"(arg0: $CompoundTag$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInvisibleBlueprintAnchorBlock$$Type = ((arg0: $CompoundTag) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInvisibleBlueprintAnchorBlock_ = $IInvisibleBlueprintAnchorBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.PostBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PostBlock, $PostBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.PostBlock"

export class $PostBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $PostBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "renderPreview"(): boolean
public "getInputIds"(): $List<($ResourceLocation)>
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostBlockItem$$Type = ($PostBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostBlockItem_ = $PostBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.AllBrickBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$AllBrickBlock, $AllBrickBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.AllBrickBlock"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $AllBrickBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $AllBrickBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllBrickBlockItem$$Type = ($AllBrickBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllBrickBlockItem_ = $AllBrickBlockItem$$Type;
}}
declare module "com.ldtteam.structurize.util.BlockInfo" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockInfo extends $Record {

constructor(getPos: $BlockPos$$Type, getState: $BlockState$$Type, getTileEntityData: $CompoundTag$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getState"(): $BlockState
public "getPos"(): $BlockPos
public "hasTileEntityData"(): boolean
public "getTileEntityData"(): $CompoundTag
get "state"(): $BlockState
get "pos"(): $BlockPos
get "tileEntityData"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInfo$$Type = ({"getPos"?: $BlockPos$$Type, "getState"?: $BlockState$$Type, "getTileEntityData"?: $CompoundTag$$Type}) | ([getPos?: $BlockPos$$Type, getState?: $BlockState$$Type, getTileEntityData?: $CompoundTag$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInfo_ = $BlockInfo$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.PaperwallBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PaperWallBlock, $PaperWallBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.PaperWallBlock"

export class $PaperwallBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $PaperWallBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaperwallBlockItem$$Type = ($PaperwallBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaperwallBlockItem_ = $PaperwallBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.FancyTrapdoorBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$FancyTrapdoorBlock, $FancyTrapdoorBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.FancyTrapdoorBlock"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $FancyTrapdoorBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $FancyTrapdoorBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyTrapdoorBlockItem$$Type = ($FancyTrapdoorBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyTrapdoorBlockItem_ = $FancyTrapdoorBlockItem$$Type;
}}
declare module "com.ldtteam.blockui.views.View" {
import {$Pos2i$ImmutablePos2i, $Pos2i$ImmutablePos2i$$Type} from "com.ldtteam.blockui.util.records.Pos2i$ImmutablePos2i"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Pane, $Pane$$Type} from "com.ldtteam.blockui.Pane"
import {$BOGuiGraphics, $BOGuiGraphics$$Type} from "com.ldtteam.blockui.BOGuiGraphics"
import {$PaneParams, $PaneParams$$Type} from "com.ldtteam.blockui.PaneParams"
import {$MouseEventCallback, $MouseEventCallback$$Type} from "com.ldtteam.blockui.MouseEventCallback"
import {$BOWindow, $BOWindow$$Type} from "com.ldtteam.blockui.views.BOWindow"

export class $View extends $Pane {
static readonly "HALF_BIAS": double

constructor()
constructor(arg0: $PaneParams$$Type)

public "addChild"(arg0: $Pane$$Type): void
public "addChild"(arg0: $Pane$$Type, arg1: integer): void
public "removeChild"(arg0: $Pane$$Type): void
public "setSize"(arg0: integer, arg1: integer): void
public "getChildren"(): $List<($Pane)>
public "setWindow"(arg0: $BOWindow$$Type): void
public "drawSelfLast"(arg0: $BOGuiGraphics$$Type, arg1: double, arg2: double): void
public "findPaneByID"(arg0: string): $Pane
public "findPaneByType"<T extends $Pane>(arg0: $Class$$Type<(T)>): T
public "click"(arg0: double, arg1: double): boolean
public "getInteriorWidth"(): integer
public "getInteriorHeight"(): integer
public "mouseEventProcessor"(arg0: double, arg1: double, arg2: $MouseEventCallback$$Type, arg3: $MouseEventCallback$$Type, arg4: $MouseEventCallback$$Type): boolean
public "findPaneForClick"(arg0: double, arg1: double): $Pane
public "getAccumulatedPosition"(): $Pos2i$ImmutablePos2i
public "onUpdate"(): void
public "parseChildren"(arg0: $PaneParams$$Type): void
public "drawHidden"(): void
public "scrollInput"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "drawSelf"(arg0: $BOGuiGraphics$$Type, arg1: double, arg2: double): void
public "onMouseDrag"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "rightClick"(arg0: double, arg1: double): boolean
public "mousePointableEventHandler"(arg0: double, arg1: double, arg2: $MouseEventCallback$$Type, arg3: $MouseEventCallback$$Type): boolean
public "mouseClickableEventHandler"(arg0: double, arg1: double, arg2: $MouseEventCallback$$Type): boolean
get "children"(): $List<($Pane)>
set "window"(value: $BOWindow$$Type)
get "interiorWidth"(): integer
get "interiorHeight"(): integer
get "accumulatedPosition"(): $Pos2i$ImmutablePos2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $View$$Type = ($View);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $View_ = $View$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.ShingleBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ShingleBlock, $ShingleBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.ShingleBlock"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ShingleBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $ShingleBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShingleBlockItem$$Type = ($ShingleBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShingleBlockItem_ = $ShingleBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.FancyDoorBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractBlockDoor, $AbstractBlockDoor$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlockDoor"
import {$DoubleBlockHalf, $DoubleBlockHalf$$Type} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$DoorHingeSide, $DoorHingeSide$$Type} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FancyDoorType, $FancyDoorType$$Type} from "com.ldtteam.domumornamentum.block.types.FancyDoorType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DoorBlock, $DoorBlock$$Type} from "net.minecraft.world.level.block.DoorBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FancyDoorBlock extends $AbstractBlockDoor<($FancyDoorBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "UPDATE_ALL": integer
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "TYPE": $EnumProperty<($FancyDoorType)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "createDoorBlock"(arg0: $BlockSetType$$Type, arg1: $BlockBehaviour$Properties$$Type): $DoorBlock
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyDoorBlock$$Type = ($FancyDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyDoorBlock_ = $FancyDoorBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.recipe.architectscutter.ArchitectsCutterRecipeInput" {
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ArchitectsCutterRecipeInput extends $Record implements $RecipeInput {

constructor(items: $Container$$Type)

public "items"(): $Container
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitectsCutterRecipeInput$$Type = ({"items"?: $Container$$Type}) | ([items?: $Container$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitectsCutterRecipeInput_ = $ArchitectsCutterRecipeInput$$Type;
}}
declare module "com.ldtteam.structurize.blocks.interfaces.ISpecialCreativeHandlerAnchorBlock" {
import {$Blueprint, $Blueprint$$Type} from "com.ldtteam.structurize.blueprints.v1.Blueprint"
import {$AbstractStructureHandler, $AbstractStructureHandler$$Type} from "com.ldtteam.structurize.placement.structure.AbstractStructureHandler"
import {$RotationMirror, $RotationMirror$$Type} from "com.ldtteam.structurize.api.RotationMirror"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ISpecialCreativeHandlerAnchorBlock {

 "setup"(arg0: $ServerPlayer$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Blueprint$$Type, arg4: $RotationMirror$$Type, arg5: boolean, arg6: string, arg7: string): boolean
 "getStructureHandler"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Blueprint$$Type, arg3: $RotationMirror$$Type, arg4: boolean): $AbstractStructureHandler
}

export namespace $ISpecialCreativeHandlerAnchorBlock {
const probejs$$marker: never
}
export class $ISpecialCreativeHandlerAnchorBlock$$Static implements $ISpecialCreativeHandlerAnchorBlock {


 "setup"(arg0: $ServerPlayer$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Blueprint$$Type, arg4: $RotationMirror$$Type, arg5: boolean, arg6: string, arg7: string): boolean
 "getStructureHandler"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Blueprint$$Type, arg3: $RotationMirror$$Type, arg4: boolean): $AbstractStructureHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpecialCreativeHandlerAnchorBlock$$Type = ($ISpecialCreativeHandlerAnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpecialCreativeHandlerAnchorBlock_ = $ISpecialCreativeHandlerAnchorBlock$$Type;
}}
declare module "com.ldtteam.structurize.items.AbstractItemWithPosSelector" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Tuple, $Tuple$$Type} from "net.minecraft.util.Tuple"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractItemWithPosSelector extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

/**
 * 
 * @deprecated
 */
public static "getBounds"(arg0: $ItemStack$$Type): $Tuple<($BlockPos), ($BlockPos)>
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public "onAirRightClick"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $ItemStack$$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public static "setBounds"(arg0: $ItemStack$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "getRegisteredItemInstance"(): $AbstractItemWithPosSelector
get "registeredItemInstance"(): $AbstractItemWithPosSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractItemWithPosSelector$$Type = ($AbstractItemWithPosSelector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractItemWithPosSelector_ = $AbstractItemWithPosSelector$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.AbstractBlockDoor" {
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$DoorBlock, $DoorBlock$$Type} from "net.minecraft.world.level.block.DoorBlock"
import {$DoubleBlockHalf, $DoubleBlockHalf$$Type} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$DoorHingeSide, $DoorHingeSide$$Type} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlockDoor<B extends $AbstractBlockDoor<(B)>> extends $DoorBlock implements $IDOBlock<(B)> {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "UPDATE_ALL": integer
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public static "createDoorBlock"(arg0: $BlockSetType$$Type, arg1: $BlockBehaviour$Properties$$Type): $DoorBlock
public "asHolder"(): $Holder<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockDoor$$Type<B> = ($AbstractBlockDoor<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockDoor_<B> = $AbstractBlockDoor$$Type<(B)>;
}}
declare module "com.ldtteam.multipiston.MultiPistonBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiPistonBlock extends $BaseEntityBlock {
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

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPistonBlock$$Type = ($MultiPistonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPistonBlock_ = $MultiPistonBlock$$Type;
}}
declare module "com.ldtteam.blockui.util.records.Pos2i$ImmutablePos2i" {
import {$Pos2i, $Pos2i$$Type} from "com.ldtteam.blockui.util.records.Pos2i"
import {$Pos2i$MutablePos2i, $Pos2i$MutablePos2i$$Type} from "com.ldtteam.blockui.util.records.Pos2i$MutablePos2i"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Pos2i$ImmutablePos2i extends $Record implements $Pos2i {

constructor(x: integer, y: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): integer
public "y"(): integer
public "toImmutable"(): $Pos2i$ImmutablePos2i
public "toMutable"(): $Pos2i$MutablePos2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pos2i$ImmutablePos2i$$Type = ({"x"?: integer, "y"?: integer}) | ([x?: integer, y?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pos2i$ImmutablePos2i_ = $Pos2i$ImmutablePos2i$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.AbstractBlock" {
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlock<B extends $AbstractBlock<(B)>> extends $Block implements $IDOBlock<(B)> {
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

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public "asHolder"(): $Holder<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlock$$Type<B> = ($AbstractBlock<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlock_<B> = $AbstractBlock$$Type<(B)>;
}}
declare module "com.ldtteam.domumornamentum.item.vanilla.StairsBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StairBlock, $StairBlock$$Type} from "com.ldtteam.domumornamentum.block.vanilla.StairBlock"

export class $StairsBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $StairBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StairsBlockItem$$Type = ($StairsBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StairsBlockItem_ = $StairsBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.types.PostType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $PostType extends $Enum<($PostType)> implements $StringRepresentable {
static readonly "PLAIN": $PostType
static readonly "HEAVY": $PostType
static readonly "QUAD": $PostType
static readonly "TURNED": $PostType
static readonly "PINCHED": $PostType
static readonly "DOUBLE": $PostType


public static "values"(): ($PostType)[]
public static "valueOf"(arg0: string): $PostType
public "getTranslationKeySuffix"(): string
public "getDefaultEnglishTranslation"(): string
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "translationKeySuffix"(): string
get "defaultEnglishTranslation"(): string
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostType$$Type = (("plain") | ("heavy") | ("turned") | ("pinched") | ("double") | ("quad"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostType_ = $PostType$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.PanelBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$TrapdoorType, $TrapdoorType$$Type} from "com.ldtteam.domumornamentum.block.types.TrapdoorType"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$AbstractPanelBlockTrapdoor, $AbstractPanelBlockTrapdoor$$Type} from "com.ldtteam.domumornamentum.block.AbstractPanelBlockTrapdoor"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PanelBlock extends $AbstractPanelBlockTrapdoor<($PanelBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "TYPE": $EnumProperty<($TrapdoorType)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PanelBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "OPEN": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PanelBlock$$Type = ($PanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PanelBlock_ = $PanelBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.vanilla.SlabBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$SlabBlock, $SlabBlock$$Type} from "com.ldtteam.domumornamentum.block.vanilla.SlabBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $SlabBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $SlabBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlabBlockItem$$Type = ($SlabBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlabBlockItem_ = $SlabBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.PaperWallBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$AbstractBlockPane, $AbstractBlockPane$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlockPane"
import {$IronBarsBlock, $IronBarsBlock$$Type} from "net.minecraft.world.level.block.IronBarsBlock"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PaperWallBlock extends $AbstractBlockPane<($PaperWallBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static "PROPERTIES": $ImmutableMap<($Direction), ($BooleanProperty)>
 "shapeByIndex": ($VoxelShape)[]
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($IronBarsBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "collisionShapeByIndex": ($VoxelShape)[]
 "hasCollision": boolean

constructor()

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaperWallBlock$$Type = ($PaperWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaperWallBlock_ = $PaperWallBlock$$Type;
}}
declare module "com.ldtteam.blockui.util.records.Pos2i$MutablePos2i" {
import {$Pos2i, $Pos2i$$Type} from "com.ldtteam.blockui.util.records.Pos2i"
import {$Pos2i$ImmutablePos2i, $Pos2i$ImmutablePos2i$$Type} from "com.ldtteam.blockui.util.records.Pos2i$ImmutablePos2i"

export class $Pos2i$MutablePos2i implements $Pos2i {

constructor(arg0: integer, arg1: integer)
constructor()

public "x"(): integer
public "y"(): integer
public "toImmutable"(): $Pos2i$ImmutablePos2i
public "toMutable"(): $Pos2i$MutablePos2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pos2i$MutablePos2i$$Type = ($Pos2i$MutablePos2i);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pos2i$MutablePos2i_ = $Pos2i$MutablePos2i$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.ArchitectsCutterBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$AbstractBlock, $AbstractBlock$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ArchitectsCutterBlock extends $AbstractBlock<($ArchitectsCutterBlock)> {
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "getRegistryName"(): $ResourceLocation
public "asHolder"(): $Holder<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArchitectsCutterBlock$$Type = ($ArchitectsCutterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArchitectsCutterBlock_ = $ArchitectsCutterBlock$$Type;
}}
declare module "com.ldtteam.structurize.items.ItemBuildTool" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractItemStructurize, $AbstractItemStructurize$$Type} from "com.ldtteam.structurize.items.AbstractItemStructurize"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ItemBuildTool extends $AbstractItemStructurize {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBuildTool$$Type = ($ItemBuildTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBuildTool_ = $ItemBuildTool$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.ShingleSlabBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ShingleSlabBlock, $ShingleSlabBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.ShingleSlabBlock"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ShingleSlabBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $ShingleSlabBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShingleSlabBlockItem$$Type = ($ShingleSlabBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShingleSlabBlockItem_ = $ShingleSlabBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.AbstractBlockWall" {
import {$WallSide, $WallSide$$Type} from "net.minecraft.world.level.block.state.properties.WallSide"
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$WallBlock, $WallBlock$$Type} from "net.minecraft.world.level.block.WallBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlockWall<B extends $AbstractBlockWall<(B)>> extends $WallBlock implements $IDOBlock<(B)> {
 "shapeByIndex": $Map<($BlockState), ($VoxelShape)>
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UP": $BooleanProperty
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "collisionShapeByIndex": $Map<($BlockState), ($VoxelShape)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public "asHolder"(): $Holder<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockWall$$Type<B> = ($AbstractBlockWall<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockWall_<B> = $AbstractBlockWall$$Type<(B)>;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.FramedLightBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$FramedLightType, $FramedLightType$$Type} from "com.ldtteam.domumornamentum.block.types.FramedLightType"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$AbstractBlock, $AbstractBlock$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $FramedLightBlock extends $AbstractBlock<($FramedLightBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
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

constructor(arg0: $FramedLightType$$Type)

public static "getName"(arg0: $FramedLightType$$Type): string
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "getFramedLightType"(): $FramedLightType
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "framedLightType"(): $FramedLightType
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedLightBlock$$Type = ($FramedLightBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FramedLightBlock_ = $FramedLightBlock$$Type;
}}
declare module "com.ldtteam.structurize.blocks.interfaces.IAnchorBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAnchorBlock {

}

export namespace $IAnchorBlock {
const probejs$$marker: never
}
export class $IAnchorBlock$$Static implements $IAnchorBlock {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnchorBlock$$Type = ($IAnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAnchorBlock_ = $IAnchorBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.vanilla.FenceBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FenceBlock, $FenceBlock$$Type} from "com.ldtteam.domumornamentum.block.vanilla.FenceBlock"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $FenceBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $FenceBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceBlockItem$$Type = ($FenceBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceBlockItem_ = $FenceBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.BrickBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BrickType, $BrickType$$Type} from "com.ldtteam.domumornamentum.block.types.BrickType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$AbstractBlock, $AbstractBlock$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BrickBlock extends $AbstractBlock<($BrickBlock)> {
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

constructor(arg0: $BrickType$$Type)

public "getType"(): $BrickType
public "asHolder"(): $Holder<(any)>
get "type"(): $BrickType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrickBlock$$Type = ($BrickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrickBlock_ = $BrickBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.FloatingCarpetBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AbstractBlock, $AbstractBlock$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FloatingCarpetBlock extends $AbstractBlock<($FloatingCarpetBlock)> {
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

constructor(arg0: $DyeColor$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getColor"(): $DyeColor
public "asHolder"(): $Holder<(any)>
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatingCarpetBlock$$Type = ($FloatingCarpetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatingCarpetBlock_ = $FloatingCarpetBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.types.FancyDoorType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $FancyDoorType extends $Enum<($FancyDoorType)> implements $StringRepresentable {
static readonly "CREEPER": $FancyDoorType
static readonly "FULL": $FancyDoorType


public static "values"(): ($FancyDoorType)[]
public static "valueOf"(arg0: string): $FancyDoorType
public "getTranslationKeySuffix"(): string
public "getDefaultEnglishTranslation"(): string
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "translationKeySuffix"(): string
get "defaultEnglishTranslation"(): string
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyDoorType$$Type = (("full") | ("creeper"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyDoorType_ = $FancyDoorType$$Type;
}}
declare module "com.ldtteam.structurize.blocks.schematic.BlockSubstitution" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockSubstitution extends $Block {
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

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "defaultSubstitutionProperties"(): $BlockBehaviour$Properties
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSubstitution$$Type = ($BlockSubstitution);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSubstitution_ = $BlockSubstitution$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.PanelBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$PanelBlock, $PanelBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.PanelBlock"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $PanelBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $PanelBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "renderPreview"(): boolean
public "getInputIds"(): $List<($ResourceLocation)>
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PanelBlockItem$$Type = ($PanelBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PanelBlockItem_ = $PanelBlockItem$$Type;
}}
declare module "com.ldtteam.structurize.placement.handlers.placement.PlacementError$PlacementErrorType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PlacementError$PlacementErrorType extends $Enum<($PlacementError$PlacementErrorType)> {
static readonly "INSIDE_COLONY": $PlacementError$PlacementErrorType
static readonly "NOT_SOLID": $PlacementError$PlacementErrorType
static readonly "NEEDS_AIR_ABOVE": $PlacementError$PlacementErrorType
static readonly "NOT_WATER": $PlacementError$PlacementErrorType


public static "values"(): ($PlacementError$PlacementErrorType)[]
public static "valueOf"(arg0: string): $PlacementError$PlacementErrorType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementError$PlacementErrorType$$Type = (("not_solid") | ("inside_colony") | ("needs_air_above") | ("not_water"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementError$PlacementErrorType_ = $PlacementError$PlacementErrorType$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.AllBrickStairBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$StairsShape, $StairsShape$$Type} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$AbstractBlockStairs, $AbstractBlockStairs$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlockStairs"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AllBrickStairBlock extends $AbstractBlockStairs<($AllBrickStairBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllBrickStairBlock$$Type = ($AllBrickStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllBrickStairBlock_ = $AllBrickStairBlock$$Type;
}}
declare module "com.ldtteam.blockui.util.records.Pos2i" {
import {$Pos2i$ImmutablePos2i, $Pos2i$ImmutablePos2i$$Type} from "com.ldtteam.blockui.util.records.Pos2i$ImmutablePos2i"
import {$Pos2i$MutablePos2i, $Pos2i$MutablePos2i$$Type} from "com.ldtteam.blockui.util.records.Pos2i$MutablePos2i"

export interface $Pos2i {

 "x"(): integer
 "y"(): integer
 "toImmutable"(): $Pos2i$ImmutablePos2i
 "toMutable"(): $Pos2i$MutablePos2i
}

export namespace $Pos2i {
const probejs$$marker: never
}
export class $Pos2i$$Static implements $Pos2i {


 "x"(): integer
 "y"(): integer
 "toImmutable"(): $Pos2i$ImmutablePos2i
 "toMutable"(): $Pos2i$MutablePos2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pos2i$$Type = ($Pos2i);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pos2i_ = $Pos2i$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.types.TrapdoorType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $TrapdoorType extends $Enum<($TrapdoorType)> implements $StringRepresentable {
static readonly "HORIZONTAL_BARS": $TrapdoorType
static readonly "VERTICALLY_SQUIGGLY_STRIPED": $TrapdoorType
static readonly "WAFFLE": $TrapdoorType
static readonly "VERTICALLY_STRIPED": $TrapdoorType
static readonly "FULL": $TrapdoorType
static readonly "HORIZONTALLY_SQUIGGLY_STRIPED": $TrapdoorType
static readonly "BOSS": $TrapdoorType
static readonly "HORIZONTALLY_STRIPED": $TrapdoorType
static readonly "ROUNDEL": $TrapdoorType
static readonly "MOULDING": $TrapdoorType
static readonly "COFFER": $TrapdoorType
static readonly "PORTHOLE": $TrapdoorType
static readonly "SLOT": $TrapdoorType
static readonly "VERTICAL_BARS": $TrapdoorType
static readonly "PORT_MANTEAU": $TrapdoorType


public static "values"(): ($TrapdoorType)[]
public static "valueOf"(arg0: string): $TrapdoorType
public "getTranslationKeySuffix"(): string
public "getDefaultEnglishTranslation"(): string
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "translationKeySuffix"(): string
get "defaultEnglishTranslation"(): string
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrapdoorType$$Type = (("boss") | ("coffer") | ("full") | ("horizontal_bars") | ("horizontally_squiggly_striped") | ("horizontally_striped") | ("moulding") | ("port_manteau") | ("porthole") | ("roundel") | ("slot") | ("vertical_bars") | ("vertically_squiggly_striped") | ("vertically_striped") | ("waffle"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrapdoorType_ = $TrapdoorType$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.vanilla.SlabBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$AbstractBlockSlab, $AbstractBlockSlab$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlockSlab"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SlabType, $SlabType$$Type} from "net.minecraft.world.level.block.state.properties.SlabType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$SlabBlock as $SlabBlock$0, $SlabBlock$$Type as $SlabBlock$0$$Type} from "net.minecraft.world.level.block.SlabBlock"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SlabBlock extends $AbstractBlockSlab<($SlabBlock)> implements $IMateriallyTexturedBlock, $EntityBlock, $ICachedItemGroupBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SlabBlock$0)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "TYPE": $EnumProperty<($SlabType)>
 "hasCollision": boolean

constructor()

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlabBlock$$Type = ($SlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlabBlock_ = $SlabBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.AbstractBlockStairs" {
import {$StairsShape, $StairsShape$$Type} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DOStairBlock, $DOStairBlock$$Type} from "com.ldtteam.domumornamentum.block.DOStairBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlockStairs<B extends $AbstractBlockStairs<(B)>> extends $DOStairBlock implements $IDOBlock<(B)> {
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
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $Supplier$$Type<($BlockState$$Type)>, arg1: $BlockBehaviour$Properties$$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public "asHolder"(): $Holder<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockStairs$$Type<B> = ($AbstractBlockStairs<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockStairs_<B> = $AbstractBlockStairs$$Type<(B)>;
}}
declare module "com.ldtteam.domumornamentum.item.SelfUpgradingBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $SelfUpgradingBlockItem extends $BlockItem {
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

public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
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
export type $SelfUpgradingBlockItem$$Type = ($SelfUpgradingBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelfUpgradingBlockItem_ = $SelfUpgradingBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.ShingleBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ShingleShapeType, $ShingleShapeType$$Type} from "com.ldtteam.domumornamentum.block.types.ShingleShapeType"
import {$AbstractBlockStairs, $AbstractBlockStairs$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlockStairs"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$StairsShape, $StairsShape$$Type} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ShingleBlock extends $AbstractBlockStairs<($ShingleBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isStairs"(arg0: $BlockState$$Type): boolean
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $List<($IMateriallyTexturedBlockComponent)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public static "getTypeFromShape"(arg0: $StairsShape$$Type): $ShingleShapeType
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $List<($IMateriallyTexturedBlockComponent)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShingleBlock$$Type = ($ShingleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShingleBlock_ = $ShingleBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.FancyTrapdoorBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$FancyTrapdoorType, $FancyTrapdoorType$$Type} from "com.ldtteam.domumornamentum.block.types.FancyTrapdoorType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AbstractBlockTrapdoor, $AbstractBlockTrapdoor$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlockTrapdoor"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$TrapDoorBlock, $TrapDoorBlock$$Type} from "net.minecraft.world.level.block.TrapDoorBlock"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FancyTrapdoorBlock extends $AbstractBlockTrapdoor<($FancyTrapdoorBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "TYPE": $EnumProperty<($FancyTrapdoorType)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TrapDoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FancyTrapdoorBlock$$Type = ($FancyTrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FancyTrapdoorBlock_ = $FancyTrapdoorBlock$$Type;
}}
declare module "com.ldtteam.blockui.views.BOWindow$WindowRenderType" {
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$BOWindow, $BOWindow$$Type} from "com.ldtteam.blockui.views.BOWindow"

export class $BOWindow$WindowRenderType extends $Enum<($BOWindow$WindowRenderType)> {
static readonly "FULLSCREEN": $BOWindow$WindowRenderType
static readonly "FIXED_VANILLA": $BOWindow$WindowRenderType
static readonly "OVERSIZED_VANILLA": $BOWindow$WindowRenderType
static readonly "FULLSCREEN_VANILLA": $BOWindow$WindowRenderType
static readonly "FIXED": $BOWindow$WindowRenderType
static readonly "VANILLA": $BOWindow$WindowRenderType
static readonly "OVERSIZED": $BOWindow$WindowRenderType


public static "values"(): ($BOWindow$WindowRenderType)[]
public static "valueOf"(arg0: string): $BOWindow$WindowRenderType
public "calcRenderScale"(arg0: $Window$$Type, arg1: $BOWindow$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BOWindow$WindowRenderType$$Type = (("vanilla") | ("fullscreen") | ("fullscreen_vanilla") | ("fixed") | ("fixed_vanilla") | ("oversized") | ("oversized_vanilla"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BOWindow$WindowRenderType_ = $BOWindow$WindowRenderType$$Type;
}}
declare module "com.ldtteam.structurize.items.ItemTagSubstitution" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ISpecialBlockPickItem, $ISpecialBlockPickItem$$Type} from "com.ldtteam.structurize.api.ISpecialBlockPickItem"

export class $ItemTagSubstitution extends $BlockItem implements $ISpecialBlockPickItem {
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

constructor()

public "getHighlightTip"(arg0: $ItemStack$$Type, arg1: $Component$$Type): $Component
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "onBlockPick"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $BlockPos$$Type, arg3: boolean): $InteractionResult
public "onAbsorbBlock"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type): void
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
export type $ItemTagSubstitution$$Type = ($ItemTagSubstitution);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTagSubstitution_ = $ItemTagSubstitution$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.types.ShingleSlabShapeType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ShingleSlabShapeType extends $Enum<($ShingleSlabShapeType)> implements $StringRepresentable {
static readonly "THREE_WAY": $ShingleSlabShapeType
static readonly "TOP": $ShingleSlabShapeType
static readonly "ONE_WAY": $ShingleSlabShapeType
static readonly "TWO_WAY": $ShingleSlabShapeType
static readonly "FOUR_WAY": $ShingleSlabShapeType
static readonly "CURVED": $ShingleSlabShapeType


public "getName"(): string
public static "values"(): ($ShingleSlabShapeType)[]
public static "valueOf"(arg0: string): $ShingleSlabShapeType
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "name"(): string
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShingleSlabShapeType$$Type = (("top") | ("one_way") | ("two_way") | ("three_way") | ("four_way") | ("curved"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShingleSlabShapeType_ = $ShingleSlabShapeType$$Type;
}}
declare module "com.ldtteam.structurize.util.ScanToolData" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CommandBlockEntity, $CommandBlockEntity$$Type} from "net.minecraft.world.level.block.entity.CommandBlockEntity"
import {$ScanToolData$Slot, $ScanToolData$Slot$$Type} from "com.ldtteam.structurize.util.ScanToolData$Slot"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ScanToolData extends $Record {
static readonly "NUM_SLOTS": integer
static readonly "CODEC": $Codec<($ScanToolData)>
static "EMPTY": $ScanToolData
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ScanToolData)>

constructor(slots: $List$$Type<($ScanToolData$Slot$$Type)>, currentSlotId: integer, commandPos: $BlockPos$$Type, dimension: $ResourceKey$$Type<($Level)>)

public "dimension"(): $ResourceKey<($Level)>
public "nextSlot"(): $ScanToolData
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "slots"(): $List<($ScanToolData$Slot)>
public "moveTo"(arg0: integer): $ScanToolData
public "writeToItemStack"(arg0: $ItemStack$$Type): void
public static "updateItemStack"(arg0: $ItemStack$$Type, arg1: $UnaryOperator$$Type<($ScanToolData)>): $ScanToolData
public "withCurrentSlot"(arg0: $ScanToolData$Slot$$Type): $ScanToolData
public "withCommandBlock"(arg0: $CommandBlockEntity$$Type): $ScanToolData
public static "readFromItemStack"(arg0: $ItemStack$$Type): $ScanToolData
public "currentSlotId"(): integer
public "commandPos"(): $BlockPos
public "currentSlot"(): $ScanToolData$Slot
public "prevSlot"(): $ScanToolData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScanToolData$$Type = ({"slots"?: $List$$Type<($ScanToolData$Slot$$Type)>, "dimension"?: $ResourceKey$$Type<($Level)>, "commandPos"?: $BlockPos$$Type, "currentSlotId"?: integer}) | ([slots?: $List$$Type<($ScanToolData$Slot$$Type)>, dimension?: $ResourceKey$$Type<($Level)>, commandPos?: $BlockPos$$Type, currentSlotId?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScanToolData_ = $ScanToolData$$Type;
}}
declare module "com.ldtteam.structurize.blockentities.interfaces.IBlueprintDataProviderBE" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Tuple, $Tuple$$Type} from "net.minecraft.util.Tuple"

export interface $IBlueprintDataProviderBE {

 "removeTag"(arg0: $BlockPos$$Type, arg1: string): void
 "addTag"(arg0: $BlockPos$$Type, arg1: string): void
 "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
 "getSchematicName"(): string
 "getInWorldCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "getPositionedTags"(): $Map<($BlockPos), ($List<(string)>)>
 "getWorldTagPosMap"(): $Map<($BlockPos), ($List<(string)>)>
 "getWorldTagNamePosMap"(): $Map<(string), ($Set<($BlockPos)>)>
 "getRealWorldPos"(arg0: $BlockPos$$Type): $BlockPos
 "setSchematicName"(arg0: string): void
 "setPositionedTags"(arg0: $Map$$Type<($BlockPos$$Type), ($List$$Type<(string)>)>): void
 "getSchematicCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "setSchematicCorners"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): void
 "setBlueprintPath"(arg0: string): void
 "getBlueprintPath"(): string
 "setPackName"(arg0: string): void
 "getPackName"(): string
 "getTilePos"(): $BlockPos
 "readSchematicDataFromNBT"(arg0: $CompoundTag$$Type): void
 "writeSchematicDataToNBT"(arg0: $CompoundTag$$Type): void
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "schematicName"(): string
get "inWorldCorners"(): $Tuple<($BlockPos), ($BlockPos)>
get "positionedTags"(): $Map<($BlockPos), ($List<(string)>)>
get "worldTagPosMap"(): $Map<($BlockPos), ($List<(string)>)>
get "worldTagNamePosMap"(): $Map<(string), ($Set<($BlockPos)>)>
set "schematicName"(value: string)
set "positionedTags"(value: $Map$$Type<($BlockPos$$Type), ($List$$Type<(string)>)>)
get "schematicCorners"(): $Tuple<($BlockPos), ($BlockPos)>
set "blueprintPath"(value: string)
get "blueprintPath"(): string
set "packName"(value: string)
get "packName"(): string
get "tilePos"(): $BlockPos
}

export namespace $IBlueprintDataProviderBE {
const TAG_SCHEMATIC_NAME: string
const TAG_TAG_NAME_LIST: string
const TAG_PACK: string
const TAG_PATH: string
const TAG_CORNER_ONE: string
const TAG_POS_TAG_MAP: string
const TAG_BLUEPRINTDATA: string
const TAG_TAG_NAME: string
const TAG_TAG_POS: string
const TAG_CORNER_TWO: string
function writeMapToCompound(arg0: $CompoundTag$$Type, arg1: $Map$$Type<($BlockPos$$Type), ($List$$Type<(string)>)>): void
function readTagPosMapFrom(arg0: $CompoundTag$$Type): $Map<($BlockPos), ($List<(string)>)>
const probejs$$marker: never
}
export class $IBlueprintDataProviderBE$$Static implements $IBlueprintDataProviderBE {
static readonly "TAG_SCHEMATIC_NAME": string
static readonly "TAG_TAG_NAME_LIST": string
static readonly "TAG_PACK": string
static readonly "TAG_PATH": string
static readonly "TAG_CORNER_ONE": string
static readonly "TAG_POS_TAG_MAP": string
static readonly "TAG_BLUEPRINTDATA": string
static readonly "TAG_TAG_NAME": string
static readonly "TAG_TAG_POS": string
static readonly "TAG_CORNER_TWO": string


 "removeTag"(arg0: $BlockPos$$Type, arg1: string): void
 "addTag"(arg0: $BlockPos$$Type, arg1: string): void
 "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
 "getSchematicName"(): string
 "getInWorldCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "getPositionedTags"(): $Map<($BlockPos), ($List<(string)>)>
static "writeMapToCompound"(arg0: $CompoundTag$$Type, arg1: $Map$$Type<($BlockPos$$Type), ($List$$Type<(string)>)>): void
static "readTagPosMapFrom"(arg0: $CompoundTag$$Type): $Map<($BlockPos), ($List<(string)>)>
 "getWorldTagPosMap"(): $Map<($BlockPos), ($List<(string)>)>
 "getWorldTagNamePosMap"(): $Map<(string), ($Set<($BlockPos)>)>
 "getRealWorldPos"(arg0: $BlockPos$$Type): $BlockPos
 "setSchematicName"(arg0: string): void
 "setPositionedTags"(arg0: $Map$$Type<($BlockPos$$Type), ($List$$Type<(string)>)>): void
 "getSchematicCorners"(): $Tuple<($BlockPos), ($BlockPos)>
 "setSchematicCorners"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): void
 "setBlueprintPath"(arg0: string): void
 "getBlueprintPath"(): string
 "setPackName"(arg0: string): void
 "getPackName"(): string
 "getTilePos"(): $BlockPos
 "readSchematicDataFromNBT"(arg0: $CompoundTag$$Type): void
 "writeSchematicDataToNBT"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlueprintDataProviderBE$$Type = ($IBlueprintDataProviderBE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlueprintDataProviderBE_ = $IBlueprintDataProviderBE$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.decoration.AllBrickStairBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AllBrickStairBlock, $AllBrickStairBlock$$Type} from "com.ldtteam.domumornamentum.block.decorative.AllBrickStairBlock"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $AllBrickStairBlockItem extends $BlockItem implements $IDoItem {
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

constructor(arg0: $AllBrickStairBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllBrickStairBlockItem$$Type = ($AllBrickStairBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllBrickStairBlockItem_ = $AllBrickStairBlockItem$$Type;
}}
declare module "com.ldtteam.structurize.storage.rendering.types.BoxPreviewData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BoxPreviewData extends $Record {
static readonly "CODEC": $Codec<($BoxPreviewData)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BoxPreviewData)>

constructor(pos1: $BlockPos$$Type, pos2: $BlockPos$$Type, anchor: $Optional$$Type<($BlockPos$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "anchor"(): $Optional<($BlockPos)>
public "pos1"(): $BlockPos
public "pos2"(): $BlockPos
public "withCorners"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): $BoxPreviewData
public "withAnchor"(arg0: $Optional$$Type<($BlockPos$$Type)>): $BoxPreviewData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoxPreviewData$$Type = ({"pos2"?: $BlockPos$$Type, "anchor"?: ($BlockPos$$Type)?, "pos1"?: $BlockPos$$Type}) | ([pos2?: $BlockPos$$Type, anchor?: ($BlockPos$$Type)?, pos1?: $BlockPos$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoxPreviewData_ = $BoxPreviewData$$Type;
}}
declare module "com.ldtteam.blockui.util.cursor.Cursor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $Cursor {

 "apply"(): void

(): void
}

export namespace $Cursor {
const TEXT_CURSOR: $Cursor
const ARROW: $Cursor
const VERTICAL_RESIZE: $Cursor
const RESIZE: $Cursor
const CROSSHAIR: $Cursor
const HORIZONTAL_RESIZE: $Cursor
const DEFAULT: $Cursor
const HAND: $Cursor
function of(arg0: $ResourceLocation$$Type): $Cursor
function named(arg0: $Runnable$$Type, arg1: any): $Cursor
const probejs$$marker: never
}
export class $Cursor$$Static implements $Cursor {
static readonly "TEXT_CURSOR": $Cursor
static readonly "ARROW": $Cursor
static readonly "VERTICAL_RESIZE": $Cursor
static readonly "RESIZE": $Cursor
static readonly "CROSSHAIR": $Cursor
static readonly "HORIZONTAL_RESIZE": $Cursor
static readonly "DEFAULT": $Cursor
static readonly "HAND": $Cursor


 "apply"(): void
static "of"(arg0: $ResourceLocation$$Type): $Cursor
static "named"(arg0: $Runnable$$Type, arg1: any): $Cursor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cursor$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cursor_ = $Cursor$$Type;
}}
declare module "com.ldtteam.structurize.api.ISpecialBlockPickItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ISpecialBlockPickItem {

 "onBlockPick"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $BlockPos$$Type, arg3: boolean): $InteractionResult

(arg0: $Player, arg1: $ItemStack, arg2: $BlockPos, arg3: boolean): $InteractionResult$$Type
}

export namespace $ISpecialBlockPickItem {
const probejs$$marker: never
}
export class $ISpecialBlockPickItem$$Static implements $ISpecialBlockPickItem {


 "onBlockPick"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $BlockPos$$Type, arg3: boolean): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpecialBlockPickItem$$Type = ((arg0: $Player, arg1: $ItemStack, arg2: $BlockPos, arg3: boolean) => $InteractionResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISpecialBlockPickItem_ = $ISpecialBlockPickItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.AbstractBlockTrapdoor" {
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$TrapDoorBlock, $TrapDoorBlock$$Type} from "net.minecraft.world.level.block.TrapDoorBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlockTrapdoor<B extends $AbstractBlockTrapdoor<(B)>> extends $TrapDoorBlock implements $IDOBlock<(B)> {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "UPDATE_ALL": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TrapDoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public "asHolder"(): $Holder<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockTrapdoor$$Type<B> = ($AbstractBlockTrapdoor<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockTrapdoor_<B> = $AbstractBlockTrapdoor$$Type<(B)>;
}}
declare module "com.ldtteam.blockui.mod.item.BlockStateRenderingData" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BlockStateRenderingData extends $Record {
static readonly "ILLEGAL_BLOCK_ENTITY_POS": $BlockPos

constructor(blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type, modelData: $ModelData$$Type, modelNeedsRotationFix: boolean, playerPickedItemStack: $Lazy$$Type<($ItemStack$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): $BlockStateRenderingData
public static "of"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $BlockStateRenderingData
public static "of"(arg0: $BlockState$$Type): $BlockStateRenderingData
public "modelData"(): $ModelData
public "itemStack"(): $ItemStack
public "blockState"(): $BlockState
public "blockEntity"(): $BlockEntity
public "playerPickedItemStack"(): $Lazy<($ItemStack)>
public static "checkModelForYrotation"(arg0: $BlockState$$Type): boolean
public "updateBlockEntity"(arg0: $Function$$Type<($BlockEntity), ($BlockEntity$$Type)>): $BlockStateRenderingData
public "modelNeedsRotationFix"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateRenderingData$$Type = ({"blockEntity"?: $BlockEntity$$Type, "modelNeedsRotationFix"?: boolean, "modelData"?: $ModelData$$Type, "blockState"?: $BlockState$$Type, "playerPickedItemStack"?: $Lazy$$Type<($ItemStack$$Type)>}) | ([blockEntity?: $BlockEntity$$Type, modelNeedsRotationFix?: boolean, modelData?: $ModelData$$Type, blockState?: $BlockState$$Type, playerPickedItemStack?: $Lazy$$Type<($ItemStack$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateRenderingData_ = $BlockStateRenderingData$$Type;
}}
declare module "com.ldtteam.structurize.items.ItemTagTool" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractItemWithPosSelector, $AbstractItemWithPosSelector$$Type} from "com.ldtteam.structurize.items.AbstractItemWithPosSelector"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemTagTool extends $AbstractItemWithPosSelector {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()
constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "onAirRightClick"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $ItemStack$$Type): $InteractionResult
public "getRegisteredItemInstance"(): $AbstractItemWithPosSelector
get "registeredItemInstance"(): $AbstractItemWithPosSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTagTool$$Type = ($ItemTagTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTagTool_ = $ItemTagTool$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.DoubleHighBlockItemWithClientBePlacement" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$SelfUpgradingDoubleHighBlockItem, $SelfUpgradingDoubleHighBlockItem$$Type} from "com.ldtteam.domumornamentum.item.SelfUpgradingDoubleHighBlockItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

/**
 * 
 * @deprecated
 */
export class $DoubleHighBlockItemWithClientBePlacement extends $SelfUpgradingDoubleHighBlockItem {
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
export type $DoubleHighBlockItemWithClientBePlacement$$Type = ($DoubleHighBlockItemWithClientBePlacement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleHighBlockItemWithClientBePlacement_ = $DoubleHighBlockItemWithClientBePlacement$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.BarrelBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$AbstractBlock, $AbstractBlock$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BarrelBlock extends $AbstractBlock<($BarrelBlock)> implements $SimpleWaterloggedBlock {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
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
export type $BarrelBlock$$Type = ($BarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BarrelBlock_ = $BarrelBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SelfUpgradingBlockItem, $SelfUpgradingBlockItem$$Type} from "com.ldtteam.domumornamentum.item.SelfUpgradingBlockItem"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

/**
 * 
 * @deprecated
 */
export class $BlockItemWithClientBePlacement extends $SelfUpgradingBlockItem {
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
export type $BlockItemWithClientBePlacement$$Type = ($BlockItemWithClientBePlacement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockItemWithClientBePlacement_ = $BlockItemWithClientBePlacement$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.ExtraBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AbstractBlock, $AbstractBlock$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ExtraBlockType, $ExtraBlockType$$Type} from "com.ldtteam.domumornamentum.block.types.ExtraBlockType"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ExtraBlock extends $AbstractBlock<($ExtraBlock)> {
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

constructor(arg0: $ExtraBlockType$$Type)

public "getType"(): $ExtraBlockType
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
get "type"(): $ExtraBlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraBlock$$Type = ($ExtraBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraBlock_ = $ExtraBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.types.BrickType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $BrickType extends $Enum<($BrickType)> implements $StringRepresentable {
static readonly "BROWN_STONE": $BrickType
static readonly "SUFFIX": string
static readonly "SAND": $BrickType
static readonly "SAND_STONE": $BrickType
static readonly "CREAM": $BrickType
static readonly "BEIGE": $BrickType
static readonly "BEIGE_STONE": $BrickType
static readonly "ROAN": $BrickType
static readonly "CREAM_STONE": $BrickType
static readonly "ROAN_STONE": $BrickType
static readonly "BROWN": $BrickType


public static "values"(): ($BrickType)[]
public static "valueOf"(arg0: string): $BrickType
public "getSerializedName"(): string
public "getIngredient2"(): $Item
public "getIngredient"(): $Item
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "serializedName"(): string
get "ingredient2"(): $Item
get "ingredient"(): $Item
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrickType$$Type = (("brown_bricks") | ("beige_bricks") | ("cream_bricks") | ("roan_bricks") | ("sand_bricks") | ("brown_stone_bricks") | ("beige_stone_bricks") | ("cream_stone_bricks") | ("sand_stone_bricks") | ("roan_stone_bricks"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrickType_ = $BrickType$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.SelfUpgradingDoubleHighBlockItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DoubleHighBlockItem, $DoubleHighBlockItem$$Type} from "net.minecraft.world.item.DoubleHighBlockItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $SelfUpgradingDoubleHighBlockItem extends $DoubleHighBlockItem {
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

public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
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
export type $SelfUpgradingDoubleHighBlockItem$$Type = ($SelfUpgradingDoubleHighBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelfUpgradingDoubleHighBlockItem_ = $SelfUpgradingDoubleHighBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.vanilla.DoorBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractBlockDoor, $AbstractBlockDoor$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlockDoor"
import {$DoubleBlockHalf, $DoubleBlockHalf$$Type} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$DoorHingeSide, $DoorHingeSide$$Type} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DoorBlock as $DoorBlock$0, $DoorBlock$$Type as $DoorBlock$0$$Type} from "net.minecraft.world.level.block.DoorBlock"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$DoorType, $DoorType$$Type} from "com.ldtteam.domumornamentum.block.types.DoorType"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $DoorBlock extends $AbstractBlockDoor<($DoorBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "UPDATE_ALL": integer
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "TYPE": $EnumProperty<($DoorType)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DoorBlock$0)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()

public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "createDoorBlock"(arg0: $BlockSetType$$Type, arg1: $BlockBehaviour$Properties$$Type): $DoorBlock$0
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoorBlock$$Type = ($DoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoorBlock_ = $DoorBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.AbstractBlockSlab" {
import {$IDOBlock, $IDOBlock$$Type} from "com.ldtteam.domumornamentum.block.interfaces.IDOBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SlabBlock, $SlabBlock$$Type} from "net.minecraft.world.level.block.SlabBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SlabType, $SlabType$$Type} from "net.minecraft.world.level.block.state.properties.SlabType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractBlockSlab<B extends $AbstractBlockSlab<(B)>> extends $SlabBlock implements $IDOBlock<(B)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SlabBlock)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "TYPE": $EnumProperty<($SlabType)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getRegistryName"(): $ResourceLocation
public "getRegistryName"(arg0: $Block$$Type): $ResourceLocation
public "asHolder"(): $Holder<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockSlab$$Type<B> = ($AbstractBlockSlab<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockSlab_<B> = $AbstractBlockSlab$$Type<(B)>;
}}
declare module "com.ldtteam.structurize.items.ItemShapeTool" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractItemStructurize, $AbstractItemStructurize$$Type} from "com.ldtteam.structurize.items.AbstractItemStructurize"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $ItemShapeTool extends $AbstractItemStructurize {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShapeTool$$Type = ($ItemShapeTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShapeTool_ = $ItemShapeTool$$Type;
}}
declare module "com.ldtteam.structurize.placement.structure.AbstractStructureHandler" {
import {$Blueprint, $Blueprint$$Type} from "com.ldtteam.structurize.blueprints.v1.Blueprint"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RotationMirror, $RotationMirror$$Type} from "com.ldtteam.structurize.api.RotationMirror"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IStructureHandler, $IStructureHandler$$Type} from "com.ldtteam.structurize.placement.structure.IStructureHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractStructureHandler implements $IStructureHandler {

constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Future$$Type<($Blueprint$$Type)>, arg3: $RotationMirror$$Type)
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Blueprint$$Type, arg3: $RotationMirror$$Type)

public "isReady"(): boolean
public "setMd5"(arg0: string): void
public "getMd5"(): string
public "getRotationMirror"(): $RotationMirror
public "setBlueprint"(arg0: $Blueprint$$Type): void
public "getWorld"(): $Level
public "getWorldPos"(): $BlockPos
public "getBluePrint"(): $Blueprint
public "triggerSuccess"(arg0: $BlockPos$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean): void
public "hasBluePrint"(): boolean
public "onCompletion"(): void
public "consume"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "isCreative"(): boolean
public "getInventory"(): $IItemHandler
public "fancyPlacement"(): boolean
public "getHeldItem"(): $ItemStack
public "isCorrectMD5"(arg0: string): boolean
public "isStackFree"(arg0: $ItemStack$$Type): boolean
public "allowReplace"(): boolean
public "getMaxBlocksCheckedPerCall"(): integer
public "shouldBlocksBeConsideredEqual"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
public "getStructurePosFromWorld"(arg0: $BlockPos$$Type): $BlockPos
public "getProgressPosInWorld"(arg0: $BlockPos$$Type): $BlockPos
public "triggerEntitySuccess"(arg0: $BlockPos$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean): void
public "getStepsPerCall"(): integer
public "replaceWithSolidBlock"(arg0: $BlockState$$Type): boolean
public "hasRequiredItems"(arg0: $List$$Type<($ItemStack$$Type)>): boolean
public "prePlacementLogic"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getSolidBlockForPos"(arg0: $BlockPos$$Type, arg1: $Function$$Type<($BlockPos), ($BlockState$$Type)>): $BlockState
get "ready"(): boolean
set "md5"(value: string)
get "md5"(): string
get "rotationMirror"(): $RotationMirror
set "blueprint"(value: $Blueprint$$Type)
get "world"(): $Level
get "worldPos"(): $BlockPos
get "bluePrint"(): $Blueprint
get "creative"(): boolean
get "inventory"(): $IItemHandler
get "heldItem"(): $ItemStack
get "maxBlocksCheckedPerCall"(): integer
get "stepsPerCall"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStructureHandler$$Type = ($AbstractStructureHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractStructureHandler_ = $AbstractStructureHandler$$Type;
}}
declare module "com.ldtteam.structurize.items.AbstractItemStructurize" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $AbstractItemStructurize extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: string, arg1: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractItemStructurize$$Type = ($AbstractItemStructurize);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractItemStructurize_ = $AbstractItemStructurize$$Type;
}}
declare module "com.ldtteam.structurize.storage.StructurePackMeta" {
import {$List, $List$$Type} from "java.util.List"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $StructurePackMeta {

constructor(arg0: $JsonObject$$Type, arg1: $Path$$Type, arg2: string)

public "setImmutable"(arg0: boolean): void
public "getName"(): string
public "getPath"(): $Path
public "getOwner"(): string
public "getVersion"(): double
public "isImmutable"(): boolean
public "getDesc"(): string
public "getModList"(): $List<(string)>
public "getNormalizedSubPath"(arg0: string): string
public "getPackFormat"(): integer
public "getIconPath"(): string
public "getAuthors"(): $List<(string)>
public "getSubPath"(arg0: $Path$$Type): string
set "immutable"(value: boolean)
get "name"(): string
get "path"(): $Path
get "owner"(): string
get "version"(): double
get "immutable"(): boolean
get "desc"(): string
get "modList"(): $List<(string)>
get "packFormat"(): integer
get "iconPath"(): string
get "authors"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePackMeta$$Type = ($StructurePackMeta);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructurePackMeta_ = $StructurePackMeta$$Type;
}}
declare module "com.ldtteam.blockui.PaneParams" {
import {$Node, $Node$$Type} from "org.w3c.dom.Node"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$List, $List$$Type} from "java.util.List"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$View, $View$$Type} from "com.ldtteam.blockui.views.View"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $PaneParams {

constructor(arg0: $Node$$Type)

public "hasAttribute"(arg0: string): boolean
public "getProperty"<T>(arg0: string, arg1: $Function$$Type<(string), (T)>, arg2: T): T
public "getBoolean"(arg0: string, arg1: boolean): boolean
public "getFloat"(arg0: string, arg1: float): float
public "getDouble"(arg0: string, arg1: double): double
public "getResource"(arg0: string, arg1: $Consumer$$Type<($ResourceLocation)>): $ResourceLocation
public "getResource"(arg0: string): $ResourceLocation
public "getResource"(arg0: string, arg1: $ResourceLocation$$Type): $ResourceLocation
public "getType"(): string
public "getInteger"(arg0: string, arg1: integer): integer
public "getString"(arg0: string): string
public "getString"(arg0: string, arg1: string): string
public "getText"(): string
public "getChildren"(): $List<($PaneParams)>
public "getColor"(arg0: string, arg1: integer): integer
public "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$$Type<(T)>, arg2: T): T
public "hasAnyAttribute"(arg0: string, ...arg1: (string)[]): string
public "getMultilineText"(arg0: string, arg1: $List$$Type<($MutableComponent$$Type)>): $List<($MutableComponent)>
public "getMultilineText"(arg0: string): $List<($MutableComponent)>
public "getParentHeight"(): integer
public "getScaledInteger"(arg0: string, arg1: integer, arg2: integer, arg3: $Consumer$$Type<($List<(integer)>)>): void
public "getScaledInteger"(arg0: string, arg1: integer, arg2: integer): integer
public "getTextComponent"(arg0: string, arg1: $MutableComponent$$Type): $MutableComponent
public "applyShorthand"<T>(arg0: string, arg1: $Function$$Type<(string), (T)>, arg2: integer, arg3: $Consumer$$Type<($List<(T)>)>): void
public "getParentWidth"(): integer
public "getParentLeft"(): integer
public "getParentTop"(): integer
public "getParentView"(): $View
public "setParentView"(arg0: $View$$Type): void
get "type"(): string
get "text"(): string
get "children"(): $List<($PaneParams)>
get "parentHeight"(): integer
get "parentWidth"(): integer
get "parentLeft"(): integer
get "parentTop"(): integer
get "parentView"(): $View
set "parentView"(value: $View$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaneParams$$Type = ($PaneParams);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaneParams_ = $PaneParams$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.types.ExtraBlockCategory" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export class $ExtraBlockCategory extends $Enum<($ExtraBlockCategory)> {
static readonly "CACTUS": $ExtraBlockCategory
static readonly "THATCHED": $ExtraBlockCategory
static readonly "BRICK": $ExtraBlockCategory
static readonly "PAPER": $ExtraBlockCategory
static readonly "SLATE": $ExtraBlockCategory


public static "values"(): ($ExtraBlockCategory)[]
public static "valueOf"(arg0: string): $ExtraBlockCategory
public "getMineableTag"(): $TagKey<($Block)>
get "mineableTag"(): $TagKey<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraBlockCategory$$Type = (("brick") | ("slate") | ("thatched") | ("paper") | ("cactus"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraBlockCategory_ = $ExtraBlockCategory$$Type;
}}
declare module "com.ldtteam.domumornamentum.item.vanilla.FenceGateBlockItem" {
import {$IDoItem, $IDoItem$$Type} from "com.ldtteam.domumornamentum.item.interfaces.IDoItem"
import {$BlockItemWithClientBePlacement, $BlockItemWithClientBePlacement$$Type} from "com.ldtteam.domumornamentum.item.BlockItemWithClientBePlacement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FenceGateBlock, $FenceGateBlock$$Type} from "com.ldtteam.domumornamentum.block.vanilla.FenceGateBlock"

export class $FenceGateBlockItem extends $BlockItemWithClientBePlacement implements $IDoItem {
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

constructor(arg0: $FenceGateBlock$$Type, arg1: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getGroup"(): $ResourceLocation
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getInputIds"(): $List<($ResourceLocation)>
public "renderPreview"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "group"(): $ResourceLocation
get "inputIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FenceGateBlockItem$$Type = ($FenceGateBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FenceGateBlockItem_ = $FenceGateBlockItem$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.decorative.DynamicTimberFrameBlock" {
import {$IMateriallyTexturedBlock, $IMateriallyTexturedBlock$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$AbstractBlock, $AbstractBlock$$Type} from "com.ldtteam.domumornamentum.block.AbstractBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ICachedItemGroupBlock, $ICachedItemGroupBlock$$Type} from "com.ldtteam.domumornamentum.block.ICachedItemGroupBlock"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $DynamicTimberFrameBlock extends $AbstractBlock<($DynamicTimberFrameBlock)> implements $IMateriallyTexturedBlock, $ICachedItemGroupBlock, $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "COMPONENTS": $List<($IMateriallyTexturedBlockComponent)>
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

constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "buildRecipes"(arg0: $RecipeOutput$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getComponents"(): $Collection<(any)>
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "getDestroyProgress"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): float
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "fillItemCategory"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getMainComponent"(): $IMateriallyTexturedBlockComponent
public "resetCache"(): void
public "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
public "usesWorldSpecificTinting"(): boolean
public "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
public "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
public "getRandomMaterials"(): $MaterialTextureData
public "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "components"(): $Collection<(any)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicTimberFrameBlock$$Type = ($DynamicTimberFrameBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicTimberFrameBlock_ = $DynamicTimberFrameBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$PropertyDispatch$QuadFunction, $PropertyDispatch$QuadFunction$$Type} from "net.minecraft.data.models.blockstates.PropertyDispatch$QuadFunction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MaterialTextureData, $MaterialTextureData$$Type} from "com.ldtteam.domumornamentum.client.model.data.MaterialTextureData"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IMateriallyTexturedBlockComponent, $IMateriallyTexturedBlockComponent$$Type} from "com.ldtteam.domumornamentum.block.IMateriallyTexturedBlockComponent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IMateriallyTexturedBlock {

 "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
 "usesWorldSpecificTinting"(): boolean
 "buildRecipes"(arg0: $RecipeOutput$$Type): void
 "getComponents"(): $Collection<($IMateriallyTexturedBlockComponent)>
 "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
 "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
 "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
 "getMainComponent"(): $IMateriallyTexturedBlockComponent
 "getRandomMaterials"(): $MaterialTextureData
 "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
get "components"(): $Collection<($IMateriallyTexturedBlockComponent)>
get "mainComponent"(): $IMateriallyTexturedBlockComponent
get "randomMaterials"(): $MaterialTextureData
}

export namespace $IMateriallyTexturedBlock {
const probejs$$marker: never
}
export class $IMateriallyTexturedBlock$$Static implements $IMateriallyTexturedBlock {


 "getDOExplosionResistance"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($BlockGetter), ($BlockPos), ($Explosion), (float)>, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Explosion$$Type): float
 "usesWorldSpecificTinting"(): boolean
 "buildRecipes"(arg0: $RecipeOutput$$Type): void
 "getComponents"(): $Collection<($IMateriallyTexturedBlockComponent)>
 "isCorrectToolForDrops"(arg0: $BlockState$$Type, arg1: $ItemStack$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
 "getDODestroyProgress"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($Player), ($BlockGetter), ($BlockPos), (float)>, arg1: $BlockState$$Type, arg2: $Player$$Type, arg3: $BlockGetter$$Type, arg4: $BlockPos$$Type): float
 "fillDOItemCategory"(arg0: $Block$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $List$$Type<($ItemStack$$Type)>): void
 "getMainComponent"(): $IMateriallyTexturedBlockComponent
 "getRandomMaterials"(): $MaterialTextureData
 "getDOSoundType"(arg0: $PropertyDispatch$QuadFunction$$Type<($BlockState), ($LevelReader), ($BlockPos), ($Entity), ($SoundType$$Type)>, arg1: $BlockState$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Entity$$Type): $SoundType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMateriallyTexturedBlock$$Type = ($IMateriallyTexturedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMateriallyTexturedBlock_ = $IMateriallyTexturedBlock$$Type;
}}
declare module "com.ldtteam.domumornamentum.block.types.ExtraBlockType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$ExtraBlockCategory, $ExtraBlockCategory$$Type} from "com.ldtteam.domumornamentum.block.types.ExtraBlockCategory"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ExtraBlockType extends $Enum<($ExtraBlockType)> implements $StringRepresentable {
static readonly "LIME_BRICK": $ExtraBlockType
static readonly "BLUE_BRICK": $ExtraBlockType
static readonly "MOSS_SLATE": $ExtraBlockType
static readonly "WHITE_BRICK": $ExtraBlockType
static readonly "BROWN_BRICK": $ExtraBlockType
static readonly "GREEN_SLATE": $ExtraBlockType
static readonly "GREEN_CACTUS": $ExtraBlockType
static readonly "BASE_THATCHED": $ExtraBlockType
static readonly "GRAY_BRICK": $ExtraBlockType
static readonly "PURPLE_SLATE": $ExtraBlockType
static readonly "GREEN_BRICK": $ExtraBlockType
static readonly "LIGHT_GRAY_BRICK": $ExtraBlockType
static readonly "ORANGE_BRICK": $ExtraBlockType
static readonly "BLACK_BRICK": $ExtraBlockType
static readonly "BASE_CACTUS": $ExtraBlockType
static readonly "BASE_BRICK": $ExtraBlockType
static readonly "LIGHT_PAPER": $ExtraBlockType
static readonly "PINK_BRICK": $ExtraBlockType
static readonly "YELLOW_BRICK": $ExtraBlockType
static readonly "PURPLE_BRICK": $ExtraBlockType
static readonly "BLUE_SLATE": $ExtraBlockType
static readonly "MAGENTA_BRICK": $ExtraBlockType
static readonly "RED_BRICK": $ExtraBlockType
static readonly "BASE_SLATE": $ExtraBlockType
static readonly "LIGHT_BLUE_BRICK": $ExtraBlockType
static readonly "CYAN_BRICK": $ExtraBlockType
static readonly "BASE_PAPER": $ExtraBlockType


public static "values"(): ($ExtraBlockType)[]
public static "valueOf"(arg0: string): $ExtraBlockType
public "getColor"(): $DyeColor
public "getSoundType"(): $SoundType
public "getMaterial"(): $Item
public "getCategory"(): $ExtraBlockCategory
public "getSerializedName"(): string
public "adjustProperties"(arg0: $BlockBehaviour$Properties$$Type): $BlockBehaviour$Properties
public "isTranslucent"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "color"(): $DyeColor
get "soundType"(): $SoundType
get "material"(): $Item
get "category"(): $ExtraBlockCategory
get "serializedName"(): string
get "translucent"(): boolean
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraBlockType$$Type = (("black_brick_extra") | ("blue_brick_extra") | ("blue_cobblestone_extra") | ("brown_brick_extra") | ("brick_extra") | ("cyan_brick_extra") | ("gray_brick_extra") | ("green_brick_extra") | ("green_cobblestone_extra") | ("light_blue_brick_extra") | ("light_gray_brick_extra") | ("lime_brick_extra") | ("magenta_brick_extra") | ("mossy_cobblestone_extra") | ("orange_brick_extra") | ("pink_brick_extra") | ("purple_brick_extra") | ("purple_cobblestone_extra") | ("red_brick_extra") | ("cobblestone_extra") | ("wheat_extra") | ("white_brick_extra") | ("yellow_brick_extra") | ("paper_extra") | ("cactus_extra") | ("green_cactus_extra") | ("white_paper_extra"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraBlockType_ = $ExtraBlockType$$Type;
}}
