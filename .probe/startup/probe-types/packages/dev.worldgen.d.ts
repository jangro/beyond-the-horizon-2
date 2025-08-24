declare module "dev.worldgen.lithostitched.worldgen.feature.SelectFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SelectConfig, $SelectConfig$$Type} from "dev.worldgen.lithostitched.worldgen.feature.config.SelectConfig"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
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

export class $SelectFeature extends $Feature<($SelectConfig)> {
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
static "FEATURE": $SelectFeature
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

public "place"(arg0: $FeaturePlaceContext$$Type<($SelectConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectFeature$$Type = ($SelectFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectFeature_ = $SelectFeature$$Type;
}}
declare module "dev.worldgen.lithostitched.mixin.common.PlacedFeatureAccessor" {
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $PlacedFeatureAccessor {

 "setFeature"(arg0: $Holder$$Type<($ConfiguredFeature<(any), (any)>)>): void

(arg0: $Holder<($ConfiguredFeature<(any), (any)>)>): void
set "feature"(value: $Holder$$Type<($ConfiguredFeature<(any), (any)>)>)
}

export namespace $PlacedFeatureAccessor {
const probejs$$marker: never
}
export class $PlacedFeatureAccessor$$Static implements $PlacedFeatureAccessor {


 "setFeature"(arg0: $Holder$$Type<($ConfiguredFeature<(any), (any)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacedFeatureAccessor$$Type = ((arg0: $Holder<($ConfiguredFeature<(any), (any)>)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacedFeatureAccessor_ = $PlacedFeatureAccessor$$Type;
}}
declare module "dev.worldgen.lithostitched.mixin.common.StructureTemplatePoolAccessor" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"
import {$ObjectArrayList, $ObjectArrayList$$Type} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"

export interface $StructureTemplatePoolAccessor {

 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
 "getVanillaTemplates"(): $ObjectArrayList<($StructurePoolElement)>
 "setRawTemplates"(arg0: $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>): void
 "setVanillaTemplates"(arg0: $ObjectArrayList$$Type<($StructurePoolElement$$Type)>): void
get "rawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
get "vanillaTemplates"(): $ObjectArrayList<($StructurePoolElement)>
set "rawTemplates"(value: $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>)
set "vanillaTemplates"(value: $ObjectArrayList$$Type<($StructurePoolElement$$Type)>)
}

export namespace $StructureTemplatePoolAccessor {
const probejs$$marker: never
}
export class $StructureTemplatePoolAccessor$$Static implements $StructureTemplatePoolAccessor {


 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
 "getVanillaTemplates"(): $ObjectArrayList<($StructurePoolElement)>
 "setRawTemplates"(arg0: $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>): void
 "setVanillaTemplates"(arg0: $ObjectArrayList$$Type<($StructurePoolElement$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplatePoolAccessor$$Type = ($StructureTemplatePoolAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplatePoolAccessor_ = $StructureTemplatePoolAccessor$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.OreFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
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
import {$OreConfig, $OreConfig$$Type} from "dev.worldgen.lithostitched.worldgen.feature.config.OreConfig"
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

export class $OreFeature extends $Feature<($OreConfig)> {
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
static readonly "FEATURE": $OreFeature
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

public "place"(arg0: $FeaturePlaceContext$$Type<($OreConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreFeature$$Type = ($OreFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreFeature_ = $OreFeature$$Type;
}}
declare module "dev.worldgen.lithostitched.mixin.common.SinglePoolElementAccessor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$StructureProcessorList, $StructureProcessorList$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$StructureTemplate, $StructureTemplate$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $SinglePoolElementAccessor {

 "getProcessors"(): $Holder<($StructureProcessorList)>
 "getTemplate"(): $Either<($ResourceLocation), ($StructureTemplate)>
 "setProcessors"(arg0: $Holder$$Type<($StructureProcessorList)>): void
get "processors"(): $Holder<($StructureProcessorList)>
get "template"(): $Either<($ResourceLocation), ($StructureTemplate)>
set "processors"(value: $Holder$$Type<($StructureProcessorList)>)
}

export namespace $SinglePoolElementAccessor {
const probejs$$marker: never
}
export class $SinglePoolElementAccessor$$Static implements $SinglePoolElementAccessor {


 "getProcessors"(): $Holder<($StructureProcessorList)>
 "getTemplate"(): $Either<($ResourceLocation), ($StructureTemplate)>
 "setProcessors"(arg0: $Holder$$Type<($StructureProcessorList)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SinglePoolElementAccessor$$Type = ($SinglePoolElementAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SinglePoolElementAccessor_ = $SinglePoolElementAccessor$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.VinesFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
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
import {$VinesConfig, $VinesConfig$$Type} from "dev.worldgen.lithostitched.worldgen.feature.config.VinesConfig"
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

export class $VinesFeature extends $Feature<($VinesConfig)> {
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
static readonly "FEATURE": $VinesFeature
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

public "place"(arg0: $FeaturePlaceContext$$Type<($VinesConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VinesFeature$$Type = ($VinesFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VinesFeature_ = $VinesFeature$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.placementcondition.PlacementCondition" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$PlacementCondition$Context, $PlacementCondition$Context$$Type} from "dev.worldgen.lithostitched.worldgen.placementcondition.PlacementCondition$Context"
import {$PlacementContext, $PlacementContext$$Type} from "net.minecraft.world.level.levelgen.placement.PlacementContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $PlacementCondition {

 "test"(arg0: $PlacementCondition$Context$$Type, arg1: $BlockPos$$Type): boolean
 "test"(arg0: $PlacementContext$$Type, arg1: $BlockPos$$Type): boolean
 "test"(arg0: $Structure$GenerationContext$$Type, arg1: $BlockPos$$Type): boolean
 "codec"(): $MapCodec<($PlacementCondition)>
}

export namespace $PlacementCondition {
const CODEC: $Codec<($PlacementCondition)>
const BASE_CODEC: $Codec<($PlacementCondition)>
const probejs$$marker: never
}
export class $PlacementCondition$$Static implements $PlacementCondition {
static readonly "CODEC": $Codec<($PlacementCondition)>
static readonly "BASE_CODEC": $Codec<($PlacementCondition)>


 "test"(arg0: $PlacementCondition$Context$$Type, arg1: $BlockPos$$Type): boolean
 "test"(arg0: $PlacementContext$$Type, arg1: $BlockPos$$Type): boolean
 "test"(arg0: $Structure$GenerationContext$$Type, arg1: $BlockPos$$Type): boolean
 "codec"(): $MapCodec<($PlacementCondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementCondition$$Type = ($PlacementCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementCondition_ = $PlacementCondition$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.config.WeightedSelectorConfig" {
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$SimpleWeightedRandomList, $SimpleWeightedRandomList$$Type} from "net.minecraft.util.random.SimpleWeightedRandomList"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $WeightedSelectorConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($WeightedSelectorConfig)>

constructor(features: $SimpleWeightedRandomList$$Type<($Holder$$Type<($PlacedFeature$$Type)>)>)

public "features"(): $SimpleWeightedRandomList<($Holder<($PlacedFeature)>)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedSelectorConfig$$Type = ({"features"?: $SimpleWeightedRandomList$$Type<($Holder$$Type<($PlacedFeature$$Type)>)>}) | ([features?: $SimpleWeightedRandomList$$Type<($Holder$$Type<($PlacedFeature$$Type)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedSelectorConfig_ = $WeightedSelectorConfig$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.structure.AlternateJigsawConfig" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$List, $List$$Type} from "java.util.List"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$DimensionPadding, $DimensionPadding$$Type} from "net.minecraft.world.level.levelgen.structure.pools.DimensionPadding"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$PoolAliasBinding, $PoolAliasBinding$$Type} from "net.minecraft.world.level.levelgen.structure.pools.alias.PoolAliasBinding"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AlternateJigsawConfig extends $Record {
static readonly "CODEC": $MapCodec<($AlternateJigsawConfig)>

constructor(startPool: $Holder$$Type<($StructureTemplatePool)>, startJigsawName: $Optional$$Type<($ResourceLocation$$Type)>, size: $IntProvider$$Type, startHeight: $HeightProvider$$Type, useExpansionHack: boolean, projectStartToHeightmap: $Optional$$Type<($Heightmap$Types$$Type)>, maxDistanceFromCenter: integer, poolAliases: $List$$Type<($PoolAliasBinding$$Type)>, dimensionPadding: $DimensionPadding$$Type, liquidSettings: $LiquidSettings$$Type)

public "size"(): $IntProvider
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "projectStartToHeightmap"(): $Optional<($Heightmap$Types)>
public "startJigsawName"(): $Optional<($ResourceLocation)>
public "useExpansionHack"(): boolean
public "maxDistanceFromCenter"(): integer
public "dimensionPadding"(): $DimensionPadding
public "startPool"(): $Holder<($StructureTemplatePool)>
public "startHeight"(): $HeightProvider
public "poolAliases"(): $List<($PoolAliasBinding)>
public "setPoolAliases"(arg0: $List$$Type<($PoolAliasBinding$$Type)>, arg1: boolean): $AlternateJigsawConfig
public "liquidSettings"(): $LiquidSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlternateJigsawConfig$$Type = ({"size"?: $IntProvider$$Type, "dimensionPadding"?: $DimensionPadding$$Type, "useExpansionHack"?: boolean, "projectStartToHeightmap"?: ($Heightmap$Types$$Type)?, "startPool"?: $Holder$$Type<($StructureTemplatePool)>, "maxDistanceFromCenter"?: integer, "startHeight"?: $HeightProvider$$Type, "poolAliases"?: $List$$Type<($PoolAliasBinding$$Type)>, "liquidSettings"?: $LiquidSettings$$Type, "startJigsawName"?: ($ResourceLocation$$Type)?}) | ([size?: $IntProvider$$Type, dimensionPadding?: $DimensionPadding$$Type, useExpansionHack?: boolean, projectStartToHeightmap?: ($Heightmap$Types$$Type)?, startPool?: $Holder$$Type<($StructureTemplatePool)>, maxDistanceFromCenter?: integer, startHeight?: $HeightProvider$$Type, poolAliases?: $List$$Type<($PoolAliasBinding$$Type)>, liquidSettings?: $LiquidSettings$$Type, startJigsawName?: ($ResourceLocation$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlternateJigsawConfig_ = $AlternateJigsawConfig$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.WeightedSelectorFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$WeightedSelectorConfig, $WeightedSelectorConfig$$Type} from "dev.worldgen.lithostitched.worldgen.feature.config.WeightedSelectorConfig"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
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

export class $WeightedSelectorFeature extends $Feature<($WeightedSelectorConfig)> {
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
static readonly "FEATURE": $WeightedSelectorFeature
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

public "place"(arg0: $FeaturePlaceContext$$Type<($WeightedSelectorConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedSelectorFeature$$Type = ($WeightedSelectorFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedSelectorFeature_ = $WeightedSelectorFeature$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.config.OreConfig$Target" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BlockPredicate, $BlockPredicate$$Type} from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"
import {$BlockStateProvider, $BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $OreConfig$Target extends $Record {
static readonly "CODEC": $Codec<($OreConfig$Target)>

constructor(predicate: $BlockPredicate$$Type, stateProvider: $BlockStateProvider$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "predicate"(): $BlockPredicate
public "stateProvider"(): $BlockStateProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreConfig$Target$$Type = ({"predicate"?: $BlockPredicate$$Type, "stateProvider"?: $BlockStateProvider$$Type}) | ([predicate?: $BlockPredicate$$Type, stateProvider?: $BlockStateProvider$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreConfig$Target_ = $OreConfig$Target$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.modifier.SetStructureSpawnConditionModifier" {
import {$List, $List$$Type} from "java.util.List"
import {$Modifier, $Modifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$PlacementCondition, $PlacementCondition$$Type} from "dev.worldgen.lithostitched.worldgen.placementcondition.PlacementCondition"
import {$PriorityBasedModifier, $PriorityBasedModifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.PriorityBasedModifier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Modifier$ModifierPhase, $Modifier$ModifierPhase$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier$ModifierPhase"

export class $SetStructureSpawnConditionModifier extends $Record implements $Modifier {
static readonly "CODEC": $MapCodec<($SetStructureSpawnConditionModifier)>

constructor(structures: $HolderSet$$Type<($Structure)>, spawnCondition: $PlacementCondition$$Type, append: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "append"(): boolean
public "hashCode"(): integer
public "structures"(): $HolderSet<($Structure)>
public "getPhase"(): $Modifier$ModifierPhase
public "applyModifier"(arg0: $RegistryAccess$$Type): void
public "applyModifier"(): void
public "codec"(): $MapCodec<($Modifier)>
public "spawnCondition"(): $PlacementCondition
public "internal$modifiesFabricFeatures"(): boolean
public static "sortByPriority"(arg0: $List$$Type<($Holder$Reference$$Type<($PriorityBasedModifier$$Type)>)>): $List<($Holder$Reference<($PriorityBasedModifier)>)>
public static "applyModifiers"(arg0: $MinecraftServer$$Type): void
get "phase"(): $Modifier$ModifierPhase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetStructureSpawnConditionModifier$$Type = ({"structures"?: $HolderSet$$Type<($Structure)>, "spawnCondition"?: $PlacementCondition$$Type, "append"?: boolean}) | ([structures?: $HolderSet$$Type<($Structure)>, spawnCondition?: $PlacementCondition$$Type, append?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetStructureSpawnConditionModifier_ = $SetStructureSpawnConditionModifier$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.WellFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$WellConfig, $WellConfig$$Type} from "dev.worldgen.lithostitched.worldgen.feature.config.WellConfig"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
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

export class $WellFeature extends $Feature<($WellConfig)> {
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
static readonly "FEATURE": $WellFeature
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

public "place"(arg0: $FeaturePlaceContext$$Type<($WellConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WellFeature$$Type = ($WellFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WellFeature_ = $WellFeature$$Type;
}}
declare module "dev.worldgen.tectonic.worldgen.ConfigConstant" {
import {$DensityFunction$Visitor, $DensityFunction$Visitor$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"
import {$DensityFunction$ContextProvider, $DensityFunction$ContextProvider$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import {$KeyDispatchDataCodec, $KeyDispatchDataCodec$$Type} from "net.minecraft.util.KeyDispatchDataCodec"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DensityFunction$FunctionContext, $DensityFunction$FunctionContext$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$DensityFunction, $DensityFunction$$Type} from "net.minecraft.world.level.levelgen.DensityFunction"

export class $ConfigConstant extends $Record implements $DensityFunction {
static "CODEC_HOLDER": $KeyDispatchDataCodec<($ConfigConstant)>
static "DATA_CODEC": $MapCodec<($ConfigConstant)>

constructor(arg0: string)
constructor(value: double)

public "value"(): double
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compute"(arg0: $DensityFunction$FunctionContext$$Type): double
public "maxValue"(): double
public "fillArray"(arg0: (double)[], arg1: $DensityFunction$ContextProvider$$Type): void
public "minValue"(): double
public "codec"(): $KeyDispatchDataCodec<($DensityFunction)>
public "mapAll"(arg0: $DensityFunction$Visitor$$Type): $DensityFunction
public "abs"(): $DensityFunction
public "clamp"(arg0: double, arg1: double): $DensityFunction
public "square"(): $DensityFunction
public "halfNegative"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "cube"(): $DensityFunction
public "quarterNegative"(): $DensityFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigConstant$$Type = ({"value"?: double}) | ([value?: double]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigConstant_ = $ConfigConstant$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.modifier.AddFeaturesModifier" {
import {$GenerationStep$Decoration, $GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$List, $List$$Type} from "java.util.List"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$Modifier, $Modifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$PriorityBasedModifier, $PriorityBasedModifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.PriorityBasedModifier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$AbstractBiomeModifier, $AbstractBiomeModifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.AbstractBiomeModifier"

export class $AddFeaturesModifier extends $AbstractBiomeModifier {
static readonly "CODEC": $MapCodec<($AddFeaturesModifier)>

constructor(arg0: $HolderSet$$Type<($Biome)>, arg1: $HolderSet$$Type<($PlacedFeature)>, arg2: $GenerationStep$Decoration$$Type)

public "features"(): $HolderSet<($PlacedFeature)>
public "step"(): $GenerationStep$Decoration
public "codec"(): $MapCodec<($Modifier)>
public "biomes"(): $HolderSet<($Biome)>
public static "sortByPriority"(arg0: $List$$Type<($Holder$Reference$$Type<($PriorityBasedModifier$$Type)>)>): $List<($Holder$Reference<($PriorityBasedModifier)>)>
public static "applyModifiers"(arg0: $MinecraftServer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddFeaturesModifier$$Type = ($AddFeaturesModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddFeaturesModifier_ = $AddFeaturesModifier$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.config.StructureTemplateConfig" {
import {$StructureProcessorList, $StructureProcessorList$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $StructureTemplateConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($StructureTemplateConfig)>

constructor(template: $ResourceLocation$$Type, processors: $Holder$$Type<($StructureProcessorList)>, rotation: $Optional$$Type<($Rotation$$Type)>, liquidSettings: $LiquidSettings$$Type, startJigsawName: $Optional$$Type<($ResourceLocation$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "rotation"(): $Optional<($Rotation)>
public "processors"(): $Holder<($StructureProcessorList)>
public "template"(): $ResourceLocation
public "startJigsawName"(): $Optional<($ResourceLocation)>
public "liquidSettings"(): $LiquidSettings
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateConfig$$Type = ({"rotation"?: ($Rotation$$Type)?, "liquidSettings"?: $LiquidSettings$$Type, "template"?: $ResourceLocation$$Type, "startJigsawName"?: ($ResourceLocation$$Type)?, "processors"?: $Holder$$Type<($StructureProcessorList)>}) | ([rotation?: ($Rotation$$Type)?, liquidSettings?: $LiquidSettings$$Type, template?: $ResourceLocation$$Type, startJigsawName?: ($ResourceLocation$$Type)?, processors?: $Holder$$Type<($StructureProcessorList)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateConfig_ = $StructureTemplateConfig$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.config.OreConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$List, $List$$Type} from "java.util.List"
import {$OreConfig$Target, $OreConfig$Target$$Type} from "dev.worldgen.lithostitched.worldgen.feature.config.OreConfig$Target"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $OreConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($OreConfig)>

constructor(size: integer, targets: $List$$Type<($OreConfig$Target$$Type)>)

public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "targets"(): $List<($OreConfig$Target)>
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreConfig$$Type = ({"size"?: integer, "targets"?: $List$$Type<($OreConfig$Target$$Type)>}) | ([size?: integer, targets?: $List$$Type<($OreConfig$Target$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OreConfig_ = $OreConfig$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.modifier.internal.CompileRawTemplatesModifier" {
import {$List, $List$$Type} from "java.util.List"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$Modifier, $Modifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier"
import {$PriorityBasedModifier, $PriorityBasedModifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.PriorityBasedModifier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Modifier$ModifierPhase, $Modifier$ModifierPhase$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier$ModifierPhase"

export class $CompileRawTemplatesModifier extends $Record implements $Modifier {
static readonly "CODEC": $MapCodec<($CompileRawTemplatesModifier)>

constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getPhase"(): $Modifier$ModifierPhase
public "applyModifier"(arg0: $RegistryAccess$$Type): void
public "applyModifier"(): void
public "codec"(): $MapCodec<($Modifier)>
public "internal$modifiesFabricFeatures"(): boolean
public static "sortByPriority"(arg0: $List$$Type<($Holder$Reference$$Type<($PriorityBasedModifier$$Type)>)>): $List<($Holder$Reference<($PriorityBasedModifier)>)>
public static "applyModifiers"(arg0: $MinecraftServer$$Type): void
get "phase"(): $Modifier$ModifierPhase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompileRawTemplatesModifier$$Type = ({}) | ([]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompileRawTemplatesModifier_ = $CompileRawTemplatesModifier$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.DungeonFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$DungeonConfig, $DungeonConfig$$Type} from "dev.worldgen.lithostitched.worldgen.feature.config.DungeonConfig"
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

export class $DungeonFeature extends $Feature<($DungeonConfig)> {
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
static readonly "FEATURE": $DungeonFeature
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

public "place"(arg0: $FeaturePlaceContext$$Type<($DungeonConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DungeonFeature$$Type = ($DungeonFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DungeonFeature_ = $DungeonFeature$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.LargeDripstoneFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$LargeDripstoneConfig, $LargeDripstoneConfig$$Type} from "dev.worldgen.lithostitched.worldgen.feature.config.LargeDripstoneConfig"
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

export class $LargeDripstoneFeature extends $Feature<($LargeDripstoneConfig)> {
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
static "FEATURE": $LargeDripstoneFeature
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

public "place"(arg0: $FeaturePlaceContext$$Type<($LargeDripstoneConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeDripstoneFeature$$Type = ($LargeDripstoneFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeDripstoneFeature_ = $LargeDripstoneFeature$$Type;
}}
declare module "dev.worldgen.lithostitched.mixin.common.StructureProcessorListAccessor" {
import {$StructureProcessor, $StructureProcessor$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessor"
import {$List, $List$$Type} from "java.util.List"

export interface $StructureProcessorListAccessor {

 "setProcessors"(arg0: $List$$Type<($StructureProcessor$$Type)>): void

(arg0: $List<($StructureProcessor)>): void
set "processors"(value: $List$$Type<($StructureProcessor$$Type)>)
}

export namespace $StructureProcessorListAccessor {
const probejs$$marker: never
}
export class $StructureProcessorListAccessor$$Static implements $StructureProcessorListAccessor {


 "setProcessors"(arg0: $List$$Type<($StructureProcessor$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureProcessorListAccessor$$Type = ((arg0: $List<($StructureProcessor)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureProcessorListAccessor_ = $StructureProcessorListAccessor$$Type;
}}
declare module "dev.worldgen.lithostitched.mixin.common.ChunkGeneratorAccessor" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$List, $List$$Type} from "java.util.List"
import {$BiomeGenerationSettings, $BiomeGenerationSettings$$Type} from "net.minecraft.world.level.biome.BiomeGenerationSettings"
import {$FeatureSorter$StepFeatureData, $FeatureSorter$StepFeatureData$$Type} from "net.minecraft.world.level.biome.FeatureSorter$StepFeatureData"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BiomeSource, $BiomeSource$$Type} from "net.minecraft.world.level.biome.BiomeSource"

export interface $ChunkGeneratorAccessor {

 "getBiomeSource"(): $BiomeSource
 "getGetter"(): $Function<($Holder<($Biome)>), ($BiomeGenerationSettings)>
 "setFeaturesPerStep"(arg0: $Supplier$$Type<($List$$Type<($FeatureSorter$StepFeatureData$$Type)>)>): void
get "biomeSource"(): $BiomeSource
get "getter"(): $Function<($Holder<($Biome)>), ($BiomeGenerationSettings)>
set "featuresPerStep"(value: $Supplier$$Type<($List$$Type<($FeatureSorter$StepFeatureData$$Type)>)>)
}

export namespace $ChunkGeneratorAccessor {
const probejs$$marker: never
}
export class $ChunkGeneratorAccessor$$Static implements $ChunkGeneratorAccessor {


 "getBiomeSource"(): $BiomeSource
 "getGetter"(): $Function<($Holder<($Biome)>), ($BiomeGenerationSettings)>
 "setFeaturesPerStep"(arg0: $Supplier$$Type<($List$$Type<($FeatureSorter$StepFeatureData$$Type)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkGeneratorAccessor$$Type = ($ChunkGeneratorAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkGeneratorAccessor_ = $ChunkGeneratorAccessor$$Type;
}}
declare module "dev.worldgen.lithostitched.mixin.common.HolderReferenceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HolderReferenceAccessor<T> {

 "setValue"(arg0: T): void

(arg0: T): void
set "value"(value: T)
}

export namespace $HolderReferenceAccessor {
const probejs$$marker: never
}
export class $HolderReferenceAccessor$$Static<T> implements $HolderReferenceAccessor {


 "setValue"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderReferenceAccessor$$Type<T> = ((arg0: T) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HolderReferenceAccessor_<T> = $HolderReferenceAccessor$$Type<(T)>;
}}
declare module "dev.worldgen.lithostitched.worldgen.modifier.AddTemplatePoolElementsModifier" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$Modifier, $Modifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$PriorityBasedModifier, $PriorityBasedModifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.PriorityBasedModifier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Modifier$ModifierPhase, $Modifier$ModifierPhase$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier$ModifierPhase"

export class $AddTemplatePoolElementsModifier extends $Record implements $Modifier {
static readonly "CODEC": $MapCodec<($AddTemplatePoolElementsModifier)>

constructor(templatePools: $HolderSet$$Type<($StructureTemplatePool)>, elements: $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "elements"(): $List<($Pair<($StructurePoolElement), (integer)>)>
public "getPhase"(): $Modifier$ModifierPhase
public "applyModifier"(): void
public "codec"(): $MapCodec<($Modifier)>
public "templatePools"(): $HolderSet<($StructureTemplatePool)>
public "internal$modifiesFabricFeatures"(): boolean
public "applyModifier"(arg0: $RegistryAccess$$Type): void
public static "sortByPriority"(arg0: $List$$Type<($Holder$Reference$$Type<($PriorityBasedModifier$$Type)>)>): $List<($Holder$Reference<($PriorityBasedModifier)>)>
public static "applyModifiers"(arg0: $MinecraftServer$$Type): void
get "phase"(): $Modifier$ModifierPhase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddTemplatePoolElementsModifier$$Type = ({"elements"?: $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>, "templatePools"?: $HolderSet$$Type<($StructureTemplatePool)>}) | ([elements?: $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>, templatePools?: $HolderSet$$Type<($StructureTemplatePool)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddTemplatePoolElementsModifier_ = $AddTemplatePoolElementsModifier$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.config.CompositeConfig$Type" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $CompositeConfig$Type extends $Enum<($CompositeConfig$Type)> implements $StringRepresentable {
static readonly "NEVER_CANCEL": $CompositeConfig$Type
static readonly "CODEC": $Codec<($CompositeConfig$Type)>
static readonly "CANCEL_ON_FAILURE": $CompositeConfig$Type
static readonly "CANCEL_ON_SUCCESS": $CompositeConfig$Type


public static "values"(): ($CompositeConfig$Type)[]
public static "valueOf"(arg0: string): $CompositeConfig$Type
public "getSerializedName"(): string
public "shouldContinue"(arg0: boolean): boolean
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
export type $CompositeConfig$Type$$Type = (("never_cancel") | ("cancel_on_failure") | ("cancel_on_success"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeConfig$Type_ = $CompositeConfig$Type$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.modifier.SetPoolAliasesModifier" {
import {$List, $List$$Type} from "java.util.List"
import {$Modifier, $Modifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$PoolAliasBinding, $PoolAliasBinding$$Type} from "net.minecraft.world.level.levelgen.structure.pools.alias.PoolAliasBinding"
import {$PriorityBasedModifier, $PriorityBasedModifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.PriorityBasedModifier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Modifier$ModifierPhase, $Modifier$ModifierPhase$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier$ModifierPhase"

export class $SetPoolAliasesModifier extends $Record implements $Modifier {
static readonly "CODEC": $MapCodec<($SetPoolAliasesModifier)>

constructor(structures: $HolderSet$$Type<($Structure)>, poolAliases: $List$$Type<($PoolAliasBinding$$Type)>, append: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "append"(): boolean
public "hashCode"(): integer
public "structures"(): $HolderSet<($Structure)>
public "getPhase"(): $Modifier$ModifierPhase
public "applyModifier"(): void
public "codec"(): $MapCodec<($Modifier)>
public "poolAliases"(): $List<($PoolAliasBinding)>
public "internal$modifiesFabricFeatures"(): boolean
public "applyModifier"(arg0: $RegistryAccess$$Type): void
public static "sortByPriority"(arg0: $List$$Type<($Holder$Reference$$Type<($PriorityBasedModifier$$Type)>)>): $List<($Holder$Reference<($PriorityBasedModifier)>)>
public static "applyModifiers"(arg0: $MinecraftServer$$Type): void
get "phase"(): $Modifier$ModifierPhase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetPoolAliasesModifier$$Type = ({"structures"?: $HolderSet$$Type<($Structure)>, "append"?: boolean, "poolAliases"?: $List$$Type<($PoolAliasBinding$$Type)>}) | ([structures?: $HolderSet$$Type<($Structure)>, append?: boolean, poolAliases?: $List$$Type<($PoolAliasBinding$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetPoolAliasesModifier_ = $SetPoolAliasesModifier$$Type;
}}
declare module "dev.worldgen.tectonic.worldgen.ConfigNoise" {
import {$DensityFunction$Visitor, $DensityFunction$Visitor$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$Visitor"
import {$DensityFunction$NoiseHolder, $DensityFunction$NoiseHolder$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$NoiseHolder"
import {$DensityFunction$ContextProvider, $DensityFunction$ContextProvider$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$ContextProvider"
import {$KeyDispatchDataCodec, $KeyDispatchDataCodec$$Type} from "net.minecraft.util.KeyDispatchDataCodec"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DensityFunction$FunctionContext, $DensityFunction$FunctionContext$$Type} from "net.minecraft.world.level.levelgen.DensityFunction$FunctionContext"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$DensityFunction, $DensityFunction$$Type} from "net.minecraft.world.level.levelgen.DensityFunction"

export class $ConfigNoise extends $Record implements $DensityFunction {
static "CODEC_HOLDER": $KeyDispatchDataCodec<($ConfigNoise)>
static "DATA_CODEC": $MapCodec<($ConfigNoise)>

constructor(arg0: string, arg1: $DensityFunction$NoiseHolder$$Type, arg2: $DensityFunction$$Type, arg3: $DensityFunction$$Type)
constructor(noise: $DensityFunction$NoiseHolder$$Type, shiftX: $DensityFunction$$Type, shiftZ: $DensityFunction$$Type, scale: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(): double
public "compute"(arg0: $DensityFunction$FunctionContext$$Type): double
public "maxValue"(): double
public "fillArray"(arg0: (double)[], arg1: $DensityFunction$ContextProvider$$Type): void
public "minValue"(): double
public "shiftX"(): $DensityFunction
public "shiftZ"(): $DensityFunction
public "codec"(): $KeyDispatchDataCodec<($DensityFunction)>
public "noise"(): $DensityFunction$NoiseHolder
public "mapAll"(arg0: $DensityFunction$Visitor$$Type): $DensityFunction
public "abs"(): $DensityFunction
public "clamp"(arg0: double, arg1: double): $DensityFunction
public "square"(): $DensityFunction
public "halfNegative"(): $DensityFunction
public "squeeze"(): $DensityFunction
public "cube"(): $DensityFunction
public "quarterNegative"(): $DensityFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigNoise$$Type = ({"shiftX"?: $DensityFunction$$Type, "shiftZ"?: $DensityFunction$$Type, "noise"?: $DensityFunction$NoiseHolder$$Type, "scale"?: double}) | ([shiftX?: $DensityFunction$$Type, shiftZ?: $DensityFunction$$Type, noise?: $DensityFunction$NoiseHolder$$Type, scale?: double]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigNoise_ = $ConfigNoise$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.modifier.Modifier$ModifierPhase" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $Modifier$ModifierPhase extends $Enum<($Modifier$ModifierPhase)> implements $StringRepresentable {
static readonly "ADD": $Modifier$ModifierPhase
static readonly "BEFORE_ALL": $Modifier$ModifierPhase
static readonly "MODIFY": $Modifier$ModifierPhase
static readonly "AFTER_ALL": $Modifier$ModifierPhase
static readonly "REMOVE": $Modifier$ModifierPhase
static readonly "NONE": $Modifier$ModifierPhase
static readonly "REPLACE": $Modifier$ModifierPhase


public static "values"(): ($Modifier$ModifierPhase)[]
public static "valueOf"(arg0: string): $Modifier$ModifierPhase
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
export type $Modifier$ModifierPhase$$Type = (("none") | ("before_all") | ("replace") | ("add") | ("remove") | ("modify") | ("after_all"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Modifier$ModifierPhase_ = $Modifier$ModifierPhase$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.modifier.Modifier" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$PriorityBasedModifier, $PriorityBasedModifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.PriorityBasedModifier"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Modifier$ModifierPhase, $Modifier$ModifierPhase$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier$ModifierPhase"

export interface $Modifier {

 "internal$modifiesFabricFeatures"(): boolean
 "getPhase"(): $Modifier$ModifierPhase
 "applyModifier"(): void
 "applyModifier"(arg0: $RegistryAccess$$Type): void
 "codec"(): $MapCodec<($Modifier)>
get "phase"(): $Modifier$ModifierPhase
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.LithostitchedWorldgenModifier
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.LithostitchedWorldgenModifierTag
}

export namespace $Modifier {
const CODEC: $Codec<($Modifier)>
function sortByPriority(arg0: $List$$Type<($Holder$Reference$$Type<($PriorityBasedModifier$$Type)>)>): $List<($Holder$Reference<($PriorityBasedModifier)>)>
function applyModifiers(arg0: $MinecraftServer$$Type): void
const probejs$$marker: never
}
export class $Modifier$$Static implements $Modifier {
static readonly "CODEC": $Codec<($Modifier)>


 "internal$modifiesFabricFeatures"(): boolean
 "getPhase"(): $Modifier$ModifierPhase
 "applyModifier"(): void
 "applyModifier"(arg0: $RegistryAccess$$Type): void
 "codec"(): $MapCodec<($Modifier)>
static "sortByPriority"(arg0: $List$$Type<($Holder$Reference$$Type<($PriorityBasedModifier$$Type)>)>): $List<($Holder$Reference<($PriorityBasedModifier)>)>
static "applyModifiers"(arg0: $MinecraftServer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Modifier$$Type = (Special.LithostitchedWorldgenModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Modifier_ = $Modifier$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.config.VinesConfig" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$SimpleWeightedRandomList, $SimpleWeightedRandomList$$Type} from "net.minecraft.util.random.SimpleWeightedRandomList"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $VinesConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($VinesConfig)>

constructor(blocks: $SimpleWeightedRandomList$$Type<($Block$$Type)>, canPlaceOn: $Optional$$Type<($HolderSet$$Type<($Block$$Type)>)>, maxLength: $IntProvider$$Type)

public "blocks"(): $SimpleWeightedRandomList<($Block)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "maxLength"(): $IntProvider
public "canPlaceOn"(arg0: $BlockState$$Type): boolean
public "canPlaceOn"(): $Optional<($HolderSet<($Block)>)>
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VinesConfig$$Type = ({"blocks"?: $SimpleWeightedRandomList$$Type<($Block$$Type)>, "maxLength"?: $IntProvider$$Type, "canPlaceOn"?: ($HolderSet$$Type<($Block$$Type)>)?}) | ([blocks?: $SimpleWeightedRandomList$$Type<($Block$$Type)>, maxLength?: $IntProvider$$Type, canPlaceOn?: ($HolderSet$$Type<($Block$$Type)>)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VinesConfig_ = $VinesConfig$$Type;
}}
declare module "dev.worldgen.lithostitched.access.StructurePoolAccess" {
import {$LithostitchedTemplates, $LithostitchedTemplates$$Type} from "dev.worldgen.lithostitched.worldgen.structure.LithostitchedTemplates"

export interface $StructurePoolAccess {

 "getLithostitchedTemplates"(): $LithostitchedTemplates
 "compileRawTemplates"(): void
get "lithostitchedTemplates"(): $LithostitchedTemplates
}

export namespace $StructurePoolAccess {
const probejs$$marker: never
}
export class $StructurePoolAccess$$Static implements $StructurePoolAccess {


 "getLithostitchedTemplates"(): $LithostitchedTemplates
 "compileRawTemplates"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePoolAccess$$Type = ($StructurePoolAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructurePoolAccess_ = $StructurePoolAccess$$Type;
}}
declare module "dev.worldgen.lithostitched.mixin.common.StructureSetAccessor" {
import {$StructureSet$StructureSelectionEntry, $StructureSet$StructureSelectionEntry$$Type} from "net.minecraft.world.level.levelgen.structure.StructureSet$StructureSelectionEntry"
import {$List, $List$$Type} from "java.util.List"

export interface $StructureSetAccessor {

 "setStructures"(arg0: $List$$Type<($StructureSet$StructureSelectionEntry$$Type)>): void

(arg0: $List<($StructureSet$StructureSelectionEntry)>): void
set "structures"(value: $List$$Type<($StructureSet$StructureSelectionEntry$$Type)>)
}

export namespace $StructureSetAccessor {
const probejs$$marker: never
}
export class $StructureSetAccessor$$Static implements $StructureSetAccessor {


 "setStructures"(arg0: $List$$Type<($StructureSet$StructureSelectionEntry$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureSetAccessor$$Type = ((arg0: $List<($StructureSet$StructureSelectionEntry)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureSetAccessor_ = $StructureSetAccessor$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.modifier.AddStructureSetEntriesModifier" {
import {$StructureSet, $StructureSet$$Type} from "net.minecraft.world.level.levelgen.structure.StructureSet"
import {$StructureSet$StructureSelectionEntry, $StructureSet$StructureSelectionEntry$$Type} from "net.minecraft.world.level.levelgen.structure.StructureSet$StructureSelectionEntry"
import {$List, $List$$Type} from "java.util.List"
import {$Modifier, $Modifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$PriorityBasedModifier, $PriorityBasedModifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.PriorityBasedModifier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Modifier$ModifierPhase, $Modifier$ModifierPhase$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier$ModifierPhase"

export class $AddStructureSetEntriesModifier extends $Record implements $Modifier {
static readonly "CODEC": $MapCodec<($AddStructureSetEntriesModifier)>

constructor(structureSets: $HolderSet$$Type<($StructureSet)>, entries: $List$$Type<($StructureSet$StructureSelectionEntry$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "entries"(): $List<($StructureSet$StructureSelectionEntry)>
public "getPhase"(): $Modifier$ModifierPhase
public "structureSets"(): $HolderSet<($StructureSet)>
public "applyModifier"(): void
public "applyModifier"(arg0: $StructureSet$$Type): void
public "codec"(): $MapCodec<($Modifier)>
public "internal$modifiesFabricFeatures"(): boolean
public "applyModifier"(arg0: $RegistryAccess$$Type): void
public static "sortByPriority"(arg0: $List$$Type<($Holder$Reference$$Type<($PriorityBasedModifier$$Type)>)>): $List<($Holder$Reference<($PriorityBasedModifier)>)>
public static "applyModifiers"(arg0: $MinecraftServer$$Type): void
get "phase"(): $Modifier$ModifierPhase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddStructureSetEntriesModifier$$Type = ({"entries"?: $List$$Type<($StructureSet$StructureSelectionEntry$$Type)>, "structureSets"?: $HolderSet$$Type<($StructureSet)>}) | ([entries?: $List$$Type<($StructureSet$StructureSelectionEntry$$Type)>, structureSets?: $HolderSet$$Type<($StructureSet)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddStructureSetEntriesModifier_ = $AddStructureSetEntriesModifier$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.structure.AlternateJigsawStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$AlternateJigsawConfig, $AlternateJigsawConfig$$Type} from "dev.worldgen.lithostitched.worldgen.structure.AlternateJigsawConfig"
import {$List, $List$$Type} from "java.util.List"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$PoolAliasBinding, $PoolAliasBinding$$Type} from "net.minecraft.world.level.levelgen.structure.pools.alias.PoolAliasBinding"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AlternateJigsawStructure extends $Structure {
static readonly "CODEC": $MapCodec<($AlternateJigsawStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>
static readonly "TYPE": $StructureType<($AlternateJigsawStructure)>


public "type"(): $StructureType<(any)>
public "config"(): $AlternateJigsawConfig
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
public "setPoolAliases"(arg0: $List$$Type<($PoolAliasBinding$$Type)>, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlternateJigsawStructure$$Type = ($AlternateJigsawStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlternateJigsawStructure_ = $AlternateJigsawStructure$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.structure.DelegatingConfig" {
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$PlacementCondition, $PlacementCondition$$Type} from "dev.worldgen.lithostitched.worldgen.placementcondition.PlacementCondition"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $DelegatingConfig {
static readonly "CODEC": $MapCodec<($DelegatingConfig)>

constructor(arg0: $Holder$$Type<($Structure)>, arg1: $PlacementCondition$$Type)

public "delegate"(): $Holder<($Structure)>
public "setSpawnCondition"(arg0: $PlacementCondition$$Type, arg1: boolean): void
public "spawnCondition"(): $PlacementCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegatingConfig$$Type = ($DelegatingConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelegatingConfig_ = $DelegatingConfig$$Type;
}}
declare module "dev.worldgen.lithostitched.mixin.common.JigsawStructureAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$PoolAliasBinding, $PoolAliasBinding$$Type} from "net.minecraft.world.level.levelgen.structure.pools.alias.PoolAliasBinding"

export interface $JigsawStructureAccessor {

 "setPoolAliases"(arg0: $List$$Type<($PoolAliasBinding$$Type)>): void
 "getPoolAliases"(): $List<($PoolAliasBinding)>
set "poolAliases"(value: $List$$Type<($PoolAliasBinding$$Type)>)
get "poolAliases"(): $List<($PoolAliasBinding)>
}

export namespace $JigsawStructureAccessor {
const probejs$$marker: never
}
export class $JigsawStructureAccessor$$Static implements $JigsawStructureAccessor {


 "setPoolAliases"(arg0: $List$$Type<($PoolAliasBinding$$Type)>): void
 "getPoolAliases"(): $List<($PoolAliasBinding)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JigsawStructureAccessor$$Type = ($JigsawStructureAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JigsawStructureAccessor_ = $JigsawStructureAccessor$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.modifier.PriorityBasedModifier" {
import {$List, $List$$Type} from "java.util.List"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$Modifier, $Modifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Modifier$ModifierPhase, $Modifier$ModifierPhase$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier$ModifierPhase"

export interface $PriorityBasedModifier extends $Modifier {

 "getPriority"(): integer
 "internal$modifiesFabricFeatures"(): boolean
 "getPhase"(): $Modifier$ModifierPhase
 "applyModifier"(): void
 "applyModifier"(arg0: $RegistryAccess$$Type): void
 "codec"(): $MapCodec<($Modifier)>
get "priority"(): integer
get "phase"(): $Modifier$ModifierPhase
}

export namespace $PriorityBasedModifier {
const PRIORITY_CODEC: $MapCodec<(integer)>
function sortByPriority(arg0: $List$$Type<($Holder$Reference$$Type<($PriorityBasedModifier$$Type)>)>): $List<($Holder$Reference<($PriorityBasedModifier)>)>
function applyModifiers(arg0: $MinecraftServer$$Type): void
const probejs$$marker: never
}
export class $PriorityBasedModifier$$Static implements $PriorityBasedModifier {
static readonly "PRIORITY_CODEC": $MapCodec<(integer)>


 "getPriority"(): integer
 "internal$modifiesFabricFeatures"(): boolean
 "getPhase"(): $Modifier$ModifierPhase
 "applyModifier"(): void
 "applyModifier"(arg0: $RegistryAccess$$Type): void
 "codec"(): $MapCodec<($Modifier)>
static "sortByPriority"(arg0: $List$$Type<($Holder$Reference$$Type<($PriorityBasedModifier$$Type)>)>): $List<($Holder$Reference<($PriorityBasedModifier)>)>
static "applyModifiers"(arg0: $MinecraftServer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PriorityBasedModifier$$Type = ($PriorityBasedModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PriorityBasedModifier_ = $PriorityBasedModifier$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.modifier.AbstractBiomeModifier" {
import {$List, $List$$Type} from "java.util.List"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$Modifier, $Modifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier"
import {$BiomeModifier, $BiomeModifier$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$PriorityBasedModifier, $PriorityBasedModifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.PriorityBasedModifier"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$Modifier$ModifierPhase, $Modifier$ModifierPhase$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier$ModifierPhase"

export class $AbstractBiomeModifier implements $Modifier {


public "getPhase"(): $Modifier$ModifierPhase
public "applyModifier"(): void
public "neoforgeBiomeModifier"(): $BiomeModifier
public "internal$modifiesFabricFeatures"(): boolean
public "applyModifier"(arg0: $RegistryAccess$$Type): void
public "codec"(): $MapCodec<($Modifier)>
public static "sortByPriority"(arg0: $List$$Type<($Holder$Reference$$Type<($PriorityBasedModifier$$Type)>)>): $List<($Holder$Reference<($PriorityBasedModifier)>)>
public static "applyModifiers"(arg0: $MinecraftServer$$Type): void
get "phase"(): $Modifier$ModifierPhase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBiomeModifier$$Type = ($AbstractBiomeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBiomeModifier_ = $AbstractBiomeModifier$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.structure.DelegatingStructure" {
import {$WorldGenLevel, $WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StructureManager, $StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ChunkGenerator, $ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$DelegatingConfig, $DelegatingConfig$$Type} from "dev.worldgen.lithostitched.worldgen.structure.DelegatingConfig"
import {$PiecesContainer, $PiecesContainer$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $DelegatingStructure extends $Structure {
static readonly "CODEC": $MapCodec<($DelegatingStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>
static readonly "TYPE": $StructureType<($DelegatingStructure)>

constructor(arg0: $DelegatingConfig$$Type)

public "type"(): $StructureType<(any)>
public "config"(): $DelegatingConfig
public "delegate"(): $Structure
public "findValidGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
public "afterPlace"(arg0: $WorldGenLevel$$Type, arg1: $StructureManager$$Type, arg2: $ChunkGenerator$$Type, arg3: $RandomSource$$Type, arg4: $BoundingBox$$Type, arg5: $ChunkPos$$Type, arg6: $PiecesContainer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegatingStructure$$Type = ($DelegatingStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelegatingStructure_ = $DelegatingStructure$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.modifier.ReplaceClimateModifier" {
import {$Biome$ClimateSettings, $Biome$ClimateSettings$$Type} from "net.minecraft.world.level.biome.Biome$ClimateSettings"
import {$List, $List$$Type} from "java.util.List"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$Modifier, $Modifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.Modifier"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$PriorityBasedModifier, $PriorityBasedModifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.PriorityBasedModifier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$AbstractBiomeModifier, $AbstractBiomeModifier$$Type} from "dev.worldgen.lithostitched.worldgen.modifier.AbstractBiomeModifier"

export class $ReplaceClimateModifier extends $AbstractBiomeModifier {
static readonly "CODEC": $MapCodec<($ReplaceClimateModifier)>

constructor(arg0: $HolderSet$$Type<($Biome)>, arg1: $Biome$ClimateSettings$$Type)

public "codec"(): $MapCodec<($Modifier)>
public "biomes"(): $HolderSet<($Biome)>
public "climateSettings"(): $Biome$ClimateSettings
public static "sortByPriority"(arg0: $List$$Type<($Holder$Reference$$Type<($PriorityBasedModifier$$Type)>)>): $List<($Holder$Reference<($PriorityBasedModifier)>)>
public static "applyModifiers"(arg0: $MinecraftServer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReplaceClimateModifier$$Type = ($ReplaceClimateModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReplaceClimateModifier_ = $ReplaceClimateModifier$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.config.DungeonConfig" {
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$SimpleWeightedRandomList, $SimpleWeightedRandomList$$Type} from "net.minecraft.util.random.SimpleWeightedRandomList"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$BlockStateProvider, $BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $DungeonConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($DungeonConfig)>

constructor(minOpenings: integer, maxOpenings: integer, radius: $IntProvider$$Type, maxChests: integer, spawnerMobs: $SimpleWeightedRandomList$$Type<($EntityType$$Type<(any)>)>, floorProvider: $BlockStateProvider$$Type, wallProvider: $BlockStateProvider$$Type, dungeonInvalidBlocks: $TagKey$$Type<($Block)>, lootTable: $ResourceKey$$Type<($LootTable)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "dungeonInvalidBlocks"(): $TagKey<($Block)>
public "lootTable"(): $ResourceKey<($LootTable)>
public "radius"(): $IntProvider
public "minOpenings"(): integer
public "maxOpenings"(): integer
public "floorProvider"(): $BlockStateProvider
public "wallProvider"(): $BlockStateProvider
public "maxChests"(): integer
public "spawnerMobs"(): $SimpleWeightedRandomList<($EntityType<(any)>)>
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DungeonConfig$$Type = ({"radius"?: $IntProvider$$Type, "maxChests"?: integer, "lootTable"?: $ResourceKey$$Type<($LootTable)>, "wallProvider"?: $BlockStateProvider$$Type, "dungeonInvalidBlocks"?: $TagKey$$Type<($Block)>, "minOpenings"?: integer, "floorProvider"?: $BlockStateProvider$$Type, "maxOpenings"?: integer, "spawnerMobs"?: $SimpleWeightedRandomList$$Type<($EntityType$$Type<(never)>)>}) | ([radius?: $IntProvider$$Type, maxChests?: integer, lootTable?: $ResourceKey$$Type<($LootTable)>, wallProvider?: $BlockStateProvider$$Type, dungeonInvalidBlocks?: $TagKey$$Type<($Block)>, minOpenings?: integer, floorProvider?: $BlockStateProvider$$Type, maxOpenings?: integer, spawnerMobs?: $SimpleWeightedRandomList$$Type<($EntityType$$Type<(never)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DungeonConfig_ = $DungeonConfig$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.config.SelectConfig" {
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BlockPredicate, $BlockPredicate$$Type} from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SelectConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($SelectConfig)>
static readonly "PAIR_CODEC": $Codec<($Pair<($BlockPredicate), ($Holder<($PlacedFeature)>)>)>

constructor(features: $List$$Type<($Pair$$Type<($BlockPredicate$$Type), ($Holder$$Type<($PlacedFeature$$Type)>)>)>)

public "features"(): $List<($Pair<($BlockPredicate), ($Holder<($PlacedFeature)>)>)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectConfig$$Type = ({"features"?: $List$$Type<($Pair$$Type<($BlockPredicate$$Type), ($Holder$$Type<($PlacedFeature$$Type)>)>)>}) | ([features?: $List$$Type<($Pair$$Type<($BlockPredicate$$Type), ($Holder$$Type<($PlacedFeature$$Type)>)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectConfig_ = $SelectConfig$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.placementcondition.PlacementCondition$Context" {
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$ChunkGenerator, $ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$RandomState, $RandomState$$Type} from "net.minecraft.world.level.levelgen.RandomState"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BiomeSource, $BiomeSource$$Type} from "net.minecraft.world.level.biome.BiomeSource"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $PlacementCondition$Context extends $Record {

constructor(registries: $RegistryAccess$$Type, generator: $ChunkGenerator$$Type, heightAccessor: $LevelHeightAccessor$$Type, randomState: $RandomState$$Type, biomeSource: $BiomeSource$$Type, seed: long)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "generator"(): $ChunkGenerator
public "seed"(): long
public "randomState"(): $RandomState
public "registries"(): $RegistryAccess
public "heightAccessor"(): $LevelHeightAccessor
public "biomeSource"(): $BiomeSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementCondition$Context$$Type = ({"seed"?: long, "randomState"?: $RandomState$$Type, "biomeSource"?: $BiomeSource$$Type, "registries"?: $RegistryAccess$$Type, "generator"?: $ChunkGenerator$$Type, "heightAccessor"?: $LevelHeightAccessor$$Type}) | ([seed?: long, randomState?: $RandomState$$Type, biomeSource?: $BiomeSource$$Type, registries?: $RegistryAccess$$Type, generator?: $ChunkGenerator$$Type, heightAccessor?: $LevelHeightAccessor$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacementCondition$Context_ = $PlacementCondition$Context$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.config.WellConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$BlockStateProvider, $BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $WellConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($WellConfig)>

constructor(groundProvider: $BlockStateProvider$$Type, suspiciousProvider: $BlockStateProvider$$Type, standardProvider: $BlockStateProvider$$Type, slabProvider: $BlockStateProvider$$Type, fluidProvider: $BlockStateProvider$$Type, suspiciousPlacements: $IntProvider$$Type, suspiciousLootTable: $ResourceKey$$Type<($LootTable)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "standardProvider"(): $BlockStateProvider
public "groundProvider"(): $BlockStateProvider
public "fluidProvider"(): $BlockStateProvider
public "slabProvider"(): $BlockStateProvider
public "suspiciousPlacements"(): $IntProvider
public "suspiciousProvider"(): $BlockStateProvider
public "suspiciousLootTable"(): $ResourceKey<($LootTable)>
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WellConfig$$Type = ({"standardProvider"?: $BlockStateProvider$$Type, "fluidProvider"?: $BlockStateProvider$$Type, "groundProvider"?: $BlockStateProvider$$Type, "suspiciousLootTable"?: $ResourceKey$$Type<($LootTable)>, "suspiciousPlacements"?: $IntProvider$$Type, "suspiciousProvider"?: $BlockStateProvider$$Type, "slabProvider"?: $BlockStateProvider$$Type}) | ([standardProvider?: $BlockStateProvider$$Type, fluidProvider?: $BlockStateProvider$$Type, groundProvider?: $BlockStateProvider$$Type, suspiciousLootTable?: $ResourceKey$$Type<($LootTable)>, suspiciousPlacements?: $IntProvider$$Type, suspiciousProvider?: $BlockStateProvider$$Type, slabProvider?: $BlockStateProvider$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WellConfig_ = $WellConfig$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.CompositeFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
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
import {$CompositeConfig, $CompositeConfig$$Type} from "dev.worldgen.lithostitched.worldgen.feature.config.CompositeConfig"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $CompositeFeature extends $Feature<($CompositeConfig)> {
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
static readonly "FEATURE": $CompositeFeature
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

constructor(arg0: $Codec$$Type<($CompositeConfig$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($CompositeConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeFeature$$Type = ($CompositeFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeFeature_ = $CompositeFeature$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.StructureTemplateFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$StructureTemplateConfig, $StructureTemplateConfig$$Type} from "dev.worldgen.lithostitched.worldgen.feature.config.StructureTemplateConfig"
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

export class $StructureTemplateFeature extends $Feature<($StructureTemplateConfig)> {
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
static readonly "FEATURE": $StructureTemplateFeature
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

public "place"(arg0: $FeaturePlaceContext$$Type<($StructureTemplateConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateFeature$$Type = ($StructureTemplateFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateFeature_ = $StructureTemplateFeature$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.structure.LithostitchedTemplates" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $LithostitchedTemplates implements $Iterable<($StructurePoolElement)> {

constructor()

public "add"(arg0: $StructurePoolElement$$Type, arg1: integer): $LithostitchedTemplates
public "iterator"(): $Iterator<($StructurePoolElement)>
public "stream"(): $Stream<($StructurePoolElement)>
public "shuffle"(arg0: $RandomSource$$Type): $List<($StructurePoolElement)>
public "spliterator"(): $Spliterator<($StructurePoolElement)>
public "forEach"(arg0: $Consumer$$Type<($StructurePoolElement)>): void
[Symbol.iterator](): IterableIterator<$StructurePoolElement>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithostitchedTemplates$$Type = ($LithostitchedTemplates);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithostitchedTemplates_ = $LithostitchedTemplates$$Type;
}}
declare module "dev.worldgen.lithostitched.mixin.common.NoiseGeneratorSettingsAccessor" {
import {$NoiseRouter, $NoiseRouter$$Type} from "net.minecraft.world.level.levelgen.NoiseRouter"

export interface $NoiseGeneratorSettingsAccessor {

 "setNoiseRouter"(arg0: $NoiseRouter$$Type): void

(arg0: $NoiseRouter): void
set "noiseRouter"(value: $NoiseRouter$$Type)
}

export namespace $NoiseGeneratorSettingsAccessor {
const probejs$$marker: never
}
export class $NoiseGeneratorSettingsAccessor$$Static implements $NoiseGeneratorSettingsAccessor {


 "setNoiseRouter"(arg0: $NoiseRouter$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoiseGeneratorSettingsAccessor$$Type = ((arg0: $NoiseRouter) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoiseGeneratorSettingsAccessor_ = $NoiseGeneratorSettingsAccessor$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.config.LargeDripstoneConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BlockStateProvider, $BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$FloatProvider, $FloatProvider$$Type} from "net.minecraft.util.valueproviders.FloatProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LargeDripstoneConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($LargeDripstoneConfig)>

constructor(stateProvider: $BlockStateProvider$$Type, replaceableBlocks: $HolderSet$$Type<($Block)>, floorToCeilingSearchRange: integer, columnRadius: $IntProvider$$Type, heightScale: $FloatProvider$$Type, maxColumnRadiusToCaveHeightRatio: float, stalactiteBluntness: $FloatProvider$$Type, stalagmiteBluntness: $FloatProvider$$Type, windSpeed: $FloatProvider$$Type, minRadiusForWind: integer, minBluntnessForWind: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "maxColumnRadiusToCaveHeightRatio"(): float
public "floorToCeilingSearchRange"(): integer
public "minRadiusForWind"(): integer
public "minBluntnessForWind"(): float
public "stalactiteBluntness"(): $FloatProvider
public "stalagmiteBluntness"(): $FloatProvider
public "replaceableBlocks"(): $HolderSet<($Block)>
public "stateProvider"(): $BlockStateProvider
public "columnRadius"(): $IntProvider
public "heightScale"(): $FloatProvider
public "windSpeed"(): $FloatProvider
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeDripstoneConfig$$Type = ({"stalagmiteBluntness"?: $FloatProvider$$Type, "maxColumnRadiusToCaveHeightRatio"?: float, "floorToCeilingSearchRange"?: integer, "stateProvider"?: $BlockStateProvider$$Type, "columnRadius"?: $IntProvider$$Type, "minRadiusForWind"?: integer, "heightScale"?: $FloatProvider$$Type, "windSpeed"?: $FloatProvider$$Type, "minBluntnessForWind"?: float, "replaceableBlocks"?: $HolderSet$$Type<($Block)>, "stalactiteBluntness"?: $FloatProvider$$Type}) | ([stalagmiteBluntness?: $FloatProvider$$Type, maxColumnRadiusToCaveHeightRatio?: float, floorToCeilingSearchRange?: integer, stateProvider?: $BlockStateProvider$$Type, columnRadius?: $IntProvider$$Type, minRadiusForWind?: integer, heightScale?: $FloatProvider$$Type, windSpeed?: $FloatProvider$$Type, minBluntnessForWind?: float, replaceableBlocks?: $HolderSet$$Type<($Block)>, stalactiteBluntness?: $FloatProvider$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LargeDripstoneConfig_ = $LargeDripstoneConfig$$Type;
}}
declare module "dev.worldgen.lithostitched.worldgen.feature.config.CompositeConfig" {
import {$CompositeConfig$Type, $CompositeConfig$Type$$Type} from "dev.worldgen.lithostitched.worldgen.feature.config.CompositeConfig$Type"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CompositeConfig extends $Record implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($CompositeConfig)>

constructor(features: $HolderSet$$Type<($PlacedFeature)>, placementType: $CompositeConfig$Type$$Type)

public "features"(): $HolderSet<($PlacedFeature)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "placementType"(): $CompositeConfig$Type
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeConfig$$Type = ({"placementType"?: $CompositeConfig$Type$$Type, "features"?: $HolderSet$$Type<($PlacedFeature)>}) | ([placementType?: $CompositeConfig$Type$$Type, features?: $HolderSet$$Type<($PlacedFeature)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeConfig_ = $CompositeConfig$$Type;
}}
declare module "dev.worldgen.lithostitched.mixin.common.RandomStateAccessor" {
import {$PositionalRandomFactory, $PositionalRandomFactory$$Type} from "net.minecraft.world.level.levelgen.PositionalRandomFactory"

export interface $RandomStateAccessor {

 "getRandom"(): $PositionalRandomFactory

(): $PositionalRandomFactory$$Type
get "random"(): $PositionalRandomFactory
}

export namespace $RandomStateAccessor {
const probejs$$marker: never
}
export class $RandomStateAccessor$$Static implements $RandomStateAccessor {


 "getRandom"(): $PositionalRandomFactory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomStateAccessor$$Type = (() => $PositionalRandomFactory$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomStateAccessor_ = $RandomStateAccessor$$Type;
}}
