declare module "com.faboslav.villagesandpillages.mixin.accessor.StructureProcessorAccessor" {
import {$StructureProcessorType, $StructureProcessorType$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorType"

export interface $StructureProcessorAccessor {

 "callGetType"(): $StructureProcessorType<(any)>

(): $StructureProcessorType$$Type<(any)>
}

export namespace $StructureProcessorAccessor {
const probejs$$marker: never
}
export class $StructureProcessorAccessor$$Static implements $StructureProcessorAccessor {


 "callGetType"(): $StructureProcessorType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureProcessorAccessor$$Type = (() => $StructureProcessorType$$Type<(any)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureProcessorAccessor_ = $StructureProcessorAccessor$$Type;
}}
declare module "com.faboslav.villagesandpillages.world.structures.VillageWitchStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$YungJigsawStructure, $YungJigsawStructure$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.YungJigsawStructure"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$DimensionPadding, $DimensionPadding$$Type} from "net.minecraft.world.level.levelgen.structure.pools.DimensionPadding"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$EnhancedTerrainAdaptation, $EnhancedTerrainAdaptation$$Type} from "com.yungnickyoung.minecraft.yungsapi.world.structure.terrainadaptation.adaptations.EnhancedTerrainAdaptation"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $VillageWitchStructure extends $YungJigsawStructure {
static readonly "CODEC": $MapCodec<($VillageWitchStructure)>
readonly "maxY": $Optional<(integer)>
readonly "liquidSettings": $LiquidSettings
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "dimensionPadding": $DimensionPadding
readonly "startPool": $Holder<($StructureTemplatePool)>
readonly "startHeight": $HeightProvider
readonly "maxDepth": integer
readonly "zOffsetInChunk": $IntProvider
readonly "xOffsetInChunk": $IntProvider
readonly "useExpansionHack": boolean
readonly "projectStartToHeightmap": $Optional<($Heightmap$Types)>
readonly "minY": $Optional<(integer)>
readonly "enhancedTerrainAdaptation": $EnhancedTerrainAdaptation
static readonly "MAX_TOTAL_STRUCTURE_RADIUS": integer
readonly "maxDistanceFromCenter": integer

constructor(structureSettings: $Structure$StructureSettings$$Type, startPool: $Holder$$Type<($StructureTemplatePool)>, startJigsawName: $Optional$$Type<($ResourceLocation$$Type)>, maxDepth: integer, startHeight: $HeightProvider$$Type, xOffsetInChunk: $IntProvider$$Type, zOffsetInChunk: $IntProvider$$Type, useExpansionHack: boolean, projectStartToHeightmap: $Optional$$Type<($Heightmap$Types$$Type)>, maxBlockDistanceFromCenter: integer, maxY: $Optional$$Type<(integer)>, minY: $Optional$$Type<(integer)>, enhancedTerrainAdaptation: $EnhancedTerrainAdaptation$$Type, dimensionPadding: $DimensionPadding$$Type, liquidSettings: $LiquidSettings$$Type)

public "type"(): $StructureType<(any)>
public "findGenerationPoint"(context: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillageWitchStructure$$Type = ($VillageWitchStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillageWitchStructure_ = $VillageWitchStructure$$Type;
}}
