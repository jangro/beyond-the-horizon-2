declare module "snownee.kiwi.shadowed.com.ezylang.evalex.parser.ASTNode" {
import {$List, $List$$Type} from "java.util.List"
import {$Token, $Token$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.parser.Token"

export class $ASTNode {

constructor(arg0: $Token$$Type, ...arg1: ($ASTNode$$Type)[])

public "getToken"(): $Token
public "getParameters"(): $List<($ASTNode)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "toJSON"(): StringJS
get "token"(): $Token
get "parameters"(): $List<($ASTNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ASTNode$$Type = ($ASTNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ASTNode_ = $ASTNode$$Type;
}}
declare module "snownee.kiwi.customization.placement.PlaceChoices$Limit" {
import {$ParsedProtoTag, $ParsedProtoTag$$Type} from "snownee.kiwi.customization.placement.ParsedProtoTag"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PlaceChoices$Limit extends $Record {
static readonly "CODEC": $Codec<($PlaceChoices$Limit)>

constructor(type: StringJS, tags: $List$$Type<($ParsedProtoTag$$Type)>)

public "tags"(): $List<($ParsedProtoTag)>
public "type"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
public "testFace"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceChoices$Limit$$Type = ({"tags"?: $List$$Type<($ParsedProtoTag$$Type)>, "type"?: StringJS}) | ([tags?: $List$$Type<($ParsedProtoTag$$Type)>, type?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaceChoices$Limit_ = $PlaceChoices$Limit$$Type;
}}
declare module "snownee.kiwi.recipe.crafting.KiwiShapelessRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$KiwiShapelessRecipe, $KiwiShapelessRecipe$$Type} from "snownee.kiwi.recipe.crafting.KiwiShapelessRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $KiwiShapelessRecipe$Serializer implements $RecipeSerializer<($KiwiShapelessRecipe)> {
static readonly "CODEC": $MapCodec<($KiwiShapelessRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($KiwiShapelessRecipe)>

constructor()

public "codec"(): $MapCodec<($KiwiShapelessRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($KiwiShapelessRecipe)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $KiwiShapelessRecipe
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $KiwiShapelessRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KiwiShapelessRecipe$Serializer$$Type = ($KiwiShapelessRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KiwiShapelessRecipe$Serializer_ = $KiwiShapelessRecipe$Serializer$$Type;
}}
declare module "snownee.kiwi.customization.shape.UnbakedShape" {
import {$ShapeGenerator, $ShapeGenerator$$Type} from "snownee.kiwi.customization.shape.ShapeGenerator"
import {$BakingContext, $BakingContext$$Type} from "snownee.kiwi.customization.shape.BakingContext"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $UnbakedShape {

 "bake"(arg0: $BakingContext$$Type): $ShapeGenerator
 "dependencies"(): $Stream<($UnbakedShape)>
}

export namespace $UnbakedShape {
const probejs$$marker: never
}
export class $UnbakedShape$$Static implements $UnbakedShape {


 "bake"(arg0: $BakingContext$$Type): $ShapeGenerator
 "dependencies"(): $Stream<($UnbakedShape)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnbakedShape$$Type = ($UnbakedShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnbakedShape_ = $UnbakedShape$$Type;
}}
declare module "snownee.kiwi.util.resource.OneTimeLoader$Context" {
import {$Expression, $Expression$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.Expression"

export class $OneTimeLoader$Context {

constructor()

public "getExpression"(arg0: StringJS): $Expression
public "addDisabledNamespace"(arg0: StringJS): void
public "isNamespaceDisabled"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OneTimeLoader$Context$$Type = ($OneTimeLoader$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OneTimeLoader$Context_ = $OneTimeLoader$Context$$Type;
}}
declare module "snownee.kiwi.customization.item.loader.ItemDefinitionProperties$PartialVanillaProperties" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ItemDefinitionProperties$PartialVanillaProperties extends $Record {
static readonly "MAP_CODEC": $MapCodec<($ItemDefinitionProperties$PartialVanillaProperties)>

constructor(maxStackSize: $Optional$$Type<(integer)>, maxDamage: $Optional$$Type<(integer)>, craftingRemainingItem: $Optional$$Type<($ResourceKey$$Type<($Item$$Type)>)>, components: $Optional$$Type<($DataComponentMap$$Type)>)

public "maxStackSize"(): $Optional<(integer)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "merge"(arg0: $ItemDefinitionProperties$PartialVanillaProperties$$Type): $ItemDefinitionProperties$PartialVanillaProperties
public "components"(): $Optional<($DataComponentMap)>
public "maxDamage"(): $Optional<(integer)>
public "craftingRemainingItem"(): $Optional<($ResourceKey<($Item)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDefinitionProperties$PartialVanillaProperties$$Type = ({"maxDamage"?: (integer)?, "maxStackSize"?: (integer)?, "components"?: ($DataComponentMap$$Type)?, "craftingRemainingItem"?: ($ResourceKey$$Type<($Item$$Type)>)?}) | ([maxDamage?: (integer)?, maxStackSize?: (integer)?, components?: ($DataComponentMap$$Type)?, craftingRemainingItem?: ($ResourceKey$$Type<($Item$$Type)>)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDefinitionProperties$PartialVanillaProperties_ = $ItemDefinitionProperties$PartialVanillaProperties$$Type;
}}
declare module "snownee.kiwi.customization.block.loader.KBlockTemplate$Type" {
import {$BlockFundamentals$CodecCreationContext, $BlockFundamentals$CodecCreationContext$$Type} from "snownee.kiwi.customization.block.BlockFundamentals$CodecCreationContext"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$KBlockTemplate, $KBlockTemplate$$Type} from "snownee.kiwi.customization.block.loader.KBlockTemplate"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $KBlockTemplate$Type<T extends $KBlockTemplate> extends $Record {

constructor(codec: $Function$$Type<($BlockFundamentals$CodecCreationContext), ($MapCodec$$Type<(T)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $Function<($BlockFundamentals$CodecCreationContext), ($MapCodec<(T)>)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.KiwiBlockTemplate
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.KiwiBlockTemplateTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KBlockTemplate$Type$$Type<T> = (Special.KiwiBlockTemplate) | ({"codec"?: $Function$$Type<($BlockFundamentals$CodecCreationContext$$Type), ($MapCodec$$Type<(any)>)>}) | ([codec?: $Function$$Type<($BlockFundamentals$CodecCreationContext$$Type), ($MapCodec$$Type<(any)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KBlockTemplate$Type_<T> = $KBlockTemplate$Type$$Type<(T)>;
}}
declare module "snownee.kiwi.customization.duck.KBlockProperties" {
import {$KBlockSettings, $KBlockSettings$$Type} from "snownee.kiwi.customization.block.KBlockSettings"

export interface $KBlockProperties {

 "kiwi$getSettings"(): $KBlockSettings
 "kiwi$setSettings"(arg0: $KBlockSettings$$Type): void
}

export namespace $KBlockProperties {
const probejs$$marker: never
}
export class $KBlockProperties$$Static implements $KBlockProperties {


 "kiwi$getSettings"(): $KBlockSettings
 "kiwi$setSettings"(arg0: $KBlockSettings$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KBlockProperties$$Type = ($KBlockProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KBlockProperties_ = $KBlockProperties$$Type;
}}
declare module "snownee.kiwi.customization.block.KBlockSettings$Builder" {
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$KBlockComponent$Type, $KBlockComponent$Type$$Type} from "snownee.kiwi.customization.block.component.KBlockComponent$Type"
import {$KBlockComponent, $KBlockComponent$$Type} from "snownee.kiwi.customization.block.component.KBlockComponent"
import {$ShapeGenerator, $ShapeGenerator$$Type} from "snownee.kiwi.customization.shape.ShapeGenerator"
import {$BlockShapeType, $BlockShapeType$$Type} from "snownee.kiwi.customization.shape.BlockShapeType"
import {$CanSurviveHandler, $CanSurviveHandler$$Type} from "snownee.kiwi.customization.block.behavior.CanSurviveHandler"
import {$GlassType, $GlassType$$Type} from "snownee.kiwi.customization.block.GlassType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $KBlockSettings$Builder {


public "shape"(arg0: $BlockShapeType$$Type, arg1: $ShapeGenerator$$Type): $KBlockSettings$Builder
public "configure"(arg0: $Consumer$$Type<($BlockBehaviour$Properties)>): $KBlockSettings$Builder
public "get"(): $BlockBehaviour$Properties
public "component"(arg0: $KBlockComponent$$Type): $KBlockSettings$Builder
public "glassType"(arg0: $GlassType$$Type): $KBlockSettings$Builder
public "noOcclusion"(): $KBlockSettings$Builder
public "hasComponent"(arg0: $KBlockComponent$Type$$Type<(any)>): boolean
public "noCollision"(): $KBlockSettings$Builder
public "horizontal"(): $KBlockSettings$Builder
public "directional"(): $KBlockSettings$Builder
public "removeComponent"(arg0: $KBlockComponent$Type$$Type<(any)>): $KBlockSettings$Builder
public "customPlacement"(): $KBlockSettings$Builder
public "canSurviveHandler"(arg0: $CanSurviveHandler$$Type): $KBlockSettings$Builder
public "getAnalogOutputSignal"(): $ToIntFunction<($BlockState)>
public "waterLoggable"(): $KBlockSettings$Builder
get "analogOutputSignal"(): $ToIntFunction<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KBlockSettings$Builder$$Type = ($KBlockSettings$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KBlockSettings$Builder_ = $KBlockSettings$Builder$$Type;
}}
declare module "snownee.kiwi.shadowed.com.ezylang.evalex.config.ExpressionConfiguration$ExpressionConfigurationBuilder" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$MathContext, $MathContext$$Type} from "java.math.MathContext"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$FunctionDictionaryIfc, $FunctionDictionaryIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.config.FunctionDictionaryIfc"
import {$OperatorDictionaryIfc, $OperatorDictionaryIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.config.OperatorDictionaryIfc"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$EvaluationValue, $EvaluationValue$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.EvaluationValue"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$ExpressionConfiguration, $ExpressionConfiguration$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.config.ExpressionConfiguration"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$DataAccessorIfc, $DataAccessorIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.DataAccessorIfc"
import {$EvaluationValueConverterIfc, $EvaluationValueConverterIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.conversion.EvaluationValueConverterIfc"

export class $ExpressionConfiguration$ExpressionConfigurationBuilder {


public "zoneId"(arg0: $ZoneId$$Type): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "build"(): $ExpressionConfiguration
public "stripTrailingZeros"(arg0: boolean): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "toString"(): StringJS
public "locale"(arg0: $Locale$$Type): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "mathContext"(arg0: $MathContext$$Type): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "binaryAllowed"(arg0: boolean): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "arraysAllowed"(arg0: boolean): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "operatorDictionary"(arg0: $OperatorDictionaryIfc$$Type): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "functionDictionary"(arg0: $FunctionDictionaryIfc$$Type): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "dataAccessorSupplier"(arg0: $Supplier$$Type<($DataAccessorIfc$$Type)>): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "defaultConstants"(arg0: $Map$$Type<(StringJS), ($EvaluationValue$$Type)>): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "structuresAllowed"(arg0: boolean): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "powerOfPrecedence"(arg0: integer): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "decimalPlacesResult"(arg0: integer): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "decimalPlacesRounding"(arg0: integer): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "dateTimeFormatters"(arg0: $List$$Type<($DateTimeFormatter$$Type)>): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "singleQuoteStringLiteralsAllowed"(arg0: boolean): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "implicitMultiplicationAllowed"(arg0: boolean): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "allowOverwriteConstants"(arg0: boolean): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "evaluationValueConverter"(arg0: $EvaluationValueConverterIfc$$Type): $ExpressionConfiguration$ExpressionConfigurationBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpressionConfiguration$ExpressionConfigurationBuilder$$Type = ($ExpressionConfiguration$ExpressionConfigurationBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExpressionConfiguration$ExpressionConfigurationBuilder_ = $ExpressionConfiguration$ExpressionConfigurationBuilder$$Type;
}}
declare module "snownee.kiwi.customization.shape.BakingContext" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ShapeGenerator, $ShapeGenerator$$Type} from "snownee.kiwi.customization.shape.ShapeGenerator"

export interface $BakingContext {

 "getShape"(arg0: $ResourceLocation$$Type): $ShapeGenerator

(arg0: $ResourceLocation): $ShapeGenerator$$Type
}

export namespace $BakingContext {
const probejs$$marker: never
}
export class $BakingContext$$Static implements $BakingContext {


 "getShape"(arg0: $ResourceLocation$$Type): $ShapeGenerator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakingContext$$Type = ((arg0: $ResourceLocation) => $ShapeGenerator$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakingContext_ = $BakingContext$$Type;
}}
declare module "snownee.kiwi.shadowed.com.ezylang.evalex.data.conversion.EvaluationValueConverterIfc" {
import {$EvaluationValue, $EvaluationValue$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.EvaluationValue"
import {$ExpressionConfiguration, $ExpressionConfiguration$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.config.ExpressionConfiguration"

export interface $EvaluationValueConverterIfc {

 "convertObject"(arg0: any, arg1: $ExpressionConfiguration$$Type): $EvaluationValue

(arg0: any, arg1: $ExpressionConfiguration): $EvaluationValue$$Type
}

export namespace $EvaluationValueConverterIfc {
const probejs$$marker: never
}
export class $EvaluationValueConverterIfc$$Static implements $EvaluationValueConverterIfc {


 "convertObject"(arg0: any, arg1: $ExpressionConfiguration$$Type): $EvaluationValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvaluationValueConverterIfc$$Type = ((arg0: any, arg1: $ExpressionConfiguration) => $EvaluationValue$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EvaluationValueConverterIfc_ = $EvaluationValueConverterIfc$$Type;
}}
declare module "snownee.kiwi.customization.block.component.KBlockComponent" {
import {$KBlockComponent$Type, $KBlockComponent$Type$$Type} from "snownee.kiwi.customization.block.component.KBlockComponent$Type"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$BlockBehaviorRegistry, $BlockBehaviorRegistry$$Type} from "snownee.kiwi.customization.block.behavior.BlockBehaviorRegistry"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StateDefinition$Builder, $StateDefinition$Builder$$Type} from "net.minecraft.world.level.block.state.StateDefinition$Builder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$KBlockSettings, $KBlockSettings$$Type} from "snownee.kiwi.customization.block.KBlockSettings"

export interface $KBlockComponent {

 "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
 "type"(): $KBlockComponent$Type<(any)>
 "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
 "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
 "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
 "addBehaviors"(arg0: $BlockBehaviorRegistry$$Type): void
 "injectProperties"(arg0: $Block$$Type, arg1: $StateDefinition$Builder$$Type<($Block$$Type), ($BlockState$$Type)>): void
 "getStateForPlacement"(arg0: $KBlockSettings$$Type, arg1: $BlockState$$Type, arg2: $BlockPlaceContext$$Type): $BlockState
 "hasAnalogOutputSignal"(): boolean
 "getAnalogOutputSignal"(arg0: $BlockState$$Type): integer
 "registerDefaultState"(arg0: $BlockState$$Type): $BlockState
 "getHorizontalFacing"(arg0: $BlockState$$Type): $Direction
 "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
}

export namespace $KBlockComponent {
const CODEC: $Codec<($KBlockComponent)>
const probejs$$marker: never
}
export class $KBlockComponent$$Static implements $KBlockComponent {
static readonly "CODEC": $Codec<($KBlockComponent)>


 "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
 "type"(): $KBlockComponent$Type<(any)>
 "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
 "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
 "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
 "addBehaviors"(arg0: $BlockBehaviorRegistry$$Type): void
 "injectProperties"(arg0: $Block$$Type, arg1: $StateDefinition$Builder$$Type<($Block$$Type), ($BlockState$$Type)>): void
 "getStateForPlacement"(arg0: $KBlockSettings$$Type, arg1: $BlockState$$Type, arg2: $BlockPlaceContext$$Type): $BlockState
 "hasAnalogOutputSignal"(): boolean
 "getAnalogOutputSignal"(arg0: $BlockState$$Type): integer
 "registerDefaultState"(arg0: $BlockState$$Type): $BlockState
 "getHorizontalFacing"(arg0: $BlockState$$Type): $Direction
 "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KBlockComponent$$Type = ($KBlockComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KBlockComponent_ = $KBlockComponent$$Type;
}}
declare module "snownee.kiwi.shadowed.com.ezylang.evalex.data.DataAccessorIfc" {
import {$EvaluationValue, $EvaluationValue$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.EvaluationValue"

export interface $DataAccessorIfc {

 "getData"(arg0: StringJS): $EvaluationValue
 "setData"(arg0: StringJS, arg1: $EvaluationValue$$Type): void
}

export namespace $DataAccessorIfc {
const probejs$$marker: never
}
export class $DataAccessorIfc$$Static implements $DataAccessorIfc {


 "getData"(arg0: StringJS): $EvaluationValue
 "setData"(arg0: StringJS, arg1: $EvaluationValue$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataAccessorIfc$$Type = ($DataAccessorIfc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataAccessorIfc_ = $DataAccessorIfc$$Type;
}}
declare module "snownee.kiwi.customization.block.loader.KBlockTemplate" {
import {$BlockFundamentals$CodecCreationContext, $BlockFundamentals$CodecCreationContext$$Type} from "snownee.kiwi.customization.block.BlockFundamentals$CodecCreationContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$KBlockTemplate$Type, $KBlockTemplate$Type$$Type} from "snownee.kiwi.customization.block.loader.KBlockTemplate$Type"
import {$BlockDefinitionProperties, $BlockDefinitionProperties$$Type} from "snownee.kiwi.customization.block.loader.BlockDefinitionProperties"
import {$OneTimeLoader$Context, $OneTimeLoader$Context$$Type} from "snownee.kiwi.util.resource.OneTimeLoader$Context"

export class $KBlockTemplate {


public "type"(): $KBlockTemplate$Type<(any)>
public "resolve"(arg0: $ResourceLocation$$Type, arg1: $OneTimeLoader$Context$$Type): void
public "properties"(): $Optional<($BlockDefinitionProperties)>
public static "codec"(arg0: $BlockFundamentals$CodecCreationContext$$Type): $Codec<($KBlockTemplate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KBlockTemplate$$Type = ($KBlockTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KBlockTemplate_ = $KBlockTemplate$$Type;
}}
declare module "snownee.kiwi.customization.placement.PlaceChoices" {
import {$PlaceChoices$Limit, $PlaceChoices$Limit$$Type} from "snownee.kiwi.customization.placement.PlaceChoices$Limit"
import {$PlaceChoices$Flow, $PlaceChoices$Flow$$Type} from "snownee.kiwi.customization.placement.PlaceChoices$Flow"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BiMap, $BiMap$$Type} from "com.google.common.collect.BiMap"
import {$PlaceTarget, $PlaceTarget$$Type} from "snownee.kiwi.customization.placement.PlaceTarget"
import {$KHolder, $KHolder$$Type} from "snownee.kiwi.util.KHolder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$PlaceChoices$Alter, $PlaceChoices$Alter$$Type} from "snownee.kiwi.customization.placement.PlaceChoices$Alter"
import {$PlaceChoices$BlockFaceType, $PlaceChoices$BlockFaceType$$Type} from "snownee.kiwi.customization.placement.PlaceChoices$BlockFaceType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PlaceChoices$Interests, $PlaceChoices$Interests$$Type} from "snownee.kiwi.customization.placement.PlaceChoices$Interests"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlaceChoices extends $Record {
static readonly "CODEC": $Codec<($PlaceChoices)>
static readonly "BLOCK_FACE_TYPES": $BiMap<(StringJS), ($PlaceChoices$BlockFaceType)>

constructor(target: $List$$Type<($PlaceTarget$$Type)>, transformWith: $Optional$$Type<(StringJS)>, flow: $List$$Type<($PlaceChoices$Flow$$Type)>, alter: $List$$Type<($PlaceChoices$Alter$$Type)>, limit: $List$$Type<($PlaceChoices$Limit$$Type)>, interests: $List$$Type<($PlaceChoices$Interests$$Type)>, skippable: boolean)

public "equals"(arg0: any): boolean
public "target"(): $List<($PlaceTarget)>
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): integer
public "limit"(): $List<($PlaceChoices$Limit)>
public "flow"(): $List<($PlaceChoices$Flow)>
public static "setTo"(arg0: $Block$$Type, arg1: $KHolder$$Type<($PlaceChoices$$Type)>): void
public "alter"(): $List<($PlaceChoices$Alter)>
public "skippable"(): boolean
public "transformWith"(): $Optional<(StringJS)>
public "interests"(): $List<($PlaceChoices$Interests)>
public "getStateForPlacement"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceChoices$$Type = ({"limit"?: $List$$Type<($PlaceChoices$Limit$$Type)>, "target"?: $List$$Type<($PlaceTarget$$Type)>, "flow"?: $List$$Type<($PlaceChoices$Flow$$Type)>, "transformWith"?: (StringJS)?, "skippable"?: boolean, "alter"?: $List$$Type<($PlaceChoices$Alter$$Type)>, "interests"?: $List$$Type<($PlaceChoices$Interests$$Type)>}) | ([limit?: $List$$Type<($PlaceChoices$Limit$$Type)>, target?: $List$$Type<($PlaceTarget$$Type)>, flow?: $List$$Type<($PlaceChoices$Flow$$Type)>, transformWith?: (StringJS)?, skippable?: boolean, alter?: $List$$Type<($PlaceChoices$Alter$$Type)>, interests?: $List$$Type<($PlaceChoices$Interests$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaceChoices_ = $PlaceChoices$$Type;
}}
declare module "snownee.kiwi.customization.shape.BlockShapeType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$List, $List$$Type} from "java.util.List"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $BlockShapeType extends $Enum<($BlockShapeType)> implements $StringRepresentable {
static readonly "COLLISION": $BlockShapeType
static readonly "MAIN": $BlockShapeType
static readonly "VALUES": $List<($BlockShapeType)>
static readonly "INTERACTION": $BlockShapeType


public static "values"(): ($BlockShapeType)[]
public static "valueOf"(arg0: StringJS): $BlockShapeType
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
export type $BlockShapeType$$Type = (("main") | ("collision") | ("interaction"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockShapeType_ = $BlockShapeType$$Type;
}}
declare module "snownee.kiwi.RenderLayerEnum" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $RenderLayerEnum extends $Enum<($RenderLayerEnum)> {
static readonly "CUTOUT": $RenderLayerEnum
static readonly "TRANSLUCENT": $RenderLayerEnum
static readonly "CUTOUT_MIPPED": $RenderLayerEnum
 "value": any


public static "values"(): ($RenderLayerEnum)[]
public static "valueOf"(arg0: StringJS): $RenderLayerEnum
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLayerEnum$$Type = (("cutout_mipped") | ("cutout") | ("translucent"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderLayerEnum_ = $RenderLayerEnum$$Type;
}}
declare module "snownee.kiwi.shadowed.com.ezylang.evalex.data.EvaluationValue$DataType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $EvaluationValue$DataType extends $Enum<($EvaluationValue$DataType)> {
static readonly "EXPRESSION_NODE": $EvaluationValue$DataType
static readonly "NUMBER": $EvaluationValue$DataType
static readonly "ARRAY": $EvaluationValue$DataType
static readonly "NULL": $EvaluationValue$DataType
static readonly "STRUCTURE": $EvaluationValue$DataType
static readonly "BINARY": $EvaluationValue$DataType
static readonly "STRING": $EvaluationValue$DataType
static readonly "DATE_TIME": $EvaluationValue$DataType
static readonly "BOOLEAN": $EvaluationValue$DataType
static readonly "DURATION": $EvaluationValue$DataType


public static "values"(): ($EvaluationValue$DataType)[]
public static "valueOf"(arg0: StringJS): $EvaluationValue$DataType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvaluationValue$DataType$$Type = (("string") | ("number") | ("boolean") | ("date_time") | ("duration") | ("array") | ("structure") | ("expression_node") | ("null") | ("binary"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EvaluationValue$DataType_ = $EvaluationValue$DataType$$Type;
}}
declare module "snownee.kiwi.customization.builder.BuilderRule" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BuilderRule$Type, $BuilderRule$Type$$Type} from "snownee.kiwi.customization.builder.BuilderRule$Type"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BuilderRule {

 "type"(): $BuilderRule$Type<(any)>
 "matches"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $BlockState$$Type): boolean
 "apply"(arg0: $UseOnContext$$Type, arg1: $List$$Type<($BlockPos$$Type)>): void
 "playPlaceSound"(arg0: $Player$$Type, arg1: $BlockState$$Type): void
 "relatedBlocks"(): $Stream<($Block)>
 "searchPositions"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $List<($BlockPos)>
}

export namespace $BuilderRule {
const CODEC: $Codec<($BuilderRule)>
const probejs$$marker: never
}
export class $BuilderRule$$Static implements $BuilderRule {
static readonly "CODEC": $Codec<($BuilderRule)>


 "type"(): $BuilderRule$Type<(any)>
 "matches"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $BlockState$$Type): boolean
 "apply"(arg0: $UseOnContext$$Type, arg1: $List$$Type<($BlockPos$$Type)>): void
 "playPlaceSound"(arg0: $Player$$Type, arg1: $BlockState$$Type): void
 "relatedBlocks"(): $Stream<($Block)>
 "searchPositions"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $List<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuilderRule$$Type = ($BuilderRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuilderRule_ = $BuilderRule$$Type;
}}
declare module "snownee.kiwi.customization.block.BlockFundamentals$CodecCreationContext" {
import {$KMaterial, $KMaterial$$Type} from "snownee.kiwi.customization.block.loader.KMaterial"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$GlassType, $GlassType$$Type} from "snownee.kiwi.customization.block.GlassType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BlockFundamentals$CodecCreationContext extends $Record {

constructor(materialCodec: $MapCodec$$Type<($Optional$$Type<($KMaterial$$Type)>)>, glassTypeCodec: $MapCodec$$Type<($Optional$$Type<($GlassType$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "materialCodec"(): $MapCodec<($Optional<($KMaterial)>)>
public "glassTypeCodec"(): $MapCodec<($Optional<($GlassType)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFundamentals$CodecCreationContext$$Type = ({"materialCodec"?: $MapCodec$$Type<(($KMaterial$$Type)?)>, "glassTypeCodec"?: $MapCodec$$Type<(($GlassType$$Type)?)>}) | ([materialCodec?: $MapCodec$$Type<(($KMaterial$$Type)?)>, glassTypeCodec?: $MapCodec$$Type<(($GlassType$$Type)?)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFundamentals$CodecCreationContext_ = $BlockFundamentals$CodecCreationContext$$Type;
}}
declare module "snownee.kiwi.customization.block.behavior.CanSurviveHandler" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$CanSurviveHandler$Compound, $CanSurviveHandler$Compound$$Type} from "snownee.kiwi.customization.block.behavior.CanSurviveHandler$Compound"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $CanSurviveHandler {

 "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "isSensitiveSide"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
}

export namespace $CanSurviveHandler {
function all(arg0: $List$$Type<($CanSurviveHandler$$Type)>): $CanSurviveHandler$Compound
function any(arg0: $List$$Type<($CanSurviveHandler$$Type)>): $CanSurviveHandler$Compound
function checkFace(arg0: $DirectionProperty$$Type): $CanSurviveHandler
function checkFloor(): $CanSurviveHandler
function checkCeiling(): $CanSurviveHandler
const probejs$$marker: never
}
export class $CanSurviveHandler$$Static implements $CanSurviveHandler {


static "all"(arg0: $List$$Type<($CanSurviveHandler$$Type)>): $CanSurviveHandler$Compound
static "any"(arg0: $List$$Type<($CanSurviveHandler$$Type)>): $CanSurviveHandler$Compound
 "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
static "checkFace"(arg0: $DirectionProperty$$Type): $CanSurviveHandler
static "checkFloor"(): $CanSurviveHandler
static "checkCeiling"(): $CanSurviveHandler
 "isSensitiveSide"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanSurviveHandler$$Type = ($CanSurviveHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CanSurviveHandler_ = $CanSurviveHandler$$Type;
}}
declare module "snownee.kiwi.customization.block.component.KBlockComponent$Type" {
import {$KBlockComponent, $KBlockComponent$$Type} from "snownee.kiwi.customization.block.component.KBlockComponent"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $KBlockComponent$Type<T extends $KBlockComponent> extends $Record {

constructor(codec: $MapCodec$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $MapCodec<(T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.KiwiBlockComponent
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.KiwiBlockComponentTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KBlockComponent$Type$$Type<T> = (Special.KiwiBlockComponent) | ({"codec"?: $MapCodec$$Type<(any)>}) | ([codec?: $MapCodec$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KBlockComponent$Type_<T> = $KBlockComponent$Type$$Type<(T)>;
}}
declare module "snownee.kiwi.customization.block.KBlockSettings" {
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$KBlockComponent$Type, $KBlockComponent$Type$$Type} from "snownee.kiwi.customization.block.component.KBlockComponent$Type"
import {$Map, $Map$$Type} from "java.util.Map"
import {$KBlockComponent, $KBlockComponent$$Type} from "snownee.kiwi.customization.block.component.KBlockComponent"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$BlockShapeType, $BlockShapeType$$Type} from "snownee.kiwi.customization.shape.BlockShapeType"
import {$KBlockSettings$Builder, $KBlockSettings$Builder$$Type} from "snownee.kiwi.customization.block.KBlockSettings$Builder"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConfiguringShape, $ConfiguringShape$$Type} from "snownee.kiwi.customization.shape.ConfiguringShape"
import {$StateDefinition$Builder, $StateDefinition$Builder$$Type} from "net.minecraft.world.level.block.state.StateDefinition$Builder"
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ShapeGenerator, $ShapeGenerator$$Type} from "snownee.kiwi.customization.shape.ShapeGenerator"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CanSurviveHandler, $CanSurviveHandler$$Type} from "snownee.kiwi.customization.block.behavior.CanSurviveHandler"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$GlassType, $GlassType$$Type} from "snownee.kiwi.customization.block.GlassType"
import {$PlaceChoices, $PlaceChoices$$Type} from "snownee.kiwi.customization.placement.PlaceChoices"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $KBlockSettings {
readonly "components": $Map<($KBlockComponent$Type<(any)>), ($KBlockComponent)>
readonly "customPlacement": boolean
 "placeChoices": $PlaceChoices
readonly "glassType": $GlassType
readonly "canSurviveHandler": $CanSurviveHandler
readonly "analogOutputSignal": $ToIntFunction<($BlockState)>


public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockShapeType$$Type): $ShapeGenerator
public static "of"(arg0: any): $KBlockSettings
public static "builder"(): $KBlockSettings$Builder
public static "empty"(): $KBlockSettings
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "hasComponent"(arg0: $KBlockComponent$Type$$Type<(any)>): boolean
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "getComponent"<T extends $KBlockComponent>(arg0: $KBlockComponent$Type$$Type<(T)>): T
public static "copyProperties"(arg0: $Block$$Type, arg1: $MapColor$$Type): $KBlockSettings$Builder
public static "copyProperties"(arg0: $Block$$Type): $KBlockSettings$Builder
public "injectProperties"(arg0: $Block$$Type, arg1: $StateDefinition$Builder$$Type<($Block$$Type), ($BlockState$$Type)>): void
public static "getGlassFaceShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $VoxelShape
public "removeIfPossible"(arg0: $BlockShapeType$$Type): $ConfiguringShape
public "getStateForPlacement"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public "registerDefaultState"(arg0: $BlockState$$Type): $BlockState
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KBlockSettings$$Type = ($KBlockSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KBlockSettings_ = $KBlockSettings$$Type;
}}
declare module "snownee.kiwi.shadowed.com.ezylang.evalex.config.OperatorDictionaryIfc" {
import {$OperatorIfc, $OperatorIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.operators.OperatorIfc"

export interface $OperatorDictionaryIfc {

 "addOperator"(arg0: StringJS, arg1: $OperatorIfc$$Type): void
 "hasPrefixOperator"(arg0: StringJS): boolean
 "getPrefixOperator"(arg0: StringJS): $OperatorIfc
 "hasPostfixOperator"(arg0: StringJS): boolean
 "getPostfixOperator"(arg0: StringJS): $OperatorIfc
 "hasInfixOperator"(arg0: StringJS): boolean
 "getInfixOperator"(arg0: StringJS): $OperatorIfc
}

export namespace $OperatorDictionaryIfc {
const probejs$$marker: never
}
export class $OperatorDictionaryIfc$$Static implements $OperatorDictionaryIfc {


 "addOperator"(arg0: StringJS, arg1: $OperatorIfc$$Type): void
 "hasPrefixOperator"(arg0: StringJS): boolean
 "getPrefixOperator"(arg0: StringJS): $OperatorIfc
 "hasPostfixOperator"(arg0: StringJS): boolean
 "getPostfixOperator"(arg0: StringJS): $OperatorIfc
 "hasInfixOperator"(arg0: StringJS): boolean
 "getInfixOperator"(arg0: StringJS): $OperatorIfc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperatorDictionaryIfc$$Type = ($OperatorDictionaryIfc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OperatorDictionaryIfc_ = $OperatorDictionaryIfc$$Type;
}}
declare module "snownee.kiwi.customization.placement.PlaceTarget$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PlaceTarget$Type extends $Enum<($PlaceTarget$Type)> {
readonly "prefix": StringJS
static readonly "BLOCK": $PlaceTarget$Type
static readonly "TEMPLATE": $PlaceTarget$Type


public static "values"(): ($PlaceTarget$Type)[]
public static "valueOf"(arg0: StringJS): $PlaceTarget$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceTarget$Type$$Type = (("template") | ("block"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaceTarget$Type_ = $PlaceTarget$Type$$Type;
}}
declare module "snownee.kiwi.customization.block.loader.BlockDefinitionProperties$PartialVanillaProperties" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$StateArgumentPredicate, $BlockBehaviour$StateArgumentPredicate$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$StateArgumentPredicate"
import {$BlockBehaviour$OffsetType, $BlockBehaviour$OffsetType$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$OffsetType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"
import {$BlockBehaviour$StatePredicate, $BlockBehaviour$StatePredicate$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$StatePredicate"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $BlockDefinitionProperties$PartialVanillaProperties extends $Record {
static readonly "MAP_CODEC": $MapCodec<($BlockDefinitionProperties$PartialVanillaProperties)>

constructor(copy: $Optional$$Type<($ResourceKey$$Type<($Block$$Type)>)>, noCollision: $Optional$$Type<(boolean)>, isRandomlyTicking: $Optional$$Type<(boolean)>, lightEmission: $Optional$$Type<(integer)>, dynamicShape: $Optional$$Type<(boolean)>, noOcclusion: $Optional$$Type<(boolean)>, legacySolid: $Optional$$Type<(boolean)>, pushReaction: $Optional$$Type<($PushReaction$$Type)>, offsetType: $Optional$$Type<($BlockBehaviour$OffsetType$$Type)>, replaceable: $Optional$$Type<(boolean)>, isValidSpawn: $Optional$$Type<($BlockBehaviour$StateArgumentPredicate$$Type<($EntityType$$Type<(any)>)>)>, isRedstoneConductor: $Optional$$Type<($BlockBehaviour$StatePredicate$$Type)>, isSuffocating: $Optional$$Type<($BlockBehaviour$StatePredicate$$Type)>, isViewBlocking: $Optional$$Type<($BlockBehaviour$StatePredicate$$Type)>, hasPostProcess: $Optional$$Type<($BlockBehaviour$StatePredicate$$Type)>, emissiveRendering: $Optional$$Type<($BlockBehaviour$StatePredicate$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "merge"(arg0: $BlockDefinitionProperties$PartialVanillaProperties$$Type): $BlockDefinitionProperties$PartialVanillaProperties
public "copy"(): $Optional<($ResourceKey<($Block)>)>
public "dynamicShape"(): $Optional<(boolean)>
public "noOcclusion"(): $Optional<(boolean)>
public "offsetType"(): $Optional<($BlockBehaviour$OffsetType)>
public "noCollision"(): $Optional<(boolean)>
public "isSuffocating"(): $Optional<($BlockBehaviour$StatePredicate)>
public "lightEmission"(): $Optional<(integer)>
public "legacySolid"(): $Optional<(boolean)>
public "pushReaction"(): $Optional<($PushReaction)>
public "isViewBlocking"(): $Optional<($BlockBehaviour$StatePredicate)>
public "hasPostProcess"(): $Optional<($BlockBehaviour$StatePredicate)>
public "replaceable"(): $Optional<(boolean)>
public "isValidSpawn"(): $Optional<($BlockBehaviour$StateArgumentPredicate<($EntityType<(any)>)>)>
public "emissiveRendering"(): $Optional<($BlockBehaviour$StatePredicate)>
public "isRedstoneConductor"(): $Optional<($BlockBehaviour$StatePredicate)>
public "isRandomlyTicking"(): $Optional<(boolean)>
get "suffocating"(): boolean
get "viewBlocking"(): boolean
get "validSpawn"(): boolean
get "redstoneConductor"(): boolean
get "randomlyTicking"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDefinitionProperties$PartialVanillaProperties$$Type = ({"isValidSpawn"?: ($BlockBehaviour$StateArgumentPredicate$$Type<($EntityType$$Type<(never)>)>)?, "isRedstoneConductor"?: ($BlockBehaviour$StatePredicate$$Type)?, "isRandomlyTicking"?: (boolean)?, "noOcclusion"?: (boolean)?, "offsetType"?: ($BlockBehaviour$OffsetType$$Type)?, "replaceable"?: (boolean)?, "isSuffocating"?: ($BlockBehaviour$StatePredicate$$Type)?, "noCollision"?: (boolean)?, "emissiveRendering"?: ($BlockBehaviour$StatePredicate$$Type)?, "copy"?: ($ResourceKey$$Type<($Block$$Type)>)?, "hasPostProcess"?: ($BlockBehaviour$StatePredicate$$Type)?, "lightEmission"?: (integer)?, "dynamicShape"?: (boolean)?, "pushReaction"?: ($PushReaction$$Type)?, "isViewBlocking"?: ($BlockBehaviour$StatePredicate$$Type)?, "legacySolid"?: (boolean)?}) | ([isValidSpawn?: ($BlockBehaviour$StateArgumentPredicate$$Type<($EntityType$$Type<(never)>)>)?, isRedstoneConductor?: ($BlockBehaviour$StatePredicate$$Type)?, isRandomlyTicking?: (boolean)?, noOcclusion?: (boolean)?, offsetType?: ($BlockBehaviour$OffsetType$$Type)?, replaceable?: (boolean)?, isSuffocating?: ($BlockBehaviour$StatePredicate$$Type)?, noCollision?: (boolean)?, emissiveRendering?: ($BlockBehaviour$StatePredicate$$Type)?, copy?: ($ResourceKey$$Type<($Block$$Type)>)?, hasPostProcess?: ($BlockBehaviour$StatePredicate$$Type)?, lightEmission?: (integer)?, dynamicShape?: (boolean)?, pushReaction?: ($PushReaction$$Type)?, isViewBlocking?: ($BlockBehaviour$StatePredicate$$Type)?, legacySolid?: (boolean)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDefinitionProperties$PartialVanillaProperties_ = $BlockDefinitionProperties$PartialVanillaProperties$$Type;
}}
declare module "snownee.kiwi.customization.placement.PlaceChoices$BlockFaceType" {
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export interface $PlaceChoices$BlockFaceType extends $BiPredicate<($UseOnContext), ($Direction)> {

 "or"(arg0: $BiPredicate$$Type<($UseOnContext), ($Direction)>): $BiPredicate<($UseOnContext), ($Direction)>
 "negate"(): $BiPredicate<($UseOnContext), ($Direction)>
 "and"(arg0: $BiPredicate$$Type<($UseOnContext), ($Direction)>): $BiPredicate<($UseOnContext), ($Direction)>
 "test"(arg0: $UseOnContext$$Type, arg1: $Direction$$Type): boolean

(arg0: $UseOnContext, arg1: $Direction): boolean
}

export namespace $PlaceChoices$BlockFaceType {
const VERTICAL: $PlaceChoices$BlockFaceType
const HORIZONTAL: $PlaceChoices$BlockFaceType
const ANY: $PlaceChoices$BlockFaceType
const probejs$$marker: never
}
export class $PlaceChoices$BlockFaceType$$Static implements $PlaceChoices$BlockFaceType {
static readonly "VERTICAL": $PlaceChoices$BlockFaceType
static readonly "HORIZONTAL": $PlaceChoices$BlockFaceType
static readonly "ANY": $PlaceChoices$BlockFaceType


 "or"(arg0: $BiPredicate$$Type<($UseOnContext), ($Direction)>): $BiPredicate<($UseOnContext), ($Direction)>
 "negate"(): $BiPredicate<($UseOnContext), ($Direction)>
 "and"(arg0: $BiPredicate$$Type<($UseOnContext), ($Direction)>): $BiPredicate<($UseOnContext), ($Direction)>
 "test"(arg0: $UseOnContext$$Type, arg1: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceChoices$BlockFaceType$$Type = ((arg0: $UseOnContext, arg1: $Direction) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaceChoices$BlockFaceType_ = $PlaceChoices$BlockFaceType$$Type;
}}
declare module "snownee.kiwi.customization.shape.ShapeStorage" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$UnbakedShape, $UnbakedShape$$Type} from "snownee.kiwi.customization.shape.UnbakedShape"
import {$Supplier, $Supplier$$Type} from "com.google.common.base.Supplier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ShapeGenerator, $ShapeGenerator$$Type} from "snownee.kiwi.customization.shape.ShapeGenerator"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"

export class $ShapeStorage {

constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($ShapeGenerator$$Type)>)

public static "reload"(arg0: $Supplier$$Type<($Map$$Type<($ResourceLocation$$Type), ($UnbakedShape$$Type)>)>): $ShapeStorage
public "get"(arg0: $ResourceLocation$$Type): $ShapeGenerator
public "transform"(arg0: $ShapeGenerator$$Type, arg1: any, arg2: $UnaryOperator$$Type<($ShapeGenerator)>): $ShapeGenerator
public "forEach"(arg0: $BiConsumer$$Type<($ResourceLocation), ($ShapeGenerator)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeStorage$$Type = ($ShapeStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapeStorage_ = $ShapeStorage$$Type;
}}
declare module "snownee.kiwi.customization.placement.PlaceChoices$Alter" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$PlaceChoices$AlterCondition, $PlaceChoices$AlterCondition$$Type} from "snownee.kiwi.customization.placement.PlaceChoices$AlterCondition"
import {$List, $List$$Type} from "java.util.List"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlaceChoices$Alter extends $Record {
static readonly "CODEC": $Codec<($PlaceChoices$Alter)>

constructor(when: $List$$Type<($PlaceChoices$AlterCondition$$Type)>, use: StringJS)

public "use"(): StringJS
public "when"(): $List<($PlaceChoices$AlterCondition)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "alter"(arg0: $BlockItem$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceChoices$Alter$$Type = ({"when"?: $List$$Type<($PlaceChoices$AlterCondition$$Type)>, "use"?: StringJS}) | ([when?: $List$$Type<($PlaceChoices$AlterCondition$$Type)>, use?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaceChoices$Alter_ = $PlaceChoices$Alter$$Type;
}}
declare module "snownee.kiwi.customization.block.behavior.BlockBehaviorRegistry" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$UseHandler, $UseHandler$$Type} from "snownee.kiwi.customization.block.behavior.UseHandler"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $BlockBehaviorRegistry {


public static "getInstance"(): $BlockBehaviorRegistry
public "onUseBlock"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $InteractionHand$$Type, arg3: $BlockHitResult$$Type): $InteractionResult
public "setContext"(arg0: $Block$$Type): void
public "addUseHandler"(arg0: $UseHandler$$Type): void
set "context"(value: $Block$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviorRegistry$$Type = ($BlockBehaviorRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBehaviorRegistry_ = $BlockBehaviorRegistry$$Type;
}}
declare module "snownee.kiwi.recipe.crafting.NoContainersShapedRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $NoContainersShapedRecipe extends $ShapedRecipe {
 "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $ItemStack$$Type, arg4: boolean, arg5: boolean)

public "noContainers"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoContainersShapedRecipe$$Type = ($NoContainersShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoContainersShapedRecipe_ = $NoContainersShapedRecipe$$Type;
}}
declare module "snownee.kiwi.recipe.crafting.KiwiShapelessRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$ShapelessRecipe, $ShapelessRecipe$$Type} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export class $KiwiShapelessRecipe extends $ShapelessRecipe {
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "group": StringJS

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ItemStack$$Type, arg3: $NonNullList$$Type<($Ingredient$$Type)>, arg4: boolean)
constructor(arg0: $ShapelessRecipe$$Type, arg1: boolean)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<(any)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KiwiShapelessRecipe$$Type = ($KiwiShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KiwiShapelessRecipe_ = $KiwiShapelessRecipe$$Type;
}}
declare module "snownee.kiwi.shadowed.com.ezylang.evalex.operators.OperatorIfc" {
import {$EvaluationValue, $EvaluationValue$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.EvaluationValue"
import {$ExpressionConfiguration, $ExpressionConfiguration$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.config.ExpressionConfiguration"
import {$Token, $Token$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.parser.Token"
import {$Expression, $Expression$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.Expression"

export interface $OperatorIfc {

 "isPrefix"(): boolean
 "evaluate"(arg0: $Expression$$Type, arg1: $Token$$Type, ...arg2: ($EvaluationValue$$Type)[]): $EvaluationValue
 "getPrecedence"(arg0: $ExpressionConfiguration$$Type): integer
 "getPrecedence"(): integer
 "isPostfix"(): boolean
 "isInfix"(): boolean
 "isLeftAssociative"(): boolean
 "isOperandLazy"(): boolean
get "prefix"(): boolean
get "precedence"(): integer
get "postfix"(): boolean
get "infix"(): boolean
get "leftAssociative"(): boolean
get "operandLazy"(): boolean
}

export namespace $OperatorIfc {
const OPERATOR_PRECEDENCE_AND: integer
const OPERATOR_PRECEDENCE_EQUALITY: integer
const OPERATOR_PRECEDENCE_COMPARISON: integer
const OPERATOR_PRECEDENCE_ADDITIVE: integer
const OPERATOR_PRECEDENCE_POWER: integer
const OPERATOR_PRECEDENCE_UNARY: integer
const OPERATOR_PRECEDENCE_POWER_HIGHER: integer
const OPERATOR_PRECEDENCE_MULTIPLICATIVE: integer
const OPERATOR_PRECEDENCE_OR: integer
const probejs$$marker: never
}
export class $OperatorIfc$$Static implements $OperatorIfc {
static readonly "OPERATOR_PRECEDENCE_AND": integer
static readonly "OPERATOR_PRECEDENCE_EQUALITY": integer
static readonly "OPERATOR_PRECEDENCE_COMPARISON": integer
static readonly "OPERATOR_PRECEDENCE_ADDITIVE": integer
static readonly "OPERATOR_PRECEDENCE_POWER": integer
static readonly "OPERATOR_PRECEDENCE_UNARY": integer
static readonly "OPERATOR_PRECEDENCE_POWER_HIGHER": integer
static readonly "OPERATOR_PRECEDENCE_MULTIPLICATIVE": integer
static readonly "OPERATOR_PRECEDENCE_OR": integer


 "isPrefix"(): boolean
 "evaluate"(arg0: $Expression$$Type, arg1: $Token$$Type, ...arg2: ($EvaluationValue$$Type)[]): $EvaluationValue
 "getPrecedence"(arg0: $ExpressionConfiguration$$Type): integer
 "getPrecedence"(): integer
 "isPostfix"(): boolean
 "isInfix"(): boolean
 "isLeftAssociative"(): boolean
 "isOperandLazy"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperatorIfc$$Type = ($OperatorIfc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OperatorIfc_ = $OperatorIfc$$Type;
}}
declare module "snownee.kiwi.util.KHolder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $KHolder<T> extends $Record {

constructor(key: $ResourceLocation$$Type, value: T)

public "value"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "key"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KHolder$$Type<T> = ({"value"?: any, "key"?: $ResourceLocation$$Type}) | ([value?: any, key?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KHolder_<T> = $KHolder$$Type<(T)>;
}}
declare module "snownee.kiwi.customization.placement.StatePropertiesPredicate" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StatePropertiesPredicate$PropertyMatcher, $StatePropertiesPredicate$PropertyMatcher$$Type} from "snownee.kiwi.customization.placement.StatePropertiesPredicate$PropertyMatcher"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StatePropertiesPredicate extends $Record implements $Predicate<($BlockState)> {
static readonly "CODEC": $Codec<($StatePropertiesPredicate)>

constructor(properties: $List$$Type<($StatePropertiesPredicate$PropertyMatcher$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $BlockState$$Type): boolean
public "test"(arg0: any): boolean
public "properties"(): $List<($StatePropertiesPredicate$PropertyMatcher)>
public "smartTest"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
public "or"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
public static "not"<T>(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
public "negate"(): $Predicate<($BlockState)>
public "and"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
public static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatePropertiesPredicate$$Type = ({"properties"?: $List$$Type<($StatePropertiesPredicate$PropertyMatcher$$Type)>}) | ([properties?: $List$$Type<($StatePropertiesPredicate$PropertyMatcher$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatePropertiesPredicate_ = $StatePropertiesPredicate$$Type;
}}
declare module "snownee.kiwi.customization.placement.ParsedProtoTag" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ParsedProtoTag extends $Record {
static readonly "CODEC": $Codec<($ParsedProtoTag)>

constructor(prefix: StringJS, key: StringJS, value: StringJS)

public "isResolved"(): boolean
public "value"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: StringJS): $ParsedProtoTag
public "prefix"(): StringJS
public "resolve"(arg0: $BlockState$$Type): $ParsedProtoTag
public "resolve"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $ParsedProtoTag
public "key"(): StringJS
public "prefixedKey"(): StringJS
get "resolved"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsedProtoTag$$Type = ({"prefix"?: StringJS, "key"?: StringJS, "value"?: StringJS}) | ([prefix?: StringJS, key?: StringJS, value?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParsedProtoTag_ = $ParsedProtoTag$$Type;
}}
declare module "snownee.kiwi.customization.block.behavior.CanSurviveHandler$Compound" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$CanSurviveHandler, $CanSurviveHandler$$Type} from "snownee.kiwi.customization.block.behavior.CanSurviveHandler"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CanSurviveHandler$Compound extends $Record implements $CanSurviveHandler {

constructor(any: boolean, handlers: $List$$Type<($CanSurviveHandler$$Type)>)

public "handlers"(): $List<($CanSurviveHandler)>
public "any"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "isSensitiveSide"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public static "all"(arg0: $List$$Type<($CanSurviveHandler$$Type)>): $CanSurviveHandler$Compound
public static "any"(arg0: $List$$Type<($CanSurviveHandler$$Type)>): $CanSurviveHandler$Compound
public static "checkFace"(arg0: $DirectionProperty$$Type): $CanSurviveHandler
public static "checkFloor"(): $CanSurviveHandler
public static "checkCeiling"(): $CanSurviveHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanSurviveHandler$Compound$$Type = ({"handlers"?: $List$$Type<($CanSurviveHandler$$Type)>, "any"?: boolean}) | ([handlers?: $List$$Type<($CanSurviveHandler$$Type)>, any?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CanSurviveHandler$Compound_ = $CanSurviveHandler$Compound$$Type;
}}
declare module "snownee.kiwi.customization.shape.ConfiguringShape" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$UnbakedShape, $UnbakedShape$$Type} from "snownee.kiwi.customization.shape.UnbakedShape"
import {$ShapeGenerator, $ShapeGenerator$$Type} from "snownee.kiwi.customization.shape.ShapeGenerator"
import {$BlockShapeType, $BlockShapeType$$Type} from "snownee.kiwi.customization.shape.BlockShapeType"
import {$BakingContext, $BakingContext$$Type} from "snownee.kiwi.customization.shape.BakingContext"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ShapeStorage, $ShapeStorage$$Type} from "snownee.kiwi.customization.shape.ShapeStorage"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ConfiguringShape extends $ShapeGenerator, $UnbakedShape {

 "getShape"(arg0: $BlockState$$Type, arg1: $CollisionContext$$Type): $VoxelShape
 "configure"(arg0: $Block$$Type, arg1: $BlockShapeType$$Type, arg2: $ShapeStorage$$Type): void
 "replaceAll"(arg0: $Block$$Type, arg1: $BlockShapeType$$Type, arg2: $UnaryOperator$$Type<($VoxelShape)>): void
 "bake"(arg0: $BakingContext$$Type): $ShapeGenerator
 "dependencies"(): $Stream<($UnbakedShape)>
}

export namespace $ConfiguringShape {
function unit(arg0: $VoxelShape$$Type): $ShapeGenerator
const probejs$$marker: never
}
export class $ConfiguringShape$$Static implements $ConfiguringShape {


 "getShape"(arg0: $BlockState$$Type, arg1: $CollisionContext$$Type): $VoxelShape
 "configure"(arg0: $Block$$Type, arg1: $BlockShapeType$$Type, arg2: $ShapeStorage$$Type): void
 "replaceAll"(arg0: $Block$$Type, arg1: $BlockShapeType$$Type, arg2: $UnaryOperator$$Type<($VoxelShape)>): void
 "bake"(arg0: $BakingContext$$Type): $ShapeGenerator
 "dependencies"(): $Stream<($UnbakedShape)>
static "unit"(arg0: $VoxelShape$$Type): $ShapeGenerator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguringShape$$Type = ($ConfiguringShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguringShape_ = $ConfiguringShape$$Type;
}}
declare module "snownee.kiwi.shadowed.com.ezylang.evalex.config.FunctionDictionaryIfc" {
import {$FunctionIfc, $FunctionIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.functions.FunctionIfc"

export interface $FunctionDictionaryIfc {

 "getFunction"(arg0: StringJS): $FunctionIfc
 "hasFunction"(arg0: StringJS): boolean
 "addFunction"(arg0: StringJS, arg1: $FunctionIfc$$Type): void
}

export namespace $FunctionDictionaryIfc {
const probejs$$marker: never
}
export class $FunctionDictionaryIfc$$Static implements $FunctionDictionaryIfc {


 "getFunction"(arg0: StringJS): $FunctionIfc
 "hasFunction"(arg0: StringJS): boolean
 "addFunction"(arg0: StringJS, arg1: $FunctionIfc$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionDictionaryIfc$$Type = ($FunctionDictionaryIfc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionDictionaryIfc_ = $FunctionDictionaryIfc$$Type;
}}
declare module "snownee.kiwi.mixin.customization.sit.EntityAccess" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $EntityAccess {

 "callCanRide"(arg0: $Entity$$Type): boolean

(arg0: $Entity): boolean
}

export namespace $EntityAccess {
const probejs$$marker: never
}
export class $EntityAccess$$Static implements $EntityAccess {


 "callCanRide"(arg0: $Entity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccess$$Type = ((arg0: $Entity) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccess_ = $EntityAccess$$Type;
}}
declare module "snownee.kiwi.customization.placement.PlaceChoices$Interests" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "snownee.kiwi.customization.placement.StatePropertiesPredicate"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PlaceChoices$Interests extends $Record {
static readonly "CODEC": $Codec<($PlaceChoices$Interests)>

constructor(when: $StatePropertiesPredicate$$Type, bonus: integer)

public "when"(): $StatePropertiesPredicate
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "bonus"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceChoices$Interests$$Type = ({"when"?: $StatePropertiesPredicate$$Type, "bonus"?: integer}) | ([when?: $StatePropertiesPredicate$$Type, bonus?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaceChoices$Interests_ = $PlaceChoices$Interests$$Type;
}}
declare module "snownee.kiwi.customization.placement.SlotLink$ResultAction" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SlotLink$ResultAction extends $Record {
static readonly "CODEC": $Codec<($SlotLink$ResultAction)>
static readonly "MAP_CODEC": $MapCodec<($SlotLink$ResultAction)>

constructor(setProperties: $Map$$Type<(StringJS), (StringJS)>, reflow: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "apply"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $BlockState
public "setProperties"(): $Map<(StringJS), (StringJS)>
public "reflow"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotLink$ResultAction$$Type = ({"reflow"?: boolean, "setProperties"?: $Map$$Type<(StringJS), (StringJS)>}) | ([reflow?: boolean, setProperties?: $Map$$Type<(StringJS), (StringJS)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotLink$ResultAction_ = $SlotLink$ResultAction$$Type;
}}
declare module "snownee.kiwi.shadowed.com.ezylang.evalex.parser.Token" {
import {$Token$TokenType, $Token$TokenType$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.parser.Token$TokenType"
import {$FunctionIfc, $FunctionIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.functions.FunctionIfc"
import {$OperatorIfc, $OperatorIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.operators.OperatorIfc"

export class $Token {

constructor(arg0: integer, arg1: StringJS, arg2: $Token$TokenType$$Type, arg3: $FunctionIfc$$Type, arg4: $OperatorIfc$$Type)
constructor(arg0: integer, arg1: StringJS, arg2: $Token$TokenType$$Type, arg3: $OperatorIfc$$Type)
constructor(arg0: integer, arg1: StringJS, arg2: $Token$TokenType$$Type, arg3: $FunctionIfc$$Type)
constructor(arg0: integer, arg1: StringJS, arg2: $Token$TokenType$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(): StringJS
public "getType"(): $Token$TokenType
public "getStartPosition"(): integer
public "getFunctionDefinition"(): $FunctionIfc
public "getOperatorDefinition"(): $OperatorIfc
get "value"(): StringJS
get "type"(): $Token$TokenType
get "startPosition"(): integer
get "functionDefinition"(): $FunctionIfc
get "operatorDefinition"(): $OperatorIfc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Token$$Type = ($Token);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Token_ = $Token$$Type;
}}
declare module "snownee.kiwi.mixin.forge.ItemColorsAccess" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemColor, $ItemColor$$Type} from "net.minecraft.client.color.item.ItemColor"

export interface $ItemColorsAccess {

 "getItemColors"(): $Map<($Item), ($ItemColor)>

(): $Map$$Type<($Item$$Type), ($ItemColor$$Type)>
get "itemColors"(): $Map<($Item), ($ItemColor)>
}

export namespace $ItemColorsAccess {
const probejs$$marker: never
}
export class $ItemColorsAccess$$Static implements $ItemColorsAccess {


 "getItemColors"(): $Map<($Item), ($ItemColor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsAccess$$Type = (() => $Map$$Type<($Item$$Type), ($ItemColor$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorsAccess_ = $ItemColorsAccess$$Type;
}}
declare module "snownee.kiwi.customization.placement.PlaceChoices$AlterCondition" {
import {$ParsedProtoTag, $ParsedProtoTag$$Type} from "snownee.kiwi.customization.placement.ParsedProtoTag"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BlockPredicate, $BlockPredicate$$Type} from "net.minecraft.advancements.critereon.BlockPredicate"
import {$List, $List$$Type} from "java.util.List"
import {$PlaceChoices$BlockFaceType, $PlaceChoices$BlockFaceType$$Type} from "snownee.kiwi.customization.placement.PlaceChoices$BlockFaceType"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PlaceChoices$AlterCondition extends $Record {
static readonly "CODEC": $Codec<($PlaceChoices$AlterCondition)>

constructor(target: StringJS, faces: $PlaceChoices$BlockFaceType$$Type, block: $BlockPredicate$$Type, tags: $List$$Type<($ParsedProtoTag$$Type)>)

public "block"(): $BlockPredicate
public "tags"(): $List<($ParsedProtoTag)>
public "equals"(arg0: any): boolean
public "target"(): StringJS
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $BlockPlaceContext$$Type): boolean
public "faces"(): $PlaceChoices$BlockFaceType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceChoices$AlterCondition$$Type = ({"tags"?: $List$$Type<($ParsedProtoTag$$Type)>, "block"?: $BlockPredicate$$Type, "faces"?: $PlaceChoices$BlockFaceType$$Type, "target"?: StringJS}) | ([tags?: $List$$Type<($ParsedProtoTag$$Type)>, block?: $BlockPredicate$$Type, faces?: $PlaceChoices$BlockFaceType$$Type, target?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaceChoices$AlterCondition_ = $PlaceChoices$AlterCondition$$Type;
}}
declare module "snownee.kiwi.customization.placement.PlaceTarget" {
import {$PlaceTarget$Type, $PlaceTarget$Type$$Type} from "snownee.kiwi.customization.placement.PlaceTarget$Type"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PlaceTarget extends $Record {
static readonly "CODEC": $Codec<($PlaceTarget)>

constructor(type: $PlaceTarget$Type$$Type, id: $ResourceLocation$$Type)

public "type"(): $PlaceTarget$Type
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: StringJS): $PlaceTarget
public "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceTarget$$Type = ({"type"?: $PlaceTarget$Type$$Type, "id"?: $ResourceLocation$$Type}) | ([type?: $PlaceTarget$Type$$Type, id?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaceTarget_ = $PlaceTarget$$Type;
}}
declare module "snownee.kiwi.customization.block.behavior.UseHandler" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $UseHandler {

 "use"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $Level$$Type, arg3: $InteractionHand$$Type, arg4: $BlockHitResult$$Type): $InteractionResult

(arg0: $BlockState, arg1: $Player, arg2: $Level, arg3: $InteractionHand, arg4: $BlockHitResult): $InteractionResult$$Type
}

export namespace $UseHandler {
const probejs$$marker: never
}
export class $UseHandler$$Static implements $UseHandler {


 "use"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $Level$$Type, arg3: $InteractionHand$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseHandler$$Type = ((arg0: $BlockState, arg1: $Player, arg2: $Level, arg3: $InteractionHand, arg4: $BlockHitResult) => $InteractionResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UseHandler_ = $UseHandler$$Type;
}}
declare module "snownee.kiwi.shadowed.com.ezylang.evalex.config.ExpressionConfiguration" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$FunctionIfc, $FunctionIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.functions.FunctionIfc"
import {$List, $List$$Type} from "java.util.List"
import {$MathContext, $MathContext$$Type} from "java.math.MathContext"
import {$OperatorIfc, $OperatorIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.operators.OperatorIfc"
import {$Locale, $Locale$$Type} from "java.util.Locale"
import {$FunctionDictionaryIfc, $FunctionDictionaryIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.config.FunctionDictionaryIfc"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$OperatorDictionaryIfc, $OperatorDictionaryIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.config.OperatorDictionaryIfc"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$EvaluationValue, $EvaluationValue$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.EvaluationValue"
import {$DateTimeFormatter, $DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$DataAccessorIfc, $DataAccessorIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.DataAccessorIfc"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ExpressionConfiguration$ExpressionConfigurationBuilder, $ExpressionConfiguration$ExpressionConfigurationBuilder$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.config.ExpressionConfiguration$ExpressionConfigurationBuilder"
import {$EvaluationValueConverterIfc, $EvaluationValueConverterIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.conversion.EvaluationValueConverterIfc"

export class $ExpressionConfiguration {
static readonly "DEFAULT_MATH_CONTEXT": $MathContext
static readonly "StandardConstants": $Map<(StringJS), ($EvaluationValue)>
static readonly "DECIMAL_PLACES_ROUNDING_UNLIMITED": integer


public "getLocale"(): $Locale
public static "builder"(): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "toBuilder"(): $ExpressionConfiguration$ExpressionConfigurationBuilder
public "getMathContext"(): $MathContext
public "getZoneId"(): $ZoneId
public static "defaultConfiguration"(): $ExpressionConfiguration
public "getDefaultConstants"(): $Map<(StringJS), ($EvaluationValue)>
public "getDecimalPlacesResult"(): integer
public "isStripTrailingZeros"(): boolean
public "getOperatorDictionary"(): $OperatorDictionaryIfc
public "getFunctionDictionary"(): $FunctionDictionaryIfc
public "isArraysAllowed"(): boolean
public "isStructuresAllowed"(): boolean
public "isBinaryAllowed"(): boolean
public "getPowerOfPrecedence"(): integer
public "getDateTimeFormatters"(): $List<($DateTimeFormatter)>
public "isImplicitMultiplicationAllowed"(): boolean
public "isSingleQuoteStringLiteralsAllowed"(): boolean
public "getDataAccessorSupplier"(): $Supplier<($DataAccessorIfc)>
public "getDecimalPlacesRounding"(): integer
public "isAllowOverwriteConstants"(): boolean
public "withAdditionalOperators"(...arg0: ($Map$Entry$$Type<(StringJS), ($OperatorIfc$$Type)>)[]): $ExpressionConfiguration
public "withAdditionalFunctions"(...arg0: ($Map$Entry$$Type<(StringJS), ($FunctionIfc$$Type)>)[]): $ExpressionConfiguration
public "getEvaluationValueConverter"(): $EvaluationValueConverterIfc
get "locale"(): $Locale
get "mathContext"(): $MathContext
get "zoneId"(): $ZoneId
get "defaultConstants"(): $Map<(StringJS), ($EvaluationValue)>
get "decimalPlacesResult"(): integer
get "stripTrailingZeros"(): boolean
get "operatorDictionary"(): $OperatorDictionaryIfc
get "functionDictionary"(): $FunctionDictionaryIfc
get "arraysAllowed"(): boolean
get "structuresAllowed"(): boolean
get "binaryAllowed"(): boolean
get "powerOfPrecedence"(): integer
get "dateTimeFormatters"(): $List<($DateTimeFormatter)>
get "implicitMultiplicationAllowed"(): boolean
get "singleQuoteStringLiteralsAllowed"(): boolean
get "dataAccessorSupplier"(): $Supplier<($DataAccessorIfc)>
get "decimalPlacesRounding"(): integer
get "allowOverwriteConstants"(): boolean
get "evaluationValueConverter"(): $EvaluationValueConverterIfc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpressionConfiguration$$Type = ($ExpressionConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExpressionConfiguration_ = $ExpressionConfiguration$$Type;
}}
declare module "snownee.kiwi.customization.placement.PlaceChoices$Flow" {
import {$PlaceChoices$Limit, $PlaceChoices$Limit$$Type} from "snownee.kiwi.customization.placement.PlaceChoices$Limit"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$SlotLink$ResultAction, $SlotLink$ResultAction$$Type} from "snownee.kiwi.customization.placement.SlotLink$ResultAction"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PlaceChoices$Flow extends $Record {
static readonly "CODEC": $Codec<($PlaceChoices$Flow)>

constructor(when: $Map$$Type<($Direction$$Type), ($PlaceChoices$Limit$$Type)>, action: $SlotLink$ResultAction$$Type, end: boolean)

public "when"(): $Map<($Direction), ($PlaceChoices$Limit)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "end"(): boolean
public "action"(): $SlotLink$ResultAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceChoices$Flow$$Type = ({"when"?: $Map$$Type<($Direction$$Type), ($PlaceChoices$Limit$$Type)>, "action"?: $SlotLink$ResultAction$$Type, "end"?: boolean}) | ([when?: $Map$$Type<($Direction$$Type), ($PlaceChoices$Limit$$Type)>, action?: $SlotLink$ResultAction$$Type, end?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlaceChoices$Flow_ = $PlaceChoices$Flow$$Type;
}}
declare module "snownee.kiwi.customization.duck.KPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $KPlayer {

 "kiwi$setPlaceCount"(arg0: integer): void
 "kiwi$getPlaceCount"(): integer
 "kiwi$incrementPlaceCount"(): void
}

export namespace $KPlayer {
const probejs$$marker: never
}
export class $KPlayer$$Static implements $KPlayer {


 "kiwi$setPlaceCount"(arg0: integer): void
 "kiwi$getPlaceCount"(): integer
 "kiwi$incrementPlaceCount"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KPlayer$$Type = ($KPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KPlayer_ = $KPlayer$$Type;
}}
declare module "snownee.kiwi.customization.builder.BuilderRule$Type" {
import {$BuilderRule, $BuilderRule$$Type} from "snownee.kiwi.customization.builder.BuilderRule"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BuilderRule$Type<T extends $BuilderRule> extends $Record {

constructor(codec: $MapCodec$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $MapCodec<(T)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.KiwiBuilderRule
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.KiwiBuilderRuleTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuilderRule$Type$$Type<T> = (Special.KiwiBuilderRule) | ({"codec"?: $MapCodec$$Type<(any)>}) | ([codec?: $MapCodec$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuilderRule$Type_<T> = $BuilderRule$Type$$Type<(T)>;
}}
declare module "snownee.kiwi.customization.item.loader.KItemTemplate$Type" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$KItemTemplate, $KItemTemplate$$Type} from "snownee.kiwi.customization.item.loader.KItemTemplate"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $KItemTemplate$Type<T extends $KItemTemplate> extends $Record {

constructor(codec: $Supplier$$Type<($MapCodec$$Type<(T)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $Supplier<($MapCodec<(T)>)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.KiwiItemTemplate
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.KiwiItemTemplateTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KItemTemplate$Type$$Type<T> = (Special.KiwiItemTemplate) | ({"codec"?: $Supplier$$Type<($MapCodec$$Type<(any)>)>}) | ([codec?: $Supplier$$Type<($MapCodec$$Type<(any)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KItemTemplate$Type_<T> = $KItemTemplate$Type$$Type<(T)>;
}}
declare module "snownee.kiwi.customization.block.GlassType" {
import {$RenderLayerEnum, $RenderLayerEnum$$Type} from "snownee.kiwi.RenderLayerEnum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GlassType extends $Record {
static readonly "DIRECT_CODEC": $Codec<($GlassType)>

constructor(skipRendering: boolean, shadeBrightness: float, renderType: $RenderLayerEnum$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "skipRendering"(): boolean
public "renderType"(): $RenderLayerEnum
public "shadeBrightness"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassType$$Type = ({"shadeBrightness"?: float, "renderType"?: $RenderLayerEnum$$Type, "skipRendering"?: boolean}) | ([shadeBrightness?: float, renderType?: $RenderLayerEnum$$Type, skipRendering?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassType_ = $GlassType$$Type;
}}
declare module "snownee.kiwi.shadowed.com.ezylang.evalex.functions.FunctionIfc" {
import {$EvaluationValue, $EvaluationValue$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.EvaluationValue"
import {$List, $List$$Type} from "java.util.List"
import {$Token, $Token$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.parser.Token"
import {$FunctionParameterDefinition, $FunctionParameterDefinition$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.functions.FunctionParameterDefinition"
import {$Expression, $Expression$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.Expression"

export interface $FunctionIfc {

 "evaluate"(arg0: $Expression$$Type, arg1: $Token$$Type, ...arg2: ($EvaluationValue$$Type)[]): $EvaluationValue
 "hasVarArgs"(): boolean
 "isParameterLazy"(arg0: integer): boolean
 "validatePreEvaluation"(arg0: $Token$$Type, ...arg1: ($EvaluationValue$$Type)[]): void
 "getFunctionParameterDefinitions"(): $List<($FunctionParameterDefinition)>
 "getCountOfNonVarArgParameters"(): integer
get "functionParameterDefinitions"(): $List<($FunctionParameterDefinition)>
get "countOfNonVarArgParameters"(): integer
}

export namespace $FunctionIfc {
const probejs$$marker: never
}
export class $FunctionIfc$$Static implements $FunctionIfc {


 "evaluate"(arg0: $Expression$$Type, arg1: $Token$$Type, ...arg2: ($EvaluationValue$$Type)[]): $EvaluationValue
 "hasVarArgs"(): boolean
 "isParameterLazy"(arg0: integer): boolean
 "validatePreEvaluation"(arg0: $Token$$Type, ...arg1: ($EvaluationValue$$Type)[]): void
 "getFunctionParameterDefinitions"(): $List<($FunctionParameterDefinition)>
 "getCountOfNonVarArgParameters"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionIfc$$Type = ($FunctionIfc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FunctionIfc_ = $FunctionIfc$$Type;
}}
declare module "snownee.kiwi.recipe.crafting.NoContainersShapedRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$NoContainersShapedRecipe, $NoContainersShapedRecipe$$Type} from "snownee.kiwi.recipe.crafting.NoContainersShapedRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $NoContainersShapedRecipe$Serializer implements $RecipeSerializer<($NoContainersShapedRecipe)> {
static readonly "CODEC": $MapCodec<($NoContainersShapedRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($NoContainersShapedRecipe)>

constructor()

public "codec"(): $MapCodec<($NoContainersShapedRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($NoContainersShapedRecipe)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $NoContainersShapedRecipe
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $NoContainersShapedRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoContainersShapedRecipe$Serializer$$Type = ($NoContainersShapedRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoContainersShapedRecipe$Serializer_ = $NoContainersShapedRecipe$Serializer$$Type;
}}
declare module "snownee.kiwi.customization.item.loader.ItemDefinitionProperties" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ItemDefinitionProperties$PartialVanillaProperties, $ItemDefinitionProperties$PartialVanillaProperties$$Type} from "snownee.kiwi.customization.item.loader.ItemDefinitionProperties$PartialVanillaProperties"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ItemDefinitionProperties extends $Record {

constructor(colorProvider: $Optional$$Type<($ResourceLocation$$Type)>, vanillaProperties: $ItemDefinitionProperties$PartialVanillaProperties$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "merge"(arg0: $ItemDefinitionProperties$$Type): $ItemDefinitionProperties
public static "empty"(): $ItemDefinitionProperties
public static "mapCodecField"(): $MapCodec<($Optional<($ItemDefinitionProperties)>)>
public static "mapCodec"(): $MapCodec<($ItemDefinitionProperties)>
public "colorProvider"(): $Optional<($ResourceLocation)>
public "vanillaProperties"(): $ItemDefinitionProperties$PartialVanillaProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDefinitionProperties$$Type = ({"vanillaProperties"?: $ItemDefinitionProperties$PartialVanillaProperties$$Type, "colorProvider"?: ($ResourceLocation$$Type)?}) | ([vanillaProperties?: $ItemDefinitionProperties$PartialVanillaProperties$$Type, colorProvider?: ($ResourceLocation$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDefinitionProperties_ = $ItemDefinitionProperties$$Type;
}}
declare module "snownee.kiwi.shadowed.com.ezylang.evalex.data.EvaluationValue" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ASTNode, $ASTNode$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.parser.ASTNode"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ExpressionConfiguration, $ExpressionConfiguration$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.config.ExpressionConfiguration"
import {$List, $List$$Type} from "java.util.List"
import {$MathContext, $MathContext$$Type} from "java.math.MathContext"
import {$EvaluationValue$DataType, $EvaluationValue$DataType$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.EvaluationValue$DataType"
import {$BigDecimal, $BigDecimal$$Type} from "java.math.BigDecimal"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $EvaluationValue implements $Comparable<($EvaluationValue)> {
static readonly "TRUE": $EvaluationValue
static readonly "NULL_VALUE": $EvaluationValue
static readonly "FALSE": $EvaluationValue

/**
 * 
 * @deprecated
 */
constructor(arg0: any, arg1: $ExpressionConfiguration$$Type)

public static "stringValue"(arg0: StringJS): $EvaluationValue
public static "numberValue"(arg0: $BigDecimal$$Type): $EvaluationValue
public "getDataType"(): $EvaluationValue$DataType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $EvaluationValue$$Type): integer
public static "booleanValue"(arg0: boolean): $EvaluationValue
public "getValue"(): any
public static "of"(arg0: any, arg1: $ExpressionConfiguration$$Type): $EvaluationValue
public "isArrayValue"(): boolean
public "isBooleanValue"(): boolean
public "isNumberValue"(): boolean
public "isStringValue"(): boolean
public "getNumberValue"(): $BigDecimal
public static "arrayValue"(arg0: $List$$Type<(any)>): $EvaluationValue
public "getStringValue"(): StringJS
/**
 * 
 * @deprecated
 */
public static "nullValue"(): $EvaluationValue
public "getArrayValue"(): $List<($EvaluationValue)>
public static "binaryValue"(arg0: any): $EvaluationValue
public "getBooleanValue"(): boolean
public "isBinaryValue"(): boolean
public "isNullValue"(): boolean
public "isExpressionNode"(): boolean
public static "numberOfString"(arg0: StringJS, arg1: $MathContext$$Type): $EvaluationValue
public static "structureValue"(arg0: $Map$$Type<(any), (any)>): $EvaluationValue
public static "durationValue"(arg0: $Duration$$Type): $EvaluationValue
public static "dateTimeValue"(arg0: $Instant$$Type): $EvaluationValue
public "getExpressionNode"(): $ASTNode
public "isStructureValue"(): boolean
public "getStructureValue"(): $Map<(StringJS), ($EvaluationValue)>
public static "expressionNodeValue"(arg0: $ASTNode$$Type): $EvaluationValue
public "isDateTimeValue"(): boolean
public "isDurationValue"(): boolean
public "getDateTimeValue"(): $Instant
public "getDurationValue"(): $Duration
get "dataType"(): $EvaluationValue$DataType
get "value"(): any
get "expressionNode"(): boolean
get "expressionNode"(): $ASTNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvaluationValue$$Type = ($EvaluationValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EvaluationValue_ = $EvaluationValue$$Type;
}}
declare module "snownee.kiwi.customization.item.loader.KItemTemplate" {
import {$ItemDefinitionProperties, $ItemDefinitionProperties$$Type} from "snownee.kiwi.customization.item.loader.ItemDefinitionProperties"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$KItemTemplate$Type, $KItemTemplate$Type$$Type} from "snownee.kiwi.customization.item.loader.KItemTemplate$Type"
import {$OneTimeLoader$Context, $OneTimeLoader$Context$$Type} from "snownee.kiwi.util.resource.OneTimeLoader$Context"

export class $KItemTemplate {


public "type"(): $KItemTemplate$Type<(any)>
public "resolve"(arg0: $ResourceLocation$$Type, arg1: $OneTimeLoader$Context$$Type): void
public "properties"(): $Optional<($ItemDefinitionProperties)>
public static "codec"(): $Codec<($KItemTemplate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KItemTemplate$$Type = ($KItemTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KItemTemplate_ = $KItemTemplate$$Type;
}}
declare module "snownee.kiwi.customization.block.loader.KMaterial" {
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$NoteBlockInstrument, $NoteBlockInstrument$$Type} from "net.minecraft.world.level.block.state.properties.NoteBlockInstrument"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $KMaterial extends $Record {
static readonly "DIRECT_CODEC": $Codec<($KMaterial)>

constructor(destroyTime: float, explosionResistance: float, soundType: $SoundType$$Type, defaultMapColor: $MapColor$$Type, instrument: $NoteBlockInstrument$$Type, requiresCorrectToolForDrops: boolean, ignitedByLava: boolean, igniteOdds: integer, burnOdds: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "soundType"(): $SoundType
public "destroyTime"(): float
public "ignitedByLava"(): boolean
public "igniteOdds"(): integer
public "burnOdds"(): integer
public "instrument"(): $NoteBlockInstrument
public "explosionResistance"(): float
public "defaultMapColor"(): $MapColor
public "requiresCorrectToolForDrops"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KMaterial$$Type = ({"ignitedByLava"?: boolean, "requiresCorrectToolForDrops"?: boolean, "igniteOdds"?: integer, "soundType"?: $SoundType$$Type, "burnOdds"?: integer, "defaultMapColor"?: $MapColor$$Type, "instrument"?: $NoteBlockInstrument$$Type, "explosionResistance"?: float, "destroyTime"?: float}) | ([ignitedByLava?: boolean, requiresCorrectToolForDrops?: boolean, igniteOdds?: integer, soundType?: $SoundType$$Type, burnOdds?: integer, defaultMapColor?: $MapColor$$Type, instrument?: $NoteBlockInstrument$$Type, explosionResistance?: float, destroyTime?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KMaterial_ = $KMaterial$$Type;
}}
declare module "snownee.kiwi.customization.block.loader.BlockDefinitionProperties" {
import {$KBlockComponent, $KBlockComponent$$Type} from "snownee.kiwi.customization.block.component.KBlockComponent"
import {$RenderLayerEnum, $RenderLayerEnum$$Type} from "snownee.kiwi.RenderLayerEnum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$BlockDefinitionProperties$PartialVanillaProperties, $BlockDefinitionProperties$PartialVanillaProperties$$Type} from "snownee.kiwi.customization.block.loader.BlockDefinitionProperties$PartialVanillaProperties"
import {$BlockFundamentals$CodecCreationContext, $BlockFundamentals$CodecCreationContext$$Type} from "snownee.kiwi.customization.block.BlockFundamentals$CodecCreationContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$KMaterial, $KMaterial$$Type} from "snownee.kiwi.customization.block.loader.KMaterial"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$CanSurviveHandler, $CanSurviveHandler$$Type} from "snownee.kiwi.customization.block.behavior.CanSurviveHandler"
import {$GlassType, $GlassType$$Type} from "snownee.kiwi.customization.block.GlassType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BlockDefinitionProperties extends $Record {

constructor(components: $List$$Type<($Either$$Type<($KBlockComponent$$Type), (StringJS)>)>, material: $Optional$$Type<($KMaterial$$Type)>, glassType: $Optional$$Type<($GlassType$$Type)>, renderType: $Optional$$Type<($RenderLayerEnum$$Type)>, colorProvider: $Optional$$Type<($ResourceLocation$$Type)>, shape: $Optional$$Type<($ResourceLocation$$Type)>, collisionShape: $Optional$$Type<($ResourceLocation$$Type)>, interactionShape: $Optional$$Type<($ResourceLocation$$Type)>, canSurviveHandler: $Optional$$Type<($CanSurviveHandler$$Type)>, vanillaProperties: $BlockDefinitionProperties$PartialVanillaProperties$$Type)

public "shape"(): $Optional<($ResourceLocation)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "merge"(arg0: $BlockDefinitionProperties$$Type): $BlockDefinitionProperties
public "glassType"(): $Optional<($GlassType)>
public static "mapCodecField"(arg0: $BlockFundamentals$CodecCreationContext$$Type): $MapCodec<($Optional<($BlockDefinitionProperties)>)>
public "collisionShape"(): $Optional<($ResourceLocation)>
public "renderType"(): $Optional<($RenderLayerEnum)>
public static "mapCodec"(arg0: $BlockFundamentals$CodecCreationContext$$Type): $MapCodec<($BlockDefinitionProperties)>
public "components"(): $List<($Either<($KBlockComponent), (StringJS)>)>
public "colorProvider"(): $Optional<($ResourceLocation)>
public "material"(): $Optional<($KMaterial)>
public "interactionShape"(): $Optional<($ResourceLocation)>
public "canSurviveHandler"(): $Optional<($CanSurviveHandler)>
public "vanillaProperties"(): $BlockDefinitionProperties$PartialVanillaProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDefinitionProperties$$Type = ({"shape"?: ($ResourceLocation$$Type)?, "components"?: $List$$Type<($Either$$Type<($KBlockComponent$$Type), (StringJS)>)>, "glassType"?: ($GlassType$$Type)?, "renderType"?: ($RenderLayerEnum$$Type)?, "interactionShape"?: ($ResourceLocation$$Type)?, "vanillaProperties"?: $BlockDefinitionProperties$PartialVanillaProperties$$Type, "collisionShape"?: ($ResourceLocation$$Type)?, "colorProvider"?: ($ResourceLocation$$Type)?, "canSurviveHandler"?: ($CanSurviveHandler$$Type)?, "material"?: ($KMaterial$$Type)?}) | ([shape?: ($ResourceLocation$$Type)?, components?: $List$$Type<($Either$$Type<($KBlockComponent$$Type), (StringJS)>)>, glassType?: ($GlassType$$Type)?, renderType?: ($RenderLayerEnum$$Type)?, interactionShape?: ($ResourceLocation$$Type)?, vanillaProperties?: $BlockDefinitionProperties$PartialVanillaProperties$$Type, collisionShape?: ($ResourceLocation$$Type)?, colorProvider?: ($ResourceLocation$$Type)?, canSurviveHandler?: ($CanSurviveHandler$$Type)?, material?: ($KMaterial$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDefinitionProperties_ = $BlockDefinitionProperties$$Type;
}}
declare module "snownee.kiwi.mixin.forge.BlockColorsAccess" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"

export interface $BlockColorsAccess {

 "getBlockColors"(): $Map<($Block), ($BlockColor)>

(): $Map$$Type<($Block$$Type), ($BlockColor$$Type)>
get "blockColors"(): $Map<($Block), ($BlockColor)>
}

export namespace $BlockColorsAccess {
const probejs$$marker: never
}
export class $BlockColorsAccess$$Static implements $BlockColorsAccess {


 "getBlockColors"(): $Map<($Block), ($BlockColor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsAccess$$Type = (() => $Map$$Type<($Block$$Type), ($BlockColor$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColorsAccess_ = $BlockColorsAccess$$Type;
}}
declare module "snownee.kiwi.shadowed.com.ezylang.evalex.Expression" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ASTNode, $ASTNode$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.parser.ASTNode"
import {$EvaluationValue, $EvaluationValue$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.EvaluationValue"
import {$List, $List$$Type} from "java.util.List"
import {$ExpressionConfiguration, $ExpressionConfiguration$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.config.ExpressionConfiguration"
import {$DataAccessorIfc, $DataAccessorIfc$$Type} from "snownee.kiwi.shadowed.com.ezylang.evalex.data.DataAccessorIfc"
import {$Set, $Set$$Type} from "java.util.Set"

export class $Expression {

constructor(arg0: StringJS)
constructor(arg0: $Expression$$Type)
constructor(arg0: StringJS, arg1: $ExpressionConfiguration$$Type)

public "and"(arg0: StringJS, arg1: any): $Expression
public "evaluate"(): $EvaluationValue
public "validate"(): void
public "with"(arg0: StringJS, arg1: any): $Expression
public "copy"(): $Expression
public "convertValue"(arg0: any): $EvaluationValue
public "getConfiguration"(): $ExpressionConfiguration
public "withValues"(arg0: $Map$$Type<(StringJS), (any)>): $Expression
public "getExpressionString"(): StringJS
public "getAllASTNodes"(): $List<($ASTNode)>
public "getConstants"(): $Map<(StringJS), ($EvaluationValue)>
public "getAbstractSyntaxTree"(): $ASTNode
public "evaluateSubtree"(arg0: $ASTNode$$Type): $EvaluationValue
public "getDataAccessor"(): $DataAccessorIfc
public "createExpressionNode"(arg0: StringJS): $ASTNode
public "convertDoubleValue"(arg0: double): $EvaluationValue
public "getUsedVariables"(): $Set<(StringJS)>
public "getUndefinedVariables"(): $Set<(StringJS)>
get "configuration"(): $ExpressionConfiguration
get "expressionString"(): StringJS
get "allASTNodes"(): $List<($ASTNode)>
get "constants"(): $Map<(StringJS), ($EvaluationValue)>
get "abstractSyntaxTree"(): $ASTNode
get "dataAccessor"(): $DataAccessorIfc
get "usedVariables"(): $Set<(StringJS)>
get "undefinedVariables"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Expression$$Type = ($Expression);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Expression_ = $Expression$$Type;
}}
declare module "snownee.kiwi.customization.shape.ShapeGenerator" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ShapeGenerator {

 "getShape"(arg0: $BlockState$$Type, arg1: $CollisionContext$$Type): $VoxelShape

(arg0: $BlockState, arg1: $CollisionContext): $VoxelShape$$Type
}

export namespace $ShapeGenerator {
function unit(arg0: $VoxelShape$$Type): $ShapeGenerator
const probejs$$marker: never
}
export class $ShapeGenerator$$Static implements $ShapeGenerator {


static "unit"(arg0: $VoxelShape$$Type): $ShapeGenerator
 "getShape"(arg0: $BlockState$$Type, arg1: $CollisionContext$$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeGenerator$$Type = ((arg0: $BlockState, arg1: $CollisionContext) => $VoxelShape$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapeGenerator_ = $ShapeGenerator$$Type;
}}
