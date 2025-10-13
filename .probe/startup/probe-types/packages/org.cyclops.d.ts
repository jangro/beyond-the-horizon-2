declare module "org.cyclops.cyclopscore.client.gui.component.input.WidgetTextFieldExtended" {
import {$EditBox, $EditBox$$Type} from "net.minecraft.client.gui.components.EditBox"
import {$IInputListener, $IInputListener$$Type} from "org.cyclops.cyclopscore.client.gui.component.input.IInputListener"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Component as $Component$0, $Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$WidgetSprites, $WidgetSprites$$Type} from "net.minecraft.client.gui.components.WidgetSprites"
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $WidgetTextFieldExtended extends $EditBox {
static readonly "CURSOR_INSERT_WIDTH": integer
static readonly "CURSOR_BLINK_INTERVAL_MS": integer
 "bordered": boolean
static readonly "DEFAULT_TEXT_COLOR": integer
static readonly "CURSOR_APPEND_CHARACTER": StringJS
 "displayPos": integer
static readonly "UNSET_FG_COLOR": integer
static readonly "CURSOR_INSERT_COLOR": integer
 "textColorUneditable": integer
 "value": StringJS
 "textShadow": boolean
static readonly "SPRITES": $WidgetSprites
 "canLoseFocus": boolean
 "focusedTime": long
 "visible": boolean
static readonly "BACKWARDS": integer
 "suggestion": StringJS
 "responder": $Consumer<(StringJS)>
 "active": boolean
 "cursorPos": integer
 "textColor": integer
 "filter": $Predicate<(StringJS)>
 "formatter": $BiFunction<(StringJS), (integer), ($FormattedCharSequence)>
 "highlightPos": integer
 "hint": $Component
 "focused": boolean
static readonly "FORWARDS": integer
 "maxLength": integer
readonly "font": $Font

constructor(arg0: $Font$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Component$$Type, arg6: boolean)
constructor(arg0: $Font$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $Component$$Type)

public "setValue"(arg0: StringJS): void
public "setListener"(arg0: $IInputListener$$Type): void
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "getInnerWidth"(): integer
public "renderWidget"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public static "bookshelf$renderScrollingString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: $Component$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
set "value"(value: StringJS)
set "listener"(value: $IInputListener$$Type)
get "innerWidth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetTextFieldExtended$$Type = ($WidgetTextFieldExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetTextFieldExtended_ = $WidgetTextFieldExtended$$Type;
}}
declare module "org.cyclops.integrateddynamics.advancement.criterion.VariableCreatedTrigger$Instance" {
import {$ICriterionInstanceTestable, $ICriterionInstanceTestable$$Type} from "org.cyclops.cyclopscore.advancement.criterion.ICriterionInstanceTestable"
import {$VariableFacadePredicate, $VariableFacadePredicate$$Type} from "org.cyclops.integrateddynamics.api.advancement.criterion.VariableFacadePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LogicProgrammerVariableFacadeCreatedEvent, $LogicProgrammerVariableFacadeCreatedEvent$$Type} from "org.cyclops.integrateddynamics.core.logicprogrammer.event.LogicProgrammerVariableFacadeCreatedEvent"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $VariableCreatedTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance, $ICriterionInstanceTestable<($LogicProgrammerVariableFacadeCreatedEvent)> {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, block: $Optional$$Type<($Block$$Type)>, variableFacadePredicate: $Optional$$Type<($VariableFacadePredicate$$Type)>)

public "block"(): $Optional<($Block)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ServerPlayer$$Type, arg1: $LogicProgrammerVariableFacadeCreatedEvent$$Type): boolean
public "test"(arg0: $ServerPlayer$$Type, arg1: any): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "variableFacadePredicate"(): $Optional<($VariableFacadePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariableCreatedTrigger$Instance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "variableFacadePredicate"?: ($VariableFacadePredicate$$Type)?, "block"?: ($Block$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, variableFacadePredicate?: ($VariableFacadePredicate$$Type)?, block?: ($Block$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariableCreatedTrigger$Instance_ = $VariableCreatedTrigger$Instance$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.ProcessHandler" {
import {$ProcessHandler$ProcessCommand, $ProcessHandler$ProcessCommand$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.ProcessHandler$ProcessCommand"
import {$Process, $Process$$Type} from "java.lang.Process"

export interface $ProcessHandler {

 "start"(command: $ProcessHandler$ProcessCommand$$Type): $Process

(command: $ProcessHandler$ProcessCommand): $Process$$Type
}

export namespace $ProcessHandler {
const probejs$$marker: never
}
export class $ProcessHandler$$Static implements $ProcessHandler {


 "start"(command: $ProcessHandler$ProcessCommand$$Type): $Process
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessHandler$$Type = ((command: $ProcessHandler$ProcessCommand) => $Process$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessHandler_ = $ProcessHandler$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.aspect.property.IAspectPropertyTypeInstance" {
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"

export interface $IAspectPropertyTypeInstance<T extends $IValueType<(V)>, V extends $IValue> {

 "getType"(): T
 "getValidator"(): $Predicate<(V)>
 "getTranslationKey"(): StringJS
get "type"(): T
get "validator"(): $Predicate<(V)>
get "translationKey"(): StringJS
}

export namespace $IAspectPropertyTypeInstance {
const probejs$$marker: never
}
export class $IAspectPropertyTypeInstance$$Static<T extends $IValueType<(V)>, V extends $IValue> implements $IAspectPropertyTypeInstance {


 "getType"(): T
 "getValidator"(): $Predicate<(V)>
 "getTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAspectPropertyTypeInstance$$Type<T, V> = ($IAspectPropertyTypeInstance<(T), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAspectPropertyTypeInstance_<T, V> = $IAspectPropertyTypeInstance$$Type<(T), (V)>;
}}
declare module "org.cyclops.cyclopscore.config.ConfigurablePropertyCommon" {
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ModConfigLocation, $ModConfigLocation$$Type} from "org.cyclops.cyclopscore.config.ModConfigLocation"

export interface $ConfigurablePropertyCommon extends $Annotation {

 "category"(): StringJS
 "comment"(): StringJS
 "configLocation"(): $ModConfigLocation
 "showInGui"(): boolean
 "namedId"(): StringJS
 "isCommandable"(): boolean
 "minimalValue"(): integer
 "maximalValue"(): integer
 "requiresWorldRestart"(): boolean
 "requiresMcRestart"(): boolean
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "annotationType"(): $Class<($Annotation)>
get "commandable"(): boolean
}

export namespace $ConfigurablePropertyCommon {
const probejs$$marker: never
}
export class $ConfigurablePropertyCommon$$Static implements $ConfigurablePropertyCommon {


 "category"(): StringJS
 "comment"(): StringJS
 "configLocation"(): $ModConfigLocation
 "showInGui"(): boolean
 "namedId"(): StringJS
 "isCommandable"(): boolean
 "minimalValue"(): integer
 "maximalValue"(): integer
 "requiresWorldRestart"(): boolean
 "requiresMcRestart"(): boolean
 "equals"(arg0: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "annotationType"(): $Class<($Annotation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurablePropertyCommon$$Type = ($ConfigurablePropertyCommon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurablePropertyCommon_ = $ConfigurablePropertyCommon$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.block.IgnoredBlockStatus$Status" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $IgnoredBlockStatus$Status extends $Enum<($IgnoredBlockStatus$Status)> implements $StringRepresentable {
static readonly "ACTIVE": $IgnoredBlockStatus$Status
static readonly "INACTIVE": $IgnoredBlockStatus$Status
static readonly "ERROR": $IgnoredBlockStatus$Status


public static "values"(): ($IgnoredBlockStatus$Status)[]
public static "valueOf"(arg0: StringJS): $IgnoredBlockStatus$Status
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
export type $IgnoredBlockStatus$Status$$Type = (("active") | ("inactive") | ("error"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IgnoredBlockStatus$Status_ = $IgnoredBlockStatus$Status$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.MessageEndpoint" {
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export interface $MessageEndpoint {

 "sendText"(text: StringJS): void
 "sendBinary"(data: $ByteBuffer$$Type): void
 "sendPing"(data: $ByteBuffer$$Type): void
 "sendPong"(data: $ByteBuffer$$Type): void
 "sendClose"(): void
}

export namespace $MessageEndpoint {
const probejs$$marker: never
}
export class $MessageEndpoint$$Static implements $MessageEndpoint {


 "sendText"(text: StringJS): void
 "sendBinary"(data: $ByteBuffer$$Type): void
 "sendPing"(data: $ByteBuffer$$Type): void
 "sendPong"(data: $ByteBuffer$$Type): void
 "sendClose"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageEndpoint$$Type = ($MessageEndpoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageEndpoint_ = $MessageEndpoint$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.path.ISidedPathElement" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPathElement, $IPathElement$$Type} from "org.cyclops.integrateddynamics.api.path.IPathElement"

export interface $ISidedPathElement extends $Comparable<($ISidedPathElement)> {

 "getSide"(): $Direction
 "getPathElement"(): $IPathElement
 "compareTo"(arg0: $ISidedPathElement$$Type): integer
get "side"(): $Direction
get "pathElement"(): $IPathElement
}

export namespace $ISidedPathElement {
const probejs$$marker: never
}
export class $ISidedPathElement$$Static implements $ISidedPathElement {


 "getSide"(): $Direction
 "getPathElement"(): $IPathElement
 "compareTo"(arg0: $ISidedPathElement$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedPathElement$$Type = ($ISidedPathElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedPathElement_ = $ISidedPathElement$$Type;
}}
declare module "org.cyclops.integrateddynamics.blockentity.BlockEntityEnergyBattery" {
import {$IEnergyStorageCapacity, $IEnergyStorageCapacity$$Type} from "org.cyclops.integrateddynamics.capability.energystorage.IEnergyStorageCapacity"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockEntityCableConnectable, $BlockEntityCableConnectable$$Type} from "org.cyclops.integrateddynamics.core.blockentity.BlockEntityCableConnectable"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$INetworkElementProvider, $INetworkElementProvider$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElementProvider"

export class $BlockEntityEnergyBattery extends $BlockEntityCableConnectable implements $IEnergyStorageCapacity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "setCapacity"(arg0: integer): void
public "isCreative"(): boolean
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "canExtract"(): boolean
public "canReceive"(): boolean
public "setEnergyStored"(arg0: integer): void
public "onUpdateReceived"(): void
public "getUpdateBackoffTicks"(): integer
public "getEnergyStored"(): integer
public "getMaxEnergyStored"(): integer
public static "getEnergyPerTick"(arg0: integer): integer
public "getNetworkElementProvider"(): $INetworkElementProvider
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
set "capacity"(value: integer)
get "creative"(): boolean
set "energyStored"(value: integer)
get "updateBackoffTicks"(): integer
get "energyStored"(): integer
get "maxEnergyStored"(): integer
get "networkElementProvider"(): $INetworkElementProvider
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityEnergyBattery$$Type = ($BlockEntityEnergyBattery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityEnergyBattery_ = $BlockEntityEnergyBattery$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.ISidedNetworkElement" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$INetworkElement, $INetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ISidedNetworkElement extends $INetworkElement {

 "getSide"(): $Direction
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$$Type): void
 "isUpdate"(): boolean
 "update"(arg0: $INetwork$$Type): void
 "getPriority"(): integer
 "canRevalidate"(arg0: $INetwork$$Type): boolean
 "revalidate"(arg0: $INetwork$$Type): void
/**
 * 
 * @deprecated
 */
 "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean, arg2: boolean): void
 "addDrops"(arg0: $BlockState$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean, arg3: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type): void
 "onPostRemoved"(arg0: $INetwork$$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$$Type, arg1: $BlockGetter$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type): void
 "getUpdateInterval"(): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "beforeNetworkKill"(arg0: $INetwork$$Type): void
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkAlive"(arg0: $INetwork$$Type): void
 "onNetworkAddition"(arg0: $INetwork$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onNetworkRemoval"(arg0: $INetwork$$Type): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$$Type): void
 "compareTo"(arg0: $INetworkElement$$Type): integer
get "side"(): $Direction
get "channel"(): integer
get "priority"(): integer
get "updateInterval"(): integer
}

export namespace $ISidedNetworkElement {
const probejs$$marker: never
}
export class $ISidedNetworkElement$$Static implements $ISidedNetworkElement {


 "getSide"(): $Direction
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$$Type): void
 "isUpdate"(): boolean
 "update"(arg0: $INetwork$$Type): void
 "getPriority"(): integer
 "canRevalidate"(arg0: $INetwork$$Type): boolean
 "revalidate"(arg0: $INetwork$$Type): void
/**
 * 
 * @deprecated
 */
 "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean, arg2: boolean): void
 "addDrops"(arg0: $BlockState$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean, arg3: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type): void
 "onPostRemoved"(arg0: $INetwork$$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$$Type, arg1: $BlockGetter$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type): void
 "getUpdateInterval"(): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "beforeNetworkKill"(arg0: $INetwork$$Type): void
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkAlive"(arg0: $INetwork$$Type): void
 "onNetworkAddition"(arg0: $INetwork$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onNetworkRemoval"(arg0: $INetwork$$Type): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$$Type): void
 "compareTo"(arg0: $INetworkElement$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedNetworkElement$$Type = ($ISidedNetworkElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedNetworkElement_ = $ISidedNetworkElement$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Language" {
import {$OptionDescriptors, $OptionDescriptors$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.options.OptionDescriptors"
import {$Set, $Set$$Type} from "java.util.Set"

export class $Language {


public "getVersion"(): StringJS
public "getImplementationName"(): StringJS
public "getName"(): StringJS
public "getId"(): StringJS
public "getMimeTypes"(): $Set<(StringJS)>
public "getOptions"(): $OptionDescriptors
public "isInteractive"(): boolean
public "getWebsite"(): StringJS
public "getDefaultMimeType"(): StringJS
get "version"(): StringJS
get "implementationName"(): StringJS
get "name"(): StringJS
get "id"(): StringJS
get "mimeTypes"(): $Set<(StringJS)>
get "options"(): $OptionDescriptors
get "interactive"(): boolean
get "website"(): StringJS
get "defaultMimeType"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Language$$Type = ($Language);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Language_ = $Language$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.logicprogrammer.IValueTypeLogicProgrammerElement" {
import {$ILogicProgrammerElement, $ILogicProgrammerElement$$Type} from "org.cyclops.integrateddynamics.api.logicprogrammer.ILogicProgrammerElement"
import {$IGuiInputElementValueType, $IGuiInputElementValueType$$Type} from "org.cyclops.integrateddynamics.api.client.gui.subgui.IGuiInputElementValueType"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"
import {$IVariableFacade, $IVariableFacade$$Type} from "org.cyclops.integrateddynamics.api.item.IVariableFacade"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ILogicProgrammerElementType, $ILogicProgrammerElementType$$Type} from "org.cyclops.integrateddynamics.api.logicprogrammer.ILogicProgrammerElementType"
import {$ISubGuiBox, $ISubGuiBox$$Type} from "org.cyclops.integrateddynamics.api.client.gui.subgui.ISubGuiBox"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$ClickType, $ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$IConfigRenderPattern, $IConfigRenderPattern$$Type} from "org.cyclops.integrateddynamics.api.logicprogrammer.IConfigRenderPattern"

export interface $IValueTypeLogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $ILogicProgrammerElement<(S), (G), (C)> {

 "getValue"(): $IValue
 "setValue"(arg0: $IValue$$Type): void
 "getValueType"(): $IValueType<(any)>
 "createInnerGuiElement"<G2 extends $Screen, C2 extends $AbstractContainerMenu>(): $IGuiInputElementValueType<(any), (G2), (C2)>
 "getType"(): $ILogicProgrammerElementType<(any)>
 "isFor"(arg0: $IVariableFacade$$Type): boolean
 "setFocused"(arg0: S, arg1: boolean): void
 "isFocused"(arg0: S): boolean
 "getMatchString"(): StringJS
 "matchesOutput"(arg0: $IValueType$$Type<(any)>): boolean
 "slotClick"(arg0: integer, arg1: $Slot$$Type, arg2: integer, arg3: $ClickType$$Type, arg4: $Player$$Type): boolean
 "setValueInGui"(arg0: S): void
 "matchesInput"(arg0: $IValueType$$Type<(any)>): boolean
 "createSlot"(arg0: $Container$$Type, arg1: integer, arg2: integer, arg3: integer): $Slot
 "writeElement"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $ItemStack
 "loadElement"(arg0: $IVariableFacade$$Type): void
 "isItemValidForSlot"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "onInputSlotUpdated"(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type): void
 "canWriteElementPre"(): boolean
 "getItemStackSizeLimit"(): integer
 "setValueInContainer"(arg0: C): void
 "canCurrentlyReadFromOtherItem"(): boolean
 "getSymbol"(): StringJS
 "getName"(): $Component
 "validate"(): $Component
 "getColor"(): integer
 "activate"(): void
 "deactivate"(): void
 "createSubGui"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: G, arg5: C): S
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>): void
 "getRenderPattern"(): $IConfigRenderPattern
get "value"(): $IValue
set "value"(value: $IValue$$Type)
get "valueType"(): $IValueType<(any)>
get "type"(): $ILogicProgrammerElementType<(any)>
get "matchString"(): StringJS
set "valueInGui"(value: S)
get "itemStackSizeLimit"(): integer
set "valueInContainer"(value: C)
get "symbol"(): StringJS
get "name"(): $Component
get "color"(): integer
get "renderPattern"(): $IConfigRenderPattern
}

export namespace $IValueTypeLogicProgrammerElement {
function createSlotDefault(arg0: $ILogicProgrammerElement$$Type<(any), (any), (any)>, arg1: $Container$$Type, arg2: integer, arg3: integer, arg4: integer): $Slot
const probejs$$marker: never
}
export class $IValueTypeLogicProgrammerElement$$Static<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> implements $IValueTypeLogicProgrammerElement {


 "getValue"(): $IValue
 "setValue"(arg0: $IValue$$Type): void
 "getValueType"(): $IValueType<(any)>
 "createInnerGuiElement"<G2 extends $Screen, C2 extends $AbstractContainerMenu>(): $IGuiInputElementValueType<(any), (G2), (C2)>
 "getType"(): $ILogicProgrammerElementType<(any)>
 "isFor"(arg0: $IVariableFacade$$Type): boolean
 "setFocused"(arg0: S, arg1: boolean): void
 "isFocused"(arg0: S): boolean
 "getMatchString"(): StringJS
 "matchesOutput"(arg0: $IValueType$$Type<(any)>): boolean
 "slotClick"(arg0: integer, arg1: $Slot$$Type, arg2: integer, arg3: $ClickType$$Type, arg4: $Player$$Type): boolean
 "setValueInGui"(arg0: S): void
 "matchesInput"(arg0: $IValueType$$Type<(any)>): boolean
 "createSlot"(arg0: $Container$$Type, arg1: integer, arg2: integer, arg3: integer): $Slot
 "writeElement"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $ItemStack
 "loadElement"(arg0: $IVariableFacade$$Type): void
 "isItemValidForSlot"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "onInputSlotUpdated"(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type): void
 "canWriteElementPre"(): boolean
 "getItemStackSizeLimit"(): integer
 "setValueInContainer"(arg0: C): void
static "createSlotDefault"(arg0: $ILogicProgrammerElement$$Type<(any), (any), (any)>, arg1: $Container$$Type, arg2: integer, arg3: integer, arg4: integer): $Slot
 "canCurrentlyReadFromOtherItem"(): boolean
 "getSymbol"(): StringJS
 "getName"(): $Component
 "validate"(): $Component
 "getColor"(): integer
 "activate"(): void
 "deactivate"(): void
 "createSubGui"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: G, arg5: C): S
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>): void
 "getRenderPattern"(): $IConfigRenderPattern
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValueTypeLogicProgrammerElement$$Type<S, G, C> = ($IValueTypeLogicProgrammerElement<(S), (G), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValueTypeLogicProgrammerElement_<S, G, C> = $IValueTypeLogicProgrammerElement$$Type<(S), (G), (C)>;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeMechanicalSqueezer" {
import {$RecipeSqueezer$IngredientChance, $RecipeSqueezer$IngredientChance$$Type} from "org.cyclops.integrateddynamics.core.recipe.type.RecipeSqueezer$IngredientChance"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$RecipeSqueezer, $RecipeSqueezer$$Type} from "org.cyclops.integrateddynamics.core.recipe.type.RecipeSqueezer"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export class $RecipeMechanicalSqueezer extends $RecipeSqueezer {

constructor(arg0: $Ingredient$$Type, arg1: $NonNullList$$Type<($RecipeSqueezer$IngredientChance$$Type)>, arg2: $Optional$$Type<($FluidStack$$Type)>, arg3: integer)

public "getDuration"(): integer
public "getType"(): $RecipeType<(any)>
public "getSerializer"(): $RecipeSerializer<(any)>
get "duration"(): integer
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeMechanicalSqueezer$$Type = ($RecipeMechanicalSqueezer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeMechanicalSqueezer_ = $RecipeMechanicalSqueezer$$Type;
}}
declare module "org.cyclops.cyclopscore.command.argument.ArgumentInfoMod$Template" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentTypeConfigProperty, $ArgumentTypeConfigProperty$$Type} from "org.cyclops.cyclopscore.command.argument.ArgumentTypeConfigProperty"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ArgumentInfoMod$Template implements $ArgumentTypeInfo$Template<($ArgumentTypeConfigProperty)> {


public "type"(): $ArgumentTypeInfo<(any), (any)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $ArgumentTypeConfigProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentInfoMod$Template$$Type = ($ArgumentInfoMod$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentInfoMod$Template_ = $ArgumentInfoMod$Template$$Type;
}}
declare module "org.cyclops.cyclopscore.config.extendedconfig.ExtendedConfigRegistry" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ConfigurablePropertyData, $ConfigurablePropertyData$$Type} from "org.cyclops.cyclopscore.config.ConfigurablePropertyData"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ExtendedConfigCommon, $ExtendedConfigCommon$$Type} from "org.cyclops.cyclopscore.config.extendedconfig.ExtendedConfigCommon"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IModBase, $IModBase$$Type} from "org.cyclops.cyclopscore.init.IModBase"

export class $ExtendedConfigRegistry<C extends $ExtendedConfigCommon<(C), (I), (M)>, I, M extends $IModBase> extends $ExtendedConfigCommon<(C), (I), (M)> {
 "configProperties": $Map<(StringJS), ($ConfigurablePropertyData<(any)>)>

constructor(arg0: M, arg1: StringJS, arg2: $Function$$Type<(C), (I)>)

public "getResourceKey"(): $ResourceKey<(I)>
public "getRegistry"(): $Registry<(I)>
get "resourceKey"(): $ResourceKey<(I)>
get "registry"(): $Registry<(I)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedConfigRegistry$$Type<C, I, M> = ($ExtendedConfigRegistry<(C), (I), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedConfigRegistry_<C, I, M> = $ExtendedConfigRegistry$$Type<(C), (I), (M)>;
}}
declare module "org.cyclops.integrateddynamics.item.ItemLabeller" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemLocation, $ItemLocation$$Type} from "org.cyclops.cyclopscore.inventory.ItemLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemGui, $ItemGui$$Type} from "org.cyclops.cyclopscore.item.ItemGui"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $ItemLabeller extends $ItemGui {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getContainer"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemLocation$$Type): $MenuProvider
public "getContainerClass"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): $Class<($AbstractContainerMenu)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLabeller$$Type = ($ItemLabeller);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLabeller_ = $ItemLabeller$$Type;
}}
declare module "org.cyclops.cyclopscore.persist.nbt.INBTSerializable" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $INBTSerializable {

 "toNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
}

export namespace $INBTSerializable {
const probejs$$marker: never
}
export class $INBTSerializable$$Static implements $INBTSerializable {


 "toNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTSerializable$$Type = ($INBTSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTSerializable_ = $INBTSerializable$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockMenrilLogFilled" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMenrilLogFilled extends $RotatedPillarBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "SIDE": $EnumProperty<($Direction)>
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMenrilLogFilled$$Type = ($BlockMenrilLogFilled);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMenrilLogFilled_ = $BlockMenrilLogFilled$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockMechanicalSqueezer" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockMechanicalMachine, $BlockMechanicalMachine$$Type} from "org.cyclops.integrateddynamics.core.block.BlockMechanicalMachine"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMechanicalSqueezer extends $BlockMechanicalMachine {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockMechanicalSqueezer)>
static readonly "NBT_TANK": StringJS
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
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMechanicalSqueezer$$Type = ($BlockMechanicalSqueezer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMechanicalSqueezer_ = $BlockMechanicalSqueezer$$Type;
}}
declare module "org.cyclops.cyclopscore.helper.IBaseHelpers" {
import {$Triple, $Triple$$Type} from "org.apache.commons.lang3.tuple.Triple"

export interface $IBaseHelpers {

 "tryParse"(arg0: StringJS, arg1: any): any
 "RGBToInt"(arg0: integer, arg1: integer, arg2: integer): integer
 "RGBAToInt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
 "intToRGB"(arg0: integer): $Triple<(float), (float), (float)>
 "rgbToBgra"(arg0: integer, arg1: integer): integer
 "rgbToBgr"(arg0: integer): integer
 "addSafe"(arg0: integer, arg1: integer): integer
 "multiplySafe"(arg0: integer, arg1: integer): integer
 "castSafe"(arg0: long): integer
 "openUrl"(arg0: StringJS): void
 "addAlphaToColor"(arg0: integer, arg1: integer): integer
 "addAlphaToColor"(arg0: integer, arg1: float): integer
}

export namespace $IBaseHelpers {
const probejs$$marker: never
}
export class $IBaseHelpers$$Static implements $IBaseHelpers {


 "tryParse"(arg0: StringJS, arg1: any): any
 "RGBToInt"(arg0: integer, arg1: integer, arg2: integer): integer
 "RGBAToInt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
 "intToRGB"(arg0: integer): $Triple<(float), (float), (float)>
 "rgbToBgra"(arg0: integer, arg1: integer): integer
 "rgbToBgr"(arg0: integer): integer
 "addSafe"(arg0: integer, arg1: integer): integer
 "multiplySafe"(arg0: integer, arg1: integer): integer
 "castSafe"(arg0: long): integer
 "openUrl"(arg0: StringJS): void
 "addAlphaToColor"(arg0: integer, arg1: integer): integer
 "addAlphaToColor"(arg0: integer, arg1: float): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBaseHelpers$$Type = ($IBaseHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBaseHelpers_ = $IBaseHelpers$$Type;
}}
declare module "org.cyclops.integrateddynamics.advancement.criterion.NetworkInitializedTrigger$Instance" {
import {$ICriterionInstanceTestable, $ICriterionInstanceTestable$$Type} from "org.cyclops.cyclopscore.advancement.criterion.ICriterionInstanceTestable"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$NetworkInitializedEvent, $NetworkInitializedEvent$$Type} from "org.cyclops.integrateddynamics.core.network.event.NetworkInitializedEvent"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $NetworkInitializedTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance, $ICriterionInstanceTestable<($NetworkInitializedEvent)> {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, minCables: $Optional$$Type<(integer)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ServerPlayer$$Type, arg1: any): boolean
public "test"(arg0: $ServerPlayer$$Type, arg1: $NetworkInitializedEvent$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "minCables"(): $Optional<(integer)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkInitializedTrigger$Instance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "minCables"?: (integer)?}) | ([player?: ($ContextAwarePredicate$$Type)?, minCables?: (integer)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkInitializedTrigger$Instance_ = $NetworkInitializedTrigger$Instance$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.advancement.criterion.VariablePredicate" {
import {$ValuePredicate, $ValuePredicate$$Type} from "org.cyclops.integrateddynamics.api.advancement.criterion.ValuePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IVariable, $IVariable$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariable"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"

export class $VariablePredicate<V extends $IVariable<(any)>> {
static readonly "ANY": $VariablePredicate<(any)>

constructor(arg0: $Class$$Type<(V)>, arg1: $Optional$$Type<($IValueType$$Type)>, arg2: $Optional$$Type<($ValuePredicate$$Type)>)

public "test"(arg0: $IVariable$$Type<(any)>): boolean
public "getValueType"(): $Optional<($IValueType)>
public "getValuePredicate"(): $Optional<($ValuePredicate)>
get "valueType"(): $Optional<($IValueType)>
get "valuePredicate"(): $Optional<($ValuePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariablePredicate$$Type<V> = ($VariablePredicate<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariablePredicate_<V> = $VariablePredicate$$Type<(V)>;
}}
declare module "org.cyclops.integrateddynamics.core.block.BlockRayTraceResultComponent" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$VoxelShapeComponents$IComponent, $VoxelShapeComponents$IComponent$$Type} from "org.cyclops.integrateddynamics.core.block.VoxelShapeComponents$IComponent"

export class $BlockRayTraceResultComponent extends $BlockHitResult {

constructor(arg0: $BlockHitResult$$Type, arg1: $VoxelShapeComponents$IComponent$$Type)

public "getComponent"(): $VoxelShapeComponents$IComponent
get "component"(): $VoxelShapeComponents$IComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRayTraceResultComponent$$Type = ($BlockRayTraceResultComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRayTraceResultComponent_ = $BlockRayTraceResultComponent$$Type;
}}
declare module "org.cyclops.cyclopscore.helper.IMinecraftHelpers" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IMinecraftHelpers {

 "setDay"(arg0: $ServerLevel$$Type, arg1: boolean): void
 "isFakePlayer"(arg0: $Player$$Type): boolean
 "isModLoaded"(arg0: StringJS): boolean
 "openMenu"(arg0: $ServerPlayer$$Type, arg1: $MenuProvider$$Type, arg2: $Consumer$$Type<($FriendlyByteBuf)>): void
 "isClientSide"(): boolean
 "getDayLength"(): integer
 "getBlockNotify"(): integer
 "successAction"<T>(arg0: T): $InteractionResultHolder<(T)>
 "getSecondInTicks"(): integer
 "getBlockNotifyClient"(): integer
 "isPlayerInventoryFull"(arg0: $Player$$Type): boolean
 "compareBlockPos"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): integer
 "isMinecraftInitialized"(): boolean
 "isModdedEnvironment"(): boolean
 "isClientSideThread"(): boolean
 "getCurrentServer"(): $MinecraftServer
 "isDevEnvironment"(): boolean
 "getMinecraftVersion"(): StringJS
 "getComparatorMultiplier"(): integer
 "getBlockNotifyNoRerender"(): integer
 "getMinecraftVersionMajorMinor"(): StringJS
get "clientSide"(): boolean
get "dayLength"(): integer
get "blockNotify"(): integer
get "secondInTicks"(): integer
get "blockNotifyClient"(): integer
get "minecraftInitialized"(): boolean
get "moddedEnvironment"(): boolean
get "clientSideThread"(): boolean
get "currentServer"(): $MinecraftServer
get "devEnvironment"(): boolean
get "minecraftVersion"(): StringJS
get "comparatorMultiplier"(): integer
get "blockNotifyNoRerender"(): integer
get "minecraftVersionMajorMinor"(): StringJS
}

export namespace $IMinecraftHelpers {
const probejs$$marker: never
}
export class $IMinecraftHelpers$$Static implements $IMinecraftHelpers {


 "setDay"(arg0: $ServerLevel$$Type, arg1: boolean): void
 "isFakePlayer"(arg0: $Player$$Type): boolean
 "isModLoaded"(arg0: StringJS): boolean
 "openMenu"(arg0: $ServerPlayer$$Type, arg1: $MenuProvider$$Type, arg2: $Consumer$$Type<($FriendlyByteBuf)>): void
 "isClientSide"(): boolean
 "getDayLength"(): integer
 "getBlockNotify"(): integer
 "successAction"<T>(arg0: T): $InteractionResultHolder<(T)>
 "getSecondInTicks"(): integer
 "getBlockNotifyClient"(): integer
 "isPlayerInventoryFull"(arg0: $Player$$Type): boolean
 "compareBlockPos"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): integer
 "isMinecraftInitialized"(): boolean
 "isModdedEnvironment"(): boolean
 "isClientSideThread"(): boolean
 "getCurrentServer"(): $MinecraftServer
 "isDevEnvironment"(): boolean
 "getMinecraftVersion"(): StringJS
 "getComparatorMultiplier"(): integer
 "getBlockNotifyNoRerender"(): integer
 "getMinecraftVersionMajorMinor"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecraftHelpers$$Type = ($IMinecraftHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMinecraftHelpers_ = $IMinecraftHelpers$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.ITerminalRowColumnProvider$RowsAndColumns" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ITerminalRowColumnProvider$RowsAndColumns extends $Record {

constructor(rows: integer, columns: integer)

public "columns"(): integer
public "rows"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalRowColumnProvider$RowsAndColumns$$Type = ({"columns"?: integer, "rows"?: integer}) | ([columns?: integer, rows?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalRowColumnProvider$RowsAndColumns_ = $ITerminalRowColumnProvider$RowsAndColumns$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.INetworkCarrier" {
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"

export interface $INetworkCarrier {

 "setNetwork"(arg0: $INetwork$$Type): void
 "getNetwork"(): $INetwork
set "network"(value: $INetwork$$Type)
get "network"(): $INetwork
}

export namespace $INetworkCarrier {
const probejs$$marker: never
}
export class $INetworkCarrier$$Static implements $INetworkCarrier {


 "setNetwork"(arg0: $INetwork$$Type): void
 "getNetwork"(): $INetwork
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkCarrier$$Type = ($INetworkCarrier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkCarrier_ = $INetworkCarrier$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockEnergyBatteryBase" {
import {$BlockContainerCabled, $BlockContainerCabled$$Type} from "org.cyclops.integrateddynamics.core.block.BlockContainerCabled"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockEntityEnergyBattery, $BlockEntityEnergyBattery$$Type} from "org.cyclops.integrateddynamics.blockentity.BlockEntityEnergyBattery"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEnergyBatteryBase extends $BlockContainerCabled {
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

public static "fill"(arg0: $IEnergyStorage$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "isCreative"(): boolean
public static "itemStackToTile"(arg0: $ItemStack$$Type, arg1: $BlockEntityEnergyBattery$$Type): void
public "asHolder"(): $Holder<(any)>
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEnergyBatteryBase$$Type = ($BlockEnergyBatteryBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEnergyBatteryBase_ = $BlockEnergyBatteryBase$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.client.gui.subgui.ISubGuiBox" {
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ISubGui, $ISubGui$$Type} from "org.cyclops.integrateddynamics.api.client.gui.subgui.ISubGui"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"

export interface $ISubGuiBox extends $ISubGui {

 "getWidth"(): integer
 "getHeight"(): integer
 "getY"(): integer
 "getX"(): integer
 "tick"(): void
 "init"(arg0: integer, arg1: integer): void
 "renderBg"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: $TextureManager$$Type, arg4: $Font$$Type, arg5: float, arg6: integer, arg7: integer): void
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "drawGuiContainerForegroundLayer"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: $TextureManager$$Type, arg4: $Font$$Type, arg5: integer, arg6: integer): void
get "width"(): integer
get "height"(): integer
get "y"(): integer
get "x"(): integer
}

export namespace $ISubGuiBox {
const probejs$$marker: never
}
export class $ISubGuiBox$$Static implements $ISubGuiBox {


 "getWidth"(): integer
 "getHeight"(): integer
 "getY"(): integer
 "getX"(): integer
 "tick"(): void
 "init"(arg0: integer, arg1: integer): void
 "renderBg"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: $TextureManager$$Type, arg4: $Font$$Type, arg5: float, arg6: integer, arg7: integer): void
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "drawGuiContainerForegroundLayer"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: $TextureManager$$Type, arg4: $Font$$Type, arg5: integer, arg6: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubGuiBox$$Type = ($ISubGuiBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubGuiBox_ = $ISubGuiBox$$Type;
}}
declare module "org.cyclops.integratedterminals.inventory.container.ContainerTerminalStorageBase" {
import {$InventoryContainer, $InventoryContainer$$Type} from "org.cyclops.cyclopscore.inventory.container.InventoryContainer"
import {$IDirtyMarkListener, $IDirtyMarkListener$$Type} from "org.cyclops.cyclopscore.persist.IDirtyMarkListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ITerminalStorageTabCommon$ISlotPositionCallback, $ITerminalStorageTabCommon$ISlotPositionCallback$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon$ISlotPositionCallback"
import {$ContainerScreenTerminalStorage, $ContainerScreenTerminalStorage$$Type} from "org.cyclops.integratedterminals.client.gui.container.ContainerScreenTerminalStorage"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$TerminalStorageState, $TerminalStorageState$$Type} from "org.cyclops.integratedterminals.inventory.container.TerminalStorageState"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ITerminalStorageTabCommon, $ITerminalStorageTabCommon$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$ITerminalStorageLocation, $ITerminalStorageLocation$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.location.ITerminalStorageLocation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ITerminalStorageTabServer, $ITerminalStorageTabServer$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabServer"
import {$ITerminalStorageTabCommon$IVariableInventory, $ITerminalStorageTabCommon$IVariableInventory$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon$IVariableInventory"
import {$CraftingOptionGuiData, $CraftingOptionGuiData$$Type} from "org.cyclops.integratedterminals.core.client.gui.CraftingOptionGuiData"
import {$ITerminalStorageTabClient, $ITerminalStorageTabClient$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabClient"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$IVariable, $IVariable$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariable"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$ContainerTerminalStorageBase$InitTabData, $ContainerTerminalStorageBase$InitTabData$$Type} from "org.cyclops.integratedterminals.inventory.container.ContainerTerminalStorageBase$InitTabData"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"

export class $ContainerTerminalStorageBase<L> extends $InventoryContainer implements $IDirtyMarkListener {
readonly "quickcraftSlots": $Set<($Slot)>
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "screen": $ContainerScreenTerminalStorage<(any), (any)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
 "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
readonly "containerListeners": $List<($ContainerListener)>
static readonly "BUTTON_SET_DEFAULTS": StringJS
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(any)>, arg1: integer, arg2: $Inventory$$Type, arg3: $Optional$$Type<($ContainerTerminalStorageBase$InitTabData$$Type)>, arg4: $TerminalStorageState$$Type, arg5: $Optional$$Type<($INetwork$$Type)>, arg6: $Optional$$Type<($ITerminalStorageTabCommon$IVariableInventory$$Type)>)

public "removed"(arg0: $Player$$Type): void
public "getLocation"(): $ITerminalStorageLocation<(L)>
public "setSelectedTab"(arg0: StringJS): void
public "getNextValueId"(): integer
public "getTabsServer"(): $Map<(StringJS), ($ITerminalStorageTabServer)>
public "getTabClient"(arg0: StringJS): $ITerminalStorageTabClient<(any)>
public "getTabServer"(arg0: StringJS): $ITerminalStorageTabServer
public "getSelectedTab"(): StringJS
public "getTabsClient"(): $Map<(StringJS), ($ITerminalStorageTabClient<(any)>)>
public "getTabCommon"(arg0: StringJS): $ITerminalStorageTabCommon
public "getTabsCommon"(): $Map<(StringJS), ($ITerminalStorageTabCommon)>
public "getTabSlots"(arg0: StringJS): $List<($Pair<($Slot), ($ITerminalStorageTabCommon$ISlotPositionCallback)>)>
public "getGuiState"(): $TerminalStorageState
public "onDirty"(): void
public "getWorld"(): $Level
public "getNetwork"(): $Optional<($INetwork)>
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "getVariableInventory"(): $Optional<($ITerminalStorageTabCommon$IVariableInventory)>
public "getLocationInstance"(): L
public "broadcastChanges"(): void
public "getChannelStrings"(): $List<(StringJS)>
public "getTabsClientCount"(): integer
public "setSelectedChannel"(arg0: integer): void
public "getSelectedChannel"(): integer
public "sendGuiStateToServer"(): void
public "refreshChannelStrings"(): void
public "sendOpenCraftingPlanGuiPacketToServer"<T, M, L>(arg0: $HolderLookup$Provider$$Type, arg1: $CraftingOptionGuiData$$Type<(T), (M), (L)>): void
public "sendOpenCraftingJobAmountGuiPacketToServer"<T, M, L>(arg0: $HolderLookup$Provider$$Type, arg1: $CraftingOptionGuiData$$Type<(T), (M), (L)>): void
public "onVariableContentsUpdated"(arg0: $INetwork$$Type, arg1: $IVariable$$Type<(any)>): void
get "location"(): $ITerminalStorageLocation<(L)>
set "selectedTab"(value: StringJS)
get "nextValueId"(): integer
get "tabsServer"(): $Map<(StringJS), ($ITerminalStorageTabServer)>
get "selectedTab"(): StringJS
get "tabsClient"(): $Map<(StringJS), ($ITerminalStorageTabClient<(any)>)>
get "tabsCommon"(): $Map<(StringJS), ($ITerminalStorageTabCommon)>
get "guiState"(): $TerminalStorageState
get "world"(): $Level
get "network"(): $Optional<($INetwork)>
get "variableInventory"(): $Optional<($ITerminalStorageTabCommon$IVariableInventory)>
get "locationInstance"(): L
get "channelStrings"(): $List<(StringJS)>
get "tabsClientCount"(): integer
set "selectedChannel"(value: integer)
get "selectedChannel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerTerminalStorageBase$$Type<L> = ($ContainerTerminalStorageBase<(L)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerTerminalStorageBase_<L> = $ContainerTerminalStorageBase$$Type<(L)>;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeSerializerDryingBasin" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeDryingBasin, $RecipeDryingBasin$$Type} from "org.cyclops.integrateddynamics.core.recipe.type.RecipeDryingBasin"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RecipeSerializerDryingBasin implements $RecipeSerializer<($RecipeDryingBasin)> {
static readonly "CODEC": $MapCodec<($RecipeDryingBasin)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeDryingBasin)>

constructor()

public "codec"(): $MapCodec<($RecipeDryingBasin)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeDryingBasin)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerDryingBasin$$Type = ($RecipeSerializerDryingBasin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerDryingBasin_ = $RecipeSerializerDryingBasin$$Type;
}}
declare module "org.cyclops.cyclopscore.config.ConfigHandlerCommon" {
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ConfigurablePropertyData, $ConfigurablePropertyData$$Type} from "org.cyclops.cyclopscore.config.ConfigurablePropertyData"
import {$ExtendedConfigRegistry, $ExtendedConfigRegistry$$Type} from "org.cyclops.cyclopscore.config.extendedconfig.ExtendedConfigRegistry"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ExtendedConfigCommon, $ExtendedConfigCommon$$Type} from "org.cyclops.cyclopscore.config.extendedconfig.ExtendedConfigCommon"
import {$LinkedHashSet, $LinkedHashSet$$Type} from "java.util.LinkedHashSet"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IModBase, $IModBase$$Type} from "org.cyclops.cyclopscore.init.IModBase"

export class $ConfigHandlerCommon {

constructor(arg0: $IModBase$$Type)

public "getMod"(): $IModBase
public "addCategory"(arg0: StringJS): void
public "loadModInit"(): void
public "loadSetup"(): void
public "getDictionary"(): $Map<(StringJS), ($ExtendedConfigCommon<(any), (any), (any)>)>
public static "getConfigId"(arg0: $ExtendedConfigCommon$$Type<(any), (any), (any)>): $ResourceLocation
public "getCategories"(): $Set<(StringJS)>
public "addToConfigDictionary"(arg0: $ExtendedConfigCommon$$Type<(any), (any), (any)>): void
public "getConfigurables"(): $LinkedHashSet<($ExtendedConfigCommon<(any), (any), (any)>)>
public "getConfigDictionary"(): $Map<(StringJS), ($ExtendedConfigCommon<(any), (any), (any)>)>
public "registerToRegistry"<V>(arg0: $Registry$$Type<(V)>, arg1: $ExtendedConfigRegistry$$Type<(any), (V), (any)>, arg2: $Callable$$Type<(any)>): void
public "addConfigurable"(arg0: $ExtendedConfigCommon$$Type<(any), (any), (any)>): boolean
public "loadForgeRegistries"(): void
public "loadForgeRegistriesFilled"(): void
public "generateConfigProperties"(arg0: $ExtendedConfigCommon$$Type<(any), (any), (any)>): void
public "getCommandableProperties"(): $Map<(StringJS), ($ConfigurablePropertyData)>
get "mod"(): $IModBase
get "dictionary"(): $Map<(StringJS), ($ExtendedConfigCommon<(any), (any), (any)>)>
get "categories"(): $Set<(StringJS)>
get "configurables"(): $LinkedHashSet<($ExtendedConfigCommon<(any), (any), (any)>)>
get "configDictionary"(): $Map<(StringJS), ($ExtendedConfigCommon<(any), (any), (any)>)>
get "commandableProperties"(): $Map<(StringJS), ($ConfigurablePropertyData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigHandlerCommon$$Type = ($ConfigHandlerCommon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigHandlerCommon_ = $ConfigHandlerCommon$$Type;
}}
declare module "org.cyclops.cyclopscore.proxy.ICommonProxyCommon" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityRendererProvider, $BlockEntityRendererProvider$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPacketHandler, $IPacketHandler$$Type} from "org.cyclops.cyclopscore.network.IPacketHandler"
import {$IModBase, $IModBase$$Type} from "org.cyclops.cyclopscore.init.IModBase"

export interface $ICommonProxyCommon {

 "getMod"(): $IModBase
 "registerEventHooks"(): void
 "registerTickHandlers"(): void
 "registerRenderers"(): void
 "registerRenderer"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockEntityRendererProvider$$Type<(T)>): void
 "registerPackets"(arg0: $IPacketHandler$$Type): void
get "mod"(): $IModBase
}

export namespace $ICommonProxyCommon {
const probejs$$marker: never
}
export class $ICommonProxyCommon$$Static implements $ICommonProxyCommon {


 "getMod"(): $IModBase
 "registerEventHooks"(): void
 "registerTickHandlers"(): void
 "registerRenderers"(): void
 "registerRenderer"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockEntityRendererProvider$$Type<(T)>): void
 "registerPackets"(arg0: $IPacketHandler$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICommonProxyCommon$$Type = ($ICommonProxyCommon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICommonProxyCommon_ = $ICommonProxyCommon$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockLogicProgrammer" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$BlockGui, $BlockGui$$Type} from "org.cyclops.cyclopscore.block.BlockGui"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockLogicProgrammer extends $BlockGui {
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLogicProgrammer$$Type = ($BlockLogicProgrammer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockLogicProgrammer_ = $BlockLogicProgrammer$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.client.gui.subgui.IGuiInputElement" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"
import {$ISubGuiBox, $ISubGuiBox$$Type} from "org.cyclops.integrateddynamics.api.client.gui.subgui.ISubGuiBox"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IConfigRenderPattern, $IConfigRenderPattern$$Type} from "org.cyclops.integrateddynamics.api.logicprogrammer.IConfigRenderPattern"

export interface $IGuiInputElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> {

 "getSymbol"(): StringJS
 "getName"(): $Component
 "validate"(): $Component
 "getColor"(): integer
 "activate"(): void
 "deactivate"(): void
 "createSubGui"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: G, arg5: C): S
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>): void
 "getRenderPattern"(): $IConfigRenderPattern
get "symbol"(): StringJS
get "name"(): $Component
get "color"(): integer
get "renderPattern"(): $IConfigRenderPattern
}

export namespace $IGuiInputElement {
const probejs$$marker: never
}
export class $IGuiInputElement$$Static<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> implements $IGuiInputElement {


 "getSymbol"(): StringJS
 "getName"(): $Component
 "validate"(): $Component
 "getColor"(): integer
 "activate"(): void
 "deactivate"(): void
 "createSubGui"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: G, arg5: C): S
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>): void
 "getRenderPattern"(): $IConfigRenderPattern
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiInputElement$$Type<S, G, C> = ($IGuiInputElement<(S), (G), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiInputElement_<S, G, C> = $IGuiInputElement$$Type<(S), (G), (C)>;
}}
declare module "org.cyclops.integrateddynamics.core.logicprogrammer.event.LogicProgrammerVariableFacadeCreatedEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LogicProgrammerEvent, $LogicProgrammerEvent$$Type} from "org.cyclops.integrateddynamics.core.logicprogrammer.event.LogicProgrammerEvent"
import {$IVariableFacade, $IVariableFacade$$Type} from "org.cyclops.integrateddynamics.api.item.IVariableFacade"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LogicProgrammerVariableFacadeCreatedEvent extends $LogicProgrammerEvent {

constructor(arg0: $Player$$Type, arg1: $IVariableFacade$$Type, arg2: $BlockState$$Type)

public "getBlockState"(): $BlockState
public "getVariableFacade"(): $IVariableFacade
get "blockState"(): $BlockState
get "variableFacade"(): $IVariableFacade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicProgrammerVariableFacadeCreatedEvent$$Type = ($LogicProgrammerVariableFacadeCreatedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicProgrammerVariableFacadeCreatedEvent_ = $LogicProgrammerVariableFacadeCreatedEvent$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.IPartNetwork" {
import {$IAspectRead, $IAspectRead$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspectRead"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$IVariable, $IVariable$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariable"
import {$DimPos, $DimPos$$Type} from "org.cyclops.cyclopscore.datastructure.DimPos"
import {$IVariableFacade, $IVariableFacade$$Type} from "org.cyclops.integrateddynamics.api.item.IVariableFacade"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$PartPos, $PartPos$$Type} from "org.cyclops.integrateddynamics.api.part.PartPos"
import {$ILazyExpressionValueCache, $ILazyExpressionValueCache$$Type} from "org.cyclops.integrateddynamics.api.evaluate.expression.ILazyExpressionValueCache"

export interface $IPartNetwork extends $ILazyExpressionValueCache {

 "getProxy"(arg0: integer): $DimPos
 "addProxy"(arg0: integer, arg1: $DimPos$$Type): boolean
 "hasPart"(arg0: integer): boolean
 "getPartState"(arg0: integer): $IPartState<(any)>
 "removePart"(arg0: integer): void
 "getPartType"(arg0: integer): $IPartType<(any), (any)>
 "addPart"(arg0: integer, arg1: $PartPos$$Type): boolean
 "getVariableFacade"(arg0: integer): $IVariableFacade
 "removeProxy"(arg0: integer): void
 "hasPartVariable"<V extends $IValue>(arg0: integer, arg1: $IAspectRead$$Type<(V), (any)>): boolean
 "getPartVariable"<V extends $IValue>(arg0: integer, arg1: $IAspectRead$$Type<(V), (any)>): $IVariable<(V)>
 "hasVariableFacade"(arg0: integer): boolean
 "addVariableContainer"(arg0: $DimPos$$Type): boolean
 "notifyPartsChanged"(): void
 "removeVariableContainer"(arg0: $DimPos$$Type): void
 "removeValue"(arg0: integer): void
 "hasValue"(arg0: integer): boolean
 "getValue"(arg0: integer): $IValue
 "setValue"(arg0: integer, arg1: $IValue$$Type): void
}

export namespace $IPartNetwork {
const probejs$$marker: never
}
export class $IPartNetwork$$Static implements $IPartNetwork {


 "getProxy"(arg0: integer): $DimPos
 "addProxy"(arg0: integer, arg1: $DimPos$$Type): boolean
 "hasPart"(arg0: integer): boolean
 "getPartState"(arg0: integer): $IPartState<(any)>
 "removePart"(arg0: integer): void
 "getPartType"(arg0: integer): $IPartType<(any), (any)>
 "addPart"(arg0: integer, arg1: $PartPos$$Type): boolean
 "getVariableFacade"(arg0: integer): $IVariableFacade
 "removeProxy"(arg0: integer): void
 "hasPartVariable"<V extends $IValue>(arg0: integer, arg1: $IAspectRead$$Type<(V), (any)>): boolean
 "getPartVariable"<V extends $IValue>(arg0: integer, arg1: $IAspectRead$$Type<(V), (any)>): $IVariable<(V)>
 "hasVariableFacade"(arg0: integer): boolean
 "addVariableContainer"(arg0: $DimPos$$Type): boolean
 "notifyPartsChanged"(): void
 "removeVariableContainer"(arg0: $DimPos$$Type): void
 "removeValue"(arg0: integer): void
 "hasValue"(arg0: integer): boolean
 "getValue"(arg0: integer): $IValue
 "setValue"(arg0: integer, arg1: $IValue$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartNetwork$$Type = ($IPartNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartNetwork_ = $IPartNetwork$$Type;
}}
declare module "org.cyclops.integrateddynamics.capability.cable.CableTile" {
import {$CyclopsBlockEntity, $CyclopsBlockEntity$$Type} from "org.cyclops.cyclopscore.blockentity.CyclopsBlockEntity"
import {$CableDefault, $CableDefault$$Type} from "org.cyclops.integrateddynamics.capability.cable.CableDefault"

export class $CableTile<T extends $CyclopsBlockEntity> extends $CableDefault {

constructor(arg0: T)

public "destroy"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableTile$$Type<T> = ($CableTile<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableTile_<T> = $CableTile$$Type<(T)>;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeSerializerEnergyContainerCombination" {
import {$RecipeEnergyContainerCombination, $RecipeEnergyContainerCombination$$Type} from "org.cyclops.integrateddynamics.core.recipe.type.RecipeEnergyContainerCombination"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RecipeSerializerEnergyContainerCombination implements $RecipeSerializer<($RecipeEnergyContainerCombination)> {
static readonly "CODEC": $MapCodec<($RecipeEnergyContainerCombination)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeEnergyContainerCombination)>

constructor()

public "codec"(): $MapCodec<($RecipeEnergyContainerCombination)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeEnergyContainerCombination)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerEnergyContainerCombination$$Type = ($RecipeSerializerEnergyContainerCombination);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerEnergyContainerCombination_ = $RecipeSerializerEnergyContainerCombination$$Type;
}}
declare module "org.cyclops.integratedterminals.core.client.gui.CraftingOptionGuiData" {
import {$IngredientComponent, $IngredientComponent$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientComponent"
import {$HandlerWrappedTerminalCraftingPlan, $HandlerWrappedTerminalCraftingPlan$$Type} from "org.cyclops.integratedterminals.core.terminalstorage.crafting.HandlerWrappedTerminalCraftingPlan"
import {$HandlerWrappedTerminalCraftingOption, $HandlerWrappedTerminalCraftingOption$$Type} from "org.cyclops.integratedterminals.core.terminalstorage.crafting.HandlerWrappedTerminalCraftingOption"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ITerminalStorageLocation, $ITerminalStorageLocation$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.location.ITerminalStorageLocation"

export class $CraftingOptionGuiData<T, M, L> {

constructor(arg0: $IngredientComponent$$Type<(T), (M)>, arg1: StringJS, arg2: integer, arg3: $HandlerWrappedTerminalCraftingOption$$Type<(T)>, arg4: integer, arg5: $HandlerWrappedTerminalCraftingPlan$$Type, arg6: $ITerminalStorageLocation$$Type<(L)>, arg7: L)

public "getChannel"(): integer
public "getLocation"(): $ITerminalStorageLocation<(L)>
public "getAmount"(): integer
public "getComponent"(): $IngredientComponent<(T), (M)>
public "getTabName"(): StringJS
public "copyWithAmount"(arg0: integer): $CraftingOptionGuiData<(T), (M), (L)>
public "writeToPacketBuffer"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "readFromPacketBuffer"(arg0: $RegistryFriendlyByteBuf$$Type): $CraftingOptionGuiData<(any), (any), (any)>
public "getLocationInstance"(): L
public "getCraftingPlan"(): $HandlerWrappedTerminalCraftingPlan
public "getCraftingOption"(): $HandlerWrappedTerminalCraftingOption<(T)>
get "channel"(): integer
get "location"(): $ITerminalStorageLocation<(L)>
get "amount"(): integer
get "component"(): $IngredientComponent<(T), (M)>
get "tabName"(): StringJS
get "locationInstance"(): L
get "craftingPlan"(): $HandlerWrappedTerminalCraftingPlan
get "craftingOption"(): $HandlerWrappedTerminalCraftingOption<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingOptionGuiData$$Type<T, M, L> = ($CraftingOptionGuiData<(T), (M), (L)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingOptionGuiData_<T, M, L> = $CraftingOptionGuiData$$Type<(T), (M), (L)>;
}}
declare module "org.cyclops.integrateddynamics.api.evaluate.expression.ILazyExpressionValueCache" {
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"

export interface $ILazyExpressionValueCache {

 "removeValue"(arg0: integer): void
 "hasValue"(arg0: integer): boolean
 "getValue"(arg0: integer): $IValue
 "setValue"(arg0: integer, arg1: $IValue$$Type): void
}

export namespace $ILazyExpressionValueCache {
const probejs$$marker: never
}
export class $ILazyExpressionValueCache$$Static implements $ILazyExpressionValueCache {


 "removeValue"(arg0: integer): void
 "hasValue"(arg0: integer): boolean
 "getValue"(arg0: integer): $IValue
 "setValue"(arg0: integer, arg1: $IValue$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILazyExpressionValueCache$$Type = ($ILazyExpressionValueCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILazyExpressionValueCache_ = $ILazyExpressionValueCache$$Type;
}}
declare module "org.cyclops.cyclopscore.block.BlockGui" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Stat, $Stat$$Type} from "net.minecraft.stats.Stat"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

/**
 * 
 * @deprecated
 */
export class $BlockGui extends $Block implements $IBlockGui {
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

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getOpenStat"(): $Stat<($ResourceLocation)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "writeExtraGuiData"(arg0: $FriendlyByteBuf$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $BlockPos$$Type, arg4: $BlockHitResult$$Type): void
public "asHolder"(): $Holder<(any)>
get "openStat"(): $Stat<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGui$$Type = ($BlockGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGui_ = $BlockGui$$Type;
}}
declare module "org.cyclops.integrateddynamics.advancement.criterion.NetworkInitializedTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$NetworkInitializedTrigger$Instance, $NetworkInitializedTrigger$Instance$$Type} from "org.cyclops.integrateddynamics.advancement.criterion.NetworkInitializedTrigger$Instance"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$NetworkInitializedEvent, $NetworkInitializedEvent$$Type} from "org.cyclops.integrateddynamics.core.network.event.NetworkInitializedEvent"

export class $NetworkInitializedTrigger extends $SimpleCriterionTrigger<($NetworkInitializedTrigger$Instance)> {
static readonly "CODEC": $Codec<($NetworkInitializedTrigger$Instance)>

constructor()

public "test"(arg0: $ServerPlayer$$Type, arg1: $NetworkInitializedEvent$$Type): void
public "codec"(): $Codec<($NetworkInitializedTrigger$Instance)>
public "onCrafted"(arg0: $NetworkInitializedEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkInitializedTrigger$$Type = ($NetworkInitializedTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkInitializedTrigger_ = $NetworkInitializedTrigger$$Type;
}}
declare module "org.cyclops.commoncapabilities.api.ingredient.IngredientInstanceWrapper" {
import {$IngredientComponent, $IngredientComponent$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientComponent"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $IngredientInstanceWrapper<T, M> implements $Comparable<($IngredientInstanceWrapper<(T), (M)>)> {

constructor(arg0: $IngredientComponent$$Type<(T), (M)>, arg1: T)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $IngredientInstanceWrapper$$Type<(T), (M)>): integer
public "compareTo"(arg0: any): integer
public "getInstance"(): T
public "getComponent"(): $IngredientComponent<(T), (M)>
get "instance"(): T
get "component"(): $IngredientComponent<(T), (M)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientInstanceWrapper$$Type<T, M> = ($IngredientInstanceWrapper<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientInstanceWrapper_<T, M> = $IngredientInstanceWrapper$$Type<(T), (M)>;
}}
declare module "org.cyclops.integrateddynamics.api.path.IPathElement" {
import {$ISidedPathElement, $ISidedPathElement$$Type} from "org.cyclops.integrateddynamics.api.path.ISidedPathElement"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$DimPos, $DimPos$$Type} from "org.cyclops.cyclopscore.datastructure.DimPos"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $IPathElement extends $Comparable<($IPathElement)> {

 "getPosition"(): $DimPos
 "getReachableElements"(): $Set<($ISidedPathElement)>
 "compareTo"(arg0: $IPathElement$$Type): integer
get "position"(): $DimPos
get "reachableElements"(): $Set<($ISidedPathElement)>
}

export namespace $IPathElement {
const probejs$$marker: never
}
export class $IPathElement$$Static implements $IPathElement {


 "getPosition"(): $DimPos
 "getReachableElements"(): $Set<($ISidedPathElement)>
 "compareTo"(arg0: $IPathElement$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPathElement$$Type = ($IPathElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPathElement_ = $IPathElement$$Type;
}}
declare module "org.cyclops.cyclopscore.client.model.IDynamicModelElement" {
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelEvent$ModifyBakingResult, $ModelEvent$ModifyBakingResult$$Type} from "net.neoforged.neoforge.client.event.ModelEvent$ModifyBakingResult"

/**
 * 
 * @deprecated
 */
export interface $IDynamicModelElement {

 "hasDynamicModel"(): boolean
 "createDynamicModel"(arg0: $ModelEvent$ModifyBakingResult$$Type): $BakedModel
}

export namespace $IDynamicModelElement {
const probejs$$marker: never
}
export class $IDynamicModelElement$$Static implements $IDynamicModelElement {


 "hasDynamicModel"(): boolean
 "createDynamicModel"(arg0: $ModelEvent$ModifyBakingResult$$Type): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDynamicModelElement$$Type = ($IDynamicModelElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDynamicModelElement_ = $IDynamicModelElement$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabServer" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $ITerminalStorageTabServer {

 "getName"(): $ResourceLocation
 "init"(): void
 "updateActive"(): void
 "deInit"(): void
get "name"(): $ResourceLocation
}

export namespace $ITerminalStorageTabServer {
const probejs$$marker: never
}
export class $ITerminalStorageTabServer$$Static implements $ITerminalStorageTabServer {


 "getName"(): $ResourceLocation
 "init"(): void
 "updateActive"(): void
 "deInit"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalStorageTabServer$$Type = ($ITerminalStorageTabServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalStorageTabServer_ = $ITerminalStorageTabServer$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeNbtClear" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CustomRecipe, $CustomRecipe$$Type} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RecipeNbtClear extends $CustomRecipe {

constructor(arg0: $Ingredient$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<(any)>
public "getInputIngredient"(): $Ingredient
get "ingredients"(): $NonNullList<($Ingredient)>
get "resultItem"(): $ItemStack
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "inputIngredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeNbtClear$$Type = ($RecipeNbtClear);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeNbtClear_ = $RecipeNbtClear$$Type;
}}
declare module "org.cyclops.cyclopscore.recipe.type.RecipeCraftingShapelessCustomOutput$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer, $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer$$Type} from "org.cyclops.cyclopscore.recipe.type.RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$RecipeCraftingShapelessCustomOutput, $RecipeCraftingShapelessCustomOutput$$Type} from "org.cyclops.cyclopscore.recipe.type.RecipeCraftingShapelessCustomOutput"

export class $RecipeCraftingShapelessCustomOutput$Serializer implements $RecipeSerializer<($RecipeCraftingShapelessCustomOutput)> {

constructor(arg0: $Supplier$$Type<($ItemStack$$Type)>, arg1: $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer$$Type)
constructor(arg0: $Supplier$$Type<($ItemStack$$Type)>)

public "codec"(): $MapCodec<($RecipeCraftingShapelessCustomOutput)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeCraftingShapelessCustomOutput)>
public "getOutputTransformer"(): $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
get "outputTransformer"(): $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCraftingShapelessCustomOutput$Serializer$$Type = ($RecipeCraftingShapelessCustomOutput$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeCraftingShapelessCustomOutput$Serializer_ = $RecipeCraftingShapelessCustomOutput$Serializer$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.SandboxPolicy" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $SandboxPolicy extends $Enum<($SandboxPolicy)> {
static readonly "CONSTRAINED": $SandboxPolicy
static readonly "TRUSTED": $SandboxPolicy
static readonly "UNTRUSTED": $SandboxPolicy
static readonly "ISOLATED": $SandboxPolicy


public static "values"(): ($SandboxPolicy)[]
public static "valueOf"(name: StringJS): $SandboxPolicy
public "isStricterThan"(other: $SandboxPolicy$$Type): boolean
public "isStricterOrEqual"(other: $SandboxPolicy$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SandboxPolicy$$Type = (("trusted") | ("constrained") | ("isolated") | ("untrusted"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SandboxPolicy_ = $SandboxPolicy$$Type;
}}
declare module "org.cyclops.cyclopscore.inventory.ItemLocation" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$IInventoryLocation, $IInventoryLocation$$Type} from "org.cyclops.cyclopscore.inventory.IInventoryLocation"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ItemLocation extends $Record {

constructor(inventoryLocation: $IInventoryLocation$$Type, slot: integer)

public "slot"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getItemStack"(arg0: $Player$$Type): $ItemStack
public "setItemStack"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public static "writeToPacketBuffer"(arg0: $FriendlyByteBuf$$Type, arg1: $ItemLocation$$Type): void
public static "readFromPacketBuffer"(arg0: $FriendlyByteBuf$$Type): $ItemLocation
public "inventoryLocation"(): $IInventoryLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLocation$$Type = ({"inventoryLocation"?: $IInventoryLocation$$Type, "slot"?: integer}) | ([inventoryLocation?: $IInventoryLocation$$Type, slot?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLocation_ = $ItemLocation$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.event.TerminalStorageScreenSizeEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"

export class $TerminalStorageScreenSizeEvent extends $Event {

constructor(arg0: integer, arg1: integer)

public "getWidth"(): integer
public "getHeight"(): integer
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public static "getWidthHeight"(): $Pair<(integer), (integer)>
get "width"(): integer
get "height"(): integer
set "width"(value: integer)
set "height"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalStorageScreenSizeEvent$$Type = ($TerminalStorageScreenSizeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalStorageScreenSizeEvent_ = $TerminalStorageScreenSizeEvent$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockCable" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PartRenderPosition, $PartRenderPosition$$Type} from "org.cyclops.integrateddynamics.api.part.PartRenderPosition"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPartContainer, $IPartContainer$$Type} from "org.cyclops.integrateddynamics.api.part.IPartContainer"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IRenderState, $IRenderState$$Type} from "org.cyclops.integrateddynamics.client.model.IRenderState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ModelProperty, $ModelProperty$$Type} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockWithEntity, $BlockWithEntity$$Type} from "org.cyclops.cyclopscore.block.BlockWithEntity"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$VoxelShapeComponents, $VoxelShapeComponents$$Type} from "org.cyclops.integrateddynamics.core.block.VoxelShapeComponents"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $BlockCable extends $BlockWithEntity implements $SimpleWaterloggedBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "PARTCONTAINER": $ModelProperty<($IPartContainer)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CABLE_CENTER_BOUNDINGBOX": $AABB
static readonly "BLOCK_HARDNESS": float
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockCable)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "REALCABLE": $ModelProperty<(boolean)>
static readonly "RENDERSTATE": $ModelProperty<($IRenderState)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "PART_RENDERPOSITIONS": ($ModelProperty<($PartRenderPosition)>)[]
static readonly "INSTANT": float
static readonly "CONNECTED": ($ModelProperty<(boolean)>)[]
static readonly "UPDATE_CLIENTS": integer
static readonly "FACADE": $ModelProperty<($Optional<($BlockState)>)>
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getSelectedShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShapeComponents
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "hasDynamicShape"(): boolean
public "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
public "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "shouldDisplayFluidOverlay"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type): boolean
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "setDisableCollisionBox"(arg0: boolean): void
public "getCableBoundingBox"(arg0: $Direction$$Type): $AABB
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public "asHolder"(): $Holder<(any)>
set "disableCollisionBox"(value: boolean)
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCable$$Type = ($BlockCable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCable_ = $BlockCable$$Type;
}}
declare module "org.cyclops.cyclopscore.init.IModBase" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "org.apache.logging.log4j.Level"
import {$RegistryManager, $RegistryManager$$Type} from "org.cyclops.cyclopscore.init.RegistryManager"
import {$IPacketHandler, $IPacketHandler$$Type} from "org.cyclops.cyclopscore.network.IPacketHandler"
import {$ICommonProxyCommon, $ICommonProxyCommon$$Type} from "org.cyclops.cyclopscore.proxy.ICommonProxyCommon"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$LoggerHelper, $LoggerHelper$$Type} from "org.cyclops.cyclopscore.helper.LoggerHelper"
import {$ConfigHandlerCommon, $ConfigHandlerCommon$$Type} from "org.cyclops.cyclopscore.config.ConfigHandlerCommon"
import {$CreativeModeTab$TabVisibility, $CreativeModeTab$TabVisibility$$Type} from "net.minecraft.world.item.CreativeModeTab$TabVisibility"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"
import {$ModCompatLoader, $ModCompatLoader$$Type} from "org.cyclops.cyclopscore.modcompat.ModCompatLoader"
import {$IModHelpers, $IModHelpers$$Type} from "org.cyclops.cyclopscore.helper.IModHelpers"

export interface $IModBase {

 "log"(arg0: $Level$$Type, arg1: StringJS): void
 "log"(arg0: StringJS): void
 "getProxy"(): $ICommonProxyCommon
 "getModId"(): StringJS
 "getModHelpers"(): $IModHelpers
 "getRegistryManager"(): $RegistryManager
 "getLoggerHelper"(): $LoggerHelper
 "getConfigHandler"(): $ConfigHandlerCommon
 "getModCompatLoader"(): $ModCompatLoader
 "getPacketHandlerCommon"(): $IPacketHandler
 "getDefaultCreativeTab"(): $CreativeModeTab
 "registerDefaultCreativeTabEntry"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
 "getDefaultCreativeTabEntries"(): $List<($Pair<($ItemStack), ($CreativeModeTab$TabVisibility)>)>
get "proxy"(): $ICommonProxyCommon
get "modId"(): StringJS
get "modHelpers"(): $IModHelpers
get "registryManager"(): $RegistryManager
get "loggerHelper"(): $LoggerHelper
get "configHandler"(): $ConfigHandlerCommon
get "modCompatLoader"(): $ModCompatLoader
get "packetHandlerCommon"(): $IPacketHandler
get "defaultCreativeTab"(): $CreativeModeTab
get "defaultCreativeTabEntries"(): $List<($Pair<($ItemStack), ($CreativeModeTab$TabVisibility)>)>
}

export namespace $IModBase {
const probejs$$marker: never
}
export class $IModBase$$Static implements $IModBase {


 "log"(arg0: $Level$$Type, arg1: StringJS): void
 "log"(arg0: StringJS): void
 "getProxy"(): $ICommonProxyCommon
 "getModId"(): StringJS
 "getModHelpers"(): $IModHelpers
 "getRegistryManager"(): $RegistryManager
 "getLoggerHelper"(): $LoggerHelper
 "getConfigHandler"(): $ConfigHandlerCommon
 "getModCompatLoader"(): $ModCompatLoader
 "getPacketHandlerCommon"(): $IPacketHandler
 "getDefaultCreativeTab"(): $CreativeModeTab
 "registerDefaultCreativeTabEntry"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
 "getDefaultCreativeTabEntries"(): $List<($Pair<($ItemStack), ($CreativeModeTab$TabVisibility)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModBase$$Type = ($IModBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModBase_ = $IModBase$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.INetwork" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$INetworkElement, $INetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElement"
import {$IFullNetworkListener, $IFullNetworkListener$$Type} from "org.cyclops.integrateddynamics.api.network.IFullNetworkListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$INBTSerializable, $INBTSerializable$$Type} from "org.cyclops.cyclopscore.persist.nbt.INBTSerializable"
import {$ISidedPathElement, $ISidedPathElement$$Type} from "org.cyclops.integrateddynamics.api.path.ISidedPathElement"
import {$NetworkCapability, $NetworkCapability$$Type} from "org.cyclops.integrateddynamics.api.network.NetworkCapability"
import {$INetworkEventBus, $INetworkEventBus$$Type} from "org.cyclops.integrateddynamics.api.network.event.INetworkEventBus"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IPathElement, $IPathElement$$Type} from "org.cyclops.integrateddynamics.api.path.IPathElement"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $INetwork extends $IFullNetworkListener, $INBTSerializable {

 "getElements"(): $Set<($INetworkElement)>
 "isValid"(arg0: $INetworkElement$$Type): boolean
 "getCapability"<T>(arg0: $NetworkCapability$$Type<(T)>): $Optional<(T)>
 "getEventBus"(): $INetworkEventBus
 "isInitialized"(): boolean
 "killIfEmpty"(): boolean
 "isKilled"(): boolean
 "isCrashed"(): boolean
 "setCrashed"(arg0: boolean): void
 "getCablesCount"(): integer
 "hasChanged"(): boolean
 "setPriorityAndChannel"(arg0: $INetworkElement$$Type, arg1: integer, arg2: integer): void
 "getLastSecondDuration"(arg0: $INetworkElement$$Type): long
 "invalidateElement"(arg0: $INetworkElement$$Type): void
 "revalidateElement"(arg0: $INetworkElement$$Type): void
 "getFullNetworkListeners"(): ($IFullNetworkListener)[]
 "addNetworkElementUpdateable"(arg0: $INetworkElement$$Type): void
 "removeNetworkElementUpdateable"(arg0: $INetworkElement$$Type): void
 "resetLastSecondDurations"(): void
 "containsSidedPathElement"(arg0: $ISidedPathElement$$Type): boolean
 "kill"(): void
 "update"(): void
 "canUpdate"(arg0: $INetworkElement$$Type): boolean
 "onSkipUpdate"(arg0: $INetworkElement$$Type): void
 "postUpdate"(arg0: $INetworkElement$$Type): void
 "addNetworkElement"(arg0: $INetworkElement$$Type, arg1: boolean): boolean
 "updateGuaranteed"(): void
 "removePathElement"(arg0: $IPathElement$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type): boolean
 "afterServerLoad"(): void
 "beforeServerStop"(): void
 "removeNetworkElementPre"(arg0: $INetworkElement$$Type): boolean
 "removeNetworkElementPost"(arg0: $INetworkElement$$Type, arg1: $BlockState$$Type): void
 "toNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
get "elements"(): $Set<($INetworkElement)>
get "eventBus"(): $INetworkEventBus
get "initialized"(): boolean
get "killed"(): boolean
get "crashed"(): boolean
set "crashed"(value: boolean)
get "cablesCount"(): integer
get "fullNetworkListeners"(): ($IFullNetworkListener)[]
}

export namespace $INetwork {
const probejs$$marker: never
}
export class $INetwork$$Static implements $INetwork {


 "getElements"(): $Set<($INetworkElement)>
 "isValid"(arg0: $INetworkElement$$Type): boolean
 "getCapability"<T>(arg0: $NetworkCapability$$Type<(T)>): $Optional<(T)>
 "getEventBus"(): $INetworkEventBus
 "isInitialized"(): boolean
 "killIfEmpty"(): boolean
 "isKilled"(): boolean
 "isCrashed"(): boolean
 "setCrashed"(arg0: boolean): void
 "getCablesCount"(): integer
 "hasChanged"(): boolean
 "setPriorityAndChannel"(arg0: $INetworkElement$$Type, arg1: integer, arg2: integer): void
 "getLastSecondDuration"(arg0: $INetworkElement$$Type): long
 "invalidateElement"(arg0: $INetworkElement$$Type): void
 "revalidateElement"(arg0: $INetworkElement$$Type): void
 "getFullNetworkListeners"(): ($IFullNetworkListener)[]
 "addNetworkElementUpdateable"(arg0: $INetworkElement$$Type): void
 "removeNetworkElementUpdateable"(arg0: $INetworkElement$$Type): void
 "resetLastSecondDurations"(): void
 "containsSidedPathElement"(arg0: $ISidedPathElement$$Type): boolean
 "kill"(): void
 "update"(): void
 "canUpdate"(arg0: $INetworkElement$$Type): boolean
 "onSkipUpdate"(arg0: $INetworkElement$$Type): void
 "postUpdate"(arg0: $INetworkElement$$Type): void
 "addNetworkElement"(arg0: $INetworkElement$$Type, arg1: boolean): boolean
 "updateGuaranteed"(): void
 "removePathElement"(arg0: $IPathElement$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type): boolean
 "afterServerLoad"(): void
 "beforeServerStop"(): void
 "removeNetworkElementPre"(arg0: $INetworkElement$$Type): boolean
 "removeNetworkElementPost"(arg0: $INetworkElement$$Type, arg1: $BlockState$$Type): void
 "toNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetwork$$Type = ($INetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetwork_ = $INetwork$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockSqueezer" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockWithEntity, $BlockWithEntity$$Type} from "org.cyclops.cyclopscore.block.BlockWithEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $BlockSqueezer extends $BlockWithEntity {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockSqueezer)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "HEIGHT": $IntegerProperty
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getInteractionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateEntityAfterFallOn"(arg0: $BlockGetter$$Type, arg1: $Entity$$Type): void
public "getRelativeTopPositionTop"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): float
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSqueezer$$Type = ($BlockSqueezer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSqueezer_ = $BlockSqueezer$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Source" {
import {$File, $File$$Type} from "java.io.File"
import {$URI, $URI$$Type} from "java.net.URI"
import {$Reader, $Reader$$Type} from "java.io.Reader"
import {$URL, $URL$$Type} from "java.net.URL"
import {$ByteSequence, $ByteSequence$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.ByteSequence"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$Source$Builder, $Source$Builder$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Source$Builder"

export class $Source {


public "getColumnNumber"(offset: integer): integer
/**
 * 
 * @deprecated
 */
public "getInputStream"(): $InputStream
public "getPath"(): StringJS
public "getLineNumber"(offset: integer): integer
public "getLanguage"(): StringJS
public "getURL"(): $URL
public static "create"(language: StringJS, source: charseq): $Source
public "getName"(): StringJS
public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLength"(): integer
public "getBytes"(): $ByteSequence
public "getURI"(): $URI
public "getLineCount"(): integer
public "isInternal"(): boolean
public static "findLanguage"(url: $URL$$Type): StringJS
public static "findLanguage"(mimeType: StringJS): StringJS
public static "findLanguage"(file: $File$$Type): StringJS
public static "newBuilder"(language: StringJS, characters: charseq, name: StringJS): $Source$Builder
public static "newBuilder"(language: StringJS, bytes: $ByteSequence$$Type, name: StringJS): $Source$Builder
public static "newBuilder"(language: StringJS, file: $File$$Type): $Source$Builder
public static "newBuilder"(language: StringJS, url: $URL$$Type): $Source$Builder
public static "newBuilder"(language: StringJS, source: $Reader$$Type, name: StringJS): $Source$Builder
public "getReader"(): $Reader
public "isInteractive"(): boolean
public "getMimeType"(): StringJS
public "hasBytes"(): boolean
public static "findMimeType"(file: $File$$Type): StringJS
public static "findMimeType"(url: $URL$$Type): StringJS
public "getCharacters"(): charseq
public "getCharacters"(lineNumber: integer): charseq
public "hasCharacters"(): boolean
public "getLineLength"(lineNumber: integer): integer
public "getLineStartOffset"(lineNumber: integer): integer
get "inputStream"(): $InputStream
get "path"(): StringJS
get "language"(): StringJS
get "uRL"(): $URL
get "name"(): StringJS
get "length"(): integer
get "bytes"(): $ByteSequence
get "uRI"(): $URI
get "lineCount"(): integer
get "internal"(): boolean
get "reader"(): $Reader
get "interactive"(): boolean
get "mimeType"(): StringJS
get "characters"(): charseq
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Source$$Type = ($Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Source_ = $Source$$Type;
}}
declare module "org.cyclops.integrateddynamics.capability.energystorage.IEnergyStorageCapacity" {
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"

export interface $IEnergyStorageCapacity extends $IEnergyStorage {

 "setCapacity"(arg0: integer): void
 "extractEnergy"(arg0: integer, arg1: boolean): integer
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "canExtract"(): boolean
 "canReceive"(): boolean
 "getEnergyStored"(): integer
 "getMaxEnergyStored"(): integer
set "capacity"(value: integer)
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}

export namespace $IEnergyStorageCapacity {
const probejs$$marker: never
}
export class $IEnergyStorageCapacity$$Static implements $IEnergyStorageCapacity {


 "setCapacity"(arg0: integer): void
 "extractEnergy"(arg0: integer, arg1: boolean): integer
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "canExtract"(): boolean
 "canReceive"(): boolean
 "getEnergyStored"(): integer
 "getMaxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorageCapacity$$Type = ($IEnergyStorageCapacity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyStorageCapacity_ = $IEnergyStorageCapacity$$Type;
}}
declare module "org.cyclops.cyclopscore.inventory.IInventoryCommonModifiable" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IInventoryCommonModifiable {

 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
get "slots"(): integer
}

export namespace $IInventoryCommonModifiable {
const probejs$$marker: never
}
export class $IInventoryCommonModifiable$$Static implements $IInventoryCommonModifiable {


 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryCommonModifiable$$Type = ($IInventoryCommonModifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryCommonModifiable_ = $IInventoryCommonModifiable$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockCreativeEnergyBattery" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEnergyBatteryBase, $BlockEnergyBatteryBase$$Type} from "org.cyclops.integrateddynamics.block.BlockEnergyBatteryBase"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockCreativeEnergyBattery extends $BlockEnergyBatteryBase {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockCreativeEnergyBattery)>
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

public "isCreative"(): boolean
public "asHolder"(): $Holder<(any)>
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCreativeEnergyBattery$$Type = ($BlockCreativeEnergyBattery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCreativeEnergyBattery_ = $BlockCreativeEnergyBattery$$Type;
}}
declare module "org.cyclops.integratedscripting.api.evaluate.translation.IValueTranslator" {
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$Value, $Value$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Value"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$IEvaluationExceptionFactory, $IEvaluationExceptionFactory$$Type} from "org.cyclops.integratedscripting.api.evaluate.translation.IEvaluationExceptionFactory"
import {$Context, $Context$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Context"

export interface $IValueTranslator<V extends $IValue> {

 "getValueType"(): $IValueType<(any)>
 "translateToNbt"(arg0: $Context$$Type, arg1: V, arg2: $IEvaluationExceptionFactory$$Type): $Tag
 "canHandleGraalValue"(arg0: $Value$$Type): boolean
 "canTranslateNbt"(): boolean
 "translateToGraal"(arg0: $Context$$Type, arg1: V, arg2: $IEvaluationExceptionFactory$$Type, arg3: $ValueDeseralizationContext$$Type): $Value
 "translateFromGraal"(arg0: $Context$$Type, arg1: $Value$$Type, arg2: $IEvaluationExceptionFactory$$Type, arg3: $ValueDeseralizationContext$$Type): V
get "valueType"(): $IValueType<(any)>
}

export namespace $IValueTranslator {
const probejs$$marker: never
}
export class $IValueTranslator$$Static<V extends $IValue> implements $IValueTranslator {


 "getValueType"(): $IValueType<(any)>
 "translateToNbt"(arg0: $Context$$Type, arg1: V, arg2: $IEvaluationExceptionFactory$$Type): $Tag
 "canHandleGraalValue"(arg0: $Value$$Type): boolean
 "canTranslateNbt"(): boolean
 "translateToGraal"(arg0: $Context$$Type, arg1: V, arg2: $IEvaluationExceptionFactory$$Type, arg3: $ValueDeseralizationContext$$Type): $Value
 "translateFromGraal"(arg0: $Context$$Type, arg1: $Value$$Type, arg2: $IEvaluationExceptionFactory$$Type, arg3: $ValueDeseralizationContext$$Type): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValueTranslator$$Type<V> = ($IValueTranslator<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValueTranslator_<V> = $IValueTranslator$$Type<(V)>;
}}
declare module "org.cyclops.integrateddynamics.advancement.criterion.VariableCreatedTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$VariableCreatedTrigger$Instance, $VariableCreatedTrigger$Instance$$Type} from "org.cyclops.integrateddynamics.advancement.criterion.VariableCreatedTrigger$Instance"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$LogicProgrammerVariableFacadeCreatedEvent, $LogicProgrammerVariableFacadeCreatedEvent$$Type} from "org.cyclops.integrateddynamics.core.logicprogrammer.event.LogicProgrammerVariableFacadeCreatedEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $VariableCreatedTrigger extends $SimpleCriterionTrigger<($VariableCreatedTrigger$Instance)> {
static readonly "CODEC": $Codec<($VariableCreatedTrigger$Instance)>

constructor()

public "test"(arg0: $ServerPlayer$$Type, arg1: $LogicProgrammerVariableFacadeCreatedEvent$$Type): void
public "codec"(): $Codec<($VariableCreatedTrigger$Instance)>
public "onEvent"(arg0: $LogicProgrammerVariableFacadeCreatedEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariableCreatedTrigger$$Type = ($VariableCreatedTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariableCreatedTrigger_ = $VariableCreatedTrigger$$Type;
}}
declare module "org.cyclops.integratedterminals.core.terminalstorage.TerminalStorageTabIngredientComponentServer" {
import {$IngredientComponent, $IngredientComponent$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientComponent"
import {$ITerminalStorageTabServer, $ITerminalStorageTabServer$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabServer"
import {$List, $List$$Type} from "java.util.List"
import {$IIngredientComponentStorageObservable$IIndexChangeObserver, $IIngredientComponentStorageObservable$IIndexChangeObserver$$Type} from "org.cyclops.integrateddynamics.api.ingredient.IIngredientComponentStorageObservable$IIndexChangeObserver"
import {$ValueTypeOperator$ValueOperator, $ValueTypeOperator$ValueOperator$$Type} from "org.cyclops.integrateddynamics.core.evaluate.variable.ValueTypeOperator$ValueOperator"
import {$IPositionedAddonsNetworkIngredients, $IPositionedAddonsNetworkIngredients$$Type} from "org.cyclops.integrateddynamics.api.network.IPositionedAddonsNetworkIngredients"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TerminalClickType, $TerminalClickType$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.TerminalClickType"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$IVariable, $IVariable$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariable"
import {$IIngredientComponentStorageObservable$StorageChangeEvent, $IIngredientComponentStorageObservable$StorageChangeEvent$$Type} from "org.cyclops.integrateddynamics.api.ingredient.IIngredientComponentStorageObservable$StorageChangeEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TerminalStorageTabIngredientComponentCommon, $TerminalStorageTabIngredientComponentCommon$$Type} from "org.cyclops.integratedterminals.core.terminalstorage.TerminalStorageTabIngredientComponentCommon"

export class $TerminalStorageTabIngredientComponentServer<T, M> implements $ITerminalStorageTabServer, $IIngredientComponentStorageObservable$IIndexChangeObserver<(T), (M)> {

constructor(arg0: $ResourceLocation$$Type, arg1: $INetwork$$Type, arg2: $IngredientComponent$$Type<(T), (M)>, arg3: $IPositionedAddonsNetworkIngredients$$Type<(T), (M)>, arg4: $ServerPlayer$$Type)

public "getName"(): $ResourceLocation
public "init"(): void
public "onChange"(arg0: $IIngredientComponentStorageObservable$StorageChangeEvent$$Type<(T), (M)>): void
public "updateActive"(): void
public "updateFilter"(arg0: $List$$Type<($IVariable$$Type<($ValueTypeOperator$ValueOperator$$Type)>)>, arg1: $TerminalStorageTabIngredientComponentCommon$$Type<(any), (any)>): void
public "getNetwork"(): $INetwork
public "getIngredientNetwork"(): $IPositionedAddonsNetworkIngredients<(T), (M)>
public "deInit"(): void
public "handleStorageSlotClick"(arg0: $AbstractContainerMenu$$Type, arg1: $ServerPlayer$$Type, arg2: $TerminalClickType$$Type, arg3: integer, arg4: T, arg5: integer, arg6: long, arg7: T, arg8: boolean): void
get "name"(): $ResourceLocation
get "network"(): $INetwork
get "ingredientNetwork"(): $IPositionedAddonsNetworkIngredients<(T), (M)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalStorageTabIngredientComponentServer$$Type<T, M> = ($TerminalStorageTabIngredientComponentServer<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalStorageTabIngredientComponentServer_<T, M> = $TerminalStorageTabIngredientComponentServer$$Type<(T), (M)>;
}}
declare module "org.cyclops.cyclopscore.config.ConfigurablePropertyData" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Field, $Field$$Type} from "java.lang.reflect.Field"
import {$ModConfigLocation, $ModConfigLocation$$Type} from "org.cyclops.cyclopscore.config.ModConfigLocation"
import {$IModBase, $IModBase$$Type} from "org.cyclops.cyclopscore.init.IModBase"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ConfigurablePropertyData<T> {
readonly "requiresWorldRestart": boolean
readonly "mod": $IModBase
readonly "defaultValue": T
readonly "maxValue": integer
readonly "configLocation": $ModConfigLocation
readonly "requiresMcRestart": boolean
readonly "showInGui": boolean
readonly "minValue": integer
readonly "field": $Field
readonly "name": StringJS
readonly "comment": StringJS
readonly "category": StringJS

constructor(arg0: $IModBase$$Type, arg1: StringJS, arg2: StringJS, arg3: T, arg4: StringJS, arg5: boolean, arg6: $ModConfigLocation$$Type, arg7: $Field$$Type, arg8: boolean, arg9: boolean, arg10: boolean, arg11: integer, arg12: integer)

public "getName"(): StringJS
public "getCategory"(): StringJS
public "getConfigLocation"(): $ModConfigLocation
public "isCommandable"(): boolean
public "getLanguageKey"(): StringJS
public "saveToField"(): void
public "setConfigProperty"(arg0: $Supplier$$Type<(T)>, arg1: $Consumer$$Type<(T)>): void
public "getConfigProperty"(): $Supplier<(T)>
public "getConfigPropertyUpdater"(): $Consumer<(T)>
get "name"(): StringJS
get "category"(): StringJS
get "configLocation"(): $ModConfigLocation
get "commandable"(): boolean
get "languageKey"(): StringJS
get "configProperty"(): $Supplier<(T)>
get "configPropertyUpdater"(): $Consumer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurablePropertyData$$Type<T> = ($ConfigurablePropertyData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurablePropertyData_<T> = $ConfigurablePropertyData$$Type<(T)>;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.PolyglotAccess$Builder" {
import {$PolyglotAccess, $PolyglotAccess$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.PolyglotAccess"

export class $PolyglotAccess$Builder {


public "build"(): $PolyglotAccess
public "allowEval"(from: StringJS, to: StringJS): $PolyglotAccess$Builder
public "denyEval"(from: StringJS, to: StringJS): $PolyglotAccess$Builder
public "allowEvalBetween"(...languages: (StringJS)[]): $PolyglotAccess$Builder
public "denyEvalBetween"(...languages: (StringJS)[]): $PolyglotAccess$Builder
public "allowBindingsAccess"(language: StringJS): $PolyglotAccess$Builder
public "denyBindingsAccess"(language: StringJS): $PolyglotAccess$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PolyglotAccess$Builder$$Type = ($PolyglotAccess$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PolyglotAccess$Builder_ = $PolyglotAccess$Builder$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Engine" {
import {$Source, $Source$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Source"
import {$OptionDescriptors, $OptionDescriptors$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.options.OptionDescriptors"
import {$Engine$Builder, $Engine$Builder$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Engine$Builder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$Language, $Language$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Language"
import {$Instrument, $Instrument$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Instrument"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $Engine implements $AutoCloseable {


public "getVersion"(): StringJS
public static "create"(...permittedLanguages: (StringJS)[]): $Engine
public static "create"(): $Engine
public "getImplementationName"(): StringJS
public "close"(): void
public "close"(cancelIfExecuting: boolean): void
public static "newBuilder"(): $Engine$Builder
public static "newBuilder"(...permittedLanguages: (StringJS)[]): $Engine$Builder
public "getOptions"(): $OptionDescriptors
public "getLanguages"(): $Map<(StringJS), ($Language)>
public "getInstruments"(): $Map<(StringJS), ($Instrument)>
public static "findHome"(): $Path
public static "copyResources"(targetFolder: $Path$$Type, ...components: (StringJS)[]): boolean
public "getCachedSources"(): $Set<($Source)>
get "version"(): StringJS
get "implementationName"(): StringJS
get "options"(): $OptionDescriptors
get "languages"(): $Map<(StringJS), ($Language)>
get "instruments"(): $Map<(StringJS), ($Instrument)>
get "cachedSources"(): $Set<($Source)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Engine$$Type = ($Engine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Engine_ = $Engine$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.IPartTypeActiveVariable" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PartRenderPosition, $PartRenderPosition$$Type} from "org.cyclops.integrateddynamics.api.part.PartRenderPosition"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$DimPos, $DimPos$$Type} from "org.cyclops.cyclopscore.datastructure.DimPos"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPartContainer, $IPartContainer$$Type} from "org.cyclops.integrateddynamics.api.part.IPartContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IPartNetworkElement, $IPartNetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetworkElement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$INetworkElement, $INetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElement"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$PartPos, $PartPos$$Type} from "org.cyclops.integrateddynamics.api.part.PartPos"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IVariable, $IVariable$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariable"
import {$INetworkEvent, $INetworkEvent$$Type} from "org.cyclops.integrateddynamics.api.network.event.INetworkEvent"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export interface $IPartTypeActiveVariable<P extends $IPartTypeActiveVariable<(P), (S)>, S extends $IPartState<(P)>> extends $IPartType<(P), (S)> {

 "hasActiveVariable"(arg0: $IPartNetwork$$Type, arg1: $PartTarget$$Type, arg2: S): boolean
 "getActiveVariable"<V extends $IValue>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): $IVariable<(V)>
 "getTarget"(arg0: $PartPos$$Type, arg1: S): $PartTarget
 "getTargetOffset"(arg0: S): $Vec3i
 "getChannel"(arg0: S): integer
 "getItem"(): $Item
 "isUpdate"(arg0: S): boolean
 "update"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "isEnabled"(arg0: S): boolean
 "getPriority"(arg0: S): integer
 "getState"(arg0: $ValueDeseralizationContext$$Type, arg1: $ItemStack$$Type): S
 "toNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type, arg2: S): void
 "isSolid"(arg0: S): boolean
 "updateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S, arg3: $RandomSource$$Type): void
 "getUniqueName"(): $ResourceLocation
 "setEnabled"(arg0: S, arg1: boolean): void
 "getBlockState"(arg0: $IPartContainer$$Type, arg1: $Direction$$Type): $BlockState
 "getItemStack"(arg0: $ValueDeseralizationContext$$Type, arg1: S, arg2: boolean): $ItemStack
 "addDrops"(arg0: $PartTarget$$Type, arg1: S, arg2: $List$$Type<($ItemStack$$Type)>, arg3: boolean, arg4: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onPostRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "postUpdate"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: boolean): void
 "loadTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "loadTooltip"(arg0: S, arg1: $List$$Type<($Component$$Type)>): void
 "fromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): S
 "getBlockModelPath"(): $ResourceLocation
 "getPartRenderPosition"(): $PartRenderPosition
 "getUpdateInterval"(arg0: S): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: integer, arg5: integer): void
 "supportsOffsets"(): boolean
 "setTargetOffset"(arg0: S, arg1: $PartPos$$Type, arg2: $Vec3i$$Type): boolean
 "setTargetSideOverride"(arg0: S, arg1: $Direction$$Type): void
 "getTargetSideOverride"(arg0: S): $Direction
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "afterNetworkAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkAddition"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "createNetworkElement"(arg0: $IPartContainer$$Type, arg1: $DimPos$$Type, arg2: $Direction$$Type): $INetworkElement
 "onPartActivated"(arg0: S, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $ItemStack$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
 "getBaseBlockState"(): $BlockState
 "onBlockNeighborChange"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: $BlockGetter$$Type, arg5: $Block$$Type, arg6: $BlockPos$$Type): void
 "getConsumptionRate"(arg0: S): integer
 "forceLightTransparency"(arg0: S): boolean
 "getContainerProvider"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "afterNetworkReAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "writeExtraGuiData"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "getTranslationKey"(): StringJS
 "setUpdateInterval"(arg0: S, arg1: integer): void
 "getCloneItemStack"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S): $ItemStack
 "defaultBlockState"(): S
 "onOffsetVariablesChanged"(arg0: $PartTarget$$Type, arg1: S): void
 "getMinimumUpdateInterval"(arg0: S): integer
 "shouldTriggerBlockRenderUpdate"(arg0: S, arg1: S): boolean
 "getContainerProviderSettings"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "getContainerProviderOffsets"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "writeExtraGuiDataSettings"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "writeExtraGuiDataOffsets"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "onEvent"(arg0: $INetworkEvent$$Type, arg1: $IPartNetworkElement$$Type<(P), (S)>): void
 "hasEventSubscriptions"(): boolean
 "getSubscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
get "item"(): $Item
get "uniqueName"(): $ResourceLocation
get "blockModelPath"(): $ResourceLocation
get "partRenderPosition"(): $PartRenderPosition
get "baseBlockState"(): $BlockState
get "translationKey"(): StringJS
get "subscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
}

export namespace $IPartTypeActiveVariable {
const probejs$$marker: never
}
export class $IPartTypeActiveVariable$$Static<P extends $IPartTypeActiveVariable<(P), (S)>, S extends $IPartState<(P)>> implements $IPartTypeActiveVariable {


 "hasActiveVariable"(arg0: $IPartNetwork$$Type, arg1: $PartTarget$$Type, arg2: S): boolean
 "getActiveVariable"<V extends $IValue>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): $IVariable<(V)>
 "getTarget"(arg0: $PartPos$$Type, arg1: S): $PartTarget
 "getTargetOffset"(arg0: S): $Vec3i
 "getChannel"(arg0: S): integer
 "getItem"(): $Item
 "isUpdate"(arg0: S): boolean
 "update"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "isEnabled"(arg0: S): boolean
 "getPriority"(arg0: S): integer
 "getState"(arg0: $ValueDeseralizationContext$$Type, arg1: $ItemStack$$Type): S
 "toNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type, arg2: S): void
 "isSolid"(arg0: S): boolean
 "updateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S, arg3: $RandomSource$$Type): void
 "getUniqueName"(): $ResourceLocation
 "setEnabled"(arg0: S, arg1: boolean): void
 "getBlockState"(arg0: $IPartContainer$$Type, arg1: $Direction$$Type): $BlockState
 "getItemStack"(arg0: $ValueDeseralizationContext$$Type, arg1: S, arg2: boolean): $ItemStack
 "addDrops"(arg0: $PartTarget$$Type, arg1: S, arg2: $List$$Type<($ItemStack$$Type)>, arg3: boolean, arg4: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onPostRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "postUpdate"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: boolean): void
 "loadTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "loadTooltip"(arg0: S, arg1: $List$$Type<($Component$$Type)>): void
 "fromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): S
 "getBlockModelPath"(): $ResourceLocation
 "getPartRenderPosition"(): $PartRenderPosition
 "getUpdateInterval"(arg0: S): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: integer, arg5: integer): void
 "supportsOffsets"(): boolean
 "setTargetOffset"(arg0: S, arg1: $PartPos$$Type, arg2: $Vec3i$$Type): boolean
 "setTargetSideOverride"(arg0: S, arg1: $Direction$$Type): void
 "getTargetSideOverride"(arg0: S): $Direction
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "afterNetworkAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkAddition"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "createNetworkElement"(arg0: $IPartContainer$$Type, arg1: $DimPos$$Type, arg2: $Direction$$Type): $INetworkElement
 "onPartActivated"(arg0: S, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $ItemStack$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
 "getBaseBlockState"(): $BlockState
 "onBlockNeighborChange"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: $BlockGetter$$Type, arg5: $Block$$Type, arg6: $BlockPos$$Type): void
 "getConsumptionRate"(arg0: S): integer
 "forceLightTransparency"(arg0: S): boolean
 "getContainerProvider"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "afterNetworkReAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "writeExtraGuiData"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "getTranslationKey"(): StringJS
 "setUpdateInterval"(arg0: S, arg1: integer): void
 "getCloneItemStack"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S): $ItemStack
 "defaultBlockState"(): S
 "onOffsetVariablesChanged"(arg0: $PartTarget$$Type, arg1: S): void
 "getMinimumUpdateInterval"(arg0: S): integer
 "shouldTriggerBlockRenderUpdate"(arg0: S, arg1: S): boolean
 "getContainerProviderSettings"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "getContainerProviderOffsets"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "writeExtraGuiDataSettings"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "writeExtraGuiDataOffsets"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "onEvent"(arg0: $INetworkEvent$$Type, arg1: $IPartNetworkElement$$Type<(P), (S)>): void
 "hasEventSubscriptions"(): boolean
 "getSubscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartTypeActiveVariable$$Type<P, S> = ($IPartTypeActiveVariable<(P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartTypeActiveVariable_<P, S> = $IPartTypeActiveVariable$$Type<(P), (S)>;
}}
declare module "org.cyclops.integrateddynamics.api.part.write.IPartStateWriter" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IAspect, $IAspect$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspect"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$IAspectProperties, $IAspectProperties$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.property.IAspectProperties"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPartTypeWriter, $IPartTypeWriter$$Type} from "org.cyclops.integrateddynamics.api.part.write.IPartTypeWriter"
import {$IAspectWrite, $IAspectWrite$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspectWrite"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$PartCapability, $PartCapability$$Type} from "org.cyclops.integrateddynamics.api.part.PartCapability"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$IVariable, $IVariable$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariable"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"
import {$SimpleInventory, $SimpleInventory$$Type} from "org.cyclops.cyclopscore.inventory.SimpleInventory"

export interface $IPartStateWriter<P extends $IPartTypeWriter<(any), (any)>> extends $IPartState<(P)> {

 "getInventory"(): $SimpleInventory
 "getVariable"<V extends $IValue>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $ValueDeseralizationContext$$Type): $IVariable<(V)>
 "hasVariable"(): boolean
 "getErrors"(arg0: $IAspectWrite$$Type<(any), (any)>): $List<($MutableComponent)>
 "setDeactivated"(arg0: boolean): void
 "isDeactivated"(): boolean
 "addError"(arg0: $IAspectWrite$$Type<(any), (any)>, arg1: $MutableComponent$$Type): void
 "checkAndResetFirstTick"(): boolean
 "getActiveAspect"(): $IAspectWrite<(any), (any)>
 "triggerAspectInfoUpdate"(arg0: P, arg1: $PartTarget$$Type, arg2: $IAspectWrite$$Type<(any), (any)>, arg3: boolean): void
 "onVariableContentsUpdated"(arg0: P, arg1: $PartTarget$$Type): void
 "getTargetOffset"(): $Vec3i
 "getChannel"(): integer
 "isEnabled"(): boolean
/**
 * 
 * @deprecated
 */
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getId"(): integer
 "markDirty"(): void
 "getCapability"<T>(arg0: P, arg1: $PartCapability$$Type<(T)>, arg2: $INetwork$$Type, arg3: $IPartNetwork$$Type, arg4: $PartTarget$$Type): $Optional<(T)>
 "setEnabled"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
 "setChannel"(arg0: integer): void
 "generateId"(): void
 "getMaxOffset"(): integer
 "setMaxOffset"(arg0: integer): void
 "writeToNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
 "readFromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
 "getUpdateInterval"(): integer
 "setTargetOffset"(arg0: $Vec3i$$Type): void
 "setTargetSideOverride"(arg0: $Direction$$Type): void
 "getTargetSideOverride"(): $Direction
 "gatherCapabilities"(arg0: P): void
 "setUpdateInterval"(arg0: integer): void
 "isForceBlockRenderUpdateAndReset"(): boolean
 "getInventoryNamed"(arg0: StringJS): $NonNullList<($ItemStack)>
 "updateOffsetVariables"(arg0: P, arg1: $INetwork$$Type, arg2: $IPartNetwork$$Type, arg3: $PartTarget$$Type): void
 "getInventoriesNamed"(): $Map<(StringJS), ($NonNullList<($ItemStack)>)>
 "clearInventoriesNamed"(): void
 "initializeOffsets"(arg0: $PartTarget$$Type): void
 "isDirtyAndReset"(): boolean
 "isUpdateAndReset"(): boolean
 "forceBlockRenderUpdate"(): void
 "getAspectProperties"(arg0: $IAspect$$Type<(any), (any)>): $IAspectProperties
 "setAspectProperties"(arg0: $IAspect$$Type<(any), (any)>, arg1: $IAspectProperties$$Type): void
 "addVolatileCapability"<T>(arg0: $PartCapability$$Type<(T)>, arg1: $Optional$$Type<(T)>): void
 "loadInventoryNamed"(arg0: StringJS, arg1: $Container$$Type): void
 "saveInventoryNamed"(arg0: StringJS, arg1: $Container$$Type): void
 "setInventoryNamed"(arg0: StringJS, arg1: $NonNullList$$Type<($ItemStack$$Type)>): void
 "getOffsetVariableError"(arg0: integer): $MutableComponent
 "requiresOffsetUpdates"(): boolean
 "markOffsetVariablesChanged"(): void
 "removeVolatileCapability"(arg0: $PartCapability$$Type<(any)>): void
get "inventory"(): $SimpleInventory
set "deactivated"(value: boolean)
get "deactivated"(): boolean
get "activeAspect"(): $IAspectWrite<(any), (any)>
get "targetOffset"(): $Vec3i
get "channel"(): integer
get "enabled"(): boolean
set "priority"(value: integer)
get "priority"(): integer
get "id"(): integer
set "enabled"(value: boolean)
set "channel"(value: integer)
get "maxOffset"(): integer
set "maxOffset"(value: integer)
get "updateInterval"(): integer
set "targetOffset"(value: $Vec3i$$Type)
set "targetSideOverride"(value: $Direction$$Type)
get "targetSideOverride"(): $Direction
set "updateInterval"(value: integer)
get "forceBlockRenderUpdateAndReset"(): boolean
get "inventoriesNamed"(): $Map<(StringJS), ($NonNullList<($ItemStack)>)>
get "dirtyAndReset"(): boolean
get "updateAndReset"(): boolean
}

export namespace $IPartStateWriter {
const probejs$$marker: never
}
export class $IPartStateWriter$$Static<P extends $IPartTypeWriter<(any), (any)>> implements $IPartStateWriter {


 "getInventory"(): $SimpleInventory
 "getVariable"<V extends $IValue>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $ValueDeseralizationContext$$Type): $IVariable<(V)>
 "hasVariable"(): boolean
 "getErrors"(arg0: $IAspectWrite$$Type<(any), (any)>): $List<($MutableComponent)>
 "setDeactivated"(arg0: boolean): void
 "isDeactivated"(): boolean
 "addError"(arg0: $IAspectWrite$$Type<(any), (any)>, arg1: $MutableComponent$$Type): void
 "checkAndResetFirstTick"(): boolean
 "getActiveAspect"(): $IAspectWrite<(any), (any)>
 "triggerAspectInfoUpdate"(arg0: P, arg1: $PartTarget$$Type, arg2: $IAspectWrite$$Type<(any), (any)>, arg3: boolean): void
 "onVariableContentsUpdated"(arg0: P, arg1: $PartTarget$$Type): void
 "getTargetOffset"(): $Vec3i
 "getChannel"(): integer
 "isEnabled"(): boolean
/**
 * 
 * @deprecated
 */
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getId"(): integer
 "markDirty"(): void
 "getCapability"<T>(arg0: P, arg1: $PartCapability$$Type<(T)>, arg2: $INetwork$$Type, arg3: $IPartNetwork$$Type, arg4: $PartTarget$$Type): $Optional<(T)>
 "setEnabled"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
 "setChannel"(arg0: integer): void
 "generateId"(): void
 "getMaxOffset"(): integer
 "setMaxOffset"(arg0: integer): void
 "writeToNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
 "readFromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
 "getUpdateInterval"(): integer
 "setTargetOffset"(arg0: $Vec3i$$Type): void
 "setTargetSideOverride"(arg0: $Direction$$Type): void
 "getTargetSideOverride"(): $Direction
 "gatherCapabilities"(arg0: P): void
 "setUpdateInterval"(arg0: integer): void
 "isForceBlockRenderUpdateAndReset"(): boolean
 "getInventoryNamed"(arg0: StringJS): $NonNullList<($ItemStack)>
 "updateOffsetVariables"(arg0: P, arg1: $INetwork$$Type, arg2: $IPartNetwork$$Type, arg3: $PartTarget$$Type): void
 "getInventoriesNamed"(): $Map<(StringJS), ($NonNullList<($ItemStack)>)>
 "clearInventoriesNamed"(): void
 "initializeOffsets"(arg0: $PartTarget$$Type): void
 "isDirtyAndReset"(): boolean
 "isUpdateAndReset"(): boolean
 "forceBlockRenderUpdate"(): void
 "getAspectProperties"(arg0: $IAspect$$Type<(any), (any)>): $IAspectProperties
 "setAspectProperties"(arg0: $IAspect$$Type<(any), (any)>, arg1: $IAspectProperties$$Type): void
 "addVolatileCapability"<T>(arg0: $PartCapability$$Type<(T)>, arg1: $Optional$$Type<(T)>): void
 "loadInventoryNamed"(arg0: StringJS, arg1: $Container$$Type): void
 "saveInventoryNamed"(arg0: StringJS, arg1: $Container$$Type): void
 "setInventoryNamed"(arg0: StringJS, arg1: $NonNullList$$Type<($ItemStack$$Type)>): void
 "getOffsetVariableError"(arg0: integer): $MutableComponent
 "requiresOffsetUpdates"(): boolean
 "markOffsetVariablesChanged"(): void
 "removeVolatileCapability"(arg0: $PartCapability$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartStateWriter$$Type<P> = ($IPartStateWriter<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartStateWriter_<P> = $IPartStateWriter$$Type<(P)>;
}}
declare module "org.cyclops.integrateddynamics.advancement.criterion.PartVariableDrivenAspectTrigger$Instance" {
import {$ICriterionInstanceTestable, $ICriterionInstanceTestable$$Type} from "org.cyclops.cyclopscore.advancement.criterion.ICriterionInstanceTestable"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$PartVariableDrivenVariableContentsUpdatedEvent, $PartVariableDrivenVariableContentsUpdatedEvent$$Type} from "org.cyclops.integrateddynamics.core.part.event.PartVariableDrivenVariableContentsUpdatedEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$VariablePredicate, $VariablePredicate$$Type} from "org.cyclops.integrateddynamics.api.advancement.criterion.VariablePredicate"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PartVariableDrivenAspectTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance, $ICriterionInstanceTestable<($PartVariableDrivenVariableContentsUpdatedEvent)> {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, partType: $Optional$$Type<($IPartType$$Type)>, variablePredicate: $Optional$$Type<($VariablePredicate$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ServerPlayer$$Type, arg1: any): boolean
public "test"(arg0: $ServerPlayer$$Type, arg1: $PartVariableDrivenVariableContentsUpdatedEvent$$Type<(any), (any)>): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "partType"(): $Optional<($IPartType)>
public "variablePredicate"(): $Optional<($VariablePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartVariableDrivenAspectTrigger$Instance$$Type = ({"variablePredicate"?: ($VariablePredicate$$Type)?, "partType"?: ($IPartType$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([variablePredicate?: ($VariablePredicate$$Type)?, partType?: ($IPartType$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartVariableDrivenAspectTrigger$Instance_ = $PartVariableDrivenAspectTrigger$Instance$$Type;
}}
declare module "org.cyclops.cyclopscore.inventory.container.ContainerExtended" {
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IValueNotifier, $IValueNotifier$$Type} from "org.cyclops.cyclopscore.inventory.IValueNotifier"
import {$List, $List$$Type} from "java.util.List"
import {$IValueNotifiable, $IValueNotifiable$$Type} from "org.cyclops.cyclopscore.inventory.IValueNotifiable"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$IContainerButtonAction, $IContainerButtonAction$$Type} from "org.cyclops.cyclopscore.inventory.container.button.IContainerButtonAction"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$IContainerButtonClickAcceptorServer, $IContainerButtonClickAcceptorServer$$Type} from "org.cyclops.cyclopscore.inventory.container.button.IContainerButtonClickAcceptorServer"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ClickType, $ClickType$$Type} from "net.minecraft.world.inventory.ClickType"

/**
 * 
 * @deprecated
 */
export class $ContainerExtended extends $AbstractContainerMenu implements $IContainerButtonClickAcceptorServer<($ContainerExtended)>, $IValueNotifier, $IValueNotifiable {
readonly "quickcraftSlots": $Set<($Slot)>
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
 "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(any)>, arg1: integer, arg2: $Inventory$$Type)

public "getValue"(arg0: integer): $CompoundTag
public "setValue"(arg0: integer, arg1: $CompoundTag$$Type): void
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$$Type, arg3: $Player$$Type): void
public "getValueIds"(): $Set<(integer)>
public "onButtonClick"(arg0: StringJS): boolean
public static "setSlotPosX"(arg0: $Slot$$Type, arg1: integer): void
public static "setSlotPosY"(arg0: $Slot$$Type, arg1: integer): void
public "onUpdate"(arg0: integer, arg1: $CompoundTag$$Type): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "broadcastChanges"(): void
public "addSlotListener"(arg0: $ContainerListener$$Type): void
public "setGuiValueListener"(arg0: $IValueNotifiable$$Type): void
public "getValueNotifiableType"(): $MenuType<(any)>
public "getPlayerIInventory"(): $Inventory
public "putButtonAction"(arg0: StringJS, arg1: $IContainerButtonAction$$Type<($ContainerExtended$$Type)>): void
public "registerSyncedVariable"<T>(arg0: $Class$$Type<(T)>, arg1: $Supplier$$Type<(T)>): $Supplier<(T)>
public "getHolderLookupProvider"(): $HolderLookup$Provider
get "valueIds"(): $Set<(integer)>
set "guiValueListener"(value: $IValueNotifiable$$Type)
get "valueNotifiableType"(): $MenuType<(any)>
get "playerIInventory"(): $Inventory
get "holderLookupProvider"(): $HolderLookup$Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerExtended$$Type = ($ContainerExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerExtended_ = $ContainerExtended$$Type;
}}
declare module "org.cyclops.cyclopscore.helper.IGuiHelpers" {
import {$AbstractContainerScreen, $AbstractContainerScreen$$Type} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$List, $List$$Type} from "java.util.List"
import {$IGuiHelpers$ProgressDirection, $IGuiHelpers$ProgressDirection$$Type} from "org.cyclops.cyclopscore.helper.IGuiHelpers$ProgressDirection"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IGuiHelpers {

 "renderTooltip"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $PoseStack$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $Supplier$$Type<($List$$Type<($Component$$Type)>)>): void
 "fillGradient"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
 "getSlotSize"(): integer
 "drawTooltip"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $PoseStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: integer, arg4: integer): void
 "getSlotSizeInner"(): integer
 "renderProgressBar"(arg0: $GuiGraphics$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $IGuiHelpers$ProgressDirection$$Type, arg9: integer, arg10: integer): void
 "drawTooltipBackground"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "renderTooltipOptional"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $PoseStack$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $Supplier$$Type<($Optional$$Type<($List$$Type<($Component$$Type)>)>)>): void
 "quantityToScaledString"(arg0: long): StringJS
get "slotSize"(): integer
get "slotSizeInner"(): integer
}

export namespace $IGuiHelpers {
const probejs$$marker: never
}
export class $IGuiHelpers$$Static implements $IGuiHelpers {


 "renderTooltip"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $PoseStack$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $Supplier$$Type<($List$$Type<($Component$$Type)>)>): void
 "fillGradient"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
 "getSlotSize"(): integer
 "drawTooltip"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $PoseStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: integer, arg4: integer): void
 "getSlotSizeInner"(): integer
 "renderProgressBar"(arg0: $GuiGraphics$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $IGuiHelpers$ProgressDirection$$Type, arg9: integer, arg10: integer): void
 "drawTooltipBackground"(arg0: $PoseStack$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "renderTooltipOptional"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $PoseStack$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $Supplier$$Type<($Optional$$Type<($List$$Type<($Component$$Type)>)>)>): void
 "quantityToScaledString"(arg0: long): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiHelpers$$Type = ($IGuiHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiHelpers_ = $IGuiHelpers$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.client.model.IVariableModelProvider$BakedModelProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IVariableModelProvider$BakedModelProvider {

}

export namespace $IVariableModelProvider$BakedModelProvider {
const probejs$$marker: never
}
export class $IVariableModelProvider$BakedModelProvider$$Static implements $IVariableModelProvider$BakedModelProvider {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableModelProvider$BakedModelProvider$$Type = ($IVariableModelProvider$BakedModelProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableModelProvider$BakedModelProvider_ = $IVariableModelProvider$BakedModelProvider$$Type;
}}
declare module "org.cyclops.cyclopscore.advancement.criterion.ItemCraftedTrigger$Instance" {
import {$ICriterionInstanceTestable, $ICriterionInstanceTestable$$Type} from "org.cyclops.cyclopscore.advancement.criterion.ICriterionInstanceTestable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $ItemCraftedTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance, $ICriterionInstanceTestable<($ItemStack)> {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, itemPredicate: $ItemPredicate$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ServerPlayer$$Type, arg1: any): boolean
public "test"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "itemPredicate"(): $ItemPredicate
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCraftedTrigger$Instance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "itemPredicate"?: $ItemPredicate$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, itemPredicate?: $ItemPredicate$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCraftedTrigger$Instance_ = $ItemCraftedTrigger$Instance$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon$ISlotPositionCallback" {
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"
import {$ITerminalStorageTabCommon$SlotPositionFactors, $ITerminalStorageTabCommon$SlotPositionFactors$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon$SlotPositionFactors"

export interface $ITerminalStorageTabCommon$ISlotPositionCallback {

 "getSlotPosition"(arg0: $ITerminalStorageTabCommon$SlotPositionFactors$$Type): $Pair<(integer), (integer)>

(arg0: $ITerminalStorageTabCommon$SlotPositionFactors): $Pair$$Type<(integer), (integer)>
}

export namespace $ITerminalStorageTabCommon$ISlotPositionCallback {
const probejs$$marker: never
}
export class $ITerminalStorageTabCommon$ISlotPositionCallback$$Static implements $ITerminalStorageTabCommon$ISlotPositionCallback {


 "getSlotPosition"(arg0: $ITerminalStorageTabCommon$SlotPositionFactors$$Type): $Pair<(integer), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalStorageTabCommon$ISlotPositionCallback$$Type = ((arg0: $ITerminalStorageTabCommon$SlotPositionFactors) => $Pair$$Type<(integer), (integer)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalStorageTabCommon$ISlotPositionCallback_ = $ITerminalStorageTabCommon$ISlotPositionCallback$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.HostAccess$Builder" {
import {$Executable, $Executable$$Type} from "java.lang.reflect.Executable"
import {$HostAccess$TargetMappingPrecedence, $HostAccess$TargetMappingPrecedence$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.HostAccess$TargetMappingPrecedence"
import {$MethodHandles$Lookup, $MethodHandles$Lookup$$Type} from "java.lang.invoke.MethodHandles$Lookup"
import {$HostAccess$MutableTargetMapping, $HostAccess$MutableTargetMapping$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.HostAccess$MutableTargetMapping"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$HostAccess, $HostAccess$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.HostAccess"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Field, $Field$$Type} from "java.lang.reflect.Field"

export class $HostAccess$Builder {


public "build"(): $HostAccess
public "allowAccess"(element: $Field$$Type): $HostAccess$Builder
public "allowAccess"(element: $Executable$$Type): $HostAccess$Builder
public "methodScoping"(scopingDefault: boolean): $HostAccess$Builder
public "denyAccess"(clazz: $Class$$Type<(any)>, includeSubclasses: boolean): $HostAccess$Builder
public "denyAccess"(clazz: $Class$$Type<(any)>): $HostAccess$Builder
public "allowMapAccess"(mapAccess: boolean): $HostAccess$Builder
public "disableMethodScoping"(e: $Executable$$Type): $HostAccess$Builder
public "allowAccessAnnotatedBy"(annotation: $Class$$Type<($Annotation$$Type)>): $HostAccess$Builder
public "allowPublicAccess"(allow: boolean): $HostAccess$Builder
public "allowArrayAccess"(arrayAccess: boolean): $HostAccess$Builder
public "allowListAccess"(listAccess: boolean): $HostAccess$Builder
public "allowBufferAccess"(bufferAccess: boolean): $HostAccess$Builder
public "allowIterableAccess"(iterableAccess: boolean): $HostAccess$Builder
public "allowIteratorAccess"(iteratorAccess: boolean): $HostAccess$Builder
public "allowAccessInheritance"(inheritAccess: boolean): $HostAccess$Builder
public "allowImplementations"(type: $Class$$Type<(any)>): $HostAccess$Builder
public "targetTypeMapping"<S, T>(sourceType: $Class$$Type<(S)>, targetType: $Class$$Type<(T)>, accepts: $Predicate$$Type<(S)>, converter: $Function$$Type<(S), (T)>): $HostAccess$Builder
public "targetTypeMapping"<S, T>(sourceType: $Class$$Type<(S)>, targetType: $Class$$Type<(T)>, accepts: $Predicate$$Type<(S)>, converter: $Function$$Type<(S), (T)>, precedence: $HostAccess$TargetMappingPrecedence$$Type): $HostAccess$Builder
public "useModuleLookup"(lookup: $MethodHandles$Lookup$$Type): $HostAccess$Builder
public "allowImplementationsAnnotatedBy"(annotation: $Class$$Type<($Annotation$$Type)>): $HostAccess$Builder
public "disableMethodScopingAnnotatedBy"(annotation: $Class$$Type<($Annotation$$Type)>): $HostAccess$Builder
public "allowBigIntegerNumberAccess"(bigIntegerNumberAccess: boolean): $HostAccess$Builder
public "allowAllClassImplementations"(allow: boolean): $HostAccess$Builder
public "allowMutableTargetMappings"(...mapping: ($HostAccess$MutableTargetMapping$$Type)[]): $HostAccess$Builder
public "allowAllImplementations"(allow: boolean): $HostAccess$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HostAccess$Builder$$Type = ($HostAccess$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HostAccess$Builder_ = $HostAccess$Builder$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.AbstractValue" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AbstractValue {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractValue$$Type = ($AbstractValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractValue_ = $AbstractValue$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType" {
import {$ItemDisplayContext, $ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$IValueTypeLogicProgrammerElement, $IValueTypeLogicProgrammerElement$$Type} from "org.cyclops.integrateddynamics.api.logicprogrammer.IValueTypeLogicProgrammerElement"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export interface $IValueType<V extends $IValue> {

 "materialize"(arg0: V): V
 "parseString"(arg0: StringJS): V
 "toString"(arg0: V): StringJS
 "cast"(arg0: $IValue$$Type): V
 "getDefault"(): V
 "getTypeName"(): StringJS
 "getUniqueName"(): $ResourceLocation
 "deserialize"(arg0: $ValueDeseralizationContext$$Type, arg1: $Tag$$Type): V
 "serialize"(arg0: $ValueDeseralizationContext$$Type, arg1: V): $Tag
 "isObject"(): boolean
 "canDeserialize"(arg0: $ValueDeseralizationContext$$Type, arg1: $Tag$$Type): $Component
 "isCategory"(): boolean
 "correspondsTo"(arg0: $IValueType$$Type<(any)>): boolean
 "renderISTER"(arg0: V, arg1: $ItemStack$$Type, arg2: $ItemDisplayContext$$Type, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: integer): void
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: V): void
 "toCompactString"(arg0: V): $MutableComponent
 "getTranslationKey"(): StringJS
 "getDisplayColor"(): integer
 "getDisplayColorFormat"(): $ChatFormatting
 "createLogicProgrammerElement"(): $IValueTypeLogicProgrammerElement<(any), (any), (any)>
 "getVariableItemOverrideModel"(arg0: V, arg1: $BakedModel$$Type, arg2: $ItemStack$$Type, arg3: $ClientLevel$$Type, arg4: $LivingEntity$$Type): $BakedModel
get "default"(): V
get "typeName"(): StringJS
get "uniqueName"(): $ResourceLocation
get "object"(): boolean
get "category"(): boolean
get "translationKey"(): StringJS
get "displayColor"(): integer
get "displayColorFormat"(): $ChatFormatting
}

export namespace $IValueType {
const probejs$$marker: never
}
export class $IValueType$$Static<V extends $IValue> implements $IValueType {


 "materialize"(arg0: V): V
 "parseString"(arg0: StringJS): V
 "toString"(arg0: V): StringJS
 "cast"(arg0: $IValue$$Type): V
 "getDefault"(): V
 "getTypeName"(): StringJS
 "getUniqueName"(): $ResourceLocation
 "deserialize"(arg0: $ValueDeseralizationContext$$Type, arg1: $Tag$$Type): V
 "serialize"(arg0: $ValueDeseralizationContext$$Type, arg1: V): $Tag
 "isObject"(): boolean
 "canDeserialize"(arg0: $ValueDeseralizationContext$$Type, arg1: $Tag$$Type): $Component
 "isCategory"(): boolean
 "correspondsTo"(arg0: $IValueType$$Type<(any)>): boolean
 "renderISTER"(arg0: V, arg1: $ItemStack$$Type, arg2: $ItemDisplayContext$$Type, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: integer): void
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: V): void
 "toCompactString"(arg0: V): $MutableComponent
 "getTranslationKey"(): StringJS
 "getDisplayColor"(): integer
 "getDisplayColorFormat"(): $ChatFormatting
 "createLogicProgrammerElement"(): $IValueTypeLogicProgrammerElement<(any), (any), (any)>
 "getVariableItemOverrideModel"(arg0: V, arg1: $BakedModel$$Type, arg2: $ItemStack$$Type, arg3: $ClientLevel$$Type, arg4: $LivingEntity$$Type): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValueType$$Type<V> = ($IValueType<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValueType_<V> = $IValueType$$Type<(V)>;
}}
declare module "org.cyclops.integrateddynamics.block.BlockMechanicalDryingBasin" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockMechanicalMachine, $BlockMechanicalMachine$$Type} from "org.cyclops.integrateddynamics.core.block.BlockMechanicalMachine"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMechanicalDryingBasin extends $BlockMechanicalMachine {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockMechanicalDryingBasin)>
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
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMechanicalDryingBasin$$Type = ($BlockMechanicalDryingBasin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMechanicalDryingBasin_ = $BlockMechanicalDryingBasin$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.block.BlockMechanicalMachine" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$$Type} from "org.cyclops.integrateddynamics.core.block.BlockWithEntityGuiCabled"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CyclopsBlockEntity, $CyclopsBlockEntity$$Type} from "org.cyclops.cyclopscore.blockentity.CyclopsBlockEntity"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMechanicalMachine extends $BlockWithEntityGuiCabled {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $BiFunction$$Type<($BlockPos), ($BlockState), ($CyclopsBlockEntity$$Type)>)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMechanicalMachine$$Type = ($BlockMechanicalMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMechanicalMachine_ = $BlockMechanicalMachine$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.AttachCapabilitiesEventNetwork" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$NetworkCapability, $NetworkCapability$$Type} from "org.cyclops.integrateddynamics.api.network.NetworkCapability"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IFullNetworkListener, $IFullNetworkListener$$Type} from "org.cyclops.integrateddynamics.api.network.IFullNetworkListener"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"

export class $AttachCapabilitiesEventNetwork extends $Event implements $IModBusEvent {

constructor(arg0: $INetwork$$Type)

public "getProviders"(): $Map<($NetworkCapability<(any)>), ($List<($ICapabilityProvider<($INetwork), (void), (any)>)>)>
public "register"<T>(arg0: $NetworkCapability$$Type<(T)>, arg1: $ICapabilityProvider$$Type<($INetwork), (void), (T)>): void
public "getNetwork"(): $INetwork
public "addFullNetworkListener"(arg0: $IFullNetworkListener$$Type): void
public "getFullNetworkListeners"(): $List<($IFullNetworkListener)>
get "providers"(): $Map<($NetworkCapability<(any)>), ($List<($ICapabilityProvider<($INetwork), (void), (any)>)>)>
get "network"(): $INetwork
get "fullNetworkListeners"(): $List<($IFullNetworkListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachCapabilitiesEventNetwork$$Type = ($AttachCapabilitiesEventNetwork);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachCapabilitiesEventNetwork_ = $AttachCapabilitiesEventNetwork$$Type;
}}
declare module "org.cyclops.integrateddynamics.capability.partcontainer.PartContainerTileMultipartTicking" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityMultipartTicking, $BlockEntityMultipartTicking$$Type} from "org.cyclops.integrateddynamics.core.blockentity.BlockEntityMultipartTicking"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PartContainerDefault, $PartContainerDefault$$Type} from "org.cyclops.integrateddynamics.capability.partcontainer.PartContainerDefault"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $PartContainerTileMultipartTicking extends $PartContainerDefault {

constructor(arg0: $BlockEntityMultipartTicking$$Type)

public "getWatchingSide"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): $Direction
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartContainerTileMultipartTicking$$Type = ($PartContainerTileMultipartTicking);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartContainerTileMultipartTicking_ = $PartContainerTileMultipartTicking$$Type;
}}
declare module "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider" {
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockGui$IBlockContainerProvider {

 "get"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider

(arg0: $BlockState, arg1: $Level, arg2: $BlockPos): $MenuProvider$$Type
}

export namespace $IBlockGui$IBlockContainerProvider {
const probejs$$marker: never
}
export class $IBlockGui$IBlockContainerProvider$$Static implements $IBlockGui$IBlockContainerProvider {


 "get"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockGui$IBlockContainerProvider$$Type = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos) => $MenuProvider$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockGui$IBlockContainerProvider_ = $IBlockGui$IBlockContainerProvider$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Engine$Builder" {
import {$SandboxPolicy, $SandboxPolicy$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.SandboxPolicy"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MessageTransport, $MessageTransport$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.MessageTransport"
import {$Handler, $Handler$$Type} from "java.util.logging.Handler"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$Engine, $Engine$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Engine"

export class $Engine$Builder {


public "option"(key: StringJS, value: StringJS): $Engine$Builder
public "options"(options: $Map$$Type<(StringJS), (StringJS)>): $Engine$Builder
public "build"(): $Engine
public "out"(out: $OutputStream$$Type): $Engine$Builder
public "err"(err: $OutputStream$$Type): $Engine$Builder
public "in"(arg0: $InputStream$$Type): $Engine$Builder
public "sandbox"(policy: $SandboxPolicy$$Type): $Engine$Builder
public "logHandler"(logOut: $OutputStream$$Type): $Engine$Builder
public "logHandler"(logHandler: $Handler$$Type): $Engine$Builder
public "useSystemProperties"(enabled: boolean): $Engine$Builder
public "serverTransport"(serverTransport: $MessageTransport$$Type): $Engine$Builder
public "allowExperimentalOptions"(enabled: boolean): $Engine$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Engine$Builder$$Type = ($Engine$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Engine$Builder_ = $Engine$Builder$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.evaluate.variable.IValue" {
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"

export interface $IValue {

 "cast"<V extends $IValue>(arg0: $IValueType$$Type<(V)>): V
 "getType"(): $IValueType<(any)>
 "canCast"<V extends $IValue>(arg0: $IValueType$$Type<(V)>): boolean
get "type"(): $IValueType<(any)>
}

export namespace $IValue {
const probejs$$marker: never
}
export class $IValue$$Static implements $IValue {


 "cast"<V extends $IValue>(arg0: $IValueType$$Type<(V)>): V
 "getType"(): $IValueType<(any)>
 "canCast"<V extends $IValue>(arg0: $IValueType$$Type<(V)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValue$$Type = ($IValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValue_ = $IValue$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.SourceSection" {
import {$Source, $Source$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Source"

export class $SourceSection {


public "isAvailable"(): boolean
public "getSource"(): $Source
public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getCharIndex"(): integer
/**
 * 
 * @deprecated
 */
public "getCode"(): charseq
public "getCharLength"(): integer
public "getEndColumn"(): integer
public "getEndLine"(): integer
public "getStartColumn"(): integer
public "getStartLine"(): integer
public "hasCharIndex"(): boolean
public "hasLines"(): boolean
public "hasColumns"(): boolean
public "getCharacters"(): charseq
public "getCharEndIndex"(): integer
get "available"(): boolean
get "source"(): $Source
get "charIndex"(): integer
get "code"(): charseq
get "charLength"(): integer
get "endColumn"(): integer
get "endLine"(): integer
get "startColumn"(): integer
get "startLine"(): integer
get "characters"(): charseq
get "charEndIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceSection$$Type = ($SourceSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceSection_ = $SourceSection$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.part.event.PartVariableDrivenVariableContentsUpdatedEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$IVariable, $IVariable$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariable"
import {$PartEvent, $PartEvent$$Type} from "org.cyclops.integrateddynamics.core.part.event.PartEvent"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export class $PartVariableDrivenVariableContentsUpdatedEvent<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>> extends $PartEvent<(P), (S)> {

constructor(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: P, arg4: S, arg5: $Player$$Type, arg6: $IVariable$$Type<(any)>, arg7: $IValue$$Type)

public "getValue"(): $IValue
public "getVariable"(): $IVariable<(any)>
public "getEntityPlayer"(): $Player
get "value"(): $IValue
get "variable"(): $IVariable<(any)>
get "entityPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartVariableDrivenVariableContentsUpdatedEvent$$Type<P, S> = ($PartVariableDrivenVariableContentsUpdatedEvent<(P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartVariableDrivenVariableContentsUpdatedEvent_<P, S> = $PartVariableDrivenVariableContentsUpdatedEvent$$Type<(P), (S)>;
}}
declare module "org.cyclops.cyclopscore.advancement.criterion.ItemCraftedTrigger" {
import {$ItemCraftedTrigger$Instance, $ItemCraftedTrigger$Instance$$Type} from "org.cyclops.cyclopscore.advancement.criterion.ItemCraftedTrigger$Instance"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ItemCraftedTrigger extends $SimpleCriterionTrigger<($ItemCraftedTrigger$Instance)> {
static readonly "CODEC": $Codec<($ItemCraftedTrigger$Instance)>

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Predicate$$Type<($ItemCraftedTrigger$Instance)>): void
public "codec"(): $Codec<($ItemCraftedTrigger$Instance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCraftedTrigger$$Type = ($ItemCraftedTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCraftedTrigger_ = $ItemCraftedTrigger$$Type;
}}
declare module "org.cyclops.integrateddynamics.item.ItemEnhancement" {
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
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$ItemEnhancement$Type, $ItemEnhancement$Type$$Type} from "org.cyclops.integrateddynamics.item.ItemEnhancement$Type"

export class $ItemEnhancement extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ItemEnhancement$Type$$Type, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "applyEnhancement"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $IPartType$$Type<(P), (S)>, arg1: $IPartState$$Type<(P)>, arg2: $ItemStack$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type): $InteractionResult
public "getEnhancementValue"(arg0: $ItemStack$$Type): integer
public "setEnhancementValue"(arg0: $ItemStack$$Type, arg1: integer): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnhancement$$Type = ($ItemEnhancement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEnhancement_ = $ItemEnhancement$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.item.ItemPart$IUseAction" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemPart, $ItemPart$$Type} from "org.cyclops.integrateddynamics.core.item.ItemPart"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ItemPart$IUseAction {

 "attempItemUseTarget"(arg0: $ItemPart$$Type<(any), (any)>, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean

(arg0: $ItemPart<(any), (any)>, arg1: $ItemStack, arg2: $Level, arg3: $BlockPos, arg4: $Direction): boolean
}

export namespace $ItemPart$IUseAction {
const probejs$$marker: never
}
export class $ItemPart$IUseAction$$Static implements $ItemPart$IUseAction {


 "attempItemUseTarget"(arg0: $ItemPart$$Type<(any), (any)>, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPart$IUseAction$$Type = ((arg0: $ItemPart<(any), (any)>, arg1: $ItemStack, arg2: $Level, arg3: $BlockPos, arg4: $Direction) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPart$IUseAction_ = $ItemPart$IUseAction$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockFluidLiquidChorus" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockFluidLiquidChorus extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFluidLiquidChorus$$Type = ($BlockFluidLiquidChorus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFluidLiquidChorus_ = $BlockFluidLiquidChorus$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.block.IgnoredBlockStatus$PropertyStatus" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Predicate, $Predicate$$Type} from "com.google.common.base.Predicate"
import {$IgnoredBlockStatus$Status, $IgnoredBlockStatus$Status$$Type} from "org.cyclops.integrateddynamics.core.block.IgnoredBlockStatus$Status"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"

export class $IgnoredBlockStatus$PropertyStatus extends $EnumProperty<($IgnoredBlockStatus$Status)> {


public static "create"(arg0: StringJS, arg1: $Collection$$Type<($IgnoredBlockStatus$Status$$Type)>): $IgnoredBlockStatus$PropertyStatus
public static "create"(arg0: StringJS): $IgnoredBlockStatus$PropertyStatus
public static "create"(arg0: StringJS, arg1: $Predicate$$Type<($IgnoredBlockStatus$Status)>): $IgnoredBlockStatus$PropertyStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IgnoredBlockStatus$PropertyStatus$$Type = ($IgnoredBlockStatus$PropertyStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IgnoredBlockStatus$PropertyStatus_ = $IgnoredBlockStatus$PropertyStatus$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.evaluate.variable.IVariable" {
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$IVariableInvalidateListener, $IVariableInvalidateListener$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariableInvalidateListener"

export interface $IVariable<V extends $IValue> extends $IVariableInvalidateListener {

 "getValue"(): V
 "getType"(): $IValueType<(V)>
 "addInvalidationListener"(arg0: $IVariableInvalidateListener$$Type): void
 "invalidate"(): void
get "value"(): V
get "type"(): $IValueType<(V)>
}

export namespace $IVariable {
const probejs$$marker: never
}
export class $IVariable$$Static<V extends $IValue> implements $IVariable {


 "getValue"(): V
 "getType"(): $IValueType<(V)>
 "addInvalidationListener"(arg0: $IVariableInvalidateListener$$Type): void
 "invalidate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariable$$Type<V> = ($IVariable<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariable_<V> = $IVariable$$Type<(V)>;
}}
declare module "org.cyclops.integrateddynamics.capability.cable.CableTileMultipartTicking" {
import {$BlockEntityMultipartTicking, $BlockEntityMultipartTicking$$Type} from "org.cyclops.integrateddynamics.core.blockentity.BlockEntityMultipartTicking"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$CableTile, $CableTile$$Type} from "org.cyclops.integrateddynamics.capability.cable.CableTile"

export class $CableTileMultipartTicking extends $CableTile<($BlockEntityMultipartTicking)> {

constructor(arg0: $BlockEntityMultipartTicking$$Type)

public "isForceDisconnected"(arg0: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableTileMultipartTicking$$Type = ($CableTileMultipartTicking);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableTileMultipartTicking_ = $CableTileMultipartTicking$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockDelay" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$$Type} from "org.cyclops.integrateddynamics.core.block.BlockWithEntityGuiCabled"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockDelay extends $BlockWithEntityGuiCabled {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockDelay)>
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDelay$$Type = ($BlockDelay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDelay_ = $BlockDelay$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.INetworkEventListener" {
import {$INetworkEvent, $INetworkEvent$$Type} from "org.cyclops.integrateddynamics.api.network.event.INetworkEvent"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $INetworkEventListener<E> {

 "onEvent"(arg0: $INetworkEvent$$Type, arg1: E): void
 "hasEventSubscriptions"(): boolean
 "getSubscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
get "subscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
}

export namespace $INetworkEventListener {
const probejs$$marker: never
}
export class $INetworkEventListener$$Static<E> implements $INetworkEventListener {


 "onEvent"(arg0: $INetworkEvent$$Type, arg1: E): void
 "hasEventSubscriptions"(): boolean
 "getSubscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkEventListener$$Type<E> = ($INetworkEventListener<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkEventListener_<E> = $INetworkEventListener$$Type<(E)>;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.PolyglotAccess" {
import {$PolyglotAccess$Builder, $PolyglotAccess$Builder$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.PolyglotAccess$Builder"

export class $PolyglotAccess {
static readonly "ALL": $PolyglotAccess
static readonly "NONE": $PolyglotAccess


public static "newBuilder"(): $PolyglotAccess$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PolyglotAccess$$Type = ($PolyglotAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PolyglotAccess_ = $PolyglotAccess$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.PartPos" {
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$DimPos, $DimPos$$Type} from "org.cyclops.cyclopscore.datastructure.DimPos"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $PartPos implements $Comparable<($PartPos)> {


public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $PartPos$$Type): integer
public "compareTo"(arg0: any): integer
public static "of"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $PartPos
public static "of"(arg0: $DimPos$$Type, arg1: $Direction$$Type): $PartPos
public "getPos"(): $DimPos
public "getSide"(): $Direction
public static "getPartData"(arg0: $PartPos$$Type): $Pair<($IPartType), ($IPartState)>
get "pos"(): $DimPos
get "side"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartPos$$Type = ($PartPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartPos_ = $PartPos$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.event.INetworkEventBus" {
import {$ICancelableNetworkEvent, $ICancelableNetworkEvent$$Type} from "org.cyclops.integrateddynamics.api.network.event.ICancelableNetworkEvent"
import {$IEventListenableNetworkElement, $IEventListenableNetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.IEventListenableNetworkElement"
import {$INetworkEvent, $INetworkEvent$$Type} from "org.cyclops.integrateddynamics.api.network.event.INetworkEvent"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $INetworkEventBus {

 "post"(arg0: $INetworkEvent$$Type): void
 "unregister"(arg0: $IEventListenableNetworkElement$$Type<(any)>, arg1: $Class$$Type<($INetworkEvent$$Type)>): void
 "unregister"(arg0: $IEventListenableNetworkElement$$Type<(any)>): void
 "register"(arg0: $IEventListenableNetworkElement$$Type<(any)>, arg1: $Class$$Type<($INetworkEvent$$Type)>): void
 "postCancelable"(arg0: $ICancelableNetworkEvent$$Type): boolean
}

export namespace $INetworkEventBus {
const probejs$$marker: never
}
export class $INetworkEventBus$$Static implements $INetworkEventBus {


 "post"(arg0: $INetworkEvent$$Type): void
 "unregister"(arg0: $IEventListenableNetworkElement$$Type<(any)>, arg1: $Class$$Type<($INetworkEvent$$Type)>): void
 "unregister"(arg0: $IEventListenableNetworkElement$$Type<(any)>): void
 "register"(arg0: $IEventListenableNetworkElement$$Type<(any)>, arg1: $Class$$Type<($INetworkEvent$$Type)>): void
 "postCancelable"(arg0: $ICancelableNetworkEvent$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkEventBus$$Type = ($INetworkEventBus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkEventBus_ = $INetworkEventBus$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeSerializerMechanicalDryingBasin" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeMechanicalDryingBasin, $RecipeMechanicalDryingBasin$$Type} from "org.cyclops.integrateddynamics.core.recipe.type.RecipeMechanicalDryingBasin"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RecipeSerializerMechanicalDryingBasin implements $RecipeSerializer<($RecipeMechanicalDryingBasin)> {
static readonly "CODEC": $MapCodec<($RecipeMechanicalDryingBasin)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeMechanicalDryingBasin)>

constructor()

public "codec"(): $MapCodec<($RecipeMechanicalDryingBasin)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeMechanicalDryingBasin)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerMechanicalDryingBasin$$Type = ($RecipeSerializerMechanicalDryingBasin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerMechanicalDryingBasin_ = $RecipeSerializerMechanicalDryingBasin$$Type;
}}
declare module "org.cyclops.integratedscripting.api.evaluate.translation.IEvaluationExceptionFactory" {
import {$EvaluationException, $EvaluationException$$Type} from "org.cyclops.integrateddynamics.api.evaluate.EvaluationException"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"

export interface $IEvaluationExceptionFactory {

 "createError"(arg0: StringJS): $EvaluationException
 "createError"(arg0: $MutableComponent$$Type): $EvaluationException

(arg0: $MutableComponent): $EvaluationException$$Type
}

export namespace $IEvaluationExceptionFactory {
const probejs$$marker: never
}
export class $IEvaluationExceptionFactory$$Static implements $IEvaluationExceptionFactory {


 "createError"(arg0: StringJS): $EvaluationException
 "createError"(arg0: $MutableComponent$$Type): $EvaluationException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEvaluationExceptionFactory$$Type = ((arg0: $MutableComponent) => $EvaluationException$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEvaluationExceptionFactory_ = $IEvaluationExceptionFactory$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.options.OptionDescriptors" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$OptionDescriptor, $OptionDescriptor$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.options.OptionDescriptor"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $OptionDescriptors extends $Iterable<($OptionDescriptor)> {

 "get"(optionName: StringJS): $OptionDescriptor
 "iterator"(): $Iterator<($OptionDescriptor)>
 "spliterator"(): $Spliterator<($OptionDescriptor)>
 "forEach"(arg0: $Consumer$$Type<($OptionDescriptor)>): void
[Symbol.iterator](): IterableIterator<$OptionDescriptor>;
}

export namespace $OptionDescriptors {
const EMPTY: $OptionDescriptors
function create(descriptors: $List$$Type<($OptionDescriptor$$Type)>): $OptionDescriptors
function createUnion(...descriptors: ($OptionDescriptors$$Type)[]): $OptionDescriptors
const probejs$$marker: never
}
export class $OptionDescriptors$$Static implements $OptionDescriptors {
static readonly "EMPTY": $OptionDescriptors


static "create"(descriptors: $List$$Type<($OptionDescriptor$$Type)>): $OptionDescriptors
 "get"(optionName: StringJS): $OptionDescriptor
 "iterator"(): $Iterator<($OptionDescriptor)>
static "createUnion"(...descriptors: ($OptionDescriptors$$Type)[]): $OptionDescriptors
 "spliterator"(): $Spliterator<($OptionDescriptor)>
 "forEach"(arg0: $Consumer$$Type<($OptionDescriptor)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionDescriptors$$Type = ($OptionDescriptors);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionDescriptors_ = $OptionDescriptors$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.EnvironmentAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EnvironmentAccess {
static readonly "INHERIT": $EnvironmentAccess
static readonly "NONE": $EnvironmentAccess


public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnvironmentAccess$$Type = ($EnvironmentAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnvironmentAccess_ = $EnvironmentAccess$$Type;
}}
declare module "org.cyclops.integrateddynamics.item.ItemPortableLogicProgrammer" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemLocation, $ItemLocation$$Type} from "org.cyclops.cyclopscore.inventory.ItemLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemGui, $ItemGui$$Type} from "org.cyclops.cyclopscore.item.ItemGui"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $ItemPortableLogicProgrammer extends $ItemGui {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getContainer"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemLocation$$Type): $MenuProvider
public "getContainerClass"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): $Class<($AbstractContainerMenu)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPortableLogicProgrammer$$Type = ($ItemPortableLogicProgrammer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPortableLogicProgrammer_ = $ItemPortableLogicProgrammer$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.part.event.PartEvent" {
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export class $PartEvent<P extends $IPartType<(any), (any)>, S extends $IPartState<(P)>> extends $Event {

constructor(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: P, arg4: S)

public "getTarget"(): $PartTarget
public "getPartNetwork"(): $IPartNetwork
public "getPartState"(): S
public "getPartType"(): P
public "getNetwork"(): $INetwork
get "target"(): $PartTarget
get "partNetwork"(): $IPartNetwork
get "partState"(): S
get "partType"(): P
get "network"(): $INetwork
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartEvent$$Type<P, S> = ($PartEvent<(P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartEvent_<P, S> = $PartEvent$$Type<(P), (S)>;
}}
declare module "org.cyclops.cyclopscore.blockentity.CyclopsBlockEntityCommon" {
import {$IDirtyMarkListener, $IDirtyMarkListener$$Type} from "org.cyclops.cyclopscore.persist.IDirtyMarkListener"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IBlockEntityDelayedTickable, $IBlockEntityDelayedTickable$$Type} from "org.cyclops.cyclopscore.blockentity.IBlockEntityDelayedTickable"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$INBTProvider, $INBTProvider$$Type} from "org.cyclops.cyclopscore.persist.nbt.INBTProvider"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CyclopsBlockEntityCommon extends $BlockEntity implements $INBTProvider, $IDirtyMarkListener, $IBlockEntityDelayedTickable {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "sendUpdate"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getRotation"(): $Direction
public "onDirty"(): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "shouldSendUpdate"(): boolean
public "getUpdateBackoffTicks"(): integer
public "unsetSendUpdate"(): void
public "setUpdateBackoff"(arg0: integer): void
public "getUpdateBackoff"(): integer
public "writeToItemStack"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "canInteractWith"(arg0: $Player$$Type): boolean
public "getUpdatePacket"(): $Packet<(any)>
public "writeGeneratedFieldsToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "readGeneratedFieldsFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "sendImmediateUpdate"(): void
public "reduceUpdateBackoff"(): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "rotation"(): $Direction
get "updateBackoffTicks"(): integer
set "updateBackoff"(value: integer)
get "updateBackoff"(): integer
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CyclopsBlockEntityCommon$$Type = ($CyclopsBlockEntityCommon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CyclopsBlockEntityCommon_ = $CyclopsBlockEntityCommon$$Type;
}}
declare module "org.cyclops.commoncapabilities.api.ingredient.IngredientComponentCategoryType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $IngredientComponentCategoryType<T, M, C> {

constructor(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(C)>, arg2: boolean, arg3: $Function$$Type<(T), (C)>, arg4: M, arg5: boolean)

public "getName"(): $ResourceLocation
public "toString"(): StringJS
public "getClassifier"(): $Function<(T), (C)>
public "getMatchCondition"(): M
public "isPrimaryQuantifier"(): boolean
public "getCategoryType"(): $Class<(C)>
public "isReferenceEqual"(): boolean
get "name"(): $ResourceLocation
get "classifier"(): $Function<(T), (C)>
get "matchCondition"(): M
get "primaryQuantifier"(): boolean
get "categoryType"(): $Class<(C)>
get "referenceEqual"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientComponentCategoryType$$Type<T, M, C> = ($IngredientComponentCategoryType<(T), (M), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientComponentCategoryType_<T, M, C> = $IngredientComponentCategoryType$$Type<(T), (M), (C)>;
}}
declare module "org.cyclops.integrateddynamics.item.ItemWrench" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$ItemWrench$Mode, $ItemWrench$Mode$$Type} from "org.cyclops.integrateddynamics.item.ItemWrench$Mode"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$PartPos, $PartPos$$Type} from "org.cyclops.integrateddynamics.api.part.PartPos"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"

export class $ItemWrench extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "setMode"(arg0: $ItemStack$$Type, arg1: $ItemWrench$Mode$$Type): void
public "getMode"(arg0: $ItemStack$$Type): $ItemWrench$Mode
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "incrementMode"(arg0: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "performPartAction"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $BlockHitResult$$Type, arg1: $IPartType$$Type<(P), (S)>, arg2: $IPartState$$Type<(P)>, arg3: $ItemStack$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $PartPos$$Type): $InteractionResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWrench$$Type = ($ItemWrench);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWrench_ = $ItemWrench$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.PartCapability" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"
import {$BaseCapability, $BaseCapability$$Type} from "net.neoforged.neoforge.capabilities.BaseCapability"

export class $PartCapability<T> extends $BaseCapability<(T), ($PartTarget)> {


public static "create"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $PartCapability<(T)>
public static "getAll"(): $List<($PartCapability<(any)>)>
public "getCapability"(arg0: $IPartType$$Type<(any), (any)>, arg1: $PartTarget$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartCapability$$Type<T> = ($PartCapability<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartCapability_<T> = $PartCapability$$Type<(T)>;
}}
declare module "org.cyclops.cyclopscore.item.ItemGui" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ItemLocation, $ItemLocation$$Type} from "org.cyclops.cyclopscore.inventory.ItemLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ItemGui extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>


public "getContainer"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemLocation$$Type): $MenuProvider
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "openGuiForItemIndex"(arg0: $Level$$Type, arg1: $ServerPlayer$$Type, arg2: $ItemLocation$$Type): void
public "getContainerClass"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): $Class<($AbstractContainerMenu)>
public "writeExtraGuiData"(arg0: $FriendlyByteBuf$$Type, arg1: $Level$$Type, arg2: $ServerPlayer$$Type, arg3: $ItemLocation$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGui$$Type = ($ItemGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGui_ = $ItemGui$$Type;
}}
declare module "org.cyclops.commoncapabilities.api.ingredient.IIngredientSerializer" {
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IIngredientSerializer<T, M> {

 "serializeInstance"(arg0: $HolderLookup$Provider$$Type, arg1: T): $Tag
 "deserializeInstance"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): T
 "serializeCondition"(arg0: M): $Tag
 "deserializeCondition"(arg0: $Tag$$Type): M
}

export namespace $IIngredientSerializer {
const probejs$$marker: never
}
export class $IIngredientSerializer$$Static<T, M> implements $IIngredientSerializer {


 "serializeInstance"(arg0: $HolderLookup$Provider$$Type, arg1: T): $Tag
 "deserializeInstance"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): T
 "serializeCondition"(arg0: M): $Tag
 "deserializeCondition"(arg0: $Tag$$Type): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientSerializer$$Type<T, M> = ($IIngredientSerializer<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientSerializer_<T, M> = $IIngredientSerializer$$Type<(T), (M)>;
}}
declare module "org.cyclops.cyclopscore.helper.IMinecraftClientHelpers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMinecraftClientHelpers {

 "isShifted"(): boolean

(): boolean
get "shifted"(): boolean
}

export namespace $IMinecraftClientHelpers {
const probejs$$marker: never
}
export class $IMinecraftClientHelpers$$Static implements $IMinecraftClientHelpers {


 "isShifted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecraftClientHelpers$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMinecraftClientHelpers_ = $IMinecraftClientHelpers$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.client.model.IVariableModelProvider" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$List, $List$$Type} from "java.util.List"
import {$ModelBaker, $ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$ModelState, $ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$IVariableModelProvider$BakedModelProvider, $IVariableModelProvider$BakedModelProvider$$Type} from "org.cyclops.integrateddynamics.api.client.model.IVariableModelProvider$BakedModelProvider"

export interface $IVariableModelProvider<B extends $IVariableModelProvider$BakedModelProvider> {

 "loadModels"(arg0: $List$$Type<($ResourceLocation$$Type)>): void
 "getDependencies"(): $Collection<($ResourceLocation)>
 "bakeOverlayModels"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelState$$Type, arg3: $ResourceLocation$$Type): B
get "dependencies"(): $Collection<($ResourceLocation)>
}

export namespace $IVariableModelProvider {
const probejs$$marker: never
}
export class $IVariableModelProvider$$Static<B extends $IVariableModelProvider$BakedModelProvider> implements $IVariableModelProvider {


 "loadModels"(arg0: $List$$Type<($ResourceLocation$$Type)>): void
 "getDependencies"(): $Collection<($ResourceLocation)>
 "bakeOverlayModels"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelState$$Type, arg3: $ResourceLocation$$Type): B
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableModelProvider$$Type<B> = ($IVariableModelProvider<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableModelProvider_<B> = $IVariableModelProvider$$Type<(B)>;
}}
declare module "org.cyclops.integrateddynamics.core.helper.PartHelpers$IPartStateHolderCallback" {
import {$PartHelpers$PartStateHolder, $PartHelpers$PartStateHolder$$Type} from "org.cyclops.integrateddynamics.core.helper.PartHelpers$PartStateHolder"

export interface $PartHelpers$IPartStateHolderCallback {

 "onSet"(arg0: $PartHelpers$PartStateHolder$$Type<(any), (any)>): void

(arg0: $PartHelpers$PartStateHolder<(any), (any)>): void
}

export namespace $PartHelpers$IPartStateHolderCallback {
const probejs$$marker: never
}
export class $PartHelpers$IPartStateHolderCallback$$Static implements $PartHelpers$IPartStateHolderCallback {


 "onSet"(arg0: $PartHelpers$PartStateHolder$$Type<(any), (any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartHelpers$IPartStateHolderCallback$$Type = ((arg0: $PartHelpers$PartStateHolder<(any), (any)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartHelpers$IPartStateHolderCallback_ = $PartHelpers$IPartStateHolderCallback$$Type;
}}
declare module "org.cyclops.cyclopscore.recipe.type.RecipeCraftingShapedCustomOutput" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$RecipeCraftingShapedCustomOutput$Serializer, $RecipeCraftingShapedCustomOutput$Serializer$$Type} from "org.cyclops.cyclopscore.recipe.type.RecipeCraftingShapedCustomOutput$Serializer"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RecipeCraftingShapedCustomOutput extends $ShapedRecipe {
 "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $RecipeCraftingShapedCustomOutput$Serializer$$Type, arg1: StringJS, arg2: $CraftingBookCategory$$Type, arg3: $ShapedRecipePattern$$Type, arg4: $ItemStack$$Type, arg5: boolean)

public "getResultItem"(): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "resultItem"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCraftingShapedCustomOutput$$Type = ($RecipeCraftingShapedCustomOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeCraftingShapedCustomOutput_ = $RecipeCraftingShapedCustomOutput$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockCoalGenerator" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$$Type} from "org.cyclops.integrateddynamics.core.block.BlockWithEntityGuiCabled"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockCoalGenerator extends $BlockWithEntityGuiCabled {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockCoalGenerator)>
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
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCoalGenerator$$Type = ($BlockCoalGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCoalGenerator_ = $BlockCoalGenerator$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.blockentity.BlockEntityCableConnectable" {
import {$ICable, $ICable$$Type} from "org.cyclops.integrateddynamics.api.block.cable.ICable"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$INetworkElementProvider, $INetworkElementProvider$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElementProvider"
import {$EnumFacingMap, $EnumFacingMap$$Type} from "org.cyclops.cyclopscore.datastructure.EnumFacingMap"
import {$CyclopsBlockEntity, $CyclopsBlockEntity$$Type} from "org.cyclops.cyclopscore.blockentity.CyclopsBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$INetworkCarrier, $INetworkCarrier$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkCarrier"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntityCableConnectable extends $CyclopsBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getConnected"(): $EnumFacingMap<(boolean)>
public "getCable"(): $ICable
public "getNetworkCarrier"(): $INetworkCarrier
public "onChunkUnloaded"(): void
public "getNetworkElementProvider"(): $INetworkElementProvider
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "connected"(): $EnumFacingMap<(boolean)>
get "cable"(): $ICable
get "networkCarrier"(): $INetworkCarrier
get "networkElementProvider"(): $INetworkElementProvider
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityCableConnectable$$Type = ($BlockEntityCableConnectable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityCableConnectable_ = $BlockEntityCableConnectable$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalCraftingPlanFlat$IEntry" {
import {$IPrototypedIngredient, $IPrototypedIngredient$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IPrototypedIngredient"

export interface $ITerminalCraftingPlanFlat$IEntry {

 "getInstance"(): $IPrototypedIngredient<(any), (any)>
 "getQuantityMissing"(): long
 "getQuantityToCraft"(): long
 "getQuantityCrafting"(): long
 "getQuantityInStorage"(): long
get "instance"(): $IPrototypedIngredient<(any), (any)>
get "quantityMissing"(): long
get "quantityToCraft"(): long
get "quantityCrafting"(): long
get "quantityInStorage"(): long
}

export namespace $ITerminalCraftingPlanFlat$IEntry {
const probejs$$marker: never
}
export class $ITerminalCraftingPlanFlat$IEntry$$Static implements $ITerminalCraftingPlanFlat$IEntry {


 "getInstance"(): $IPrototypedIngredient<(any), (any)>
 "getQuantityMissing"(): long
 "getQuantityToCraft"(): long
 "getQuantityCrafting"(): long
 "getQuantityInStorage"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalCraftingPlanFlat$IEntry$$Type = ($ITerminalCraftingPlanFlat$IEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalCraftingPlanFlat$IEntry_ = $ITerminalCraftingPlanFlat$IEntry$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockProxy" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$$Type} from "org.cyclops.integrateddynamics.core.block.BlockWithEntityGuiCabled"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockProxy extends $BlockWithEntityGuiCabled {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockProxy)>
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockProxy$$Type = ($BlockProxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockProxy_ = $BlockProxy$$Type;
}}
declare module "org.cyclops.cyclopscore.inventory.container.ContainerTypeData" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$$Type} from "net.minecraft.world.inventory.MenuType$MenuSupplier"
import {$LoomMenu, $LoomMenu$$Type} from "net.minecraft.world.inventory.LoomMenu"
import {$GrindstoneMenu, $GrindstoneMenu$$Type} from "net.minecraft.world.inventory.GrindstoneMenu"
import {$CartographyTableMenu, $CartographyTableMenu$$Type} from "net.minecraft.world.inventory.CartographyTableMenu"
import {$CraftingMenu, $CraftingMenu$$Type} from "net.minecraft.world.inventory.CraftingMenu"
import {$BeaconMenu, $BeaconMenu$$Type} from "net.minecraft.world.inventory.BeaconMenu"
import {$DispenserMenu, $DispenserMenu$$Type} from "net.minecraft.world.inventory.DispenserMenu"
import {$AnvilMenu, $AnvilMenu$$Type} from "net.minecraft.world.inventory.AnvilMenu"
import {$LecternMenu, $LecternMenu$$Type} from "net.minecraft.world.inventory.LecternMenu"
import {$EnchantmentMenu, $EnchantmentMenu$$Type} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$SmokerMenu, $SmokerMenu$$Type} from "net.minecraft.world.inventory.SmokerMenu"
import {$CrafterMenu, $CrafterMenu$$Type} from "net.minecraft.world.inventory.CrafterMenu"
import {$ChestMenu, $ChestMenu$$Type} from "net.minecraft.world.inventory.ChestMenu"
import {$IContainerFactory, $IContainerFactory$$Type} from "net.neoforged.neoforge.network.IContainerFactory"
import {$StonecutterMenu, $StonecutterMenu$$Type} from "net.minecraft.world.inventory.StonecutterMenu"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$BlastFurnaceMenu, $BlastFurnaceMenu$$Type} from "net.minecraft.world.inventory.BlastFurnaceMenu"
import {$ShulkerBoxMenu, $ShulkerBoxMenu$$Type} from "net.minecraft.world.inventory.ShulkerBoxMenu"
import {$SmithingMenu, $SmithingMenu$$Type} from "net.minecraft.world.inventory.SmithingMenu"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$BrewingStandMenu, $BrewingStandMenu$$Type} from "net.minecraft.world.inventory.BrewingStandMenu"
import {$HopperMenu, $HopperMenu$$Type} from "net.minecraft.world.inventory.HopperMenu"
import {$FurnaceMenu, $FurnaceMenu$$Type} from "net.minecraft.world.inventory.FurnaceMenu"
import {$MerchantMenu, $MerchantMenu$$Type} from "net.minecraft.world.inventory.MerchantMenu"

/**
 * 
 * @deprecated
 */
export class $ContainerTypeData<T extends $AbstractContainerMenu> extends $MenuType<(T)> {
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "CRAFTER_3x3": $MenuType<($CrafterMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
readonly "constructor": $MenuType$MenuSupplier<(T)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>

constructor(arg0: $IContainerFactory$$Type<(T)>, arg1: $FeatureFlagSet$$Type)

public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$$Type<(T)>): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerTypeData$$Type<T> = ($ContainerTypeData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerTypeData_<T> = $ContainerTypeData$$Type<(T)>;
}}
declare module "org.cyclops.commoncapabilities.api.ingredient.IPrototypedIngredient" {
import {$IngredientComponent, $IngredientComponent$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientComponent"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$PrototypedIngredient, $PrototypedIngredient$$Type} from "org.cyclops.commoncapabilities.api.ingredient.PrototypedIngredient"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IPrototypedIngredient<T, M> extends $Comparable<($IPrototypedIngredient<(any), (any)>)> {

 "getPrototype"(): T
 "getComponent"(): $IngredientComponent<(T), (M)>
 "getCondition"(): M
 "compareTo"(arg0: $IPrototypedIngredient$$Type<(any), (any)>): integer
get "prototype"(): T
get "component"(): $IngredientComponent<(T), (M)>
get "condition"(): M
}

export namespace $IPrototypedIngredient {
function deserialize(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $PrototypedIngredient<(any), (any)>
function serialize<T, M>(arg0: $HolderLookup$Provider$$Type, arg1: $IPrototypedIngredient$$Type<(T), (M)>): $CompoundTag
const probejs$$marker: never
}
export class $IPrototypedIngredient$$Static<T, M> implements $IPrototypedIngredient {


 "getPrototype"(): T
static "deserialize"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $PrototypedIngredient<(any), (any)>
static "serialize"<T, M>(arg0: $HolderLookup$Provider$$Type, arg1: $IPrototypedIngredient$$Type<(T), (M)>): $CompoundTag
 "getComponent"(): $IngredientComponent<(T), (M)>
 "getCondition"(): M
 "compareTo"(arg0: $IPrototypedIngredient$$Type<(any), (any)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPrototypedIngredient$$Type<T, M> = ($IPrototypedIngredient<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPrototypedIngredient_<T, M> = $IPrototypedIngredient$$Type<(T), (M)>;
}}
declare module "org.cyclops.integrateddynamics.api.evaluate.variable.IVariableInvalidateListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IVariableInvalidateListener {

 "invalidate"(): void

(): void
}

export namespace $IVariableInvalidateListener {
const probejs$$marker: never
}
export class $IVariableInvalidateListener$$Static implements $IVariableInvalidateListener {


 "invalidate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableInvalidateListener$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableInvalidateListener_ = $IVariableInvalidateListener$$Type;
}}
declare module "org.cyclops.cyclopscore.recipe.type.RecipeCraftingShapedCustomOutput$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RecipeCraftingShapedCustomOutput, $RecipeCraftingShapedCustomOutput$$Type} from "org.cyclops.cyclopscore.recipe.type.RecipeCraftingShapedCustomOutput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer, $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer$$Type} from "org.cyclops.cyclopscore.recipe.type.RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RecipeCraftingShapedCustomOutput$Serializer implements $RecipeSerializer<($RecipeCraftingShapedCustomOutput)> {

constructor(arg0: $Supplier$$Type<($ItemStack$$Type)>, arg1: $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer$$Type)
constructor(arg0: $Supplier$$Type<($ItemStack$$Type)>)

public "codec"(): $MapCodec<($RecipeCraftingShapedCustomOutput)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeCraftingShapedCustomOutput)>
public "getOutputTransformer"(): $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
get "outputTransformer"(): $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCraftingShapedCustomOutput$Serializer$$Type = ($RecipeCraftingShapedCustomOutput$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeCraftingShapedCustomOutput$Serializer_ = $RecipeCraftingShapedCustomOutput$Serializer$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.event.TerminalStorageTabCommonLoadSlotsEvent" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ContainerTerminalStorageBase, $ContainerTerminalStorageBase$$Type} from "org.cyclops.integratedterminals.inventory.container.ContainerTerminalStorageBase"
import {$ITerminalStorageTabCommon, $ITerminalStorageTabCommon$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon"
import {$List, $List$$Type} from "java.util.List"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$ITerminalStorageTabCommon$ISlotPositionCallback, $ITerminalStorageTabCommon$ISlotPositionCallback$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon$ISlotPositionCallback"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"

export class $TerminalStorageTabCommonLoadSlotsEvent extends $Event {

constructor(arg0: $ITerminalStorageTabCommon$$Type, arg1: $ContainerTerminalStorageBase$$Type<(any)>, arg2: $List$$Type<($Pair$$Type<($Slot$$Type), ($ITerminalStorageTabCommon$ISlotPositionCallback$$Type)>)>)

public "getContainer"(): $ContainerTerminalStorageBase<(any)>
public "getSlots"(): $List<($Pair<($Slot), ($ITerminalStorageTabCommon$ISlotPositionCallback)>)>
public "setSlots"(arg0: $List$$Type<($Pair$$Type<($Slot$$Type), ($ITerminalStorageTabCommon$ISlotPositionCallback$$Type)>)>): void
public "getCommonTab"(): $ITerminalStorageTabCommon
get "container"(): $ContainerTerminalStorageBase<(any)>
get "slots"(): $List<($Pair<($Slot), ($ITerminalStorageTabCommon$ISlotPositionCallback)>)>
set "slots"(value: $List$$Type<($Pair$$Type<($Slot$$Type), ($ITerminalStorageTabCommon$ISlotPositionCallback$$Type)>)>)
get "commonTab"(): $ITerminalStorageTabCommon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalStorageTabCommonLoadSlotsEvent$$Type = ($TerminalStorageTabCommonLoadSlotsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalStorageTabCommonLoadSlotsEvent_ = $TerminalStorageTabCommonLoadSlotsEvent$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.event.TerminalStorageTabClientSearchFieldUpdateEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$ITerminalStorageTabClient, $ITerminalStorageTabClient$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabClient"

export class $TerminalStorageTabClientSearchFieldUpdateEvent extends $Event {

constructor(arg0: $ITerminalStorageTabClient$$Type<(any)>, arg1: StringJS)

public "getClientTab"(): $ITerminalStorageTabClient<(any)>
public "setSearchString"(arg0: StringJS): void
public "getSearchString"(): StringJS
get "clientTab"(): $ITerminalStorageTabClient<(any)>
set "searchString"(value: StringJS)
get "searchString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalStorageTabClientSearchFieldUpdateEvent$$Type = ($TerminalStorageTabClientSearchFieldUpdateEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalStorageTabClientSearchFieldUpdateEvent_ = $TerminalStorageTabClientSearchFieldUpdateEvent$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.TypeLiteral" {
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $TypeLiteral<T> {


public "getRawType"(): $Class<(T)>
public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getType"(): $Type
get "rawType"(): $Class<(T)>
get "type"(): $Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeLiteral$$Type<T> = ($TypeLiteral<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeLiteral_<T> = $TypeLiteral$$Type<(T)>;
}}
declare module "org.cyclops.integrateddynamics.core.block.VoxelShapeComponents$IComponent" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockRayTraceResultComponent, $BlockRayTraceResultComponent$$Type} from "org.cyclops.integrateddynamics.core.block.BlockRayTraceResultComponent"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $VoxelShapeComponents$IComponent {

 "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
 "destroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: boolean): boolean
 "getStateId"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): StringJS
 "onBlockActivated"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockRayTraceResultComponent$$Type): $InteractionResult
 "getRaytraceDirection"(): $Direction
 "getCloneItemStack"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $ItemStack
 "getBreakingBaseModel"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $BakedModel
 "isRaytraceLastForFace"(): boolean
get "raytraceDirection"(): $Direction
get "raytraceLastForFace"(): boolean
}

export namespace $VoxelShapeComponents$IComponent {
const probejs$$marker: never
}
export class $VoxelShapeComponents$IComponent$$Static implements $VoxelShapeComponents$IComponent {


 "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
 "destroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: boolean): boolean
 "getStateId"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): StringJS
 "onBlockActivated"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockRayTraceResultComponent$$Type): $InteractionResult
 "getRaytraceDirection"(): $Direction
 "getCloneItemStack"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $ItemStack
 "getBreakingBaseModel"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $BakedModel
 "isRaytraceLastForFace"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeComponents$IComponent$$Type = ($VoxelShapeComponents$IComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeComponents$IComponent_ = $VoxelShapeComponents$IComponent$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeSqueezer$IngredientChance" {
import {$ItemStackFromIngredient, $ItemStackFromIngredient$$Type} from "org.cyclops.cyclopscore.recipe.ItemStackFromIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"

export class $RecipeSqueezer$IngredientChance {

constructor(arg0: $Either$$Type<($Pair$$Type<($ItemStack$$Type), (float)>), ($Pair$$Type<($ItemStackFromIngredient$$Type), (float)>)>)

public "getIngredient"(): $Either<($ItemStack), ($ItemStackFromIngredient)>
public "getChance"(): float
public "getIngredientChance"(): $Either<($Pair<($ItemStack), (float)>), ($Pair<($ItemStackFromIngredient), (float)>)>
public "getIngredientFirst"(): $ItemStack
get "ingredient"(): $Either<($ItemStack), ($ItemStackFromIngredient)>
get "chance"(): float
get "ingredientChance"(): $Either<($Pair<($ItemStack), (float)>), ($Pair<($ItemStackFromIngredient), (float)>)>
get "ingredientFirst"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSqueezer$IngredientChance$$Type = ($RecipeSqueezer$IngredientChance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSqueezer$IngredientChance_ = $RecipeSqueezer$IngredientChance$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabClient" {
import {$ITerminalStorageSlot, $ITerminalStorageSlot$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageSlot"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ContainerScreenTerminalStorage$DrawLayer, $ContainerScreenTerminalStorage$DrawLayer$$Type} from "org.cyclops.integratedterminals.client.gui.container.ContainerScreenTerminalStorage$DrawLayer"
import {$List, $List$$Type} from "java.util.List"
import {$ContainerScreenTerminalStorage, $ContainerScreenTerminalStorage$$Type} from "org.cyclops.integratedterminals.client.gui.container.ContainerScreenTerminalStorage"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$AbstractContainerScreen, $AbstractContainerScreen$$Type} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ITerminalStorageTabCommon, $ITerminalStorageTabCommon$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon"
import {$ITerminalButton, $ITerminalButton$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalButton"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ITerminalRowColumnProvider, $ITerminalRowColumnProvider$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalRowColumnProvider"

export interface $ITerminalStorageTabClient<S extends $ITerminalStorageSlot> {

 "getName"(): $ResourceLocation
 "isEnabled"(): boolean
 "getButtons"(): $List<($ITerminalButton<(any), (any), (any)>)>
 "getTooltip"(): $List<($Component)>
 "onSelect"(arg0: integer): void
 "getSlots"(arg0: integer, arg1: integer, arg2: integer): $List<(S)>
 "getIcon"(): $ItemStack
 "getStatus"(arg0: integer): StringJS
 "onDeselect"(arg0: integer): void
 "dragIntoSlot"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $Slot$$Type, arg3: integer, arg4: boolean): integer
 "handleScroll"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer, arg3: double, arg4: boolean, arg5: boolean, arg6: integer): boolean
 "getSlotOffsetX"(): integer
 "getSlotOffsetY"(): integer
 "handleClick"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean, arg6: integer, arg7: boolean): boolean
 "getChannels"(): (integer)[]
 "getSlotCount"(arg0: integer): integer
 "getBackgroundTexture"(): $ResourceLocation
 "getTabSettingsName"(): $ResourceLocation
 "getInstanceFilter"(arg0: integer): StringJS
 "getSlotRowLength"(): integer
 "getSlotVisibleRows"(): integer
 "getActiveSlotId"(): integer
 "isQuickMovePrevented"(arg0: integer): boolean
 "isQuickMovePrevented"(arg0: $Slot$$Type): boolean
 "getActiveSlotQuantity"(): integer
 "getRowColumnProvider"(): $ITerminalRowColumnProvider
 "setActiveSlotQuantity"(arg0: integer): void
 "resetActiveSlot"(): void
 "onCommonSlotRender"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $GuiGraphics$$Type, arg2: $ContainerScreenTerminalStorage$DrawLayer$$Type, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: $ITerminalStorageTabCommon$$Type): void
 "onTabBackgroundRender"(arg0: $ContainerScreenTerminalStorage$$Type<(any), (any)>, arg1: $GuiGraphics$$Type, arg2: float, arg3: integer, arg4: integer): void
 "setInstanceFilter"(arg0: integer, arg1: StringJS): void
 "getPlayerInventoryOffsetX"(): integer
 "getPlayerInventoryOffsetY"(): integer
 "isSlotValidForDraggingInto"(arg0: integer, arg1: $Slot$$Type): boolean
 "computeDraggingQuantity"(arg0: $Set$$Type<($Slot$$Type)>, arg1: integer, arg2: $ItemStack$$Type, arg3: integer): integer
get "name"(): $ResourceLocation
get "enabled"(): boolean
get "buttons"(): $List<($ITerminalButton<(any), (any), (any)>)>
get "tooltip"(): $List<($Component)>
get "icon"(): $ItemStack
get "slotOffsetX"(): integer
get "slotOffsetY"(): integer
get "channels"(): (integer)[]
get "backgroundTexture"(): $ResourceLocation
get "tabSettingsName"(): $ResourceLocation
get "slotRowLength"(): integer
get "slotVisibleRows"(): integer
get "activeSlotId"(): integer
get "activeSlotQuantity"(): integer
get "rowColumnProvider"(): $ITerminalRowColumnProvider
set "activeSlotQuantity"(value: integer)
get "playerInventoryOffsetX"(): integer
get "playerInventoryOffsetY"(): integer
}

export namespace $ITerminalStorageTabClient {
const DEFAULT_SLOT_OFFSET_Y: integer
const DEFAULT_SLOT_VISIBLE_ROWS: integer
const DEFAULT_SLOT_OFFSET_X: integer
const DEFAULT_SLOT_ROW_LENGTH: integer
const probejs$$marker: never
}
export class $ITerminalStorageTabClient$$Static<S extends $ITerminalStorageSlot> implements $ITerminalStorageTabClient {
static readonly "DEFAULT_SLOT_OFFSET_Y": integer
static readonly "DEFAULT_SLOT_VISIBLE_ROWS": integer
static readonly "DEFAULT_SLOT_OFFSET_X": integer
static readonly "DEFAULT_SLOT_ROW_LENGTH": integer


 "getName"(): $ResourceLocation
 "isEnabled"(): boolean
 "getButtons"(): $List<($ITerminalButton<(any), (any), (any)>)>
 "getTooltip"(): $List<($Component)>
 "onSelect"(arg0: integer): void
 "getSlots"(arg0: integer, arg1: integer, arg2: integer): $List<(S)>
 "getIcon"(): $ItemStack
 "getStatus"(arg0: integer): StringJS
 "onDeselect"(arg0: integer): void
 "dragIntoSlot"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $Slot$$Type, arg3: integer, arg4: boolean): integer
 "handleScroll"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer, arg3: double, arg4: boolean, arg5: boolean, arg6: integer): boolean
 "getSlotOffsetX"(): integer
 "getSlotOffsetY"(): integer
 "handleClick"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean, arg6: integer, arg7: boolean): boolean
 "getChannels"(): (integer)[]
 "getSlotCount"(arg0: integer): integer
 "getBackgroundTexture"(): $ResourceLocation
 "getTabSettingsName"(): $ResourceLocation
 "getInstanceFilter"(arg0: integer): StringJS
 "getSlotRowLength"(): integer
 "getSlotVisibleRows"(): integer
 "getActiveSlotId"(): integer
 "isQuickMovePrevented"(arg0: integer): boolean
 "isQuickMovePrevented"(arg0: $Slot$$Type): boolean
 "getActiveSlotQuantity"(): integer
 "getRowColumnProvider"(): $ITerminalRowColumnProvider
 "setActiveSlotQuantity"(arg0: integer): void
 "resetActiveSlot"(): void
 "onCommonSlotRender"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $GuiGraphics$$Type, arg2: $ContainerScreenTerminalStorage$DrawLayer$$Type, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: $ITerminalStorageTabCommon$$Type): void
 "onTabBackgroundRender"(arg0: $ContainerScreenTerminalStorage$$Type<(any), (any)>, arg1: $GuiGraphics$$Type, arg2: float, arg3: integer, arg4: integer): void
 "setInstanceFilter"(arg0: integer, arg1: StringJS): void
 "getPlayerInventoryOffsetX"(): integer
 "getPlayerInventoryOffsetY"(): integer
 "isSlotValidForDraggingInto"(arg0: integer, arg1: $Slot$$Type): boolean
 "computeDraggingQuantity"(arg0: $Set$$Type<($Slot$$Type)>, arg1: integer, arg2: $ItemStack$$Type, arg3: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalStorageTabClient$$Type<S> = ($ITerminalStorageTabClient<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalStorageTabClient_<S> = $ITerminalStorageTabClient$$Type<(S)>;
}}
declare module "org.cyclops.integrateddynamics.item.ItemBlockCable$IUseAction" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockCable, $BlockCable$$Type} from "org.cyclops.integrateddynamics.block.BlockCable"

export interface $ItemBlockCable$IUseAction {

 "canPlaceAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "attempItemUseTarget"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockCable$$Type): boolean
}

export namespace $ItemBlockCable$IUseAction {
const probejs$$marker: never
}
export class $ItemBlockCable$IUseAction$$Static implements $ItemBlockCable$IUseAction {


 "canPlaceAt"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "attempItemUseTarget"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockCable$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockCable$IUseAction$$Type = ($ItemBlockCable$IUseAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockCable$IUseAction_ = $ItemBlockCable$IUseAction$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.advancement.criterion.VariableFacadePredicate" {
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IVariableFacade, $IVariableFacade$$Type} from "org.cyclops.integrateddynamics.api.item.IVariableFacade"

export class $VariableFacadePredicate<V extends $IVariableFacade> {
static readonly "ANY": $VariableFacadePredicate<(any)>

constructor(arg0: $Class$$Type<(V)>)

public "test"(arg0: $IVariableFacade$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariableFacadePredicate$$Type<V> = ($VariableFacadePredicate<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariableFacadePredicate_<V> = $VariableFacadePredicate$$Type<(V)>;
}}
declare module "org.cyclops.integrateddynamics.core.logicprogrammer.event.LogicProgrammerEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $LogicProgrammerEvent extends $Event {

constructor(arg0: $Player$$Type)

public "getPlayer"(): $Player
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicProgrammerEvent$$Type = ($LogicProgrammerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicProgrammerEvent_ = $LogicProgrammerEvent$$Type;
}}
declare module "org.cyclops.cyclopscore.datastructure.DimPos" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WeakReference, $WeakReference$$Type} from "java.lang.ref.WeakReference"

export class $DimPos implements $Comparable<($DimPos)> {


public "getLevel"(): StringJS
public "getLevel"(arg0: boolean): $Level
public "isLoaded"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $DimPos$$Type): integer
public "compareTo"(arg0: any): integer
public static "of"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $DimPos
public static "of"(arg0: $ResourceKey$$Type<($Level)>, arg1: $BlockPos$$Type): $DimPos
public static "of"(arg0: StringJS, arg1: $BlockPos$$Type): $DimPos
public "getBlockPos"(): $BlockPos
public "getLevelKey"(): $ResourceKey<($Level)>
public "withPosition"(arg0: $BlockPos$$Type): $DimPos
public "getWorldReference"(): $WeakReference<($Level)>
public "setWorldReference"(arg0: $WeakReference$$Type<($Level$$Type)>): void
get "level"(): StringJS
get "loaded"(): boolean
get "blockPos"(): $BlockPos
get "levelKey"(): $ResourceKey<($Level)>
get "worldReference"(): $WeakReference<($Level)>
set "worldReference"(value: $WeakReference$$Type<($Level$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimPos$$Type = ($DimPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimPos_ = $DimPos$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockMaterializer" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$$Type} from "org.cyclops.integrateddynamics.core.block.BlockWithEntityGuiCabled"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMaterializer extends $BlockWithEntityGuiCabled {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockMaterializer)>
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMaterializer$$Type = ($BlockMaterializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMaterializer_ = $BlockMaterializer$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.ResourceLimits$Builder" {
import {$Source, $Source$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Source"
import {$ResourceLimits, $ResourceLimits$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.ResourceLimits"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ResourceLimitEvent, $ResourceLimitEvent$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.ResourceLimitEvent"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ResourceLimits$Builder {


public "build"(): $ResourceLimits
public "statementLimit"(limit: long, sourceFilter: $Predicate$$Type<($Source)>): $ResourceLimits$Builder
public "onLimit"(onLimit: $Consumer$$Type<($ResourceLimitEvent)>): $ResourceLimits$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLimits$Builder$$Type = ($ResourceLimits$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceLimits$Builder_ = $ResourceLimits$Builder$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.logicprogrammer.IConfigRenderPattern" {
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"

export interface $IConfigRenderPattern {

 "getWidth"(): integer
 "getHeight"(): integer
 "getSlotPositions"(): ($Pair<(integer), (integer)>)[]
 "getSymbolPosition"(): $Pair<(integer), (integer)>
get "width"(): integer
get "height"(): integer
get "slotPositions"(): ($Pair<(integer), (integer)>)[]
get "symbolPosition"(): $Pair<(integer), (integer)>
}

export namespace $IConfigRenderPattern {
const SUFFIX_1: $IConfigRenderPattern
const NONE_CANVAS_WIDE: $IConfigRenderPattern
const INFIX_VERYLONG: $IConfigRenderPattern
const INFIX_2_VERYLONG: $IConfigRenderPattern
const INFIX_LONG: $IConfigRenderPattern
const PREFIX_3_LONG: $IConfigRenderPattern
const SINGLE_SLOT: $IConfigRenderPattern
const PREFIX_2_LONG: $IConfigRenderPattern
const INFIX_2_LONG: $IConfigRenderPattern
const SUFFIX_1_LONG: $IConfigRenderPattern
const INFIX_2_LATE: $IConfigRenderPattern
const RECIPE: $IConfigRenderPattern
const INFIX: $IConfigRenderPattern
const INFIX_3: $IConfigRenderPattern
const NONE: $IConfigRenderPattern
const PREFIX_1: $IConfigRenderPattern
const PREFIX_2: $IConfigRenderPattern
const PREFIX_1_LONG: $IConfigRenderPattern
const INFIX_2: $IConfigRenderPattern
const PREFIX_3: $IConfigRenderPattern
const NONE_CANVAS: $IConfigRenderPattern
const probejs$$marker: never
}
export class $IConfigRenderPattern$$Static implements $IConfigRenderPattern {
static readonly "SUFFIX_1": $IConfigRenderPattern
static readonly "NONE_CANVAS_WIDE": $IConfigRenderPattern
static readonly "INFIX_VERYLONG": $IConfigRenderPattern
static readonly "INFIX_2_VERYLONG": $IConfigRenderPattern
static readonly "INFIX_LONG": $IConfigRenderPattern
static readonly "PREFIX_3_LONG": $IConfigRenderPattern
static readonly "SINGLE_SLOT": $IConfigRenderPattern
static readonly "PREFIX_2_LONG": $IConfigRenderPattern
static readonly "INFIX_2_LONG": $IConfigRenderPattern
static readonly "SUFFIX_1_LONG": $IConfigRenderPattern
static readonly "INFIX_2_LATE": $IConfigRenderPattern
static readonly "RECIPE": $IConfigRenderPattern
static readonly "INFIX": $IConfigRenderPattern
static readonly "INFIX_3": $IConfigRenderPattern
static readonly "NONE": $IConfigRenderPattern
static readonly "PREFIX_1": $IConfigRenderPattern
static readonly "PREFIX_2": $IConfigRenderPattern
static readonly "PREFIX_1_LONG": $IConfigRenderPattern
static readonly "INFIX_2": $IConfigRenderPattern
static readonly "PREFIX_3": $IConfigRenderPattern
static readonly "NONE_CANVAS": $IConfigRenderPattern


 "getWidth"(): integer
 "getHeight"(): integer
 "getSlotPositions"(): ($Pair<(integer), (integer)>)[]
 "getSymbolPosition"(): $Pair<(integer), (integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigRenderPattern$$Type = ($IConfigRenderPattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigRenderPattern_ = $IConfigRenderPattern$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Source$Builder" {
import {$Source, $Source$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Source"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$URI, $URI$$Type} from "java.net.URI"
import {$ByteSequence, $ByteSequence$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.ByteSequence"

export class $Source$Builder {


public "cached"(cached: boolean): $Source$Builder
public "content"(bytes: $ByteSequence$$Type): $Source$Builder
public "content"(code: StringJS): $Source$Builder
public "content"(characters: charseq): $Source$Builder
public "build"(): $Source
public "name"(newName: StringJS): $Source$Builder
public "encoding"(encoding: $Charset$$Type): $Source$Builder
public "uri"(newUri: $URI$$Type): $Source$Builder
public "internal"(internal: boolean): $Source$Builder
public "interactive"(interactive: boolean): $Source$Builder
public "mimeType"(mimeType: StringJS): $Source$Builder
public "buildLiteral"(): $Source
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Source$Builder$$Type = ($Source$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Source$Builder_ = $Source$Builder$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.MessageTransport" {
import {$URI, $URI$$Type} from "java.net.URI"
import {$MessageEndpoint, $MessageEndpoint$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.MessageEndpoint"

export interface $MessageTransport {

 "open"(uri: $URI$$Type, peerEndpoint: $MessageEndpoint$$Type): $MessageEndpoint

(uri: $URI, peerEndpoint: $MessageEndpoint): $MessageEndpoint$$Type
}

export namespace $MessageTransport {
const probejs$$marker: never
}
export class $MessageTransport$$Static implements $MessageTransport {


 "open"(uri: $URI$$Type, peerEndpoint: $MessageEndpoint$$Type): $MessageEndpoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageTransport$$Type = ((uri: $URI, peerEndpoint: $MessageEndpoint) => $MessageEndpoint$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageTransport_ = $MessageTransport$$Type;
}}
declare module "org.cyclops.integratedterminals.core.terminalstorage.crafting.HandlerWrappedTerminalCraftingOption" {
import {$IngredientComponent, $IngredientComponent$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientComponent"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ITerminalStorageTabIngredientCraftingHandler, $ITerminalStorageTabIngredientCraftingHandler$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalStorageTabIngredientCraftingHandler"
import {$ITerminalCraftingOption, $ITerminalCraftingOption$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalCraftingOption"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $HandlerWrappedTerminalCraftingOption<T> {

constructor(arg0: $ITerminalStorageTabIngredientCraftingHandler$$Type<(any), (any)>, arg1: $ITerminalCraftingOption$$Type<(T)>)

public "getHandler"(): $ITerminalStorageTabIngredientCraftingHandler<(any), (any)>
public static "deserialize"<T, M>(arg0: $HolderLookup$Provider$$Type, arg1: $IngredientComponent$$Type<(T), (M)>, arg2: $CompoundTag$$Type): $HandlerWrappedTerminalCraftingOption<(T)>
public static "serialize"<T>(arg0: $HolderLookup$Provider$$Type, arg1: $HandlerWrappedTerminalCraftingOption$$Type<(T)>): $CompoundTag
public "getCraftingOption"(): $ITerminalCraftingOption<(T)>
get "handler"(): $ITerminalStorageTabIngredientCraftingHandler<(any), (any)>
get "craftingOption"(): $ITerminalCraftingOption<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandlerWrappedTerminalCraftingOption$$Type<T> = ($HandlerWrappedTerminalCraftingOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandlerWrappedTerminalCraftingOption_<T> = $HandlerWrappedTerminalCraftingOption$$Type<(T)>;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.crafting.TerminalCraftingJobStatus" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TerminalCraftingJobStatus extends $Enum<($TerminalCraftingJobStatus)> {
static readonly "PENDING_INPUTS": $TerminalCraftingJobStatus
static readonly "UNSTARTED": $TerminalCraftingJobStatus
static readonly "CRAFTING": $TerminalCraftingJobStatus
static readonly "ERROR": $TerminalCraftingJobStatus
static readonly "INVALID": $TerminalCraftingJobStatus
static readonly "QUEUEING": $TerminalCraftingJobStatus
static readonly "INVALID_INPUTS": $TerminalCraftingJobStatus
static readonly "FINISHED": $TerminalCraftingJobStatus
static readonly "PENDING_DEPENDENCIES": $TerminalCraftingJobStatus


public "isValid"(): boolean
public static "values"(): ($TerminalCraftingJobStatus)[]
public static "valueOf"(arg0: StringJS): $TerminalCraftingJobStatus
public "getColor"(): integer
get "valid"(): boolean
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalCraftingJobStatus$$Type = (("error") | ("invalid") | ("unstarted") | ("queueing") | ("pending_dependencies") | ("pending_inputs") | ("invalid_inputs") | ("crafting") | ("finished"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalCraftingJobStatus_ = $TerminalCraftingJobStatus$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.block.IgnoredBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IgnoredBlock extends $Block {
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IgnoredBlock$$Type = ($IgnoredBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IgnoredBlock_ = $IgnoredBlock$$Type;
}}
declare module "org.cyclops.cyclopscore.config.ConfigurableTypeCommon" {
import {$ConfigurableTypeActionCommon, $ConfigurableTypeActionCommon$$Type} from "org.cyclops.cyclopscore.config.configurabletypeaction.ConfigurableTypeActionCommon"
import {$ExtendedConfigCommon, $ExtendedConfigCommon$$Type} from "org.cyclops.cyclopscore.config.extendedconfig.ExtendedConfigCommon"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $ConfigurableTypeCommon {
static readonly "LOOT_NUMBER_PROVIDER": $ConfigurableTypeCommon
static readonly "LOOT_CONDITION": $ConfigurableTypeCommon
static readonly "PARTICLE": $ConfigurableTypeCommon
static readonly "LOOT_NBT_PROVIDER": $ConfigurableTypeCommon
static readonly "VILLAGER": $ConfigurableTypeCommon
static readonly "ENTITY": $ConfigurableTypeCommon
static readonly "RECIPE": $ConfigurableTypeCommon
static readonly "TRUNK_PLACER": $ConfigurableTypeCommon
static readonly "WORLD_FEATURE": $ConfigurableTypeCommon
static readonly "LOOT_SCORE_PROVIDER": $ConfigurableTypeCommon
static readonly "ENCHANTMENT_ENTITY_EFFECT": $ConfigurableTypeCommon
static readonly "GUI": $ConfigurableTypeCommon
static readonly "ARGUMENT_TYPE": $ConfigurableTypeCommon
static readonly "BLOCK": $ConfigurableTypeCommon
static readonly "EFFECT": $ConfigurableTypeCommon
static readonly "BLOCK_ENTITY": $ConfigurableTypeCommon
static readonly "ARMOR_MATERIAL": $ConfigurableTypeCommon
static readonly "FOLIAGE_PLACER": $ConfigurableTypeCommon
static readonly "WORLD_STRUCTURE": $ConfigurableTypeCommon
static readonly "CAPABILITY": $ConfigurableTypeCommon
static readonly "DUMMY": $ConfigurableTypeCommon
static readonly "ITEM": $ConfigurableTypeCommon
static readonly "LOOT_FUNCTION": $ConfigurableTypeCommon
static readonly "RECIPE_TYPE": $ConfigurableTypeCommon
static readonly "SOUND_EVENT": $ConfigurableTypeCommon
static readonly "WORLD_STRUCTURE_PIECE": $ConfigurableTypeCommon
static readonly "DATA_COMPONENT": $ConfigurableTypeCommon
static readonly "CRITERION_TRIGGER": $ConfigurableTypeCommon
static readonly "CREATIVE_MODE_TAB": $ConfigurableTypeCommon

constructor(arg0: boolean, arg1: $Class$$Type<($ExtendedConfigCommon$$Type<(any), (any), (any)>)>, arg2: $ConfigurableTypeActionCommon$$Type<(any), (any), (any)>, arg3: StringJS)

public "getCategory"(): StringJS
public "getConfigClass"(): $Class<($ExtendedConfigCommon<(any), (any), (any)>)>
public "setAction"(arg0: $ConfigurableTypeActionCommon$$Type<(any), (any), (any)>): void
public "hasUniqueInstance"(): boolean
public "getConfigurableTypeAction"(): $ConfigurableTypeActionCommon<(any), (any), (any)>
get "category"(): StringJS
get "configClass"(): $Class<($ExtendedConfigCommon<(any), (any), (any)>)>
set "action"(value: $ConfigurableTypeActionCommon$$Type<(any), (any), (any)>)
get "configurableTypeAction"(): $ConfigurableTypeActionCommon<(any), (any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableTypeCommon$$Type = ($ConfigurableTypeCommon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurableTypeCommon_ = $ConfigurableTypeCommon$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.aspect.IAspectVariable" {
import {$IAspectRead, $IAspectRead$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspectRead"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$IVariable, $IVariable$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariable"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$IVariableInvalidateListener, $IVariableInvalidateListener$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariableInvalidateListener"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export interface $IAspectVariable<V extends $IValue> extends $IVariable<(V)> {

 "getTarget"(): $PartTarget
 "getAspect"(): $IAspectRead<(V), (any)>
 "getValue"(): V
 "getType"(): $IValueType<(V)>
 "addInvalidationListener"(arg0: $IVariableInvalidateListener$$Type): void
 "invalidate"(): void
get "target"(): $PartTarget
get "aspect"(): $IAspectRead<(V), (any)>
get "value"(): V
get "type"(): $IValueType<(V)>
}

export namespace $IAspectVariable {
const probejs$$marker: never
}
export class $IAspectVariable$$Static<V extends $IValue> implements $IAspectVariable {


 "getTarget"(): $PartTarget
 "getAspect"(): $IAspectRead<(V), (any)>
 "getValue"(): V
 "getType"(): $IValueType<(V)>
 "addInvalidationListener"(arg0: $IVariableInvalidateListener$$Type): void
 "invalidate"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAspectVariable$$Type<V> = ($IAspectVariable<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAspectVariable_<V> = $IAspectVariable$$Type<(V)>;
}}
declare module "org.cyclops.cyclopscore.helper.IItemStackHelpers" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IItemStackHelpers {

 "spawnItemStack"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
 "spawnItemStack"(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double, arg4: $ItemStack$$Type): void
 "parseItemStack"(arg0: StringJS): $ItemStack
 "spawnItemStackToPlayer"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type): void
 "getItemStackHashCode"(arg0: $ItemStack$$Type): integer
 "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
 "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
}

export namespace $IItemStackHelpers {
const probejs$$marker: never
}
export class $IItemStackHelpers$$Static implements $IItemStackHelpers {


 "spawnItemStack"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
 "spawnItemStack"(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double, arg4: $ItemStack$$Type): void
 "parseItemStack"(arg0: StringJS): $ItemStack
 "spawnItemStackToPlayer"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type): void
 "getItemStackHashCode"(arg0: $ItemStack$$Type): integer
 "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
 "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemStackHelpers$$Type = ($IItemStackHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemStackHelpers_ = $IItemStackHelpers$$Type;
}}
declare module "org.cyclops.integrateddynamics.advancement.criterion.PartReaderAspectTrigger$Instance" {
import {$ICriterionInstanceTestable, $ICriterionInstanceTestable$$Type} from "org.cyclops.cyclopscore.advancement.criterion.ICriterionInstanceTestable"
import {$IAspect, $IAspect$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspect"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$PartReaderAspectEvent, $PartReaderAspectEvent$$Type} from "org.cyclops.integrateddynamics.core.part.event.PartReaderAspectEvent"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PartReaderAspectTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance, $ICriterionInstanceTestable<($PartReaderAspectEvent)> {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, partType: $Optional$$Type<($IPartType$$Type)>, aspect: $Optional$$Type<($IAspect$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ServerPlayer$$Type, arg1: any): boolean
public "test"(arg0: $ServerPlayer$$Type, arg1: $PartReaderAspectEvent$$Type<(any), (any), (any)>): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "aspect"(): $Optional<($IAspect)>
public "partType"(): $Optional<($IPartType)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartReaderAspectTrigger$Instance$$Type = ({"partType"?: ($IPartType$$Type)?, "aspect"?: ($IAspect$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([partType?: ($IPartType$$Type)?, aspect?: ($IAspect$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartReaderAspectTrigger$Instance_ = $PartReaderAspectTrigger$Instance$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeSerializerMechanicalSqueezer" {
import {$RecipeMechanicalSqueezer, $RecipeMechanicalSqueezer$$Type} from "org.cyclops.integrateddynamics.core.recipe.type.RecipeMechanicalSqueezer"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RecipeSerializerMechanicalSqueezer implements $RecipeSerializer<($RecipeMechanicalSqueezer)> {
static readonly "CODEC": $MapCodec<($RecipeMechanicalSqueezer)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeMechanicalSqueezer)>

constructor()

public "codec"(): $MapCodec<($RecipeMechanicalSqueezer)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeMechanicalSqueezer)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerMechanicalSqueezer$$Type = ($RecipeSerializerMechanicalSqueezer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerMechanicalSqueezer_ = $RecipeSerializerMechanicalSqueezer$$Type;
}}
declare module "org.cyclops.integrateddynamics.client.model.IRenderState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IRenderState {

}

export namespace $IRenderState {
const probejs$$marker: never
}
export class $IRenderState$$Static implements $IRenderState {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderState$$Type = ($IRenderState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderState_ = $IRenderState$$Type;
}}
declare module "org.cyclops.cyclopscore.network.PacketBase" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder, $StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ServerboundCustomPayloadPacket, $ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket, $ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CustomPacketPayload$FallbackProvider, $CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"

export class $PacketBase<T extends $PacketBase<(T)>> implements $CustomPacketPayload {


public "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
public "decode"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "encode"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "getCodec"<T extends $PacketBase<(T)>>(arg0: $Supplier$$Type<(T)>): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public "actionClient"(arg0: $Level$$Type, arg1: $Player$$Type): void
public "actionServer"(arg0: $Level$$Type, arg1: $ServerPlayer$$Type): void
public "isAsync"(): boolean
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
get "async"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketBase$$Type<T> = ($PacketBase<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketBase_<T> = $PacketBase$$Type<(T)>;
}}
declare module "org.cyclops.integrateddynamics.api.part.IPartContainer" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$DimPos, $DimPos$$Type} from "org.cyclops.cyclopscore.datastructure.DimPos"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$INBTSerializable, $INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$PartCapability, $PartCapability$$Type} from "org.cyclops.integrateddynamics.api.part.PartCapability"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export interface $IPartContainer extends $INBTSerializable<($CompoundTag)> {

 "getPosition"(): $DimPos
 "update"(): void
 "getParts"(): $Map<($Direction), ($IPartType<(any), (any)>)>
 "getCapability"<T>(arg0: $PartCapability$$Type<(T)>, arg1: $INetwork$$Type, arg2: $IPartNetwork$$Type, arg3: $PartTarget$$Type): $Optional<(T)>
 "hasPart"(arg0: $Direction$$Type): boolean
 "hasParts"(): boolean
 "setPart"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $Direction$$Type, arg1: $IPartType$$Type<(P), (S)>, arg2: $IPartState$$Type<(P)>): void
 "setPartState"(arg0: $Direction$$Type, arg1: $IPartState$$Type<(any)>): void
 "getPartState"(arg0: $Direction$$Type): $IPartState<(any)>
 "canAddPart"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $Direction$$Type, arg1: $IPartType$$Type<(P), (S)>): boolean
 "removePart"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: boolean, arg3: boolean): $IPartType<(any), (any)>
 "getPart"(arg0: $Direction$$Type): $IPartType<(any), (any)>
 "getWatchingSide"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): $Direction
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
get "position"(): $DimPos
get "parts"(): $Map<($Direction), ($IPartType<(any), (any)>)>
}

export namespace $IPartContainer {
const probejs$$marker: never
}
export class $IPartContainer$$Static implements $IPartContainer {


 "getPosition"(): $DimPos
 "update"(): void
 "getParts"(): $Map<($Direction), ($IPartType<(any), (any)>)>
 "getCapability"<T>(arg0: $PartCapability$$Type<(T)>, arg1: $INetwork$$Type, arg2: $IPartNetwork$$Type, arg3: $PartTarget$$Type): $Optional<(T)>
 "hasPart"(arg0: $Direction$$Type): boolean
 "hasParts"(): boolean
 "setPart"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $Direction$$Type, arg1: $IPartType$$Type<(P), (S)>, arg2: $IPartState$$Type<(P)>): void
 "setPartState"(arg0: $Direction$$Type, arg1: $IPartState$$Type<(any)>): void
 "getPartState"(arg0: $Direction$$Type): $IPartState<(any)>
 "canAddPart"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $Direction$$Type, arg1: $IPartType$$Type<(P), (S)>): boolean
 "removePart"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: boolean, arg3: boolean): $IPartType<(any), (any)>
 "getPart"(arg0: $Direction$$Type): $IPartType<(any), (any)>
 "getWatchingSide"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): $Direction
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartContainer$$Type = ($IPartContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartContainer_ = $IPartContainer$$Type;
}}
declare module "org.cyclops.cyclopscore.item.ItemBlockNBT" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ItemBlockNBT extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockNBT$$Type = ($ItemBlockNBT);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockNBT_ = $ItemBlockNBT$$Type;
}}
declare module "org.cyclops.cyclopscore.init.RegistryManager" {
import {$IRegistry, $IRegistry$$Type} from "org.cyclops.cyclopscore.init.IRegistry"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $RegistryManager {

constructor()

public "addRegistry"<R extends $IRegistry>(arg0: $Class$$Type<(R)>, arg1: R): void
public "getRegistry"<T extends $IRegistry>(arg0: $Class$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryManager$$Type = ($RegistryManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryManager_ = $RegistryManager$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalStorageTabIngredientCraftingHandler" {
import {$IngredientComponent, $IngredientComponent$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientComponent"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TerminalStorageTabIngredientComponentServer, $TerminalStorageTabIngredientComponentServer$$Type} from "org.cyclops.integratedterminals.core.terminalstorage.TerminalStorageTabIngredientComponentServer"
import {$ITerminalCraftingPlanFlat, $ITerminalCraftingPlanFlat$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalCraftingPlanFlat"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ITerminalCraftingPlan, $ITerminalCraftingPlan$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalCraftingPlan"
import {$ITerminalCraftingOption, $ITerminalCraftingOption$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalCraftingOption"

export interface $ITerminalStorageTabIngredientCraftingHandler<O extends $ITerminalCraftingOption<(any)>, I> {

 "getId"(): $ResourceLocation
 "getCraftingJob"(arg0: $INetwork$$Type, arg1: integer, arg2: I): $ITerminalCraftingPlan<(I)>
 "serializeCraftingJobId"(arg0: I): $Tag
 "startCraftingJob"(arg0: $INetwork$$Type, arg1: integer, arg2: $ITerminalCraftingPlan$$Type<(I)>, arg3: $ServerPlayer$$Type): void
 "getCraftingJobs"(arg0: $INetwork$$Type, arg1: integer): $List<($ITerminalCraftingPlan<(I)>)>
 "cancelCraftingJob"(arg0: $INetwork$$Type, arg1: integer, arg2: I): boolean
 "getChannels"<T, M>(arg0: $TerminalStorageTabIngredientComponentServer$$Type<(T), (M)>): (integer)[]
 "getCraftingOptions"<T, M>(arg0: $TerminalStorageTabIngredientComponentServer$$Type<(T), (M)>, arg1: integer): $Collection<(O)>
 "calculateCraftingPlan"(arg0: $INetwork$$Type, arg1: integer, arg2: $ITerminalCraftingOption$$Type<(any)>, arg3: long): $ITerminalCraftingPlan<(I)>
 "serializeCraftingPlan"(arg0: $HolderLookup$Provider$$Type, arg1: $ITerminalCraftingPlan$$Type<(I)>): $CompoundTag
 "getCraftingOptionsWithOutput"<T, M>(arg0: $TerminalStorageTabIngredientComponentServer$$Type<(T), (M)>, arg1: integer, arg2: T, arg3: M): $Collection<(O)>
 "serializeCraftingOption"(arg0: $HolderLookup$Provider$$Type, arg1: O): $CompoundTag
 "deserializeCraftingOption"<T, M>(arg0: $HolderLookup$Provider$$Type, arg1: $IngredientComponent$$Type<(T), (M)>, arg2: $CompoundTag$$Type): O
 "deserializeCraftingPlan"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $ITerminalCraftingPlan<(I)>
 "serializeCraftingPlanFlat"(arg0: $HolderLookup$Provider$$Type, arg1: $ITerminalCraftingPlanFlat$$Type<(I)>): $CompoundTag
 "deserializeCraftingPlanFlat"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $ITerminalCraftingPlanFlat<(I)>
 "deserializeCraftingJobId"(arg0: $Tag$$Type): I
get "id"(): $ResourceLocation
}

export namespace $ITerminalStorageTabIngredientCraftingHandler {
const probejs$$marker: never
}
export class $ITerminalStorageTabIngredientCraftingHandler$$Static<O extends $ITerminalCraftingOption<(any)>, I> implements $ITerminalStorageTabIngredientCraftingHandler {


 "getId"(): $ResourceLocation
 "getCraftingJob"(arg0: $INetwork$$Type, arg1: integer, arg2: I): $ITerminalCraftingPlan<(I)>
 "serializeCraftingJobId"(arg0: I): $Tag
 "startCraftingJob"(arg0: $INetwork$$Type, arg1: integer, arg2: $ITerminalCraftingPlan$$Type<(I)>, arg3: $ServerPlayer$$Type): void
 "getCraftingJobs"(arg0: $INetwork$$Type, arg1: integer): $List<($ITerminalCraftingPlan<(I)>)>
 "cancelCraftingJob"(arg0: $INetwork$$Type, arg1: integer, arg2: I): boolean
 "getChannels"<T, M>(arg0: $TerminalStorageTabIngredientComponentServer$$Type<(T), (M)>): (integer)[]
 "getCraftingOptions"<T, M>(arg0: $TerminalStorageTabIngredientComponentServer$$Type<(T), (M)>, arg1: integer): $Collection<(O)>
 "calculateCraftingPlan"(arg0: $INetwork$$Type, arg1: integer, arg2: $ITerminalCraftingOption$$Type<(any)>, arg3: long): $ITerminalCraftingPlan<(I)>
 "serializeCraftingPlan"(arg0: $HolderLookup$Provider$$Type, arg1: $ITerminalCraftingPlan$$Type<(I)>): $CompoundTag
 "getCraftingOptionsWithOutput"<T, M>(arg0: $TerminalStorageTabIngredientComponentServer$$Type<(T), (M)>, arg1: integer, arg2: T, arg3: M): $Collection<(O)>
 "serializeCraftingOption"(arg0: $HolderLookup$Provider$$Type, arg1: O): $CompoundTag
 "deserializeCraftingOption"<T, M>(arg0: $HolderLookup$Provider$$Type, arg1: $IngredientComponent$$Type<(T), (M)>, arg2: $CompoundTag$$Type): O
 "deserializeCraftingPlan"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $ITerminalCraftingPlan<(I)>
 "serializeCraftingPlanFlat"(arg0: $HolderLookup$Provider$$Type, arg1: $ITerminalCraftingPlanFlat$$Type<(I)>): $CompoundTag
 "deserializeCraftingPlanFlat"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $ITerminalCraftingPlanFlat<(I)>
 "deserializeCraftingJobId"(arg0: $Tag$$Type): I
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalStorageTabIngredientCraftingHandler$$Type<O, I> = ($ITerminalStorageTabIngredientCraftingHandler<(O), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalStorageTabIngredientCraftingHandler_<O, I> = $ITerminalStorageTabIngredientCraftingHandler$$Type<(O), (I)>;
}}
declare module "org.cyclops.cyclopscore.block.BlockWithEntity" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockWithEntityCommon, $BlockWithEntityCommon$$Type} from "org.cyclops.cyclopscore.block.BlockWithEntityCommon"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CyclopsBlockEntity, $CyclopsBlockEntity$$Type} from "org.cyclops.cyclopscore.blockentity.CyclopsBlockEntity"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

/**
 * 
 * @deprecated
 */
export class $BlockWithEntity extends $BlockWithEntityCommon {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $BiFunction$$Type<($BlockPos), ($BlockState), ($CyclopsBlockEntity$$Type)>)

public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWithEntity$$Type = ($BlockWithEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWithEntity_ = $BlockWithEntity$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.ITerminalRowColumnProvider" {
import {$ITerminalRowColumnProvider$RowsAndColumns, $ITerminalRowColumnProvider$RowsAndColumns$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalRowColumnProvider$RowsAndColumns"

export interface $ITerminalRowColumnProvider {

 "getRowsAndColumns"(): $ITerminalRowColumnProvider$RowsAndColumns

(): $ITerminalRowColumnProvider$RowsAndColumns$$Type
get "rowsAndColumns"(): $ITerminalRowColumnProvider$RowsAndColumns
}

export namespace $ITerminalRowColumnProvider {
const probejs$$marker: never
}
export class $ITerminalRowColumnProvider$$Static implements $ITerminalRowColumnProvider {


 "getRowsAndColumns"(): $ITerminalRowColumnProvider$RowsAndColumns
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalRowColumnProvider$$Type = (() => $ITerminalRowColumnProvider$RowsAndColumns$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalRowColumnProvider_ = $ITerminalRowColumnProvider$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.item.IVariableFacade" {
import {$ItemDisplayContext, $ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$IVariableModelBaked, $IVariableModelBaked$$Type} from "org.cyclops.integrateddynamics.api.client.model.IVariableModelBaked"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$IVariable, $IVariable$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariable"
import {$IVariableFacade$IValidator, $IVariableFacade$IValidator$$Type} from "org.cyclops.integrateddynamics.api.item.IVariableFacade$IValidator"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"

export interface $IVariableFacade {

 "isValid"(): boolean
 "getLabel"(): StringJS
 "validate"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $IVariableFacade$IValidator$$Type, arg3: $IValueType$$Type<(any)>): void
 "getId"(): integer
 "getVariable"<V extends $IValue>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type): $IVariable<(V)>
 "getOutputType"(): $IValueType<(any)>
 "renderISTER"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
 "appendHoverText"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): void
 "addModelOverlay"(arg0: $IVariableModelBaked$$Type, arg1: $List$$Type<($BakedQuad$$Type)>, arg2: $RandomSource$$Type, arg3: $ModelData$$Type): void
 "getVariableItemOverrideModel"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: $ClientLevel$$Type, arg3: $LivingEntity$$Type): $BakedModel
get "valid"(): boolean
get "label"(): StringJS
get "id"(): integer
get "outputType"(): $IValueType<(any)>
}

export namespace $IVariableFacade {
const probejs$$marker: never
}
export class $IVariableFacade$$Static implements $IVariableFacade {


 "isValid"(): boolean
 "getLabel"(): StringJS
 "validate"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $IVariableFacade$IValidator$$Type, arg3: $IValueType$$Type<(any)>): void
 "getId"(): integer
 "getVariable"<V extends $IValue>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type): $IVariable<(V)>
 "getOutputType"(): $IValueType<(any)>
 "renderISTER"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
 "appendHoverText"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): void
 "addModelOverlay"(arg0: $IVariableModelBaked$$Type, arg1: $List$$Type<($BakedQuad$$Type)>, arg2: $RandomSource$$Type, arg3: $ModelData$$Type): void
 "getVariableItemOverrideModel"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: $ClientLevel$$Type, arg3: $LivingEntity$$Type): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableFacade$$Type = ($IVariableFacade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableFacade_ = $IVariableFacade$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.client.model.IVariableModelBaked" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ItemDisplayContext, $ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemOverrides, $ItemOverrides$$Type} from "net.minecraft.client.renderer.block.model.ItemOverrides"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IVariableModelProvider$BakedModelProvider, $IVariableModelProvider$BakedModelProvider$$Type} from "org.cyclops.integrateddynamics.api.client.model.IVariableModelProvider$BakedModelProvider"
import {$BakedQuad, $BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$RenderContext, $RenderContext$$Type} from "net.fabricmc.fabric.api.renderer.v1.render.RenderContext"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemTransforms, $ItemTransforms$$Type} from "net.minecraft.client.renderer.block.model.ItemTransforms"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IVariableModelProvider, $IVariableModelProvider$$Type} from "org.cyclops.integrateddynamics.api.client.model.IVariableModelProvider"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ChunkRenderTypeSet, $ChunkRenderTypeSet$$Type} from "net.neoforged.neoforge.client.ChunkRenderTypeSet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export interface $IVariableModelBaked extends $BakedModel {

 "getSubModels"<B extends $IVariableModelProvider$BakedModelProvider>(arg0: $IVariableModelProvider$$Type<(B)>): B
 "setSubModels"<B extends $IVariableModelProvider$BakedModelProvider>(arg0: $IVariableModelProvider$$Type<(B)>, arg1: B): void
/**
 * 
 * @deprecated
 */
 "getTransforms"(): $ItemTransforms
/**
 * 
 * @deprecated
 */
 "getQuads"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $RandomSource$$Type): $List<($BakedQuad)>
 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<(any)>, arg4: $RenderContext$$Type): void
 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<(any)>, arg2: $RenderContext$$Type): void
 "isGui3d"(): boolean
 "usesBlockLight"(): boolean
 "getOverrides"(): $ItemOverrides
 "isCustomRenderer"(): boolean
/**
 * 
 * @deprecated
 */
 "getParticleIcon"(): $TextureAtlasSprite
 "useAmbientOcclusion"(): boolean
 "getModelData"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ModelData$$Type): $ModelData
 "getQuads"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $RandomSource$$Type, arg3: $ModelData$$Type, arg4: $RenderType$$Type): $List<($BakedQuad)>
 "applyTransform"(arg0: $ItemDisplayContext$$Type, arg1: $PoseStack$$Type, arg2: boolean): $BakedModel
 "getRenderTypes"(arg0: $ItemStack$$Type, arg1: boolean): $List<($RenderType)>
 "getRenderTypes"(arg0: $BlockState$$Type, arg1: $RandomSource$$Type, arg2: $ModelData$$Type): $ChunkRenderTypeSet
 "getRenderPasses"(arg0: $ItemStack$$Type, arg1: boolean): $List<($BakedModel)>
 "getParticleIcon"(arg0: $ModelData$$Type): $TextureAtlasSprite
 "useAmbientOcclusion"(arg0: $BlockState$$Type, arg1: $ModelData$$Type, arg2: $RenderType$$Type): $TriState
 "isVanillaAdapter"(): boolean
get "transforms"(): $ItemTransforms
get "gui3d"(): boolean
get "overrides"(): $ItemOverrides
get "customRenderer"(): boolean
get "particleIcon"(): $TextureAtlasSprite
get "vanillaAdapter"(): boolean
}

export namespace $IVariableModelBaked {
const probejs$$marker: never
}
export class $IVariableModelBaked$$Static implements $IVariableModelBaked {


 "getSubModels"<B extends $IVariableModelProvider$BakedModelProvider>(arg0: $IVariableModelProvider$$Type<(B)>): B
 "setSubModels"<B extends $IVariableModelProvider$BakedModelProvider>(arg0: $IVariableModelProvider$$Type<(B)>, arg1: B): void
/**
 * 
 * @deprecated
 */
 "getTransforms"(): $ItemTransforms
/**
 * 
 * @deprecated
 */
 "getQuads"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $RandomSource$$Type): $List<($BakedQuad)>
 "emitBlockQuads"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Supplier$$Type<(any)>, arg4: $RenderContext$$Type): void
 "emitItemQuads"(arg0: $ItemStack$$Type, arg1: $Supplier$$Type<(any)>, arg2: $RenderContext$$Type): void
 "isGui3d"(): boolean
 "usesBlockLight"(): boolean
 "getOverrides"(): $ItemOverrides
 "isCustomRenderer"(): boolean
/**
 * 
 * @deprecated
 */
 "getParticleIcon"(): $TextureAtlasSprite
 "useAmbientOcclusion"(): boolean
 "getModelData"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ModelData$$Type): $ModelData
 "getQuads"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $RandomSource$$Type, arg3: $ModelData$$Type, arg4: $RenderType$$Type): $List<($BakedQuad)>
 "applyTransform"(arg0: $ItemDisplayContext$$Type, arg1: $PoseStack$$Type, arg2: boolean): $BakedModel
 "getRenderTypes"(arg0: $ItemStack$$Type, arg1: boolean): $List<($RenderType)>
 "getRenderTypes"(arg0: $BlockState$$Type, arg1: $RandomSource$$Type, arg2: $ModelData$$Type): $ChunkRenderTypeSet
 "getRenderPasses"(arg0: $ItemStack$$Type, arg1: boolean): $List<($BakedModel)>
 "getParticleIcon"(arg0: $ModelData$$Type): $TextureAtlasSprite
 "useAmbientOcclusion"(arg0: $BlockState$$Type, arg1: $ModelData$$Type, arg2: $RenderType$$Type): $TriState
 "isVanillaAdapter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableModelBaked$$Type = ($IVariableModelBaked);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableModelBaked_ = $IVariableModelBaked$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.event.IntegratedDynamicsSetupEvent" {
import {$ModLifecycleEvent, $ModLifecycleEvent$$Type} from "net.neoforged.fml.event.lifecycle.ModLifecycleEvent"
import {$ModContainer, $ModContainer$$Type} from "net.neoforged.fml.ModContainer"

export class $IntegratedDynamicsSetupEvent extends $ModLifecycleEvent {

constructor(arg0: $ModContainer$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedDynamicsSetupEvent$$Type = ($IntegratedDynamicsSetupEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegratedDynamicsSetupEvent_ = $IntegratedDynamicsSetupEvent$$Type;
}}
declare module "org.cyclops.commoncapabilities.api.ingredient.capability.ICapabilityGetter" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BaseCapability, $BaseCapability$$Type} from "net.neoforged.neoforge.capabilities.BaseCapability"
import {$ILevelExtension, $ILevelExtension$$Type} from "net.neoforged.neoforge.common.extensions.ILevelExtension"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ICapabilityGetter<C> {

 "getCapability"<T>(arg0: $BaseCapability$$Type<(T), (C)>, arg1: C): T
 "canHandleCapabilityType"(arg0: $BaseCapability$$Type<(any), (any)>): boolean
}

export namespace $ICapabilityGetter {
function forBlock<C>(arg0: $ILevelExtension$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): $ICapabilityGetter<(C)>
function forBlockEntity<C>(arg0: $BlockEntity$$Type): $ICapabilityGetter<(C)>
function forItem<C>(arg0: $ItemStack$$Type): $ICapabilityGetter<(C)>
function forEntity<C>(arg0: $Entity$$Type): $ICapabilityGetter<(C)>
const probejs$$marker: never
}
export class $ICapabilityGetter$$Static<C> implements $ICapabilityGetter {


static "forBlock"<C>(arg0: $ILevelExtension$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): $ICapabilityGetter<(C)>
 "getCapability"<T>(arg0: $BaseCapability$$Type<(T), (C)>, arg1: C): T
static "forBlockEntity"<C>(arg0: $BlockEntity$$Type): $ICapabilityGetter<(C)>
static "forItem"<C>(arg0: $ItemStack$$Type): $ICapabilityGetter<(C)>
static "forEntity"<C>(arg0: $Entity$$Type): $ICapabilityGetter<(C)>
 "canHandleCapabilityType"(arg0: $BaseCapability$$Type<(any), (any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityGetter$$Type<C> = ($ICapabilityGetter<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityGetter_<C> = $ICapabilityGetter$$Type<(C)>;
}}
declare module "org.cyclops.integrateddynamics.api.item.IVariableFacade$IValidator" {
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"

export interface $IVariableFacade$IValidator {

 "addError"(arg0: $MutableComponent$$Type): void

(arg0: $MutableComponent): void
}

export namespace $IVariableFacade$IValidator {
const probejs$$marker: never
}
export class $IVariableFacade$IValidator$$Static implements $IVariableFacade$IValidator {


 "addError"(arg0: $MutableComponent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableFacade$IValidator$$Type = ((arg0: $MutableComponent) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVariableFacade$IValidator_ = $IVariableFacade$IValidator$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeSqueezer" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$RecipeSqueezer$IngredientChance, $RecipeSqueezer$IngredientChance$$Type} from "org.cyclops.integrateddynamics.core.recipe.type.RecipeSqueezer$IngredientChance"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $RecipeSqueezer implements $Recipe<($CraftingInput)> {

constructor(arg0: $Ingredient$$Type, arg1: $NonNullList$$Type<($RecipeSqueezer$IngredientChance$$Type)>, arg2: $Optional$$Type<($FluidStack$$Type)>)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getOutputItems"(): $NonNullList<($RecipeSqueezer$IngredientChance)>
public "getOutputFluid"(): $Optional<($FluidStack)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getInputIngredient"(): $Ingredient
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "outputItems"(): $NonNullList<($RecipeSqueezer$IngredientChance)>
get "outputFluid"(): $Optional<($FluidStack)>
get "serializer"(): $RecipeSerializer<(any)>
get "inputIngredient"(): $Ingredient
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSqueezer$$Type = ($RecipeSqueezer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSqueezer_ = $RecipeSqueezer$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.client.gui.subgui.ISubGui" {
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"

export interface $ISubGui {

 "tick"(): void
 "init"(arg0: integer, arg1: integer): void
 "renderBg"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: $TextureManager$$Type, arg4: $Font$$Type, arg5: float, arg6: integer, arg7: integer): void
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "drawGuiContainerForegroundLayer"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: $TextureManager$$Type, arg4: $Font$$Type, arg5: integer, arg6: integer): void
}

export namespace $ISubGui {
const probejs$$marker: never
}
export class $ISubGui$$Static implements $ISubGui {


 "tick"(): void
 "init"(arg0: integer, arg1: integer): void
 "renderBg"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: $TextureManager$$Type, arg4: $Font$$Type, arg5: float, arg6: integer, arg7: integer): void
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "drawGuiContainerForegroundLayer"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: $TextureManager$$Type, arg4: $Font$$Type, arg5: integer, arg6: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubGui$$Type = ($ISubGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubGui_ = $ISubGui$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.PartRenderPosition" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"

export class $PartRenderPosition {
static readonly "NONE": $PartRenderPosition

constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float)

public "toString"(): StringJS
/**
 * 
 * @deprecated
 */
public "getBoundingBox"(arg0: $Direction$$Type): $VoxelShape
public "getBoundingBox"(arg0: $Direction$$Type, arg1: $CollisionContext$$Type): $VoxelShape
public "getDepthFactor"(): float
public "getWidthFactor"(): float
public "toCompactString"(): StringJS
public "getHeightFactor"(): float
public "getWidthFactorSide"(): float
public "getHeightFactorSide"(): float
public "getSidedCableBoundingBox"(arg0: $Direction$$Type): $VoxelShape
get "depthFactor"(): float
get "widthFactor"(): float
get "heightFactor"(): float
get "widthFactorSide"(): float
get "heightFactorSide"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartRenderPosition$$Type = ($PartRenderPosition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartRenderPosition_ = $PartRenderPosition$$Type;
}}
declare module "org.cyclops.cyclopscore.config.extendedconfig.ExtendedConfigCommon" {
import {$ConfigurablePropertyCommon, $ConfigurablePropertyCommon$$Type} from "org.cyclops.cyclopscore.config.ConfigurablePropertyCommon"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ConfigurablePropertyData, $ConfigurablePropertyData$$Type} from "org.cyclops.cyclopscore.config.ConfigurablePropertyData"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IModBase, $IModBase$$Type} from "org.cyclops.cyclopscore.init.IModBase"
import {$ConfigurableTypeCommon, $ConfigurableTypeCommon$$Type} from "org.cyclops.cyclopscore.config.ConfigurableTypeCommon"

export class $ExtendedConfigCommon<C extends $ExtendedConfigCommon<(C), (I), (M)>, I, M extends $IModBase> implements $Comparable<($ExtendedConfigCommon<(C), (I), (M)>)> {
 "configProperties": $Map<(StringJS), ($ConfigurablePropertyData<(any)>)>

constructor(arg0: M, arg1: StringJS, arg2: $Function$$Type<(C), (I)>)

public "compareTo"(arg0: $ExtendedConfigCommon$$Type<(C), (I), (M)>): integer
public "compareTo"(arg0: any): integer
public "getInstance"(): I
public "getMod"(): M
/**
 * 
 * @deprecated
 */
public "downCast"(): C
public "getNamedId"(): StringJS
public "onRegistered"(): void
public "getElementConstructor"(): $Function<(C), (I)>
public "showDoubleInitError"(): void
public "getConfigurableType"(): $ConfigurableTypeCommon
public "getFullTranslationKey"(): StringJS
public "getSubUniqueName"(): StringJS
public "onForgeRegistered"(): void
public "onConfigPropertyReload"(arg0: $ConfigurablePropertyData$$Type<(any)>, arg1: boolean): void
public "addInstanceTransformer"(arg0: $Function$$Type<(I), (I)>): void
public "getTranslationKey"(): StringJS
public "getConfigPropertyPrefix"(arg0: $ConfigurablePropertyCommon$$Type): StringJS
get "instance"(): I
get "mod"(): M
get "namedId"(): StringJS
get "elementConstructor"(): $Function<(C), (I)>
get "configurableType"(): $ConfigurableTypeCommon
get "fullTranslationKey"(): StringJS
get "subUniqueName"(): StringJS
get "translationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedConfigCommon$$Type<C, I, M> = ($ExtendedConfigCommon<(C), (I), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedConfigCommon_<C, I, M> = $ExtendedConfigCommon$$Type<(C), (I), (M)>;
}}
declare module "org.cyclops.integratedscripting.block.BlockScriptingDrive" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$$Type} from "org.cyclops.integrateddynamics.core.block.BlockWithEntityGuiCabled"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockScriptingDrive extends $BlockWithEntityGuiCabled {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockScriptingDrive)>
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockScriptingDrive$$Type = ($BlockScriptingDrive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockScriptingDrive_ = $BlockScriptingDrive$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon$SlotPositionFactors" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ITerminalStorageTabCommon$SlotPositionFactors extends $Record {

constructor(offsetX: integer, offsetY: integer, gridXSize: integer, gridYSize: integer, playerInventoryOffsetX: integer, playerInventoryOffsetY: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "offsetY"(): integer
public "offsetX"(): integer
public "gridXSize"(): integer
public "gridYSize"(): integer
public "playerInventoryOffsetX"(): integer
public "playerInventoryOffsetY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalStorageTabCommon$SlotPositionFactors$$Type = ({"playerInventoryOffsetY"?: integer, "gridXSize"?: integer, "gridYSize"?: integer, "offsetX"?: integer, "offsetY"?: integer, "playerInventoryOffsetX"?: integer}) | ([playerInventoryOffsetY?: integer, gridXSize?: integer, gridYSize?: integer, offsetX?: integer, offsetY?: integer, playerInventoryOffsetX?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalStorageTabCommon$SlotPositionFactors_ = $ITerminalStorageTabCommon$SlotPositionFactors$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.part.event.RegisterPartCapabilitiesEvent" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$BlockEntityMultipartTicking, $BlockEntityMultipartTicking$$Type} from "org.cyclops.integrateddynamics.core.blockentity.BlockEntityMultipartTicking"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$PartCapability, $PartCapability$$Type} from "org.cyclops.integrateddynamics.api.part.PartCapability"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterPartCapabilitiesEvent extends $Event implements $IModBusEvent {

constructor(arg0: $RegisterCapabilitiesEvent$$Type, arg1: $BlockEntityType$$Type<($BlockEntityMultipartTicking$$Type)>)

public "register"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $PartCapability$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterPartCapabilitiesEvent$$Type = ($RegisterPartCapabilitiesEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterPartCapabilitiesEvent_ = $RegisterPartCapabilitiesEvent$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.block.BlockContainerCabled" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CyclopsBlockEntity, $CyclopsBlockEntity$$Type} from "org.cyclops.cyclopscore.blockentity.CyclopsBlockEntity"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BlockWithEntity, $BlockWithEntity$$Type} from "org.cyclops.cyclopscore.block.BlockWithEntity"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BlockContainerCabled extends $BlockWithEntity {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $BiFunction$$Type<($BlockPos), ($BlockState), ($CyclopsBlockEntity$$Type)>)

public "destroy"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockContainerCabled$$Type = ($BlockContainerCabled);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockContainerCabled_ = $BlockContainerCabled$$Type;
}}
declare module "org.cyclops.integratedterminals.item.ItemTerminalStoragePortable" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ItemLocation, $ItemLocation$$Type} from "org.cyclops.cyclopscore.inventory.ItemLocation"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TerminalStorageState, $TerminalStorageState$$Type} from "org.cyclops.integratedterminals.inventory.container.TerminalStorageState"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$ITerminalStorageTabCommon$IVariableInventory, $ITerminalStorageTabCommon$IVariableInventory$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon$IVariableInventory"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemGui, $ItemGui$$Type} from "org.cyclops.cyclopscore.item.ItemGui"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ItemTerminalStoragePortable extends $ItemGui {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getContainer"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemLocation$$Type): $MenuProvider
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "getGroupId"(arg0: $ItemStack$$Type): integer
public static "setGroupId"(arg0: $ItemStack$$Type, arg1: integer): void
public "openGuiForItemIndex"(arg0: $Level$$Type, arg1: $ServerPlayer$$Type, arg2: $ItemLocation$$Type): void
public "getContainerClass"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): $Class<($AbstractContainerMenu)>
public static "getVariableInventory"(arg0: $ItemStack$$Type): $ITerminalStorageTabCommon$IVariableInventory
public "writeExtraGuiData"(arg0: $FriendlyByteBuf$$Type, arg1: $Level$$Type, arg2: $ServerPlayer$$Type, arg3: $ItemLocation$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public static "getTerminalStorageState"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $ItemLocation$$Type): $TerminalStorageState
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTerminalStoragePortable$$Type = ($ItemTerminalStoragePortable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTerminalStoragePortable_ = $ItemTerminalStoragePortable$$Type;
}}
declare module "org.cyclops.cyclopscore.init.IRegistry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IRegistry {

}

export namespace $IRegistry {
const probejs$$marker: never
}
export class $IRegistry$$Static implements $IRegistry {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRegistry$$Type = ($IRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRegistry_ = $IRegistry$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.part.event.PartWriterAspectEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPartStateWriter, $IPartStateWriter$$Type} from "org.cyclops.integrateddynamics.api.part.write.IPartStateWriter"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PartAspectEvent, $PartAspectEvent$$Type} from "org.cyclops.integrateddynamics.core.part.event.PartAspectEvent"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$IPartTypeWriter, $IPartTypeWriter$$Type} from "org.cyclops.integrateddynamics.api.part.write.IPartTypeWriter"
import {$IAspectWrite, $IAspectWrite$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspectWrite"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export class $PartWriterAspectEvent<P extends $IPartTypeWriter<(P), (S)>, S extends $IPartStateWriter<(P)>, A extends $IAspectWrite<(any), (any)>> extends $PartAspectEvent<(P), (S), (A)> {

constructor(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: P, arg4: S, arg5: $Player$$Type, arg6: A, arg7: $ItemStack$$Type)

public "getItemStack"(): $ItemStack
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartWriterAspectEvent$$Type<P, S, A> = ($PartWriterAspectEvent<(P), (S), (A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartWriterAspectEvent_<P, S, A> = $PartWriterAspectEvent$$Type<(P), (S), (A)>;
}}
declare module "org.cyclops.integrateddynamics.api.block.cable.ICable" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $ICable {

 "isConnected"(arg0: $Direction$$Type): boolean
 "destroy"(): void
 "getItemStack"(): $ItemStack
 "disconnect"(arg0: $Direction$$Type): void
 "reconnect"(arg0: $Direction$$Type): void
 "canConnect"(arg0: $ICable$$Type, arg1: $Direction$$Type): boolean
 "updateConnections"(arg0: boolean): void
 "updateConnections"(): void
get "itemStack"(): $ItemStack
}

export namespace $ICable {
const probejs$$marker: never
}
export class $ICable$$Static implements $ICable {


 "isConnected"(arg0: $Direction$$Type): boolean
 "destroy"(): void
 "getItemStack"(): $ItemStack
 "disconnect"(arg0: $Direction$$Type): void
 "reconnect"(arg0: $Direction$$Type): void
 "canConnect"(arg0: $ICable$$Type, arg1: $Direction$$Type): boolean
 "updateConnections"(arg0: boolean): void
 "updateConnections"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICable$$Type = ($ICable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICable_ = $ICable$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.network.event.NetworkInitializedEvent" {
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $NetworkInitializedEvent extends $Event {

constructor(arg0: $INetwork$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type)

public "getLevel"(): $Level
public "getPos"(): $BlockPos
public "getPlacer"(): $LivingEntity
public "getNetwork"(): $INetwork
get "level"(): $Level
get "pos"(): $BlockPos
get "placer"(): $LivingEntity
get "network"(): $INetwork
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkInitializedEvent$$Type = ($NetworkInitializedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkInitializedEvent_ = $NetworkInitializedEvent$$Type;
}}
declare module "org.cyclops.integratedterminals.client.gui.container.ContainerScreenTerminalStorage$DrawLayer" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ContainerScreenTerminalStorage$DrawLayer extends $Enum<($ContainerScreenTerminalStorage$DrawLayer)> {
static readonly "FOREGROUND": $ContainerScreenTerminalStorage$DrawLayer
static readonly "BACKGROUND": $ContainerScreenTerminalStorage$DrawLayer


public static "values"(): ($ContainerScreenTerminalStorage$DrawLayer)[]
public static "valueOf"(arg0: StringJS): $ContainerScreenTerminalStorage$DrawLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenTerminalStorage$DrawLayer$$Type = (("background") | ("foreground"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerScreenTerminalStorage$DrawLayer_ = $ContainerScreenTerminalStorage$DrawLayer$$Type;
}}
declare module "org.cyclops.cyclopscore.modcompat.ICompatInitializer" {
import {$IModBase, $IModBase$$Type} from "org.cyclops.cyclopscore.init.IModBase"

export interface $ICompatInitializer {

/**
 * 
 * @deprecated
 */
 "initialize"(): void
 "initialize"(arg0: $IModBase$$Type): void

(): void
}

export namespace $ICompatInitializer {
const probejs$$marker: never
}
export class $ICompatInitializer$$Static implements $ICompatInitializer {


/**
 * 
 * @deprecated
 */
 "initialize"(): void
 "initialize"(arg0: $IModBase$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICompatInitializer$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICompatInitializer_ = $ICompatInitializer$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.client.gui.subgui.IGuiInputElementValueType" {
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$ISubGuiBox, $ISubGuiBox$$Type} from "org.cyclops.integrateddynamics.api.client.gui.subgui.ISubGuiBox"
import {$IGuiInputElement, $IGuiInputElement$$Type} from "org.cyclops.integrateddynamics.api.client.gui.subgui.IGuiInputElement"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IConfigRenderPattern, $IConfigRenderPattern$$Type} from "org.cyclops.integrateddynamics.api.logicprogrammer.IConfigRenderPattern"

export interface $IGuiInputElementValueType<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $IGuiInputElement<(S), (G), (C)> {

 "getValue"(): $IValue
 "setValue"(arg0: $IValue$$Type): void
 "setValueInGui"(arg0: S, arg1: boolean): void
 "setValidator"(arg0: $Predicate$$Type<($IValue)>): void
 "getSymbol"(): StringJS
 "getName"(): $Component
 "validate"(): $Component
 "getColor"(): integer
 "activate"(): void
 "deactivate"(): void
 "createSubGui"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: G, arg5: C): S
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>): void
 "getRenderPattern"(): $IConfigRenderPattern
get "value"(): $IValue
set "value"(value: $IValue$$Type)
set "validator"(value: $Predicate$$Type<($IValue)>)
get "symbol"(): StringJS
get "name"(): $Component
get "color"(): integer
get "renderPattern"(): $IConfigRenderPattern
}

export namespace $IGuiInputElementValueType {
const probejs$$marker: never
}
export class $IGuiInputElementValueType$$Static<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> implements $IGuiInputElementValueType {


 "getValue"(): $IValue
 "setValue"(arg0: $IValue$$Type): void
 "setValueInGui"(arg0: S, arg1: boolean): void
 "setValidator"(arg0: $Predicate$$Type<($IValue)>): void
 "getSymbol"(): StringJS
 "getName"(): $Component
 "validate"(): $Component
 "getColor"(): integer
 "activate"(): void
 "deactivate"(): void
 "createSubGui"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: G, arg5: C): S
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>): void
 "getRenderPattern"(): $IConfigRenderPattern
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiInputElementValueType$$Type<S, G, C> = ($IGuiInputElementValueType<(S), (G), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiInputElementValueType_<S, G, C> = $IGuiInputElementValueType$$Type<(S), (G), (C)>;
}}
declare module "org.cyclops.integrateddynamics.item.ItemBlockCable" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemBlockCable$IUseAction, $ItemBlockCable$IUseAction$$Type} from "org.cyclops.integrateddynamics.item.ItemBlockCable$IUseAction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemBlockCable extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "addUseAction"(arg0: $ItemBlockCable$IUseAction$$Type): void
public static "playPlaceSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playBreakSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockCable$$Type = ($ItemBlockCable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockCable_ = $ItemBlockCable$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeDryingBasin" {
import {$ItemStackFromIngredient, $ItemStackFromIngredient$$Type} from "org.cyclops.cyclopscore.recipe.ItemStackFromIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$IInventoryFluid, $IInventoryFluid$$Type} from "org.cyclops.cyclopscore.recipe.type.IInventoryFluid"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $RecipeDryingBasin implements $Recipe<($IInventoryFluid)> {

constructor(arg0: $Optional$$Type<($Ingredient$$Type)>, arg1: $Optional$$Type<($FluidStack$$Type)>, arg2: $Optional$$Type<($Either$$Type<($ItemStack$$Type), ($ItemStackFromIngredient$$Type)>)>, arg3: $Optional$$Type<($FluidStack$$Type)>, arg4: integer)

public "getDuration"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $IInventoryFluid$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getInputFluid"(): $Optional<($FluidStack)>
public "getOutputFluid"(): $Optional<($FluidStack)>
public "getOutputItem"(): $Optional<($Either<($ItemStack), ($ItemStackFromIngredient)>)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $IInventoryFluid$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getOutputItemFirst"(): $ItemStack
public "getInputIngredient"(): $Optional<($Ingredient)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $IInventoryFluid$$Type): $NonNullList<($ItemStack)>
get "duration"(): integer
get "type"(): $RecipeType<(any)>
get "inputFluid"(): $Optional<($FluidStack)>
get "outputFluid"(): $Optional<($FluidStack)>
get "outputItem"(): $Optional<($Either<($ItemStack), ($ItemStackFromIngredient)>)>
get "serializer"(): $RecipeSerializer<(any)>
get "outputItemFirst"(): $ItemStack
get "inputIngredient"(): $Optional<($Ingredient)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeDryingBasin$$Type = ($RecipeDryingBasin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeDryingBasin_ = $RecipeDryingBasin$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon$IVariableInventory" {
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $ITerminalStorageTabCommon$IVariableInventory {

 "loadNamedInventory"(arg0: StringJS, arg1: $Container$$Type, arg2: $HolderLookup$Provider$$Type): void
 "getNamedInventory"(arg0: StringJS, arg1: $HolderLookup$Provider$$Type): $NonNullList<($ItemStack)>
 "saveNamedInventory"(arg0: StringJS, arg1: $Container$$Type, arg2: $HolderLookup$Provider$$Type): void
 "setNamedInventory"(arg0: StringJS, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $HolderLookup$Provider$$Type): void
}

export namespace $ITerminalStorageTabCommon$IVariableInventory {
const probejs$$marker: never
}
export class $ITerminalStorageTabCommon$IVariableInventory$$Static implements $ITerminalStorageTabCommon$IVariableInventory {


 "loadNamedInventory"(arg0: StringJS, arg1: $Container$$Type, arg2: $HolderLookup$Provider$$Type): void
 "getNamedInventory"(arg0: StringJS, arg1: $HolderLookup$Provider$$Type): $NonNullList<($ItemStack)>
 "saveNamedInventory"(arg0: StringJS, arg1: $Container$$Type, arg2: $HolderLookup$Provider$$Type): void
 "setNamedInventory"(arg0: StringJS, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalStorageTabCommon$IVariableInventory$$Type = ($ITerminalStorageTabCommon$IVariableInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalStorageTabCommon$IVariableInventory_ = $ITerminalStorageTabCommon$IVariableInventory$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.block.BlockWithEntityGuiCabled" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CyclopsBlockEntity, $CyclopsBlockEntity$$Type} from "org.cyclops.cyclopscore.blockentity.CyclopsBlockEntity"
import {$BlockWithEntityGui, $BlockWithEntityGui$$Type} from "org.cyclops.cyclopscore.block.BlockWithEntityGui"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BlockWithEntityGuiCabled extends $BlockWithEntityGui {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $BiFunction$$Type<($BlockPos), ($BlockState), ($CyclopsBlockEntity$$Type)>)

public "destroy"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWithEntityGuiCabled$$Type = ($BlockWithEntityGuiCabled);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWithEntityGuiCabled_ = $BlockWithEntityGuiCabled$$Type;
}}
declare module "org.cyclops.cyclopscore.block.BlockWithEntityCommon" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$CyclopsBlockEntityCommon, $CyclopsBlockEntityCommon$$Type} from "org.cyclops.cyclopscore.blockentity.CyclopsBlockEntityCommon"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockWithEntityCommon extends $BaseEntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $BiFunction$$Type<($BlockPos), ($BlockState), ($CyclopsBlockEntityCommon$$Type)>)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "isPersistNbt"(): boolean
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public static "getCloneItemStack"(arg0: $BlockWithEntityCommon$$Type, arg1: $Supplier$$Type<($ItemStack$$Type)>, arg2: $BlockState$$Type, arg3: $HitResult$$Type, arg4: $LevelReader$$Type, arg5: $BlockPos$$Type, arg6: $Player$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
get "persistNbt"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWithEntityCommon$$Type = ($BlockWithEntityCommon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWithEntityCommon_ = $BlockWithEntityCommon$$Type;
}}
declare module "org.cyclops.cyclopscore.helper.IWorldHelpers" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$IWorldHelpers$WorldFoldingFunction, $IWorldHelpers$WorldFoldingFunction$$Type} from "org.cyclops.cyclopscore.helper.IWorldHelpers$WorldFoldingFunction"

export interface $IWorldHelpers {

 "getChunkSize"(): integer
 "efficientTick"(arg0: $Level$$Type, arg1: integer, arg2: $BlockPos$$Type): boolean
 "efficientTick"(arg0: $Level$$Type, arg1: integer, ...arg2: (integer)[]): boolean
 "foldArea"<T, W extends $LevelAccessor>(arg0: W, arg1: integer, arg2: $BlockPos$$Type, arg3: $IWorldHelpers$WorldFoldingFunction$$Type<(T), (T), (W)>, arg4: T): T
 "foldArea"<T, W extends $LevelAccessor>(arg0: W, arg1: (integer)[], arg2: (integer)[], arg3: $BlockPos$$Type, arg4: $IWorldHelpers$WorldFoldingFunction$$Type<(T), (T), (W)>, arg5: T): T
 "getActiveLevel"(): $Level
get "chunkSize"(): integer
get "activeLevel"(): $Level
}

export namespace $IWorldHelpers {
const probejs$$marker: never
}
export class $IWorldHelpers$$Static implements $IWorldHelpers {


 "getChunkSize"(): integer
 "efficientTick"(arg0: $Level$$Type, arg1: integer, arg2: $BlockPos$$Type): boolean
 "efficientTick"(arg0: $Level$$Type, arg1: integer, ...arg2: (integer)[]): boolean
 "foldArea"<T, W extends $LevelAccessor>(arg0: W, arg1: integer, arg2: $BlockPos$$Type, arg3: $IWorldHelpers$WorldFoldingFunction$$Type<(T), (T), (W)>, arg4: T): T
 "foldArea"<T, W extends $LevelAccessor>(arg0: W, arg1: (integer)[], arg2: (integer)[], arg3: $BlockPos$$Type, arg4: $IWorldHelpers$WorldFoldingFunction$$Type<(T), (T), (W)>, arg5: T): T
 "getActiveLevel"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldHelpers$$Type = ($IWorldHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldHelpers_ = $IWorldHelpers$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.aspect.AspectUpdateType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $AspectUpdateType extends $Enum<($AspectUpdateType)> {
static readonly "BLOCK_UPDATE": $AspectUpdateType
static readonly "NETWORK_TICK": $AspectUpdateType
static readonly "NEVER": $AspectUpdateType


public static "values"(): ($AspectUpdateType)[]
public static "valueOf"(arg0: StringJS): $AspectUpdateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AspectUpdateType$$Type = (("network_tick") | ("block_update") | ("never"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AspectUpdateType_ = $AspectUpdateType$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.location.ITerminalStorageLocation" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingOptionGuiData, $CraftingOptionGuiData$$Type} from "org.cyclops.integratedterminals.core.client.gui.CraftingOptionGuiData"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $ITerminalStorageLocation<L> {

 "getName"(): $ResourceLocation
 "writeToPacketBuffer"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: L): void
 "readFromPacketBuffer"(arg0: $RegistryFriendlyByteBuf$$Type): L
 "openContainerCraftingOptionAmount"<T, M>(arg0: $CraftingOptionGuiData$$Type<(T), (M), (L)>, arg1: $Level$$Type, arg2: $ServerPlayer$$Type): void
 "openContainerFromClient"<T, M>(arg0: $CraftingOptionGuiData$$Type<(T), (M), (L)>): void
 "openContainerFromServer"<T, M>(arg0: $CraftingOptionGuiData$$Type<(T), (M), (L)>, arg1: $Level$$Type, arg2: $ServerPlayer$$Type): void
 "openContainerCraftingPlan"<T, M>(arg0: $CraftingOptionGuiData$$Type<(T), (M), (L)>, arg1: $Level$$Type, arg2: $ServerPlayer$$Type): void
get "name"(): $ResourceLocation
}

export namespace $ITerminalStorageLocation {
const probejs$$marker: never
}
export class $ITerminalStorageLocation$$Static<L> implements $ITerminalStorageLocation {


 "getName"(): $ResourceLocation
 "writeToPacketBuffer"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: L): void
 "readFromPacketBuffer"(arg0: $RegistryFriendlyByteBuf$$Type): L
 "openContainerCraftingOptionAmount"<T, M>(arg0: $CraftingOptionGuiData$$Type<(T), (M), (L)>, arg1: $Level$$Type, arg2: $ServerPlayer$$Type): void
 "openContainerFromClient"<T, M>(arg0: $CraftingOptionGuiData$$Type<(T), (M), (L)>): void
 "openContainerFromServer"<T, M>(arg0: $CraftingOptionGuiData$$Type<(T), (M), (L)>, arg1: $Level$$Type, arg2: $ServerPlayer$$Type): void
 "openContainerCraftingPlan"<T, M>(arg0: $CraftingOptionGuiData$$Type<(T), (M), (L)>, arg1: $Level$$Type, arg2: $ServerPlayer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalStorageLocation$$Type<L> = ($ITerminalStorageLocation<(L)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalStorageLocation_<L> = $ITerminalStorageLocation$$Type<(L)>;
}}
declare module "org.cyclops.integrateddynamics.advancement.criterion.PartWriterAspectTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$PartWriterAspectTrigger$Instance, $PartWriterAspectTrigger$Instance$$Type} from "org.cyclops.integrateddynamics.advancement.criterion.PartWriterAspectTrigger$Instance"
import {$PartWriterAspectEvent, $PartWriterAspectEvent$$Type} from "org.cyclops.integrateddynamics.core.part.event.PartWriterAspectEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PartWriterAspectTrigger extends $SimpleCriterionTrigger<($PartWriterAspectTrigger$Instance)> {
static readonly "CODEC": $Codec<($PartWriterAspectTrigger$Instance)>

constructor()

public "test"(arg0: $ServerPlayer$$Type, arg1: $PartWriterAspectEvent$$Type<(any), (any), (any)>): void
public "codec"(): $Codec<($PartWriterAspectTrigger$Instance)>
public "onEvent"(arg0: $PartWriterAspectEvent$$Type<(any), (any), (any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartWriterAspectTrigger$$Type = ($PartWriterAspectTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartWriterAspectTrigger_ = $PartWriterAspectTrigger$$Type;
}}
declare module "org.cyclops.cyclopscore.helper.IBlockHelpers" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderGetter, $HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockHelpers {

 "markForUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getHolderGetter"(): $HolderGetter<($Block)>
 "serializeBlockState"(arg0: $BlockState$$Type): $CompoundTag
 "deserializeBlockState"(arg0: $HolderGetter$$Type<($Block$$Type)>, arg1: $CompoundTag$$Type): $BlockState
 "addCollisionBoxToList"(arg0: $BlockPos$$Type, arg1: $AABB$$Type, arg2: $List$$Type<($AABB$$Type)>, arg3: $AABB$$Type): void
 "getSafeBlockStateProperty"<T extends $Comparable<(T)>>(arg0: $BlockState$$Type, arg1: $Property$$Type<(T)>, arg2: T): T
 "getBlockStateFromItemStack"(arg0: $ItemStack$$Type): $BlockState
 "getItemStackFromBlockState"(arg0: $BlockState$$Type): $ItemStack
 "doesBlockHaveSolidTopSurface"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): boolean
get "holderGetter"(): $HolderGetter<($Block)>
}

export namespace $IBlockHelpers {
const probejs$$marker: never
}
export class $IBlockHelpers$$Static implements $IBlockHelpers {


 "markForUpdate"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getHolderGetter"(): $HolderGetter<($Block)>
 "serializeBlockState"(arg0: $BlockState$$Type): $CompoundTag
 "deserializeBlockState"(arg0: $HolderGetter$$Type<($Block$$Type)>, arg1: $CompoundTag$$Type): $BlockState
 "addCollisionBoxToList"(arg0: $BlockPos$$Type, arg1: $AABB$$Type, arg2: $List$$Type<($AABB$$Type)>, arg3: $AABB$$Type): void
 "getSafeBlockStateProperty"<T extends $Comparable<(T)>>(arg0: $BlockState$$Type, arg1: $Property$$Type<(T)>, arg2: T): T
 "getBlockStateFromItemStack"(arg0: $ItemStack$$Type): $BlockState
 "getItemStackFromBlockState"(arg0: $BlockState$$Type): $ItemStack
 "doesBlockHaveSolidTopSurface"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockHelpers$$Type = ($IBlockHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockHelpers_ = $IBlockHelpers$$Type;
}}
declare module "org.cyclops.cyclopscore.inventory.SimpleInventory" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$IDirtyMarkListener, $IDirtyMarkListener$$Type} from "org.cyclops.cyclopscore.persist.IDirtyMarkListener"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$INBTInventory, $INBTInventory$$Type} from "org.cyclops.cyclopscore.inventory.INBTInventory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$WorldlyContainer, $WorldlyContainer$$Type} from "net.minecraft.world.WorldlyContainer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

/**
 * 
 * @deprecated
 */
export class $SimpleInventory implements $INBTInventory, $WorldlyContainer {
static readonly "CODEC": $Codec<($SimpleInventory)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SimpleInventory)>

constructor()
constructor(arg0: integer, arg1: integer)
constructor(arg0: integer, arg1: integer, arg2: $List$$Type<($ItemStack$$Type)>)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "write"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "read"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "getState"(): integer
public "toNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "clearContent"(): void
public "setChanged"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getItemHandler"(): $IItemHandler
public "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "getItemStacks"(): ($ItemStack)[]
public "writeToNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type, arg2: StringJS): void
public "readFromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type, arg2: StringJS): void
public "getSlotsForFace"(arg0: $Direction$$Type): (integer)[]
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "getItemHandlerSided"(arg0: $Direction$$Type): $IItemHandler
public "addDirtyMarkListener"(arg0: $IDirtyMarkListener$$Type): void
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "removeDirtyMarkListener"(arg0: $IDirtyMarkListener$$Type): void
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public static "tryClear"(arg0: any): void
public "setTransferCooldown"(arg0: long): void
public "canReceiveTransferCooldown"(): boolean
public "lithium$itemInsertionTestRequiresStackSize1"(): boolean
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "isMutable"(): boolean
public "getSlots"(): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "clear"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "self"(): $Container
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "asContainer"(): $Container
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "clear"(arg0: $ItemPredicate$$Type): void
public "find"(): integer
public "find"(arg0: $ItemPredicate$$Type): integer
public "count"(): integer
public "count"(arg0: $ItemPredicate$$Type): integer
public "isEmpty"(): boolean
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "countNonEmpty"(): integer
public "getAllItems"(): $List<($ItemStack)>
get "empty"(): boolean
get "state"(): integer
get "itemHandler"(): $IItemHandler
get "itemStacks"(): ($ItemStack)[]
get "containerSize"(): integer
get "maxStackSize"(): integer
set "transferCooldown"(value: long)
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleInventory$$Type = ($SimpleInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleInventory_ = $SimpleInventory$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockFluidMenrilResin" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockFluidMenrilResin extends $LiquidBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFluidMenrilResin$$Type = ($BlockFluidMenrilResin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFluidMenrilResin_ = $BlockFluidMenrilResin$$Type;
}}
declare module "org.cyclops.cyclopscore.helper.LoggerHelper" {
import {$Level, $Level$$Type} from "org.apache.logging.log4j.Level"
import {$Logger, $Logger$$Type} from "org.apache.logging.log4j.Logger"

export class $LoggerHelper {

constructor(arg0: StringJS)

public "log"(arg0: $Level$$Type, arg1: StringJS): void
public "getLogger"(): $Logger
get "logger"(): $Logger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoggerHelper$$Type = ($LoggerHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoggerHelper_ = $LoggerHelper$$Type;
}}
declare module "org.cyclops.cyclopscore.client.gui.component.input.IInputListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IInputListener {

 "onChanged"(): void

(): void
}

export namespace $IInputListener {
const probejs$$marker: never
}
export class $IInputListener$$Static implements $IInputListener {


 "onChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInputListener$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInputListener_ = $IInputListener$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.HostAccess" {
import {$HostAccess$Builder, $HostAccess$Builder$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.HostAccess$Builder"

export class $HostAccess {
static readonly "ALL": $HostAccess
static readonly "SCOPED": $HostAccess
static readonly "CONSTRAINED": $HostAccess
static readonly "NONE": $HostAccess
static readonly "UNTRUSTED": $HostAccess
static readonly "EXPLICIT": $HostAccess
static readonly "ISOLATED": $HostAccess


public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "newBuilder"(conf: $HostAccess$$Type): $HostAccess$Builder
public static "newBuilder"(): $HostAccess$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HostAccess$$Type = ($HostAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HostAccess_ = $HostAccess$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Value" {
import {$ByteOrder, $ByteOrder$$Type} from "java.nio.ByteOrder"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$Context, $Context$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Context"
import {$AbstractValue, $AbstractValue$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.AbstractValue"
import {$BigInteger, $BigInteger$$Type} from "java.math.BigInteger"
import {$SourceSection, $SourceSection$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.SourceSection"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$TypeLiteral, $TypeLiteral$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.TypeLiteral"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Proxy, $Proxy$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.proxy.Proxy"
import {$RuntimeException, $RuntimeException$$Type} from "java.lang.RuntimeException"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $Value extends $AbstractValue {


public "as"<T>(targetType: $Class$$Type<(T)>): T
public "as"<T>(targetType: $TypeLiteral$$Type<(T)>): T
public "readBuffer"(byteOffset: long, destination: (byte)[], destinationOffset: integer, length: integer): void
public "isNull"(): boolean
public "asInt"(): integer
public "pin"(): void
public "canExecute"(): boolean
public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "throwException"(): $RuntimeException
public "newInstance"(...arg0: (any)[]): $Value
public "getContext"(): $Context
public "execute"(...arg0: (any)[]): $Value
public "getIterator"(): $Value
public "asByte"(): byte
public "asLong"(): long
public "isTime"(): boolean
public "isDate"(): boolean
public "asBigInteger"(): $BigInteger
public "hasMember"(identifier: StringJS): boolean
public "removeMember"(identifier: StringJS): boolean
public "asShort"(): short
public "asFloat"(): float
public "asBoolean"(): boolean
public "fitsInInt"(): boolean
public "asDouble"(): double
public "fitsInLong"(): boolean
public "isBoolean"(): boolean
public "isNumber"(): boolean
public "isString"(): boolean
public "asString"(): StringJS
public "getBufferSize"(): long
public "getMember"(identifier: StringJS): $Value
public "isInstant"(): boolean
public "fitsInDouble"(): boolean
public "getHashSize"(): long
public "getArrayElement"(index: long): $Value
public "setArrayElement"(index: long, value: any): void
public "isProxyObject"(): boolean
public "asProxyObject"<T extends $Proxy>(): T
public "getArraySize"(): long
public static "asValue"(o: any): $Value
public "hasMembers"(): boolean
public "getMemberKeys"(): $Set<(StringJS)>
public "hasArrayElements"(): boolean
public "getSourceLocation"(): $SourceSection
public "asTime"(): $LocalTime
public "asDate"(): $LocalDate
public "invokeMember"(identifier: StringJS, ...arg1: (any)[]): $Value
public "fitsInFloat"(): boolean
public "executeVoid"(...arg0: (any)[]): void
public "putMember"(identifier: StringJS, value: any): void
public "canInstantiate"(): boolean
public "writeBufferInt"(order: $ByteOrder$$Type, byteOffset: long, value: integer): void
public "readBufferLong"(order: $ByteOrder$$Type, byteOffset: long): long
public "readBufferInt"(order: $ByteOrder$$Type, byteOffset: long): integer
public "readBufferByte"(byteOffset: long): byte
public "getMetaParents"(): $Value
public "isMetaObject"(): boolean
public "hasMetaParents"(): boolean
public "isMetaInstance"(instance: any): boolean
public "getMetaObject"(): $Value
public "putHashEntry"(key: any, value: any): void
public "getHashValue"(key: any): $Value
public "hasHashEntry"(key: any): boolean
public "hasHashEntries"(): boolean
public "isIterator"(): boolean
public "hasIterator"(): boolean
public "asTimeZone"(): $ZoneId
public "asDuration"(): $Duration
public "isException"(): boolean
public "isDuration"(): boolean
public "fitsInByte"(): boolean
public "asInstant"(): $Instant
public "isTimeZone"(): boolean
public "asHostObject"<T>(): T
public "fitsInShort"(): boolean
public "isHostObject"(): boolean
public "getMetaQualifiedName"(): StringJS
public "getMetaSimpleName"(): StringJS
public "removeArrayElement"(index: long): boolean
public "hasBufferElements"(): boolean
public "isBufferWritable"(): boolean
public "writeBufferByte"(byteOffset: long, value: byte): void
public "readBufferShort"(order: $ByteOrder$$Type, byteOffset: long): short
public "writeBufferShort"(order: $ByteOrder$$Type, byteOffset: long, value: short): void
public "writeBufferLong"(order: $ByteOrder$$Type, byteOffset: long, value: long): void
public "readBufferFloat"(order: $ByteOrder$$Type, byteOffset: long): float
public "writeBufferFloat"(order: $ByteOrder$$Type, byteOffset: long, value: float): void
public "readBufferDouble"(order: $ByteOrder$$Type, byteOffset: long): double
public "writeBufferDouble"(order: $ByteOrder$$Type, byteOffset: long, value: double): void
public "canInvokeMember"(identifier: StringJS): boolean
public "fitsInBigInteger"(): boolean
public "isNativePointer"(): boolean
public "asNativePointer"(): long
public "hasIteratorNextElement"(): boolean
public "getIteratorNextElement"(): $Value
public "getHashValueOrDefault"(key: any, defaultValue: any): $Value
public "removeHashEntry"(key: any): boolean
public "getHashEntriesIterator"(): $Value
public "getHashKeysIterator"(): $Value
public "getHashValuesIterator"(): $Value
get "null"(): boolean
get "context"(): $Context
get "iterator"(): $Value
get "time"(): boolean
get "date"(): boolean
get "boolean"(): boolean
get "number"(): boolean
get "string"(): boolean
get "bufferSize"(): long
get "instant"(): boolean
get "hashSize"(): long
get "proxyObject"(): boolean
get "arraySize"(): long
get "memberKeys"(): $Set<(StringJS)>
get "sourceLocation"(): $SourceSection
get "metaParents"(): $Value
get "metaObject"(): boolean
get "metaObject"(): $Value
get "iterator"(): boolean
get "exception"(): boolean
get "duration"(): boolean
get "timeZone"(): boolean
get "hostObject"(): boolean
get "metaQualifiedName"(): StringJS
get "metaSimpleName"(): StringJS
get "bufferWritable"(): boolean
get "nativePointer"(): boolean
get "iteratorNextElement"(): $Value
get "hashEntriesIterator"(): $Value
get "hashKeysIterator"(): $Value
get "hashValuesIterator"(): $Value
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Value$$Type = ($Value);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Value_ = $Value$$Type;
}}
declare module "org.cyclops.cyclopscore.client.gui.container.ContainerScreenExtended" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$$Type} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$IValueNotifiable, $IValueNotifiable$$Type} from "org.cyclops.cyclopscore.inventory.IValueNotifiable"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Point, $Point$$Type} from "java.awt.Point"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$AbstractContainerScreen, $AbstractContainerScreen$$Type} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"
import {$ContainerExtended, $ContainerExtended$$Type} from "org.cyclops.cyclopscore.inventory.container.ContainerExtended"

/**
 * 
 * @deprecated
 */
export class $ContainerScreenExtended<T extends $ContainerExtended> extends $AbstractContainerScreen<(T)> implements $IValueNotifiable {
 "leftPos": integer
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "clickedSlot": $Slot
 "title": $Component
readonly "renderables": $List<($Renderable)>
 "hoveredSlot": $Slot
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "isSplittingStack": boolean
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "imageWidth": integer
 "draggingItem": $ItemStack
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "imageHeight": integer
 "quickCraftingType": integer
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "topPos": integer
 "font": $Font

constructor(arg0: T, arg1: $Inventory$$Type, arg2: $Component$$Type)

public "init"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "isHovering"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: double, arg5: double): boolean
public "isHovering"(arg0: $Slot$$Type, arg1: double, arg2: double): boolean
public "getGuiTexture"(): $ResourceLocation
public "getGuiTopTotal"(): integer
public "onUpdate"(arg0: integer, arg1: $CompoundTag$$Type): void
public "drawTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $PoseStack$$Type, arg2: integer, arg3: integer): void
public "isPointInRegion"(arg0: $Rectangle$$Type, arg1: $Point$$Type): boolean
public "getGuiLeftTotal"(): integer
public "getValueNotifiableType"(): $MenuType<(any)>
public static "draw"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $GuiGraphics$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: integer): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
get "guiTexture"(): $ResourceLocation
get "guiTopTotal"(): integer
get "guiLeftTotal"(): integer
get "valueNotifiableType"(): $MenuType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenExtended$$Type<T> = ($ContainerScreenExtended<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerScreenExtended_<T> = $ContainerScreenExtended$$Type<(T)>;
}}
declare module "org.cyclops.integratedterminals.inventory.container.TerminalStorageState" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IDirtyMarkListener, $IDirtyMarkListener$$Type} from "org.cyclops.cyclopscore.persist.IDirtyMarkListener"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"

export class $TerminalStorageState {
static readonly "SETTING_BUTTON": StringJS
static readonly "SETTING_TAB": StringJS
static readonly "SETTING_SEARCH": StringJS
static readonly "PLAYER_TAG_DEFAULT_KEY": StringJS

constructor(arg0: $IDirtyMarkListener$$Type)
constructor(arg0: $CompoundTag$$Type, arg1: $IDirtyMarkListener$$Type)

public "getTag"(): $CompoundTag
public "setTab"(arg0: StringJS): void
public "getTab"(): StringJS
public "setTag"(arg0: $CompoundTag$$Type): void
public "hasButton"(arg0: StringJS, arg1: StringJS): boolean
public "setSearch"(arg0: StringJS, arg1: integer, arg2: StringJS): void
public "getSearch"(arg0: StringJS, arg1: integer): StringJS
public "getButton"(arg0: StringJS, arg1: StringJS): $Tag
public "writeToPacketBuffer"(arg0: $FriendlyByteBuf$$Type): void
public static "getPlayerDefault"(arg0: $Player$$Type, arg1: $IDirtyMarkListener$$Type): $TerminalStorageState
public static "readFromPacketBuffer"(arg0: $FriendlyByteBuf$$Type): $TerminalStorageState
public "hasTab"(): boolean
public "setDirtyMarkListener"(arg0: $IDirtyMarkListener$$Type): void
public static "setPlayerDefault"(arg0: $Player$$Type, arg1: $TerminalStorageState$$Type): void
public "hasSearch"(arg0: StringJS, arg1: integer): boolean
public "setButton"(arg0: StringJS, arg1: StringJS, arg2: $Tag$$Type): void
get "tag"(): $CompoundTag
set "tab"(value: StringJS)
get "tab"(): StringJS
set "tag"(value: $CompoundTag$$Type)
set "dirtyMarkListener"(value: $IDirtyMarkListener$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalStorageState$$Type = ($TerminalStorageState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalStorageState_ = $TerminalStorageState$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.item.ItemPart" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemPart$IUseAction, $ItemPart$IUseAction$$Type} from "org.cyclops.integrateddynamics.core.item.ItemPart$IUseAction"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"

export class $ItemPart<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>> extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $IPartType$$Type<(P), (S)>)

public "getName"(arg0: $ItemStack$$Type): $Component
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "addUseAction"(arg0: $ItemPart$IUseAction$$Type): void
public "getPart"(): $IPartType<(P), (S)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public "getDescriptionId"(): StringJS
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "part"(): $IPartType<(P), (S)>
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPart$$Type<P, S> = ($ItemPart<(P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPart_<P, S> = $ItemPart$$Type<(P), (S)>;
}}
declare module "org.cyclops.integrateddynamics.api.network.event.ICancelableNetworkEvent" {
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$INetworkEvent, $INetworkEvent$$Type} from "org.cyclops.integrateddynamics.api.network.event.INetworkEvent"

export interface $ICancelableNetworkEvent extends $INetworkEvent {

 "cancel"(): void
 "isCanceled"(): boolean
 "getNetwork"(): $INetwork
get "canceled"(): boolean
get "network"(): $INetwork
}

export namespace $ICancelableNetworkEvent {
const probejs$$marker: never
}
export class $ICancelableNetworkEvent$$Static implements $ICancelableNetworkEvent {


 "cancel"(): void
 "isCanceled"(): boolean
 "getNetwork"(): $INetwork
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICancelableNetworkEvent$$Type = ($ICancelableNetworkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICancelableNetworkEvent_ = $ICancelableNetworkEvent$$Type;
}}
declare module "org.cyclops.cyclopscore.persist.nbt.INBTProvider" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $INBTProvider {

 "writeGeneratedFieldsToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "readGeneratedFieldsFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
}

export namespace $INBTProvider {
const probejs$$marker: never
}
export class $INBTProvider$$Static implements $INBTProvider {


 "writeGeneratedFieldsToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "readGeneratedFieldsFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTProvider$$Type = ($INBTProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTProvider_ = $INBTProvider$$Type;
}}
declare module "org.cyclops.integrateddynamics.advancement.criterion.PartVariableDrivenAspectTrigger" {
import {$PartVariableDrivenAspectTrigger$Instance, $PartVariableDrivenAspectTrigger$Instance$$Type} from "org.cyclops.integrateddynamics.advancement.criterion.PartVariableDrivenAspectTrigger$Instance"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$PartVariableDrivenVariableContentsUpdatedEvent, $PartVariableDrivenVariableContentsUpdatedEvent$$Type} from "org.cyclops.integrateddynamics.core.part.event.PartVariableDrivenVariableContentsUpdatedEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PartVariableDrivenAspectTrigger extends $SimpleCriterionTrigger<($PartVariableDrivenAspectTrigger$Instance)> {
static readonly "CODEC": $Codec<($PartVariableDrivenAspectTrigger$Instance)>

constructor()

public "test"(arg0: $ServerPlayer$$Type, arg1: $PartVariableDrivenVariableContentsUpdatedEvent$$Type<(any), (any)>): void
public "codec"(): $Codec<($PartVariableDrivenAspectTrigger$Instance)>
public "onEvent"(arg0: $PartVariableDrivenVariableContentsUpdatedEvent$$Type<(any), (any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartVariableDrivenAspectTrigger$$Type = ($PartVariableDrivenAspectTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartVariableDrivenAspectTrigger_ = $PartVariableDrivenAspectTrigger$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageSlot" {
import {$AbstractContainerScreen, $AbstractContainerScreen$$Type} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ContainerScreenTerminalStorage$DrawLayer, $ContainerScreenTerminalStorage$DrawLayer$$Type} from "org.cyclops.integratedterminals.client.gui.container.ContainerScreenTerminalStorage$DrawLayer"
import {$ITerminalStorageTabClient, $ITerminalStorageTabClient$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabClient"

export interface $ITerminalStorageSlot {

 "drawGuiContainerLayer"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $GuiGraphics$$Type, arg2: $ContainerScreenTerminalStorage$DrawLayer$$Type, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $ITerminalStorageTabClient$$Type<(any)>, arg9: integer, arg10: StringJS): void

(arg0: $AbstractContainerScreen<(any)>, arg1: $GuiGraphics, arg2: $ContainerScreenTerminalStorage$DrawLayer, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $ITerminalStorageTabClient<(any)>, arg9: integer, arg10: StringJS): void
}

export namespace $ITerminalStorageSlot {
const probejs$$marker: never
}
export class $ITerminalStorageSlot$$Static implements $ITerminalStorageSlot {


 "drawGuiContainerLayer"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $GuiGraphics$$Type, arg2: $ContainerScreenTerminalStorage$DrawLayer$$Type, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $ITerminalStorageTabClient$$Type<(any)>, arg9: integer, arg10: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalStorageSlot$$Type = ((arg0: $AbstractContainerScreen<(any)>, arg1: $GuiGraphics, arg2: $ContainerScreenTerminalStorage$DrawLayer, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $ITerminalStorageTabClient<(any)>, arg9: integer, arg10: StringJS) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalStorageSlot_ = $ITerminalStorageSlot$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.IPartState" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IAspect, $IAspect$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspect"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IAspectProperties, $IAspectProperties$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.property.IAspectProperties"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$PartCapability, $PartCapability$$Type} from "org.cyclops.integrateddynamics.api.part.PartCapability"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export interface $IPartState<P extends $IPartType<(any), (any)>> {

 "getTargetOffset"(): $Vec3i
 "getChannel"(): integer
 "isEnabled"(): boolean
/**
 * 
 * @deprecated
 */
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getId"(): integer
 "markDirty"(): void
 "getCapability"<T>(arg0: P, arg1: $PartCapability$$Type<(T)>, arg2: $INetwork$$Type, arg3: $IPartNetwork$$Type, arg4: $PartTarget$$Type): $Optional<(T)>
 "setEnabled"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
 "setChannel"(arg0: integer): void
 "generateId"(): void
 "getMaxOffset"(): integer
 "setMaxOffset"(arg0: integer): void
 "writeToNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
 "readFromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
 "getUpdateInterval"(): integer
 "setTargetOffset"(arg0: $Vec3i$$Type): void
 "setTargetSideOverride"(arg0: $Direction$$Type): void
 "getTargetSideOverride"(): $Direction
 "gatherCapabilities"(arg0: P): void
 "setUpdateInterval"(arg0: integer): void
 "isForceBlockRenderUpdateAndReset"(): boolean
 "getInventoryNamed"(arg0: StringJS): $NonNullList<($ItemStack)>
 "updateOffsetVariables"(arg0: P, arg1: $INetwork$$Type, arg2: $IPartNetwork$$Type, arg3: $PartTarget$$Type): void
 "getInventoriesNamed"(): $Map<(StringJS), ($NonNullList<($ItemStack)>)>
 "clearInventoriesNamed"(): void
 "initializeOffsets"(arg0: $PartTarget$$Type): void
 "isDirtyAndReset"(): boolean
 "isUpdateAndReset"(): boolean
 "forceBlockRenderUpdate"(): void
 "getAspectProperties"(arg0: $IAspect$$Type<(any), (any)>): $IAspectProperties
 "setAspectProperties"(arg0: $IAspect$$Type<(any), (any)>, arg1: $IAspectProperties$$Type): void
 "addVolatileCapability"<T>(arg0: $PartCapability$$Type<(T)>, arg1: $Optional$$Type<(T)>): void
 "loadInventoryNamed"(arg0: StringJS, arg1: $Container$$Type): void
 "saveInventoryNamed"(arg0: StringJS, arg1: $Container$$Type): void
 "setInventoryNamed"(arg0: StringJS, arg1: $NonNullList$$Type<($ItemStack$$Type)>): void
 "getOffsetVariableError"(arg0: integer): $MutableComponent
 "requiresOffsetUpdates"(): boolean
 "markOffsetVariablesChanged"(): void
 "removeVolatileCapability"(arg0: $PartCapability$$Type<(any)>): void
get "targetOffset"(): $Vec3i
get "channel"(): integer
get "enabled"(): boolean
set "priority"(value: integer)
get "priority"(): integer
get "id"(): integer
set "enabled"(value: boolean)
set "channel"(value: integer)
get "maxOffset"(): integer
set "maxOffset"(value: integer)
get "updateInterval"(): integer
set "targetOffset"(value: $Vec3i$$Type)
set "targetSideOverride"(value: $Direction$$Type)
get "targetSideOverride"(): $Direction
set "updateInterval"(value: integer)
get "forceBlockRenderUpdateAndReset"(): boolean
get "inventoriesNamed"(): $Map<(StringJS), ($NonNullList<($ItemStack)>)>
get "dirtyAndReset"(): boolean
get "updateAndReset"(): boolean
}

export namespace $IPartState {
const GLOBALCOUNTER_KEY: StringJS
const probejs$$marker: never
}
export class $IPartState$$Static<P extends $IPartType<(any), (any)>> implements $IPartState {
static readonly "GLOBALCOUNTER_KEY": StringJS


 "getTargetOffset"(): $Vec3i
 "getChannel"(): integer
 "isEnabled"(): boolean
/**
 * 
 * @deprecated
 */
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getId"(): integer
 "markDirty"(): void
 "getCapability"<T>(arg0: P, arg1: $PartCapability$$Type<(T)>, arg2: $INetwork$$Type, arg3: $IPartNetwork$$Type, arg4: $PartTarget$$Type): $Optional<(T)>
 "setEnabled"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
 "setChannel"(arg0: integer): void
 "generateId"(): void
 "getMaxOffset"(): integer
 "setMaxOffset"(arg0: integer): void
 "writeToNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
 "readFromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
 "getUpdateInterval"(): integer
 "setTargetOffset"(arg0: $Vec3i$$Type): void
 "setTargetSideOverride"(arg0: $Direction$$Type): void
 "getTargetSideOverride"(): $Direction
 "gatherCapabilities"(arg0: P): void
 "setUpdateInterval"(arg0: integer): void
 "isForceBlockRenderUpdateAndReset"(): boolean
 "getInventoryNamed"(arg0: StringJS): $NonNullList<($ItemStack)>
 "updateOffsetVariables"(arg0: P, arg1: $INetwork$$Type, arg2: $IPartNetwork$$Type, arg3: $PartTarget$$Type): void
 "getInventoriesNamed"(): $Map<(StringJS), ($NonNullList<($ItemStack)>)>
 "clearInventoriesNamed"(): void
 "initializeOffsets"(arg0: $PartTarget$$Type): void
 "isDirtyAndReset"(): boolean
 "isUpdateAndReset"(): boolean
 "forceBlockRenderUpdate"(): void
 "getAspectProperties"(arg0: $IAspect$$Type<(any), (any)>): $IAspectProperties
 "setAspectProperties"(arg0: $IAspect$$Type<(any), (any)>, arg1: $IAspectProperties$$Type): void
 "addVolatileCapability"<T>(arg0: $PartCapability$$Type<(T)>, arg1: $Optional$$Type<(T)>): void
 "loadInventoryNamed"(arg0: StringJS, arg1: $Container$$Type): void
 "saveInventoryNamed"(arg0: StringJS, arg1: $Container$$Type): void
 "setInventoryNamed"(arg0: StringJS, arg1: $NonNullList$$Type<($ItemStack$$Type)>): void
 "getOffsetVariableError"(arg0: integer): $MutableComponent
 "requiresOffsetUpdates"(): boolean
 "markOffsetVariablesChanged"(): void
 "removeVolatileCapability"(arg0: $PartCapability$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartState$$Type<P> = ($IPartState<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartState_<P> = $IPartState$$Type<(P)>;
}}
declare module "org.cyclops.cyclopscore.client.particle.BufferBuilderWrapper" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $BufferBuilderWrapper {

 "cc$setRunnableOnBuild"(arg0: $Runnable$$Type): void

(arg0: $Runnable): void
}

export namespace $BufferBuilderWrapper {
const probejs$$marker: never
}
export class $BufferBuilderWrapper$$Static implements $BufferBuilderWrapper {


 "cc$setRunnableOnBuild"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderWrapper$$Type = ((arg0: $Runnable) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderWrapper_ = $BufferBuilderWrapper$$Type;
}}
declare module "org.cyclops.cyclopscore.advancement.criterion.ICriterionInstanceTestable" {
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTriggerInstance, $CriterionTriggerInstance$$Type} from "net.minecraft.advancements.CriterionTriggerInstance"

export interface $ICriterionInstanceTestable<D> extends $CriterionTriggerInstance {

 "test"(arg0: $ServerPlayer$$Type, arg1: D): boolean
 "validate"(arg0: $CriterionValidator$$Type): void
}

export namespace $ICriterionInstanceTestable {
const probejs$$marker: never
}
export class $ICriterionInstanceTestable$$Static<D> implements $ICriterionInstanceTestable {


 "test"(arg0: $ServerPlayer$$Type, arg1: D): boolean
 "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICriterionInstanceTestable$$Type<D> = ($ICriterionInstanceTestable<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICriterionInstanceTestable_<D> = $ICriterionInstanceTestable$$Type<(D)>;
}}
declare module "org.cyclops.integrateddynamics.api.logicprogrammer.ILogicProgrammerElement" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"
import {$IVariableFacade, $IVariableFacade$$Type} from "org.cyclops.integrateddynamics.api.item.IVariableFacade"
import {$IGuiInputElement, $IGuiInputElement$$Type} from "org.cyclops.integrateddynamics.api.client.gui.subgui.IGuiInputElement"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ILogicProgrammerElementType, $ILogicProgrammerElementType$$Type} from "org.cyclops.integrateddynamics.api.logicprogrammer.ILogicProgrammerElementType"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ISubGuiBox, $ISubGuiBox$$Type} from "org.cyclops.integrateddynamics.api.client.gui.subgui.ISubGuiBox"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$ClickType, $ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$IConfigRenderPattern, $IConfigRenderPattern$$Type} from "org.cyclops.integrateddynamics.api.logicprogrammer.IConfigRenderPattern"

export interface $ILogicProgrammerElement<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> extends $IGuiInputElement<(S), (G), (C)> {

 "getType"(): $ILogicProgrammerElementType<(any)>
 "isFor"(arg0: $IVariableFacade$$Type): boolean
 "setFocused"(arg0: S, arg1: boolean): void
 "isFocused"(arg0: S): boolean
 "getMatchString"(): StringJS
 "matchesOutput"(arg0: $IValueType$$Type<(any)>): boolean
 "slotClick"(arg0: integer, arg1: $Slot$$Type, arg2: integer, arg3: $ClickType$$Type, arg4: $Player$$Type): boolean
 "setValueInGui"(arg0: S): void
 "matchesInput"(arg0: $IValueType$$Type<(any)>): boolean
 "createSlot"(arg0: $Container$$Type, arg1: integer, arg2: integer, arg3: integer): $Slot
 "writeElement"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $ItemStack
 "loadElement"(arg0: $IVariableFacade$$Type): void
 "isItemValidForSlot"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "onInputSlotUpdated"(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type): void
 "canWriteElementPre"(): boolean
 "getItemStackSizeLimit"(): integer
 "setValueInContainer"(arg0: C): void
 "canCurrentlyReadFromOtherItem"(): boolean
 "getSymbol"(): StringJS
 "getName"(): $Component
 "validate"(): $Component
 "getColor"(): integer
 "activate"(): void
 "deactivate"(): void
 "createSubGui"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: G, arg5: C): S
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>): void
 "getRenderPattern"(): $IConfigRenderPattern
get "type"(): $ILogicProgrammerElementType<(any)>
get "matchString"(): StringJS
set "valueInGui"(value: S)
get "itemStackSizeLimit"(): integer
set "valueInContainer"(value: C)
get "symbol"(): StringJS
get "name"(): $Component
get "color"(): integer
get "renderPattern"(): $IConfigRenderPattern
}

export namespace $ILogicProgrammerElement {
function createSlotDefault(arg0: $ILogicProgrammerElement$$Type<(any), (any), (any)>, arg1: $Container$$Type, arg2: integer, arg3: integer, arg4: integer): $Slot
const probejs$$marker: never
}
export class $ILogicProgrammerElement$$Static<S extends $ISubGuiBox, G extends $Screen, C extends $AbstractContainerMenu> implements $ILogicProgrammerElement {


 "getType"(): $ILogicProgrammerElementType<(any)>
 "isFor"(arg0: $IVariableFacade$$Type): boolean
 "setFocused"(arg0: S, arg1: boolean): void
 "isFocused"(arg0: S): boolean
 "getMatchString"(): StringJS
 "matchesOutput"(arg0: $IValueType$$Type<(any)>): boolean
 "slotClick"(arg0: integer, arg1: $Slot$$Type, arg2: integer, arg3: $ClickType$$Type, arg4: $Player$$Type): boolean
 "setValueInGui"(arg0: S): void
 "matchesInput"(arg0: $IValueType$$Type<(any)>): boolean
 "createSlot"(arg0: $Container$$Type, arg1: integer, arg2: integer, arg3: integer): $Slot
 "writeElement"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $ItemStack
 "loadElement"(arg0: $IVariableFacade$$Type): void
 "isItemValidForSlot"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "onInputSlotUpdated"(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type): void
 "canWriteElementPre"(): boolean
 "getItemStackSizeLimit"(): integer
 "setValueInContainer"(arg0: C): void
static "createSlotDefault"(arg0: $ILogicProgrammerElement$$Type<(any), (any), (any)>, arg1: $Container$$Type, arg2: integer, arg3: integer, arg4: integer): $Slot
 "canCurrentlyReadFromOtherItem"(): boolean
 "getSymbol"(): StringJS
 "getName"(): $Component
 "validate"(): $Component
 "getColor"(): integer
 "activate"(): void
 "deactivate"(): void
 "createSubGui"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: G, arg5: C): S
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>): void
 "getRenderPattern"(): $IConfigRenderPattern
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILogicProgrammerElement$$Type<S, G, C> = ($ILogicProgrammerElement<(S), (G), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILogicProgrammerElement_<S, G, C> = $ILogicProgrammerElement$$Type<(S), (G), (C)>;
}}
declare module "org.cyclops.integrateddynamics.advancement.criterion.PartWriterAspectTrigger$Instance" {
import {$ICriterionInstanceTestable, $ICriterionInstanceTestable$$Type} from "org.cyclops.cyclopscore.advancement.criterion.ICriterionInstanceTestable"
import {$IAspect, $IAspect$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspect"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$PartWriterAspectEvent, $PartWriterAspectEvent$$Type} from "org.cyclops.integrateddynamics.core.part.event.PartWriterAspectEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$VariablePredicate, $VariablePredicate$$Type} from "org.cyclops.integrateddynamics.api.advancement.criterion.VariablePredicate"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PartWriterAspectTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance, $ICriterionInstanceTestable<($PartWriterAspectEvent)> {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, partType: $Optional$$Type<($IPartType$$Type)>, aspect: $Optional$$Type<($IAspect$$Type)>, variablePredicate: $Optional$$Type<($VariablePredicate$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ServerPlayer$$Type, arg1: any): boolean
public "test"(arg0: $ServerPlayer$$Type, arg1: $PartWriterAspectEvent$$Type<(any), (any), (any)>): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "aspect"(): $Optional<($IAspect)>
public "partType"(): $Optional<($IPartType)>
public "variablePredicate"(): $Optional<($VariablePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartWriterAspectTrigger$Instance$$Type = ({"variablePredicate"?: ($VariablePredicate$$Type)?, "partType"?: ($IPartType$$Type)?, "aspect"?: ($IAspect$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([variablePredicate?: ($VariablePredicate$$Type)?, partType?: ($IPartType$$Type)?, aspect?: ($IAspect$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartWriterAspectTrigger$Instance_ = $PartWriterAspectTrigger$Instance$$Type;
}}
declare module "org.cyclops.integrateddynamics.item.ItemFacade" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ModelEvent$ModifyBakingResult, $ModelEvent$ModifyBakingResult$$Type} from "net.neoforged.neoforge.client.event.ModelEvent$ModifyBakingResult"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IDynamicModelElement, $IDynamicModelElement$$Type} from "org.cyclops.cyclopscore.client.model.IDynamicModelElement"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemFacade extends $Item implements $IDynamicModelElement {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getFacadeBlock"(arg0: $ItemStack$$Type): $BlockState
public "hasDynamicModel"(): boolean
public "createDynamicModel"(arg0: $ModelEvent$ModifyBakingResult$$Type): $BakedModel
public "getFacadeBlockItem"(arg0: $ItemStack$$Type): $ItemStack
public "writeFacadeBlock"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFacade$$Type = ($ItemFacade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFacade_ = $ItemFacade$$Type;
}}
declare module "org.cyclops.cyclopscore.helper.IRenderHelpers" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ParticleEngine, $ParticleEngine$$Type} from "net.minecraft.client.particle.ParticleEngine"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Particle, $Particle$$Type} from "net.minecraft.client.particle.Particle"
import {$Font$DisplayMode, $Font$DisplayMode$$Type} from "net.minecraft.client.gui.Font$DisplayMode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Point, $Point$$Type} from "java.awt.Point"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$Function, $Function$$Type} from "com.google.common.base.Function"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IRenderHelpers {

 "getBakedModel"(arg0: $BlockState$$Type): $BakedModel
 "getBlockIcon"(arg0: $Block$$Type): $TextureAtlasSprite
 "blitColored"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float, arg11: float): void
 "blitColored"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float): void
 "bindTexture"(arg0: $ResourceLocation$$Type): void
 "emitParticle"(arg0: $Particle$$Type): void
 "drawScaledString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: StringJS, arg3: integer, arg4: integer, arg5: float, arg6: integer, arg7: boolean, arg8: $Font$DisplayMode$$Type): void
 "getDynamicBakedModel"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $BakedModel
 "getBlockTextureGetter"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
 "isPointInRegion"(arg0: $Rectangle$$Type, arg1: $Point$$Type): boolean
 "isPointInRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: double, arg5: double): boolean
 "isPointInButton"(arg0: $Button$$Type, arg1: integer, arg2: integer): boolean
 "addBlockHitEffects"(arg0: $ParticleEngine$$Type, arg1: $ClientLevel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): void
 "drawScaledCenteredString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: StringJS, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: integer, arg8: boolean, arg9: $Font$DisplayMode$$Type): void
 "drawScaledCenteredString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: StringJS, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: integer, arg8: integer, arg9: boolean, arg10: $Font$DisplayMode$$Type): void
 "drawScaledCenteredString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: StringJS, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: $Font$DisplayMode$$Type): void
get "blockTextureGetter"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
}

export namespace $IRenderHelpers {
const probejs$$marker: never
}
export class $IRenderHelpers$$Static implements $IRenderHelpers {


 "getBakedModel"(arg0: $BlockState$$Type): $BakedModel
 "getBlockIcon"(arg0: $Block$$Type): $TextureAtlasSprite
 "blitColored"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: float, arg9: float, arg10: float, arg11: float): void
 "blitColored"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float): void
 "bindTexture"(arg0: $ResourceLocation$$Type): void
 "emitParticle"(arg0: $Particle$$Type): void
 "drawScaledString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: StringJS, arg3: integer, arg4: integer, arg5: float, arg6: integer, arg7: boolean, arg8: $Font$DisplayMode$$Type): void
 "getDynamicBakedModel"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $BakedModel
 "getBlockTextureGetter"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
 "isPointInRegion"(arg0: $Rectangle$$Type, arg1: $Point$$Type): boolean
 "isPointInRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: double, arg5: double): boolean
 "isPointInButton"(arg0: $Button$$Type, arg1: integer, arg2: integer): boolean
 "addBlockHitEffects"(arg0: $ParticleEngine$$Type, arg1: $ClientLevel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): void
 "drawScaledCenteredString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: StringJS, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: integer, arg8: boolean, arg9: $Font$DisplayMode$$Type): void
 "drawScaledCenteredString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: StringJS, arg3: integer, arg4: integer, arg5: integer, arg6: float, arg7: integer, arg8: integer, arg9: boolean, arg10: $Font$DisplayMode$$Type): void
 "drawScaledCenteredString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: StringJS, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: $Font$DisplayMode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderHelpers$$Type = ($IRenderHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderHelpers_ = $IRenderHelpers$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalCraftingOption" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$IngredientComponent, $IngredientComponent$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientComponent"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export interface $ITerminalCraftingOption<T> extends $Comparable<($ITerminalCraftingOption<(T)>)> {

 "getInputs"<T1, M>(arg0: $IngredientComponent$$Type<(T1), (M)>): $Collection<(T1)>
 "getOutputs"(): $Iterator<(T)>
 "getOutputs"<T, M>(arg0: $IngredientComponent$$Type<(T), (M)>): $Collection<(T)>
 "getOutputComponents"(): $Collection<($IngredientComponent<(any), (any)>)>
 "getInputComponents"(): $Collection<($IngredientComponent<(any), (any)>)>
 "compareTo"(arg0: $ITerminalCraftingOption$$Type<(T)>): integer
get "outputs"(): $Iterator<(T)>
get "outputComponents"(): $Collection<($IngredientComponent<(any), (any)>)>
get "inputComponents"(): $Collection<($IngredientComponent<(any), (any)>)>
}

export namespace $ITerminalCraftingOption {
const probejs$$marker: never
}
export class $ITerminalCraftingOption$$Static<T> implements $ITerminalCraftingOption {


 "getInputs"<T1, M>(arg0: $IngredientComponent$$Type<(T1), (M)>): $Collection<(T1)>
 "getOutputs"(): $Iterator<(T)>
 "getOutputs"<T, M>(arg0: $IngredientComponent$$Type<(T), (M)>): $Collection<(T)>
 "getOutputComponents"(): $Collection<($IngredientComponent<(any), (any)>)>
 "getInputComponents"(): $Collection<($IngredientComponent<(any), (any)>)>
 "compareTo"(arg0: $ITerminalCraftingOption$$Type<(T)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalCraftingOption$$Type<T> = ($ITerminalCraftingOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalCraftingOption_<T> = $ITerminalCraftingOption$$Type<(T)>;
}}
declare module "org.cyclops.cyclopscore.helper.IGuiHelpers$ProgressDirection" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $IGuiHelpers$ProgressDirection extends $Enum<($IGuiHelpers$ProgressDirection)> {
static readonly "UP_RIGHT": $IGuiHelpers$ProgressDirection
static readonly "DOWN_RIGHT": $IGuiHelpers$ProgressDirection
static readonly "DOWN": $IGuiHelpers$ProgressDirection
static readonly "LEFT": $IGuiHelpers$ProgressDirection
static readonly "DOWN_LEFT": $IGuiHelpers$ProgressDirection
static readonly "UP_LEFT": $IGuiHelpers$ProgressDirection
static readonly "RIGHT": $IGuiHelpers$ProgressDirection
static readonly "UP": $IGuiHelpers$ProgressDirection


public static "values"(): ($IGuiHelpers$ProgressDirection)[]
public static "valueOf"(arg0: StringJS): $IGuiHelpers$ProgressDirection
public "getIncrementX"(): integer
public "getIncrementY"(): integer
get "incrementX"(): integer
get "incrementY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiHelpers$ProgressDirection$$Type = (("up") | ("down") | ("left") | ("right") | ("up_left") | ("up_right") | ("down_left") | ("down_right"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiHelpers$ProgressDirection_ = $IGuiHelpers$ProgressDirection$$Type;
}}
declare module "org.cyclops.cyclopscore.command.argument.ArgumentTypeEnum$Info$Template" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentTypeEnum, $ArgumentTypeEnum$$Type} from "org.cyclops.cyclopscore.command.argument.ArgumentTypeEnum"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ArgumentTypeEnum$Info$Template<T extends $Enum<(T)>> implements $ArgumentTypeInfo$Template<($ArgumentTypeEnum<(any)>)> {


public "type"(): $ArgumentTypeInfo<($ArgumentTypeEnum<(any)>), (any)>
public "instantiate"(arg0: $CommandBuildContext$$Type): $ArgumentTypeEnum<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentTypeEnum$Info$Template$$Type<T> = ($ArgumentTypeEnum$Info$Template<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentTypeEnum$Info$Template_<T> = $ArgumentTypeEnum$Info$Template$$Type<(T)>;
}}
declare module "org.cyclops.integrateddynamics.advancement.criterion.PartReaderAspectTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$PartReaderAspectEvent, $PartReaderAspectEvent$$Type} from "org.cyclops.integrateddynamics.core.part.event.PartReaderAspectEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$PartReaderAspectTrigger$Instance, $PartReaderAspectTrigger$Instance$$Type} from "org.cyclops.integrateddynamics.advancement.criterion.PartReaderAspectTrigger$Instance"

export class $PartReaderAspectTrigger extends $SimpleCriterionTrigger<($PartReaderAspectTrigger$Instance)> {
static readonly "CODEC": $Codec<($PartReaderAspectTrigger$Instance)>

constructor()

public "test"(arg0: $ServerPlayer$$Type, arg1: $PartReaderAspectEvent$$Type<(any), (any), (any)>): void
public "codec"(): $Codec<($PartReaderAspectTrigger$Instance)>
public "onEvent"(arg0: $PartReaderAspectEvent$$Type<(any), (any), (any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartReaderAspectTrigger$$Type = ($PartReaderAspectTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartReaderAspectTrigger_ = $PartReaderAspectTrigger$$Type;
}}
declare module "org.cyclops.cyclopscore.advancement.criterion.GuiContainerOpenTrigger$Instance" {
import {$ICriterionInstanceTestable, $ICriterionInstanceTestable$$Type} from "org.cyclops.cyclopscore.advancement.criterion.ICriterionInstanceTestable"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GuiContainerOpenTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance, $ICriterionInstanceTestable<($AbstractContainerMenu)> {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, containerClass: $Optional$$Type<(StringJS)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ServerPlayer$$Type, arg1: any): boolean
public "test"(arg0: $ServerPlayer$$Type, arg1: $AbstractContainerMenu$$Type): boolean
public "containerClass"(): $Optional<(StringJS)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiContainerOpenTrigger$Instance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "containerClass"?: (StringJS)?}) | ([player?: ($ContextAwarePredicate$$Type)?, containerClass?: (StringJS)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiContainerOpenTrigger$Instance_ = $GuiContainerOpenTrigger$Instance$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.block.IgnoredBlockStatus" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IgnoredBlockStatus$PropertyStatus, $IgnoredBlockStatus$PropertyStatus$$Type} from "org.cyclops.integrateddynamics.core.block.IgnoredBlockStatus$PropertyStatus"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IgnoredBlock, $IgnoredBlock$$Type} from "org.cyclops.integrateddynamics.core.block.IgnoredBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IgnoredBlockStatus extends $IgnoredBlock {
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
static readonly "STATUS": $IgnoredBlockStatus$PropertyStatus
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

constructor()

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IgnoredBlockStatus$$Type = ($IgnoredBlockStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IgnoredBlockStatus_ = $IgnoredBlockStatus$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.block.cable.ICableFakeable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICableFakeable {

 "isRealCable"(): boolean
 "setRealCable"(arg0: boolean): void
get "realCable"(): boolean
set "realCable"(value: boolean)
}

export namespace $ICableFakeable {
const probejs$$marker: never
}
export class $ICableFakeable$$Static implements $ICableFakeable {


 "isRealCable"(): boolean
 "setRealCable"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICableFakeable$$Type = ($ICableFakeable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICableFakeable_ = $ICableFakeable$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.IFullNetworkListener" {
import {$INetworkElement, $INetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElement"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPathElement, $IPathElement$$Type} from "org.cyclops.integrateddynamics.api.path.IPathElement"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFullNetworkListener {

 "kill"(): void
 "update"(): void
 "canUpdate"(arg0: $INetworkElement$$Type): boolean
 "onSkipUpdate"(arg0: $INetworkElement$$Type): void
 "postUpdate"(arg0: $INetworkElement$$Type): void
 "addNetworkElement"(arg0: $INetworkElement$$Type, arg1: boolean): boolean
 "updateGuaranteed"(): void
 "removePathElement"(arg0: $IPathElement$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type): boolean
 "invalidateElement"(arg0: $INetworkElement$$Type): void
 "revalidateElement"(arg0: $INetworkElement$$Type): void
 "afterServerLoad"(): void
 "beforeServerStop"(): void
 "removeNetworkElementPre"(arg0: $INetworkElement$$Type): boolean
 "removeNetworkElementPost"(arg0: $INetworkElement$$Type, arg1: $BlockState$$Type): void
}

export namespace $IFullNetworkListener {
const probejs$$marker: never
}
export class $IFullNetworkListener$$Static implements $IFullNetworkListener {


 "kill"(): void
 "update"(): void
 "canUpdate"(arg0: $INetworkElement$$Type): boolean
 "onSkipUpdate"(arg0: $INetworkElement$$Type): void
 "postUpdate"(arg0: $INetworkElement$$Type): void
 "addNetworkElement"(arg0: $INetworkElement$$Type, arg1: boolean): boolean
 "updateGuaranteed"(): void
 "removePathElement"(arg0: $IPathElement$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type): boolean
 "invalidateElement"(arg0: $INetworkElement$$Type): void
 "revalidateElement"(arg0: $INetworkElement$$Type): void
 "afterServerLoad"(): void
 "beforeServerStop"(): void
 "removeNetworkElementPre"(arg0: $INetworkElement$$Type): boolean
 "removeNetworkElementPost"(arg0: $INetworkElement$$Type, arg1: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFullNetworkListener$$Type = ($IFullNetworkListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFullNetworkListener_ = $IFullNetworkListener$$Type;
}}
declare module "org.cyclops.integrateddynamics.item.ItemOnTheDynamicsOfIntegration" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemLocation, $ItemLocation$$Type} from "org.cyclops.cyclopscore.inventory.ItemLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ItemGui, $ItemGui$$Type} from "org.cyclops.cyclopscore.item.ItemGui"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$PlayerEvent$PlayerLoggedInEvent, $PlayerEvent$PlayerLoggedInEvent$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent"

export class $ItemOnTheDynamicsOfIntegration extends $ItemGui {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getContainer"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemLocation$$Type): $MenuProvider
public "getContainerClass"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type): $Class<($AbstractContainerMenu)>
public "onPlayerLoggedIn"(arg0: $PlayerEvent$PlayerLoggedInEvent$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOnTheDynamicsOfIntegration$$Type = ($ItemOnTheDynamicsOfIntegration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemOnTheDynamicsOfIntegration_ = $ItemOnTheDynamicsOfIntegration$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.IIdentifiableNetworkElement" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $IIdentifiableNetworkElement {

 "getId"(): integer
 "getGroup"(): $ResourceLocation
get "id"(): integer
get "group"(): $ResourceLocation
}

export namespace $IIdentifiableNetworkElement {
const probejs$$marker: never
}
export class $IIdentifiableNetworkElement$$Static implements $IIdentifiableNetworkElement {


 "getId"(): integer
 "getGroup"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIdentifiableNetworkElement$$Type = ($IIdentifiableNetworkElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIdentifiableNetworkElement_ = $IIdentifiableNetworkElement$$Type;
}}
declare module "org.cyclops.commoncapabilities.api.ingredient.storage.IIngredientComponentStorageWrapperHandler" {
import {$IngredientComponent, $IngredientComponent$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientComponent"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IIngredientComponentStorage, $IIngredientComponentStorage$$Type} from "org.cyclops.commoncapabilities.api.ingredient.storage.IIngredientComponentStorage"
import {$ICapabilityGetter, $ICapabilityGetter$$Type} from "org.cyclops.commoncapabilities.api.ingredient.capability.ICapabilityGetter"

export interface $IIngredientComponentStorageWrapperHandler<T, M, S, C> {

 "getStorage"(arg0: $ICapabilityGetter$$Type<(C)>, arg1: C): $Optional<(S)>
 "getComponent"(): $IngredientComponent<(T), (M)>
 "wrapStorage"(arg0: $IIngredientComponentStorage$$Type<(T), (M)>): S
 "getComponentStorage"(arg0: $ICapabilityGetter$$Type<(C)>, arg1: C): $IIngredientComponentStorage<(T), (M)>
 "wrapComponentStorage"(arg0: S): $IIngredientComponentStorage<(T), (M)>
get "component"(): $IngredientComponent<(T), (M)>
}

export namespace $IIngredientComponentStorageWrapperHandler {
const probejs$$marker: never
}
export class $IIngredientComponentStorageWrapperHandler$$Static<T, M, S, C> implements $IIngredientComponentStorageWrapperHandler {


 "getStorage"(arg0: $ICapabilityGetter$$Type<(C)>, arg1: C): $Optional<(S)>
 "getComponent"(): $IngredientComponent<(T), (M)>
 "wrapStorage"(arg0: $IIngredientComponentStorage$$Type<(T), (M)>): S
 "getComponentStorage"(arg0: $ICapabilityGetter$$Type<(C)>, arg1: C): $IIngredientComponentStorage<(T), (M)>
 "wrapComponentStorage"(arg0: S): $IIngredientComponentStorage<(T), (M)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientComponentStorageWrapperHandler$$Type<T, M, S, C> = ($IIngredientComponentStorageWrapperHandler<(T), (M), (S), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientComponentStorageWrapperHandler_<T, M, S, C> = $IIngredientComponentStorageWrapperHandler$$Type<(T), (M), (S), (C)>;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalCraftingPlan" {
import {$ITerminalCraftingPlanFlat, $ITerminalCraftingPlanFlat$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalCraftingPlanFlat"
import {$List, $List$$Type} from "java.util.List"
import {$TerminalCraftingJobStatus, $TerminalCraftingJobStatus$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.crafting.TerminalCraftingJobStatus"
import {$IPrototypedIngredient, $IPrototypedIngredient$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IPrototypedIngredient"

export interface $ITerminalCraftingPlan<I> {

 "getChannel"(): integer
 "setError"(arg0: StringJS): void
 "flatten"(): $ITerminalCraftingPlanFlat<(I)>
 "getId"(): I
 "getOutputs"(): $List<($IPrototypedIngredient<(any), (any)>)>
 "getStatus"(): $TerminalCraftingJobStatus
 "getUnlocalizedLabel"(): StringJS
 "getCraftingQuantity"(): long
 "getStorageIngredients"(): $List<($IPrototypedIngredient<(any), (any)>)>
 "getInitiatorName"(): StringJS
 "getTickDuration"(): long
 "getDependencies"(): $List<($ITerminalCraftingPlan<(I)>)>
 "getLastMissingIngredients"(): $List<($List<($IPrototypedIngredient<(any), (any)>)>)>
get "channel"(): integer
set "error"(value: StringJS)
get "id"(): I
get "outputs"(): $List<($IPrototypedIngredient<(any), (any)>)>
get "status"(): $TerminalCraftingJobStatus
get "unlocalizedLabel"(): StringJS
get "craftingQuantity"(): long
get "storageIngredients"(): $List<($IPrototypedIngredient<(any), (any)>)>
get "initiatorName"(): StringJS
get "tickDuration"(): long
get "dependencies"(): $List<($ITerminalCraftingPlan<(I)>)>
get "lastMissingIngredients"(): $List<($List<($IPrototypedIngredient<(any), (any)>)>)>
}

export namespace $ITerminalCraftingPlan {
const probejs$$marker: never
}
export class $ITerminalCraftingPlan$$Static<I> implements $ITerminalCraftingPlan {


 "getChannel"(): integer
 "setError"(arg0: StringJS): void
 "flatten"(): $ITerminalCraftingPlanFlat<(I)>
 "getId"(): I
 "getOutputs"(): $List<($IPrototypedIngredient<(any), (any)>)>
 "getStatus"(): $TerminalCraftingJobStatus
 "getUnlocalizedLabel"(): StringJS
 "getCraftingQuantity"(): long
 "getStorageIngredients"(): $List<($IPrototypedIngredient<(any), (any)>)>
 "getInitiatorName"(): StringJS
 "getTickDuration"(): long
 "getDependencies"(): $List<($ITerminalCraftingPlan<(I)>)>
 "getLastMissingIngredients"(): $List<($List<($IPrototypedIngredient<(any), (any)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalCraftingPlan$$Type<I> = ($ITerminalCraftingPlan<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalCraftingPlan_<I> = $ITerminalCraftingPlan$$Type<(I)>;
}}
declare module "org.cyclops.integrateddynamics.core.helper.PartHelpers$PartStateHolder" {
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"

export class $PartHelpers$PartStateHolder<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>> {

constructor(arg0: $IPartType$$Type<(P), (S)>, arg1: S)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $IPartType$$Type<(any), (any)>, arg1: $IPartState$$Type<(any)>): $PartHelpers$PartStateHolder<(any), (any)>
public "getState"(): S
public "getPart"(): $IPartType<(P), (S)>
get "state"(): S
get "part"(): $IPartType<(P), (S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartHelpers$PartStateHolder$$Type<P, S> = ($PartHelpers$PartStateHolder<(P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartHelpers$PartStateHolder_<P, S> = $PartHelpers$PartStateHolder$$Type<(P), (S)>;
}}
declare module "org.cyclops.integrateddynamics.item.ItemBlockDelay" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$ItemBlockNBT, $ItemBlockNBT$$Type} from "org.cyclops.cyclopscore.item.ItemBlockNBT"

export class $ItemBlockDelay extends $ItemBlockNBT {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockDelay$$Type = ($ItemBlockDelay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockDelay_ = $ItemBlockDelay$$Type;
}}
declare module "org.cyclops.cyclopscore.modcompat.IModCompat" {
import {$IExternalCompat, $IExternalCompat$$Type} from "org.cyclops.cyclopscore.modcompat.IExternalCompat"
import {$ICompatInitializer, $ICompatInitializer$$Type} from "org.cyclops.cyclopscore.modcompat.ICompatInitializer"

export interface $IModCompat extends $IExternalCompat {

 "getModId"(): StringJS
 "getComment"(): StringJS
 "getId"(): StringJS
 "isEnabledDefault"(): boolean
 "createInitializer"(): $ICompatInitializer
get "modId"(): StringJS
get "comment"(): StringJS
get "id"(): StringJS
get "enabledDefault"(): boolean
}

export namespace $IModCompat {
const probejs$$marker: never
}
export class $IModCompat$$Static implements $IModCompat {


 "getModId"(): StringJS
 "getComment"(): StringJS
 "getId"(): StringJS
 "isEnabledDefault"(): boolean
 "createInitializer"(): $ICompatInitializer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModCompat$$Type = ($IModCompat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModCompat_ = $IModCompat$$Type;
}}
declare module "org.cyclops.cyclopscore.blockentity.CyclopsBlockEntity" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$CyclopsBlockEntityCommon, $CyclopsBlockEntityCommon$$Type} from "org.cyclops.cyclopscore.blockentity.CyclopsBlockEntityCommon"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

/**
 * 
 * @deprecated
 */
export class $CyclopsBlockEntity extends $CyclopsBlockEntityCommon {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "onUpdateReceived"(): void
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CyclopsBlockEntity$$Type = ($CyclopsBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CyclopsBlockEntity_ = $CyclopsBlockEntity$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.IPartType" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PartRenderPosition, $PartRenderPosition$$Type} from "org.cyclops.integrateddynamics.api.part.PartRenderPosition"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$DimPos, $DimPos$$Type} from "org.cyclops.cyclopscore.datastructure.DimPos"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPartContainer, $IPartContainer$$Type} from "org.cyclops.integrateddynamics.api.part.IPartContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$INetworkEventListener, $INetworkEventListener$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkEventListener"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IPartNetworkElement, $IPartNetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetworkElement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$INetworkElement, $INetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElement"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$PartPos, $PartPos$$Type} from "org.cyclops.integrateddynamics.api.part.PartPos"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$INetworkEvent, $INetworkEvent$$Type} from "org.cyclops.integrateddynamics.api.network.event.INetworkEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export interface $IPartType<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>> extends $INetworkEventListener<($IPartNetworkElement<(P), (S)>)> {

 "getTarget"(arg0: $PartPos$$Type, arg1: S): $PartTarget
 "getTargetOffset"(arg0: S): $Vec3i
 "getChannel"(arg0: S): integer
 "getItem"(): $Item
 "isUpdate"(arg0: S): boolean
 "update"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "isEnabled"(arg0: S): boolean
 "getPriority"(arg0: S): integer
 "getState"(arg0: $ValueDeseralizationContext$$Type, arg1: $ItemStack$$Type): S
 "toNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type, arg2: S): void
 "isSolid"(arg0: S): boolean
 "updateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S, arg3: $RandomSource$$Type): void
 "getUniqueName"(): $ResourceLocation
 "setEnabled"(arg0: S, arg1: boolean): void
 "getBlockState"(arg0: $IPartContainer$$Type, arg1: $Direction$$Type): $BlockState
 "getItemStack"(arg0: $ValueDeseralizationContext$$Type, arg1: S, arg2: boolean): $ItemStack
 "addDrops"(arg0: $PartTarget$$Type, arg1: S, arg2: $List$$Type<($ItemStack$$Type)>, arg3: boolean, arg4: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onPostRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "postUpdate"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: boolean): void
 "loadTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "loadTooltip"(arg0: S, arg1: $List$$Type<($Component$$Type)>): void
 "fromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): S
 "getBlockModelPath"(): $ResourceLocation
 "getPartRenderPosition"(): $PartRenderPosition
 "getUpdateInterval"(arg0: S): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: integer, arg5: integer): void
 "supportsOffsets"(): boolean
 "setTargetOffset"(arg0: S, arg1: $PartPos$$Type, arg2: $Vec3i$$Type): boolean
 "setTargetSideOverride"(arg0: S, arg1: $Direction$$Type): void
 "getTargetSideOverride"(arg0: S): $Direction
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "afterNetworkAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkAddition"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "createNetworkElement"(arg0: $IPartContainer$$Type, arg1: $DimPos$$Type, arg2: $Direction$$Type): $INetworkElement
 "onPartActivated"(arg0: S, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $ItemStack$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
 "getBaseBlockState"(): $BlockState
 "onBlockNeighborChange"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: $BlockGetter$$Type, arg5: $Block$$Type, arg6: $BlockPos$$Type): void
 "getConsumptionRate"(arg0: S): integer
 "forceLightTransparency"(arg0: S): boolean
 "getContainerProvider"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "afterNetworkReAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "writeExtraGuiData"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "getTranslationKey"(): StringJS
 "setUpdateInterval"(arg0: S, arg1: integer): void
 "getCloneItemStack"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S): $ItemStack
 "defaultBlockState"(): S
 "onOffsetVariablesChanged"(arg0: $PartTarget$$Type, arg1: S): void
 "getMinimumUpdateInterval"(arg0: S): integer
 "shouldTriggerBlockRenderUpdate"(arg0: S, arg1: S): boolean
 "getContainerProviderSettings"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "getContainerProviderOffsets"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "writeExtraGuiDataSettings"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "writeExtraGuiDataOffsets"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "onEvent"(arg0: $INetworkEvent$$Type, arg1: $IPartNetworkElement$$Type<(P), (S)>): void
 "hasEventSubscriptions"(): boolean
 "getSubscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
get "item"(): $Item
get "uniqueName"(): $ResourceLocation
get "blockModelPath"(): $ResourceLocation
get "partRenderPosition"(): $PartRenderPosition
get "baseBlockState"(): $BlockState
get "translationKey"(): StringJS
get "subscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
}

export namespace $IPartType {
const probejs$$marker: never
}
export class $IPartType$$Static<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>> implements $IPartType {


 "getTarget"(arg0: $PartPos$$Type, arg1: S): $PartTarget
 "getTargetOffset"(arg0: S): $Vec3i
 "getChannel"(arg0: S): integer
 "getItem"(): $Item
 "isUpdate"(arg0: S): boolean
 "update"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "isEnabled"(arg0: S): boolean
 "getPriority"(arg0: S): integer
 "getState"(arg0: $ValueDeseralizationContext$$Type, arg1: $ItemStack$$Type): S
 "toNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type, arg2: S): void
 "isSolid"(arg0: S): boolean
 "updateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S, arg3: $RandomSource$$Type): void
 "getUniqueName"(): $ResourceLocation
 "setEnabled"(arg0: S, arg1: boolean): void
 "getBlockState"(arg0: $IPartContainer$$Type, arg1: $Direction$$Type): $BlockState
 "getItemStack"(arg0: $ValueDeseralizationContext$$Type, arg1: S, arg2: boolean): $ItemStack
 "addDrops"(arg0: $PartTarget$$Type, arg1: S, arg2: $List$$Type<($ItemStack$$Type)>, arg3: boolean, arg4: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onPostRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "postUpdate"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: boolean): void
 "loadTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "loadTooltip"(arg0: S, arg1: $List$$Type<($Component$$Type)>): void
 "fromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): S
 "getBlockModelPath"(): $ResourceLocation
 "getPartRenderPosition"(): $PartRenderPosition
 "getUpdateInterval"(arg0: S): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: integer, arg5: integer): void
 "supportsOffsets"(): boolean
 "setTargetOffset"(arg0: S, arg1: $PartPos$$Type, arg2: $Vec3i$$Type): boolean
 "setTargetSideOverride"(arg0: S, arg1: $Direction$$Type): void
 "getTargetSideOverride"(arg0: S): $Direction
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "afterNetworkAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkAddition"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "createNetworkElement"(arg0: $IPartContainer$$Type, arg1: $DimPos$$Type, arg2: $Direction$$Type): $INetworkElement
 "onPartActivated"(arg0: S, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $ItemStack$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
 "getBaseBlockState"(): $BlockState
 "onBlockNeighborChange"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: $BlockGetter$$Type, arg5: $Block$$Type, arg6: $BlockPos$$Type): void
 "getConsumptionRate"(arg0: S): integer
 "forceLightTransparency"(arg0: S): boolean
 "getContainerProvider"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "afterNetworkReAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "writeExtraGuiData"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "getTranslationKey"(): StringJS
 "setUpdateInterval"(arg0: S, arg1: integer): void
 "getCloneItemStack"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S): $ItemStack
 "defaultBlockState"(): S
 "onOffsetVariablesChanged"(arg0: $PartTarget$$Type, arg1: S): void
 "getMinimumUpdateInterval"(arg0: S): integer
 "shouldTriggerBlockRenderUpdate"(arg0: S, arg1: S): boolean
 "getContainerProviderSettings"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "getContainerProviderOffsets"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "writeExtraGuiDataSettings"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "writeExtraGuiDataOffsets"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "onEvent"(arg0: $INetworkEvent$$Type, arg1: $IPartNetworkElement$$Type<(P), (S)>): void
 "hasEventSubscriptions"(): boolean
 "getSubscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartType$$Type<P, S> = ($IPartType<(P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartType_<P, S> = $IPartType$$Type<(P), (S)>;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.ByteSequence" {
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"

export interface $ByteSequence {

 "toByteArray"(): (byte)[]
 "length"(): integer
 "bytes"(): $IntStream
 "subSequence"(startIndex: integer, endIndex: integer): $ByteSequence
 "byteAt"(index: integer): byte
}

export namespace $ByteSequence {
function create(buffer: (byte)[]): $ByteSequence
const probejs$$marker: never
}
export class $ByteSequence$$Static implements $ByteSequence {


static "create"(buffer: (byte)[]): $ByteSequence
 "toByteArray"(): (byte)[]
 "length"(): integer
 "bytes"(): $IntStream
 "subSequence"(startIndex: integer, endIndex: integer): $ByteSequence
 "byteAt"(index: integer): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteSequence$$Type = ($ByteSequence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteSequence_ = $ByteSequence$$Type;
}}
declare module "org.cyclops.cyclopscore.inventory.container.button.IContainerButtonAction" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"

export interface $IContainerButtonAction<C extends $AbstractContainerMenu> {

 "onAction"(arg0: StringJS, arg1: C): void

(arg0: StringJS, arg1: C): void
}

export namespace $IContainerButtonAction {
const probejs$$marker: never
}
export class $IContainerButtonAction$$Static<C extends $AbstractContainerMenu> implements $IContainerButtonAction {


 "onAction"(arg0: StringJS, arg1: C): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerButtonAction$$Type<C> = ((arg0: StringJS, arg1: C) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerButtonAction_<C> = $IContainerButtonAction$$Type<(C)>;
}}
declare module "org.cyclops.cyclopscore.helper.IRegistrationHelpers" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $IRegistrationHelpers {

 "createSpawnEgg"(arg0: $Supplier$$Type<($EntityType$$Type<($Mob$$Type)>)>, arg1: integer, arg2: integer, arg3: $Item$Properties$$Type): $Item

(arg0: $Supplier<($EntityType$$Type<($Mob$$Type)>)>, arg1: integer, arg2: integer, arg3: $Item$Properties): $Item$$Type
}

export namespace $IRegistrationHelpers {
const probejs$$marker: never
}
export class $IRegistrationHelpers$$Static implements $IRegistrationHelpers {


 "createSpawnEgg"(arg0: $Supplier$$Type<($EntityType$$Type<($Mob$$Type)>)>, arg1: integer, arg2: integer, arg3: $Item$Properties$$Type): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRegistrationHelpers$$Type = ((arg0: $Supplier<($EntityType<($Mob)>)>, arg1: integer, arg2: integer, arg3: $Item$Properties) => $Item$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRegistrationHelpers_ = $IRegistrationHelpers$$Type;
}}
declare module "org.cyclops.integrateddynamics.item.ItemVariable" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IVariableFacade, $IVariableFacade$$Type} from "org.cyclops.integrateddynamics.api.item.IVariableFacade"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$IClientItemExtensions, $IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemVariable extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "getVariableFacade"(arg0: $ValueDeseralizationContext$$Type, arg1: $ItemStack$$Type): $IVariableFacade
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVariable$$Type = ($ItemVariable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemVariable_ = $ItemVariable$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.IEventListenableNetworkElement" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$INetworkElement, $INetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$INetworkEventListener, $INetworkEventListener$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IEventListenableNetworkElement<D extends $INetworkEventListener<(any)>> extends $INetworkElement {

 "getNetworkEventListener"(): $Optional<(D)>
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$$Type): void
 "isUpdate"(): boolean
 "update"(arg0: $INetwork$$Type): void
 "getPriority"(): integer
 "canRevalidate"(arg0: $INetwork$$Type): boolean
 "revalidate"(arg0: $INetwork$$Type): void
/**
 * 
 * @deprecated
 */
 "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean, arg2: boolean): void
 "addDrops"(arg0: $BlockState$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean, arg3: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type): void
 "onPostRemoved"(arg0: $INetwork$$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$$Type, arg1: $BlockGetter$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type): void
 "getUpdateInterval"(): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "beforeNetworkKill"(arg0: $INetwork$$Type): void
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkAlive"(arg0: $INetwork$$Type): void
 "onNetworkAddition"(arg0: $INetwork$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onNetworkRemoval"(arg0: $INetwork$$Type): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$$Type): void
 "compareTo"(arg0: $INetworkElement$$Type): integer
get "networkEventListener"(): $Optional<(D)>
get "channel"(): integer
get "priority"(): integer
get "updateInterval"(): integer
}

export namespace $IEventListenableNetworkElement {
const probejs$$marker: never
}
export class $IEventListenableNetworkElement$$Static<D extends $INetworkEventListener<(any)>> implements $IEventListenableNetworkElement {


 "getNetworkEventListener"(): $Optional<(D)>
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$$Type): void
 "isUpdate"(): boolean
 "update"(arg0: $INetwork$$Type): void
 "getPriority"(): integer
 "canRevalidate"(arg0: $INetwork$$Type): boolean
 "revalidate"(arg0: $INetwork$$Type): void
/**
 * 
 * @deprecated
 */
 "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean, arg2: boolean): void
 "addDrops"(arg0: $BlockState$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean, arg3: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type): void
 "onPostRemoved"(arg0: $INetwork$$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$$Type, arg1: $BlockGetter$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type): void
 "getUpdateInterval"(): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "beforeNetworkKill"(arg0: $INetwork$$Type): void
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkAlive"(arg0: $INetwork$$Type): void
 "onNetworkAddition"(arg0: $INetwork$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onNetworkRemoval"(arg0: $INetwork$$Type): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$$Type): void
 "compareTo"(arg0: $INetworkElement$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventListenableNetworkElement$$Type<D> = ($IEventListenableNetworkElement<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventListenableNetworkElement_<D> = $IEventListenableNetworkElement$$Type<(D)>;
}}
declare module "org.cyclops.integratedterminals.client.gui.container.ContainerScreenTerminalStorage" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$$Type} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ITerminalStorageTabClient, $ITerminalStorageTabClient$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabClient"
import {$WidgetTextFieldExtended, $WidgetTextFieldExtended$$Type} from "org.cyclops.cyclopscore.client.gui.component.input.WidgetTextFieldExtended"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ContainerScreenExtended, $ContainerScreenExtended$$Type} from "org.cyclops.cyclopscore.client.gui.container.ContainerScreenExtended"
import {$AbstractContainerScreen, $AbstractContainerScreen$$Type} from "net.minecraft.client.gui.screens.inventory.AbstractContainerScreen"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerTerminalStorageBase, $ContainerTerminalStorageBase$$Type} from "org.cyclops.integratedterminals.inventory.container.ContainerTerminalStorageBase"
import {$Rect2i, $Rect2i$$Type} from "net.minecraft.client.renderer.Rect2i"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export class $ContainerScreenTerminalStorage<L, C extends $ContainerTerminalStorageBase<(L)>> extends $ContainerScreenExtended<(C)> {
 "leftPos": integer
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "clickedSlot": $Slot
 "title": $Component
readonly "renderables": $List<($Renderable)>
 "hoveredSlot": $Slot
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "isSplittingStack": boolean
static readonly "INVENTORY_LOCATION": $ResourceLocation
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "imageWidth": integer
 "draggingItem": $ItemStack
static readonly "SLOT_ITEM_BLIT_OFFSET": integer
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
static readonly "FOOTER_SEPARATOR": $ResourceLocation
 "imageHeight": integer
 "quickCraftingType": integer
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "topPos": integer
 "font": $Font

constructor(arg0: C, arg1: $Inventory$$Type, arg2: $Component$$Type)

public "init"(): void
public "containerTick"(): void
public "getMenu"(): $AbstractContainerMenu
public "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
public "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "charTyped"(arg0: character, arg1: integer): boolean
public "getGridXSize"(): integer
public "getSearchWidth"(): integer
public "getGridYSize"(): integer
public "getBaseXSize"(): integer
public "getBaseYSize"(): integer
public static "blitRescalable"(arg0: $GuiGraphics$$Type, arg1: $ResourceLocation$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
public "getFieldSearch"(): $WidgetTextFieldExtended
public "getSlotUnderMouse"(): $Slot
public "getScrollHeight"(): integer
public "getStorageSlotRect"(arg0: integer): $Rect2i
public "getSelectedClientTab"(): $Optional<($ITerminalStorageTabClient<(any)>)>
public "repositionInventorySlots"(): void
public "getStorageSlotIndexAtPosition"(arg0: double, arg1: double): integer
public static "draw"(arg0: $AbstractContainerScreen$$Type<(any)>, arg1: $GuiGraphics$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: integer): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
get "menu"(): $AbstractContainerMenu
get "gridXSize"(): integer
get "searchWidth"(): integer
get "gridYSize"(): integer
get "baseXSize"(): integer
get "baseYSize"(): integer
get "fieldSearch"(): $WidgetTextFieldExtended
get "slotUnderMouse"(): $Slot
get "scrollHeight"(): integer
get "selectedClientTab"(): $Optional<($ITerminalStorageTabClient<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenTerminalStorage$$Type<L, C> = ($ContainerScreenTerminalStorage<(L), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerScreenTerminalStorage_<L, C> = $ContainerScreenTerminalStorage$$Type<(L), (C)>;
}}
declare module "org.cyclops.cyclopscore.helper.ILocationHelpers" {
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ILocationHelpers {

 "fromArray"(arg0: (integer)[]): $BlockPos
 "subtract"(arg0: $Vec3i$$Type, arg1: $Vec3i$$Type): $Vec3i
 "subtract"(arg0: $BlockPos$$Type, arg1: $Vec3i$$Type): $BlockPos
 "toArray"(arg0: $Vec3i$$Type): (integer)[]
 "getYaw"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): double
 "getPitch"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): double
 "copyLocation"(arg0: $Vec3i$$Type): $Vec3i
 "copyLocation"(arg0: $BlockPos$$Type): $BlockPos
 "addToDimension"(arg0: $BlockPos$$Type, arg1: integer, arg2: integer): $BlockPos
 "getRandomPointInSphere"(arg0: $BlockPos$$Type, arg1: integer): $BlockPos
 "toCompactString"(arg0: $BlockPos$$Type): StringJS
 "toCompactString"(arg0: $Vec3i$$Type): StringJS
}

export namespace $ILocationHelpers {
const probejs$$marker: never
}
export class $ILocationHelpers$$Static implements $ILocationHelpers {


 "fromArray"(arg0: (integer)[]): $BlockPos
 "subtract"(arg0: $Vec3i$$Type, arg1: $Vec3i$$Type): $Vec3i
 "subtract"(arg0: $BlockPos$$Type, arg1: $Vec3i$$Type): $BlockPos
 "toArray"(arg0: $Vec3i$$Type): (integer)[]
 "getYaw"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): double
 "getPitch"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): double
 "copyLocation"(arg0: $Vec3i$$Type): $Vec3i
 "copyLocation"(arg0: $BlockPos$$Type): $BlockPos
 "addToDimension"(arg0: $BlockPos$$Type, arg1: integer, arg2: integer): $BlockPos
 "getRandomPointInSphere"(arg0: $BlockPos$$Type, arg1: integer): $BlockPos
 "toCompactString"(arg0: $BlockPos$$Type): StringJS
 "toCompactString"(arg0: $Vec3i$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILocationHelpers$$Type = ($ILocationHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILocationHelpers_ = $ILocationHelpers$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ValueDeseralizationContext extends $Record {

constructor(holderLookupProvider: $HolderLookup$Provider$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $HolderLookup$Provider$$Type): $ValueDeseralizationContext
public static "of"(arg0: $Level$$Type): $ValueDeseralizationContext
public static "ofClient"(): $ValueDeseralizationContext
public static "ofAllEnabled"(): $ValueDeseralizationContext
public "holderLookupProvider"(): $HolderLookup$Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueDeseralizationContext$$Type = ({"holderLookupProvider"?: $HolderLookup$Provider$$Type}) | ([holderLookupProvider?: $HolderLookup$Provider$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueDeseralizationContext_ = $ValueDeseralizationContext$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.read.IPartStateReader" {
import {$IAspectRead, $IAspectRead$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspectRead"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IAspect, $IAspect$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspect"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IAspectProperties, $IAspectProperties$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.property.IAspectProperties"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$PartCapability, $PartCapability$$Type} from "org.cyclops.integrateddynamics.api.part.PartCapability"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$IAspectVariable, $IAspectVariable$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspectVariable"
import {$IPartTypeReader, $IPartTypeReader$$Type} from "org.cyclops.integrateddynamics.api.part.read.IPartTypeReader"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export interface $IPartStateReader<P extends $IPartTypeReader<(any), (any)>> extends $IPartState<(P)> {

 "setVariable"(arg0: $IAspect$$Type<(any), (any)>, arg1: $IAspectVariable$$Type<(any)>): void
 "getVariable"<V extends $IValue, T extends $IValueType<(V)>>(arg0: $IAspectRead$$Type<(V), (T)>): $IAspectVariable<(V)>
 "resetVariables"(): void
 "getTargetOffset"(): $Vec3i
 "getChannel"(): integer
 "isEnabled"(): boolean
/**
 * 
 * @deprecated
 */
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getId"(): integer
 "markDirty"(): void
 "getCapability"<T>(arg0: P, arg1: $PartCapability$$Type<(T)>, arg2: $INetwork$$Type, arg3: $IPartNetwork$$Type, arg4: $PartTarget$$Type): $Optional<(T)>
 "setEnabled"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
 "setChannel"(arg0: integer): void
 "generateId"(): void
 "getMaxOffset"(): integer
 "setMaxOffset"(arg0: integer): void
 "writeToNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
 "readFromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
 "getUpdateInterval"(): integer
 "setTargetOffset"(arg0: $Vec3i$$Type): void
 "setTargetSideOverride"(arg0: $Direction$$Type): void
 "getTargetSideOverride"(): $Direction
 "gatherCapabilities"(arg0: P): void
 "setUpdateInterval"(arg0: integer): void
 "isForceBlockRenderUpdateAndReset"(): boolean
 "getInventoryNamed"(arg0: StringJS): $NonNullList<($ItemStack)>
 "updateOffsetVariables"(arg0: P, arg1: $INetwork$$Type, arg2: $IPartNetwork$$Type, arg3: $PartTarget$$Type): void
 "getInventoriesNamed"(): $Map<(StringJS), ($NonNullList<($ItemStack)>)>
 "clearInventoriesNamed"(): void
 "initializeOffsets"(arg0: $PartTarget$$Type): void
 "isDirtyAndReset"(): boolean
 "isUpdateAndReset"(): boolean
 "forceBlockRenderUpdate"(): void
 "getAspectProperties"(arg0: $IAspect$$Type<(any), (any)>): $IAspectProperties
 "setAspectProperties"(arg0: $IAspect$$Type<(any), (any)>, arg1: $IAspectProperties$$Type): void
 "addVolatileCapability"<T>(arg0: $PartCapability$$Type<(T)>, arg1: $Optional$$Type<(T)>): void
 "loadInventoryNamed"(arg0: StringJS, arg1: $Container$$Type): void
 "saveInventoryNamed"(arg0: StringJS, arg1: $Container$$Type): void
 "setInventoryNamed"(arg0: StringJS, arg1: $NonNullList$$Type<($ItemStack$$Type)>): void
 "getOffsetVariableError"(arg0: integer): $MutableComponent
 "requiresOffsetUpdates"(): boolean
 "markOffsetVariablesChanged"(): void
 "removeVolatileCapability"(arg0: $PartCapability$$Type<(any)>): void
get "targetOffset"(): $Vec3i
get "channel"(): integer
get "enabled"(): boolean
set "priority"(value: integer)
get "priority"(): integer
get "id"(): integer
set "enabled"(value: boolean)
set "channel"(value: integer)
get "maxOffset"(): integer
set "maxOffset"(value: integer)
get "updateInterval"(): integer
set "targetOffset"(value: $Vec3i$$Type)
set "targetSideOverride"(value: $Direction$$Type)
get "targetSideOverride"(): $Direction
set "updateInterval"(value: integer)
get "forceBlockRenderUpdateAndReset"(): boolean
get "inventoriesNamed"(): $Map<(StringJS), ($NonNullList<($ItemStack)>)>
get "dirtyAndReset"(): boolean
get "updateAndReset"(): boolean
}

export namespace $IPartStateReader {
const probejs$$marker: never
}
export class $IPartStateReader$$Static<P extends $IPartTypeReader<(any), (any)>> implements $IPartStateReader {


 "setVariable"(arg0: $IAspect$$Type<(any), (any)>, arg1: $IAspectVariable$$Type<(any)>): void
 "getVariable"<V extends $IValue, T extends $IValueType<(V)>>(arg0: $IAspectRead$$Type<(V), (T)>): $IAspectVariable<(V)>
 "resetVariables"(): void
 "getTargetOffset"(): $Vec3i
 "getChannel"(): integer
 "isEnabled"(): boolean
/**
 * 
 * @deprecated
 */
 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getId"(): integer
 "markDirty"(): void
 "getCapability"<T>(arg0: P, arg1: $PartCapability$$Type<(T)>, arg2: $INetwork$$Type, arg3: $IPartNetwork$$Type, arg4: $PartTarget$$Type): $Optional<(T)>
 "setEnabled"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
 "setChannel"(arg0: integer): void
 "generateId"(): void
 "getMaxOffset"(): integer
 "setMaxOffset"(arg0: integer): void
 "writeToNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
 "readFromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
 "getUpdateInterval"(): integer
 "setTargetOffset"(arg0: $Vec3i$$Type): void
 "setTargetSideOverride"(arg0: $Direction$$Type): void
 "getTargetSideOverride"(): $Direction
 "gatherCapabilities"(arg0: P): void
 "setUpdateInterval"(arg0: integer): void
 "isForceBlockRenderUpdateAndReset"(): boolean
 "getInventoryNamed"(arg0: StringJS): $NonNullList<($ItemStack)>
 "updateOffsetVariables"(arg0: P, arg1: $INetwork$$Type, arg2: $IPartNetwork$$Type, arg3: $PartTarget$$Type): void
 "getInventoriesNamed"(): $Map<(StringJS), ($NonNullList<($ItemStack)>)>
 "clearInventoriesNamed"(): void
 "initializeOffsets"(arg0: $PartTarget$$Type): void
 "isDirtyAndReset"(): boolean
 "isUpdateAndReset"(): boolean
 "forceBlockRenderUpdate"(): void
 "getAspectProperties"(arg0: $IAspect$$Type<(any), (any)>): $IAspectProperties
 "setAspectProperties"(arg0: $IAspect$$Type<(any), (any)>, arg1: $IAspectProperties$$Type): void
 "addVolatileCapability"<T>(arg0: $PartCapability$$Type<(T)>, arg1: $Optional$$Type<(T)>): void
 "loadInventoryNamed"(arg0: StringJS, arg1: $Container$$Type): void
 "saveInventoryNamed"(arg0: StringJS, arg1: $Container$$Type): void
 "setInventoryNamed"(arg0: StringJS, arg1: $NonNullList$$Type<($ItemStack$$Type)>): void
 "getOffsetVariableError"(arg0: integer): $MutableComponent
 "requiresOffsetUpdates"(): boolean
 "markOffsetVariablesChanged"(): void
 "removeVolatileCapability"(arg0: $PartCapability$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartStateReader$$Type<P> = ($IPartStateReader<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartStateReader_<P> = $IPartStateReader$$Type<(P)>;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.ResourceLimits" {
import {$ResourceLimits$Builder, $ResourceLimits$Builder$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.ResourceLimits$Builder"

export class $ResourceLimits {


public static "newBuilder"(): $ResourceLimits$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLimits$$Type = ($ResourceLimits);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceLimits_ = $ResourceLimits$$Type;
}}
declare module "org.cyclops.cyclopscore.inventory.INBTInventory" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$INBTSerializable, $INBTSerializable$$Type} from "org.cyclops.cyclopscore.persist.nbt.INBTSerializable"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $INBTInventory extends $Container, $INBTSerializable {

 "isEmpty"(): boolean
 "write"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "read"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "getItem"(arg0: integer): $ItemStack
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "setChanged"(): void
 "stillValid"(arg0: $Player$$Type): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "toNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "clearContent"(): void
 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "clear"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "self"(): $Container
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "asContainer"(): $Container
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "clear"(arg0: $ItemPredicate$$Type): void
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
 "count"(arg0: $ItemPredicate$$Type): integer
 "isEmpty"(): boolean
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
set "transferCooldown"(value: long)
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export namespace $INBTInventory {
function stillValidBlockEntity(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
function stillValidBlockEntity(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
function tryClear(arg0: any): void
const probejs$$marker: never
}
export class $INBTInventory$$Static implements $INBTInventory {


 "isEmpty"(): boolean
 "write"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "read"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "getItem"(arg0: integer): $ItemStack
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "setChanged"(): void
 "stillValid"(arg0: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "toNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "clearContent"(): void
static "tryClear"(arg0: any): void
 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "clear"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "self"(): $Container
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "asContainer"(): $Container
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "clear"(arg0: $ItemPredicate$$Type): void
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
 "count"(arg0: $ItemPredicate$$Type): integer
 "isEmpty"(): boolean
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTInventory$$Type = ($INBTInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTInventory_ = $INBTInventory$$Type;
}}
declare module "org.cyclops.cyclopscore.advancement.criterion.GuiContainerOpenTrigger" {
import {$GuiContainerOpenTrigger$Instance, $GuiContainerOpenTrigger$Instance$$Type} from "org.cyclops.cyclopscore.advancement.criterion.GuiContainerOpenTrigger$Instance"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $GuiContainerOpenTrigger extends $SimpleCriterionTrigger<($GuiContainerOpenTrigger$Instance)> {
static readonly "CODEC": $Codec<($GuiContainerOpenTrigger$Instance)>

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Predicate$$Type<($GuiContainerOpenTrigger$Instance)>): void
public "codec"(): $Codec<($GuiContainerOpenTrigger$Instance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiContainerOpenTrigger$$Type = ($GuiContainerOpenTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiContainerOpenTrigger_ = $GuiContainerOpenTrigger$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.event.TerminalStorageTabClientLoadButtonsEvent" {
import {$ContainerTerminalStorageBase, $ContainerTerminalStorageBase$$Type} from "org.cyclops.integratedterminals.inventory.container.ContainerTerminalStorageBase"
import {$List, $List$$Type} from "java.util.List"
import {$ITerminalButton, $ITerminalButton$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalButton"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$ITerminalStorageTabClient, $ITerminalStorageTabClient$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabClient"

export class $TerminalStorageTabClientLoadButtonsEvent extends $Event {

constructor(arg0: $ContainerTerminalStorageBase$$Type<(any)>, arg1: $ITerminalStorageTabClient$$Type<(any)>, arg2: $List$$Type<($ITerminalButton$$Type<(any), (any), (any)>)>)

public "getContainer"(): $ContainerTerminalStorageBase<(any)>
public "getButtons"(): $List<($ITerminalButton<(any), (any), (any)>)>
public "setButtons"(arg0: $List$$Type<($ITerminalButton$$Type<(any), (any), (any)>)>): void
public "getClientTab"(): $ITerminalStorageTabClient<(any)>
get "container"(): $ContainerTerminalStorageBase<(any)>
get "buttons"(): $List<($ITerminalButton<(any), (any), (any)>)>
set "buttons"(value: $List$$Type<($ITerminalButton$$Type<(any), (any), (any)>)>)
get "clientTab"(): $ITerminalStorageTabClient<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalStorageTabClientLoadButtonsEvent$$Type = ($TerminalStorageTabClientLoadButtonsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalStorageTabClientLoadButtonsEvent_ = $TerminalStorageTabClientLoadButtonsEvent$$Type;
}}
declare module "org.cyclops.cyclopscore.command.argument.ArgumentTypeEnum" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $ArgumentTypeEnum<T extends $Enum<(T)>> implements $ArgumentType<(T)> {

constructor(arg0: $Class$$Type<(T)>)

public static "getValue"<T extends $Enum<(T)>>(arg0: $CommandContext$$Type<($CommandSourceStack$$Type)>, arg1: StringJS, arg2: $Class$$Type<(T)>): T
public "parse"(arg0: $StringReader$$Type): T
public "getExamples"(): $Collection<(StringJS)>
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): T
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentTypeEnum$$Type<T> = ($ArgumentTypeEnum<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentTypeEnum_<T> = $ArgumentTypeEnum$$Type<(T)>;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.ITerminalButton" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ITerminalStorageTabCommon, $ITerminalStorageTabCommon$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon"
import {$List, $List$$Type} from "java.util.List"
import {$ITerminalStorageTabClient, $ITerminalStorageTabClient$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabClient"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"

export interface $ITerminalButton<C extends $ITerminalStorageTabClient<(any)>, O extends $ITerminalStorageTabCommon, B extends $Button> {

 "getY"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
 "getX"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
 "createButton"(arg0: integer, arg1: integer): B
 "getTooltip"(arg0: $Player$$Type, arg1: $TooltipFlag$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "isInLeftColumn"(): boolean
 "onClick"(arg0: C, arg1: O, arg2: B, arg3: integer, arg4: integer): void
 "getTranslationKey"(): StringJS
 "reloadFromState"(): void
get "inLeftColumn"(): boolean
get "translationKey"(): StringJS
}

export namespace $ITerminalButton {
const probejs$$marker: never
}
export class $ITerminalButton$$Static<C extends $ITerminalStorageTabClient<(any)>, O extends $ITerminalStorageTabCommon, B extends $Button> implements $ITerminalButton {


 "getY"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
 "getX"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): integer
 "createButton"(arg0: integer, arg1: integer): B
 "getTooltip"(arg0: $Player$$Type, arg1: $TooltipFlag$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "isInLeftColumn"(): boolean
 "onClick"(arg0: C, arg1: O, arg2: B, arg3: integer, arg4: integer): void
 "getTranslationKey"(): StringJS
 "reloadFromState"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalButton$$Type<C, O, B> = ($ITerminalButton<(C), (O), (B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalButton_<C, O, B> = $ITerminalButton$$Type<(C), (O), (B)>;
}}
declare module "org.cyclops.integrateddynamics.api.network.INetworkElementProvider" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$INetworkElement, $INetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElement"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $INetworkElementProvider {

 "createNetworkElements"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $Collection<($INetworkElement)>

(arg0: $Level, arg1: $BlockPos): $Collection$$Type<($INetworkElement$$Type)>
}

export namespace $INetworkElementProvider {
const probejs$$marker: never
}
export class $INetworkElementProvider$$Static implements $INetworkElementProvider {


 "createNetworkElements"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $Collection<($INetworkElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkElementProvider$$Type = ((arg0: $Level, arg1: $BlockPos) => $Collection$$Type<($INetworkElement$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkElementProvider_ = $INetworkElementProvider$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.IPositionedNetworkElement" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$INetworkElement, $INetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElement"
import {$DimPos, $DimPos$$Type} from "org.cyclops.cyclopscore.datastructure.DimPos"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IPositionedNetworkElement extends $INetworkElement {

 "getPosition"(): $DimPos
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$$Type): void
 "isUpdate"(): boolean
 "update"(arg0: $INetwork$$Type): void
 "getPriority"(): integer
 "canRevalidate"(arg0: $INetwork$$Type): boolean
 "revalidate"(arg0: $INetwork$$Type): void
/**
 * 
 * @deprecated
 */
 "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean, arg2: boolean): void
 "addDrops"(arg0: $BlockState$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean, arg3: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type): void
 "onPostRemoved"(arg0: $INetwork$$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$$Type, arg1: $BlockGetter$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type): void
 "getUpdateInterval"(): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "beforeNetworkKill"(arg0: $INetwork$$Type): void
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkAlive"(arg0: $INetwork$$Type): void
 "onNetworkAddition"(arg0: $INetwork$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onNetworkRemoval"(arg0: $INetwork$$Type): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$$Type): void
 "compareTo"(arg0: $INetworkElement$$Type): integer
get "position"(): $DimPos
get "channel"(): integer
get "priority"(): integer
get "updateInterval"(): integer
}

export namespace $IPositionedNetworkElement {
const probejs$$marker: never
}
export class $IPositionedNetworkElement$$Static implements $IPositionedNetworkElement {


 "getPosition"(): $DimPos
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$$Type): void
 "isUpdate"(): boolean
 "update"(arg0: $INetwork$$Type): void
 "getPriority"(): integer
 "canRevalidate"(arg0: $INetwork$$Type): boolean
 "revalidate"(arg0: $INetwork$$Type): void
/**
 * 
 * @deprecated
 */
 "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean, arg2: boolean): void
 "addDrops"(arg0: $BlockState$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean, arg3: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type): void
 "onPostRemoved"(arg0: $INetwork$$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$$Type, arg1: $BlockGetter$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type): void
 "getUpdateInterval"(): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "beforeNetworkKill"(arg0: $INetwork$$Type): void
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkAlive"(arg0: $INetwork$$Type): void
 "onNetworkAddition"(arg0: $INetwork$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onNetworkRemoval"(arg0: $INetwork$$Type): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$$Type): void
 "compareTo"(arg0: $INetworkElement$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPositionedNetworkElement$$Type = ($IPositionedNetworkElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPositionedNetworkElement_ = $IPositionedNetworkElement$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeSerializerSqueezer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RecipeSqueezer$IngredientChance, $RecipeSqueezer$IngredientChance$$Type} from "org.cyclops.integrateddynamics.core.recipe.type.RecipeSqueezer$IngredientChance"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSqueezer, $RecipeSqueezer$$Type} from "org.cyclops.integrateddynamics.core.recipe.type.RecipeSqueezer"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RecipeSerializerSqueezer implements $RecipeSerializer<($RecipeSqueezer)> {
static readonly "CODEC_INGREDIENT_CHANCE": $Codec<($RecipeSqueezer$IngredientChance)>
static readonly "CODEC": $MapCodec<($RecipeSqueezer)>
static readonly "STREAM_CODEC_INGREDIENT_CHANCE": $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeSqueezer$IngredientChance)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeSqueezer)>

constructor()

public "codec"(): $MapCodec<($RecipeSqueezer)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeSqueezer)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerSqueezer$$Type = ($RecipeSerializerSqueezer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerSqueezer_ = $RecipeSerializerSqueezer$$Type;
}}
declare module "org.cyclops.integratedterminals.inventory.container.ContainerTerminalStorageBase$InitTabData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"

export class $ContainerTerminalStorageBase$InitTabData {

constructor(arg0: StringJS, arg1: integer)

public "getChannel"(): integer
public "getTabName"(): StringJS
public "writeToPacketBuffer"(arg0: $FriendlyByteBuf$$Type): void
public static "readFromPacketBuffer"(arg0: $FriendlyByteBuf$$Type): $ContainerTerminalStorageBase$InitTabData
get "channel"(): integer
get "tabName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerTerminalStorageBase$InitTabData$$Type = ($ContainerTerminalStorageBase$InitTabData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerTerminalStorageBase$InitTabData_ = $ContainerTerminalStorageBase$InitTabData$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.aspect.property.IAspectProperties" {
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$IAspectPropertyTypeInstance, $IAspectPropertyTypeInstance$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.property.IAspectPropertyTypeInstance"

export interface $IAspectProperties {

 "removeValue"<T extends $IValueType<(V)>, V extends $IValue>(arg0: $IAspectPropertyTypeInstance$$Type<(T), (V)>): void
 "clone"(): $IAspectProperties
 "getValue"<T extends $IValueType<(V)>, V extends $IValue>(arg0: $IAspectPropertyTypeInstance$$Type<(T), (V)>): V
 "setValue"<T extends $IValueType<(V)>, V extends $IValue>(arg0: $IAspectPropertyTypeInstance$$Type<(T), (V)>, arg1: V): void
 "toNBT"(arg0: $ValueDeseralizationContext$$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
 "getTypes"(): $Collection<($IAspectPropertyTypeInstance)>
 "fromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
get "types"(): $Collection<($IAspectPropertyTypeInstance)>
}

export namespace $IAspectProperties {
const probejs$$marker: never
}
export class $IAspectProperties$$Static implements $IAspectProperties {


 "removeValue"<T extends $IValueType<(V)>, V extends $IValue>(arg0: $IAspectPropertyTypeInstance$$Type<(T), (V)>): void
 "clone"(): $IAspectProperties
 "getValue"<T extends $IValueType<(V)>, V extends $IValue>(arg0: $IAspectPropertyTypeInstance$$Type<(T), (V)>): V
 "setValue"<T extends $IValueType<(V)>, V extends $IValue>(arg0: $IAspectPropertyTypeInstance$$Type<(T), (V)>, arg1: V): void
 "toNBT"(arg0: $ValueDeseralizationContext$$Type): $CompoundTag
/**
 * 
 * @deprecated
 */
 "getTypes"(): $Collection<($IAspectPropertyTypeInstance)>
 "fromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAspectProperties$$Type = ($IAspectProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAspectProperties_ = $IAspectProperties$$Type;
}}
declare module "org.cyclops.cyclopscore.blockentity.IBlockEntityDelayedTickable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockEntityDelayedTickable {

 "sendUpdate"(): void
 "shouldSendUpdate"(): boolean
 "getUpdateBackoffTicks"(): integer
 "unsetSendUpdate"(): void
 "setUpdateBackoff"(arg0: integer): void
 "getUpdateBackoff"(): integer
 "sendImmediateUpdate"(): void
 "reduceUpdateBackoff"(): void
get "updateBackoffTicks"(): integer
set "updateBackoff"(value: integer)
get "updateBackoff"(): integer
}

export namespace $IBlockEntityDelayedTickable {
const probejs$$marker: never
}
export class $IBlockEntityDelayedTickable$$Static implements $IBlockEntityDelayedTickable {


 "sendUpdate"(): void
 "shouldSendUpdate"(): boolean
 "getUpdateBackoffTicks"(): integer
 "unsetSendUpdate"(): void
 "setUpdateBackoff"(arg0: integer): void
 "getUpdateBackoff"(): integer
 "sendImmediateUpdate"(): void
 "reduceUpdateBackoff"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntityDelayedTickable$$Type = ($IBlockEntityDelayedTickable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEntityDelayedTickable_ = $IBlockEntityDelayedTickable$$Type;
}}
declare module "org.cyclops.cyclopscore.modcompat.ModCompatLoader" {
import {$IExternalCompat, $IExternalCompat$$Type} from "org.cyclops.cyclopscore.modcompat.IExternalCompat"
import {$IModCompat, $IModCompat$$Type} from "org.cyclops.cyclopscore.modcompat.IModCompat"
import {$IModBase, $IModBase$$Type} from "org.cyclops.cyclopscore.init.IModBase"

export class $ModCompatLoader {

constructor(arg0: $IModBase$$Type)

public "addModCompat"(arg0: $IModCompat$$Type): void
public "shouldLoadModCompat"(arg0: $IModCompat$$Type): boolean
public "shouldLoadExternalCompat"(arg0: $IExternalCompat$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModCompatLoader$$Type = ($ModCompatLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModCompatLoader_ = $ModCompatLoader$$Type;
}}
declare module "org.cyclops.cyclopscore.command.argument.ArgumentInfoMod" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ArgumentTypeConfigProperty, $ArgumentTypeConfigProperty$$Type} from "org.cyclops.cyclopscore.command.argument.ArgumentTypeConfigProperty"
import {$ArgumentInfoMod$Template, $ArgumentInfoMod$Template$$Type} from "org.cyclops.cyclopscore.command.argument.ArgumentInfoMod$Template"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ArgumentInfoMod<T extends $ArgumentType<(any)>> implements $ArgumentTypeInfo<($ArgumentTypeConfigProperty), ($ArgumentInfoMod$Template<>)> {

constructor()

public "unpack"(arg0: $ArgumentType$$Type<(any)>): $ArgumentTypeInfo$Template<(any)>
public "unpack"(arg0: $ArgumentTypeConfigProperty$$Type): $ArgumentInfoMod$Template<>
public "serializeToNetwork"(arg0: $ArgumentInfoMod$Template$$Type, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template<(any)>
public "serializeToJson"(arg0: $ArgumentInfoMod$Template$$Type, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentInfoMod$$Type<T> = ($ArgumentInfoMod<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentInfoMod_<T> = $ArgumentInfoMod$$Type<(T)>;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Context" {
import {$Source, $Source$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Source"
import {$Value, $Value$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Value"
import {$Context$Builder, $Context$Builder$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Context$Builder"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$Engine, $Engine$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Engine"

export class $Context implements $AutoCloseable {


public static "create"(...permittedLanguages: (StringJS)[]): $Context
public "interrupt"(timeout: $Duration$$Type): void
public "enter"(): void
public "equals"(obj: any): boolean
public "hashCode"(): integer
public "initialize"(languageId: StringJS): boolean
public "close"(): void
public "close"(cancelIfExecuting: boolean): void
public "parse"(languageId: StringJS, source: charseq): $Value
public "parse"(source: $Source$$Type): $Value
public "leave"(): void
public "eval"(languageId: StringJS, source: charseq): $Value
public "eval"(source: $Source$$Type): $Value
public static "getCurrent"(): $Context
public "getEngine"(): $Engine
public "getBindings"(languageId: StringJS): $Value
public static "newBuilder"(...permittedLanguages: (StringJS)[]): $Context$Builder
public "resetLimits"(): void
public "asValue"(hostValue: any): $Value
public "safepoint"(): void
public "getPolyglotBindings"(): $Value
get "engine"(): $Engine
get "polyglotBindings"(): $Value
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Context$$Type = ($Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Context_ = $Context$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Instrument" {
import {$OptionDescriptors, $OptionDescriptors$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.options.OptionDescriptors"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $Instrument {


public "getVersion"(): StringJS
public "getName"(): StringJS
public "lookup"<T>(type: $Class$$Type<(T)>): T
public "getId"(): StringJS
public "getOptions"(): $OptionDescriptors
public "getWebsite"(): StringJS
get "version"(): StringJS
get "name"(): StringJS
get "id"(): StringJS
get "options"(): $OptionDescriptors
get "website"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instrument$$Type = ($Instrument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Instrument_ = $Instrument$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeMechanicalDryingBasin" {
import {$ItemStackFromIngredient, $ItemStackFromIngredient$$Type} from "org.cyclops.cyclopscore.recipe.ItemStackFromIngredient"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeDryingBasin, $RecipeDryingBasin$$Type} from "org.cyclops.integrateddynamics.core.recipe.type.RecipeDryingBasin"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $RecipeMechanicalDryingBasin extends $RecipeDryingBasin {

constructor(arg0: $Optional$$Type<($Ingredient$$Type)>, arg1: $Optional$$Type<($FluidStack$$Type)>, arg2: $Optional$$Type<($Either$$Type<($ItemStack$$Type), ($ItemStackFromIngredient$$Type)>)>, arg3: $Optional$$Type<($FluidStack$$Type)>, arg4: integer)

public "getType"(): $RecipeType<(any)>
public "getSerializer"(): $RecipeSerializer<(any)>
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeMechanicalDryingBasin$$Type = ($RecipeMechanicalDryingBasin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeMechanicalDryingBasin_ = $RecipeMechanicalDryingBasin$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.aspect.IAspectWrite" {
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$IAspect, $IAspect$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspect"
import {$List, $List$$Type} from "java.util.List"
import {$IAspectProperties, $IAspectProperties$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.property.IAspectProperties"
import {$IPartTypeWriter, $IPartTypeWriter$$Type} from "org.cyclops.integrateddynamics.api.part.write.IPartTypeWriter"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PartPos, $PartPos$$Type} from "org.cyclops.integrateddynamics.api.part.PartPos"
import {$IAspectPropertyTypeInstance, $IAspectPropertyTypeInstance$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.property.IAspectPropertyTypeInstance"
import {$IPartStateWriter, $IPartStateWriter$$Type} from "org.cyclops.integrateddynamics.api.part.write.IPartStateWriter"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$IVariable, $IVariable$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariable"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export interface $IAspectWrite<V extends $IValue, T extends $IValueType<(V)>> extends $IAspect<(V), (T)> {

 "write"<P extends $IPartTypeWriter<(P), (S)>, S extends $IPartStateWriter<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S, arg3: $IVariable$$Type<(V)>): void
 "onDeactivate"<P extends $IPartTypeWriter<(P), (S)>, S extends $IPartStateWriter<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S): void
 "onActivate"<P extends $IPartTypeWriter<(P), (S)>, S extends $IPartStateWriter<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S): void
 "update"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: P, arg3: $PartTarget$$Type, arg4: S): void
 "getProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S): $IAspectProperties
 "setProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S, arg3: $IAspectProperties$$Type): void
 "getUniqueName"(): $ResourceLocation
 "getValueType"(): T
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): void
 "hasProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(): boolean
 "getTranslationKey"(): StringJS
 "getDefaultProperties"(): $IAspectProperties
 "getPropertyTypes"(): $Collection<($IAspectPropertyTypeInstance)>
 "getPropertiesContainerProvider"(arg0: $PartPos$$Type): $MenuProvider
get "uniqueName"(): $ResourceLocation
get "valueType"(): T
get "translationKey"(): StringJS
get "defaultProperties"(): $IAspectProperties
get "propertyTypes"(): $Collection<($IAspectPropertyTypeInstance)>
}

export namespace $IAspectWrite {
const probejs$$marker: never
}
export class $IAspectWrite$$Static<V extends $IValue, T extends $IValueType<(V)>> implements $IAspectWrite {


 "write"<P extends $IPartTypeWriter<(P), (S)>, S extends $IPartStateWriter<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S, arg3: $IVariable$$Type<(V)>): void
 "onDeactivate"<P extends $IPartTypeWriter<(P), (S)>, S extends $IPartStateWriter<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S): void
 "onActivate"<P extends $IPartTypeWriter<(P), (S)>, S extends $IPartStateWriter<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S): void
 "update"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: P, arg3: $PartTarget$$Type, arg4: S): void
 "getProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S): $IAspectProperties
 "setProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S, arg3: $IAspectProperties$$Type): void
 "getUniqueName"(): $ResourceLocation
 "getValueType"(): T
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): void
 "hasProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(): boolean
 "getTranslationKey"(): StringJS
 "getDefaultProperties"(): $IAspectProperties
 "getPropertyTypes"(): $Collection<($IAspectPropertyTypeInstance)>
 "getPropertiesContainerProvider"(arg0: $PartPos$$Type): $MenuProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAspectWrite$$Type<V, T> = ($IAspectWrite<(V), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAspectWrite_<V, T> = $IAspectWrite$$Type<(V), (T)>;
}}
declare module "org.cyclops.cyclopscore.helper.IWorldHelpers$WorldFoldingFunction" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IWorldHelpers$WorldFoldingFunction<F, T, W> {

 "apply"(arg0: F, arg1: W, arg2: $BlockPos$$Type): T

(arg0: F, arg1: W, arg2: $BlockPos): T
}

export namespace $IWorldHelpers$WorldFoldingFunction {
const probejs$$marker: never
}
export class $IWorldHelpers$WorldFoldingFunction$$Static<F, T, W> implements $IWorldHelpers$WorldFoldingFunction {


 "apply"(arg0: F, arg1: W, arg2: $BlockPos$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldHelpers$WorldFoldingFunction$$Type<F, T, W> = ((arg0: F, arg1: W, arg2: $BlockPos) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldHelpers$WorldFoldingFunction_<F, T, W> = $IWorldHelpers$WorldFoldingFunction$$Type<(F), (T), (W)>;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.options.OptionDescriptor" {
import {$OptionStability, $OptionStability$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.options.OptionStability"
import {$OptionCategory, $OptionCategory$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.options.OptionCategory"
import {$OptionKey, $OptionKey$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.options.OptionKey"
import {$OptionDescriptor$Builder, $OptionDescriptor$Builder$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.options.OptionDescriptor$Builder"

export class $OptionDescriptor {


public "isDeprecated"(): boolean
public "getName"(): StringJS
public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getKey"(): $OptionKey<(any)>
public static "newBuilder"<T>(key: $OptionKey$$Type<(T)>, name: StringJS): $OptionDescriptor$Builder
public "getCategory"(): $OptionCategory
public "getHelp"(): StringJS
public "getUsageSyntax"(): StringJS
public "getStability"(): $OptionStability
public "isOptionMap"(): boolean
public "getDeprecationMessage"(): StringJS
get "deprecated"(): boolean
get "name"(): StringJS
get "key"(): $OptionKey<(any)>
get "category"(): $OptionCategory
get "help"(): StringJS
get "usageSyntax"(): StringJS
get "stability"(): $OptionStability
get "optionMap"(): boolean
get "deprecationMessage"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionDescriptor$$Type = ($OptionDescriptor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionDescriptor_ = $OptionDescriptor$$Type;
}}
declare module "org.cyclops.cyclopscore.advancement.criterion.ModItemObtainedTrigger$Instance" {
import {$ICriterionInstanceTestable, $ICriterionInstanceTestable$$Type} from "org.cyclops.cyclopscore.advancement.criterion.ICriterionInstanceTestable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ModItemObtainedTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance, $ICriterionInstanceTestable<($ItemStack)> {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, modId: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ServerPlayer$$Type, arg1: any): boolean
public "test"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "modId"(): StringJS
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModItemObtainedTrigger$Instance$$Type = ({"modId"?: StringJS, "player"?: ($ContextAwarePredicate$$Type)?}) | ([modId?: StringJS, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModItemObtainedTrigger$Instance_ = $ModItemObtainedTrigger$Instance$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.advancement.criterion.ValuePredicate" {
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"

export class $ValuePredicate<V extends $IValue> {
static readonly "ANY": $ValuePredicate<(any)>

constructor(arg0: $Optional$$Type<($IValueType$$Type)>, arg1: $Optional$$Type<($IValue$$Type)>, arg2: $Optional$$Type<($JsonElement$$Type)>)

public "test"(arg0: $IValue$$Type): boolean
public "getValue"(): $Optional<($IValue)>
public "getValueType"(): $Optional<($IValueType)>
public "getValueJson"(): $Optional<($JsonElement)>
get "value"(): $Optional<($IValue)>
get "valueType"(): $Optional<($IValueType)>
get "valueJson"(): $Optional<($JsonElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValuePredicate$$Type<V> = ($ValuePredicate<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValuePredicate_<V> = $ValuePredicate$$Type<(V)>;
}}
declare module "org.cyclops.cyclopscore.modcompat.IExternalCompat" {
import {$ICompatInitializer, $ICompatInitializer$$Type} from "org.cyclops.cyclopscore.modcompat.ICompatInitializer"

export interface $IExternalCompat {

 "getComment"(): StringJS
 "getId"(): StringJS
 "isEnabledDefault"(): boolean
 "createInitializer"(): $ICompatInitializer
get "comment"(): StringJS
get "id"(): StringJS
get "enabledDefault"(): boolean
}

export namespace $IExternalCompat {
const probejs$$marker: never
}
export class $IExternalCompat$$Static implements $IExternalCompat {


 "getComment"(): StringJS
 "getId"(): StringJS
 "isEnabledDefault"(): boolean
 "createInitializer"(): $ICompatInitializer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExternalCompat$$Type = ($IExternalCompat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExternalCompat_ = $IExternalCompat$$Type;
}}
declare module "org.cyclops.commoncapabilities.api.ingredient.storage.IIngredientComponentStorage" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$IngredientComponent, $IngredientComponent$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientComponent"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IIngredientComponentStorage<T, M> extends $Iterable<(T)> {

 "extract"(arg0: long, arg1: boolean): T
 "extract"(arg0: T, arg1: M, arg2: boolean): T
 "insert"(arg0: T, arg1: boolean): T
 "iterator"(): $Iterator<(T)>
 "iterator"(arg0: T, arg1: M): $Iterator<(T)>
 "getComponent"(): $IngredientComponent<(T), (M)>
 "getMaxQuantity"(): long
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
[Symbol.iterator](): IterableIterator<T>;
get "component"(): $IngredientComponent<(T), (M)>
get "maxQuantity"(): long
}

export namespace $IIngredientComponentStorage {
const probejs$$marker: never
}
export class $IIngredientComponentStorage$$Static<T, M> implements $IIngredientComponentStorage {


 "extract"(arg0: long, arg1: boolean): T
 "extract"(arg0: T, arg1: M, arg2: boolean): T
 "insert"(arg0: T, arg1: boolean): T
 "iterator"(): $Iterator<(T)>
 "iterator"(arg0: T, arg1: M): $Iterator<(T)>
 "getComponent"(): $IngredientComponent<(T), (M)>
 "getMaxQuantity"(): long
 "spliterator"(): $Spliterator<(T)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientComponentStorage$$Type<T, M> = ($IIngredientComponentStorage<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientComponentStorage_<T, M> = $IIngredientComponentStorage$$Type<(T), (M)>;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalCraftingPlanFlat" {
import {$List, $List$$Type} from "java.util.List"
import {$ITerminalCraftingPlanFlat$IEntry, $ITerminalCraftingPlanFlat$IEntry$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalCraftingPlanFlat$IEntry"
import {$TerminalCraftingJobStatus, $TerminalCraftingJobStatus$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.crafting.TerminalCraftingJobStatus"
import {$IPrototypedIngredient, $IPrototypedIngredient$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IPrototypedIngredient"

export interface $ITerminalCraftingPlanFlat<I> {

 "getEntries"(): $List<($ITerminalCraftingPlanFlat$IEntry)>
 "getChannel"(): integer
 "setError"(arg0: StringJS): void
 "getId"(): I
 "getOutputs"(): $List<($IPrototypedIngredient<(any), (any)>)>
 "getStatus"(): $TerminalCraftingJobStatus
 "getUnlocalizedLabel"(): StringJS
 "getInitiatorName"(): StringJS
 "getTickDuration"(): long
get "entries"(): $List<($ITerminalCraftingPlanFlat$IEntry)>
get "channel"(): integer
set "error"(value: StringJS)
get "id"(): I
get "outputs"(): $List<($IPrototypedIngredient<(any), (any)>)>
get "status"(): $TerminalCraftingJobStatus
get "unlocalizedLabel"(): StringJS
get "initiatorName"(): StringJS
get "tickDuration"(): long
}

export namespace $ITerminalCraftingPlanFlat {
const probejs$$marker: never
}
export class $ITerminalCraftingPlanFlat$$Static<I> implements $ITerminalCraftingPlanFlat {


 "getEntries"(): $List<($ITerminalCraftingPlanFlat$IEntry)>
 "getChannel"(): integer
 "setError"(arg0: StringJS): void
 "getId"(): I
 "getOutputs"(): $List<($IPrototypedIngredient<(any), (any)>)>
 "getStatus"(): $TerminalCraftingJobStatus
 "getUnlocalizedLabel"(): StringJS
 "getInitiatorName"(): StringJS
 "getTickDuration"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalCraftingPlanFlat$$Type<I> = ($ITerminalCraftingPlanFlat<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalCraftingPlanFlat_<I> = $ITerminalCraftingPlanFlat$$Type<(I)>;
}}
declare module "org.cyclops.cyclopscore.config.ModConfigLocation" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ModConfigLocation extends $Enum<($ModConfigLocation)> {
static readonly "SERVER": $ModConfigLocation
static readonly "COMMON": $ModConfigLocation
static readonly "STARTUP": $ModConfigLocation
static readonly "CLIENT": $ModConfigLocation


public static "values"(): ($ModConfigLocation)[]
public static "valueOf"(arg0: StringJS): $ModConfigLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfigLocation$$Type = (("common") | ("client") | ("server") | ("startup"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfigLocation_ = $ModConfigLocation$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.IOAccess" {
import {$IOAccess$Builder, $IOAccess$Builder$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.IOAccess$Builder"

export class $IOAccess {
static readonly "ALL": $IOAccess
static readonly "NONE": $IOAccess


public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "newBuilder"(prototype: $IOAccess$$Type): $IOAccess$Builder
public static "newBuilder"(): $IOAccess$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOAccess$$Type = ($IOAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOAccess_ = $IOAccess$$Type;
}}
declare module "org.cyclops.integrateddynamics.item.ItemBlockProxy" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$ItemBlockNBT, $ItemBlockNBT$$Type} from "org.cyclops.cyclopscore.item.ItemBlockNBT"

export class $ItemBlockProxy extends $ItemBlockNBT {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockProxy$$Type = ($ItemBlockProxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockProxy_ = $ItemBlockProxy$$Type;
}}
declare module "org.cyclops.cyclopscore.helper.ICraftingHelpers" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeManager, $RecipeManager$$Type} from "net.minecraft.world.item.crafting.RecipeManager"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export interface $ICraftingHelpers {

 "findRecipes"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $Level$$Type, arg1: $RecipeType$$Type<(T)>): $List<($RecipeHolder<(T)>)>
 "getServerRecipe"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RecipeType$$Type<(T)>, arg1: $ResourceLocation$$Type): $Optional<($RecipeHolder<(T)>)>
 "findServerRecipe"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RecipeType$$Type<(T)>, arg1: C, arg2: $Level$$Type): $Optional<($RecipeHolder<(T)>)>
 "findServerRecipes"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $ServerLevel$$Type, arg1: $RecipeType$$Type<(T)>): $List<($RecipeHolder<(T)>)>
 "findServerRecipes"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RecipeType$$Type<(T)>): $List<($RecipeHolder<(T)>)>
 "getClientRecipe"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RecipeType$$Type<(T)>, arg1: $ResourceLocation$$Type): $Optional<($RecipeHolder<(T)>)>
 "getClientRecipes"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RecipeType$$Type<(T)>): $List<($RecipeHolder<(T)>)>
 "findClientRecipe"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RegistryAccess$$Type, arg1: $ItemStack$$Type, arg2: $RecipeType$$Type<(T)>, arg3: integer): $RecipeHolder<(T)>
 "findRecipeCached"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RecipeType$$Type<(T)>, arg1: C, arg2: $Level$$Type, arg3: boolean): $Optional<($RecipeHolder<(T)>)>
 "getRecipeManager"(): $RecipeManager
get "recipeManager"(): $RecipeManager
}

export namespace $ICraftingHelpers {
const probejs$$marker: never
}
export class $ICraftingHelpers$$Static implements $ICraftingHelpers {


 "findRecipes"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $Level$$Type, arg1: $RecipeType$$Type<(T)>): $List<($RecipeHolder<(T)>)>
 "getServerRecipe"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RecipeType$$Type<(T)>, arg1: $ResourceLocation$$Type): $Optional<($RecipeHolder<(T)>)>
 "findServerRecipe"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RecipeType$$Type<(T)>, arg1: C, arg2: $Level$$Type): $Optional<($RecipeHolder<(T)>)>
 "findServerRecipes"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $ServerLevel$$Type, arg1: $RecipeType$$Type<(T)>): $List<($RecipeHolder<(T)>)>
 "findServerRecipes"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RecipeType$$Type<(T)>): $List<($RecipeHolder<(T)>)>
 "getClientRecipe"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RecipeType$$Type<(T)>, arg1: $ResourceLocation$$Type): $Optional<($RecipeHolder<(T)>)>
 "getClientRecipes"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RecipeType$$Type<(T)>): $List<($RecipeHolder<(T)>)>
 "findClientRecipe"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RegistryAccess$$Type, arg1: $ItemStack$$Type, arg2: $RecipeType$$Type<(T)>, arg3: integer): $RecipeHolder<(T)>
 "findRecipeCached"<C extends $RecipeInput, T extends $Recipe<(C)>>(arg0: $RecipeType$$Type<(T)>, arg1: C, arg2: $Level$$Type, arg3: boolean): $Optional<($RecipeHolder<(T)>)>
 "getRecipeManager"(): $RecipeManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingHelpers$$Type = ($ICraftingHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingHelpers_ = $ICraftingHelpers$$Type;
}}
declare module "org.cyclops.cyclopscore.command.argument.ArgumentTypeEnum$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentTypeEnum, $ArgumentTypeEnum$$Type} from "org.cyclops.cyclopscore.command.argument.ArgumentTypeEnum"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ArgumentTypeEnum$Info$Template, $ArgumentTypeEnum$Info$Template$$Type} from "org.cyclops.cyclopscore.command.argument.ArgumentTypeEnum$Info$Template"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ArgumentTypeEnum$Info implements $ArgumentTypeInfo<($ArgumentTypeEnum<(any)>), ($ArgumentTypeEnum$Info$Template<(any)>)> {

constructor()

public "unpack"(arg0: $ArgumentType$$Type<(any)>): $ArgumentTypeInfo$Template<(any)>
public "unpack"(arg0: $ArgumentTypeEnum$$Type<(any)>): $ArgumentTypeEnum$Info$Template<(any)>
public "serializeToNetwork"(arg0: $ArgumentTypeEnum$Info$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template<(any)>
public "serializeToJson"(arg0: $ArgumentTypeEnum$Info$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentTypeEnum$Info$$Type = ($ArgumentTypeEnum$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentTypeEnum$Info_ = $ArgumentTypeEnum$Info$$Type;
}}
declare module "org.cyclops.cyclopscore.block.BlockWithEntityGui" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$BlockWithEntityCommon, $BlockWithEntityCommon$$Type} from "org.cyclops.cyclopscore.block.BlockWithEntityCommon"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Stat, $Stat$$Type} from "net.minecraft.stats.Stat"
import {$CyclopsBlockEntity, $CyclopsBlockEntity$$Type} from "org.cyclops.cyclopscore.blockentity.CyclopsBlockEntity"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

/**
 * 
 * @deprecated
 */
export class $BlockWithEntityGui extends $BlockWithEntityCommon implements $IBlockGui {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $BiFunction$$Type<($BlockPos), ($BlockState), ($CyclopsBlockEntity$$Type)>)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getOpenStat"(): $Stat<($ResourceLocation)>
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "writeExtraGuiData"(arg0: $FriendlyByteBuf$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $BlockPos$$Type, arg4: $BlockHitResult$$Type): void
public "asHolder"(): $Holder<(any)>
get "openStat"(): $Stat<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWithEntityGui$$Type = ($BlockWithEntityGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWithEntityGui_ = $BlockWithEntityGui$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.evaluate.EvaluationException" {
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export class $EvaluationException extends $Exception {

constructor(arg0: $MutableComponent$$Type)

public "getErrorMessage"(): $MutableComponent
public "resolve"(): void
public "setRetryEvaluation"(arg0: boolean): void
public "isRetryEvaluation"(): boolean
public "addResolutionListeners"(arg0: $Runnable$$Type): void
get "errorMessage"(): $MutableComponent
set "retryEvaluation"(value: boolean)
get "retryEvaluation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EvaluationException$$Type = ($EvaluationException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EvaluationException_ = $EvaluationException$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeEnergyContainerCombination" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CustomRecipe, $CustomRecipe$$Type} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RecipeEnergyContainerCombination extends $CustomRecipe {

constructor(arg0: $Ingredient$$Type, arg1: integer)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getBatteryItem"(): $Ingredient
public "getMaxCapacity"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<(any)>
get "batteryItem"(): $Ingredient
get "maxCapacity"(): integer
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeEnergyContainerCombination$$Type = ($RecipeEnergyContainerCombination);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeEnergyContainerCombination_ = $RecipeEnergyContainerCombination$$Type;
}}
declare module "org.cyclops.cyclopscore.network.IPacketHandler" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PacketBase, $PacketBase$$Type} from "org.cyclops.cyclopscore.network.PacketBase"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IPacketHandler$TargetPoint, $IPacketHandler$TargetPoint$$Type} from "org.cyclops.cyclopscore.network.IPacketHandler$TargetPoint"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IPacketHandler {

 "register"<P extends $PacketBase<(any)>>(arg0: $Class$$Type<(P)>, arg1: $CustomPacketPayload$Type$$Type<(P)>, arg2: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (P)>): void
 "sendToPlayer"(arg0: $PacketBase$$Type<(any)>, arg1: $ServerPlayer$$Type): void
 "sendToServer"(arg0: $PacketBase$$Type<(any)>): void
 "sendToAll"(arg0: $PacketBase$$Type<(any)>): void
 "sendToAllAroundPoint"(arg0: $PacketBase$$Type<(any)>, arg1: $IPacketHandler$TargetPoint$$Type): void
 "sendToDimension"(arg0: $PacketBase$$Type<(any)>, arg1: $ServerLevel$$Type): void
}

export namespace $IPacketHandler {
function createTargetPointFromEntity(arg0: $Entity$$Type, arg1: integer): $IPacketHandler$TargetPoint
function createTargetPointFromLocation(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): $IPacketHandler$TargetPoint
const probejs$$marker: never
}
export class $IPacketHandler$$Static implements $IPacketHandler {


 "register"<P extends $PacketBase<(any)>>(arg0: $Class$$Type<(P)>, arg1: $CustomPacketPayload$Type$$Type<(P)>, arg2: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (P)>): void
 "sendToPlayer"(arg0: $PacketBase$$Type<(any)>, arg1: $ServerPlayer$$Type): void
 "sendToServer"(arg0: $PacketBase$$Type<(any)>): void
 "sendToAll"(arg0: $PacketBase$$Type<(any)>): void
 "sendToAllAroundPoint"(arg0: $PacketBase$$Type<(any)>, arg1: $IPacketHandler$TargetPoint$$Type): void
 "sendToDimension"(arg0: $PacketBase$$Type<(any)>, arg1: $ServerLevel$$Type): void
static "createTargetPointFromEntity"(arg0: $Entity$$Type, arg1: integer): $IPacketHandler$TargetPoint
static "createTargetPointFromLocation"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: integer): $IPacketHandler$TargetPoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPacketHandler$$Type = ($IPacketHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPacketHandler_ = $IPacketHandler$$Type;
}}
declare module "org.cyclops.cyclopscore.recipe.type.RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer {

 "transform"(arg0: $CraftingInput$$Type, arg1: $ItemStack$$Type): $ItemStack

(arg0: $CraftingInput, arg1: $ItemStack): $ItemStack$$Type
}

export namespace $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer {
const probejs$$marker: never
}
export class $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer$$Static implements $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer {


 "transform"(arg0: $CraftingInput$$Type, arg1: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer$$Type = ((arg0: $CraftingInput, arg1: $ItemStack) => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer_ = $RecipeCraftingShapelessCustomOutput$Serializer$IOutputTransformer$$Type;
}}
declare module "org.cyclops.commoncapabilities.api.ingredient.capability.IngredientComponentCapability" {
import {$IngredientComponent, $IngredientComponent$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BaseCapability, $BaseCapability$$Type} from "net.neoforged.neoforge.capabilities.BaseCapability"

export class $IngredientComponentCapability<T, C> extends $BaseCapability<(T), (C)> {


public static "create"<T, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>, arg2: $Class$$Type<(C)>): $IngredientComponentCapability<(T), (C)>
public static "getAll"(): $List<($IngredientComponentCapability<(any), (any)>)>
public "getCapability"(arg0: $IngredientComponent$$Type<(any), (any)>, arg1: C): T
public static "createVoid"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $IngredientComponentCapability<(T), (void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientComponentCapability$$Type<T, C> = ($IngredientComponentCapability<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientComponentCapability_<T, C> = $IngredientComponentCapability$$Type<(T), (C)>;
}}
declare module "org.cyclops.cyclopscore.inventory.IValueNotifier" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Set, $Set$$Type} from "java.util.Set"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IValueNotifier {

 "getValue"(arg0: integer): $CompoundTag
 "setValue"(arg0: integer, arg1: $CompoundTag$$Type): void
 "getValueIds"(): $Set<(integer)>
 "getHolderLookupProvider"(): $HolderLookup$Provider
get "valueIds"(): $Set<(integer)>
get "holderLookupProvider"(): $HolderLookup$Provider
}

export namespace $IValueNotifier {
const probejs$$marker: never
}
export class $IValueNotifier$$Static implements $IValueNotifier {


 "getValue"(arg0: integer): $CompoundTag
 "setValue"(arg0: integer, arg1: $CompoundTag$$Type): void
 "getValueIds"(): $Set<(integer)>
 "getHolderLookupProvider"(): $HolderLookup$Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValueNotifier$$Type = ($IValueNotifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValueNotifier_ = $IValueNotifier$$Type;
}}
declare module "org.cyclops.cyclopscore.network.IPacketHandler$TargetPoint" {
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $IPacketHandler$TargetPoint extends $Record {

constructor(level: $ServerLevel$$Type, x: double, y: double, z: double, radius: double, excluded: $ServerPlayer$$Type)

public "excluded"(): $ServerPlayer
public "y"(): double
public "level"(): $ServerLevel
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): double
public "z"(): double
public "radius"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPacketHandler$TargetPoint$$Type = ({"radius"?: double, "excluded"?: $ServerPlayer$$Type, "level"?: $ServerLevel$$Type, "x"?: double, "y"?: double, "z"?: double}) | ([radius?: double, excluded?: $ServerPlayer$$Type, level?: $ServerLevel$$Type, x?: double, y?: double, z?: double]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPacketHandler$TargetPoint_ = $IPacketHandler$TargetPoint$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.AttachCapabilitiesEventPart" {
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$PartCapability, $PartCapability$$Type} from "org.cyclops.integrateddynamics.api.part.PartCapability"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export class $AttachCapabilitiesEventPart extends $Event {

constructor(arg0: $IPartType$$Type<(any), (any)>, arg1: $IPartState$$Type<(any)>)

public "isRegistered"(arg0: $PartCapability$$Type<(any)>, arg1: $IPartType$$Type<(any), (any)>): boolean
public "register"<T>(arg0: $PartCapability$$Type<(T)>, arg1: $IPartType$$Type<(any), (any)>, arg2: $ICapabilityProvider$$Type<($IPartType<(any), (any)>), ($PartTarget), (T)>): void
public "getPartState"(): $IPartState<(any)>
public "getPartType"(): $IPartType<(any), (any)>
get "partState"(): $IPartState<(any)>
get "partType"(): $IPartType<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachCapabilitiesEventPart$$Type = ($AttachCapabilitiesEventPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachCapabilitiesEventPart_ = $AttachCapabilitiesEventPart$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.aspect.IAspect" {
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$IAspectProperties, $IAspectProperties$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.property.IAspectProperties"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PartPos, $PartPos$$Type} from "org.cyclops.integrateddynamics.api.part.PartPos"
import {$IAspectPropertyTypeInstance, $IAspectPropertyTypeInstance$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.property.IAspectPropertyTypeInstance"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export interface $IAspect<V extends $IValue, T extends $IValueType<(V)>> {

 "update"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: P, arg3: $PartTarget$$Type, arg4: S): void
 "getProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S): $IAspectProperties
 "setProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S, arg3: $IAspectProperties$$Type): void
 "getUniqueName"(): $ResourceLocation
 "getValueType"(): T
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): void
 "hasProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(): boolean
 "getTranslationKey"(): StringJS
 "getDefaultProperties"(): $IAspectProperties
 "getPropertyTypes"(): $Collection<($IAspectPropertyTypeInstance)>
 "getPropertiesContainerProvider"(arg0: $PartPos$$Type): $MenuProvider
get "uniqueName"(): $ResourceLocation
get "valueType"(): T
get "translationKey"(): StringJS
get "defaultProperties"(): $IAspectProperties
get "propertyTypes"(): $Collection<($IAspectPropertyTypeInstance)>
}

export namespace $IAspect {
const probejs$$marker: never
}
export class $IAspect$$Static<V extends $IValue, T extends $IValueType<(V)>> implements $IAspect {


 "update"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: P, arg3: $PartTarget$$Type, arg4: S): void
 "getProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S): $IAspectProperties
 "setProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S, arg3: $IAspectProperties$$Type): void
 "getUniqueName"(): $ResourceLocation
 "getValueType"(): T
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): void
 "hasProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(): boolean
 "getTranslationKey"(): StringJS
 "getDefaultProperties"(): $IAspectProperties
 "getPropertyTypes"(): $Collection<($IAspectPropertyTypeInstance)>
 "getPropertiesContainerProvider"(arg0: $PartPos$$Type): $MenuProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAspect$$Type<V, T> = ($IAspect<(V), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAspect_<V, T> = $IAspect$$Type<(V), (T)>;
}}
declare module "org.cyclops.integrateddynamics.api.part.read.IPartTypeReader" {
import {$IAspectRead, $IAspectRead$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspectRead"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PartRenderPosition, $PartRenderPosition$$Type} from "org.cyclops.integrateddynamics.api.part.PartRenderPosition"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$DimPos, $DimPos$$Type} from "org.cyclops.cyclopscore.datastructure.DimPos"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPartContainer, $IPartContainer$$Type} from "org.cyclops.integrateddynamics.api.part.IPartContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IPartNetworkElement, $IPartNetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetworkElement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IPartStateReader, $IPartStateReader$$Type} from "org.cyclops.integrateddynamics.api.part.read.IPartStateReader"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$INetworkElement, $INetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElement"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$IAspectVariable, $IAspectVariable$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspectVariable"
import {$PartPos, $PartPos$$Type} from "org.cyclops.integrateddynamics.api.part.PartPos"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$INetworkEvent, $INetworkEvent$$Type} from "org.cyclops.integrateddynamics.api.network.event.INetworkEvent"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export interface $IPartTypeReader<P extends $IPartTypeReader<(P), (S)>, S extends $IPartStateReader<(P)>> extends $IPartType<(P), (S)> {

 "getVariable"<V extends $IValue, T extends $IValueType<(V)>>(arg0: $PartTarget$$Type, arg1: S, arg2: $IAspectRead$$Type<(V), (T)>): $IAspectVariable<(V)>
 "getReadAspects"(): $List<($IAspectRead)>
 "getTarget"(arg0: $PartPos$$Type, arg1: S): $PartTarget
 "getTargetOffset"(arg0: S): $Vec3i
 "getChannel"(arg0: S): integer
 "getItem"(): $Item
 "isUpdate"(arg0: S): boolean
 "update"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "isEnabled"(arg0: S): boolean
 "getPriority"(arg0: S): integer
 "getState"(arg0: $ValueDeseralizationContext$$Type, arg1: $ItemStack$$Type): S
 "toNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type, arg2: S): void
 "isSolid"(arg0: S): boolean
 "updateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S, arg3: $RandomSource$$Type): void
 "getUniqueName"(): $ResourceLocation
 "setEnabled"(arg0: S, arg1: boolean): void
 "getBlockState"(arg0: $IPartContainer$$Type, arg1: $Direction$$Type): $BlockState
 "getItemStack"(arg0: $ValueDeseralizationContext$$Type, arg1: S, arg2: boolean): $ItemStack
 "addDrops"(arg0: $PartTarget$$Type, arg1: S, arg2: $List$$Type<($ItemStack$$Type)>, arg3: boolean, arg4: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onPostRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "postUpdate"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: boolean): void
 "loadTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "loadTooltip"(arg0: S, arg1: $List$$Type<($Component$$Type)>): void
 "fromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): S
 "getBlockModelPath"(): $ResourceLocation
 "getPartRenderPosition"(): $PartRenderPosition
 "getUpdateInterval"(arg0: S): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: integer, arg5: integer): void
 "supportsOffsets"(): boolean
 "setTargetOffset"(arg0: S, arg1: $PartPos$$Type, arg2: $Vec3i$$Type): boolean
 "setTargetSideOverride"(arg0: S, arg1: $Direction$$Type): void
 "getTargetSideOverride"(arg0: S): $Direction
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "afterNetworkAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkAddition"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "createNetworkElement"(arg0: $IPartContainer$$Type, arg1: $DimPos$$Type, arg2: $Direction$$Type): $INetworkElement
 "onPartActivated"(arg0: S, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $ItemStack$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
 "getBaseBlockState"(): $BlockState
 "onBlockNeighborChange"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: $BlockGetter$$Type, arg5: $Block$$Type, arg6: $BlockPos$$Type): void
 "getConsumptionRate"(arg0: S): integer
 "forceLightTransparency"(arg0: S): boolean
 "getContainerProvider"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "afterNetworkReAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "writeExtraGuiData"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "getTranslationKey"(): StringJS
 "setUpdateInterval"(arg0: S, arg1: integer): void
 "getCloneItemStack"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S): $ItemStack
 "defaultBlockState"(): S
 "onOffsetVariablesChanged"(arg0: $PartTarget$$Type, arg1: S): void
 "getMinimumUpdateInterval"(arg0: S): integer
 "shouldTriggerBlockRenderUpdate"(arg0: S, arg1: S): boolean
 "getContainerProviderSettings"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "getContainerProviderOffsets"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "writeExtraGuiDataSettings"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "writeExtraGuiDataOffsets"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "onEvent"(arg0: $INetworkEvent$$Type, arg1: $IPartNetworkElement$$Type<(P), (S)>): void
 "hasEventSubscriptions"(): boolean
 "getSubscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
get "readAspects"(): $List<($IAspectRead)>
get "item"(): $Item
get "uniqueName"(): $ResourceLocation
get "blockModelPath"(): $ResourceLocation
get "partRenderPosition"(): $PartRenderPosition
get "baseBlockState"(): $BlockState
get "translationKey"(): StringJS
get "subscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
}

export namespace $IPartTypeReader {
const probejs$$marker: never
}
export class $IPartTypeReader$$Static<P extends $IPartTypeReader<(P), (S)>, S extends $IPartStateReader<(P)>> implements $IPartTypeReader {


 "getVariable"<V extends $IValue, T extends $IValueType<(V)>>(arg0: $PartTarget$$Type, arg1: S, arg2: $IAspectRead$$Type<(V), (T)>): $IAspectVariable<(V)>
 "getReadAspects"(): $List<($IAspectRead)>
 "getTarget"(arg0: $PartPos$$Type, arg1: S): $PartTarget
 "getTargetOffset"(arg0: S): $Vec3i
 "getChannel"(arg0: S): integer
 "getItem"(): $Item
 "isUpdate"(arg0: S): boolean
 "update"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "isEnabled"(arg0: S): boolean
 "getPriority"(arg0: S): integer
 "getState"(arg0: $ValueDeseralizationContext$$Type, arg1: $ItemStack$$Type): S
 "toNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type, arg2: S): void
 "isSolid"(arg0: S): boolean
 "updateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S, arg3: $RandomSource$$Type): void
 "getUniqueName"(): $ResourceLocation
 "setEnabled"(arg0: S, arg1: boolean): void
 "getBlockState"(arg0: $IPartContainer$$Type, arg1: $Direction$$Type): $BlockState
 "getItemStack"(arg0: $ValueDeseralizationContext$$Type, arg1: S, arg2: boolean): $ItemStack
 "addDrops"(arg0: $PartTarget$$Type, arg1: S, arg2: $List$$Type<($ItemStack$$Type)>, arg3: boolean, arg4: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onPostRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "postUpdate"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: boolean): void
 "loadTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "loadTooltip"(arg0: S, arg1: $List$$Type<($Component$$Type)>): void
 "fromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): S
 "getBlockModelPath"(): $ResourceLocation
 "getPartRenderPosition"(): $PartRenderPosition
 "getUpdateInterval"(arg0: S): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: integer, arg5: integer): void
 "supportsOffsets"(): boolean
 "setTargetOffset"(arg0: S, arg1: $PartPos$$Type, arg2: $Vec3i$$Type): boolean
 "setTargetSideOverride"(arg0: S, arg1: $Direction$$Type): void
 "getTargetSideOverride"(arg0: S): $Direction
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "afterNetworkAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkAddition"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "createNetworkElement"(arg0: $IPartContainer$$Type, arg1: $DimPos$$Type, arg2: $Direction$$Type): $INetworkElement
 "onPartActivated"(arg0: S, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $ItemStack$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
 "getBaseBlockState"(): $BlockState
 "onBlockNeighborChange"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: $BlockGetter$$Type, arg5: $Block$$Type, arg6: $BlockPos$$Type): void
 "getConsumptionRate"(arg0: S): integer
 "forceLightTransparency"(arg0: S): boolean
 "getContainerProvider"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "afterNetworkReAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "writeExtraGuiData"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "getTranslationKey"(): StringJS
 "setUpdateInterval"(arg0: S, arg1: integer): void
 "getCloneItemStack"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S): $ItemStack
 "defaultBlockState"(): S
 "onOffsetVariablesChanged"(arg0: $PartTarget$$Type, arg1: S): void
 "getMinimumUpdateInterval"(arg0: S): integer
 "shouldTriggerBlockRenderUpdate"(arg0: S, arg1: S): boolean
 "getContainerProviderSettings"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "getContainerProviderOffsets"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "writeExtraGuiDataSettings"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "writeExtraGuiDataOffsets"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "onEvent"(arg0: $INetworkEvent$$Type, arg1: $IPartNetworkElement$$Type<(P), (S)>): void
 "hasEventSubscriptions"(): boolean
 "getSubscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartTypeReader$$Type<P, S> = ($IPartTypeReader<(P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartTypeReader_<P, S> = $IPartTypeReader$$Type<(P), (S)>;
}}
declare module "org.cyclops.integratedtunnels.item.ItemDummyPickAxe" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DiggerItem, $DiggerItem$$Type} from "net.minecraft.world.item.DiggerItem"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemDummyPickAxe extends $DiggerItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "getItemStack"(arg0: boolean, arg1: integer): $ItemStack
public "isCorrectToolForDrops"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDummyPickAxe$$Type = ($ItemDummyPickAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDummyPickAxe_ = $ItemDummyPickAxe$$Type;
}}
declare module "org.cyclops.integratedscripting.api.evaluate.translation.ValueTranslatorRegisterEvent" {
import {$IValueTranslatorRegistry, $IValueTranslatorRegistry$$Type} from "org.cyclops.integratedscripting.api.evaluate.translation.IValueTranslatorRegistry"
import {$ModLifecycleEvent, $ModLifecycleEvent$$Type} from "net.neoforged.fml.event.lifecycle.ModLifecycleEvent"
import {$ModContainer, $ModContainer$$Type} from "net.neoforged.fml.ModContainer"

export class $ValueTranslatorRegisterEvent extends $ModLifecycleEvent {

constructor(arg0: $ModContainer$$Type, arg1: $IValueTranslatorRegistry$$Type)

public "getRegistry"(): $IValueTranslatorRegistry
get "registry"(): $IValueTranslatorRegistry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueTranslatorRegisterEvent$$Type = ($ValueTranslatorRegisterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueTranslatorRegisterEvent_ = $ValueTranslatorRegisterEvent$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.recipe.type.RecipeSerializerNbtClear" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeNbtClear, $RecipeNbtClear$$Type} from "org.cyclops.integrateddynamics.core.recipe.type.RecipeNbtClear"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RecipeSerializerNbtClear implements $RecipeSerializer<($RecipeNbtClear)> {
static readonly "CODEC": $MapCodec<($RecipeNbtClear)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeNbtClear)>

constructor()

public "codec"(): $MapCodec<($RecipeNbtClear)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RecipeNbtClear)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeSerializerNbtClear$$Type = ($RecipeSerializerNbtClear);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeSerializerNbtClear_ = $RecipeSerializerNbtClear$$Type;
}}
declare module "org.cyclops.cyclopscore.persist.IDirtyMarkListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDirtyMarkListener {

 "onDirty"(): void

(): void
}

export namespace $IDirtyMarkListener {
const probejs$$marker: never
}
export class $IDirtyMarkListener$$Static implements $IDirtyMarkListener {


 "onDirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDirtyMarkListener$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDirtyMarkListener_ = $IDirtyMarkListener$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Context$Builder" {
import {$SandboxPolicy, $SandboxPolicy$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.SandboxPolicy"
import {$IOAccess, $IOAccess$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.IOAccess"
import {$ProcessHandler, $ProcessHandler$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.ProcessHandler"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Handler, $Handler$$Type} from "java.util.logging.Handler"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$FileSystem, $FileSystem$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.FileSystem"
import {$Context, $Context$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Context"
import {$Engine, $Engine$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Engine"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$MessageTransport, $MessageTransport$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.MessageTransport"
import {$ResourceLimits, $ResourceLimits$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.ResourceLimits"
import {$HostAccess, $HostAccess$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.HostAccess"
import {$EnvironmentAccess, $EnvironmentAccess$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.EnvironmentAccess"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$ClassLoader, $ClassLoader$$Type} from "java.lang.ClassLoader"
import {$PolyglotAccess, $PolyglotAccess$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.PolyglotAccess"

export class $Context$Builder {


public "option"(key: StringJS, value: StringJS): $Context$Builder
public "arguments"(language: StringJS, args: (StringJS)[]): $Context$Builder
public "options"(options: $Map$$Type<(StringJS), (StringJS)>): $Context$Builder
public "build"(): $Context
public "environment"(name: StringJS, value: StringJS): $Context$Builder
public "environment"(env: $Map$$Type<(StringJS), (StringJS)>): $Context$Builder
public "out"(out: $OutputStream$$Type): $Context$Builder
public "err"(err: $OutputStream$$Type): $Context$Builder
public "in"(arg0: $InputStream$$Type): $Context$Builder
public "engine"(engine: $Engine$$Type): $Context$Builder
/**
 * 
 * @deprecated
 */
public "fileSystem"(fileSystem: $FileSystem$$Type): $Context$Builder
public "timeZone"(zone: $ZoneId$$Type): $Context$Builder
public "allowIO"(ioAccess: $IOAccess$$Type): $Context$Builder
/**
 * 
 * @deprecated
 */
public "allowIO"(enabled: boolean): $Context$Builder
public "useSystemExit"(enabled: boolean): $Context$Builder
public "resourceLimits"(limits: $ResourceLimits$$Type): $Context$Builder
public "allowAllAccess"(enabled: boolean): $Context$Builder
public "sandbox"(policy: $SandboxPolicy$$Type): $Context$Builder
public "logHandler"(logHandler: $Handler$$Type): $Context$Builder
public "logHandler"(logOut: $OutputStream$$Type): $Context$Builder
public "processHandler"(handler: $ProcessHandler$$Type): $Context$Builder
/**
 * 
 * @deprecated
 */
public "hostClassFilter"(classFilter: $Predicate$$Type<(StringJS)>): $Context$Builder
/**
 * 
 * @deprecated
 */
public "allowHostAccess"(enabled: boolean): $Context$Builder
public "allowHostAccess"(config: $HostAccess$$Type): $Context$Builder
public "allowHostClassLookup"(classFilter: $Predicate$$Type<(StringJS)>): $Context$Builder
public "allowPolyglotAccess"(accessPolicy: $PolyglotAccess$$Type): $Context$Builder
public "allowEnvironmentAccess"(accessPolicy: $EnvironmentAccess$$Type): $Context$Builder
public "serverTransport"(serverTransport: $MessageTransport$$Type): $Context$Builder
public "allowNativeAccess"(enabled: boolean): $Context$Builder
public "allowCreateThread"(enabled: boolean): $Context$Builder
public "allowHostClassLoading"(enabled: boolean): $Context$Builder
public "allowCreateProcess"(enabled: boolean): $Context$Builder
public "hostClassLoader"(classLoader: $ClassLoader$$Type): $Context$Builder
public "allowValueSharing"(enabled: boolean): $Context$Builder
public "allowInnerContextOptions"(enabled: boolean): $Context$Builder
public "currentWorkingDirectory"(workingDirectory: $Path$$Type): $Context$Builder
public "allowExperimentalOptions"(enabled: boolean): $Context$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Context$Builder$$Type = ($Context$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Context$Builder_ = $Context$Builder$$Type;
}}
declare module "org.cyclops.integratedscripting.item.ItemScriptingDisk" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemScriptingDisk extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getDiskId"(arg0: $ItemStack$$Type): integer
public static "generateScriptingId"(): integer
public "getOrCreateDiskId"(arg0: $ItemStack$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemScriptingDisk$$Type = ($ItemScriptingDisk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemScriptingDisk_ = $ItemScriptingDisk$$Type;
}}
declare module "org.cyclops.cyclopscore.helper.IModHelpers" {
import {$IGuiHelpers, $IGuiHelpers$$Type} from "org.cyclops.cyclopscore.helper.IGuiHelpers"
import {$ILocationHelpers, $ILocationHelpers$$Type} from "org.cyclops.cyclopscore.helper.ILocationHelpers"
import {$IInventoryHelpers, $IInventoryHelpers$$Type} from "org.cyclops.cyclopscore.helper.IInventoryHelpers"
import {$ICraftingHelpers, $ICraftingHelpers$$Type} from "org.cyclops.cyclopscore.helper.ICraftingHelpers"
import {$IBaseHelpers, $IBaseHelpers$$Type} from "org.cyclops.cyclopscore.helper.IBaseHelpers"
import {$IRenderHelpers, $IRenderHelpers$$Type} from "org.cyclops.cyclopscore.helper.IRenderHelpers"
import {$IWorldHelpers, $IWorldHelpers$$Type} from "org.cyclops.cyclopscore.helper.IWorldHelpers"
import {$IMinecraftHelpers, $IMinecraftHelpers$$Type} from "org.cyclops.cyclopscore.helper.IMinecraftHelpers"
import {$IMinecraftClientHelpers, $IMinecraftClientHelpers$$Type} from "org.cyclops.cyclopscore.helper.IMinecraftClientHelpers"
import {$IBlockHelpers, $IBlockHelpers$$Type} from "org.cyclops.cyclopscore.helper.IBlockHelpers"
import {$IL10NHelpers, $IL10NHelpers$$Type} from "org.cyclops.cyclopscore.helper.IL10NHelpers"
import {$IBlockEntityHelpers, $IBlockEntityHelpers$$Type} from "org.cyclops.cyclopscore.helper.IBlockEntityHelpers"
import {$IItemStackHelpers, $IItemStackHelpers$$Type} from "org.cyclops.cyclopscore.helper.IItemStackHelpers"
import {$IRegistrationHelpers, $IRegistrationHelpers$$Type} from "org.cyclops.cyclopscore.helper.IRegistrationHelpers"

export interface $IModHelpers {

 "getGuiHelpers"(): $IGuiHelpers
 "getL10NHelpers"(): $IL10NHelpers
 "getBaseHelpers"(): $IBaseHelpers
 "getRenderHelpers"(): $IRenderHelpers
 "getMinecraftHelpers"(): $IMinecraftHelpers
 "getBlockHelpers"(): $IBlockHelpers
 "getLocationHelpers"(): $ILocationHelpers
 "getBlockEntityHelpers"(): $IBlockEntityHelpers
 "getInventoryHelpers"(): $IInventoryHelpers
 "getItemStackHelpers"(): $IItemStackHelpers
 "getCraftingHelpers"(): $ICraftingHelpers
 "getRegistrationHelpers"(): $IRegistrationHelpers
 "getWorldHelpers"(): $IWorldHelpers
 "getMinecraftClientHelpers"(): $IMinecraftClientHelpers
get "guiHelpers"(): $IGuiHelpers
get "l10NHelpers"(): $IL10NHelpers
get "baseHelpers"(): $IBaseHelpers
get "renderHelpers"(): $IRenderHelpers
get "minecraftHelpers"(): $IMinecraftHelpers
get "blockHelpers"(): $IBlockHelpers
get "locationHelpers"(): $ILocationHelpers
get "blockEntityHelpers"(): $IBlockEntityHelpers
get "inventoryHelpers"(): $IInventoryHelpers
get "itemStackHelpers"(): $IItemStackHelpers
get "craftingHelpers"(): $ICraftingHelpers
get "registrationHelpers"(): $IRegistrationHelpers
get "worldHelpers"(): $IWorldHelpers
get "minecraftClientHelpers"(): $IMinecraftClientHelpers
}

export namespace $IModHelpers {
function get(): $IModHelpers
const probejs$$marker: never
}
export class $IModHelpers$$Static implements $IModHelpers {


static "get"(): $IModHelpers
 "getGuiHelpers"(): $IGuiHelpers
 "getL10NHelpers"(): $IL10NHelpers
 "getBaseHelpers"(): $IBaseHelpers
 "getRenderHelpers"(): $IRenderHelpers
 "getMinecraftHelpers"(): $IMinecraftHelpers
 "getBlockHelpers"(): $IBlockHelpers
 "getLocationHelpers"(): $ILocationHelpers
 "getBlockEntityHelpers"(): $IBlockEntityHelpers
 "getInventoryHelpers"(): $IInventoryHelpers
 "getItemStackHelpers"(): $IItemStackHelpers
 "getCraftingHelpers"(): $ICraftingHelpers
 "getRegistrationHelpers"(): $IRegistrationHelpers
 "getWorldHelpers"(): $IWorldHelpers
 "getMinecraftClientHelpers"(): $IMinecraftClientHelpers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModHelpers$$Type = ($IModHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModHelpers_ = $IModHelpers$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.part.event.PartReaderAspectEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IAspectRead, $IAspectRead$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspectRead"
import {$IPartStateReader, $IPartStateReader$$Type} from "org.cyclops.integrateddynamics.api.part.read.IPartStateReader"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PartAspectEvent, $PartAspectEvent$$Type} from "org.cyclops.integrateddynamics.core.part.event.PartAspectEvent"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"
import {$IPartTypeReader, $IPartTypeReader$$Type} from "org.cyclops.integrateddynamics.api.part.read.IPartTypeReader"

export class $PartReaderAspectEvent<P extends $IPartTypeReader<(P), (S)>, S extends $IPartStateReader<(P)>, A extends $IAspectRead<(any), (any)>> extends $PartAspectEvent<(P), (S), (A)> {

constructor(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: P, arg4: S, arg5: $Player$$Type, arg6: A, arg7: $ItemStack$$Type)

public "getItemStack"(): $ItemStack
public "setItemStack"(arg0: $ItemStack$$Type): void
get "itemStack"(): $ItemStack
set "itemStack"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartReaderAspectEvent$$Type<P, S, A> = ($PartReaderAspectEvent<(P), (S), (A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartReaderAspectEvent_<P, S, A> = $PartReaderAspectEvent$$Type<(P), (S), (A)>;
}}
declare module "org.cyclops.integrateddynamics.core.block.VoxelShapeComponents" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Shapes$DoubleLineConsumer, $Shapes$DoubleLineConsumer$$Type} from "net.minecraft.world.phys.shapes.Shapes$DoubleLineConsumer"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$DoubleList, $DoubleList$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleList"
import {$VoxelShapeComponents$IComponent, $VoxelShapeComponents$IComponent$$Type} from "org.cyclops.integrateddynamics.core.block.VoxelShapeComponents$IComponent"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$AxisCycle, $AxisCycle$$Type} from "net.minecraft.core.AxisCycle"
import {$BlockRayTraceResultComponent, $BlockRayTraceResultComponent$$Type} from "org.cyclops.integrateddynamics.core.block.BlockRayTraceResultComponent"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$DiscreteVoxelShape, $DiscreteVoxelShape$$Type} from "net.minecraft.world.phys.shapes.DiscreteVoxelShape"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VoxelShapeComponents extends $VoxelShape implements $Iterable<($VoxelShape)> {
 "shape": $DiscreteVoxelShape


public "move"(arg0: double, arg1: double, arg2: double): $VoxelShape
public static "create"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type, arg4: $List$$Type<($VoxelShapeComponents$IComponent$$Type)>): $VoxelShapeComponents
public "min"(arg0: $Direction$Axis$$Type): double
public "max"(arg0: $Direction$Axis$$Type): double
public "max"(arg0: $Direction$Axis$$Type, arg1: double, arg2: double): double
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($VoxelShape)>
public "clip"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type): $BlockRayTraceResultComponent
public "forAllBoxes"(arg0: $Shapes$DoubleLineConsumer$$Type): void
public "forAllEdges"(arg0: $Shapes$DoubleLineConsumer$$Type): void
public "collideX"(arg0: $AxisCycle$$Type, arg1: $AABB$$Type, arg2: double): double
public "getCoords"(arg0: $Direction$Axis$$Type): $DoubleList
public "rayTrace"(arg0: $BlockPos$$Type, arg1: $Entity$$Type): $BlockRayTraceResultComponent
public "getStateId"(): StringJS
public "spliterator"(): $Spliterator<($VoxelShape)>
public "forEach"(arg0: $Consumer$$Type<($VoxelShape)>): void
[Symbol.iterator](): IterableIterator<$VoxelShape>;
get "empty"(): boolean
get "stateId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeComponents$$Type = ($VoxelShapeComponents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeComponents_ = $VoxelShapeComponents$$Type;
}}
declare module "org.cyclops.cyclopscore.advancement.criterion.ModItemObtainedTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ModItemObtainedTrigger$Instance, $ModItemObtainedTrigger$Instance$$Type} from "org.cyclops.cyclopscore.advancement.criterion.ModItemObtainedTrigger$Instance"

export class $ModItemObtainedTrigger extends $SimpleCriterionTrigger<($ModItemObtainedTrigger$Instance)> {
static readonly "CODEC": $Codec<($ModItemObtainedTrigger$Instance)>

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $Predicate$$Type<($ModItemObtainedTrigger$Instance)>): void
public "codec"(): $Codec<($ModItemObtainedTrigger$Instance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModItemObtainedTrigger$$Type = ($ModItemObtainedTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModItemObtainedTrigger_ = $ModItemObtainedTrigger$$Type;
}}
declare module "org.cyclops.cyclopscore.recipe.type.IInventoryFluid" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"

export interface $IInventoryFluid extends $RecipeInput {

 "getFluidHandler"(): $IFluidHandler
 "getItem"(arg0: integer): $ItemStack
 "size"(): integer
 "isEmpty"(): boolean
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
get "fluidHandler"(): $IFluidHandler
get "empty"(): boolean
}

export namespace $IInventoryFluid {
const probejs$$marker: never
}
export class $IInventoryFluid$$Static implements $IInventoryFluid {


 "getFluidHandler"(): $IFluidHandler
 "getItem"(arg0: integer): $ItemStack
 "size"(): integer
 "isEmpty"(): boolean
 "find"(arg0: $SlotFilter$$Type): $ItemStack
 "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
 "self"(): $RecipeInput
 "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
 "findAll"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryFluid$$Type = ($IInventoryFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryFluid_ = $IInventoryFluid$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.write.IPartTypeWriter" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PartRenderPosition, $PartRenderPosition$$Type} from "org.cyclops.integrateddynamics.api.part.PartRenderPosition"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$DimPos, $DimPos$$Type} from "org.cyclops.cyclopscore.datastructure.DimPos"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPartContainer, $IPartContainer$$Type} from "org.cyclops.integrateddynamics.api.part.IPartContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPartStateWriter, $IPartStateWriter$$Type} from "org.cyclops.integrateddynamics.api.part.write.IPartStateWriter"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IPartNetworkElement, $IPartNetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetworkElement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$INetworkElement, $INetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElement"
import {$IAspectWrite, $IAspectWrite$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspectWrite"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$PartPos, $PartPos$$Type} from "org.cyclops.integrateddynamics.api.part.PartPos"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IPartTypeActiveVariable, $IPartTypeActiveVariable$$Type} from "org.cyclops.integrateddynamics.api.part.IPartTypeActiveVariable"
import {$IVariable, $IVariable$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IVariable"
import {$INetworkEvent, $INetworkEvent$$Type} from "org.cyclops.integrateddynamics.api.network.event.INetworkEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export interface $IPartTypeWriter<P extends $IPartTypeWriter<(P), (S)>, S extends $IPartStateWriter<(P)>> extends $IPartTypeActiveVariable<(P), (S)> {

 "getActiveAspect"(arg0: $PartTarget$$Type, arg1: S): $IAspectWrite<(any), (any)>
 "updateActivation"(arg0: $PartTarget$$Type, arg1: S, arg2: $Player$$Type): void
 "getWriteAspects"(): $List<($IAspectWrite)>
 "hasActiveVariable"(arg0: $IPartNetwork$$Type, arg1: $PartTarget$$Type, arg2: S): boolean
 "getActiveVariable"<V extends $IValue>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): $IVariable<(V)>
 "getTarget"(arg0: $PartPos$$Type, arg1: S): $PartTarget
 "getTargetOffset"(arg0: S): $Vec3i
 "getChannel"(arg0: S): integer
 "getItem"(): $Item
 "isUpdate"(arg0: S): boolean
 "update"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "isEnabled"(arg0: S): boolean
 "getPriority"(arg0: S): integer
 "getState"(arg0: $ValueDeseralizationContext$$Type, arg1: $ItemStack$$Type): S
 "toNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type, arg2: S): void
 "isSolid"(arg0: S): boolean
 "updateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S, arg3: $RandomSource$$Type): void
 "getUniqueName"(): $ResourceLocation
 "setEnabled"(arg0: S, arg1: boolean): void
 "getBlockState"(arg0: $IPartContainer$$Type, arg1: $Direction$$Type): $BlockState
 "getItemStack"(arg0: $ValueDeseralizationContext$$Type, arg1: S, arg2: boolean): $ItemStack
 "addDrops"(arg0: $PartTarget$$Type, arg1: S, arg2: $List$$Type<($ItemStack$$Type)>, arg3: boolean, arg4: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onPostRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "postUpdate"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: boolean): void
 "loadTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "loadTooltip"(arg0: S, arg1: $List$$Type<($Component$$Type)>): void
 "fromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): S
 "getBlockModelPath"(): $ResourceLocation
 "getPartRenderPosition"(): $PartRenderPosition
 "getUpdateInterval"(arg0: S): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: integer, arg5: integer): void
 "supportsOffsets"(): boolean
 "setTargetOffset"(arg0: S, arg1: $PartPos$$Type, arg2: $Vec3i$$Type): boolean
 "setTargetSideOverride"(arg0: S, arg1: $Direction$$Type): void
 "getTargetSideOverride"(arg0: S): $Direction
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "afterNetworkAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkAddition"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "createNetworkElement"(arg0: $IPartContainer$$Type, arg1: $DimPos$$Type, arg2: $Direction$$Type): $INetworkElement
 "onPartActivated"(arg0: S, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $ItemStack$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
 "getBaseBlockState"(): $BlockState
 "onBlockNeighborChange"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: $BlockGetter$$Type, arg5: $Block$$Type, arg6: $BlockPos$$Type): void
 "getConsumptionRate"(arg0: S): integer
 "forceLightTransparency"(arg0: S): boolean
 "getContainerProvider"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "afterNetworkReAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "writeExtraGuiData"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "getTranslationKey"(): StringJS
 "setUpdateInterval"(arg0: S, arg1: integer): void
 "getCloneItemStack"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S): $ItemStack
 "defaultBlockState"(): S
 "onOffsetVariablesChanged"(arg0: $PartTarget$$Type, arg1: S): void
 "getMinimumUpdateInterval"(arg0: S): integer
 "shouldTriggerBlockRenderUpdate"(arg0: S, arg1: S): boolean
 "getContainerProviderSettings"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "getContainerProviderOffsets"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "writeExtraGuiDataSettings"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "writeExtraGuiDataOffsets"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "onEvent"(arg0: $INetworkEvent$$Type, arg1: $IPartNetworkElement$$Type<(P), (S)>): void
 "hasEventSubscriptions"(): boolean
 "getSubscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
get "writeAspects"(): $List<($IAspectWrite)>
get "item"(): $Item
get "uniqueName"(): $ResourceLocation
get "blockModelPath"(): $ResourceLocation
get "partRenderPosition"(): $PartRenderPosition
get "baseBlockState"(): $BlockState
get "translationKey"(): StringJS
get "subscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
}

export namespace $IPartTypeWriter {
const probejs$$marker: never
}
export class $IPartTypeWriter$$Static<P extends $IPartTypeWriter<(P), (S)>, S extends $IPartStateWriter<(P)>> implements $IPartTypeWriter {


 "getActiveAspect"(arg0: $PartTarget$$Type, arg1: S): $IAspectWrite<(any), (any)>
 "updateActivation"(arg0: $PartTarget$$Type, arg1: S, arg2: $Player$$Type): void
 "getWriteAspects"(): $List<($IAspectWrite)>
 "hasActiveVariable"(arg0: $IPartNetwork$$Type, arg1: $PartTarget$$Type, arg2: S): boolean
 "getActiveVariable"<V extends $IValue>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): $IVariable<(V)>
 "getTarget"(arg0: $PartPos$$Type, arg1: S): $PartTarget
 "getTargetOffset"(arg0: S): $Vec3i
 "getChannel"(arg0: S): integer
 "getItem"(): $Item
 "isUpdate"(arg0: S): boolean
 "update"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "isEnabled"(arg0: S): boolean
 "getPriority"(arg0: S): integer
 "getState"(arg0: $ValueDeseralizationContext$$Type, arg1: $ItemStack$$Type): S
 "toNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type, arg2: S): void
 "isSolid"(arg0: S): boolean
 "updateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S, arg3: $RandomSource$$Type): void
 "getUniqueName"(): $ResourceLocation
 "setEnabled"(arg0: S, arg1: boolean): void
 "getBlockState"(arg0: $IPartContainer$$Type, arg1: $Direction$$Type): $BlockState
 "getItemStack"(arg0: $ValueDeseralizationContext$$Type, arg1: S, arg2: boolean): $ItemStack
 "addDrops"(arg0: $PartTarget$$Type, arg1: S, arg2: $List$$Type<($ItemStack$$Type)>, arg3: boolean, arg4: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onPostRemoved"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "postUpdate"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: boolean): void
 "loadTooltip"(arg0: $ItemStack$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "loadTooltip"(arg0: S, arg1: $List$$Type<($Component$$Type)>): void
 "fromNBT"(arg0: $ValueDeseralizationContext$$Type, arg1: $CompoundTag$$Type): S
 "getBlockModelPath"(): $ResourceLocation
 "getPartRenderPosition"(): $PartRenderPosition
 "getUpdateInterval"(arg0: S): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: integer, arg5: integer): void
 "supportsOffsets"(): boolean
 "setTargetOffset"(arg0: S, arg1: $PartPos$$Type, arg2: $Vec3i$$Type): boolean
 "setTargetSideOverride"(arg0: S, arg1: $Direction$$Type): void
 "getTargetSideOverride"(arg0: S): $Direction
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "afterNetworkAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkAddition"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "createNetworkElement"(arg0: $IPartContainer$$Type, arg1: $DimPos$$Type, arg2: $Direction$$Type): $INetworkElement
 "onPartActivated"(arg0: S, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $ItemStack$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
 "getBaseBlockState"(): $BlockState
 "onBlockNeighborChange"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S, arg4: $BlockGetter$$Type, arg5: $Block$$Type, arg6: $BlockPos$$Type): void
 "getConsumptionRate"(arg0: S): integer
 "forceLightTransparency"(arg0: S): boolean
 "getContainerProvider"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "afterNetworkReAlive"(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: S): void
 "writeExtraGuiData"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "getTranslationKey"(): StringJS
 "setUpdateInterval"(arg0: S, arg1: integer): void
 "getCloneItemStack"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: S): $ItemStack
 "defaultBlockState"(): S
 "onOffsetVariablesChanged"(arg0: $PartTarget$$Type, arg1: S): void
 "getMinimumUpdateInterval"(arg0: S): integer
 "shouldTriggerBlockRenderUpdate"(arg0: S, arg1: S): boolean
 "getContainerProviderSettings"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "getContainerProviderOffsets"(arg0: $PartPos$$Type): $Optional<($MenuProvider)>
 "writeExtraGuiDataSettings"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "writeExtraGuiDataOffsets"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $PartPos$$Type, arg2: $ServerPlayer$$Type): void
 "onEvent"(arg0: $INetworkEvent$$Type, arg1: $IPartNetworkElement$$Type<(P), (S)>): void
 "hasEventSubscriptions"(): boolean
 "getSubscribedEvents"(): $Set<($Class<($INetworkEvent)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartTypeWriter$$Type<P, S> = ($IPartTypeWriter<(P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartTypeWriter_<P, S> = $IPartTypeWriter$$Type<(P), (S)>;
}}
declare module "org.cyclops.cyclopscore.inventory.IValueNotifiable" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"

export interface $IValueNotifiable {

 "onUpdate"(arg0: integer, arg1: $CompoundTag$$Type): void
 "getValueNotifiableType"(): $MenuType<(any)>
get "valueNotifiableType"(): $MenuType<(any)>
}

export namespace $IValueNotifiable {
const probejs$$marker: never
}
export class $IValueNotifiable$$Static implements $IValueNotifiable {


 "onUpdate"(arg0: integer, arg1: $CompoundTag$$Type): void
 "getValueNotifiableType"(): $MenuType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValueNotifiable$$Type = ($IValueNotifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValueNotifiable_ = $IValueNotifiable$$Type;
}}
declare module "org.cyclops.integrateddynamics.capability.partcontainer.PartContainerDefault" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$DimPos, $DimPos$$Type} from "org.cyclops.cyclopscore.datastructure.DimPos"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPartContainer, $IPartContainer$$Type} from "org.cyclops.integrateddynamics.api.part.IPartContainer"
import {$PartHelpers$PartStateHolder, $PartHelpers$PartStateHolder$$Type} from "org.cyclops.integrateddynamics.core.helper.PartHelpers$PartStateHolder"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$PartCapability, $PartCapability$$Type} from "org.cyclops.integrateddynamics.api.part.PartCapability"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EnumFacingMap, $EnumFacingMap$$Type} from "org.cyclops.cyclopscore.datastructure.EnumFacingMap"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export class $PartContainerDefault implements $IPartContainer {

constructor()

public "getPosition"(): $DimPos
public "update"(): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getParts"(): $Map<($Direction), ($IPartType<(any), (any)>)>
public "getCapability"<T>(arg0: $PartCapability$$Type<(T)>, arg1: $INetwork$$Type, arg2: $IPartNetwork$$Type, arg3: $PartTarget$$Type): $Optional<(T)>
public "hasPart"(arg0: $Direction$$Type): boolean
public "hasParts"(): boolean
public "setPart"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $Direction$$Type, arg1: $IPartType$$Type<(P), (S)>, arg2: $IPartState$$Type<(P)>): void
public "setPartState"(arg0: $Direction$$Type, arg1: $IPartState$$Type<(any)>): void
public "getPartState"(arg0: $Direction$$Type): $IPartState<(any)>
public "getPartData"(): $EnumFacingMap<($PartHelpers$PartStateHolder<(any), (any)>)>
public "canAddPart"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $Direction$$Type, arg1: $IPartType$$Type<(P), (S)>): boolean
public "removePart"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: boolean, arg3: boolean): $IPartType<(any), (any)>
public "getPart"(arg0: $Direction$$Type): $IPartType<(any), (any)>
public "setPartData"(arg0: $Map$$Type<($Direction$$Type), ($PartHelpers$PartStateHolder$$Type<(any), (any)>)>): void
public "silentResetPartData"(): void
public "getWatchingSide"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): $Direction
get "position"(): $DimPos
get "parts"(): $Map<($Direction), ($IPartType<(any), (any)>)>
get "partData"(): $EnumFacingMap<($PartHelpers$PartStateHolder<(any), (any)>)>
set "partData"(value: $Map$$Type<($Direction$$Type), ($PartHelpers$PartStateHolder$$Type<(any), (any)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartContainerDefault$$Type = ($PartContainerDefault);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartContainerDefault_ = $PartContainerDefault$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.logicprogrammer.ILogicProgrammerElementType" {
import {$ILogicProgrammerElement, $ILogicProgrammerElement$$Type} from "org.cyclops.integrateddynamics.api.logicprogrammer.ILogicProgrammerElement"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"

export interface $ILogicProgrammerElementType<E extends $ILogicProgrammerElement<(any), (any), (any)>> {

 "getByName"(arg0: $ResourceLocation$$Type): E
 "getName"(arg0: E): $ResourceLocation
 "getUniqueName"(): $ResourceLocation
 "createElements"(): $List<(E)>
get "uniqueName"(): $ResourceLocation
}

export namespace $ILogicProgrammerElementType {
const probejs$$marker: never
}
export class $ILogicProgrammerElementType$$Static<E extends $ILogicProgrammerElement<(any), (any), (any)>> implements $ILogicProgrammerElementType {


 "getByName"(arg0: $ResourceLocation$$Type): E
 "getName"(arg0: E): $ResourceLocation
 "getUniqueName"(): $ResourceLocation
 "createElements"(): $List<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILogicProgrammerElementType$$Type<E> = ($ILogicProgrammerElementType<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILogicProgrammerElementType_<E> = $ILogicProgrammerElementType$$Type<(E)>;
}}
declare module "org.cyclops.cyclopscore.command.argument.ArgumentTypeConfigProperty" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ConfigurablePropertyData, $ConfigurablePropertyData$$Type} from "org.cyclops.cyclopscore.config.ConfigurablePropertyData"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$IModBase, $IModBase$$Type} from "org.cyclops.cyclopscore.init.IModBase"

export class $ArgumentTypeConfigProperty implements $ArgumentType<($ConfigurablePropertyData)> {

constructor(arg0: $IModBase$$Type)

public "parse"(arg0: $StringReader$$Type): any
public "getExamples"(): $Collection<(StringJS)>
public "getMod"(): $IModBase
public "listSuggestions"<S>(arg0: $CommandContext$$Type<(S)>, arg1: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $ConfigurablePropertyData<(any)>
get "examples"(): $Collection<(StringJS)>
get "mod"(): $IModBase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentTypeConfigProperty$$Type = ($ArgumentTypeConfigProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentTypeConfigProperty_ = $ArgumentTypeConfigProperty$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockInvisibleLight" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockInvisibleLight extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "LIGHT": $IntegerProperty
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
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockInvisibleLight$$Type = ($BlockInvisibleLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockInvisibleLight_ = $BlockInvisibleLight$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.ProcessHandler$ProcessCommand" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$ProcessHandler$Redirect, $ProcessHandler$Redirect$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.ProcessHandler$Redirect"

export class $ProcessHandler$ProcessCommand {


public "getEnvironment"(): $Map<(StringJS), (StringJS)>
public static "create"(cmd: $List$$Type<(StringJS)>, cwd: StringJS, environment: $Map$$Type<(StringJS), (StringJS)>, redirectErrorStream: boolean, inputRedirect: $ProcessHandler$Redirect$$Type, outputRedirect: $ProcessHandler$Redirect$$Type, errorRedirect: $ProcessHandler$Redirect$$Type): $ProcessHandler$ProcessCommand
public "getCommand"(): $List<(StringJS)>
public "getDirectory"(): StringJS
public "getOutputRedirect"(): $ProcessHandler$Redirect
public "isRedirectErrorStream"(): boolean
public "getErrorRedirect"(): $ProcessHandler$Redirect
public "getInputRedirect"(): $ProcessHandler$Redirect
get "environment"(): $Map<(StringJS), (StringJS)>
get "command"(): $List<(StringJS)>
get "directory"(): StringJS
get "outputRedirect"(): $ProcessHandler$Redirect
get "redirectErrorStream"(): boolean
get "errorRedirect"(): $ProcessHandler$Redirect
get "inputRedirect"(): $ProcessHandler$Redirect
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessHandler$ProcessCommand$$Type = ($ProcessHandler$ProcessCommand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProcessHandler$ProcessCommand_ = $ProcessHandler$ProcessCommand$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.INetworkElement" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $INetworkElement extends $Comparable<($INetworkElement)> {

 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$$Type): void
 "isUpdate"(): boolean
 "update"(arg0: $INetwork$$Type): void
 "getPriority"(): integer
 "canRevalidate"(arg0: $INetwork$$Type): boolean
 "revalidate"(arg0: $INetwork$$Type): void
/**
 * 
 * @deprecated
 */
 "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean, arg2: boolean): void
 "addDrops"(arg0: $BlockState$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean, arg3: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type): void
 "onPostRemoved"(arg0: $INetwork$$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$$Type, arg1: $BlockGetter$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type): void
 "getUpdateInterval"(): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "beforeNetworkKill"(arg0: $INetwork$$Type): void
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkAlive"(arg0: $INetwork$$Type): void
 "onNetworkAddition"(arg0: $INetwork$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onNetworkRemoval"(arg0: $INetwork$$Type): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$$Type): void
 "compareTo"(arg0: $INetworkElement$$Type): integer
get "channel"(): integer
get "priority"(): integer
get "updateInterval"(): integer
}

export namespace $INetworkElement {
const probejs$$marker: never
}
export class $INetworkElement$$Static implements $INetworkElement {


 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$$Type): void
 "isUpdate"(): boolean
 "update"(arg0: $INetwork$$Type): void
 "getPriority"(): integer
 "canRevalidate"(arg0: $INetwork$$Type): boolean
 "revalidate"(arg0: $INetwork$$Type): void
/**
 * 
 * @deprecated
 */
 "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean, arg2: boolean): void
 "addDrops"(arg0: $BlockState$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean, arg3: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type): void
 "onPostRemoved"(arg0: $INetwork$$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$$Type, arg1: $BlockGetter$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type): void
 "getUpdateInterval"(): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "beforeNetworkKill"(arg0: $INetwork$$Type): void
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkAlive"(arg0: $INetwork$$Type): void
 "onNetworkAddition"(arg0: $INetwork$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onNetworkRemoval"(arg0: $INetwork$$Type): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$$Type): void
 "compareTo"(arg0: $INetworkElement$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkElement$$Type = ($INetworkElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkElement_ = $INetworkElement$$Type;
}}
declare module "org.cyclops.integrateddynamics.item.ItemWrench$Mode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $ItemWrench$Mode extends $Enum<($ItemWrench$Mode)> implements $StringRepresentable {
static readonly "CODEC": $StringRepresentable$EnumCodec<($ItemWrench$Mode)>
static readonly "OFFSET_SIDE": $ItemWrench$Mode
static readonly "OFFSET": $ItemWrench$Mode
static readonly "DEFAULT": $ItemWrench$Mode
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ItemWrench$Mode)>


public "getLabel"(): StringJS
public "getName"(): StringJS
public static "values"(): ($ItemWrench$Mode)[]
public static "valueOf"(arg0: StringJS): $ItemWrench$Mode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "label"(): StringJS
get "name"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemWrench$Mode$$Type = (("integrateddynamics:default") | ("integrateddynamics:offset") | ("integrateddynamics:offset_side"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemWrench$Mode_ = $ItemWrench$Mode$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockVariablestore" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockWithEntityGuiCabled, $BlockWithEntityGuiCabled$$Type} from "org.cyclops.integrateddynamics.core.block.BlockWithEntityGuiCabled"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockVariablestore extends $BlockWithEntityGuiCabled {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockVariablestore)>
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockVariablestore$$Type = ($BlockVariablestore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockVariablestore_ = $BlockVariablestore$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.part.event.PartAspectEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IAspect, $IAspect$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspect"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$PartEvent, $PartEvent$$Type} from "org.cyclops.integrateddynamics.core.part.event.PartEvent"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export class $PartAspectEvent<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>, A extends $IAspect<(any), (any)>> extends $PartEvent<(P), (S)> {

constructor(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: $PartTarget$$Type, arg3: P, arg4: S, arg5: $Player$$Type, arg6: A)

public "getAspect"(): A
public "getEntityPlayer"(): $Player
get "aspect"(): A
get "entityPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartAspectEvent$$Type<P, S, A> = ($PartAspectEvent<(P), (S), (A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartAspectEvent_<P, S, A> = $PartAspectEvent$$Type<(P), (S), (A)>;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.proxy.Proxy" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Proxy {

}

export namespace $Proxy {
const probejs$$marker: never
}
export class $Proxy$$Static implements $Proxy {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Proxy$$Type = ($Proxy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Proxy_ = $Proxy$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.event.INetworkEvent" {
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"

export interface $INetworkEvent {

 "getNetwork"(): $INetwork

(): $INetwork$$Type
get "network"(): $INetwork
}

export namespace $INetworkEvent {
const probejs$$marker: never
}
export class $INetworkEvent$$Static implements $INetworkEvent {


 "getNetwork"(): $INetwork
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworkEvent$$Type = (() => $INetwork$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworkEvent_ = $INetworkEvent$$Type;
}}
declare module "org.cyclops.cyclopscore.datastructure.EnumFacingMap" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$EnumMap, $EnumMap$$Type} from "java.util.EnumMap"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $EnumFacingMap<V> extends $EnumMap<($Direction), (V)> {

constructor(arg0: $Map$$Type<($Direction$$Type), (V)>)
constructor(arg0: $EnumMap$$Type<($Direction$$Type), (V)>)
constructor()

public static "newMap"<V>(arg0: $Map$$Type<($Direction$$Type), (V)>): $EnumFacingMap<(V)>
public static "newMap"<V>(arg0: $EnumMap$$Type<($Direction$$Type), (V)>): $EnumFacingMap<(V)>
public static "newMap"<V>(): $EnumFacingMap<(V)>
public static "forAllValues"<V>(arg0: V, arg1: V, arg2: V, arg3: V, arg4: V, arg5: V): $EnumFacingMap<(V)>
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumFacingMap$$Type<V> = ($EnumFacingMap<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumFacingMap_<V> = $EnumFacingMap$$Type<(V)>;
}}
declare module "org.cyclops.integratedterminals.core.terminalstorage.crafting.HandlerWrappedTerminalCraftingPlan" {
import {$ITerminalCraftingPlanFlat, $ITerminalCraftingPlanFlat$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalCraftingPlanFlat"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ITerminalStorageTabIngredientCraftingHandler, $ITerminalStorageTabIngredientCraftingHandler$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.crafting.ITerminalStorageTabIngredientCraftingHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $HandlerWrappedTerminalCraftingPlan {

constructor(arg0: $ITerminalStorageTabIngredientCraftingHandler$$Type<(any), (any)>, arg1: $ITerminalCraftingPlanFlat$$Type<(any)>)

public "getHandler"(): $ITerminalStorageTabIngredientCraftingHandler<(any), (any)>
public static "deserialize"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $HandlerWrappedTerminalCraftingPlan
public static "serialize"(arg0: $HolderLookup$Provider$$Type, arg1: $HandlerWrappedTerminalCraftingPlan$$Type): $CompoundTag
public "getCraftingPlanFlat"(): $ITerminalCraftingPlanFlat<(any)>
get "handler"(): $ITerminalStorageTabIngredientCraftingHandler<(any), (any)>
get "craftingPlanFlat"(): $ITerminalCraftingPlanFlat<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandlerWrappedTerminalCraftingPlan$$Type = ($HandlerWrappedTerminalCraftingPlan);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandlerWrappedTerminalCraftingPlan_ = $HandlerWrappedTerminalCraftingPlan$$Type;
}}
declare module "org.cyclops.cyclopscore.inventory.container.button.IContainerButtonClickAcceptorServer" {
import {$IContainerButtonAction, $IContainerButtonAction$$Type} from "org.cyclops.cyclopscore.inventory.container.button.IContainerButtonAction"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"

export interface $IContainerButtonClickAcceptorServer<C extends $AbstractContainerMenu> {

 "onButtonClick"(arg0: StringJS): boolean
 "putButtonAction"(arg0: StringJS, arg1: $IContainerButtonAction$$Type<(C)>): void
}

export namespace $IContainerButtonClickAcceptorServer {
const probejs$$marker: never
}
export class $IContainerButtonClickAcceptorServer$$Static<C extends $AbstractContainerMenu> implements $IContainerButtonClickAcceptorServer {


 "onButtonClick"(arg0: StringJS): boolean
 "putButtonAction"(arg0: StringJS, arg1: $IContainerButtonAction$$Type<(C)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerButtonClickAcceptorServer$$Type<C> = ($IContainerButtonClickAcceptorServer<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerButtonClickAcceptorServer_<C> = $IContainerButtonClickAcceptorServer$$Type<(C)>;
}}
declare module "org.cyclops.cyclopscore.helper.IL10NHelpers" {
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IL10NHelpers {

 "localize"(arg0: StringJS, ...arg1: (any)[]): StringJS
 "addStatusInfo"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: StringJS): void
 "getInfoPrefix"(): StringJS
 "addOptionalInfo"(arg0: $List$$Type<($Component$$Type)>, arg1: StringJS): void
 "getMaxTooltipLineLength"(): integer
get "infoPrefix"(): StringJS
get "maxTooltipLineLength"(): integer
}

export namespace $IL10NHelpers {
const probejs$$marker: never
}
export class $IL10NHelpers$$Static implements $IL10NHelpers {


 "localize"(arg0: StringJS, ...arg1: (any)[]): StringJS
 "addStatusInfo"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: StringJS): void
 "getInfoPrefix"(): StringJS
 "addOptionalInfo"(arg0: $List$$Type<($Component$$Type)>, arg1: StringJS): void
 "getMaxTooltipLineLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IL10NHelpers$$Type = ($IL10NHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IL10NHelpers_ = $IL10NHelpers$$Type;
}}
declare module "org.cyclops.integrateddynamics.core.blockentity.BlockEntityMultipartTicking" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ICableFakeable, $ICableFakeable$$Type} from "org.cyclops.integrateddynamics.api.block.cable.ICableFakeable"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$CableTileMultipartTicking, $CableTileMultipartTicking$$Type} from "org.cyclops.integrateddynamics.capability.cable.CableTileMultipartTicking"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$PartHelpers$IPartStateHolderCallback, $PartHelpers$IPartStateHolderCallback$$Type} from "org.cyclops.integrateddynamics.core.helper.PartHelpers$IPartStateHolderCallback"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$PartHelpers$PartStateHolder, $PartHelpers$PartStateHolder$$Type} from "org.cyclops.integrateddynamics.core.helper.PartHelpers$PartStateHolder"
import {$PartCapability, $PartCapability$$Type} from "org.cyclops.integrateddynamics.api.part.PartCapability"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$PartContainerTileMultipartTicking, $PartContainerTileMultipartTicking$$Type} from "org.cyclops.integrateddynamics.capability.partcontainer.PartContainerTileMultipartTicking"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnumFacingMap, $EnumFacingMap$$Type} from "org.cyclops.cyclopscore.datastructure.EnumFacingMap"
import {$CyclopsBlockEntity, $CyclopsBlockEntity$$Type} from "org.cyclops.cyclopscore.blockentity.CyclopsBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$INetworkCarrier, $INetworkCarrier$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkCarrier"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntityMultipartTicking extends $CyclopsBlockEntity implements $PartHelpers$IPartStateHolderCallback {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getLightLevels"(): $EnumFacingMap<(integer)>
public "getConnected"(): $EnumFacingMap<(boolean)>
public "getCable"(): $CableTileMultipartTicking
public "getNetwork"(): $INetwork
public "onUpdateReceived"(): void
public "getNetworkCarrier"(): $INetworkCarrier
public "onChunkUnloaded"(): void
public "getConnectionState"(): $ModelData
public static "registerMultipartTickingCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type, arg1: $BlockEntityType$$Type<($BlockEntityMultipartTicking$$Type)>): void
public "onSet"(arg0: $PartHelpers$PartStateHolder$$Type<(any), (any)>): void
public "updateRedstoneInfo"(arg0: $Direction$$Type, arg1: boolean): void
public "updateLightInfo"(): void
public "getForceDisconnected"(): $EnumFacingMap<(boolean)>
public "setForceDisconnected"(arg0: $EnumFacingMap$$Type<(boolean)>): void
public "getRedstoneLevels"(): $EnumFacingMap<(integer)>
public "getRedstoneInputs"(): $EnumFacingMap<(boolean)>
public "getRedstoneStrong"(): $EnumFacingMap<(boolean)>
public "getLastRedstonePulses"(): $EnumFacingMap<(integer)>
public "getFacadeBlockTag"(): $CompoundTag
public "setFacadeBlockTag"(arg0: $CompoundTag$$Type): void
public "getCableFakeable"(): $ICableFakeable
public "getPartContainer"(): $PartContainerTileMultipartTicking
public static "registerPartCapabilityAsBlockCapability"<T>(arg0: $RegisterCapabilitiesEvent$$Type, arg1: $BlockEntityType$$Type<($BlockEntityMultipartTicking$$Type)>, arg2: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg3: $PartCapability$$Type<(T)>): void
public "setForceLightCheckAtClient"(arg0: boolean): void
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "lightLevels"(): $EnumFacingMap<(integer)>
get "connected"(): $EnumFacingMap<(boolean)>
get "cable"(): $CableTileMultipartTicking
get "network"(): $INetwork
get "networkCarrier"(): $INetworkCarrier
get "connectionState"(): $ModelData
get "forceDisconnected"(): $EnumFacingMap<(boolean)>
set "forceDisconnected"(value: $EnumFacingMap$$Type<(boolean)>)
get "redstoneLevels"(): $EnumFacingMap<(integer)>
get "redstoneInputs"(): $EnumFacingMap<(boolean)>
get "redstoneStrong"(): $EnumFacingMap<(boolean)>
get "lastRedstonePulses"(): $EnumFacingMap<(integer)>
get "facadeBlockTag"(): $CompoundTag
set "facadeBlockTag"(value: $CompoundTag$$Type)
get "cableFakeable"(): $ICableFakeable
get "partContainer"(): $PartContainerTileMultipartTicking
set "forceLightCheckAtClient"(value: boolean)
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityMultipartTicking$$Type = ($BlockEntityMultipartTicking);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityMultipartTicking_ = $BlockEntityMultipartTicking$$Type;
}}
declare module "org.cyclops.cyclopscore.helper.IBlockEntityHelpers" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IBlockEntityHelpers {

 "get"<T>(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Class$$Type<(T)>): $Optional<(T)>
 "isUnsafeBlockEntityGetter"(): boolean
 "setUnsafeBlockEntityGetter"(arg0: boolean): void
 "getLevelBlockEntityUnchecked"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $BlockEntity
get "unsafeBlockEntityGetter"(): boolean
set "unsafeBlockEntityGetter"(value: boolean)
}

export namespace $IBlockEntityHelpers {
const probejs$$marker: never
}
export class $IBlockEntityHelpers$$Static implements $IBlockEntityHelpers {


 "get"<T>(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Class$$Type<(T)>): $Optional<(T)>
 "isUnsafeBlockEntityGetter"(): boolean
 "setUnsafeBlockEntityGetter"(arg0: boolean): void
 "getLevelBlockEntityUnchecked"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntityHelpers$$Type = ($IBlockEntityHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEntityHelpers_ = $IBlockEntityHelpers$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.IOAccess$Builder" {
import {$IOAccess, $IOAccess$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.IOAccess"
import {$FileSystem, $FileSystem$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.FileSystem"

export class $IOAccess$Builder {


public "build"(): $IOAccess
public "fileSystem"(fileSystem: $FileSystem$$Type): $IOAccess$Builder
public "allowHostFileAccess"(allow: boolean): $IOAccess$Builder
public "allowHostSocketAccess"(allow: boolean): $IOAccess$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOAccess$Builder$$Type = ($IOAccess$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOAccess$Builder_ = $IOAccess$Builder$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockEnergyBattery" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEnergyBatteryBase, $BlockEnergyBatteryBase$$Type} from "org.cyclops.integrateddynamics.block.BlockEnergyBatteryBase"
import {$TextureAtlasStitchedEvent, $TextureAtlasStitchedEvent$$Type} from "net.neoforged.neoforge.client.event.TextureAtlasStitchedEvent"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEnergyBattery extends $BlockEnergyBatteryBase {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockEnergyBattery)>
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
 "iconOverlay": $TextureAtlasSprite
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "isCreative"(): boolean
public "postTextureStitch"(arg0: $TextureAtlasStitchedEvent$$Type): void
public "asHolder"(): $Holder<(any)>
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEnergyBattery$$Type = ($BlockEnergyBattery);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEnergyBattery_ = $BlockEnergyBattery$$Type;
}}
declare module "org.cyclops.commoncapabilities.api.ingredient.capability.AttachCapabilitiesEventIngredientComponent" {
import {$IngredientComponent, $IngredientComponent$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientComponent"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IngredientComponentCapability, $IngredientComponentCapability$$Type} from "org.cyclops.commoncapabilities.api.ingredient.capability.IngredientComponentCapability"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"

export class $AttachCapabilitiesEventIngredientComponent<T, M> extends $Event implements $IModBusEvent {

constructor(arg0: $IngredientComponent$$Type<(T), (M)>)

public "isRegistered"(arg0: $IngredientComponentCapability$$Type<(any), (any)>, arg1: $IngredientComponent$$Type<(any), (any)>): boolean
public "register"<T, C>(arg0: $IngredientComponentCapability$$Type<(T), (C)>, arg1: $IngredientComponent$$Type<(any), (any)>, arg2: $ICapabilityProvider$$Type<($IngredientComponent<(any), (any)>), (C), (T)>): void
public "getIngredientComponent"(): $IngredientComponent<(T), (M)>
get "ingredientComponent"(): $IngredientComponent<(T), (M)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachCapabilitiesEventIngredientComponent$$Type<T, M> = ($AttachCapabilitiesEventIngredientComponent<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachCapabilitiesEventIngredientComponent_<T, M> = $AttachCapabilitiesEventIngredientComponent$$Type<(T), (M)>;
}}
declare module "org.cyclops.integrateddynamics.api.network.IPartNetworkElement" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$INetworkElement, $INetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.INetworkElement"
import {$DimPos, $DimPos$$Type} from "org.cyclops.cyclopscore.datastructure.DimPos"
import {$IPartContainer, $IPartContainer$$Type} from "org.cyclops.integrateddynamics.api.part.IPartContainer"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IPositionedNetworkElement, $IPositionedNetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.IPositionedNetworkElement"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IEventListenableNetworkElement, $IEventListenableNetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.IEventListenableNetworkElement"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$IIdentifiableNetworkElement, $IIdentifiableNetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.IIdentifiableNetworkElement"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$ISidedNetworkElement, $ISidedNetworkElement$$Type} from "org.cyclops.integrateddynamics.api.network.ISidedNetworkElement"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IPartNetworkElement<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>> extends $IEventListenableNetworkElement<(P)>, $IPositionedNetworkElement, $ISidedNetworkElement, $IIdentifiableNetworkElement {

 "getTarget"(): $PartTarget
 "isLoaded"(): boolean
 "getPartState"(): S
 "getPart"(): P
 "getPartContainer"(): $IPartContainer
 "getNetworkEventListener"(): $Optional<(P)>
 "getPosition"(): $DimPos
 "getSide"(): $Direction
 "getId"(): integer
 "getGroup"(): $ResourceLocation
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$$Type): void
 "isUpdate"(): boolean
 "update"(arg0: $INetwork$$Type): void
 "getPriority"(): integer
 "canRevalidate"(arg0: $INetwork$$Type): boolean
 "revalidate"(arg0: $INetwork$$Type): void
/**
 * 
 * @deprecated
 */
 "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean, arg2: boolean): void
 "addDrops"(arg0: $BlockState$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean, arg3: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type): void
 "onPostRemoved"(arg0: $INetwork$$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$$Type, arg1: $BlockGetter$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type): void
 "getUpdateInterval"(): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "beforeNetworkKill"(arg0: $INetwork$$Type): void
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkAlive"(arg0: $INetwork$$Type): void
 "onNetworkAddition"(arg0: $INetwork$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onNetworkRemoval"(arg0: $INetwork$$Type): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$$Type): void
 "compareTo"(arg0: $INetworkElement$$Type): integer
get "target"(): $PartTarget
get "loaded"(): boolean
get "partState"(): S
get "part"(): P
get "partContainer"(): $IPartContainer
get "networkEventListener"(): $Optional<(P)>
get "position"(): $DimPos
get "side"(): $Direction
get "id"(): integer
get "group"(): $ResourceLocation
get "channel"(): integer
get "priority"(): integer
get "updateInterval"(): integer
}

export namespace $IPartNetworkElement {
const GROUP: $ResourceLocation
const probejs$$marker: never
}
export class $IPartNetworkElement$$Static<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>> implements $IPartNetworkElement {
static readonly "GROUP": $ResourceLocation


 "getTarget"(): $PartTarget
 "isLoaded"(): boolean
 "getPartState"(): S
 "getPart"(): P
 "getPartContainer"(): $IPartContainer
 "getNetworkEventListener"(): $Optional<(P)>
 "getPosition"(): $DimPos
 "getSide"(): $Direction
 "getId"(): integer
 "getGroup"(): $ResourceLocation
 "getChannel"(): integer
 "invalidate"(arg0: $INetwork$$Type): void
 "isUpdate"(): boolean
 "update"(arg0: $INetwork$$Type): void
 "getPriority"(): integer
 "canRevalidate"(arg0: $INetwork$$Type): boolean
 "revalidate"(arg0: $INetwork$$Type): void
/**
 * 
 * @deprecated
 */
 "addDrops"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: boolean, arg2: boolean): void
 "addDrops"(arg0: $BlockState$$Type, arg1: $List$$Type<($ItemStack$$Type)>, arg2: boolean, arg3: boolean): void
 "onPreRemoved"(arg0: $INetwork$$Type): void
 "onPostRemoved"(arg0: $INetwork$$Type): void
 "onNeighborBlockChange"(arg0: $INetwork$$Type, arg1: $BlockGetter$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type): void
 "getUpdateInterval"(): integer
/**
 * 
 * @deprecated
 */
 "setPriorityAndChannel"(arg0: $INetwork$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "beforeNetworkKill"(arg0: $INetwork$$Type): void
 "beforeNetworkKill"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkAlive"(arg0: $INetwork$$Type): void
 "onNetworkAddition"(arg0: $INetwork$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onNetworkRemoval"(arg0: $INetwork$$Type): void
 "onNetworkRemoval"(arg0: $INetwork$$Type, arg1: $BlockState$$Type): void
 "afterNetworkReAlive"(arg0: $INetwork$$Type): void
 "compareTo"(arg0: $INetworkElement$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPartNetworkElement$$Type<P, S> = ($IPartNetworkElement<(P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPartNetworkElement_<P, S> = $IPartNetworkElement$$Type<(P), (S)>;
}}
declare module "org.cyclops.cyclopscore.recipe.ItemStackFromIngredient" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"

export class $ItemStackFromIngredient {

constructor(arg0: $List$$Type<(StringJS)>, arg1: StringJS, arg2: $Ingredient$$Type, arg3: integer)

public "getTag"(): StringJS
public "getCount"(): integer
public "writeToPacket"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "readFromPacket"(arg0: $RegistryFriendlyByteBuf$$Type): $ItemStackFromIngredient
public "getIngredient"(): $Ingredient
public "getFirstItemStack"(): $ItemStack
get "tag"(): StringJS
get "count"(): integer
get "ingredient"(): $Ingredient
get "firstItemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackFromIngredient$$Type = ($ItemStackFromIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackFromIngredient_ = $ItemStackFromIngredient$$Type;
}}
declare module "org.cyclops.cyclopscore.recipe.type.RecipeCraftingShapelessCustomOutput" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$RecipeCraftingShapelessCustomOutput$Serializer, $RecipeCraftingShapelessCustomOutput$Serializer$$Type} from "org.cyclops.cyclopscore.recipe.type.RecipeCraftingShapelessCustomOutput$Serializer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapelessRecipe, $ShapelessRecipe$$Type} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RecipeCraftingShapelessCustomOutput extends $ShapelessRecipe {
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "group": StringJS

constructor(arg0: $RecipeCraftingShapelessCustomOutput$Serializer$$Type, arg1: StringJS, arg2: $CraftingBookCategory$$Type, arg3: $ItemStack$$Type, arg4: $NonNullList$$Type<($Ingredient$$Type)>)

public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getRecipeOutput"(): $ItemStack
get "resultItem"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "recipeOutput"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCraftingShapelessCustomOutput$$Type = ($RecipeCraftingShapelessCustomOutput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeCraftingShapelessCustomOutput_ = $RecipeCraftingShapelessCustomOutput$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.network.NetworkCapability" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BaseCapability, $BaseCapability$$Type} from "net.neoforged.neoforge.capabilities.BaseCapability"

export class $NetworkCapability<T> extends $BaseCapability<(T), (void)> {


public static "create"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $NetworkCapability<(T)>
public static "getAll"(): $List<($NetworkCapability<(any)>)>
public "getCapability"(arg0: $Map$$Type<($NetworkCapability$$Type<(any)>), ($List$$Type<($ICapabilityProvider$$Type<($INetwork$$Type), (void), (any)>)>)>, arg1: $INetwork$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkCapability$$Type<T> = ($NetworkCapability<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkCapability_<T> = $NetworkCapability$$Type<(T)>;
}}
declare module "org.cyclops.integrateddynamics.api.part.aspect.IAspectRead" {
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$IAspect, $IAspect$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspect"
import {$List, $List$$Type} from "java.util.List"
import {$IAspectProperties, $IAspectProperties$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.property.IAspectProperties"
import {$AspectUpdateType, $AspectUpdateType$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.AspectUpdateType"
import {$IPartNetwork, $IPartNetwork$$Type} from "org.cyclops.integrateddynamics.api.network.IPartNetwork"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IAspectVariable, $IAspectVariable$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.IAspectVariable"
import {$PartPos, $PartPos$$Type} from "org.cyclops.integrateddynamics.api.part.PartPos"
import {$IAspectPropertyTypeInstance, $IAspectPropertyTypeInstance$$Type} from "org.cyclops.integrateddynamics.api.part.aspect.property.IAspectPropertyTypeInstance"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IPartState, $IPartState$$Type} from "org.cyclops.integrateddynamics.api.part.IPartState"
import {$INetwork, $INetwork$$Type} from "org.cyclops.integrateddynamics.api.network.INetwork"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$IPartType, $IPartType$$Type} from "org.cyclops.integrateddynamics.api.part.IPartType"
import {$PartTarget, $PartTarget$$Type} from "org.cyclops.integrateddynamics.api.part.PartTarget"

export interface $IAspectRead<V extends $IValue, T extends $IValueType<(V)>> extends $IAspect<(V), (T)> {

 "getUpdateType"(): $AspectUpdateType
/**
 * 
 * @deprecated
 */
 "createNewVariable"(arg0: $PartTarget$$Type): $IAspectVariable<(V)>
 "createNewVariable"(arg0: $Supplier$$Type<($PartTarget$$Type)>): $IAspectVariable<(V)>
 "update"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: P, arg3: $PartTarget$$Type, arg4: S): void
 "getProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S): $IAspectProperties
 "setProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S, arg3: $IAspectProperties$$Type): void
 "getUniqueName"(): $ResourceLocation
 "getValueType"(): T
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): void
 "hasProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(): boolean
 "getTranslationKey"(): StringJS
 "getDefaultProperties"(): $IAspectProperties
 "getPropertyTypes"(): $Collection<($IAspectPropertyTypeInstance)>
 "getPropertiesContainerProvider"(arg0: $PartPos$$Type): $MenuProvider
get "updateType"(): $AspectUpdateType
get "uniqueName"(): $ResourceLocation
get "valueType"(): T
get "translationKey"(): StringJS
get "defaultProperties"(): $IAspectProperties
get "propertyTypes"(): $Collection<($IAspectPropertyTypeInstance)>
}

export namespace $IAspectRead {
const probejs$$marker: never
}
export class $IAspectRead$$Static<V extends $IValue, T extends $IValueType<(V)>> implements $IAspectRead {


 "getUpdateType"(): $AspectUpdateType
/**
 * 
 * @deprecated
 */
 "createNewVariable"(arg0: $PartTarget$$Type): $IAspectVariable<(V)>
 "createNewVariable"(arg0: $Supplier$$Type<($PartTarget$$Type)>): $IAspectVariable<(V)>
 "update"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: $INetwork$$Type, arg1: $IPartNetwork$$Type, arg2: P, arg3: $PartTarget$$Type, arg4: S): void
 "getProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S): $IAspectProperties
 "setProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(arg0: P, arg1: $PartTarget$$Type, arg2: S, arg3: $IAspectProperties$$Type): void
 "getUniqueName"(): $ResourceLocation
 "getValueType"(): T
 "loadTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): void
 "hasProperties"<P extends $IPartType<(P), (S)>, S extends $IPartState<(P)>>(): boolean
 "getTranslationKey"(): StringJS
 "getDefaultProperties"(): $IAspectProperties
 "getPropertyTypes"(): $Collection<($IAspectPropertyTypeInstance)>
 "getPropertiesContainerProvider"(arg0: $PartPos$$Type): $MenuProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAspectRead$$Type<V, T> = ($IAspectRead<(V), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAspectRead_<V, T> = $IAspectRead$$Type<(V), (T)>;
}}
declare module "org.cyclops.cyclopscore.inventory.container.InventoryContainer" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ContainerExtended, $ContainerExtended$$Type} from "org.cyclops.cyclopscore.inventory.container.ContainerExtended"

/**
 * 
 * @deprecated
 */
export class $InventoryContainer extends $ContainerExtended {
readonly "quickcraftSlots": $Set<($Slot)>
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
 "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
 "quickcraftType": integer
readonly "containerListeners": $List<($ContainerListener)>
 "quickcraftStatus": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(any)>, arg1: integer, arg2: $Inventory$$Type, arg3: $Container$$Type)

public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getContainerInventory"(): $Container
get "containerInventory"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryContainer$$Type = ($InventoryContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryContainer_ = $InventoryContainer$$Type;
}}
declare module "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.io.FileSystem" {
import {$AccessMode, $AccessMode$$Type} from "java.nio.file.AccessMode"
import {$SeekableByteChannel, $SeekableByteChannel$$Type} from "java.nio.channels.SeekableByteChannel"
import {$Map, $Map$$Type} from "java.util.Map"
import {$DirectoryStream, $DirectoryStream$$Type} from "java.nio.file.DirectoryStream"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$DirectoryStream$Filter, $DirectoryStream$Filter$$Type} from "java.nio.file.DirectoryStream$Filter"
import {$FileAttribute, $FileAttribute$$Type} from "java.nio.file.attribute.FileAttribute"
import {$LinkOption, $LinkOption$$Type} from "java.nio.file.LinkOption"
import {$CopyOption, $CopyOption$$Type} from "java.nio.file.CopyOption"
import {$URI, $URI$$Type} from "java.net.URI"
import {$OpenOption, $OpenOption$$Type} from "java.nio.file.OpenOption"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$FileSystem as $FileSystem$0, $FileSystem$$Type as $FileSystem$0$$Type} from "java.nio.file.FileSystem"

export interface $FileSystem {

 "parsePath"(uri: $URI$$Type): $Path
 "parsePath"(path: StringJS): $Path
 "toRealPath"(path: $Path$$Type, ...linkOptions: ($LinkOption$$Type)[]): $Path
 "getEncoding"(path: $Path$$Type): $Charset
 "newByteChannel"(path: $Path$$Type, options: $Set$$Type<($OpenOption$$Type)>, ...attrs: ($FileAttribute$$Type<(any)>)[]): $SeekableByteChannel
 "createSymbolicLink"(link: $Path$$Type, target: $Path$$Type, ...attrs: ($FileAttribute$$Type<(any)>)[]): void
 "createLink"(link: $Path$$Type, existing: $Path$$Type): void
 "readSymbolicLink"(link: $Path$$Type): $Path
 "setAttribute"(path: $Path$$Type, attribute: StringJS, value: any, ...options: ($LinkOption$$Type)[]): void
 "toAbsolutePath"(path: $Path$$Type): $Path
 "readAttributes"(path: $Path$$Type, attributes: StringJS, ...options: ($LinkOption$$Type)[]): $Map<(StringJS), (any)>
 "move"(source: $Path$$Type, target: $Path$$Type, ...options: ($CopyOption$$Type)[]): void
 "isSameFile"(path1: $Path$$Type, path2: $Path$$Type, ...options: ($LinkOption$$Type)[]): boolean
 "newDirectoryStream"(dir: $Path$$Type, filter: $DirectoryStream$Filter$$Type<($Path)>): $DirectoryStream<($Path)>
 "createDirectory"(dir: $Path$$Type, ...attrs: ($FileAttribute$$Type<(any)>)[]): void
 "getSeparator"(): StringJS
 "getPathSeparator"(): StringJS
 "delete"(path: $Path$$Type): void
 "checkAccess"(path: $Path$$Type, modes: $Set$$Type<($AccessMode$$Type)>, ...linkOptions: ($LinkOption$$Type)[]): void
 "copy"(source: $Path$$Type, target: $Path$$Type, ...options: ($CopyOption$$Type)[]): void
 "getMimeType"(path: $Path$$Type): StringJS
 "getTempDirectory"(): $Path
 "setCurrentWorkingDirectory"(currentWorkingDirectory: $Path$$Type): void
get "separator"(): StringJS
get "pathSeparator"(): StringJS
get "tempDirectory"(): $Path
set "currentWorkingDirectory"(value: $Path$$Type)
}

export namespace $FileSystem {
function newFileSystem(fileSystem: $FileSystem$0$$Type): $FileSystem
function newDefaultFileSystem(): $FileSystem
function newReadOnlyFileSystem(fileSystem: $FileSystem$$Type): $FileSystem
function allowLanguageHomeAccess(fileSystem: $FileSystem$$Type): $FileSystem
function allowInternalResourceAccess(fileSystem: $FileSystem$$Type): $FileSystem
const probejs$$marker: never
}
export class $FileSystem$$Static implements $FileSystem {


 "parsePath"(uri: $URI$$Type): $Path
 "parsePath"(path: StringJS): $Path
 "toRealPath"(path: $Path$$Type, ...linkOptions: ($LinkOption$$Type)[]): $Path
 "getEncoding"(path: $Path$$Type): $Charset
 "newByteChannel"(path: $Path$$Type, options: $Set$$Type<($OpenOption$$Type)>, ...attrs: ($FileAttribute$$Type<(any)>)[]): $SeekableByteChannel
 "createSymbolicLink"(link: $Path$$Type, target: $Path$$Type, ...attrs: ($FileAttribute$$Type<(any)>)[]): void
 "createLink"(link: $Path$$Type, existing: $Path$$Type): void
 "readSymbolicLink"(link: $Path$$Type): $Path
 "setAttribute"(path: $Path$$Type, attribute: StringJS, value: any, ...options: ($LinkOption$$Type)[]): void
 "toAbsolutePath"(path: $Path$$Type): $Path
 "readAttributes"(path: $Path$$Type, attributes: StringJS, ...options: ($LinkOption$$Type)[]): $Map<(StringJS), (any)>
static "newFileSystem"(fileSystem: $FileSystem$0$$Type): $FileSystem
 "move"(source: $Path$$Type, target: $Path$$Type, ...options: ($CopyOption$$Type)[]): void
 "isSameFile"(path1: $Path$$Type, path2: $Path$$Type, ...options: ($LinkOption$$Type)[]): boolean
 "newDirectoryStream"(dir: $Path$$Type, filter: $DirectoryStream$Filter$$Type<($Path)>): $DirectoryStream<($Path)>
 "createDirectory"(dir: $Path$$Type, ...attrs: ($FileAttribute$$Type<(any)>)[]): void
 "getSeparator"(): StringJS
 "getPathSeparator"(): StringJS
 "delete"(path: $Path$$Type): void
 "checkAccess"(path: $Path$$Type, modes: $Set$$Type<($AccessMode$$Type)>, ...linkOptions: ($LinkOption$$Type)[]): void
 "copy"(source: $Path$$Type, target: $Path$$Type, ...options: ($CopyOption$$Type)[]): void
 "getMimeType"(path: $Path$$Type): StringJS
 "getTempDirectory"(): $Path
static "newDefaultFileSystem"(): $FileSystem
static "newReadOnlyFileSystem"(fileSystem: $FileSystem$$Type): $FileSystem
 "setCurrentWorkingDirectory"(currentWorkingDirectory: $Path$$Type): void
/**
 * 
 * @deprecated
 */
static "allowLanguageHomeAccess"(fileSystem: $FileSystem$$Type): $FileSystem
static "allowInternalResourceAccess"(fileSystem: $FileSystem$$Type): $FileSystem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileSystem$$Type = ($FileSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileSystem_ = $FileSystem$$Type;
}}
declare module "org.cyclops.cyclopscore.inventory.IInventoryLocation" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IInventoryCommonModifiable, $IInventoryCommonModifiable$$Type} from "org.cyclops.cyclopscore.inventory.IInventoryCommonModifiable"

export interface $IInventoryLocation {

 "getUniqueName"(): $ResourceLocation
 "getInventory"(arg0: $Player$$Type): $IInventoryCommonModifiable
 "getItemInSlot"(arg0: $Player$$Type, arg1: integer): $ItemStack
 "setItemInSlot"(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type): void
get "uniqueName"(): $ResourceLocation
}

export namespace $IInventoryLocation {
const probejs$$marker: never
}
export class $IInventoryLocation$$Static implements $IInventoryLocation {


 "getUniqueName"(): $ResourceLocation
 "getInventory"(arg0: $Player$$Type): $IInventoryCommonModifiable
 "getItemInSlot"(arg0: $Player$$Type, arg1: integer): $ItemStack
 "setItemInSlot"(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryLocation$$Type = ($IInventoryLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryLocation_ = $IInventoryLocation$$Type;
}}
declare module "org.cyclops.integrateddynamics.block.BlockDryingBasin" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IBlockGui, $IBlockGui$$Type} from "org.cyclops.cyclopscore.block.IBlockGui"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockWithEntityGui, $BlockWithEntityGui$$Type} from "org.cyclops.cyclopscore.block.BlockWithEntityGui"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockDryingBasin extends $BlockWithEntityGui {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockDryingBasin)>
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getInteractionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDryingBasin$$Type = ($BlockDryingBasin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDryingBasin_ = $BlockDryingBasin$$Type;
}}
declare module "org.cyclops.integratedscripting.api.evaluate.translation.IValueTranslatorRegistry" {
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$IValue, $IValue$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValue"
import {$Value, $Value$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Value"
import {$IRegistry, $IRegistry$$Type} from "org.cyclops.cyclopscore.init.IRegistry"
import {$IValueType, $IValueType$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.IValueType"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IEvaluationExceptionFactory, $IEvaluationExceptionFactory$$Type} from "org.cyclops.integratedscripting.api.evaluate.translation.IEvaluationExceptionFactory"
import {$IValueTranslator, $IValueTranslator$$Type} from "org.cyclops.integratedscripting.api.evaluate.translation.IValueTranslator"
import {$Context, $Context$$Type} from "org.cyclops.integratedscripting.vendors.org.graalvm.polyglot.Context"

export interface $IValueTranslatorRegistry extends $IRegistry {

 "register"(arg0: $IValueTranslator$$Type<(any)>): void
 "translateToNbt"<V extends $IValue>(arg0: $Context$$Type, arg1: V, arg2: $IEvaluationExceptionFactory$$Type): $Tag
 "getValueTypeTranslator"<V extends $IValue>(arg0: $IValueType$$Type<(V)>): $IValueTranslator<(any)>
 "translateToGraal"<V extends $IValue>(arg0: $Context$$Type, arg1: V, arg2: $IEvaluationExceptionFactory$$Type, arg3: $ValueDeseralizationContext$$Type): $Value
 "translateFromGraal"<V extends $IValue>(arg0: $Context$$Type, arg1: $Value$$Type, arg2: $IEvaluationExceptionFactory$$Type, arg3: $ValueDeseralizationContext$$Type): V
 "getScriptValueTranslator"(arg0: $Value$$Type): $IValueTranslator<(any)>
}

export namespace $IValueTranslatorRegistry {
const probejs$$marker: never
}
export class $IValueTranslatorRegistry$$Static implements $IValueTranslatorRegistry {


 "register"(arg0: $IValueTranslator$$Type<(any)>): void
 "translateToNbt"<V extends $IValue>(arg0: $Context$$Type, arg1: V, arg2: $IEvaluationExceptionFactory$$Type): $Tag
 "getValueTypeTranslator"<V extends $IValue>(arg0: $IValueType$$Type<(V)>): $IValueTranslator<(any)>
 "translateToGraal"<V extends $IValue>(arg0: $Context$$Type, arg1: V, arg2: $IEvaluationExceptionFactory$$Type, arg3: $ValueDeseralizationContext$$Type): $Value
 "translateFromGraal"<V extends $IValue>(arg0: $Context$$Type, arg1: $Value$$Type, arg2: $IEvaluationExceptionFactory$$Type, arg3: $ValueDeseralizationContext$$Type): V
 "getScriptValueTranslator"(arg0: $Value$$Type): $IValueTranslator<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValueTranslatorRegistry$$Type = ($IValueTranslatorRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValueTranslatorRegistry_ = $IValueTranslatorRegistry$$Type;
}}
declare module "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ValueDeseralizationContext, $ValueDeseralizationContext$$Type} from "org.cyclops.integrateddynamics.api.evaluate.variable.ValueDeseralizationContext"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List, $List$$Type} from "java.util.List"
import {$ITerminalStorageTabCommon$IVariableInventory, $ITerminalStorageTabCommon$IVariableInventory$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon$IVariableInventory"
import {$ITerminalStorageTabCommon$ISlotPositionCallback, $ITerminalStorageTabCommon$ISlotPositionCallback$$Type} from "org.cyclops.integratedterminals.api.terminalstorage.ITerminalStorageTabCommon$ISlotPositionCallback"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"

export interface $ITerminalStorageTabCommon {

 "getName"(): $ResourceLocation
 "loadSlots"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $Player$$Type, arg3: $Optional$$Type<($ITerminalStorageTabCommon$IVariableInventory$$Type)>, arg4: $ValueDeseralizationContext$$Type): $List<($Pair<($Slot), ($ITerminalStorageTabCommon$ISlotPositionCallback)>)>
 "onUpdate"(arg0: $AbstractContainerMenu$$Type, arg1: $Player$$Type, arg2: $Optional$$Type<($ITerminalStorageTabCommon$IVariableInventory$$Type)>): void

(): $ResourceLocation$$Type
get "name"(): $ResourceLocation
}

export namespace $ITerminalStorageTabCommon {
const probejs$$marker: never
}
export class $ITerminalStorageTabCommon$$Static implements $ITerminalStorageTabCommon {


 "getName"(): $ResourceLocation
 "loadSlots"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $Player$$Type, arg3: $Optional$$Type<($ITerminalStorageTabCommon$IVariableInventory$$Type)>, arg4: $ValueDeseralizationContext$$Type): $List<($Pair<($Slot), ($ITerminalStorageTabCommon$ISlotPositionCallback)>)>
 "onUpdate"(arg0: $AbstractContainerMenu$$Type, arg1: $Player$$Type, arg2: $Optional$$Type<($ITerminalStorageTabCommon$IVariableInventory$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITerminalStorageTabCommon$$Type = (() => $ResourceLocation$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITerminalStorageTabCommon_ = $ITerminalStorageTabCommon$$Type;
}}
declare module "org.cyclops.integrateddynamics.capability.cable.CableDefault" {
import {$ICable, $ICable$$Type} from "org.cyclops.integrateddynamics.api.block.cable.ICable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $CableDefault implements $ICable {

constructor()

public "isConnected"(arg0: $Direction$$Type): boolean
public "getItemStack"(): $ItemStack
public "disconnect"(arg0: $Direction$$Type): void
public "reconnect"(arg0: $Direction$$Type): void
public "canConnect"(arg0: $ICable$$Type, arg1: $Direction$$Type): boolean
public "updateConnections"(arg0: boolean): void
public "destroy"(): void
public "updateConnections"(): void
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableDefault$$Type = ($CableDefault);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableDefault_ = $CableDefault$$Type;
}}
declare module "org.cyclops.integrateddynamics.item.ItemEnhancement$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ItemEnhancement$Type extends $Enum<($ItemEnhancement$Type)> {
static readonly "OFFSET": $ItemEnhancement$Type


public static "values"(): ($ItemEnhancement$Type)[]
public static "valueOf"(arg0: StringJS): $ItemEnhancement$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEnhancement$Type$$Type = (("offset"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEnhancement$Type_ = $ItemEnhancement$Type$$Type;
}}
declare module "org.cyclops.cyclopscore.block.IBlockGui" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Stat, $Stat$$Type} from "net.minecraft.stats.Stat"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IBlockGui$IBlockContainerProvider, $IBlockGui$IBlockContainerProvider$$Type} from "org.cyclops.cyclopscore.block.IBlockGui$IBlockContainerProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockGui {

 "getOpenStat"(): $Stat<($ResourceLocation)>
 "writeExtraGuiData"(arg0: $FriendlyByteBuf$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $BlockPos$$Type, arg4: $BlockHitResult$$Type): void
get "openStat"(): $Stat<($ResourceLocation)>
}

export namespace $IBlockGui {
function onBlockActivatedHook(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
const probejs$$marker: never
}
export class $IBlockGui$$Static implements $IBlockGui {


 "getOpenStat"(): $Stat<($ResourceLocation)>
static "onBlockActivatedHook"(arg0: $IBlockGui$$Type, arg1: $IBlockGui$IBlockContainerProvider$$Type, arg2: $BlockState$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $Player$$Type, arg6: $BlockHitResult$$Type): $InteractionResult
 "writeExtraGuiData"(arg0: $FriendlyByteBuf$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $BlockPos$$Type, arg4: $BlockHitResult$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockGui$$Type = ($IBlockGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockGui_ = $IBlockGui$$Type;
}}
declare module "org.cyclops.integrateddynamics.api.part.PartTarget" {
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$DimPos, $DimPos$$Type} from "org.cyclops.cyclopscore.datastructure.DimPos"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PartPos, $PartPos$$Type} from "org.cyclops.integrateddynamics.api.part.PartPos"

export class $PartTarget {


public "getTarget"(): $PartPos
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $PartPos$$Type, arg1: $PartPos$$Type): $PartTarget
public "getCenter"(): $PartPos
public "forTargetSide"(arg0: $Direction$$Type): $PartTarget
public "forOffset"(arg0: $Vec3i$$Type): $PartTarget
public static "fromCenter"(arg0: $PartPos$$Type): $PartTarget
public static "fromCenter"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $PartTarget
public static "fromCenter"(arg0: $DimPos$$Type, arg1: $Direction$$Type): $PartTarget
public "isDefaultTarget"(): boolean
get "target"(): $PartPos
get "center"(): $PartPos
get "defaultTarget"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartTarget$$Type = ($PartTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartTarget_ = $PartTarget$$Type;
}}
declare module "org.cyclops.commoncapabilities.api.ingredient.IngredientComponent" {
import {$RegisterCapabilitiesEvent, $RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$IngredientComponentCategoryType, $IngredientComponentCategoryType$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientComponentCategoryType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IIngredientMatcher, $IIngredientMatcher$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IIngredientMatcher"
import {$IIngredientSerializer, $IIngredientSerializer$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IIngredientSerializer"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NewRegistryEvent, $NewRegistryEvent$$Type} from "net.neoforged.neoforge.registries.NewRegistryEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$IIngredientComponentStorage, $IIngredientComponentStorage$$Type} from "org.cyclops.commoncapabilities.api.ingredient.storage.IIngredientComponentStorage"
import {$BaseCapability, $BaseCapability$$Type} from "net.neoforged.neoforge.capabilities.BaseCapability"
import {$IIngredientComponentStorageWrapperHandler, $IIngredientComponentStorageWrapperHandler$$Type} from "org.cyclops.commoncapabilities.api.ingredient.storage.IIngredientComponentStorageWrapperHandler"
import {$IngredientInstanceWrapper, $IngredientInstanceWrapper$$Type} from "org.cyclops.commoncapabilities.api.ingredient.IngredientInstanceWrapper"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegisterEvent, $RegisterEvent$$Type} from "net.neoforged.neoforge.registries.RegisterEvent"
import {$IngredientComponentCapability, $IngredientComponentCapability$$Type} from "org.cyclops.commoncapabilities.api.ingredient.capability.IngredientComponentCapability"
import {$ICapabilityGetter, $ICapabilityGetter$$Type} from "org.cyclops.commoncapabilities.api.ingredient.capability.ICapabilityGetter"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $IngredientComponent<T, M> implements $Comparable<($IngredientComponent<(any), (any)>)> {
static "ENERGY": $IngredientComponent<(long), (boolean)>
static "ITEMSTACK": $IngredientComponent<($ItemStack), (integer)>
static "FLUIDSTACK": $IngredientComponent<($FluidStack), (integer)>
static "REGISTRY": $Registry<($IngredientComponent<(any), (any)>)>

constructor(arg0: StringJS, arg1: $IIngredientMatcher$$Type<(T), (M)>, arg2: $IIngredientSerializer$$Type<(T), (M)>, arg3: $List$$Type<($IngredientComponentCategoryType$$Type<(T), (M), (any)>)>)
constructor(arg0: $ResourceLocation$$Type, arg1: $IIngredientMatcher$$Type<(T), (M)>, arg2: $IIngredientSerializer$$Type<(T), (M)>, arg3: $List$$Type<($IngredientComponentCategoryType$$Type<(T), (M), (any)>)>)

public "getName"(): $ResourceLocation
public "toString"(): StringJS
public "compareTo"(arg0: $IngredientComponent$$Type<(any), (any)>): integer
public "compareTo"(arg0: any): integer
public "wrap"(arg0: T): $IngredientInstanceWrapper<(T), (M)>
public "getStorage"<O, C>(arg0: $Class$$Type<(O)>, arg1: $ICapabilityGetter$$Type<(C)>, arg2: C): $IIngredientComponentStorage<(T), (M)>
public "getCapability"<TC>(arg0: $IngredientComponentCapability$$Type<(TC), (void)>): $Optional<(TC)>
public "getItemStorage"<O, C>(arg0: $ItemStack$$Type, arg1: C): $IIngredientComponentStorage<(T), (M)>
public "getMatcher"(): $IIngredientMatcher<(T), (M)>
public "getSerializer"(): $IIngredientSerializer<(T), (M)>
public "gatherCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "setTranslationKey"(arg0: StringJS): $IngredientComponent<(T), (M)>
public static "onRegistriesCreate"(arg0: $NewRegistryEvent$$Type): void
public "getTranslationKey"(): StringJS
public "getStorageWrapperHandlerCapabilities"(): $Collection<($BaseCapability<(any), (any)>)>
public static "onRegistriesFilled"(arg0: $RegisterEvent$$Type): void
public "getCategoryTypes"(): $List<($IngredientComponentCategoryType<(T), (M), (any)>)>
public "getPrimaryQuantifier"(): $IngredientComponentCategoryType<(T), (M), (any)>
public "getBlockStorage"<O, C>(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type, arg4: C): $IIngredientComponentStorage<(T), (M)>
public "getEntityStorage"<O, C>(arg0: $Entity$$Type, arg1: C): $IIngredientComponentStorage<(T), (M)>
public static "getIngredientComponentForStorageCapability"(arg0: $BaseCapability$$Type<(any), (any)>): $IngredientComponent<(any), (any)>
public "getStorageWrapperHandler"<S, C>(arg0: $BaseCapability$$Type<(S), (any)>): $IIngredientComponentStorageWrapperHandler<(T), (M), (S), (C)>
public "setStorageWrapperHandler"<S>(arg0: $BaseCapability$$Type<(any), (any)>, arg1: $IIngredientComponentStorageWrapperHandler$$Type<(T), (M), (S), (any)>): void
get "name"(): $ResourceLocation
get "matcher"(): $IIngredientMatcher<(T), (M)>
get "serializer"(): $IIngredientSerializer<(T), (M)>
set "translationKey"(value: StringJS)
get "translationKey"(): StringJS
get "storageWrapperHandlerCapabilities"(): $Collection<($BaseCapability<(any), (any)>)>
get "categoryTypes"(): $List<($IngredientComponentCategoryType<(T), (M), (any)>)>
get "primaryQuantifier"(): $IngredientComponentCategoryType<(T), (M), (any)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CommoncapabilitiesIngredientcomponents
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CommoncapabilitiesIngredientcomponentsTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientComponent$$Type<T, M> = (Special.CommoncapabilitiesIngredientcomponents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientComponent_<T, M> = $IngredientComponent$$Type<(T), (M)>;
}}
declare module "org.cyclops.cyclopscore.helper.IInventoryHelpers" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IInventoryHelpers {

 "dropItems"(arg0: $Level$$Type, arg1: $Container$$Type, arg2: $BlockPos$$Type): void
 "clearInventory"(arg0: $Container$$Type): void
 "addToSlot"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "addToSlot"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: boolean): boolean
 "addToStack"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
 "fillSlot"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: boolean): $ItemStack
 "addStackToList"(arg0: $NonNullList$$Type<($ItemStack$$Type)>, arg1: $ItemStack$$Type): void
 "writeToNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Container$$Type, arg2: $CompoundTag$$Type, arg3: StringJS): void
 "readFromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Container$$Type, arg2: $CompoundTag$$Type, arg3: StringJS): void
 "addToInventory"(arg0: $Container$$Type, arg1: (integer)[], arg2: $NonNullList$$Type<($ItemStack$$Type)>, arg3: boolean): $NonNullList<($ItemStack)>
 "tryReAddToStack"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $InteractionHand$$Type): void
}

export namespace $IInventoryHelpers {
const probejs$$marker: never
}
export class $IInventoryHelpers$$Static implements $IInventoryHelpers {


 "dropItems"(arg0: $Level$$Type, arg1: $Container$$Type, arg2: $BlockPos$$Type): void
 "clearInventory"(arg0: $Container$$Type): void
 "addToSlot"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "addToSlot"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: boolean): boolean
 "addToStack"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
 "fillSlot"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: boolean): $ItemStack
 "addStackToList"(arg0: $NonNullList$$Type<($ItemStack$$Type)>, arg1: $ItemStack$$Type): void
 "writeToNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Container$$Type, arg2: $CompoundTag$$Type, arg3: StringJS): void
 "readFromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Container$$Type, arg2: $CompoundTag$$Type, arg3: StringJS): void
 "addToInventory"(arg0: $Container$$Type, arg1: (integer)[], arg2: $NonNullList$$Type<($ItemStack$$Type)>, arg3: boolean): $NonNullList<($ItemStack)>
 "tryReAddToStack"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $InteractionHand$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryHelpers$$Type = ($IInventoryHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryHelpers_ = $IInventoryHelpers$$Type;
}}
