declare module "net.bunten.enderscape.block.RepulsiveMagniaSproutBlock" {
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MagniaType, $MagniaType$$Type} from "net.bunten.enderscape.block.properties.MagniaType"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MagniaSproutBlock, $MagniaSproutBlock$$Type} from "net.bunten.enderscape.block.MagniaSproutBlock"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RepulsiveMagniaSproutBlock extends $MagniaSproutBlock {
readonly "directionProperties": $DirectionProperties
readonly "magniaType": $MagniaType
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RepulsiveMagniaSproutBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "OVERHEATED": $BooleanProperty
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepulsiveMagniaSproutBlock$$Type = ($RepulsiveMagniaSproutBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepulsiveMagniaSproutBlock_ = $RepulsiveMagniaSproutBlock$$Type;
}}
declare module "net.bunten.enderscape.item.RustleBucketItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DispensibleContainerItem, $DispensibleContainerItem$$Type} from "net.minecraft.world.item.DispensibleContainerItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $RustleBucketItem extends $Item implements $DispensibleContainerItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type): boolean
public "checkExtraContent"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $ItemStack$$Type, arg3: $BlockPos$$Type): void
public "emptyContents"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockHitResult$$Type, arg4: $ItemStack$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RustleBucketItem$$Type = ($RustleBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RustleBucketItem_ = $RustleBucketItem$$Type;
}}
declare module "net.bunten.enderscape.feature.LargeMurublightChanterelleFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$LargeMurublightChanterelleConfig, $LargeMurublightChanterelleConfig$$Type} from "net.bunten.enderscape.feature.LargeMurublightChanterelleConfig"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $LargeMurublightChanterelleFeature extends $Feature<($LargeMurublightChanterelleConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($LargeMurublightChanterelleConfig$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($LargeMurublightChanterelleConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeMurublightChanterelleFeature$$Type = ($LargeMurublightChanterelleFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeMurublightChanterelleFeature_ = $LargeMurublightChanterelleFeature$$Type;
}}
declare module "net.bunten.enderscape.block.UnripeFlangerBerryBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $UnripeFlangerBerryBlock extends $Block implements $BonemealableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($UnripeFlangerBerryBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($UnripeFlangerBerryBlock)>
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "onProjectileHit"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockHitResult$$Type, arg3: $Projectile$$Type): void
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnripeFlangerBerryBlock$$Type = ($UnripeFlangerBerryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnripeFlangerBerryBlock_ = $UnripeFlangerBerryBlock$$Type;
}}
declare module "net.bunten.enderscape.block.WispGrowthBlock" {
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$DirectionalPlantBlock, $DirectionalPlantBlock$$Type} from "net.bunten.enderscape.block.DirectionalPlantBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WispGrowthBlock extends $DirectionalPlantBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WispGrowthBlock)>
readonly "directionProperties": $DirectionProperties
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($WispGrowthBlock)>
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WispGrowthBlock$$Type = ($WispGrowthBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WispGrowthBlock_ = $WispGrowthBlock$$Type;
}}
declare module "net.bunten.enderscape.entity.EndTrialSpawnable" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $EndTrialSpawnable {

}

export namespace $EndTrialSpawnable {
function is(arg0: $Entity$$Type): boolean
function spawnedFromEndTrialSpawner(arg0: $Entity$$Type): boolean
function setSpawnedFromEndTrialSpawner(arg0: $Entity$$Type, arg1: boolean): void
const probejs$$marker: never
}
export class $EndTrialSpawnable$$Static implements $EndTrialSpawnable {


static "is"(arg0: $Entity$$Type): boolean
static "spawnedFromEndTrialSpawner"(arg0: $Entity$$Type): boolean
static "setSpawnedFromEndTrialSpawner"(arg0: $Entity$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndTrialSpawnable$$Type = ($EndTrialSpawnable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndTrialSpawnable_ = $EndTrialSpawnable$$Type;
}}
declare module "net.bunten.enderscape.item.RubbleShieldItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ShieldItem, $ShieldItem$$Type} from "net.minecraft.world.item.ShieldItem"

export class $RubbleShieldItem extends $ShieldItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "MINIMUM_DURABILITY_DAMAGE": float
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "EFFECTIVE_BLOCK_DELAY": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isValidRepairItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RubbleShieldItem$$Type = ($RubbleShieldItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RubbleShieldItem_ = $RubbleShieldItem$$Type;
}}
declare module "net.bunten.enderscape.feature.VeiledTreeConfig" {
import {$GrowthConfig, $GrowthConfig$$Type} from "net.bunten.enderscape.feature.GrowthConfig"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$FloatProvider, $FloatProvider$$Type} from "net.minecraft.util.valueproviders.FloatProvider"
import {$VeiledLeafPileConfig, $VeiledLeafPileConfig$$Type} from "net.bunten.enderscape.feature.VeiledLeafPileConfig"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $VeiledTreeConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($VeiledTreeConfig)>

constructor(log_height: $IntProvider$$Type, branch_count: $IntProvider$$Type, branch_segments: $IntProvider$$Type, leaf_radius: $IntProvider$$Type, vine_generation_chance: $FloatProvider$$Type, vineConfig: $Optional$$Type<($GrowthConfig$$Type)>, leafPileConfig: $Optional$$Type<($VeiledLeafPileConfig$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "log_height"(): $IntProvider
public "leaf_radius"(): $IntProvider
public "vineConfig"(): $Optional<($GrowthConfig)>
public "leafPileConfig"(): $Optional<($VeiledLeafPileConfig)>
public "branch_count"(): $IntProvider
public "branch_segments"(): $IntProvider
public "vine_generation_chance"(): $FloatProvider
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeiledTreeConfig$$Type = ({"vineConfig"?: ($GrowthConfig$$Type)?, "leafPileConfig"?: ($VeiledLeafPileConfig$$Type)?, "branch_count"?: $IntProvider$$Type, "vine_generation_chance"?: $FloatProvider$$Type, "branch_segments"?: $IntProvider$$Type, "leaf_radius"?: $IntProvider$$Type, "log_height"?: $IntProvider$$Type}) | ([vineConfig?: ($GrowthConfig$$Type)?, leafPileConfig?: ($VeiledLeafPileConfig$$Type)?, branch_count?: $IntProvider$$Type, vine_generation_chance?: $FloatProvider$$Type, branch_segments?: $IntProvider$$Type, leaf_radius?: $IntProvider$$Type, log_height?: $IntProvider$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeiledTreeConfig_ = $VeiledTreeConfig$$Type;
}}
declare module "net.bunten.enderscape.client.mixin.MusicManagerAccess" {
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"

export interface $MusicManagerAccess {

 "getCurrentMusic"(): $SoundInstance
 "getNextSongDelay"(): integer
get "currentMusic"(): $SoundInstance
get "nextSongDelay"(): integer
}

export namespace $MusicManagerAccess {
const probejs$$marker: never
}
export class $MusicManagerAccess$$Static implements $MusicManagerAccess {


 "getCurrentMusic"(): $SoundInstance
 "getNextSongDelay"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MusicManagerAccess$$Type = ($MusicManagerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MusicManagerAccess_ = $MusicManagerAccess$$Type;
}}
declare module "net.bunten.enderscape.item.HealingItem" {
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

export class $HealingItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HealingItem$$Type = ($HealingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HealingItem_ = $HealingItem$$Type;
}}
declare module "net.bunten.enderscape.entity.magnia.MagniaMoveable" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$MagniaProperties, $MagniaProperties$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $MagniaMoveable {

 "createMagniaProperties"(): $MagniaProperties

(): $MagniaProperties$$Type
}

export namespace $MagniaMoveable {
const DEFAULT_MAGNIA_PREDICATE: $Predicate<($Entity)>
const MAGNIA_GRAVITY_MODIFIER: $AttributeModifier
function is(arg0: $Entity$$Type): boolean
function getMagniaProperties(arg0: $Entity$$Type): $MagniaProperties
function canMagniaAffect(arg0: $Entity$$Type): boolean
function getMagnetismFactor(arg0: $Entity$$Type): float
const probejs$$marker: never
}
export class $MagniaMoveable$$Static implements $MagniaMoveable {
static readonly "DEFAULT_MAGNIA_PREDICATE": $Predicate<($Entity)>
static readonly "MAGNIA_GRAVITY_MODIFIER": $AttributeModifier


static "is"(arg0: $Entity$$Type): boolean
static "getMagniaProperties"(arg0: $Entity$$Type): $MagniaProperties
static "canMagniaAffect"(arg0: $Entity$$Type): boolean
 "createMagniaProperties"(): $MagniaProperties
static "getMagnetismFactor"(arg0: $Entity$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagniaMoveable$$Type = (() => $MagniaProperties$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagniaMoveable_ = $MagniaMoveable$$Type;
}}
declare module "net.bunten.enderscape.block.MurublightShelfBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DirectionalPlantBlock, $DirectionalPlantBlock$$Type} from "net.bunten.enderscape.block.DirectionalPlantBlock"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $MurublightShelfBlock extends $DirectionalPlantBlock implements $BonemealableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($MurublightShelfBlock)>
readonly "directionProperties": $DirectionProperties
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean
static readonly "AGE": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "generate"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($MurublightShelfBlock)>
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public static "canGenerate"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MurublightShelfBlock$$Type = ($MurublightShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MurublightShelfBlock_ = $MurublightShelfBlock$$Type;
}}
declare module "net.bunten.enderscape.item.CrackedMirrorItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $CrackedMirrorItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrackedMirrorItem$$Type = ($CrackedMirrorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrackedMirrorItem_ = $CrackedMirrorItem$$Type;
}}
declare module "net.bunten.enderscape.entity.drifter.AbstractDrifter" {
import {$MagniaProperties, $MagniaProperties$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties"
import {$Brain, $Brain$$Type} from "net.minecraft.world.entity.ai.Brain"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$MobSpawnType, $MobSpawnType$$Type} from "net.minecraft.world.entity.MobSpawnType"
import {$MoveControl, $MoveControl$$Type} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Animal, $Animal$$Type} from "net.minecraft.world.entity.animal.Animal"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$WalkAnimationState, $WalkAnimationState$$Type} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SpellData, $SpellData$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $AbstractDrifter extends $Animal {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "ars_Nouveau$motions": $Stack<(any)>
 "yHeadRot": float
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
 "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": StringJS
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
 "persistenceRequired": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": StringJS
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
static readonly "BABY_START_AGE": integer
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
 "castingSpell": $SpellData
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
 "entityJs$builder": any
static readonly "BODY_ARMOR_OFFSET": integer
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
 "hasUsedSingleAttack": boolean
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "yRot": float
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "targetSelector": $GoalSelector
 "drinkTime": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "xpReward": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
 "moveControl": $MoveControl
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
readonly "spells": $HashMap<(any), (any)>
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "target": $LivingEntity
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean

constructor(arg0: $EntityType$$Type<($AbstractDrifter$$Type)>, arg1: $Level$$Type)

public "isFood"(arg0: $ItemStack$$Type): boolean
public "isBaby"(): boolean
public "aiStep"(): void
public "canBeLeashed"(): boolean
public "getLeashOffset"(): $Vec3
public "getVoicePitch"(): float
public "onClimbable"(): boolean
public "jumpFromGround"(): void
public static "canSpawn"(arg0: $EntityType$$Type<(any)>, arg1: $LevelAccessor$$Type, arg2: $MobSpawnType$$Type, arg3: $BlockPos$$Type, arg4: $RandomSource$$Type): boolean
public "getBrain"(): $Brain<($AbstractDrifter)>
public "getJumpSound"(): $SoundEvent
public "getWalkTargetValue"(arg0: $BlockPos$$Type, arg1: $LevelReader$$Type): float
public "causeFallDamage"(arg0: float, arg1: float, arg2: $DamageSource$$Type): boolean
public static "bumblezone$getDATA_BABY_ID"(): $EntityDataAccessor<(boolean)>
public "self"(): $LivingEntity
/**
 * 
 * @deprecated
 */
public "getItemBySlot"(arg0: $EquipmentSlot$$Type): $ItemStack
public static "tickLeash"<E extends ($Entity) & ($Leashable)>(arg0: E): void
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
public "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "lithium$getCachedFeetBlockState"(): $BlockState
public static "is"(arg0: $Entity$$Type): boolean
public static "spawnedFromEndTrialSpawner"(arg0: $Entity$$Type): boolean
public static "setSpawnedFromEndTrialSpawner"(arg0: $Entity$$Type, arg1: boolean): void
public static "getMagniaProperties"(arg0: $Entity$$Type): $MagniaProperties
public static "canMagniaAffect"(arg0: $Entity$$Type): boolean
public static "getMagnetismFactor"(arg0: $Entity$$Type): float
public static "dashed"(arg0: $Entity$$Type): boolean
public static "setDashed"(arg0: $Entity$$Type, arg1: boolean): void
public static "dashTicks"(arg0: $Entity$$Type): integer
public static "setDashTicks"(arg0: $Entity$$Type, arg1: integer): void
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$resetDynamicLight"(): void
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "baby"(): boolean
get "leashOffset"(): $Vec3
get "voicePitch"(): float
get "brain"(): $Brain<($AbstractDrifter)>
get "jumpSound"(): $SoundEvent
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDrifter$$Type = ($AbstractDrifter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractDrifter_ = $AbstractDrifter$$Type;
}}
declare module "net.bunten.enderscape.feature.EnderscapeIslandFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $EnderscapeIslandFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderscapeIslandFeature$$Type = ($EnderscapeIslandFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderscapeIslandFeature_ = $EnderscapeIslandFeature$$Type;
}}
declare module "net.bunten.enderscape.block.CorruptPathBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractOvergrowthBlock, $AbstractOvergrowthBlock$$Type} from "net.bunten.enderscape.block.AbstractOvergrowthBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CorruptPathBlock extends $AbstractOvergrowthBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CorruptPathBlock)>
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
readonly "flattenSound": $SoundEvent
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($CorruptPathBlock)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CorruptPathBlock$$Type = ($CorruptPathBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CorruptPathBlock_ = $CorruptPathBlock$$Type;
}}
declare module "net.bunten.enderscape.feature.GrowthFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$GrowthConfig, $GrowthConfig$$Type} from "net.bunten.enderscape.feature.GrowthConfig"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $GrowthFeature extends $Feature<($GrowthConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($GrowthConfig$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($GrowthConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowthFeature$$Type = ($GrowthFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowthFeature_ = $GrowthFeature$$Type;
}}
declare module "net.bunten.enderscape.block.VeiledLeafPileBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VeiledLeafPileBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($VeiledLeafPileBlock)>
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
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($VeiledLeafPileBlock)>
public static "canSurvive"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $Block$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeiledLeafPileBlock$$Type = ($VeiledLeafPileBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeiledLeafPileBlock_ = $VeiledLeafPileBlock$$Type;
}}
declare module "net.bunten.enderscape.feature.VeiledTreeFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$VeiledTreeConfig, $VeiledTreeConfig$$Type} from "net.bunten.enderscape.feature.VeiledTreeConfig"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $VeiledTreeFeature extends $Feature<($VeiledTreeConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($VeiledTreeConfig$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($VeiledTreeConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeiledTreeFeature$$Type = ($VeiledTreeFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeiledTreeFeature_ = $VeiledTreeFeature$$Type;
}}
declare module "net.bunten.enderscape.criteria.PullEntityCriterion$Conditions" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PullEntityCriterion$Conditions extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($PullEntityCriterion$Conditions)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, pulledEntity: $Optional$$Type<($EntityPredicate$$Type)>, distance: $Optional$$Type<($DistancePredicate$$Type)>)

public "distance"(): $Optional<($DistancePredicate)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "pulledEntity"(): $Optional<($EntityPredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PullEntityCriterion$Conditions$$Type = ({"distance"?: ($DistancePredicate$$Type)?, "pulledEntity"?: ($EntityPredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([distance?: ($DistancePredicate$$Type)?, pulledEntity?: ($EntityPredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PullEntityCriterion$Conditions_ = $PullEntityCriterion$Conditions$$Type;
}}
declare module "net.bunten.enderscape.block.CorruptOvergrowthBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractOvergrowthBlock, $AbstractOvergrowthBlock$$Type} from "net.bunten.enderscape.block.AbstractOvergrowthBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CorruptOvergrowthBlock extends $AbstractOvergrowthBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CorruptOvergrowthBlock)>
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
readonly "flattenSound": $SoundEvent
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CorruptOvergrowthBlock$$Type = ($CorruptOvergrowthBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CorruptOvergrowthBlock_ = $CorruptOvergrowthBlock$$Type;
}}
declare module "net.bunten.enderscape.feature.VoidShaleConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import {$List, $List$$Type} from "java.util.List"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $VoidShaleConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($VoidShaleConfig)>

constructor(targets: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>, maxTerrainDepth: $IntProvider$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "targets"(): $List<($OreConfiguration$TargetBlockState)>
public "maxTerrainDepth"(): $IntProvider
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidShaleConfig$$Type = ({"maxTerrainDepth"?: $IntProvider$$Type, "targets"?: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>}) | ([maxTerrainDepth?: $IntProvider$$Type, targets?: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidShaleConfig_ = $VoidShaleConfig$$Type;
}}
declare module "net.bunten.enderscape.block.EndVaultBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$VaultBlock, $VaultBlock$$Type} from "net.minecraft.world.level.block.VaultBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$VaultState, $VaultState$$Type} from "net.minecraft.world.level.block.entity.vault.VaultState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $EndVaultBlock extends $VaultBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($VaultBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STATE": $Property<($VaultState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "OMINOUS": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndVaultBlock$$Type = ($EndVaultBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndVaultBlock_ = $EndVaultBlock$$Type;
}}
declare module "net.bunten.enderscape.item.MirrorItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MirrorContext, $MirrorContext$$Type} from "net.bunten.enderscape.item.MirrorContext"
import {$NebuliteToolItem, $NebuliteToolItem$$Type} from "net.bunten.enderscape.item.NebuliteToolItem"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$NebuliteToolContext, $NebuliteToolContext$$Type} from "net.bunten.enderscape.item.NebuliteToolContext"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $MirrorItem extends $NebuliteToolItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "is"(arg0: $ItemStack$$Type): boolean
public "getName"(arg0: $ItemStack$$Type): $Component
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "teleport"(arg0: $MirrorContext$$Type, arg1: boolean): boolean
public static "isLinked"(arg0: $ItemStack$$Type): boolean
public static "writeData"(arg0: $ItemStack$$Type, arg1: $BlockPos$$Type, arg2: $ResourceKey$$Type<($Level)>): void
public "displayHudWhen"(arg0: $NebuliteToolContext$$Type): boolean
public "fuelCost"(arg0: $NebuliteToolContext$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "updateLodestoneTracker"(arg0: $ItemStack$$Type, arg1: $Level$$Type): void
public static "isSameDimension"(arg0: $MirrorContext$$Type, arg1: $ResourceKey$$Type<($Level)>): boolean
public static "hasTransdimensional"(arg0: $MirrorContext$$Type): boolean
public static "isSameCoordinateScale"(arg0: $MirrorContext$$Type): boolean
public static "getTeleportPosition"(arg0: $MirrorContext$$Type): $Optional<($Vec3)>
public static "wasLinkedBefore"(arg0: $ItemStack$$Type): boolean
public "hideInvalidOutlineWhen"(arg0: $NebuliteToolContext$$Type): boolean
public static "getAdditionalCostIncreaseDistance"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: float): float
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MirrorItem$$Type = ($MirrorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MirrorItem_ = $MirrorItem$$Type;
}}
declare module "net.bunten.enderscape.block.VeiledLeavesBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $VeiledLeavesBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
 "item": $Item
static readonly "CODEC": $MapCodec<($VeiledLeavesBlock)>
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
static readonly "DECAY_DISTANCE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($VeiledLeavesBlock)>
public static "updateDistance"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type): $BlockState
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "getOptionalDistanceAt"(arg0: $BlockState$$Type): $OptionalInt
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
export type $VeiledLeavesBlock$$Type = ($VeiledLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeiledLeavesBlock_ = $VeiledLeavesBlock$$Type;
}}
declare module "net.bunten.enderscape.block.WispFlowerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$TallFlowerBlock, $TallFlowerBlock$$Type} from "net.minecraft.world.level.block.TallFlowerBlock"
import {$DoubleBlockHalf, $DoubleBlockHalf$$Type} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WispFlowerBlock extends $TallFlowerBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TallFlowerBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WispFlowerBlock$$Type = ($WispFlowerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WispFlowerBlock_ = $WispFlowerBlock$$Type;
}}
declare module "net.bunten.enderscape.block.MagniaSproutBlock" {
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
import {$MagniaType, $MagniaType$$Type} from "net.bunten.enderscape.block.properties.MagniaType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DirectionalPlantBlock, $DirectionalPlantBlock$$Type} from "net.bunten.enderscape.block.DirectionalPlantBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $MagniaSproutBlock extends $DirectionalPlantBlock implements $SimpleWaterloggedBlock, $EntityBlock {
readonly "directionProperties": $DirectionProperties
readonly "magniaType": $MagniaType
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "OVERHEATED": $BooleanProperty
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $MagniaType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "isPowered"(arg0: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public static "getMagniaType"(arg0: $BlockState$$Type): $MagniaType
public static "isOverheated"(arg0: $BlockState$$Type): boolean
public static "shouldOverheat"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public static "isRepulsive"(arg0: $BlockState$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "onProjectileHit"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockHitResult$$Type, arg3: $Projectile$$Type): void
public static "canPullEntities"(arg0: $BlockState$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public "asHolder"(): $Holder<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagniaSproutBlock$$Type = ($MagniaSproutBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagniaSproutBlock_ = $MagniaSproutBlock$$Type;
}}
declare module "net.bunten.enderscape.biome.util.SkyParameters" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$RGBA, $RGBA$$Type} from "net.bunten.enderscape.util.RGBA"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SkyParameters extends $Record {
static readonly "DEFAULT_FOG_START_DENSITY": float
static readonly "DEFAULT_STAR_COLOR": $RGBA
static readonly "DEFAULT_NEBULA_COLOR": $RGBA
static readonly "CODEC": $Codec<($SkyParameters)>
static readonly "DEFAULT_FOG_END_DENSITY": float

constructor(location: $ResourceLocation$$Type, nebulaColor: integer, nebulaAlpha: float, starColor: integer, starAlpha: float, fogStartDensity: float, fogEndDensity: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "location"(): $ResourceLocation
public "nebulaRGBA"(): $RGBA
public "starRGBA"(): $RGBA
public "nebulaAlpha"(): float
public "starAlpha"(): float
public "fogEndDensity"(): float
public "starColor"(): integer
public "nebulaColor"(): integer
public static "getSkyParametersFor"(arg0: $Holder$$Type<($Biome)>): $Optional<($SkyParameters)>
public "fogStartDensity"(): float
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnderscapeEndSkyParameters
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnderscapeEndSkyParametersTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkyParameters$$Type = (Special.EnderscapeEndSkyParameters) | ({"location"?: $ResourceLocation$$Type, "starAlpha"?: float, "nebulaAlpha"?: float, "starColor"?: integer, "fogStartDensity"?: float, "fogEndDensity"?: float, "nebulaColor"?: integer}) | ([location?: $ResourceLocation$$Type, starAlpha?: float, nebulaAlpha?: float, starColor?: integer, fogStartDensity?: float, fogEndDensity?: float, nebulaColor?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkyParameters_ = $SkyParameters$$Type;
}}
declare module "net.bunten.enderscape.block.MagniaBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MagniaType, $MagniaType$$Type} from "net.bunten.enderscape.block.properties.MagniaType"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MagniaBlock extends $Block {
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

constructor(arg0: $MagniaType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "getMagniaType"(arg0: $BlockState$$Type): $MagniaType
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagniaBlock$$Type = ($MagniaBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagniaBlock_ = $MagniaBlock$$Type;
}}
declare module "net.bunten.enderscape.feature.LargeCelestialChanterelleConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LargeCelestialChanterelleConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($LargeCelestialChanterelleConfig)>
static readonly "DEFAULT": $LargeCelestialChanterelleConfig

constructor(height: $IntProvider$$Type, cap_radius_division: float, cap_droop_percentage: float, excess_vine_discard_chance: float, vine_generation_tries: integer, tries: integer)

public "tries"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "height"(): $IntProvider
public "cap_radius_division"(): float
public "cap_droop_percentage"(): float
public "vine_generation_tries"(): integer
public "excess_vine_discard_chance"(): float
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCelestialChanterelleConfig$$Type = ({"excess_vine_discard_chance"?: float, "tries"?: integer, "cap_droop_percentage"?: float, "vine_generation_tries"?: integer, "height"?: $IntProvider$$Type, "cap_radius_division"?: float}) | ([excess_vine_discard_chance?: float, tries?: integer, cap_droop_percentage?: float, vine_generation_tries?: integer, height?: $IntProvider$$Type, cap_radius_division?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeCelestialChanterelleConfig_ = $LargeCelestialChanterelleConfig$$Type;
}}
declare module "net.bunten.enderscape.util.RGBA$FloatFetcher" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RGBA$FloatFetcher {

 "fetch"(arg0: integer, arg1: integer, arg2: integer): float

(arg0: integer, arg1: integer, arg2: integer): float
}

export namespace $RGBA$FloatFetcher {
const probejs$$marker: never
}
export class $RGBA$FloatFetcher$$Static implements $RGBA$FloatFetcher {


 "fetch"(arg0: integer, arg1: integer, arg2: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RGBA$FloatFetcher$$Type = ((arg0: integer, arg1: integer, arg2: integer) => float);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RGBA$FloatFetcher_ = $RGBA$FloatFetcher$$Type;
}}
declare module "net.bunten.enderscape.item.NebuliteToolItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$NebuliteToolContext, $NebuliteToolContext$$Type} from "net.bunten.enderscape.item.NebuliteToolContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Fraction, $Fraction$$Type} from "org.apache.commons.lang3.math.Fraction"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $NebuliteToolItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "is"(arg0: $ItemStack$$Type): boolean
public static "of"(arg0: $Item$$Type): $NebuliteToolItem
public static "of"(arg0: $ItemStack$$Type): $NebuliteToolItem
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public static "useFuel"(arg0: $NebuliteToolContext$$Type): void
public "displayHudWhen"(arg0: $NebuliteToolContext$$Type): boolean
public static "currentFuel"(arg0: $ItemStack$$Type): integer
public static "maxFuel"(arg0: $ItemStack$$Type): integer
public "fuelCost"(arg0: $NebuliteToolContext$$Type): integer
public static "setMaxFuel"(arg0: $ItemStack$$Type, arg1: integer): void
public static "setFuel"(arg0: $ItemStack$$Type, arg1: integer): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public static "fuelExceedsCost"(arg0: $NebuliteToolContext$$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public static "computeFuelAmount"(arg0: $ItemStack$$Type): $Fraction
public "hideInvalidOutlineWhen"(arg0: $NebuliteToolContext$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NebuliteToolItem$$Type = ($NebuliteToolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NebuliteToolItem_ = $NebuliteToolItem$$Type;
}}
declare module "net.bunten.enderscape.block.FlangerBerryFlowerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FlangerBerryFlowerBlock extends $Block implements $BonemealableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FlangerBerryFlowerBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($FlangerBerryFlowerBlock)>
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlangerBerryFlowerBlock$$Type = ($FlangerBerryFlowerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlangerBerryFlowerBlock_ = $FlangerBerryFlowerBlock$$Type;
}}
declare module "net.bunten.enderscape.item.DriftJellyBottleItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $DriftJellyBottleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getEatingSound"(): $SoundEvent
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getDrinkingSound"(): $SoundEvent
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "eatingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DriftJellyBottleItem$$Type = ($DriftJellyBottleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DriftJellyBottleItem_ = $DriftJellyBottleItem$$Type;
}}
declare module "net.bunten.enderscape.block.DryEndGrowthBlock" {
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$DirectionalPlantBlock, $DirectionalPlantBlock$$Type} from "net.bunten.enderscape.block.DirectionalPlantBlock"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DryEndGrowthBlock extends $DirectionalPlantBlock implements $BonemealableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DryEndGrowthBlock)>
readonly "directionProperties": $DirectionProperties
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($DryEndGrowthBlock)>
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DryEndGrowthBlock$$Type = ($DryEndGrowthBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DryEndGrowthBlock_ = $DryEndGrowthBlock$$Type;
}}
declare module "net.bunten.enderscape.item.NebuliteToolContext" {
import {$NebuliteToolItem, $NebuliteToolItem$$Type} from "net.bunten.enderscape.item.NebuliteToolItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $NebuliteToolContext {

constructor(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type)

public "level"(): $Level
public "item"(): $NebuliteToolItem
public "user"(): $LivingEntity
public "stack"(): $ItemStack
public "serverLevel"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NebuliteToolContext$$Type = ($NebuliteToolContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NebuliteToolContext_ = $NebuliteToolContext$$Type;
}}
declare module "net.bunten.enderscape.block.RepulsiveMagniaBlock" {
import {$MagniaBlock, $MagniaBlock$$Type} from "net.bunten.enderscape.block.MagniaBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RepulsiveMagniaBlock extends $MagniaBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RepulsiveMagniaBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepulsiveMagniaBlock$$Type = ($RepulsiveMagniaBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepulsiveMagniaBlock_ = $RepulsiveMagniaBlock$$Type;
}}
declare module "net.bunten.enderscape.block.CelestialPathBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractOvergrowthBlock, $AbstractOvergrowthBlock$$Type} from "net.bunten.enderscape.block.AbstractOvergrowthBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CelestialPathBlock extends $AbstractOvergrowthBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CelestialPathBlock)>
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
readonly "flattenSound": $SoundEvent
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($CelestialPathBlock)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestialPathBlock$$Type = ($CelestialPathBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestialPathBlock_ = $CelestialPathBlock$$Type;
}}
declare module "net.bunten.enderscape.block.CorruptGrowthBlock" {
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$AbstractGrowthBlock, $AbstractGrowthBlock$$Type} from "net.bunten.enderscape.block.AbstractGrowthBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$Part, $Part$$Type} from "net.bunten.enderscape.block.properties.Part"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CorruptGrowthBlock extends $AbstractGrowthBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CorruptGrowthBlock)>
readonly "directionProperties": $DirectionProperties
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
static readonly "GROWTH": $EnumProperty<($Part)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CorruptGrowthBlock$$Type = ($CorruptGrowthBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CorruptGrowthBlock_ = $CorruptGrowthBlock$$Type;
}}
declare module "net.bunten.enderscape.block.AbstractOvergrowthBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$DirectionalBlock, $DirectionalBlock$$Type} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AbstractOvergrowthBlock extends $DirectionalBlock implements $BonemealableBlock {
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
readonly "flattenSound": $SoundEvent
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: boolean, arg1: $Block$$Type, arg2: $Block$$Type, arg3: $SoundEvent$$Type, arg4: boolean, arg5: $DirectionProperties$$Type, arg6: $BlockBehaviour$Properties$$Type)
constructor(arg0: boolean, arg1: $Block$$Type, arg2: $Block$$Type, arg3: $SoundEvent$$Type, arg4: $DirectionProperties$$Type, arg5: $BlockBehaviour$Properties$$Type)
constructor(arg0: boolean, arg1: $Block$$Type, arg2: $DirectionProperties$$Type, arg3: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getType"(): $BonemealableBlock$Type
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "getDirection"(arg0: $BlockState$$Type): $Direction
public "hasAir"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractOvergrowthBlock$$Type = ($AbstractOvergrowthBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractOvergrowthBlock_ = $AbstractOvergrowthBlock$$Type;
}}
declare module "net.bunten.enderscape.block.MurublightChanterelleBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DirectionalPlantBlock, $DirectionalPlantBlock$$Type} from "net.bunten.enderscape.block.DirectionalPlantBlock"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $MurublightChanterelleBlock extends $DirectionalPlantBlock implements $BonemealableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($MurublightChanterelleBlock)>
readonly "directionProperties": $DirectionProperties
static readonly "STAGE": $IntegerProperty
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($MurublightChanterelleBlock)>
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MurublightChanterelleBlock$$Type = ($MurublightChanterelleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MurublightChanterelleBlock_ = $MurublightChanterelleBlock$$Type;
}}
declare module "net.bunten.enderscape.block.AbstractGrowthBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DirectionalPlantBlock, $DirectionalPlantBlock$$Type} from "net.bunten.enderscape.block.DirectionalPlantBlock"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$GrowthConfig, $GrowthConfig$$Type} from "net.bunten.enderscape.feature.GrowthConfig"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Part, $Part$$Type} from "net.bunten.enderscape.block.properties.Part"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AbstractGrowthBlock extends $DirectionalPlantBlock implements $BonemealableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
readonly "directionProperties": $DirectionProperties
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
static readonly "GROWTH": $EnumProperty<($Part)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $DirectionProperties$$Type, arg1: $BlockBehaviour$Properties$$Type)

public static "generate"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $RandomSource$$Type, arg3: $GrowthConfig$$Type): boolean
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "generatePatch"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: integer, arg5: integer, arg6: integer): void
public static "getPart"(arg0: $BlockState$$Type): $Part
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "hasGrowthSupport"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGrowthBlock$$Type = ($AbstractGrowthBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGrowthBlock_ = $AbstractGrowthBlock$$Type;
}}
declare module "net.bunten.enderscape.block.BulbLanternBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LanternBlock, $LanternBlock$$Type} from "net.minecraft.world.level.block.LanternBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BulbLanternBlock extends $LanternBlock {
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
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulbLanternBlock$$Type = ($BulbLanternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BulbLanternBlock_ = $BulbLanternBlock$$Type;
}}
declare module "net.bunten.enderscape.block.VeiledOvergrowthBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractOvergrowthBlock, $AbstractOvergrowthBlock$$Type} from "net.bunten.enderscape.block.AbstractOvergrowthBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VeiledOvergrowthBlock extends $AbstractOvergrowthBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($VeiledOvergrowthBlock)>
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
readonly "flattenSound": $SoundEvent
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeiledOvergrowthBlock$$Type = ($VeiledOvergrowthBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeiledOvergrowthBlock_ = $VeiledOvergrowthBlock$$Type;
}}
declare module "net.bunten.enderscape.util.RGBA" {
import {$RGBA$Vec4Fetcher, $RGBA$Vec4Fetcher$$Type} from "net.bunten.enderscape.util.RGBA$Vec4Fetcher"
import {$RGBA$FloatFetcher, $RGBA$FloatFetcher$$Type} from "net.bunten.enderscape.util.RGBA$FloatFetcher"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BiomeManager, $BiomeManager$$Type} from "net.minecraft.world.level.biome.BiomeManager"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Vector4f, $Vector4f$$Type} from "org.joml.Vector4f"
import {$SkyParameters, $SkyParameters$$Type} from "net.bunten.enderscape.biome.util.SkyParameters"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RGBA extends $Record {
static readonly "GAUSSIAN_SAMPLE_KERNEL": (double)[]

constructor(color: integer, alpha: float)

public "color"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "alpha"(): float
public static "sampleVector4f"(arg0: $BiomeManager$$Type, arg1: $Vec3$$Type, arg2: $Function$$Type<($SkyParameters), ($RGBA$$Type)>, arg3: $RGBA$$Type): $Vector4f
public static "sampleVector4f"(arg0: $Vec3$$Type, arg1: $RGBA$Vec4Fetcher$$Type): $Vector4f
public static "darkenColor"(arg0: integer, arg1: float): integer
public static "sampleFloat"(arg0: $Vec3$$Type, arg1: $RGBA$FloatFetcher$$Type): float
public static "sampleFloat"(arg0: $BiomeManager$$Type, arg1: $Vec3$$Type, arg2: $Function$$Type<($SkyParameters), (float)>, arg3: float): float
public static "generateGaussianKernel"(arg0: integer): (double)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RGBA$$Type = ({"alpha"?: float, "color"?: integer}) | ([alpha?: float, color?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RGBA_ = $RGBA$$Type;
}}
declare module "net.bunten.enderscape.effect.LowGravityEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $LowGravityEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LowGravityEffect$$Type = ($LowGravityEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LowGravityEffect_ = $LowGravityEffect$$Type;
}}
declare module "net.bunten.enderscape.feature.MagniaTowerFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$MagniaTowerConfig, $MagniaTowerConfig$$Type} from "net.bunten.enderscape.feature.MagniaTowerConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $MagniaTowerFeature extends $Feature<($MagniaTowerConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($MagniaTowerConfig$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($MagniaTowerConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagniaTowerFeature$$Type = ($MagniaTowerFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagniaTowerFeature_ = $MagniaTowerFeature$$Type;
}}
declare module "net.bunten.enderscape.biome.modifications.ModifyEndAmbianceModification" {
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeModifier, $BiomeModifier$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ModifyEndAmbianceModification implements $BiomeModifier {
static readonly "CODEC": $MapCodec<($ModifyEndAmbianceModification)>
static readonly "INSTANCE": $ModifyEndAmbianceModification


public "codec"(): $MapCodec<($BiomeModifier)>
public "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyEndAmbianceModification$$Type = ($ModifyEndAmbianceModification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyEndAmbianceModification_ = $ModifyEndAmbianceModification$$Type;
}}
declare module "net.bunten.enderscape.block.DirectionalPlantBlock" {
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BushBlock, $BushBlock$$Type} from "net.minecraft.world.level.block.BushBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DirectionalPlantBlock extends $BushBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
readonly "directionProperties": $DirectionProperties
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $DirectionProperties$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public static "getFacing"(arg0: $BlockState$$Type): $Direction
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionalPlantBlock$$Type = ($DirectionalPlantBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionalPlantBlock_ = $DirectionalPlantBlock$$Type;
}}
declare module "net.bunten.enderscape.block.AlluringMagniaBlock" {
import {$MagniaBlock, $MagniaBlock$$Type} from "net.bunten.enderscape.block.MagniaBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AlluringMagniaBlock extends $MagniaBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($AlluringMagniaBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlluringMagniaBlock$$Type = ($AlluringMagniaBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlluringMagniaBlock_ = $AlluringMagniaBlock$$Type;
}}
declare module "net.bunten.enderscape.feature.MurublightShelfFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $MurublightShelfFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MurublightShelfFeature$$Type = ($MurublightShelfFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MurublightShelfFeature_ = $MurublightShelfFeature$$Type;
}}
declare module "net.bunten.enderscape.feature.VeiledLeafPileFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$VeiledLeafPileConfig, $VeiledLeafPileConfig$$Type} from "net.bunten.enderscape.feature.VeiledLeafPileConfig"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $VeiledLeafPileFeature extends $Feature<($VeiledLeafPileConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($VeiledLeafPileConfig$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($VeiledLeafPileConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeiledLeafPileFeature$$Type = ($VeiledLeafPileFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeiledLeafPileFeature_ = $VeiledLeafPileFeature$$Type;
}}
declare module "net.bunten.enderscape.feature.LargeCelestialChanterelleFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeCelestialChanterelleConfig, $LargeCelestialChanterelleConfig$$Type} from "net.bunten.enderscape.feature.LargeCelestialChanterelleConfig"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $LargeCelestialChanterelleFeature extends $Feature<($LargeCelestialChanterelleConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($LargeCelestialChanterelleConfig$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($LargeCelestialChanterelleConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeCelestialChanterelleFeature$$Type = ($LargeCelestialChanterelleFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeCelestialChanterelleFeature_ = $LargeCelestialChanterelleFeature$$Type;
}}
declare module "net.bunten.enderscape.block.VeiledSaplingBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BushBlock, $BushBlock$$Type} from "net.minecraft.world.level.block.BushBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VeiledSaplingBlock extends $BushBlock implements $BonemealableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($VeiledSaplingBlock)>
static readonly "STAGE": $IntegerProperty
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

constructor(arg0: $ResourceKey$$Type<($ConfiguredFeature<(any), (any)>)>, arg1: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($VeiledSaplingBlock)>
public "advanceGrowth"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $RandomSource$$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeiledSaplingBlock$$Type = ($VeiledSaplingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeiledSaplingBlock_ = $VeiledSaplingBlock$$Type;
}}
declare module "net.bunten.enderscape.block.FlangerBerryVine" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$AbstractVineBlock, $AbstractVineBlock$$Type} from "net.bunten.enderscape.block.AbstractVineBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FlangerBerryVine extends $AbstractVineBlock implements $BonemealableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FlangerBerryVine)>
static readonly "ATTACHED": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
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
static readonly "AGE": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($FlangerBerryVine)>
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getPreferredBlocks"(): $TagKey<($Block)>
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "preferredBlocks"(): $TagKey<($Block)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlangerBerryVine$$Type = ($FlangerBerryVine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlangerBerryVine_ = $FlangerBerryVine$$Type;
}}
declare module "net.bunten.enderscape.block.VeiledVinesBlock" {
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$AbstractGrowthBlock, $AbstractGrowthBlock$$Type} from "net.bunten.enderscape.block.AbstractGrowthBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$Part, $Part$$Type} from "net.bunten.enderscape.block.properties.Part"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VeiledVinesBlock extends $AbstractGrowthBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($VeiledVinesBlock)>
readonly "directionProperties": $DirectionProperties
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
static readonly "GROWTH": $EnumProperty<($Part)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeiledVinesBlock$$Type = ($VeiledVinesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeiledVinesBlock_ = $VeiledVinesBlock$$Type;
}}
declare module "net.bunten.enderscape.feature.CeilingOreConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import {$List, $List$$Type} from "java.util.List"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CeilingOreConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($CeilingOreConfig)>

constructor(targets: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>, terrainDepth: $IntProvider$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "targets"(): $List<($OreConfiguration$TargetBlockState)>
public "terrainDepth"(): $IntProvider
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CeilingOreConfig$$Type = ({"terrainDepth"?: $IntProvider$$Type, "targets"?: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>}) | ([terrainDepth?: $IntProvider$$Type, targets?: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CeilingOreConfig_ = $CeilingOreConfig$$Type;
}}
declare module "net.bunten.enderscape.block.RipeFlangerBerryBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RipeFlangerBerryBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RipeFlangerBerryBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "codec"(): $MapCodec<($RipeFlangerBerryBlock)>
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "onProjectileHit"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockHitResult$$Type, arg3: $Projectile$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RipeFlangerBerryBlock$$Type = ($RipeFlangerBerryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RipeFlangerBerryBlock_ = $RipeFlangerBerryBlock$$Type;
}}
declare module "net.bunten.enderscape.block.ChorusSproutsBlock" {
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$DirectionalPlantBlock, $DirectionalPlantBlock$$Type} from "net.bunten.enderscape.block.DirectionalPlantBlock"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChorusSproutsBlock extends $DirectionalPlantBlock implements $BonemealableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChorusSproutsBlock)>
readonly "directionProperties": $DirectionProperties
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($ChorusSproutsBlock)>
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChorusSproutsBlock$$Type = ($ChorusSproutsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChorusSproutsBlock_ = $ChorusSproutsBlock$$Type;
}}
declare module "net.bunten.enderscape.entity.magnia.MagniaProperties$EntityMoveEffect" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $MagniaProperties$EntityMoveEffect {

 "apply"(arg0: $Entity$$Type): void

(arg0: $Entity): void
}

export namespace $MagniaProperties$EntityMoveEffect {
const probejs$$marker: never
}
export class $MagniaProperties$EntityMoveEffect$$Static implements $MagniaProperties$EntityMoveEffect {


 "apply"(arg0: $Entity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagniaProperties$EntityMoveEffect$$Type = ((arg0: $Entity) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagniaProperties$EntityMoveEffect_ = $MagniaProperties$EntityMoveEffect$$Type;
}}
declare module "net.bunten.enderscape.criteria.MirrorTeleportCriterion$Conditions" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MirrorTeleportCriterion$Conditions extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($MirrorTeleportCriterion$Conditions)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, item: $Optional$$Type<($ItemPredicate$$Type)>, prior: $Optional$$Type<($LocationPredicate$$Type)>, latter: $Optional$$Type<($LocationPredicate$$Type)>, distance: $Optional$$Type<($DistancePredicate$$Type)>, differentDimensions: $Optional$$Type<(boolean)>)

public "distance"(): $Optional<($DistancePredicate)>
public "item"(): $Optional<($ItemPredicate)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $MinecraftServer$$Type, arg1: $ItemStack$$Type, arg2: $GlobalPos$$Type, arg3: $GlobalPos$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "prior"(): $Optional<($LocationPredicate)>
public "latter"(): $Optional<($LocationPredicate)>
public "differentDimensions"(): $Optional<(boolean)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MirrorTeleportCriterion$Conditions$$Type = ({"differentDimensions"?: (boolean)?, "latter"?: ($LocationPredicate$$Type)?, "distance"?: ($DistancePredicate$$Type)?, "prior"?: ($LocationPredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([differentDimensions?: (boolean)?, latter?: ($LocationPredicate$$Type)?, distance?: ($DistancePredicate$$Type)?, prior?: ($LocationPredicate$$Type)?, item?: ($ItemPredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MirrorTeleportCriterion$Conditions_ = $MirrorTeleportCriterion$Conditions$$Type;
}}
declare module "net.bunten.enderscape.entity.magnia.MagniaProperties" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MagniaProperties$EntityMoveEffect, $MagniaProperties$EntityMoveEffect$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties$EntityMoveEffect"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MagniaProperties extends $Record {

constructor(shouldAddVelocity: $Predicate$$Type<($Entity)>, attractStrength: $Function$$Type<($Entity), (float)>, repelStrength: $Function$$Type<($Entity), (float)>, isAllowed: $Predicate$$Type<($Entity)>, onMoved: $MagniaProperties$EntityMoveEffect$$Type, onStopMoving: $MagniaProperties$EntityMoveEffect$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "onMoved"(): $MagniaProperties$EntityMoveEffect
public "isAllowed"(): $Predicate<($Entity)>
public "onStopMoving"(): $MagniaProperties$EntityMoveEffect
public "repelStrength"(): $Function<($Entity), (float)>
public "shouldAddVelocity"(): $Predicate<($Entity)>
public "attractStrength"(): $Function<($Entity), (float)>
get "allowed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagniaProperties$$Type = ({"isAllowed"?: $Predicate$$Type<($Entity$$Type)>, "shouldAddVelocity"?: $Predicate$$Type<($Entity$$Type)>, "onStopMoving"?: $MagniaProperties$EntityMoveEffect$$Type, "repelStrength"?: $Function$$Type<($Entity$$Type), (float)>, "onMoved"?: $MagniaProperties$EntityMoveEffect$$Type, "attractStrength"?: $Function$$Type<($Entity$$Type), (float)>}) | ([isAllowed?: $Predicate$$Type<($Entity$$Type)>, shouldAddVelocity?: $Predicate$$Type<($Entity$$Type)>, onStopMoving?: $MagniaProperties$EntityMoveEffect$$Type, repelStrength?: $Function$$Type<($Entity$$Type), (float)>, onMoved?: $MagniaProperties$EntityMoveEffect$$Type, attractStrength?: $Function$$Type<($Entity$$Type), (float)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagniaProperties_ = $MagniaProperties$$Type;
}}
declare module "net.bunten.enderscape.item.MagniaAttractorItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$NebuliteToolItem, $NebuliteToolItem$$Type} from "net.bunten.enderscape.item.NebuliteToolItem"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$NebuliteToolContext, $NebuliteToolContext$$Type} from "net.bunten.enderscape.item.NebuliteToolContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $MagniaAttractorItem extends $NebuliteToolItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "is"(arg0: $ItemStack$$Type): boolean
public static "isEnabled"(arg0: $ItemStack$$Type): boolean
public static "tryUseFuel"(arg0: $NebuliteToolContext$$Type, arg1: integer): boolean
public static "setEnabled"(arg0: $ItemStack$$Type, arg1: boolean): void
public "displayHudWhen"(arg0: $NebuliteToolContext$$Type): boolean
public static "getEntityPullRange"(arg0: $ItemStack$$Type): integer
public static "getValidAttractor"(arg0: $Inventory$$Type): $ItemStack
public static "incrementEntitiesPulled"(arg0: $ItemStack$$Type, arg1: integer): void
public static "getEntitiesPulledToUseFuel"(arg0: $ItemStack$$Type): integer
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public static "getEntitiesPulled"(arg0: $ItemStack$$Type): integer
public static "shouldReduceFuel"(arg0: $ItemStack$$Type): boolean
public static "setEntitiesPulled"(arg0: $ItemStack$$Type, arg1: integer): void
public static "setEntitiesPulledToUseFuel"(arg0: $ItemStack$$Type, arg1: integer): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagniaAttractorItem$$Type = ($MagniaAttractorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagniaAttractorItem_ = $MagniaAttractorItem$$Type;
}}
declare module "net.bunten.enderscape.block.ChorusCakeRollBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChorusCakeRollBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChorusCakeRollBlock)>
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean
static readonly "BITES": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "codec"(): $MapCodec<($ChorusCakeRollBlock)>
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "getOutputSignal"(arg0: integer): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChorusCakeRollBlock$$Type = ($ChorusCakeRollBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChorusCakeRollBlock_ = $ChorusCakeRollBlock$$Type;
}}
declare module "net.bunten.enderscape.block.properties.Part" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $Part extends $Enum<($Part)> implements $StringRepresentable {
static readonly "TOP": $Part
static readonly "BOTTOM": $Part
static readonly "MIDDLE": $Part


public static "values"(): ($Part)[]
public static "valueOf"(arg0: StringJS): $Part
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
export type $Part$$Type = (("bottom") | ("middle") | ("top"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Part_ = $Part$$Type;
}}
declare module "net.bunten.enderscape.criteria.BounceOnDrifterCriterion$Conditions" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BounceOnDrifterCriterion$Conditions extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($BounceOnDrifterCriterion$Conditions)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, drifter: $Optional$$Type<($ContextAwarePredicate$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $LootContext$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "drifter"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BounceOnDrifterCriterion$Conditions$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "drifter"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, drifter?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BounceOnDrifterCriterion$Conditions_ = $BounceOnDrifterCriterion$Conditions$$Type;
}}
declare module "net.bunten.enderscape.block.BlinklightVines" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$DustColorTransitionOptions, $DustColorTransitionOptions$$Type} from "net.minecraft.core.particles.DustColorTransitionOptions"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlinklightVines {

 "isOpen"(arg0: $BlockState$$Type): boolean
 "close"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type): void
 "isClosed"(arg0: $BlockState$$Type): boolean
 "getStage"(arg0: $BlockState$$Type): integer
 "getStageProperty"(): $IntegerProperty
 "playBlinkEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
 "getStageDuration"(arg0: $BlockState$$Type): integer
get "stageProperty"(): $IntegerProperty
}

export namespace $BlinklightVines {
const SHAPE: $VoxelShape
const BLINKLIGHT_TO_REDSTONE: $DustColorTransitionOptions
const BODY_STAGE: $IntegerProperty
const HEAD_STAGE: $IntegerProperty
function getLuminance(arg0: $BlockState$$Type): integer
const probejs$$marker: never
}
export class $BlinklightVines$$Static implements $BlinklightVines {
static readonly "SHAPE": $VoxelShape
static readonly "BLINKLIGHT_TO_REDSTONE": $DustColorTransitionOptions
static readonly "BODY_STAGE": $IntegerProperty
static readonly "HEAD_STAGE": $IntegerProperty


 "isOpen"(arg0: $BlockState$$Type): boolean
 "close"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type): void
static "getLuminance"(arg0: $BlockState$$Type): integer
 "isClosed"(arg0: $BlockState$$Type): boolean
 "getStage"(arg0: $BlockState$$Type): integer
 "getStageProperty"(): $IntegerProperty
 "playBlinkEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
 "getStageDuration"(arg0: $BlockState$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlinklightVines$$Type = ($BlinklightVines);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlinklightVines_ = $BlinklightVines$$Type;
}}
declare module "net.bunten.enderscape.block.WispSproutsBlock" {
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$DirectionalPlantBlock, $DirectionalPlantBlock$$Type} from "net.bunten.enderscape.block.DirectionalPlantBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WispSproutsBlock extends $DirectionalPlantBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WispSproutsBlock)>
readonly "directionProperties": $DirectionProperties
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($WispSproutsBlock)>
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WispSproutsBlock$$Type = ($WispSproutsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WispSproutsBlock_ = $WispSproutsBlock$$Type;
}}
declare module "net.bunten.enderscape.feature.GrowthConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GrowthConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($GrowthConfig)>

constructor(arg0: $BlockState$$Type, arg1: $IntProvider$$Type)
constructor(state: $BlockState$$Type, base_height: $IntProvider$$Type, added_height: $IntProvider$$Type, added_height_chance: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "state"(): $BlockState
public "added_height"(): $IntProvider
public "base_height"(): $IntProvider
public "added_height_chance"(): float
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowthConfig$$Type = ({"added_height_chance"?: float, "added_height"?: $IntProvider$$Type, "base_height"?: $IntProvider$$Type, "state"?: $BlockState$$Type}) | ([added_height_chance?: float, added_height?: $IntProvider$$Type, base_height?: $IntProvider$$Type, state?: $BlockState$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowthConfig_ = $GrowthConfig$$Type;
}}
declare module "net.bunten.enderscape.feature.MagniaArchFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $MagniaArchFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor()

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagniaArchFeature$$Type = ($MagniaArchFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagniaArchFeature_ = $MagniaArchFeature$$Type;
}}
declare module "net.bunten.enderscape.registry.EnderscapeDensityFunctionTypes$DistanceFromCenterGradient" {
import {$DensityFunction$SimpleFunction, $DensityFunction$SimpleFunction$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$SimpleFunction"
import {$DensityFunction$Visitor, $DensityFunction$Visitor$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"
import {$DensityFunction$ContextProvider, $DensityFunction$ContextProvider$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import {$KeyDispatchDataCodec, $KeyDispatchDataCodec$$Type} from "net.minecraft.util.KeyDispatchDataCodec"
import {$DensityFunction$FunctionContext, $DensityFunction$FunctionContext$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$DensityFunction, $DensityFunction$$Type} from "net.minecraft.world.level.levelgen.DensityFunction"

export class $EnderscapeDensityFunctionTypes$DistanceFromCenterGradient extends $Record implements $DensityFunction$SimpleFunction {


public "mapAll"(arg0: $DensityFunction$Visitor$$Type): $DensityFunction
public "fillArray"(arg0: (double)[], arg1: $DensityFunction$ContextProvider$$Type): void
public "maxValue"(): double
public "square"(): $DensityFunction
public "abs"(): $DensityFunction
public "clamp"(arg0: double, arg1: double): $DensityFunction
public "compute"(arg0: $DensityFunction$FunctionContext$$Type): double
public "cube"(): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<($DensityFunction)>
public "halfNegative"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "minValue"(): double
public "quarterNegative"(): $DensityFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderscapeDensityFunctionTypes$DistanceFromCenterGradient$$Type = ({"toValue"?: double, "fromValue"?: double, "minDistance"?: integer, "maxDistance"?: integer}) | ([toValue?: double, fromValue?: double, minDistance?: integer, maxDistance?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderscapeDensityFunctionTypes$DistanceFromCenterGradient_ = $EnderscapeDensityFunctionTypes$DistanceFromCenterGradient$$Type;
}}
declare module "net.bunten.enderscape.block.AbstractVineBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
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
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractVineBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ATTACHED": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
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
static readonly "AGE": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractVineBlock$$Type = ($AbstractVineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractVineBlock_ = $AbstractVineBlock$$Type;
}}
declare module "net.bunten.enderscape.block.AlluringMagniaSproutBlock" {
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MagniaType, $MagniaType$$Type} from "net.bunten.enderscape.block.properties.MagniaType"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MagniaSproutBlock, $MagniaSproutBlock$$Type} from "net.bunten.enderscape.block.MagniaSproutBlock"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AlluringMagniaSproutBlock extends $MagniaSproutBlock {
readonly "directionProperties": $DirectionProperties
readonly "magniaType": $MagniaType
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($AlluringMagniaSproutBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "OVERHEATED": $BooleanProperty
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlluringMagniaSproutBlock$$Type = ($AlluringMagniaSproutBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlluringMagniaSproutBlock_ = $AlluringMagniaSproutBlock$$Type;
}}
declare module "net.bunten.enderscape.block.ChanterelleCapBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChanterelleCapBlock extends $Block {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "fallOn"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type, arg4: float): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChanterelleCapBlock$$Type = ($ChanterelleCapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChanterelleCapBlock_ = $ChanterelleCapBlock$$Type;
}}
declare module "net.bunten.enderscape.block.BulbFlowerBlock" {
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$DirectionalPlantBlock, $DirectionalPlantBlock$$Type} from "net.bunten.enderscape.block.DirectionalPlantBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BulbFlowerBlock extends $DirectionalPlantBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BulbFlowerBlock)>
readonly "directionProperties": $DirectionProperties
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($BulbFlowerBlock)>
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BulbFlowerBlock$$Type = ($BulbFlowerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BulbFlowerBlock_ = $BulbFlowerBlock$$Type;
}}
declare module "net.bunten.enderscape.feature.ScatteredOreConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"
import {$List, $List$$Type} from "java.util.List"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ScatteredOreConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($ScatteredOreConfig)>

constructor(targets: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>, tries: $IntProvider$$Type, scatter_increase: $IntProvider$$Type, size: $IntProvider$$Type)

public "tries"(): $IntProvider
public "size"(): $IntProvider
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "targets"(): $List<($OreConfiguration$TargetBlockState)>
public "scatter_increase"(): $IntProvider
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScatteredOreConfig$$Type = ({"size"?: $IntProvider$$Type, "scatter_increase"?: $IntProvider$$Type, "targets"?: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>, "tries"?: $IntProvider$$Type}) | ([size?: $IntProvider$$Type, scatter_increase?: $IntProvider$$Type, targets?: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>, tries?: $IntProvider$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScatteredOreConfig_ = $ScatteredOreConfig$$Type;
}}
declare module "net.bunten.enderscape.criteria.PullEntityCriterion" {
import {$PullEntityCriterion$Conditions, $PullEntityCriterion$Conditions$$Type} from "net.bunten.enderscape.criteria.PullEntityCriterion$Conditions"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PullEntityCriterion extends $SimpleCriterionTrigger<($PullEntityCriterion$Conditions)> {

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type): void
public "codec"(): $Codec<($PullEntityCriterion$Conditions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PullEntityCriterion$$Type = ($PullEntityCriterion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PullEntityCriterion_ = $PullEntityCriterion$$Type;
}}
declare module "net.bunten.enderscape.block.NebuliteOreBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DropExperienceBlock, $DropExperienceBlock$$Type} from "net.minecraft.world.level.block.DropExperienceBlock"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NebuliteOreBlock extends $DropExperienceBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DropExperienceBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "makeParticles"(arg0: integer, arg1: integer, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $RandomSource$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NebuliteOreBlock$$Type = ($NebuliteOreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NebuliteOreBlock_ = $NebuliteOreBlock$$Type;
}}
declare module "net.bunten.enderscape.block.properties.MagniaType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $MagniaType extends $Enum<($MagniaType)> implements $StringRepresentable {
static readonly "CODEC": $Codec<($MagniaType)>
static readonly "REPULSIVE": $MagniaType
static readonly "ALLURING": $MagniaType


public static "values"(): ($MagniaType)[]
public static "valueOf"(arg0: StringJS): $MagniaType
public "getHumSound"(): $SoundEvent
public "getMoveSound"(): $SoundEvent
public "getParticle"(): $ParticleOptions
public "getSerializedName"(): StringJS
public "getBlockedByTag"(): $TagKey<($Block)>
public "getPowerOnSound"(): $SoundEvent
public "getPowerOffSound"(): $SoundEvent
public "getOverheatSound"(): $SoundEvent
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "humSound"(): $SoundEvent
get "moveSound"(): $SoundEvent
get "particle"(): $ParticleOptions
get "serializedName"(): StringJS
get "blockedByTag"(): $TagKey<($Block)>
get "powerOnSound"(): $SoundEvent
get "powerOffSound"(): $SoundEvent
get "overheatSound"(): $SoundEvent
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagniaType$$Type = (("alluring") | ("repulsive"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagniaType_ = $MagniaType$$Type;
}}
declare module "net.bunten.enderscape.block.DriftJellyBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$HalfTransparentBlock, $HalfTransparentBlock$$Type} from "net.minecraft.world.level.block.HalfTransparentBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DriftJellyBlock extends $HalfTransparentBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($HalfTransparentBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "fallOn"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type, arg4: float): void
public "stepOn"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Entity$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DriftJellyBlock$$Type = ($DriftJellyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DriftJellyBlock_ = $DriftJellyBlock$$Type;
}}
declare module "net.bunten.enderscape.block.BlinklightVinesBodyBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$GrowingPlantBodyBlock, $GrowingPlantBodyBlock$$Type} from "net.minecraft.world.level.block.GrowingPlantBodyBlock"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlinklightVines, $BlinklightVines$$Type} from "net.bunten.enderscape.block.BlinklightVines"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlinklightVinesBodyBlock extends $GrowingPlantBodyBlock implements $BlinklightVines {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlinklightVinesBodyBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getStageProperty"(): $IntegerProperty
public "playBlinkEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getStageDuration"(arg0: $BlockState$$Type): integer
public "isOpen"(arg0: $BlockState$$Type): boolean
public "close"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type): void
public static "getLuminance"(arg0: $BlockState$$Type): integer
public "isClosed"(arg0: $BlockState$$Type): boolean
public "getStage"(arg0: $BlockState$$Type): integer
public "asHolder"(): $Holder<(any)>
get "stageProperty"(): $IntegerProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlinklightVinesBodyBlock$$Type = ($BlinklightVinesBodyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlinklightVinesBodyBlock_ = $BlinklightVinesBodyBlock$$Type;
}}
declare module "net.bunten.enderscape.block.CelestialOvergrowthBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractOvergrowthBlock, $AbstractOvergrowthBlock$$Type} from "net.bunten.enderscape.block.AbstractOvergrowthBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CelestialOvergrowthBlock extends $AbstractOvergrowthBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CelestialOvergrowthBlock)>
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
readonly "flattenSound": $SoundEvent
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestialOvergrowthBlock$$Type = ($CelestialOvergrowthBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestialOvergrowthBlock_ = $CelestialOvergrowthBlock$$Type;
}}
declare module "net.bunten.enderscape.item.MirrorContext" {
import {$NebuliteToolContext, $NebuliteToolContext$$Type} from "net.bunten.enderscape.item.NebuliteToolContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $MirrorContext extends $NebuliteToolContext {

constructor(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type)

public "dimension"(): $ResourceKey<($Level)>
public static "of"(arg0: $NebuliteToolContext$$Type): $MirrorContext
public "linkedPos"(): $BlockPos
public "linkedLevel"(): $ServerLevel
public "linkedDimension"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MirrorContext$$Type = ($MirrorContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MirrorContext_ = $MirrorContext$$Type;
}}
declare module "net.bunten.enderscape.feature.CeilingOreFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$CeilingOreConfig, $CeilingOreConfig$$Type} from "net.bunten.enderscape.feature.CeilingOreConfig"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $CeilingOreFeature extends $Feature<($CeilingOreConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($CeilingOreConfig$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($CeilingOreConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CeilingOreFeature$$Type = ($CeilingOreFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CeilingOreFeature_ = $CeilingOreFeature$$Type;
}}
declare module "net.bunten.enderscape.block.CelestialChanterelleBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DirectionalPlantBlock, $DirectionalPlantBlock$$Type} from "net.bunten.enderscape.block.DirectionalPlantBlock"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BonemealableBlock$Type, $BonemealableBlock$Type$$Type} from "net.minecraft.world.level.block.BonemealableBlock$Type"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BonemealableBlock, $BonemealableBlock$$Type} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CelestialChanterelleBlock extends $DirectionalPlantBlock implements $BonemealableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CelestialChanterelleBlock)>
readonly "directionProperties": $DirectionProperties
static readonly "STAGE": $IntegerProperty
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $ResourceKey$$Type<($ConfiguredFeature<(any), (any)>)>, arg1: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($CelestialChanterelleBlock)>
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getType"(): $BonemealableBlock$Type
public "getParticlePos"(arg0: $BlockPos$$Type): $BlockPos
public "asHolder"(): $Holder<(any)>
get "type"(): $BonemealableBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestialChanterelleBlock$$Type = ($CelestialChanterelleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestialChanterelleBlock_ = $CelestialChanterelleBlock$$Type;
}}
declare module "net.bunten.enderscape.feature.LargeMurublightChanterelleConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LargeMurublightChanterelleConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($LargeMurublightChanterelleConfig)>
static readonly "DEFAULT": $LargeMurublightChanterelleConfig

constructor(direction: $Direction$$Type, height: $IntProvider$$Type, cap_radius: $IntProvider$$Type, tries: integer)

public "direction"(): $Direction
public "tries"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "height"(): $IntProvider
public "cap_radius"(): $IntProvider
public static "defaultFacing"(arg0: $Direction$$Type): $LargeMurublightChanterelleConfig
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeMurublightChanterelleConfig$$Type = ({"height"?: $IntProvider$$Type, "cap_radius"?: $IntProvider$$Type, "direction"?: $Direction$$Type, "tries"?: integer}) | ([height?: $IntProvider$$Type, cap_radius?: $IntProvider$$Type, direction?: $Direction$$Type, tries?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeMurublightChanterelleConfig_ = $LargeMurublightChanterelleConfig$$Type;
}}
declare module "net.bunten.enderscape.block.BlinklampBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlinklampBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "LUMINANCE": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "getLuminance"(arg0: $BlockState$$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlinklampBlock$$Type = ($BlinklampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlinklampBlock_ = $BlinklampBlock$$Type;
}}
declare module "net.bunten.enderscape.feature.MagniaTowerConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$FloatProvider, $FloatProvider$$Type} from "net.minecraft.util.valueproviders.FloatProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MagniaTowerConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($MagniaTowerConfig)>

constructor(floor_replacement_radius: $FloatProvider$$Type, pillar_height: $IntProvider$$Type, sphere_radius: $IntProvider$$Type, ring_radius: $IntProvider$$Type, sprout_placement_chance: $FloatProvider$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "sphere_radius"(): $IntProvider
public "ring_radius"(): $IntProvider
public "pillar_height"(): $IntProvider
public "floor_replacement_radius"(): $FloatProvider
public "sprout_placement_chance"(): $FloatProvider
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagniaTowerConfig$$Type = ({"sprout_placement_chance"?: $FloatProvider$$Type, "floor_replacement_radius"?: $FloatProvider$$Type, "ring_radius"?: $IntProvider$$Type, "pillar_height"?: $IntProvider$$Type, "sphere_radius"?: $IntProvider$$Type}) | ([sprout_placement_chance?: $FloatProvider$$Type, floor_replacement_radius?: $FloatProvider$$Type, ring_radius?: $IntProvider$$Type, pillar_height?: $IntProvider$$Type, sphere_radius?: $IntProvider$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagniaTowerConfig_ = $MagniaTowerConfig$$Type;
}}
declare module "net.bunten.enderscape.block.BlinklightVinesHeadBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlinklightVines, $BlinklightVines$$Type} from "net.bunten.enderscape.block.BlinklightVines"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GrowingPlantHeadBlock, $GrowingPlantHeadBlock$$Type} from "net.minecraft.world.level.block.GrowingPlantHeadBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlinklightVinesHeadBlock extends $GrowingPlantHeadBlock implements $BlinklightVines {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlinklightVinesHeadBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
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
static readonly "AGE": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "codec"(): $MapCodec<($BlinklightVinesHeadBlock)>
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "isRandomlyTicking"(arg0: $BlockState$$Type): boolean
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getStageProperty"(): $IntegerProperty
public "playBlinkEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getStageDuration"(arg0: $BlockState$$Type): integer
public "isOpen"(arg0: $BlockState$$Type): boolean
public "close"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type): void
public static "getLuminance"(arg0: $BlockState$$Type): integer
public "isClosed"(arg0: $BlockState$$Type): boolean
public "getStage"(arg0: $BlockState$$Type): integer
public "asHolder"(): $Holder<(any)>
get "stageProperty"(): $IntegerProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlinklightVinesHeadBlock$$Type = ($BlinklightVinesHeadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlinklightVinesHeadBlock_ = $BlinklightVinesHeadBlock$$Type;
}}
declare module "net.bunten.enderscape.criteria.MirrorTeleportCriterion" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MirrorTeleportCriterion$Conditions, $MirrorTeleportCriterion$Conditions$$Type} from "net.bunten.enderscape.criteria.MirrorTeleportCriterion$Conditions"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $MirrorTeleportCriterion extends $SimpleCriterionTrigger<($MirrorTeleportCriterion$Conditions)> {

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type, arg2: $GlobalPos$$Type, arg3: $GlobalPos$$Type): void
public "codec"(): $Codec<($MirrorTeleportCriterion$Conditions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MirrorTeleportCriterion$$Type = ($MirrorTeleportCriterion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MirrorTeleportCriterion_ = $MirrorTeleportCriterion$$Type;
}}
declare module "net.bunten.enderscape.item.DriftLeggingsItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export class $DriftLeggingsItem extends $ArmorItem implements $Equipable {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getDefaultAttributeModifiers"(): $ItemAttributeModifiers
public static "get"(arg0: $ItemStack$$Type): $Equipable
public "getEquipSound"(): $Holder<($SoundEvent)>
public "getEquipmentSlot"(): $EquipmentSlot
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "defaultAttributeModifiers"(): $ItemAttributeModifiers
get "equipSound"(): $Holder<($SoundEvent)>
get "equipmentSlot"(): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DriftLeggingsItem$$Type = ($DriftLeggingsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DriftLeggingsItem_ = $DriftLeggingsItem$$Type;
}}
declare module "net.bunten.enderscape.feature.VeiledLeafPileConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$FloatProvider, $FloatProvider$$Type} from "net.minecraft.util.valueproviders.FloatProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $VeiledLeafPileConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($VeiledLeafPileConfig)>

constructor(radius: $FloatProvider$$Type, density: $FloatProvider$$Type, layers: $IntProvider$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "layers"(): $IntProvider
public "radius"(): $FloatProvider
public "density"(): $FloatProvider
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VeiledLeafPileConfig$$Type = ({"radius"?: $FloatProvider$$Type, "layers"?: $IntProvider$$Type, "density"?: $FloatProvider$$Type}) | ([radius?: $FloatProvider$$Type, layers?: $IntProvider$$Type, density?: $FloatProvider$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VeiledLeafPileConfig_ = $VeiledLeafPileConfig$$Type;
}}
declare module "net.bunten.enderscape.util.RGBA$Vec4Fetcher" {
import {$Vector4f, $Vector4f$$Type} from "org.joml.Vector4f"

export interface $RGBA$Vec4Fetcher {

 "fetch"(arg0: integer, arg1: integer, arg2: integer): $Vector4f

(arg0: integer, arg1: integer, arg2: integer): $Vector4f$$Type
}

export namespace $RGBA$Vec4Fetcher {
const probejs$$marker: never
}
export class $RGBA$Vec4Fetcher$$Static implements $RGBA$Vec4Fetcher {


 "fetch"(arg0: integer, arg1: integer, arg2: integer): $Vector4f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RGBA$Vec4Fetcher$$Type = ((arg0: integer, arg1: integer, arg2: integer) => $Vector4f$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RGBA$Vec4Fetcher_ = $RGBA$Vec4Fetcher$$Type;
}}
declare module "net.bunten.enderscape.criteria.BounceOnDrifterCriterion" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Drifter, $Drifter$$Type} from "net.bunten.enderscape.entity.drifter.Drifter"
import {$BounceOnDrifterCriterion$Conditions, $BounceOnDrifterCriterion$Conditions$$Type} from "net.bunten.enderscape.criteria.BounceOnDrifterCriterion$Conditions"

export class $BounceOnDrifterCriterion extends $SimpleCriterionTrigger<($BounceOnDrifterCriterion$Conditions)> {

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Drifter$$Type): void
public "codec"(): $Codec<($BounceOnDrifterCriterion$Conditions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BounceOnDrifterCriterion$$Type = ($BounceOnDrifterCriterion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BounceOnDrifterCriterion_ = $BounceOnDrifterCriterion$$Type;
}}
declare module "net.bunten.enderscape.entity.DashJumpUser" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $DashJumpUser {

}

export namespace $DashJumpUser {
function is(arg0: $Entity$$Type): boolean
function dashed(arg0: $Entity$$Type): boolean
function setDashed(arg0: $Entity$$Type, arg1: boolean): void
function dashTicks(arg0: $Entity$$Type): integer
function setDashTicks(arg0: $Entity$$Type, arg1: integer): void
const probejs$$marker: never
}
export class $DashJumpUser$$Static implements $DashJumpUser {


static "is"(arg0: $Entity$$Type): boolean
static "dashed"(arg0: $Entity$$Type): boolean
static "setDashed"(arg0: $Entity$$Type, arg1: boolean): void
static "dashTicks"(arg0: $Entity$$Type): integer
static "setDashTicks"(arg0: $Entity$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DashJumpUser$$Type = ($DashJumpUser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DashJumpUser_ = $DashJumpUser$$Type;
}}
declare module "net.bunten.enderscape.feature.VoidShaleFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$VoidShaleConfig, $VoidShaleConfig$$Type} from "net.bunten.enderscape.feature.VoidShaleConfig"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $VoidShaleFeature extends $Feature<($VoidShaleConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RADIUS": integer
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HEIGHT": integer
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($VoidShaleConfig$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($VoidShaleConfig$$Type)>): boolean
public static "isWithinMaxDepth"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: integer): boolean
public static "countValidBlocks"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
public static "passesExtraConditions"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidShaleFeature$$Type = ($VoidShaleFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidShaleFeature_ = $VoidShaleFeature$$Type;
}}
declare module "net.bunten.enderscape.block.properties.DirectionProperties" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $DirectionProperties {
static readonly "CODEC": $Codec<($DirectionProperties)>

constructor()

public "all"(): $DirectionProperties
public static "create"(): $DirectionProperties
public "up"(): $DirectionProperties
public "down"(): $DirectionProperties
public "vertical"(): $DirectionProperties
public "horizontal"(): $DirectionProperties
public "supports"(arg0: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionProperties$$Type = ($DirectionProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionProperties_ = $DirectionProperties$$Type;
}}
declare module "net.bunten.enderscape.entity.drifter.Drifter" {
import {$MagniaProperties, $MagniaProperties$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MoveControl, $MoveControl$$Type} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$Animal, $Animal$$Type} from "net.minecraft.world.entity.animal.Animal"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$WalkAnimationState, $WalkAnimationState$$Type} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AbstractDrifter, $AbstractDrifter$$Type} from "net.bunten.enderscape.entity.drifter.AbstractDrifter"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AgeableMob, $AgeableMob$$Type} from "net.minecraft.world.entity.AgeableMob"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$SpellData, $SpellData$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$AttributeSupplier$Builder, $AttributeSupplier$Builder$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $Drifter extends $AbstractDrifter {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "ars_Nouveau$motions": $Stack<(any)>
 "yHeadRot": float
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
 "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": StringJS
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
 "persistenceRequired": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": StringJS
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
static readonly "BABY_START_AGE": integer
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
 "castingSpell": $SpellData
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
 "entityJs$builder": any
static readonly "BODY_ARMOR_OFFSET": integer
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
 "hasUsedSingleAttack": boolean
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "yRot": float
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "targetSelector": $GoalSelector
 "drinkTime": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "xpReward": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
 "moveControl": $MoveControl
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
readonly "spells": $HashMap<(any), (any)>
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "target": $LivingEntity
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean

constructor(arg0: $EntityType$$Type<($Drifter$$Type)>, arg1: $Level$$Type)

public "aiStep"(): void
public "mobInteract"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $InteractionResult
public "setBaby"(arg0: boolean): void
public "getJumpSound"(): $SoundEvent
public "isDrippingJelly"(): boolean
public "setDrippingJelly"(arg0: boolean): void
public "getBreedOffspring"(arg0: $ServerLevel$$Type, arg1: $AgeableMob$$Type): $AgeableMob
public "spawnChildFromBreeding"(arg0: $ServerLevel$$Type, arg1: $Animal$$Type): void
public static "createAttributes"(): $AttributeSupplier$Builder
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "getBounceHitbox"(): $AABB
public static "bumblezone$getDATA_BABY_ID"(): $EntityDataAccessor<(boolean)>
public "self"(): $LivingEntity
/**
 * 
 * @deprecated
 */
public "getItemBySlot"(arg0: $EquipmentSlot$$Type): $ItemStack
public static "tickLeash"<E extends ($Entity) & ($Leashable)>(arg0: E): void
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
public "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "lithium$getCachedFeetBlockState"(): $BlockState
public static "is"(arg0: $Entity$$Type): boolean
public static "spawnedFromEndTrialSpawner"(arg0: $Entity$$Type): boolean
public static "setSpawnedFromEndTrialSpawner"(arg0: $Entity$$Type, arg1: boolean): void
public static "getMagniaProperties"(arg0: $Entity$$Type): $MagniaProperties
public static "canMagniaAffect"(arg0: $Entity$$Type): boolean
public static "getMagnetismFactor"(arg0: $Entity$$Type): float
public static "dashed"(arg0: $Entity$$Type): boolean
public static "setDashed"(arg0: $Entity$$Type, arg1: boolean): void
public static "dashTicks"(arg0: $Entity$$Type): integer
public static "setDashTicks"(arg0: $Entity$$Type, arg1: integer): void
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$resetDynamicLight"(): void
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
set "baby"(value: boolean)
get "jumpSound"(): $SoundEvent
get "drippingJelly"(): boolean
set "drippingJelly"(value: boolean)
get "bounceHitbox"(): $AABB
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Drifter$$Type = ($Drifter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Drifter_ = $Drifter$$Type;
}}
declare module "net.bunten.enderscape.block.VoidShaleBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VoidShaleBlock extends $Block {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "NATURAL": $BooleanProperty
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "STRESS": $IntegerProperty
static readonly "ITERATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "COOLDOWN": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "MAX_STRESS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "MAX_ITERATIONS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "stepOn"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Entity$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidShaleBlock$$Type = ($VoidShaleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidShaleBlock_ = $VoidShaleBlock$$Type;
}}
declare module "net.bunten.enderscape.block.CelestialGrowthBlock" {
import {$DirectionProperties, $DirectionProperties$$Type} from "net.bunten.enderscape.block.properties.DirectionProperties"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$AbstractGrowthBlock, $AbstractGrowthBlock$$Type} from "net.bunten.enderscape.block.AbstractGrowthBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$Part, $Part$$Type} from "net.bunten.enderscape.block.properties.Part"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CelestialGrowthBlock extends $AbstractGrowthBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CelestialGrowthBlock)>
readonly "directionProperties": $DirectionProperties
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
static readonly "GROWTH": $EnumProperty<($Part)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "canPlantOn"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestialGrowthBlock$$Type = ($CelestialGrowthBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestialGrowthBlock_ = $CelestialGrowthBlock$$Type;
}}
declare module "net.bunten.enderscape.mixin.NoiseGeneratorSettingsAccessor" {
import {$SurfaceRules$RuleSource, $SurfaceRules$RuleSource$$Type} from "net.minecraft.world.level.levelgen.SurfaceRules$RuleSource"

export interface $NoiseGeneratorSettingsAccessor {

 "setSurfaceRule"(arg0: $SurfaceRules$RuleSource$$Type): void

(arg0: $SurfaceRules$RuleSource): void
set "surfaceRule"(value: $SurfaceRules$RuleSource$$Type)
}

export namespace $NoiseGeneratorSettingsAccessor {
const probejs$$marker: never
}
export class $NoiseGeneratorSettingsAccessor$$Static implements $NoiseGeneratorSettingsAccessor {


 "setSurfaceRule"(arg0: $SurfaceRules$RuleSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoiseGeneratorSettingsAccessor$$Type = ((arg0: $SurfaceRules$RuleSource) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoiseGeneratorSettingsAccessor_ = $NoiseGeneratorSettingsAccessor$$Type;
}}
declare module "net.bunten.enderscape.item.NebuliteItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $NebuliteItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NebuliteItem$$Type = ($NebuliteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NebuliteItem_ = $NebuliteItem$$Type;
}}
declare module "net.bunten.enderscape.feature.ScatteredOreFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$ScatteredOreConfig, $ScatteredOreConfig$$Type} from "net.bunten.enderscape.feature.ScatteredOreConfig"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $ScatteredOreFeature extends $Feature<($ScatteredOreConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($ScatteredOreConfig$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($ScatteredOreConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScatteredOreFeature$$Type = ($ScatteredOreFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScatteredOreFeature_ = $ScatteredOreFeature$$Type;
}}
