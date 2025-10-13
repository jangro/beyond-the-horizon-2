declare module "telepathicgrunt.structure_layout_optimizer.mixins.StructureTemplatePoolAccessor" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructureTemplatePoolAccessor {

 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>

(): $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>
get "rawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
}

export namespace $StructureTemplatePoolAccessor {
const probejs$$marker: never
}
export class $StructureTemplatePoolAccessor$$Static implements $StructureTemplatePoolAccessor {


 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplatePoolAccessor$$Type = (() => $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplatePoolAccessor_ = $StructureTemplatePoolAccessor$$Type;
}}
