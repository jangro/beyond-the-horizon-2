declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorSmithingTrimRecipe" {
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"

export interface $AccessorSmithingTrimRecipe {

 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
get "addition"(): $Ingredient
}

export namespace $AccessorSmithingTrimRecipe {
const probejs$$marker: never
}
export class $AccessorSmithingTrimRecipe$$Static implements $AccessorSmithingTrimRecipe {


 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSmithingTrimRecipe$$Type = ($AccessorSmithingTrimRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSmithingTrimRecipe_ = $AccessorSmithingTrimRecipe$$Type;
}}
declare module "com.illusivesoulworks.polymorph.api.common.base.IRecipeContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IRecipeContext {

 "polymorph$getContext"(): any
 "polymorph$setContext"(arg0: any): void
}

export namespace $IRecipeContext {
const probejs$$marker: never
}
export class $IRecipeContext$$Static implements $IRecipeContext {


 "polymorph$getContext"(): any
 "polymorph$setContext"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeContext$$Type = ($IRecipeContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeContext_ = $IRecipeContext$$Type;
}}
declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorInventoryMenu" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CraftingContainer, $CraftingContainer$$Type} from "net.minecraft.world.inventory.CraftingContainer"
import {$ResultContainer, $ResultContainer$$Type} from "net.minecraft.world.inventory.ResultContainer"

export interface $AccessorInventoryMenu {

 "getOwner"(): $Player
 "getCraftSlots"(): $CraftingContainer
 "getResultSlots"(): $ResultContainer
get "owner"(): $Player
get "craftSlots"(): $CraftingContainer
get "resultSlots"(): $ResultContainer
}

export namespace $AccessorInventoryMenu {
const probejs$$marker: never
}
export class $AccessorInventoryMenu$$Static implements $AccessorInventoryMenu {


 "getOwner"(): $Player
 "getCraftSlots"(): $CraftingContainer
 "getResultSlots"(): $ResultContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorInventoryMenu$$Type = ($AccessorInventoryMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorInventoryMenu_ = $AccessorInventoryMenu$$Type;
}}
declare module "com.illusivesoulworks.caelus.api.RenderCapeEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$PlayerEvent, $PlayerEvent$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $RenderCapeEvent extends $PlayerEvent implements $ICancellableEvent {

constructor(arg0: $Player$$Type)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
public "getEntity"(): $Entity
get "canceled"(): boolean
set "canceled"(value: boolean)
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderCapeEvent$$Type = ($RenderCapeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderCapeEvent_ = $RenderCapeEvent$$Type;
}}
declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorAbstractFurnaceBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $AccessorAbstractFurnaceBlockEntity {

 "getItems"(): $NonNullList<($ItemStack)>

(): $NonNullList$$Type<($ItemStack$$Type)>
get "items"(): $NonNullList<($ItemStack)>
}

export namespace $AccessorAbstractFurnaceBlockEntity {
const probejs$$marker: never
}
export class $AccessorAbstractFurnaceBlockEntity$$Static implements $AccessorAbstractFurnaceBlockEntity {


 "getItems"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorAbstractFurnaceBlockEntity$$Type = (() => $NonNullList$$Type<($ItemStack$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorAbstractFurnaceBlockEntity_ = $AccessorAbstractFurnaceBlockEntity$$Type;
}}
declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorCraftingMenu" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CraftingContainer, $CraftingContainer$$Type} from "net.minecraft.world.inventory.CraftingContainer"
import {$ResultContainer, $ResultContainer$$Type} from "net.minecraft.world.inventory.ResultContainer"

export interface $AccessorCraftingMenu {

 "getPlayer"(): $Player
 "getCraftSlots"(): $CraftingContainer
 "getResultSlots"(): $ResultContainer
get "player"(): $Player
get "craftSlots"(): $CraftingContainer
get "resultSlots"(): $ResultContainer
}

export namespace $AccessorCraftingMenu {
const probejs$$marker: never
}
export class $AccessorCraftingMenu$$Static implements $AccessorCraftingMenu {


 "getPlayer"(): $Player
 "getCraftSlots"(): $CraftingContainer
 "getResultSlots"(): $ResultContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCraftingMenu$$Type = ($AccessorCraftingMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorCraftingMenu_ = $AccessorCraftingMenu$$Type;
}}
declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorSmithingTransformRecipe" {
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"

export interface $AccessorSmithingTransformRecipe {

 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
get "base"(): $Ingredient
get "template"(): $Ingredient
get "addition"(): $Ingredient
}

export namespace $AccessorSmithingTransformRecipe {
const probejs$$marker: never
}
export class $AccessorSmithingTransformRecipe$$Static implements $AccessorSmithingTransformRecipe {


 "getBase"(): $Ingredient
 "getTemplate"(): $Ingredient
 "getAddition"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorSmithingTransformRecipe$$Type = ($AccessorSmithingTransformRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorSmithingTransformRecipe_ = $AccessorSmithingTransformRecipe$$Type;
}}
declare module "com.illusivesoulworks.polymorph.mixin.core.AccessorCrafterMenu" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorCrafterMenu {

 "callRefreshRecipeResult"(): void

(): void
}

export namespace $AccessorCrafterMenu {
const probejs$$marker: never
}
export class $AccessorCrafterMenu$$Static implements $AccessorCrafterMenu {


 "callRefreshRecipeResult"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCrafterMenu$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorCrafterMenu_ = $AccessorCrafterMenu$$Type;
}}
