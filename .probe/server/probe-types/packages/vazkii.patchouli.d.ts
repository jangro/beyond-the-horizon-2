declare module "vazkii.patchouli.common.advancement.BookOpenTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BookOpenTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static "CODEC": $Codec<($BookOpenTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, book: $ResourceLocation$$Type, entry: $Optional$$Type<($ResourceLocation$$Type)>, page: $MinMaxBounds$Ints$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: integer): boolean
public "entry"(): $Optional<($ResourceLocation)>
public "book"(): $ResourceLocation
public "page"(): $MinMaxBounds$Ints
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOpenTrigger$TriggerInstance$$Type = ({"entry"?: ($ResourceLocation$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?, "page"?: $MinMaxBounds$Ints$$Type, "book"?: $ResourceLocation$$Type}) | ([entry?: ($ResourceLocation$$Type)?, player?: ($ContextAwarePredicate$$Type)?, page?: $MinMaxBounds$Ints$$Type, book?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOpenTrigger$TriggerInstance_ = $BookOpenTrigger$TriggerInstance$$Type;
}}
declare module "vazkii.patchouli.client.book.EntryDisplayState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $EntryDisplayState extends $Enum<($EntryDisplayState)> {
static readonly "UNREAD": $EntryDisplayState
static readonly "COMPLETED": $EntryDisplayState
readonly "u": integer
readonly "hasIcon": boolean
readonly "hasAnimation": boolean
static readonly "DEFAULT_TYPE": $EntryDisplayState
static readonly "PENDING": $EntryDisplayState
readonly "showInInventory": boolean
static readonly "NEUTRAL": $EntryDisplayState


public static "values"(): ($EntryDisplayState)[]
public static "valueOf"(arg0: StringJS): $EntryDisplayState
public static "fromOrdinal"(arg0: integer): $EntryDisplayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryDisplayState$$Type = (("unread") | ("pending") | ("neutral") | ("completed"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryDisplayState_ = $EntryDisplayState$$Type;
}}
declare module "vazkii.patchouli.mixin.client.AccessorKeyMapping" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"

export interface $AccessorKeyMapping {

}

export namespace $AccessorKeyMapping {
function getAllKeyMappings(): $Map<(StringJS), ($KeyMapping)>
const probejs$$marker: never
}
export class $AccessorKeyMapping$$Static implements $AccessorKeyMapping {


static "getAllKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorKeyMapping$$Type = ($AccessorKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorKeyMapping_ = $AccessorKeyMapping$$Type;
}}
declare module "vazkii.patchouli.common.advancement.BookOpenTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BookOpenTrigger$TriggerInstance, $BookOpenTrigger$TriggerInstance$$Type} from "vazkii.patchouli.common.advancement.BookOpenTrigger$TriggerInstance"

export class $BookOpenTrigger extends $SimpleCriterionTrigger<($BookOpenTrigger$TriggerInstance)> {
static readonly "INSTANCE": $BookOpenTrigger
static readonly "ID": $ResourceLocation

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: integer): void
public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type): void
public "codec"(): $Codec<($BookOpenTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOpenTrigger$$Type = ($BookOpenTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOpenTrigger_ = $BookOpenTrigger$$Type;
}}
declare module "vazkii.patchouli.mixin.AccessorSmithingTrimRecipe" {
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
declare module "vazkii.patchouli.client.book.BookIcon" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $BookIcon {

 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void

(arg0: $GuiGraphics, arg1: integer, arg2: integer): void
}

export namespace $BookIcon {
function from(arg0: StringJS): $BookIcon
const probejs$$marker: never
}
export class $BookIcon$$Static implements $BookIcon {


static "from"(arg0: StringJS): $BookIcon
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookIcon$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookIcon_ = $BookIcon$$Type;
}}
declare module "vazkii.patchouli.api.BookDrawScreenEvent" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $BookDrawScreenEvent extends $Event {

constructor(arg0: $ResourceLocation$$Type, arg1: $Screen$$Type, arg2: integer, arg3: integer, arg4: float, arg5: $GuiGraphics$$Type)

public "getGraphics"(): $GuiGraphics
public "getScreen"(): $Screen
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getBook"(): $ResourceLocation
public "getPartialTicks"(): float
get "graphics"(): $GuiGraphics
get "screen"(): $Screen
get "mouseX"(): integer
get "mouseY"(): integer
get "book"(): $ResourceLocation
get "partialTicks"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookDrawScreenEvent$$Type = ($BookDrawScreenEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookDrawScreenEvent_ = $BookDrawScreenEvent$$Type;
}}
declare module "vazkii.patchouli.mixin.AccessorSmithingTransformRecipe" {
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
declare module "vazkii.patchouli.client.book.BookCategory" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookIcon, $BookIcon$$Type} from "vazkii.patchouli.client.book.BookIcon"
import {$BookContentsBuilder, $BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$AbstractReadStateHolder, $AbstractReadStateHolder$$Type} from "vazkii.patchouli.client.book.AbstractReadStateHolder"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $BookCategory extends $AbstractReadStateHolder implements $Comparable<($BookCategory)> {

constructor(arg0: $JsonObject$$Type, arg1: $ResourceLocation$$Type, arg2: $Book$$Type)

public "getEntries"(): $List<($BookEntry)>
public "isLocked"(): boolean
public "getDescription"(): StringJS
public "build"(arg0: $BookContentsBuilder$$Type): void
public "getName"(): $MutableComponent
public "compareTo"(arg0: $BookCategory$$Type): integer
public "compareTo"(arg0: any): integer
public "getId"(): $ResourceLocation
public "addEntry"(arg0: $BookEntry$$Type): void
public "getIcon"(): $BookIcon
public "isSecret"(): boolean
public "shouldHide"(): boolean
public "getBook"(): $Book
public "canAdd"(): boolean
public "updateLockStatus"(arg0: boolean): void
public "markReadStateDirty"(): void
public "isRootCategory"(): boolean
public "addChildCategory"(arg0: $BookCategory$$Type): void
public "getParentCategory"(): $BookCategory
get "entries"(): $List<($BookEntry)>
get "locked"(): boolean
get "description"(): StringJS
get "name"(): $MutableComponent
get "id"(): $ResourceLocation
get "icon"(): $BookIcon
get "secret"(): boolean
get "book"(): $Book
get "rootCategory"(): boolean
get "parentCategory"(): $BookCategory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookCategory$$Type = ($BookCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookCategory_ = $BookCategory$$Type;
}}
declare module "vazkii.patchouli.client.book.BookContentsBuilder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookContents, $BookContents$$Type} from "vazkii.patchouli.client.book.BookContents"
import {$ItemStackUtil$StackWrapper, $ItemStackUtil$StackWrapper$$Type} from "vazkii.patchouli.common.util.ItemStackUtil$StackWrapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$BookCategory, $BookCategory$$Type} from "vazkii.patchouli.client.book.BookCategory"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"
import {$BookTemplate, $BookTemplate$$Type} from "vazkii.patchouli.client.book.template.BookTemplate"

export class $BookContentsBuilder {
static readonly "DEFAULT_LANG": StringJS


public "getEntry"(arg0: $ResourceLocation$$Type): $BookEntry
public "getTemplate"(arg0: $ResourceLocation$$Type): $Supplier<($BookTemplate)>
public "getCategory"(arg0: $ResourceLocation$$Type): $BookCategory
public static "loadAndBuildFor"(arg0: $Level$$Type, arg1: $Book$$Type, arg2: boolean): $BookContents
public "addRecipeMapping"(arg0: $ItemStackUtil$StackWrapper$$Type, arg1: $BookEntry$$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContentsBuilder$$Type = ($BookContentsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookContentsBuilder_ = $BookContentsBuilder$$Type;
}}
declare module "vazkii.patchouli.client.book.template.TemplateComponent" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$BookContentsBuilder, $BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$IVariablesAvailableCallback, $IVariablesAvailableCallback$$Type} from "vazkii.patchouli.api.IVariablesAvailableCallback"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IComponentProcessor, $IComponentProcessor$$Type} from "vazkii.patchouli.api.IComponentProcessor"
import {$BookPage, $BookPage$$Type} from "vazkii.patchouli.client.book.BookPage"
import {$IVariable, $IVariable$$Type} from "vazkii.patchouli.api.IVariable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TemplateInclusion, $TemplateInclusion$$Type} from "vazkii.patchouli.client.book.template.TemplateInclusion"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IVariableProvider, $IVariableProvider$$Type} from "vazkii.patchouli.api.IVariableProvider"
import {$GuiBookEntry, $GuiBookEntry$$Type} from "vazkii.patchouli.client.book.gui.GuiBookEntry"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"

export class $TemplateComponent implements $IVariablesAvailableCallback {
 "flag": StringJS
 "advancement": StringJS
 "guard": StringJS
 "x": integer
 "y": integer
 "group": StringJS

constructor()

public "build"(arg0: $BookContentsBuilder$$Type, arg1: $BookPage$$Type, arg2: $BookEntry$$Type, arg3: integer): void
public "compile"(arg0: $Level$$Type, arg1: $IVariableProvider$$Type, arg2: $IComponentProcessor$$Type, arg3: $TemplateInclusion$$Type): void
public "render"(arg0: $GuiGraphics$$Type, arg1: $BookPage$$Type, arg2: integer, arg3: integer, arg4: float): void
public "mouseClicked"(arg0: $BookPage$$Type, arg1: double, arg2: double, arg3: integer): boolean
public "onDisplayed"(arg0: $BookPage$$Type, arg1: $GuiBookEntry$$Type, arg2: integer, arg3: integer): void
public "getVisibleStatus"(arg0: $IComponentProcessor$$Type): boolean
public "onVariablesAvailable"(arg0: $UnaryOperator$$Type<($IVariable)>, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateComponent$$Type = ($TemplateComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplateComponent_ = $TemplateComponent$$Type;
}}
declare module "vazkii.patchouli.api.IVariableProvider" {
import {$IVariable, $IVariable$$Type} from "vazkii.patchouli.api.IVariable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IVariableProvider {

 "has"(arg0: StringJS): boolean
 "get"(arg0: StringJS, arg1: $HolderLookup$Provider$$Type): $IVariable
}

export namespace $IVariableProvider {
const probejs$$marker: never
}
export class $IVariableProvider$$Static implements $IVariableProvider {


 "has"(arg0: StringJS): boolean
 "get"(arg0: StringJS, arg1: $HolderLookup$Provider$$Type): $IVariable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableProvider$$Type = ($IVariableProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableProvider_ = $IVariableProvider$$Type;
}}
declare module "vazkii.patchouli.client.book.BookEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BookContentsBuilder, $BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BookPage, $BookPage$$Type} from "vazkii.patchouli.client.book.BookPage"
import {$BookCategory, $BookCategory$$Type} from "vazkii.patchouli.client.book.BookCategory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BookIcon, $BookIcon$$Type} from "vazkii.patchouli.client.book.BookIcon"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$AbstractReadStateHolder, $AbstractReadStateHolder$$Type} from "vazkii.patchouli.client.book.AbstractReadStateHolder"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $BookEntry extends $AbstractReadStateHolder implements $Comparable<($BookEntry)> {

constructor(arg0: $JsonObject$$Type, arg1: $ResourceLocation$$Type, arg2: $Book$$Type, arg3: StringJS)

public "isLocked"(): boolean
public "build"(arg0: $Level$$Type, arg1: $BookContentsBuilder$$Type): void
public "getName"(): $MutableComponent
public "compareTo"(arg0: $BookEntry$$Type): integer
public "compareTo"(arg0: any): integer
public "getId"(): $ResourceLocation
public "isPriority"(): boolean
public "getIcon"(): $BookIcon
public "getCategory"(): $BookCategory
public "isSecret"(): boolean
public "shouldHide"(): boolean
public "getBook"(): $Book
public "getPages"(): $List<($BookPage)>
public "canAdd"(): boolean
public "getAddedBy"(): StringJS
public "updateLockStatus"(): void
public "addRelevantStack"(arg0: $BookContentsBuilder$$Type, arg1: $ItemStack$$Type, arg2: integer): void
public "markReadStateDirty"(): void
public "initCategory"(arg0: $ResourceLocation$$Type, arg1: $Function$$Type<($ResourceLocation), ($BookCategory$$Type)>): void
public "getEntryColor"(): integer
public "isFoundByQuery"(arg0: StringJS): boolean
public "getPageFromAnchor"(arg0: StringJS): integer
get "locked"(): boolean
get "name"(): $MutableComponent
get "id"(): $ResourceLocation
get "priority"(): boolean
get "icon"(): $BookIcon
get "category"(): $BookCategory
get "secret"(): boolean
get "book"(): $Book
get "pages"(): $List<($BookPage)>
get "addedBy"(): StringJS
get "entryColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookEntry$$Type = ($BookEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookEntry_ = $BookEntry$$Type;
}}
declare module "vazkii.patchouli.common.util.ItemStackUtil$StackWrapper" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $ItemStackUtil$StackWrapper {
readonly "stack": $ItemStack
static readonly "EMPTY_WRAPPER": $ItemStackUtil$StackWrapper

constructor(arg0: $ItemStack$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackUtil$StackWrapper$$Type = ($ItemStackUtil$StackWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackUtil$StackWrapper_ = $ItemStackUtil$StackWrapper$$Type;
}}
declare module "vazkii.patchouli.api.IVariablesAvailableCallback" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$IVariable, $IVariable$$Type} from "vazkii.patchouli.api.IVariable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IVariablesAvailableCallback {

 "onVariablesAvailable"(arg0: $UnaryOperator$$Type<($IVariable)>, arg1: $HolderLookup$Provider$$Type): void

(arg0: $UnaryOperator<($IVariable)>, arg1: $HolderLookup$Provider): void
}

export namespace $IVariablesAvailableCallback {
const probejs$$marker: never
}
export class $IVariablesAvailableCallback$$Static implements $IVariablesAvailableCallback {


 "onVariablesAvailable"(arg0: $UnaryOperator$$Type<($IVariable)>, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariablesAvailableCallback$$Type = ((arg0: $UnaryOperator<($IVariable)>, arg1: $HolderLookup$Provider) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariablesAvailableCallback_ = $IVariablesAvailableCallback$$Type;
}}
declare module "vazkii.patchouli.client.book.BookPage" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$BookContentsBuilder, $BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$GuiBookEntry, $GuiBookEntry$$Type} from "vazkii.patchouli.client.book.gui.GuiBookEntry"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $BookPage {

constructor()

public "build"(arg0: $Level$$Type, arg1: $BookEntry$$Type, arg2: $BookContentsBuilder$$Type, arg3: integer): void
public "i18n"(arg0: StringJS): StringJS
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "canAdd"(arg0: $Book$$Type): boolean
public "onDisplayed"(arg0: $GuiBookEntry$$Type, arg1: integer, arg2: integer): void
public "isPageUnlocked"(): boolean
public "onHidden"(arg0: $GuiBookEntry$$Type): void
public "i18nText"(arg0: StringJS): $Component
get "pageUnlocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPage$$Type = ($BookPage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPage_ = $BookPage$$Type;
}}
declare module "vazkii.patchouli.api.IComponentProcessor" {
import {$IVariableProvider, $IVariableProvider$$Type} from "vazkii.patchouli.api.IVariableProvider"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IVariable, $IVariable$$Type} from "vazkii.patchouli.api.IVariable"

export interface $IComponentProcessor {

 "refresh"(arg0: $Screen$$Type, arg1: integer, arg2: integer): void
 "process"(arg0: $Level$$Type, arg1: StringJS): $IVariable
 "setup"(arg0: $Level$$Type, arg1: $IVariableProvider$$Type): void
 "allowRender"(arg0: StringJS): boolean
}

export namespace $IComponentProcessor {
const probejs$$marker: never
}
export class $IComponentProcessor$$Static implements $IComponentProcessor {


 "refresh"(arg0: $Screen$$Type, arg1: integer, arg2: integer): void
 "process"(arg0: $Level$$Type, arg1: StringJS): $IVariable
 "setup"(arg0: $Level$$Type, arg1: $IVariableProvider$$Type): void
 "allowRender"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentProcessor$$Type = ($IComponentProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentProcessor_ = $IComponentProcessor$$Type;
}}
declare module "vazkii.patchouli.api.PatchouliConfigAccess$TextOverflowMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PatchouliConfigAccess$TextOverflowMode extends $Enum<($PatchouliConfigAccess$TextOverflowMode)> {
static readonly "RESIZE": $PatchouliConfigAccess$TextOverflowMode
static readonly "OVERFLOW": $PatchouliConfigAccess$TextOverflowMode
static readonly "TRUNCATE": $PatchouliConfigAccess$TextOverflowMode


public static "values"(): ($PatchouliConfigAccess$TextOverflowMode)[]
public static "valueOf"(arg0: StringJS): $PatchouliConfigAccess$TextOverflowMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatchouliConfigAccess$TextOverflowMode$$Type = (("overflow") | ("truncate") | ("resize"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatchouliConfigAccess$TextOverflowMode_ = $PatchouliConfigAccess$TextOverflowMode$$Type;
}}
declare module "vazkii.patchouli.xplat.XplatModContainer" {
import {$List, $List$$Type} from "java.util.List"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $XplatModContainer {

 "getPath"(arg0: StringJS): $Path
 "getName"(): StringJS
 "getId"(): StringJS
 "getRootPaths"(): $List<($Path)>
get "name"(): StringJS
get "id"(): StringJS
get "rootPaths"(): $List<($Path)>
}

export namespace $XplatModContainer {
const probejs$$marker: never
}
export class $XplatModContainer$$Static implements $XplatModContainer {


 "getPath"(arg0: StringJS): $Path
 "getName"(): StringJS
 "getId"(): StringJS
 "getRootPaths"(): $List<($Path)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XplatModContainer$$Type = ($XplatModContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XplatModContainer_ = $XplatModContainer$$Type;
}}
declare module "vazkii.patchouli.client.book.BookContents" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemStackUtil$StackWrapper, $ItemStackUtil$StackWrapper$$Type} from "vazkii.patchouli.common.util.ItemStackUtil$StackWrapper"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$BookCategory, $BookCategory$$Type} from "vazkii.patchouli.client.book.BookCategory"
import {$GuiBook, $GuiBook$$Type} from "vazkii.patchouli.client.book.gui.GuiBook"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Deque, $Deque$$Type} from "java.util.Deque"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$AbstractReadStateHolder, $AbstractReadStateHolder$$Type} from "vazkii.patchouli.client.book.AbstractReadStateHolder"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"
import {$BookTemplate, $BookTemplate$$Type} from "vazkii.patchouli.client.book.template.BookTemplate"

export class $BookContents extends $AbstractReadStateHolder {
readonly "pamphletCategory": $BookCategory
readonly "entries": $Map<($ResourceLocation), ($BookEntry)>
 "currentGui": $GuiBook
readonly "categories": $Map<($ResourceLocation), ($BookCategory)>
readonly "guiStack": $Deque<($GuiBook)>
static readonly "addonTemplates": $Map<($ResourceLocation), ($Supplier<($BookTemplate)>)>

constructor(arg0: $Book$$Type, arg1: $ImmutableMap$$Type<($ResourceLocation$$Type), ($BookCategory$$Type)>, arg2: $ImmutableMap$$Type<($ResourceLocation$$Type), ($BookEntry$$Type)>, arg3: $ImmutableMap$$Type<($ItemStackUtil$StackWrapper$$Type), ($Pair$$Type<($BookEntry$$Type), (integer)>)>, arg4: $BookCategory$$Type)

public static "empty"(arg0: $Book$$Type, arg1: $Exception$$Type): $BookContents
public "getException"(): $Exception
public "isErrored"(): boolean
public "setTopEntry"(arg0: $ResourceLocation$$Type, arg1: integer): void
public "getCurrentGui"(): $GuiBook
public "openLexiconGui"(arg0: $GuiBook$$Type, arg1: boolean): void
public "getEntryForStack"(arg0: $ItemStack$$Type): $Pair<($BookEntry), (integer)>
public "checkValidCurrentEntry"(): void
get "exception"(): $Exception
get "errored"(): boolean
get "currentGui"(): $GuiBook
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContents$$Type = ($BookContents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookContents_ = $BookContents$$Type;
}}
declare module "vazkii.patchouli.client.book.template.TemplateInclusion" {
import {$IVariableProvider, $IVariableProvider$$Type} from "vazkii.patchouli.api.IVariableProvider"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IComponentProcessor, $IComponentProcessor$$Type} from "vazkii.patchouli.api.IComponentProcessor"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$IVariable, $IVariable$$Type} from "vazkii.patchouli.api.IVariable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $TemplateInclusion {
 "template": StringJS
 "as": StringJS
 "x": integer
 "y": integer
 "localBindings": $JsonObject

constructor()

public "process"(arg0: $Level$$Type, arg1: $IComponentProcessor$$Type): void
public "isUpreference"(arg0: $IVariable$$Type): boolean
public "qualifyName"(arg0: StringJS): StringJS
public "wrapProvider"(arg0: $IVariableProvider$$Type): $IVariableProvider
public "upperMerge"(arg0: $TemplateInclusion$$Type): void
public "attemptVariableLookup"(arg0: StringJS, arg1: $HolderLookup$Provider$$Type): $IVariable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateInclusion$$Type = ($TemplateInclusion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplateInclusion_ = $TemplateInclusion$$Type;
}}
declare module "vazkii.patchouli.common.item.ItemModBook" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $ItemModBook extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getName"(arg0: $ItemStack$$Type): $Component
public static "getCompletion"(arg0: $ItemStack$$Type): float
public static "forBook"(arg0: $ResourceLocation$$Type): $ItemStack
public static "forBook"(arg0: $Book$$Type): $ItemStack
public static "getBook"(arg0: $ItemStack$$Type): $Book
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModBook$$Type = ($ItemModBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModBook_ = $ItemModBook$$Type;
}}
declare module "vazkii.patchouli.mixin.client.AccessorClientAdvancements" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$AdvancementProgress, $AdvancementProgress$$Type} from "net.minecraft.advancements.AdvancementProgress"

export interface $AccessorClientAdvancements {

 "getProgress"(): $Map<($AdvancementHolder), ($AdvancementProgress)>

(): $Map$$Type<($AdvancementHolder$$Type), ($AdvancementProgress$$Type)>
get "progress"(): $Map<($AdvancementHolder), ($AdvancementProgress)>
}

export namespace $AccessorClientAdvancements {
const probejs$$marker: never
}
export class $AccessorClientAdvancements$$Static implements $AccessorClientAdvancements {


 "getProgress"(): $Map<($AdvancementHolder), ($AdvancementProgress)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorClientAdvancements$$Type = (() => $Map$$Type<($AdvancementHolder$$Type), ($AdvancementProgress$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorClientAdvancements_ = $AccessorClientAdvancements$$Type;
}}
declare module "vazkii.patchouli.client.book.template.BookTemplate" {
import {$BookContentsBuilder, $BookContentsBuilder$$Type} from "vazkii.patchouli.client.book.BookContentsBuilder"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BookPage, $BookPage$$Type} from "vazkii.patchouli.client.book.BookPage"
import {$TemplateComponent, $TemplateComponent$$Type} from "vazkii.patchouli.client.book.template.TemplateComponent"
import {$TemplateInclusion, $TemplateInclusion$$Type} from "vazkii.patchouli.client.book.template.TemplateInclusion"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IVariableProvider, $IVariableProvider$$Type} from "vazkii.patchouli.api.IVariableProvider"
import {$GuiBookEntry, $GuiBookEntry$$Type} from "vazkii.patchouli.client.book.gui.GuiBookEntry"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $BookTemplate {
static readonly "componentTypes": $HashMap<($ResourceLocation), ($Class<($TemplateComponent)>)>

constructor()

public "build"(arg0: $BookContentsBuilder$$Type, arg1: $BookPage$$Type, arg2: $BookEntry$$Type, arg3: integer): void
public "compile"(arg0: $Level$$Type, arg1: $BookContentsBuilder$$Type, arg2: $IVariableProvider$$Type): void
public "render"(arg0: $GuiGraphics$$Type, arg1: $BookPage$$Type, arg2: integer, arg3: integer, arg4: float): void
public "mouseClicked"(arg0: $BookPage$$Type, arg1: double, arg2: double, arg3: integer): boolean
public static "registerComponent"(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<($TemplateComponent$$Type)>): void
public static "createTemplate"(arg0: $Book$$Type, arg1: $BookContentsBuilder$$Type, arg2: StringJS, arg3: $TemplateInclusion$$Type): $BookTemplate
public "onDisplayed"(arg0: $BookPage$$Type, arg1: $GuiBookEntry$$Type, arg2: integer, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookTemplate$$Type = ($BookTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookTemplate_ = $BookTemplate$$Type;
}}
declare module "vazkii.patchouli.api.IVariable" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$List, $List$$Type} from "java.util.List"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IVariable {

 "unwrap"(): $JsonElement
 "as"<T>(arg0: $Class$$Type<(T)>): T
 "as"<T>(arg0: $Class$$Type<(T)>, arg1: T): T
 "asList"(arg0: $HolderLookup$Provider$$Type): $List<($IVariable)>
 "asStream"(arg0: $HolderLookup$Provider$$Type): $Stream<($IVariable)>
 "asNumber"(arg0: number): number
 "asNumber"(): number
 "asBoolean"(): boolean
 "asBoolean"(arg0: boolean): boolean
 "asString"(arg0: StringJS): StringJS
 "asString"(): StringJS
 "asStreamOrSingleton"(arg0: $HolderLookup$Provider$$Type): $Stream<($IVariable)>
 "asListOrSingleton"(arg0: $HolderLookup$Provider$$Type): $List<($IVariable)>
}

export namespace $IVariable {
function wrap(arg0: boolean): $IVariable
function wrap(arg0: number, arg1: $HolderLookup$Provider$$Type): $IVariable
function wrap(arg0: number): $IVariable
function wrap(arg0: $JsonElement$$Type, arg1: $HolderLookup$Provider$$Type): $IVariable
function wrap(arg0: StringJS, arg1: $HolderLookup$Provider$$Type): $IVariable
function wrap(arg0: StringJS): $IVariable
function wrap(arg0: boolean, arg1: $HolderLookup$Provider$$Type): $IVariable
function from<T>(arg0: T, arg1: $HolderLookup$Provider$$Type): $IVariable
function empty(): $IVariable
function wrapList(arg0: $Iterable$$Type<($IVariable$$Type)>, arg1: $HolderLookup$Provider$$Type): $IVariable
const probejs$$marker: never
}
export class $IVariable$$Static implements $IVariable {


 "unwrap"(): $JsonElement
 "as"<T>(arg0: $Class$$Type<(T)>): T
 "as"<T>(arg0: $Class$$Type<(T)>, arg1: T): T
 "asList"(arg0: $HolderLookup$Provider$$Type): $List<($IVariable)>
/**
 * 
 * @deprecated
 */
static "wrap"(arg0: boolean): $IVariable
static "wrap"(arg0: number, arg1: $HolderLookup$Provider$$Type): $IVariable
/**
 * 
 * @deprecated
 */
static "wrap"(arg0: number): $IVariable
static "wrap"(arg0: $JsonElement$$Type, arg1: $HolderLookup$Provider$$Type): $IVariable
static "wrap"(arg0: StringJS, arg1: $HolderLookup$Provider$$Type): $IVariable
/**
 * 
 * @deprecated
 */
static "wrap"(arg0: StringJS): $IVariable
static "wrap"(arg0: boolean, arg1: $HolderLookup$Provider$$Type): $IVariable
static "from"<T>(arg0: T, arg1: $HolderLookup$Provider$$Type): $IVariable
static "empty"(): $IVariable
static "wrapList"(arg0: $Iterable$$Type<($IVariable$$Type)>, arg1: $HolderLookup$Provider$$Type): $IVariable
 "asStream"(arg0: $HolderLookup$Provider$$Type): $Stream<($IVariable)>
 "asNumber"(arg0: number): number
 "asNumber"(): number
 "asBoolean"(): boolean
 "asBoolean"(arg0: boolean): boolean
 "asString"(arg0: StringJS): StringJS
 "asString"(): StringJS
 "asStreamOrSingleton"(arg0: $HolderLookup$Provider$$Type): $Stream<($IVariable)>
 "asListOrSingleton"(arg0: $HolderLookup$Provider$$Type): $List<($IVariable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariable$$Type = ($IVariable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariable_ = $IVariable$$Type;
}}
declare module "vazkii.patchouli.api.BookContentsReloadEvent" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $BookContentsReloadEvent extends $Event {

constructor(arg0: $ResourceLocation$$Type)

public "getBook"(): $ResourceLocation
get "book"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookContentsReloadEvent$$Type = ($BookContentsReloadEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookContentsReloadEvent_ = $BookContentsReloadEvent$$Type;
}}
declare module "vazkii.patchouli.api.IComponentRenderContext" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"

export interface $IComponentRenderContext {

 "addWidget"(arg0: $AbstractWidget$$Type, arg1: integer): void
 "getFont"(): $Style
 "getGui"(): $Screen
/**
 * 
 * @deprecated
 */
 "registerButton"(arg0: $Button$$Type, arg1: integer, arg2: $Runnable$$Type): void
 "getTextColor"(): integer
 "renderItemStack"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$$Type): void
 "renderIngredient"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Ingredient$$Type): void
 "isAreaHovered"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "getBookTexture"(): $ResourceLocation
 "getHeaderColor"(): integer
 "getTicksInBook"(): integer
/**
 * 
 * @deprecated
 */
 "setHoverTooltip"(arg0: $List$$Type<(StringJS)>): void
 "navigateToEntry"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: boolean): boolean
 "getCraftingTexture"(): $ResourceLocation
 "setHoverTooltipComponents"(arg0: $List$$Type<($Component$$Type)>): void
get "font"(): $Style
get "gui"(): $Screen
get "textColor"(): integer
get "bookTexture"(): $ResourceLocation
get "headerColor"(): integer
get "ticksInBook"(): integer
set "hoverTooltip"(value: $List$$Type<(StringJS)>)
get "craftingTexture"(): $ResourceLocation
set "hoverTooltipComponents"(value: $List$$Type<($Component$$Type)>)
}

export namespace $IComponentRenderContext {
const probejs$$marker: never
}
export class $IComponentRenderContext$$Static implements $IComponentRenderContext {


 "addWidget"(arg0: $AbstractWidget$$Type, arg1: integer): void
 "getFont"(): $Style
 "getGui"(): $Screen
/**
 * 
 * @deprecated
 */
 "registerButton"(arg0: $Button$$Type, arg1: integer, arg2: $Runnable$$Type): void
 "getTextColor"(): integer
 "renderItemStack"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$$Type): void
 "renderIngredient"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Ingredient$$Type): void
 "isAreaHovered"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "getBookTexture"(): $ResourceLocation
 "getHeaderColor"(): integer
 "getTicksInBook"(): integer
/**
 * 
 * @deprecated
 */
 "setHoverTooltip"(arg0: $List$$Type<(StringJS)>): void
 "navigateToEntry"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: boolean): boolean
 "getCraftingTexture"(): $ResourceLocation
 "setHoverTooltipComponents"(arg0: $List$$Type<($Component$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComponentRenderContext$$Type = ($IComponentRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComponentRenderContext_ = $IComponentRenderContext$$Type;
}}
declare module "vazkii.patchouli.client.book.gui.GuiBook" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$$Type} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"
import {$EntryDisplayState, $EntryDisplayState$$Type} from "vazkii.patchouli.client.book.EntryDisplayState"

export class $GuiBook extends $Screen {
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
static readonly "TEXT_LINE_HEIGHT": integer
static readonly "TOP_PADDING": integer
static readonly "MAX_BOOKMARKS": integer
 "ticksInBook": integer
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
static readonly "FULL_HEIGHT": integer
readonly "book": $Book
static readonly "RIGHT_PAGE_X": integer
 "title": $Component
static readonly "LEFT_PAGE_X": integer
readonly "renderables": $List<($Renderable)>
static readonly "PAGE_HEIGHT": integer
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "maxScale": integer
 "bookLeft": integer
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
static readonly "PAGE_WIDTH": integer
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "bookTop": integer
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "FULL_WIDTH": integer
 "font": $Font

constructor(arg0: $Book$$Type, arg1: $Component$$Type)

public "tick"(): void
public "init"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "getSpread"(): integer
public static "openWebLink"(arg0: $Screen$$Type, arg1: StringJS): void
public "isPauseScreen"(): boolean
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "setTooltip"(...arg0: ($Component$$Type)[]): void
public "setTooltip"(arg0: $List$$Type<($Component$$Type)>): void
public "getMinecraft"(): $Minecraft
public "getRelativeX"(arg0: double): double
public "getRelativeY"(arg0: double): double
public "canBeOpened"(): boolean
public "renderBackground"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "drawProgressBar"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer, arg4: $Predicate$$Type<($BookEntry)>): void
public "addRenderableWidget"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T
public static "drawPageFiller"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer): void
public static "drawPageFiller"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type): void
public static "drawSeparator"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer): void
public "addBookmarkButtons"(): void
public static "drawFromTexture"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public "handleButtonArrow"(arg0: $Button$$Type): void
public "isMouseInRelativeRange"(arg0: double, arg1: double, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "removeDrawablesIn"(arg0: $Collection$$Type<(any)>): void
public "drawCenteredStringNoShadow"(arg0: $GuiGraphics$$Type, arg1: $FormattedCharSequence$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "drawCenteredStringNoShadow"(arg0: $GuiGraphics$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer): void
public "onFirstOpened"(): void
public "bookmarkThis"(): void
public static "drawLock"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer): void
public static "drawMarking"(arg0: $GuiGraphics$$Type, arg1: $Book$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $EntryDisplayState$$Type): void
public "removeDrawablesIf"(arg0: $Predicate$$Type<($Renderable)>): void
public "displayLexiconGui"(arg0: $GuiBook$$Type, arg1: boolean): void
public "mouseClickedScaled"(arg0: double, arg1: double, arg2: integer): boolean
public static "playBookFlipSound"(arg0: $Book$$Type): void
public "canSeeBackButton"(): boolean
public "canSeePageButton"(arg0: boolean): boolean
public "handleButtonBookmark"(arg0: $Button$$Type): void
public "setTooltipStack"(arg0: $ItemStack$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
get "spread"(): integer
get "pauseScreen"(): boolean
set "tooltip"(value: ($Component$$Type)[])
set "tooltip"(value: $List$$Type<($Component$$Type)>)
get "minecraft"(): $Minecraft
set "tooltipStack"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiBook$$Type = ($GuiBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiBook_ = $GuiBook$$Type;
}}
declare module "vazkii.patchouli.mixin.client.AccessorMultiBufferSource" {
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $AccessorMultiBufferSource {

 "getFixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
 "getFallbackBuffer"(): $ByteBufferBuilder
get "fixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
get "fallbackBuffer"(): $ByteBufferBuilder
}

export namespace $AccessorMultiBufferSource {
const probejs$$marker: never
}
export class $AccessorMultiBufferSource$$Static implements $AccessorMultiBufferSource {


 "getFixedBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
 "getFallbackBuffer"(): $ByteBufferBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMultiBufferSource$$Type = ($AccessorMultiBufferSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMultiBufferSource_ = $AccessorMultiBufferSource$$Type;
}}
declare module "vazkii.patchouli.client.book.AbstractReadStateHolder" {
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$EntryDisplayState, $EntryDisplayState$$Type} from "vazkii.patchouli.client.book.EntryDisplayState"

export class $AbstractReadStateHolder {

constructor()

public "markReadStateDirty"(): void
public "getReadState"(): $EntryDisplayState
public static "mostImportantState"(arg0: $Stream$$Type<($EntryDisplayState$$Type)>): $EntryDisplayState
get "readState"(): $EntryDisplayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractReadStateHolder$$Type = ($AbstractReadStateHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractReadStateHolder_ = $AbstractReadStateHolder$$Type;
}}
declare module "vazkii.patchouli.client.book.gui.GuiBookEntry" {
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$$Type} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$GuiBook, $GuiBook$$Type} from "vazkii.patchouli.client.book.gui.GuiBook"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$IComponentRenderContext, $IComponentRenderContext$$Type} from "vazkii.patchouli.api.IComponentRenderContext"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BookEntry, $BookEntry$$Type} from "vazkii.patchouli.client.book.BookEntry"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"
import {$Book, $Book$$Type} from "vazkii.patchouli.common.book.Book"

export class $GuiBookEntry extends $GuiBook implements $IComponentRenderContext {
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
static readonly "TEXT_LINE_HEIGHT": integer
static readonly "TOP_PADDING": integer
static readonly "MAX_BOOKMARKS": integer
 "ticksInBook": integer
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
static readonly "FULL_HEIGHT": integer
readonly "book": $Book
static readonly "RIGHT_PAGE_X": integer
 "title": $Component
static readonly "LEFT_PAGE_X": integer
readonly "renderables": $List<($Renderable)>
static readonly "PAGE_HEIGHT": integer
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "maxScale": integer
 "bookLeft": integer
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
static readonly "PAGE_WIDTH": integer
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "bookTop": integer
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "FULL_WIDTH": integer
 "font": $Font

constructor(arg0: $Book$$Type, arg1: $BookEntry$$Type)
constructor(arg0: $Book$$Type, arg1: $BookEntry$$Type, arg2: integer)

public "getEntry"(): $BookEntry
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "init"(): void
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "addWidget"(arg0: $AbstractWidget$$Type, arg1: integer): void
public "getFont"(): $Style
public "getGui"(): $Screen
public "registerButton"(arg0: $Button$$Type, arg1: integer, arg2: $Runnable$$Type): void
public "canBeOpened"(): boolean
public "getTextColor"(): integer
public "renderItemStack"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $ItemStack$$Type): void
public "renderIngredient"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Ingredient$$Type): void
public static "displayOrBookmark"(arg0: $GuiBook$$Type, arg1: $BookEntry$$Type): void
public "onFirstOpened"(): void
public "bookmarkThis"(): void
public "isAreaHovered"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
public "getBookTexture"(): $ResourceLocation
public "getHeaderColor"(): integer
public "getTicksInBook"(): integer
public "mouseClickedScaled"(arg0: double, arg1: double, arg2: integer): boolean
public "setHoverTooltip"(arg0: $List$$Type<(StringJS)>): void
public "navigateToEntry"(arg0: $ResourceLocation$$Type, arg1: integer, arg2: boolean): boolean
public "getCraftingTexture"(): $ResourceLocation
public "setHoverTooltipComponents"(arg0: $List$$Type<($Component$$Type)>): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
get "entry"(): $BookEntry
get "font"(): $Style
get "gui"(): $Screen
get "textColor"(): integer
get "bookTexture"(): $ResourceLocation
get "headerColor"(): integer
get "ticksInBook"(): integer
set "hoverTooltip"(value: $List$$Type<(StringJS)>)
get "craftingTexture"(): $ResourceLocation
set "hoverTooltipComponents"(value: $List$$Type<($Component$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiBookEntry$$Type = ($GuiBookEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiBookEntry_ = $GuiBookEntry$$Type;
}}
declare module "vazkii.patchouli.common.book.Book" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$XplatModContainer, $XplatModContainer$$Type} from "vazkii.patchouli.xplat.XplatModContainer"
import {$BookIcon, $BookIcon$$Type} from "vazkii.patchouli.client.book.BookIcon"
import {$BookContents, $BookContents$$Type} from "vazkii.patchouli.client.book.BookContents"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$PatchouliConfigAccess$TextOverflowMode, $PatchouliConfigAccess$TextOverflowMode$$Type} from "vazkii.patchouli.api.PatchouliConfigAccess$TextOverflowMode"

export class $Book {
readonly "isPamphlet": boolean
readonly "creativeTab": $ResourceLocation
readonly "showProgress": boolean
readonly "landingText": StringJS
readonly "nameplateColor": integer
readonly "fillerTexture": $ResourceLocation
readonly "headerColor": integer
readonly "bookTexture": $ResourceLocation
readonly "model": $ResourceLocation
readonly "id": $ResourceLocation
readonly "showToasts": boolean
readonly "overflowMode": $PatchouliConfigAccess$TextOverflowMode
readonly "owner": $XplatModContainer
readonly "pauseGame": boolean
readonly "macros": $Map<(StringJS), (StringJS)>
readonly "isExternal": boolean
readonly "openSound": $ResourceLocation
readonly "useBlockyFont": boolean
readonly "advancementsTab": $ResourceLocation
readonly "linkColor": integer
readonly "progressBarColor": integer
readonly "textColor": integer
readonly "version": StringJS
readonly "i18n": boolean
readonly "flipSound": $ResourceLocation
readonly "subtitle": StringJS
readonly "progressBarBackground": integer
readonly "name": StringJS
readonly "indexIconRaw": StringJS
readonly "linkHoverColor": integer
readonly "noBook": boolean
readonly "craftingTexture": $ResourceLocation

constructor(arg0: $JsonObject$$Type, arg1: $XplatModContainer$$Type, arg2: $ResourceLocation$$Type, arg3: boolean)

public "getContents"(): $BookContents
public "markUpdated"(): void
public "getIcon"(): $BookIcon
public "popUpdated"(): boolean
public "getBookItem"(): $ItemStack
public "reloadContents"(arg0: $Level$$Type, arg1: boolean): void
public "reloadLocks"(arg0: boolean): void
public "getFontStyle"(): $Style
public "getOwnerName"(): StringJS
public "getSubtitle"(): $MutableComponent
public "advancementsEnabled"(): boolean
get "contents"(): $BookContents
get "icon"(): $BookIcon
get "bookItem"(): $ItemStack
get "fontStyle"(): $Style
get "ownerName"(): StringJS
get "subtitle"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Book$$Type = ($Book);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Book_ = $Book$$Type;
}}
declare module "vazkii.patchouli.mixin.client.AccessorScreen" {
import {$List, $List$$Type} from "java.util.List"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export interface $AccessorScreen {

 "getRenderables"(): $List<($Renderable)>
 "getNarratables"(): $List<($NarratableEntry)>
get "renderables"(): $List<($Renderable)>
get "narratables"(): $List<($NarratableEntry)>
}

export namespace $AccessorScreen {
const probejs$$marker: never
}
export class $AccessorScreen$$Static implements $AccessorScreen {


 "getRenderables"(): $List<($Renderable)>
 "getNarratables"(): $List<($NarratableEntry)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorScreen$$Type = ($AccessorScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorScreen_ = $AccessorScreen$$Type;
}}
