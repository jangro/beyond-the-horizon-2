declare module "terrablender.worldgen.IExtendedBiomeSource" {
import {$List, $List$$Type} from "java.util.List"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $IExtendedBiomeSource {

 "appendDeferredBiomesList"(arg0: $List$$Type<($Holder$$Type<($Biome$$Type)>)>): void

(arg0: $List<($Holder<($Biome)>)>): void
}

export namespace $IExtendedBiomeSource {
const probejs$$marker: never
}
export class $IExtendedBiomeSource$$Static implements $IExtendedBiomeSource {


 "appendDeferredBiomesList"(arg0: $List$$Type<($Holder$$Type<($Biome$$Type)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedBiomeSource$$Type = ((arg0: $List<($Holder<($Biome)>)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedBiomeSource_ = $IExtendedBiomeSource$$Type;
}}
declare module "terrablender.worldgen.IExtendedNoiseGeneratorSettings" {
import {$SurfaceRuleManager$RuleCategory, $SurfaceRuleManager$RuleCategory$$Type} from "terrablender.api.SurfaceRuleManager$RuleCategory"

export interface $IExtendedNoiseGeneratorSettings {

 "setRuleCategory"(arg0: $SurfaceRuleManager$RuleCategory$$Type): void

(arg0: $SurfaceRuleManager$RuleCategory): void
set "ruleCategory"(value: $SurfaceRuleManager$RuleCategory$$Type)
}

export namespace $IExtendedNoiseGeneratorSettings {
const probejs$$marker: never
}
export class $IExtendedNoiseGeneratorSettings$$Static implements $IExtendedNoiseGeneratorSettings {


 "setRuleCategory"(arg0: $SurfaceRuleManager$RuleCategory$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedNoiseGeneratorSettings$$Type = ((arg0: $SurfaceRuleManager$RuleCategory) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedNoiseGeneratorSettings_ = $IExtendedNoiseGeneratorSettings$$Type;
}}
declare module "terrablender.worldgen.IExtendedParameterList" {
import {$Climate$TargetPoint, $Climate$TargetPoint$$Type} from "net.minecraft.world.level.biome.Climate$TargetPoint"
import {$RegionType, $RegionType$$Type} from "terrablender.api.RegionType"
import {$Climate$ParameterList, $Climate$ParameterList$$Type} from "net.minecraft.world.level.biome.Climate$ParameterList"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Region, $Region$$Type} from "terrablender.api.Region"
import {$Climate$RTree, $Climate$RTree$$Type} from "net.minecraft.world.level.biome.Climate$RTree"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export interface $IExtendedParameterList<T> extends $Cloneable {

 "clone"(): $Climate$ParameterList<(T)>
 "getTree"(arg0: integer): $Climate$RTree<(any)>
 "getRegion"(arg0: integer): $Region
 "initializeForTerraBlender"(arg0: $RegistryAccess$$Type, arg1: $RegionType$$Type, arg2: long): void
 "isInitialized"(): boolean
 "findValuePositional"(arg0: $Climate$TargetPoint$$Type, arg1: integer, arg2: integer, arg3: integer): T
 "recreateUniqueness"(): void
 "getUniqueness"(arg0: integer, arg1: integer, arg2: integer): integer
 "getTreeCount"(): integer
get "initialized"(): boolean
get "treeCount"(): integer
}

export namespace $IExtendedParameterList {
const probejs$$marker: never
}
export class $IExtendedParameterList$$Static<T> implements $IExtendedParameterList {


 "clone"(): $Climate$ParameterList<(T)>
 "getTree"(arg0: integer): $Climate$RTree<(any)>
 "getRegion"(arg0: integer): $Region
 "initializeForTerraBlender"(arg0: $RegistryAccess$$Type, arg1: $RegionType$$Type, arg2: long): void
 "isInitialized"(): boolean
 "findValuePositional"(arg0: $Climate$TargetPoint$$Type, arg1: integer, arg2: integer, arg3: integer): T
 "recreateUniqueness"(): void
 "getUniqueness"(arg0: integer, arg1: integer, arg2: integer): integer
 "getTreeCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedParameterList$$Type<T> = ($IExtendedParameterList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedParameterList_<T> = $IExtendedParameterList$$Type<(T)>;
}}
