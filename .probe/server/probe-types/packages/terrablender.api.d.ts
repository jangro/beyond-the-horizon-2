declare module "terrablender.api.RegionType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $RegionType extends $Enum<($RegionType)> {
static readonly "OVERWORLD": $RegionType
static readonly "NETHER": $RegionType


public static "values"(): ($RegionType)[]
public static "valueOf"(arg0: StringJS): $RegionType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionType$$Type = (("overworld") | ("nether") | ("the_aether"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionType_ = $RegionType$$Type;
}}
declare module "terrablender.api.SurfaceRuleManager$RuleCategory" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $SurfaceRuleManager$RuleCategory extends $Enum<($SurfaceRuleManager$RuleCategory)> {
static readonly "OVERWORLD": $SurfaceRuleManager$RuleCategory
static readonly "NETHER": $SurfaceRuleManager$RuleCategory
static readonly "END": $SurfaceRuleManager$RuleCategory


public static "values"(): ($SurfaceRuleManager$RuleCategory)[]
public static "valueOf"(arg0: StringJS): $SurfaceRuleManager$RuleCategory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurfaceRuleManager$RuleCategory$$Type = (("overworld") | ("nether") | ("end") | ("the_aether"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurfaceRuleManager$RuleCategory_ = $SurfaceRuleManager$RuleCategory$$Type;
}}
declare module "terrablender.api.Region" {
import {$RegionType, $RegionType$$Type} from "terrablender.api.RegionType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Climate$ParameterPoint, $Climate$ParameterPoint$$Type} from "net.minecraft.world.level.biome.Climate$ParameterPoint"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $Region {
static readonly "DEFERRED_PLACEHOLDER": $ResourceKey<($Biome)>

constructor(arg0: $ResourceLocation$$Type, arg1: $RegionType$$Type, arg2: integer)

public "getName"(): $ResourceLocation
public "getType"(): $RegionType
public "getWeight"(): integer
public "addBiomes"(arg0: $Registry$$Type<($Biome$$Type)>, arg1: $Consumer$$Type<($Pair<($Climate$ParameterPoint), ($ResourceKey<($Biome)>)>)>): void
get "name"(): $ResourceLocation
get "type"(): $RegionType
get "weight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Region$$Type = ($Region);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Region_ = $Region$$Type;
}}
