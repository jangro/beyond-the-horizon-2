declare module "snownee.jade.addon.mixin.create.FilterItemAccess" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $FilterItemAccess {

 "callMakeSummary"(arg0: $ItemStack$$Type): $List<($Component)>

(arg0: $ItemStack): $List$$Type<($Component$$Type)>
}

export namespace $FilterItemAccess {
const probejs$$marker: never
}
export class $FilterItemAccess$$Static implements $FilterItemAccess {


 "callMakeSummary"(arg0: $ItemStack$$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterItemAccess$$Type = ((arg0: $ItemStack) => $List$$Type<($Component$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterItemAccess_ = $FilterItemAccess$$Type;
}}
declare module "snownee.jade.gui.JadeFont" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $JadeFont {

 "jade$setGlint"(arg0: float, arg1: float): void
 "jade$setGlintStrength"(arg0: float, arg1: float): void
}

export namespace $JadeFont {
const probejs$$marker: never
}
export class $JadeFont$$Static implements $JadeFont {


 "jade$setGlint"(arg0: float, arg1: float): void
 "jade$setGlintStrength"(arg0: float, arg1: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JadeFont$$Type = ($JadeFont);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JadeFont_ = $JadeFont$$Type;
}}
declare module "snownee.jade.addon.mixin.create.BacktankBlockEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BacktankBlockEntityAccess {

 "getCapacityEnchantLevel"(): integer

(): integer
get "capacityEnchantLevel"(): integer
}

export namespace $BacktankBlockEntityAccess {
const probejs$$marker: never
}
export class $BacktankBlockEntityAccess$$Static implements $BacktankBlockEntityAccess {


 "getCapacityEnchantLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BacktankBlockEntityAccess$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BacktankBlockEntityAccess_ = $BacktankBlockEntityAccess$$Type;
}}
declare module "snownee.jade.mixin.AbstractFurnaceBlockEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractFurnaceBlockEntityAccess {

 "getCookingProgress"(): integer
 "getCookingTotalTime"(): integer
get "cookingProgress"(): integer
get "cookingTotalTime"(): integer
}

export namespace $AbstractFurnaceBlockEntityAccess {
const probejs$$marker: never
}
export class $AbstractFurnaceBlockEntityAccess$$Static implements $AbstractFurnaceBlockEntityAccess {


 "getCookingProgress"(): integer
 "getCookingTotalTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFurnaceBlockEntityAccess$$Type = ($AbstractFurnaceBlockEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractFurnaceBlockEntityAccess_ = $AbstractFurnaceBlockEntityAccess$$Type;
}}
declare module "snownee.jade.mixin.EntityAccess" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $EntityAccess {

 "callGetTypeName"(): $Component

(): $Component$$Type
}

export namespace $EntityAccess {
const probejs$$marker: never
}
export class $EntityAccess$$Static implements $EntityAccess {


 "callGetTypeName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccess$$Type = (() => $Component$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccess_ = $EntityAccess$$Type;
}}
