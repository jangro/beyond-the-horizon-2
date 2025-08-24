declare module "com.stal111.valhelsia_structures.common.world.structures.ValhelsiaStructureSettings$Builder" {
import {$ValhelsiaStructureSettings, $ValhelsiaStructureSettings$$Type} from "com.stal111.valhelsia_structures.common.world.structures.ValhelsiaStructureSettings"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"

export class $ValhelsiaStructureSettings$Builder {


public "build"(): $ValhelsiaStructureSettings
public "setLiquidSettings"(arg0: $LiquidSettings$$Type): $ValhelsiaStructureSettings$Builder
public "setSpawnChance"(arg0: double): $ValhelsiaStructureSettings$Builder
public "setCustomMargin"(arg0: integer): $ValhelsiaStructureSettings$Builder
public "enableIndividualTerrainAdjustment"(arg0: boolean): $ValhelsiaStructureSettings$Builder
set "liquidSettings"(value: $LiquidSettings$$Type)
set "spawnChance"(value: double)
set "customMargin"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValhelsiaStructureSettings$Builder$$Type = ($ValhelsiaStructureSettings$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValhelsiaStructureSettings$Builder_ = $ValhelsiaStructureSettings$Builder$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.world.structures.height.DefaultHeightProvider" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$VerticalAnchor, $VerticalAnchor$$Type} from "net.minecraft.world.level.levelgen.VerticalAnchor"
import {$SurfaceHeightProvider, $SurfaceHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.SurfaceHeightProvider"
import {$SpawnerRoomHeightProvider, $SpawnerRoomHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.SpawnerRoomHeightProvider"
import {$UniformHeightProvider, $UniformHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.UniformHeightProvider"
import {$StructureHeightProviderType, $StructureHeightProviderType$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProviderType"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$BelowSurfaceHeightProvider, $BelowSurfaceHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.BelowSurfaceHeightProvider"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$StructureHeightProvider, $StructureHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProvider"
import {$WorldGenerationContext, $WorldGenerationContext$$Type} from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$DeepSpawnerRoomHeightProvider, $DeepSpawnerRoomHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.DeepSpawnerRoomHeightProvider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $DefaultHeightProvider extends $Record implements $StructureHeightProvider {
static readonly "CODEC": $MapCodec<($DefaultHeightProvider)>

constructor(heightProvider: $HeightProvider$$Type)

public "minY"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getType"(): $StructureHeightProviderType<(any)>
public "sample"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): $OptionalInt
public "maxY"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): integer
public "heightProvider"(): $HeightProvider
public static "of"(arg0: $HeightProvider$$Type): $DefaultHeightProvider
public static "constant"(arg0: $VerticalAnchor$$Type): $DefaultHeightProvider
public static "uniform"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $UniformHeightProvider
public static "deepSpawnerRoom"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $DeepSpawnerRoomHeightProvider
public static "belowSurface"(arg0: $VerticalAnchor$$Type): $BelowSurfaceHeightProvider
public static "spawnerRoom"(arg0: $VerticalAnchor$$Type): $SpawnerRoomHeightProvider
public static "surfaceBetween"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $SurfaceHeightProvider
public static "getWorldGenerationContext"(arg0: $Structure$GenerationContext$$Type): $WorldGenerationContext
get "type"(): $StructureHeightProviderType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultHeightProvider$$Type = ({"heightProvider"?: $HeightProvider$$Type}) | ([heightProvider?: $HeightProvider$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultHeightProvider_ = $DefaultHeightProvider$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.world.structures.ValhelsiaStructureSettings" {
import {$ValhelsiaStructureSettings$Builder, $ValhelsiaStructureSettings$Builder$$Type} from "com.stal111.valhelsia_structures.common.world.structures.ValhelsiaStructureSettings$Builder"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ValhelsiaStructureSettings extends $Record {
static readonly "CODEC": $MapCodec<($ValhelsiaStructureSettings)>

constructor(spawnChance: double, customMargin: integer, individualTerrainAdjustment: boolean, liquidSettings: $LiquidSettings$$Type, flatnessDelta: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $ValhelsiaStructureSettings$Builder
public "spawnChance"(): double
public "liquidSettings"(): $LiquidSettings
public "flatnessDelta"(): integer
public "customMargin"(): integer
public "individualTerrainAdjustment"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValhelsiaStructureSettings$$Type = ({"liquidSettings"?: $LiquidSettings$$Type, "customMargin"?: integer, "flatnessDelta"?: integer, "individualTerrainAdjustment"?: boolean, "spawnChance"?: double}) | ([liquidSettings?: $LiquidSettings$$Type, customMargin?: integer, flatnessDelta?: integer, individualTerrainAdjustment?: boolean, spawnChance?: double]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValhelsiaStructureSettings_ = $ValhelsiaStructureSettings$$Type;
}}
declare module "com.stal111.valhelsia_structures.utils.StartPoolKeySet$Simple" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$JigsawBuilder, $JigsawBuilder$$Type} from "net.valhelsia.valhelsia_core.api.common.world.structure.jigsaw.JigsawBuilder"
import {$TemplatePoolHelper, $TemplatePoolHelper$$Type} from "com.stal111.valhelsia_structures.utils.TemplatePoolHelper"
import {$ResourceKeyHelper, $ResourceKeyHelper$$Type} from "com.stal111.valhelsia_structures.common.builtin.ResourceKeyHelper"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$TerrainAdjustment, $TerrainAdjustment$$Type} from "net.minecraft.world.level.levelgen.structure.TerrainAdjustment"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$StartPoolKeySet$WithFurnished, $StartPoolKeySet$WithFurnished$$Type} from "com.stal111.valhelsia_structures.utils.StartPoolKeySet$WithFurnished"
import {$StartPoolKeySet, $StartPoolKeySet$$Type} from "com.stal111.valhelsia_structures.utils.StartPoolKeySet"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BootstrapContext, $BootstrapContext$$Type} from "net.minecraft.data.worldgen.BootstrapContext"

export class $StartPoolKeySet$Simple extends $Record implements $StartPoolKeySet {

constructor(key: $ResourceKey$$Type<($StructureTemplatePool)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "key"(): $ResourceKey<($StructureTemplatePool)>
public "forEachKey"(arg0: $BiConsumer$$Type<($ResourceKey<($StructureTemplatePool)>), (boolean)>): void
public "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: $UnaryOperator$$Type<($JigsawBuilder)>): void
public "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: string, arg3: $UnaryOperator$$Type<($JigsawBuilder)>): void
public "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: string, arg3: $UnaryOperator$$Type<($JigsawBuilder)>, arg4: $TerrainAdjustment$$Type): void
public "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: $UnaryOperator$$Type<($JigsawBuilder)>, arg3: $TerrainAdjustment$$Type): void
public static "simple"(arg0: $ResourceKeyHelper$$Type<($StructureTemplatePool$$Type)>, arg1: string): $StartPoolKeySet$Simple
public static "withFurnishedVariant"(arg0: $ResourceKeyHelper$$Type<($StructureTemplatePool$$Type)>, arg1: string): $StartPoolKeySet$WithFurnished
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartPoolKeySet$Simple$$Type = ({"key"?: $ResourceKey$$Type<($StructureTemplatePool)>}) | ([key?: $ResourceKey$$Type<($StructureTemplatePool)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StartPoolKeySet$Simple_ = $StartPoolKeySet$Simple$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.UnlitWallTorchBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$UnlitTorchBlock, $UnlitTorchBlock$$Type} from "com.stal111.valhelsia_structures.common.block.UnlitTorchBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $UnlitWallTorchBlock extends $UnlitTorchBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($UnlitWallTorchBlock)>
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

constructor(arg0: $BlockState$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getDescriptionId"(): string
public "asHolder"(): $Holder<(any)>
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnlitWallTorchBlock$$Type = ($UnlitWallTorchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnlitWallTorchBlock_ = $UnlitWallTorchBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.world.structures.StartPoolDecider" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$StartPoolKeySet, $StartPoolKeySet$$Type} from "com.stal111.valhelsia_structures.utils.StartPoolKeySet"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$HolderGetter, $HolderGetter$$Type} from "net.minecraft.core.HolderGetter"

export class $StartPoolDecider extends $Record {
static readonly "CODEC": $Codec<($StartPoolDecider)>

constructor(defaultStartPool: $Holder$$Type<($StructureTemplatePool)>, furnishedStartPool: $Optional$$Type<($Holder$$Type<($StructureTemplatePool$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $HolderGetter$$Type<($StructureTemplatePool$$Type)>, arg1: $StartPoolKeySet$$Type): $StartPoolDecider
public "decide"(): $Holder<($StructureTemplatePool)>
public "defaultStartPool"(): $Holder<($StructureTemplatePool)>
public "furnishedStartPool"(): $Optional<($Holder<($StructureTemplatePool)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartPoolDecider$$Type = ({"furnishedStartPool"?: ($Holder$$Type<($StructureTemplatePool$$Type)>)?, "defaultStartPool"?: $Holder$$Type<($StructureTemplatePool)>}) | ([furnishedStartPool?: ($Holder$$Type<($StructureTemplatePool$$Type)>)?, defaultStartPool?: $Holder$$Type<($StructureTemplatePool)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StartPoolDecider_ = $StartPoolDecider$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.SleepingBagBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BedPart, $BedPart$$Type} from "net.minecraft.world.level.block.state.properties.BedPart"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SleepingBagBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SleepingBagBlock)>
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
static readonly "PART": $EnumProperty<($BedPart)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "OCCUPIED": $BooleanProperty
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateEntityAfterFallOn"(arg0: $BlockGetter$$Type, arg1: $Entity$$Type): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
public "fallOn"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type, arg4: float): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public static "kickVillagerOutOfBed"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
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
export type $SleepingBagBlock$$Type = ($SleepingBagBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SleepingBagBlock_ = $SleepingBagBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.UnlitTorchBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BaseTorchBlock, $BaseTorchBlock$$Type} from "net.minecraft.world.level.block.BaseTorchBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $UnlitTorchBlock extends $BaseTorchBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($UnlitTorchBlock)>
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

constructor(arg0: $BlockState$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getLitState"(): $BlockState
public "asHolder"(): $Holder<(any)>
get "litState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnlitTorchBlock$$Type = ($UnlitTorchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnlitTorchBlock_ = $UnlitTorchBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.HangingVinesBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GrowingPlantHeadBlock, $GrowingPlantHeadBlock$$Type} from "net.minecraft.world.level.block.GrowingPlantHeadBlock"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HangingVinesBlock extends $GrowingPlantHeadBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($HangingVinesBlock)>
static readonly "ATTACHED": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean
static readonly "AGE": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangingVinesBlock$$Type = ($HangingVinesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HangingVinesBlock_ = $HangingVinesBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.DungeonDoorLeafBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $DungeonDoorLeafBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MIRRORED": $BooleanProperty
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "destroy"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getDescriptionId"(): string
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "descriptionId"(): string
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DungeonDoorLeafBlock$$Type = ($DungeonDoorLeafBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DungeonDoorLeafBlock_ = $DungeonDoorLeafBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.utils.TemplatePoolHelper" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$StructureProcessorList, $StructureProcessorList$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"
import {$JigsawBuilder, $JigsawBuilder$$Type} from "net.valhelsia.valhelsia_core.api.common.world.structure.jigsaw.JigsawBuilder"
import {$StructureTemplatePool$Projection, $StructureTemplatePool$Projection$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$TerrainAdjustment, $TerrainAdjustment$$Type} from "net.minecraft.world.level.levelgen.structure.TerrainAdjustment"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ValhelsiaSinglePoolElement, $ValhelsiaSinglePoolElement$$Type} from "com.stal111.valhelsia_structures.common.world.structures.pools.ValhelsiaSinglePoolElement"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BootstrapContext, $BootstrapContext$$Type} from "net.minecraft.data.worldgen.BootstrapContext"

export class $TemplatePoolHelper {
static readonly "INSTANCE": $TemplatePoolHelper

constructor()

public static "single"(arg0: string, arg1: $Holder$$Type<($StructureProcessorList)>): $Function<($StructureTemplatePool$Projection), ($ValhelsiaSinglePoolElement)>
public "create"(arg0: $ResourceKey$$Type<($StructureTemplatePool)>, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: string, arg3: $UnaryOperator$$Type<($JigsawBuilder)>, arg4: $TerrainAdjustment$$Type): void
public "create"(arg0: $ResourceKey$$Type<($StructureTemplatePool)>, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: $UnaryOperator$$Type<($JigsawBuilder)>, arg3: $TerrainAdjustment$$Type): void
public "create"(arg0: string, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: $UnaryOperator$$Type<($JigsawBuilder)>): void
public "create"(arg0: $ResourceKey$$Type<($StructureTemplatePool)>, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: $UnaryOperator$$Type<($JigsawBuilder)>): void
public "create"(arg0: string, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: string, arg3: $UnaryOperator$$Type<($JigsawBuilder)>): void
public "create"(arg0: $ResourceKey$$Type<($StructureTemplatePool)>, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: string, arg3: $UnaryOperator$$Type<($JigsawBuilder)>): void
public "createKey"(arg0: string): $ResourceKey<($StructureTemplatePool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplatePoolHelper$$Type = ($TemplatePoolHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplatePoolHelper_ = $TemplatePoolHelper$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.recipe.ToolCraftingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ToolCraftingRecipe, $ToolCraftingRecipe$$Type} from "com.stal111.valhelsia_structures.common.recipe.ToolCraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ToolCraftingRecipe$Serializer implements $RecipeSerializer<($ToolCraftingRecipe)> {

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ToolCraftingRecipe)>
public "codec"(): $MapCodec<($ToolCraftingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolCraftingRecipe$Serializer$$Type = ($ToolCraftingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolCraftingRecipe$Serializer_ = $ToolCraftingRecipe$Serializer$$Type;
}}
declare module "com.stal111.valhelsia_structures.utils.StartPoolKeySet$WithFurnished" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$JigsawBuilder, $JigsawBuilder$$Type} from "net.valhelsia.valhelsia_core.api.common.world.structure.jigsaw.JigsawBuilder"
import {$TemplatePoolHelper, $TemplatePoolHelper$$Type} from "com.stal111.valhelsia_structures.utils.TemplatePoolHelper"
import {$StartPoolKeySet$Simple, $StartPoolKeySet$Simple$$Type} from "com.stal111.valhelsia_structures.utils.StartPoolKeySet$Simple"
import {$ResourceKeyHelper, $ResourceKeyHelper$$Type} from "com.stal111.valhelsia_structures.common.builtin.ResourceKeyHelper"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$TerrainAdjustment, $TerrainAdjustment$$Type} from "net.minecraft.world.level.levelgen.structure.TerrainAdjustment"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$StartPoolKeySet, $StartPoolKeySet$$Type} from "com.stal111.valhelsia_structures.utils.StartPoolKeySet"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BootstrapContext, $BootstrapContext$$Type} from "net.minecraft.data.worldgen.BootstrapContext"

export class $StartPoolKeySet$WithFurnished extends $Record implements $StartPoolKeySet {

constructor(defaultKey: $ResourceKey$$Type<($StructureTemplatePool)>, furnishedKey: $ResourceKey$$Type<($StructureTemplatePool)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "forEachKey"(arg0: $BiConsumer$$Type<($ResourceKey<($StructureTemplatePool)>), (boolean)>): void
public "defaultKey"(): $ResourceKey<($StructureTemplatePool)>
public "furnishedKey"(): $ResourceKey<($StructureTemplatePool)>
public "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: $UnaryOperator$$Type<($JigsawBuilder)>): void
public "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: string, arg3: $UnaryOperator$$Type<($JigsawBuilder)>): void
public "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: string, arg3: $UnaryOperator$$Type<($JigsawBuilder)>, arg4: $TerrainAdjustment$$Type): void
public "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: $UnaryOperator$$Type<($JigsawBuilder)>, arg3: $TerrainAdjustment$$Type): void
public static "simple"(arg0: $ResourceKeyHelper$$Type<($StructureTemplatePool$$Type)>, arg1: string): $StartPoolKeySet$Simple
public static "withFurnishedVariant"(arg0: $ResourceKeyHelper$$Type<($StructureTemplatePool$$Type)>, arg1: string): $StartPoolKeySet$WithFurnished
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartPoolKeySet$WithFurnished$$Type = ({"furnishedKey"?: $ResourceKey$$Type<($StructureTemplatePool)>, "defaultKey"?: $ResourceKey$$Type<($StructureTemplatePool)>}) | ([furnishedKey?: $ResourceKey$$Type<($StructureTemplatePool)>, defaultKey?: $ResourceKey$$Type<($StructureTemplatePool)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StartPoolKeySet$WithFurnished_ = $StartPoolKeySet$WithFurnished$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.JarBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $JarBlock extends $Block implements $SimpleWaterloggedBlock, $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ROTATED": $BooleanProperty
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
static readonly "TREASURE": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarBlock$$Type = ($JarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JarBlock_ = $JarBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProvider" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$VerticalAnchor, $VerticalAnchor$$Type} from "net.minecraft.world.level.levelgen.VerticalAnchor"
import {$DefaultHeightProvider, $DefaultHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.DefaultHeightProvider"
import {$SurfaceHeightProvider, $SurfaceHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.SurfaceHeightProvider"
import {$SpawnerRoomHeightProvider, $SpawnerRoomHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.SpawnerRoomHeightProvider"
import {$UniformHeightProvider, $UniformHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.UniformHeightProvider"
import {$StructureHeightProviderType, $StructureHeightProviderType$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProviderType"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BelowSurfaceHeightProvider, $BelowSurfaceHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.BelowSurfaceHeightProvider"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$WorldGenerationContext, $WorldGenerationContext$$Type} from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$DeepSpawnerRoomHeightProvider, $DeepSpawnerRoomHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.DeepSpawnerRoomHeightProvider"

export interface $StructureHeightProvider {

 "minY"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): integer
 "getType"(): $StructureHeightProviderType<(any)>
 "sample"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): $OptionalInt
 "maxY"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): integer
get "type"(): $StructureHeightProviderType<(any)>
}

export namespace $StructureHeightProvider {
const CODEC: $Codec<($StructureHeightProvider)>
function of(arg0: $HeightProvider$$Type): $DefaultHeightProvider
function constant(arg0: $VerticalAnchor$$Type): $DefaultHeightProvider
function uniform(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $UniformHeightProvider
function deepSpawnerRoom(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $DeepSpawnerRoomHeightProvider
function belowSurface(arg0: $VerticalAnchor$$Type): $BelowSurfaceHeightProvider
function spawnerRoom(arg0: $VerticalAnchor$$Type): $SpawnerRoomHeightProvider
function surfaceBetween(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $SurfaceHeightProvider
function getWorldGenerationContext(arg0: $Structure$GenerationContext$$Type): $WorldGenerationContext
const probejs$$marker: never
}
export class $StructureHeightProvider$$Static implements $StructureHeightProvider {
static readonly "CODEC": $Codec<($StructureHeightProvider)>


 "minY"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): integer
static "of"(arg0: $HeightProvider$$Type): $DefaultHeightProvider
static "constant"(arg0: $VerticalAnchor$$Type): $DefaultHeightProvider
 "getType"(): $StructureHeightProviderType<(any)>
static "uniform"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $UniformHeightProvider
 "sample"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): $OptionalInt
 "maxY"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): integer
static "deepSpawnerRoom"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $DeepSpawnerRoomHeightProvider
static "belowSurface"(arg0: $VerticalAnchor$$Type): $BelowSurfaceHeightProvider
static "spawnerRoom"(arg0: $VerticalAnchor$$Type): $SpawnerRoomHeightProvider
static "surfaceBetween"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $SurfaceHeightProvider
static "getWorldGenerationContext"(arg0: $Structure$GenerationContext$$Type): $WorldGenerationContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureHeightProvider$$Type = ($StructureHeightProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureHeightProvider_ = $StructureHeightProvider$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.recipe.ToolCraftingRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ToolCraftingRecipe extends $Record implements $CraftingRecipe {

constructor(category: $CraftingBookCategory$$Type, ingredient: $Ingredient$$Type, tool: $Ingredient$$Type, result: $ItemStack$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "result"(): $ItemStack
public "category"(): $CraftingBookCategory
public "ingredient"(): $Ingredient
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "tool"(): $Ingredient
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getType"(): $RecipeType<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): string
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "type"(): $RecipeType<(any)>
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
export type $ToolCraftingRecipe$$Type = ({"result"?: $ItemStack$$Type, "category"?: $CraftingBookCategory$$Type, "tool"?: $Ingredient$$Type, "ingredient"?: $Ingredient$$Type}) | ([result?: $ItemStack$$Type, category?: $CraftingBookCategory$$Type, tool?: $Ingredient$$Type, ingredient?: $Ingredient$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolCraftingRecipe_ = $ToolCraftingRecipe$$Type;
}}
declare module "com.stal111.valhelsia_structures.utils.StartPoolKeySet" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$JigsawBuilder, $JigsawBuilder$$Type} from "net.valhelsia.valhelsia_core.api.common.world.structure.jigsaw.JigsawBuilder"
import {$ResourceKeyHelper, $ResourceKeyHelper$$Type} from "com.stal111.valhelsia_structures.common.builtin.ResourceKeyHelper"
import {$TemplatePoolHelper, $TemplatePoolHelper$$Type} from "com.stal111.valhelsia_structures.utils.TemplatePoolHelper"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$TerrainAdjustment, $TerrainAdjustment$$Type} from "net.minecraft.world.level.levelgen.structure.TerrainAdjustment"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$StartPoolKeySet$WithFurnished, $StartPoolKeySet$WithFurnished$$Type} from "com.stal111.valhelsia_structures.utils.StartPoolKeySet$WithFurnished"
import {$StartPoolKeySet$Simple, $StartPoolKeySet$Simple$$Type} from "com.stal111.valhelsia_structures.utils.StartPoolKeySet$Simple"
import {$BootstrapContext, $BootstrapContext$$Type} from "net.minecraft.data.worldgen.BootstrapContext"

export interface $StartPoolKeySet {

 "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: $UnaryOperator$$Type<($JigsawBuilder)>): void
 "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: string, arg3: $UnaryOperator$$Type<($JigsawBuilder)>): void
 "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: string, arg3: $UnaryOperator$$Type<($JigsawBuilder)>, arg4: $TerrainAdjustment$$Type): void
 "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: $UnaryOperator$$Type<($JigsawBuilder)>, arg3: $TerrainAdjustment$$Type): void
 "forEachKey"(arg0: $BiConsumer$$Type<($ResourceKey<($StructureTemplatePool)>), (boolean)>): void

(arg0: $BiConsumer<($ResourceKey<($StructureTemplatePool)>), (boolean)>): void
}

export namespace $StartPoolKeySet {
const FURNISHED_PREFIX: string
function simple(arg0: $ResourceKeyHelper$$Type<($StructureTemplatePool$$Type)>, arg1: string): $StartPoolKeySet$Simple
function withFurnishedVariant(arg0: $ResourceKeyHelper$$Type<($StructureTemplatePool$$Type)>, arg1: string): $StartPoolKeySet$WithFurnished
const probejs$$marker: never
}
export class $StartPoolKeySet$$Static implements $StartPoolKeySet {
static readonly "FURNISHED_PREFIX": string


 "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: $UnaryOperator$$Type<($JigsawBuilder)>): void
 "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: string, arg3: $UnaryOperator$$Type<($JigsawBuilder)>): void
 "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: string, arg3: $UnaryOperator$$Type<($JigsawBuilder)>, arg4: $TerrainAdjustment$$Type): void
 "create"(arg0: $TemplatePoolHelper$$Type, arg1: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, arg2: $UnaryOperator$$Type<($JigsawBuilder)>, arg3: $TerrainAdjustment$$Type): void
 "forEachKey"(arg0: $BiConsumer$$Type<($ResourceKey<($StructureTemplatePool)>), (boolean)>): void
static "simple"(arg0: $ResourceKeyHelper$$Type<($StructureTemplatePool$$Type)>, arg1: string): $StartPoolKeySet$Simple
static "withFurnishedVariant"(arg0: $ResourceKeyHelper$$Type<($StructureTemplatePool$$Type)>, arg1: string): $StartPoolKeySet$WithFurnished
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartPoolKeySet$$Type = ((arg0: $BiConsumer<($ResourceKey<($StructureTemplatePool)>), (boolean)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StartPoolKeySet_ = $StartPoolKeySet$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.GiantFernBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BushBlock, $BushBlock$$Type} from "net.minecraft.world.level.block.BushBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GiantFernBlock extends $BushBlock implements $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($GiantFernBlock)>
static readonly "ROTATED": $BooleanProperty
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
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GiantFernBlock$$Type = ($GiantFernBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GiantFernBlock_ = $GiantFernBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.PostBlock" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PostBlock extends $RotatedPillarBlock implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "SHAPES": $Map<($Direction$Axis), ($VoxelShape)>
static readonly "ATTACHED": $BooleanProperty
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
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
export type $PostBlock$$Type = ($PostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostBlock_ = $PostBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.CutPostBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CutPostBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ATTACHED": $BooleanProperty
static readonly "PARTS": $IntegerProperty
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
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
export type $CutPostBlock$$Type = ($CutPostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CutPostBlock_ = $CutPostBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.SpecialSpawnerBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SpecialSpawnerBlock extends $Block implements $EntityBlock {
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

public "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialSpawnerBlock$$Type = ($SpecialSpawnerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialSpawnerBlock_ = $SpecialSpawnerBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.world.structures.height.UniformHeightProvider" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$VerticalAnchor, $VerticalAnchor$$Type} from "net.minecraft.world.level.levelgen.VerticalAnchor"
import {$DefaultHeightProvider, $DefaultHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.DefaultHeightProvider"
import {$SurfaceHeightProvider, $SurfaceHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.SurfaceHeightProvider"
import {$SpawnerRoomHeightProvider, $SpawnerRoomHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.SpawnerRoomHeightProvider"
import {$StructureHeightProviderType, $StructureHeightProviderType$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProviderType"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$BelowSurfaceHeightProvider, $BelowSurfaceHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.BelowSurfaceHeightProvider"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$StructureHeightProvider, $StructureHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProvider"
import {$WorldGenerationContext, $WorldGenerationContext$$Type} from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$DeepSpawnerRoomHeightProvider, $DeepSpawnerRoomHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.DeepSpawnerRoomHeightProvider"

export class $UniformHeightProvider implements $StructureHeightProvider {
static readonly "CODEC": $MapCodec<($UniformHeightProvider)>


public "minY"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): integer
public static "of"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $UniformHeightProvider
public "getType"(): $StructureHeightProviderType<(any)>
public "sample"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): $OptionalInt
public "maxY"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): integer
public "getMinInclusive"(): $VerticalAnchor
public "getMaxInclusive"(): $VerticalAnchor
public static "of"(arg0: $HeightProvider$$Type): $DefaultHeightProvider
public static "constant"(arg0: $VerticalAnchor$$Type): $DefaultHeightProvider
public static "uniform"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $UniformHeightProvider
public static "deepSpawnerRoom"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $DeepSpawnerRoomHeightProvider
public static "belowSurface"(arg0: $VerticalAnchor$$Type): $BelowSurfaceHeightProvider
public static "spawnerRoom"(arg0: $VerticalAnchor$$Type): $SpawnerRoomHeightProvider
public static "surfaceBetween"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $SurfaceHeightProvider
public static "getWorldGenerationContext"(arg0: $Structure$GenerationContext$$Type): $WorldGenerationContext
get "type"(): $StructureHeightProviderType<(any)>
get "minInclusive"(): $VerticalAnchor
get "maxInclusive"(): $VerticalAnchor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniformHeightProvider$$Type = ($UniformHeightProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniformHeightProvider_ = $UniformHeightProvider$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.DungeonDoorBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$DungeonDoorPart, $DungeonDoorPart$$Type} from "com.stal111.valhelsia_structures.common.block.properties.DungeonDoorPart"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $DungeonDoorBlock extends $Block implements $SimpleWaterloggedBlock, $EntityBlock {
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
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "PART": $EnumProperty<($DungeonDoorPart)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DungeonDoorBlock$$Type = ($DungeonDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DungeonDoorBlock_ = $DungeonDoorBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.ExplorersTentBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ExplorersTentBlock extends $Block implements $SimpleWaterloggedBlock, $EntityBlock {
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
static readonly "OCCUPIED": $BooleanProperty
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "SLEEPING_BAG": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplorersTentBlock$$Type = ($ExplorersTentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplorersTentBlock_ = $ExplorersTentBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.UnlitLanternBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LanternBlock, $LanternBlock$$Type} from "net.minecraft.world.level.block.LanternBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $UnlitLanternBlock extends $LanternBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LanternBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "HANGING": $BooleanProperty
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

constructor(arg0: $Supplier$$Type<($Block$$Type)>, arg1: $BlockBehaviour$Properties$$Type)

public "getLitLantern"(): $Block
public "asHolder"(): $Holder<(any)>
get "litLantern"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnlitLanternBlock$$Type = ($UnlitLanternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnlitLanternBlock_ = $UnlitLanternBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.world.structures.pools.ValhelsiaSinglePoolElement" {
import {$StructureProcessorList, $StructureProcessorList$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$StructurePoolElementType, $StructurePoolElementType$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElementType"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$StructureTemplatePool$Projection, $StructureTemplatePool$Projection$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection"
import {$SinglePoolElement, $SinglePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.SinglePoolElement"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$StructureTemplate, $StructureTemplate$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"

export class $ValhelsiaSinglePoolElement extends $SinglePoolElement {
static readonly "CODEC": $MapCodec<($ValhelsiaSinglePoolElement)>

constructor(arg0: $Either$$Type<($ResourceLocation$$Type), ($StructureTemplate$$Type)>, arg1: $Holder$$Type<($StructureProcessorList)>, arg2: $StructureTemplatePool$Projection$$Type, arg3: $Optional$$Type<($LiquidSettings$$Type)>)

public "getType"(): $StructurePoolElementType<(any)>
get "type"(): $StructurePoolElementType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValhelsiaSinglePoolElement$$Type = ($ValhelsiaSinglePoolElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValhelsiaSinglePoolElement_ = $ValhelsiaSinglePoolElement$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.world.structures.height.SpawnerRoomHeightProvider" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$VerticalAnchor, $VerticalAnchor$$Type} from "net.minecraft.world.level.levelgen.VerticalAnchor"
import {$DefaultHeightProvider, $DefaultHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.DefaultHeightProvider"
import {$SurfaceHeightProvider, $SurfaceHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.SurfaceHeightProvider"
import {$UniformHeightProvider, $UniformHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.UniformHeightProvider"
import {$StructureHeightProviderType, $StructureHeightProviderType$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProviderType"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$BelowSurfaceHeightProvider, $BelowSurfaceHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.BelowSurfaceHeightProvider"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$WorldGenerationContext, $WorldGenerationContext$$Type} from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$DeepSpawnerRoomHeightProvider, $DeepSpawnerRoomHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.DeepSpawnerRoomHeightProvider"

export class $SpawnerRoomHeightProvider extends $BelowSurfaceHeightProvider {
static readonly "CODEC": $MapCodec<($SpawnerRoomHeightProvider)>

constructor(arg0: $VerticalAnchor$$Type)

public "getType"(): $StructureHeightProviderType<(any)>
public "sample"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): $OptionalInt
public static "of"(arg0: $HeightProvider$$Type): $DefaultHeightProvider
public static "constant"(arg0: $VerticalAnchor$$Type): $DefaultHeightProvider
public static "uniform"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $UniformHeightProvider
public static "deepSpawnerRoom"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $DeepSpawnerRoomHeightProvider
public static "belowSurface"(arg0: $VerticalAnchor$$Type): $BelowSurfaceHeightProvider
public static "spawnerRoom"(arg0: $VerticalAnchor$$Type): $SpawnerRoomHeightProvider
public static "surfaceBetween"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $SurfaceHeightProvider
public static "getWorldGenerationContext"(arg0: $Structure$GenerationContext$$Type): $WorldGenerationContext
get "type"(): $StructureHeightProviderType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerRoomHeightProvider$$Type = ($SpawnerRoomHeightProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnerRoomHeightProvider_ = $SpawnerRoomHeightProvider$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.world.structures.height.BelowSurfaceHeightProvider" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$VerticalAnchor, $VerticalAnchor$$Type} from "net.minecraft.world.level.levelgen.VerticalAnchor"
import {$DefaultHeightProvider, $DefaultHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.DefaultHeightProvider"
import {$SurfaceHeightProvider, $SurfaceHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.SurfaceHeightProvider"
import {$SpawnerRoomHeightProvider, $SpawnerRoomHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.SpawnerRoomHeightProvider"
import {$UniformHeightProvider, $UniformHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.UniformHeightProvider"
import {$StructureHeightProviderType, $StructureHeightProviderType$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProviderType"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$StructureHeightProvider, $StructureHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProvider"
import {$WorldGenerationContext, $WorldGenerationContext$$Type} from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$DeepSpawnerRoomHeightProvider, $DeepSpawnerRoomHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.DeepSpawnerRoomHeightProvider"

export class $BelowSurfaceHeightProvider implements $StructureHeightProvider {
static readonly "CODEC": $MapCodec<($BelowSurfaceHeightProvider)>

constructor(arg0: $VerticalAnchor$$Type)

public "minY"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): integer
public "getType"(): $StructureHeightProviderType<(any)>
public "sample"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): $OptionalInt
public "maxY"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): integer
public "getMinInclusive"(): $VerticalAnchor
public static "of"(arg0: $HeightProvider$$Type): $DefaultHeightProvider
public static "constant"(arg0: $VerticalAnchor$$Type): $DefaultHeightProvider
public static "uniform"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $UniformHeightProvider
public static "deepSpawnerRoom"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $DeepSpawnerRoomHeightProvider
public static "belowSurface"(arg0: $VerticalAnchor$$Type): $BelowSurfaceHeightProvider
public static "spawnerRoom"(arg0: $VerticalAnchor$$Type): $SpawnerRoomHeightProvider
public static "surfaceBetween"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $SurfaceHeightProvider
public static "getWorldGenerationContext"(arg0: $Structure$GenerationContext$$Type): $WorldGenerationContext
get "type"(): $StructureHeightProviderType<(any)>
get "minInclusive"(): $VerticalAnchor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BelowSurfaceHeightProvider$$Type = ($BelowSurfaceHeightProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BelowSurfaceHeightProvider_ = $BelowSurfaceHeightProvider$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.world.structures.ValhelsiaJigsawStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$StartPoolDecider, $StartPoolDecider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.StartPoolDecider"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ValhelsiaStructureSettings, $ValhelsiaStructureSettings$$Type} from "com.stal111.valhelsia_structures.common.world.structures.ValhelsiaStructureSettings"
import {$StructureHeightProvider, $StructureHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProvider"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $ValhelsiaJigsawStructure extends $Structure {
static readonly "CODEC": $MapCodec<($ValhelsiaJigsawStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $ValhelsiaStructureSettings$$Type, arg2: $StartPoolDecider$$Type, arg3: integer, arg4: $StructureHeightProvider$$Type, arg5: $Heightmap$Types$$Type, arg6: integer)

public "type"(): $StructureType<(any)>
public "adjustBoundingBox"(arg0: $BoundingBox$$Type): $BoundingBox
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
public "canGenerateOnWater"(): boolean
public "getStructureSettings"(): $ValhelsiaStructureSettings
public "hasIndividualTerrainAdjustment"(): boolean
get "structureSettings"(): $ValhelsiaStructureSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValhelsiaJigsawStructure$$Type = ($ValhelsiaJigsawStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValhelsiaJigsawStructure_ = $ValhelsiaJigsawStructure$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.world.structures.height.SurfaceHeightProvider" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$VerticalAnchor, $VerticalAnchor$$Type} from "net.minecraft.world.level.levelgen.VerticalAnchor"
import {$DefaultHeightProvider, $DefaultHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.DefaultHeightProvider"
import {$SpawnerRoomHeightProvider, $SpawnerRoomHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.SpawnerRoomHeightProvider"
import {$UniformHeightProvider, $UniformHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.UniformHeightProvider"
import {$StructureHeightProviderType, $StructureHeightProviderType$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProviderType"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$BelowSurfaceHeightProvider, $BelowSurfaceHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.BelowSurfaceHeightProvider"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$StructureHeightProvider, $StructureHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProvider"
import {$WorldGenerationContext, $WorldGenerationContext$$Type} from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$DeepSpawnerRoomHeightProvider, $DeepSpawnerRoomHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.DeepSpawnerRoomHeightProvider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SurfaceHeightProvider extends $Record implements $StructureHeightProvider {
static readonly "CODEC": $MapCodec<($SurfaceHeightProvider)>

constructor(minInclusive: $VerticalAnchor$$Type, maxInclusive: $VerticalAnchor$$Type)

public "minY"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getType"(): $StructureHeightProviderType<(any)>
public "minInclusive"(): $VerticalAnchor
public "maxInclusive"(): $VerticalAnchor
public "sample"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): $OptionalInt
public "maxY"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): integer
public static "of"(arg0: $HeightProvider$$Type): $DefaultHeightProvider
public static "constant"(arg0: $VerticalAnchor$$Type): $DefaultHeightProvider
public static "uniform"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $UniformHeightProvider
public static "deepSpawnerRoom"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $DeepSpawnerRoomHeightProvider
public static "belowSurface"(arg0: $VerticalAnchor$$Type): $BelowSurfaceHeightProvider
public static "spawnerRoom"(arg0: $VerticalAnchor$$Type): $SpawnerRoomHeightProvider
public static "surfaceBetween"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $SurfaceHeightProvider
public static "getWorldGenerationContext"(arg0: $Structure$GenerationContext$$Type): $WorldGenerationContext
get "type"(): $StructureHeightProviderType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurfaceHeightProvider$$Type = ({"maxInclusive"?: $VerticalAnchor$$Type, "minInclusive"?: $VerticalAnchor$$Type}) | ([maxInclusive?: $VerticalAnchor$$Type, minInclusive?: $VerticalAnchor$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurfaceHeightProvider_ = $SurfaceHeightProvider$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.world.structures.height.DeepSpawnerRoomHeightProvider" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$VerticalAnchor, $VerticalAnchor$$Type} from "net.minecraft.world.level.levelgen.VerticalAnchor"
import {$DefaultHeightProvider, $DefaultHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.DefaultHeightProvider"
import {$SurfaceHeightProvider, $SurfaceHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.SurfaceHeightProvider"
import {$SpawnerRoomHeightProvider, $SpawnerRoomHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.SpawnerRoomHeightProvider"
import {$UniformHeightProvider, $UniformHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.UniformHeightProvider"
import {$StructureHeightProviderType, $StructureHeightProviderType$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProviderType"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$BelowSurfaceHeightProvider, $BelowSurfaceHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.BelowSurfaceHeightProvider"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$WorldGenerationContext, $WorldGenerationContext$$Type} from "net.minecraft.world.level.levelgen.WorldGenerationContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"

export class $DeepSpawnerRoomHeightProvider extends $UniformHeightProvider {
static readonly "CODEC": $MapCodec<($DeepSpawnerRoomHeightProvider)>


public "getType"(): $StructureHeightProviderType<(any)>
public "sample"(arg0: $BlockPos$$Type, arg1: $Structure$GenerationContext$$Type, arg2: $Heightmap$Types$$Type): $OptionalInt
public static "of"(arg0: $HeightProvider$$Type): $DefaultHeightProvider
public static "constant"(arg0: $VerticalAnchor$$Type): $DefaultHeightProvider
public static "uniform"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $UniformHeightProvider
public static "deepSpawnerRoom"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $DeepSpawnerRoomHeightProvider
public static "belowSurface"(arg0: $VerticalAnchor$$Type): $BelowSurfaceHeightProvider
public static "spawnerRoom"(arg0: $VerticalAnchor$$Type): $SpawnerRoomHeightProvider
public static "surfaceBetween"(arg0: $VerticalAnchor$$Type, arg1: $VerticalAnchor$$Type): $SurfaceHeightProvider
public static "getWorldGenerationContext"(arg0: $Structure$GenerationContext$$Type): $WorldGenerationContext
get "type"(): $StructureHeightProviderType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeepSpawnerRoomHeightProvider$$Type = ($DeepSpawnerRoomHeightProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeepSpawnerRoomHeightProvider_ = $DeepSpawnerRoomHeightProvider$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.builtin.ResourceKeyHelper" {
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $ResourceKeyHelper<T> {


public static "create"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $ResourceKeyHelper<(T)>
public "createKey"(arg0: string): $ResourceKey<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceKeyHelper$$Type<T> = ($ResourceKeyHelper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceKeyHelper_<T> = $ResourceKeyHelper$$Type<(T)>;
}}
declare module "com.stal111.valhelsia_structures.common.block.HangingVinesBodyBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$GrowingPlantBodyBlock, $GrowingPlantBodyBlock$$Type} from "net.minecraft.world.level.block.GrowingPlantBodyBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HangingVinesBodyBlock extends $GrowingPlantBodyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($HangingVinesBodyBlock)>
static readonly "ATTACHED": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
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

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangingVinesBodyBlock$$Type = ($HangingVinesBodyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HangingVinesBodyBlock_ = $HangingVinesBodyBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.BrazierBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
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
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BrazierBlock extends $Block implements $SimpleWaterloggedBlock {
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
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: boolean, arg1: integer, arg2: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "onProjectileHit"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockHitResult$$Type, arg3: $Projectile$$Type): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrazierBlock$$Type = ($BrazierBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrazierBlock_ = $BrazierBlock$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.block.properties.DungeonDoorPart" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $DungeonDoorPart extends $Enum<($DungeonDoorPart)> implements $StringRepresentable {
static readonly "LEFT_4": $DungeonDoorPart
static readonly "LEFT_1": $DungeonDoorPart
static readonly "MIDDLE_2": $DungeonDoorPart
static readonly "RIGHT_2": $DungeonDoorPart
static readonly "MIDDLE_3": $DungeonDoorPart
static readonly "RIGHT_1": $DungeonDoorPart
static readonly "LEFT_3": $DungeonDoorPart
static readonly "MIDDLE_4": $DungeonDoorPart
static readonly "LEFT_2": $DungeonDoorPart
static readonly "RIGHT_4": $DungeonDoorPart
static readonly "MIDDLE_1": $DungeonDoorPart
static readonly "RIGHT_3": $DungeonDoorPart


public static "values"(): ($DungeonDoorPart)[]
public static "valueOf"(arg0: string): $DungeonDoorPart
public "isBottom"(): boolean
public "isLeft"(): boolean
public "getSerializedName"(): string
public "isRight"(): boolean
public "isMiddle"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "bottom"(): boolean
get "left"(): boolean
get "serializedName"(): string
get "right"(): boolean
get "middle"(): boolean
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DungeonDoorPart$$Type = (("left_1") | ("left_2") | ("left_3") | ("left_4") | ("middle_1") | ("middle_2") | ("middle_3") | ("middle_4") | ("right_1") | ("right_2") | ("right_3") | ("right_4"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DungeonDoorPart_ = $DungeonDoorPart$$Type;
}}
declare module "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProviderType" {
import {$StructureHeightProvider, $StructureHeightProvider$$Type} from "com.stal111.valhelsia_structures.common.world.structures.height.StructureHeightProvider"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $StructureHeightProviderType<P extends $StructureHeightProvider> {

 "codec"(): $MapCodec<(P)>

(): $MapCodec$$Type<(P)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.ValhelsiaStructuresStructureHeightProviderTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.ValhelsiaStructuresStructureHeightProviderTypesTag
}

export namespace $StructureHeightProviderType {
const probejs$$marker: never
}
export class $StructureHeightProviderType$$Static<P extends $StructureHeightProvider> implements $StructureHeightProviderType {


 "codec"(): $MapCodec<(P)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureHeightProviderType$$Type<P> = (Special.ValhelsiaStructuresStructureHeightProviderTypes) | (() => $MapCodec$$Type<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureHeightProviderType_<P> = $StructureHeightProviderType$$Type<(P)>;
}}
declare module "com.stal111.valhelsia_structures.common.block.BonePileBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BonePileBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
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
export type $BonePileBlock$$Type = ($BonePileBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BonePileBlock_ = $BonePileBlock$$Type;
}}
