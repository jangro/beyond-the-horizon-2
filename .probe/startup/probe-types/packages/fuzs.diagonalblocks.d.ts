declare module "fuzs.diagonalblocks.api.v2.impl.StarCollisionBlock" {
import {$DiagonalBlock, $DiagonalBlock$$Type} from "fuzs.diagonalblocks.api.v2.DiagonalBlock"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Object2ObjectMap, $Object2ObjectMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"
import {$StateDefinition$Builder, $StateDefinition$Builder$$Type} from "net.minecraft.world.level.block.state.StateDefinition$Builder"
import {$EightWayDirection, $EightWayDirection$$Type} from "fuzs.diagonalblocks.api.v2.EightWayDirection"
import {$StarShapeProvider, $StarShapeProvider$$Type} from "fuzs.diagonalblocks.api.v2.impl.StarShapeProvider"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$DiagonalBlockType, $DiagonalBlockType$$Type} from "fuzs.diagonalblocks.api.v2.DiagonalBlockType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $StarCollisionBlock extends $DiagonalBlock, $StarShapeProvider {

 "_makeShapes"(nodeWidth: float, extensionWidth: float, nodeTop: float, extensionBottom: float, extensionTop: float): ($VoxelShape)[]
 "_updateShape"(blockState: $BlockState$$Type, direction: $Direction$$Type, neighboringBlockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, neighboringBlockPos: $BlockPos$$Type): $BlockState
 "addDefaultStates"(defaultState: $BlockState$$Type): $BlockState
 "_getStateForPlacement"(context: $BlockPlaceContext$$Type, blockState: $BlockState$$Type): $BlockState
 "attachesDiagonallyTo"(blockState: $BlockState$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
 "updateIndirectNeighborDiagonalProperty"(blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): $BlockState
 "_updateIndirectNeighbourShapes"(blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, flags: integer, recursionLeft: integer): void
 "_createBlockStateDefinition"(builder: $StateDefinition$Builder$$Type<($Block$$Type), ($BlockState$$Type)>): void
 "getType"(): $DiagonalBlockType
 "attachesDirectlyTo"(arg0: $BlockState$$Type, arg1: boolean, arg2: $Direction$$Type): boolean
 "_getAABBIndex"(state: $BlockState$$Type): integer
 "makeIndex"(blockState: $BlockState$$Type): integer
 "constructStateShapes"(nodeShape: $VoxelShape$$Type, directionalShapes: ($VoxelShape$$Type)[], particleDirectionalShapes: ($VoxelShape$$Type)[]): ($VoxelShape)[]
 "makeDiagonalShapes"(nodeWidth: float, extensionWidth: float, nodeTop: float, extensionBottom: float, extensionTop: float): ($VoxelShape)[]
 "getDiagonalShape"(extensionWidth: float, extensionBottom: float, extensionHeight: float, direction: $EightWayDirection$$Type, stretchWidth: boolean): $VoxelShape
 "getDiagonalCollisionShape"(extensionWidth: float, extensionBottom: float, extensionTop: float, direction: $EightWayDirection$$Type): $VoxelShape
get "type"(): $DiagonalBlockType
}

export namespace $StarCollisionBlock {
const PROPERTY_BY_DIRECTION: $Map<($EightWayDirection), ($BooleanProperty)>
const CORNER_SHAPES_CACHE: $Int2ObjectMap<($Map<($EightWayDirection), ($VoxelShape)>)>
const CORNER_SHAPES_BLOCK_CACHE: $Object2ObjectMap<($DiagonalBlock), ($Map<($EightWayDirection), ($VoxelShape)>)>
function allowsDiagonalProperty(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, neighborBlockState: $BlockState$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
function updateDiagonalProperties(diagonalBlock: $DiagonalBlock$$Type, blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, ...eightWayDirections: ($EightWayDirection$$Type)[]): $BlockState
function isFreeForDiagonalProperty(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
function isNotCollidingWithNeighbors(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
const probejs$$marker: never
}
export class $StarCollisionBlock$$Static implements $StarCollisionBlock {
static readonly "PROPERTY_BY_DIRECTION": $Map<($EightWayDirection), ($BooleanProperty)>
static readonly "CORNER_SHAPES_CACHE": $Int2ObjectMap<($Map<($EightWayDirection), ($VoxelShape)>)>
static readonly "CORNER_SHAPES_BLOCK_CACHE": $Object2ObjectMap<($DiagonalBlock), ($Map<($EightWayDirection), ($VoxelShape)>)>


 "_makeShapes"(nodeWidth: float, extensionWidth: float, nodeTop: float, extensionBottom: float, extensionTop: float): ($VoxelShape)[]
 "_updateShape"(blockState: $BlockState$$Type, direction: $Direction$$Type, neighboringBlockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, neighboringBlockPos: $BlockPos$$Type): $BlockState
 "addDefaultStates"(defaultState: $BlockState$$Type): $BlockState
 "_getStateForPlacement"(context: $BlockPlaceContext$$Type, blockState: $BlockState$$Type): $BlockState
 "attachesDiagonallyTo"(blockState: $BlockState$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
static "allowsDiagonalProperty"(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, neighborBlockState: $BlockState$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
 "updateIndirectNeighborDiagonalProperty"(blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): $BlockState
 "_updateIndirectNeighbourShapes"(blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, flags: integer, recursionLeft: integer): void
 "_createBlockStateDefinition"(builder: $StateDefinition$Builder$$Type<($Block$$Type), ($BlockState$$Type)>): void
static "updateDiagonalProperties"(diagonalBlock: $DiagonalBlock$$Type, blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, ...eightWayDirections: ($EightWayDirection$$Type)[]): $BlockState
static "isFreeForDiagonalProperty"(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
static "isNotCollidingWithNeighbors"(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
 "getType"(): $DiagonalBlockType
 "attachesDirectlyTo"(arg0: $BlockState$$Type, arg1: boolean, arg2: $Direction$$Type): boolean
 "_getAABBIndex"(state: $BlockState$$Type): integer
 "makeIndex"(blockState: $BlockState$$Type): integer
 "constructStateShapes"(nodeShape: $VoxelShape$$Type, directionalShapes: ($VoxelShape$$Type)[], particleDirectionalShapes: ($VoxelShape$$Type)[]): ($VoxelShape)[]
 "makeDiagonalShapes"(nodeWidth: float, extensionWidth: float, nodeTop: float, extensionBottom: float, extensionTop: float): ($VoxelShape)[]
 "getDiagonalShape"(extensionWidth: float, extensionBottom: float, extensionHeight: float, direction: $EightWayDirection$$Type, stretchWidth: boolean): $VoxelShape
 "getDiagonalCollisionShape"(extensionWidth: float, extensionBottom: float, extensionTop: float, direction: $EightWayDirection$$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarCollisionBlock$$Type = ($StarCollisionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarCollisionBlock_ = $StarCollisionBlock$$Type;
}}
declare module "fuzs.diagonalblocks.api.v2.impl.DiagonalWallBlock" {
import {$StarCollisionBlock, $StarCollisionBlock$$Type} from "fuzs.diagonalblocks.api.v2.impl.StarCollisionBlock"
import {$DiagonalBlock, $DiagonalBlock$$Type} from "fuzs.diagonalblocks.api.v2.DiagonalBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StateDefinition$Builder, $StateDefinition$Builder$$Type} from "net.minecraft.world.level.block.state.StateDefinition$Builder"
import {$EightWayDirection, $EightWayDirection$$Type} from "fuzs.diagonalblocks.api.v2.EightWayDirection"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DiagonalBlockType, $DiagonalBlockType$$Type} from "fuzs.diagonalblocks.api.v2.DiagonalBlockType"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$LegacyWallBlock, $LegacyWallBlock$$Type} from "fuzs.diagonalblocks.api.v2.impl.LegacyWallBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DiagonalWallBlock extends $LegacyWallBlock implements $StarCollisionBlock {
 "shapeByIndex": ($VoxelShape)[]
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LegacyWallBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "collisionShapeByIndex": ($VoxelShape)[]
 "hasCollision": boolean

constructor(block: $Block$$Type)

public "getType"(): $DiagonalBlockType
public "updateShape"(blockState: $BlockState$$Type, direction: $Direction$$Type, neighboringBlockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, neighboringBlockPos: $BlockPos$$Type): $BlockState
public "attachesDirectlyTo"(blockState: $BlockState$$Type, isSideSolid: boolean, direction: $Direction$$Type): boolean
public "attachesDiagonallyTo"(blockState: $BlockState$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getDescriptionId"(): StringJS
public "updateIndirectNeighborDiagonalProperty"(neighborBlockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): $BlockState
public "updateIndirectNeighbourShapes"(blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, flags: integer, recursionLeft: integer): void
public "_makeShapes"(nodeWidth: float, extensionWidth: float, nodeTop: float, extensionBottom: float, extensionTop: float): ($VoxelShape)[]
public "_updateShape"(blockState: $BlockState$$Type, direction: $Direction$$Type, neighboringBlockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, neighboringBlockPos: $BlockPos$$Type): $BlockState
public "addDefaultStates"(defaultState: $BlockState$$Type): $BlockState
public "_getStateForPlacement"(context: $BlockPlaceContext$$Type, blockState: $BlockState$$Type): $BlockState
public static "allowsDiagonalProperty"(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, neighborBlockState: $BlockState$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
public "_updateIndirectNeighbourShapes"(blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, flags: integer, recursionLeft: integer): void
public "_createBlockStateDefinition"(builder: $StateDefinition$Builder$$Type<($Block$$Type), ($BlockState$$Type)>): void
public static "updateDiagonalProperties"(diagonalBlock: $DiagonalBlock$$Type, blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, ...eightWayDirections: ($EightWayDirection$$Type)[]): $BlockState
public static "isFreeForDiagonalProperty"(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
public static "isNotCollidingWithNeighbors"(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
public "_getAABBIndex"(state: $BlockState$$Type): integer
public "makeIndex"(blockState: $BlockState$$Type): integer
public "constructStateShapes"(nodeShape: $VoxelShape$$Type, directionalShapes: ($VoxelShape$$Type)[], particleDirectionalShapes: ($VoxelShape$$Type)[]): ($VoxelShape)[]
public "makeDiagonalShapes"(nodeWidth: float, extensionWidth: float, nodeTop: float, extensionBottom: float, extensionTop: float): ($VoxelShape)[]
public "getDiagonalShape"(extensionWidth: float, extensionBottom: float, extensionHeight: float, direction: $EightWayDirection$$Type, stretchWidth: boolean): $VoxelShape
public "getDiagonalCollisionShape"(extensionWidth: float, extensionBottom: float, extensionTop: float, direction: $EightWayDirection$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
get "type"(): $DiagonalBlockType
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiagonalWallBlock$$Type = ($DiagonalWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiagonalWallBlock_ = $DiagonalWallBlock$$Type;
}}
declare module "fuzs.diagonalblocks.neoforge.api.v2.impl.NeoForgeDiagonalFenceBlock" {
import {$DiagonalBlock, $DiagonalBlock$$Type} from "fuzs.diagonalblocks.api.v2.DiagonalBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$DiagonalFenceBlock, $DiagonalFenceBlock$$Type} from "fuzs.diagonalblocks.api.v2.impl.DiagonalFenceBlock"
import {$FenceBlock, $FenceBlock$$Type} from "net.minecraft.world.level.block.FenceBlock"
import {$EightWayDirection, $EightWayDirection$$Type} from "fuzs.diagonalblocks.api.v2.EightWayDirection"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IClientBlockExtensions, $IClientBlockExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientBlockExtensions"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NeoForgeDiagonalFenceBlock extends $DiagonalFenceBlock {
 "shapeByIndex": ($VoxelShape)[]
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
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

constructor(block: $Block$$Type)

public "initializeClient"(consumer: $Consumer$$Type<($IClientBlockExtensions)>): void
public static "allowsDiagonalProperty"(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, neighborBlockState: $BlockState$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
public static "updateDiagonalProperties"(diagonalBlock: $DiagonalBlock$$Type, blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, ...eightWayDirections: ($EightWayDirection$$Type)[]): $BlockState
public static "isFreeForDiagonalProperty"(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
public static "isNotCollidingWithNeighbors"(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeoForgeDiagonalFenceBlock$$Type = ($NeoForgeDiagonalFenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeoForgeDiagonalFenceBlock_ = $NeoForgeDiagonalFenceBlock$$Type;
}}
declare module "fuzs.diagonalblocks.api.v2.DiagonalBlockType" {
import {$BiMap, $BiMap$$Type} from "com.google.common.collect.BiMap"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $DiagonalBlockType {

 "id"(arg0: StringJS): $ResourceLocation
 "isTarget"(arg0: $ResourceLocation$$Type, arg1: $Block$$Type): boolean
 "getBlacklistTagKey"(): $TagKey<($Block)>
 "makeDiagonalBlock"(arg0: $ResourceLocation$$Type, arg1: $Block$$Type): $Block
 "registerBlockFactory"(arg0: $ResourceLocation$$Type, arg1: $UnaryOperator$$Type<($Block)>): void
 "disableBlockFactory"(arg0: $ResourceLocation$$Type): void
 "getBlockConversions"(): $BiMap<($Block), ($Block)>
 "registerDefaultBlockFactory"(arg0: $ResourceLocation$$Type): void
get "blacklistTagKey"(): $TagKey<($Block)>
get "blockConversions"(): $BiMap<($Block), ($Block)>
}

export namespace $DiagonalBlockType {
const TYPES: $Set<($DiagonalBlockType)>
function register(type: $DiagonalBlockType$$Type): void
const probejs$$marker: never
}
export class $DiagonalBlockType$$Static implements $DiagonalBlockType {
static readonly "TYPES": $Set<($DiagonalBlockType)>


static "register"(type: $DiagonalBlockType$$Type): void
 "id"(arg0: StringJS): $ResourceLocation
 "isTarget"(arg0: $ResourceLocation$$Type, arg1: $Block$$Type): boolean
 "getBlacklistTagKey"(): $TagKey<($Block)>
 "makeDiagonalBlock"(arg0: $ResourceLocation$$Type, arg1: $Block$$Type): $Block
 "registerBlockFactory"(arg0: $ResourceLocation$$Type, arg1: $UnaryOperator$$Type<($Block)>): void
 "disableBlockFactory"(arg0: $ResourceLocation$$Type): void
 "getBlockConversions"(): $BiMap<($Block), ($Block)>
 "registerDefaultBlockFactory"(arg0: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiagonalBlockType$$Type = ($DiagonalBlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiagonalBlockType_ = $DiagonalBlockType$$Type;
}}
declare module "fuzs.diagonalblocks.api.v2.DiagonalBlock" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$DiagonalBlockType, $DiagonalBlockType$$Type} from "fuzs.diagonalblocks.api.v2.DiagonalBlockType"
import {$EightWayDirection, $EightWayDirection$$Type} from "fuzs.diagonalblocks.api.v2.EightWayDirection"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $DiagonalBlock {

 "getType"(): $DiagonalBlockType
 "attachesDirectlyTo"(arg0: $BlockState$$Type, arg1: boolean, arg2: $Direction$$Type): boolean
 "attachesDiagonallyTo"(arg0: $BlockState$$Type, arg1: $EightWayDirection$$Type): boolean
get "type"(): $DiagonalBlockType
}

export namespace $DiagonalBlock {
const NORTH_WEST: $BooleanProperty
const NORTH: $BooleanProperty
const NORTH_EAST: $BooleanProperty
const WEST: $BooleanProperty
const SOUTH_EAST: $BooleanProperty
const SOUTH: $BooleanProperty
const SOUTH_WEST: $BooleanProperty
const EAST: $BooleanProperty
const probejs$$marker: never
}
export class $DiagonalBlock$$Static implements $DiagonalBlock {
static readonly "NORTH_WEST": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "NORTH_EAST": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "SOUTH_EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "SOUTH_WEST": $BooleanProperty
static readonly "EAST": $BooleanProperty


 "getType"(): $DiagonalBlockType
 "attachesDirectlyTo"(arg0: $BlockState$$Type, arg1: boolean, arg2: $Direction$$Type): boolean
 "attachesDiagonallyTo"(arg0: $BlockState$$Type, arg1: $EightWayDirection$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiagonalBlock$$Type = ($DiagonalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiagonalBlock_ = $DiagonalBlock$$Type;
}}
declare module "fuzs.diagonalblocks.api.v2.impl.LegacyWallBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$CrossCollisionBlock, $CrossCollisionBlock$$Type} from "net.minecraft.world.level.block.CrossCollisionBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LegacyWallBlock extends $CrossCollisionBlock {
 "shapeByIndex": ($VoxelShape)[]
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LegacyWallBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "collisionShapeByIndex": ($VoxelShape)[]
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "isPathfindable"(blockState: $BlockState$$Type, pathComputationType: $PathComputationType$$Type): boolean
public "updateShape"(blockState: $BlockState$$Type, direction: $Direction$$Type, blockState2: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockPos2: $BlockPos$$Type): $BlockState
public "connectsTo"(state: $BlockState$$Type, sideSolid: boolean, direction: $Direction$$Type): boolean
public "shouldRaisePost"(level: $LevelReader$$Type, blockPos: $BlockPos$$Type): boolean
public "getStateForPlacement"(blockPlaceContext: $BlockPlaceContext$$Type): $BlockState
public "getCollisionShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LegacyWallBlock$$Type = ($LegacyWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LegacyWallBlock_ = $LegacyWallBlock$$Type;
}}
declare module "fuzs.diagonalblocks.api.v2.impl.StarShapeProvider" {
import {$Object2IntMap, $Object2IntMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import {$EightWayDirection, $EightWayDirection$$Type} from "fuzs.diagonalblocks.api.v2.EightWayDirection"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $StarShapeProvider {

 "_makeShapes"(nodeWidth: float, extensionWidth: float, nodeTop: float, extensionBottom: float, extensionTop: float): ($VoxelShape)[]
 "_getAABBIndex"(state: $BlockState$$Type): integer
 "makeIndex"(blockState: $BlockState$$Type): integer
 "constructStateShapes"(nodeShape: $VoxelShape$$Type, directionalShapes: ($VoxelShape$$Type)[], particleDirectionalShapes: ($VoxelShape$$Type)[]): ($VoxelShape)[]
 "makeDiagonalShapes"(nodeWidth: float, extensionWidth: float, nodeTop: float, extensionBottom: float, extensionTop: float): ($VoxelShape)[]
 "getDiagonalShape"(extensionWidth: float, extensionBottom: float, extensionHeight: float, direction: $EightWayDirection$$Type, stretchWidth: boolean): $VoxelShape
 "getDiagonalCollisionShape"(extensionWidth: float, extensionBottom: float, extensionTop: float, direction: $EightWayDirection$$Type): $VoxelShape
}

export namespace $StarShapeProvider {
const SHAPES_CACHE: $Int2ObjectMap<(($VoxelShape)[])>
const STATE_INDEX_CACHE: $Object2IntMap<($BlockState)>
const probejs$$marker: never
}
export class $StarShapeProvider$$Static implements $StarShapeProvider {
static readonly "SHAPES_CACHE": $Int2ObjectMap<(($VoxelShape)[])>
static readonly "STATE_INDEX_CACHE": $Object2IntMap<($BlockState)>


 "_makeShapes"(nodeWidth: float, extensionWidth: float, nodeTop: float, extensionBottom: float, extensionTop: float): ($VoxelShape)[]
 "_getAABBIndex"(state: $BlockState$$Type): integer
 "makeIndex"(blockState: $BlockState$$Type): integer
 "constructStateShapes"(nodeShape: $VoxelShape$$Type, directionalShapes: ($VoxelShape$$Type)[], particleDirectionalShapes: ($VoxelShape$$Type)[]): ($VoxelShape)[]
 "makeDiagonalShapes"(nodeWidth: float, extensionWidth: float, nodeTop: float, extensionBottom: float, extensionTop: float): ($VoxelShape)[]
 "getDiagonalShape"(extensionWidth: float, extensionBottom: float, extensionHeight: float, direction: $EightWayDirection$$Type, stretchWidth: boolean): $VoxelShape
 "getDiagonalCollisionShape"(extensionWidth: float, extensionBottom: float, extensionTop: float, direction: $EightWayDirection$$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarShapeProvider$$Type = ($StarShapeProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarShapeProvider_ = $StarShapeProvider$$Type;
}}
declare module "fuzs.diagonalblocks.mixin.accessor.VoxelShapeAccessor" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$DoubleList, $DoubleList$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleList"
import {$DiscreteVoxelShape, $DiscreteVoxelShape$$Type} from "net.minecraft.world.phys.shapes.DiscreteVoxelShape"

export interface $VoxelShapeAccessor {

 "diagonalfences$getShape"(): $DiscreteVoxelShape
 "diagonalfences$setShape"(arg0: $DiscreteVoxelShape$$Type): void
 "diagonalfences$callGetCoords"(arg0: $Direction$Axis$$Type): $DoubleList
}

export namespace $VoxelShapeAccessor {
const probejs$$marker: never
}
export class $VoxelShapeAccessor$$Static implements $VoxelShapeAccessor {


 "diagonalfences$getShape"(): $DiscreteVoxelShape
 "diagonalfences$setShape"(arg0: $DiscreteVoxelShape$$Type): void
 "diagonalfences$callGetCoords"(arg0: $Direction$Axis$$Type): $DoubleList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeAccessor$$Type = ($VoxelShapeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeAccessor_ = $VoxelShapeAccessor$$Type;
}}
declare module "fuzs.diagonalblocks.api.v2.impl.DiagonalFenceBlock" {
import {$StarCollisionBlock, $StarCollisionBlock$$Type} from "fuzs.diagonalblocks.api.v2.impl.StarCollisionBlock"
import {$DiagonalBlock, $DiagonalBlock$$Type} from "fuzs.diagonalblocks.api.v2.DiagonalBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StateDefinition$Builder, $StateDefinition$Builder$$Type} from "net.minecraft.world.level.block.state.StateDefinition$Builder"
import {$FenceBlock, $FenceBlock$$Type} from "net.minecraft.world.level.block.FenceBlock"
import {$EightWayDirection, $EightWayDirection$$Type} from "fuzs.diagonalblocks.api.v2.EightWayDirection"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DiagonalBlockType, $DiagonalBlockType$$Type} from "fuzs.diagonalblocks.api.v2.DiagonalBlockType"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DiagonalFenceBlock extends $FenceBlock implements $StarCollisionBlock {
 "shapeByIndex": ($VoxelShape)[]
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
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

constructor(block: $Block$$Type)

public "getType"(): $DiagonalBlockType
public "updateShape"(blockState: $BlockState$$Type, direction: $Direction$$Type, neighboringBlockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, neighboringBlockPos: $BlockPos$$Type): $BlockState
public "attachesDirectlyTo"(blockState: $BlockState$$Type, isSideSolid: boolean, direction: $Direction$$Type): boolean
public "attachesDiagonallyTo"(blockState: $BlockState$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getDescriptionId"(): StringJS
public "updateIndirectNeighbourShapes"(blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, flags: integer, recursionLeft: integer): void
public "_makeShapes"(nodeWidth: float, extensionWidth: float, nodeTop: float, extensionBottom: float, extensionTop: float): ($VoxelShape)[]
public "_updateShape"(blockState: $BlockState$$Type, direction: $Direction$$Type, neighboringBlockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, neighboringBlockPos: $BlockPos$$Type): $BlockState
public "addDefaultStates"(defaultState: $BlockState$$Type): $BlockState
public "_getStateForPlacement"(context: $BlockPlaceContext$$Type, blockState: $BlockState$$Type): $BlockState
public static "allowsDiagonalProperty"(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, neighborBlockState: $BlockState$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
public "updateIndirectNeighborDiagonalProperty"(blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): $BlockState
public "_updateIndirectNeighbourShapes"(blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, flags: integer, recursionLeft: integer): void
public "_createBlockStateDefinition"(builder: $StateDefinition$Builder$$Type<($Block$$Type), ($BlockState$$Type)>): void
public static "updateDiagonalProperties"(diagonalBlock: $DiagonalBlock$$Type, blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, ...eightWayDirections: ($EightWayDirection$$Type)[]): $BlockState
public static "isFreeForDiagonalProperty"(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
public static "isNotCollidingWithNeighbors"(diagonalBlock: $DiagonalBlock$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, eightWayDirection: $EightWayDirection$$Type): boolean
public "_getAABBIndex"(state: $BlockState$$Type): integer
public "makeIndex"(blockState: $BlockState$$Type): integer
public "constructStateShapes"(nodeShape: $VoxelShape$$Type, directionalShapes: ($VoxelShape$$Type)[], particleDirectionalShapes: ($VoxelShape$$Type)[]): ($VoxelShape)[]
public "makeDiagonalShapes"(nodeWidth: float, extensionWidth: float, nodeTop: float, extensionBottom: float, extensionTop: float): ($VoxelShape)[]
public "getDiagonalShape"(extensionWidth: float, extensionBottom: float, extensionHeight: float, direction: $EightWayDirection$$Type, stretchWidth: boolean): $VoxelShape
public "getDiagonalCollisionShape"(extensionWidth: float, extensionBottom: float, extensionTop: float, direction: $EightWayDirection$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
get "type"(): $DiagonalBlockType
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiagonalFenceBlock$$Type = ($DiagonalFenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiagonalFenceBlock_ = $DiagonalFenceBlock$$Type;
}}
declare module "fuzs.diagonalblocks.api.v2.EightWayDirection" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $EightWayDirection extends $Enum<($EightWayDirection)> implements $StringRepresentable {
static readonly "NORTH_WEST": $EightWayDirection
static readonly "NORTH": $EightWayDirection
static readonly "NORTH_EAST": $EightWayDirection
static readonly "WEST": $EightWayDirection
static readonly "SOUTH_EAST": $EightWayDirection
static readonly "SOUTH": $EightWayDirection
static readonly "SOUTH_WEST": $EightWayDirection
static readonly "EAST": $EightWayDirection
readonly "data2d": integer


public static "values"(): ($EightWayDirection)[]
public static "valueOf"(name: StringJS): $EightWayDirection
public "transform"(vectors: ($Vec3$$Type)[]): ($Vec3)[]
public "getY"(): integer
public "getX"(): integer
public "getZ"(): integer
public static "byName"(name: StringJS): $EightWayDirection
public static "byIndex"(index: integer, intercardinal: boolean): $EightWayDirection
public "getOpposite"(): $EightWayDirection
public "compareAxis"(other: $EightWayDirection$$Type): boolean
public "isCardinal"(): boolean
public "toDirection"(): $Direction
public "isIntercardinal"(): boolean
public "getCardinalNeighbors"(): ($EightWayDirection)[]
public "rotateClockWise"(): $EightWayDirection
public "rotateClockWise"(times: integer): $EightWayDirection
public "rotateCounterClockWise"(): $EightWayDirection
public "rotateCounterClockWise"(times: integer): $EightWayDirection
public static "toEightWayDirection"(direction: $Direction$$Type): $EightWayDirection
public static "getCardinalDirections"(): ($EightWayDirection)[]
public "getHorizontalIndex"(): integer
public "getSerializedName"(): StringJS
public static "getIntercardinalDirections"(): ($EightWayDirection)[]
public "getIntercardinalNeighbors"(): ($EightWayDirection)[]
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "y"(): integer
get "x"(): integer
get "z"(): integer
get "opposite"(): $EightWayDirection
get "cardinal"(): boolean
get "intercardinal"(): boolean
get "cardinalNeighbors"(): ($EightWayDirection)[]
get "horizontalIndex"(): integer
get "serializedName"(): StringJS
get "intercardinalNeighbors"(): ($EightWayDirection)[]
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EightWayDirection$$Type = (("south") | ("west") | ("north") | ("east") | ("south_west") | ("north_west") | ("north_east") | ("south_east"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EightWayDirection_ = $EightWayDirection$$Type;
}}
