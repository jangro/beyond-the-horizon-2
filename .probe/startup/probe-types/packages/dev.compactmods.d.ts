declare module "dev.compactmods.machines.api.room.RoomStructureInfo$RoomStructurePlacement" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$StringRepresentableCodec, $StringRepresentable$StringRepresentableCodec$$Type} from "net.minecraft.util.StringRepresentable$StringRepresentableCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $RoomStructureInfo$RoomStructurePlacement extends $Enum<($RoomStructureInfo$RoomStructurePlacement)> implements $StringRepresentable {
static readonly "CENTERED_FLOOR": $RoomStructureInfo$RoomStructurePlacement
static readonly "CENTERED": $RoomStructureInfo$RoomStructurePlacement
static readonly "CODEC": $StringRepresentable$StringRepresentableCodec<($RoomStructureInfo$RoomStructurePlacement)>
static readonly "CENTERED_CEILING": $RoomStructureInfo$RoomStructurePlacement


public static "values"(): ($RoomStructureInfo$RoomStructurePlacement)[]
public static "valueOf"(arg0: StringJS): $RoomStructureInfo$RoomStructurePlacement
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
export type $RoomStructureInfo$RoomStructurePlacement$$Type = (("centered_ceiling") | ("centered") | ("centered_floor"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoomStructureInfo$RoomStructurePlacement_ = $RoomStructureInfo$RoomStructurePlacement$$Type;
}}
declare module "dev.compactmods.machines.api.room.RoomStructureInfo" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RoomStructureInfo$RoomStructurePlacement, $RoomStructureInfo$RoomStructurePlacement$$Type} from "dev.compactmods.machines.api.room.RoomStructureInfo$RoomStructurePlacement"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RoomStructureInfo extends $Record {
static readonly "CODEC": $Codec<($RoomStructureInfo)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($RoomStructureInfo)>

constructor(template: $ResourceLocation$$Type, placement: $RoomStructureInfo$RoomStructurePlacement$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "template"(): $ResourceLocation
public "placement"(): $RoomStructureInfo$RoomStructurePlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoomStructureInfo$$Type = ({"placement"?: $RoomStructureInfo$RoomStructurePlacement$$Type, "template"?: $ResourceLocation$$Type}) | ([placement?: $RoomStructureInfo$RoomStructurePlacement$$Type, template?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoomStructureInfo_ = $RoomStructureInfo$$Type;
}}
declare module "dev.compactmods.machines.shrinking.PersonalShrinkingDevice" {
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
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ShrinkingDeviceConfiguration, $ShrinkingDeviceConfiguration$$Type} from "dev.compactmods.machines.api.shrinking.component.ShrinkingDeviceConfiguration"

export class $PersonalShrinkingDevice extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "config"(arg0: $ItemStack$$Type): $ShrinkingDeviceConfiguration
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "handleSuccessfulAtomicShift"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $ShrinkingDeviceConfiguration$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PersonalShrinkingDevice$$Type = ($PersonalShrinkingDevice);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PersonalShrinkingDevice_ = $PersonalShrinkingDevice$$Type;
}}
declare module "dev.compactmods.machines.room.wall.ItemBlockWall" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
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

export class $ItemBlockWall extends $BlockItem {
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
export type $ItemBlockWall$$Type = ($ItemBlockWall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockWall_ = $ItemBlockWall$$Type;
}}
declare module "dev.compactmods.machines.api.room.capability.CompactRoomCapability" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IRoomCapabilityProvider, $IRoomCapabilityProvider$$Type} from "dev.compactmods.machines.api.room.capability.IRoomCapabilityProvider"
import {$BaseCapability, $BaseCapability$$Type} from "net.neoforged.neoforge.capabilities.BaseCapability"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $CompactRoomCapability<T, Ctx> extends $BaseCapability<(T), (Ctx)> {


public static "create"<T, C>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>, arg2: $Class$$Type<(C)>): $CompactRoomCapability<(T), (C)>
public static "getAll"(): $List<($CompactRoomCapability<(any), (any)>)>
public static "register"<T, C>(arg0: $CompactRoomCapability$$Type<(T), (C)>, arg1: $IRoomCapabilityProvider$$Type<(T), (C)>): void
public "getCapability"(arg0: $MinecraftServer$$Type, arg1: StringJS, arg2: Ctx): T
public static "createVoid"<T>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(T)>): $CompactRoomCapability<(T), (void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactRoomCapability$$Type<T, Ctx> = ($CompactRoomCapability<(T), (Ctx)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactRoomCapability_<T, Ctx> = $CompactRoomCapability$$Type<(T), (Ctx)>;
}}
declare module "dev.compactmods.machines.api.room.template.RoomTemplate" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$RoomStructureInfo, $RoomStructureInfo$$Type} from "dev.compactmods.machines.api.room.RoomStructureInfo"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MachineColor, $MachineColor$$Type} from "dev.compactmods.machines.api.machine.MachineColor"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RoomDimensions, $RoomDimensions$$Type} from "dev.compactmods.machines.api.room.RoomDimensions"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TooltipProvider, $TooltipProvider$$Type} from "net.minecraft.world.item.component.TooltipProvider"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RoomTemplateBuilder, $RoomTemplateBuilder$$Type} from "dev.compactmods.machines.api.room.template.RoomTemplateBuilder"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RoomTemplate extends $Record implements $TooltipProvider {
static "CODEC": $Codec<($RoomTemplate)>
static readonly "NO_TEMPLATE": $ResourceLocation
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($RoomTemplate)>)>
static readonly "INVALID_TEMPLATE": $RoomTemplate
static readonly "I18N_STRUCTURE_GEN_TOOLTIP": StringJS
static readonly "I18N_INTERNAL_ROOM_DIMS": StringJS
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RoomTemplate)>

constructor(arg0: integer, arg1: integer)
constructor(internalDimensions: $RoomDimensions$$Type, defaultMachineColor: $MachineColor$$Type, structures: $List$$Type<($RoomStructureInfo$$Type)>, optionalFloor: $Optional$$Type<($BlockState$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"(): $RoomTemplateBuilder
public "structures"(): $List<($RoomStructureInfo)>
public "optionalFloor"(): $Optional<($BlockState)>
public "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
public "defaultMachineColor"(): $MachineColor
public "internalDimensions"(): $RoomDimensions
public "getZeroBoundaries"(): $AABB
public "getBoundariesCenteredAt"(arg0: $Vec3$$Type): $AABB
get "zeroBoundaries"(): $AABB
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CompactmachinesRoomTemplates
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CompactmachinesRoomTemplatesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoomTemplate$$Type = (Special.CompactmachinesRoomTemplates) | ({"internalDimensions"?: $RoomDimensions$$Type, "optionalFloor"?: ($BlockState$$Type)?, "defaultMachineColor"?: $MachineColor$$Type, "structures"?: $List$$Type<($RoomStructureInfo$$Type)>}) | ([internalDimensions?: $RoomDimensions$$Type, optionalFloor?: ($BlockState$$Type)?, defaultMachineColor?: $MachineColor$$Type, structures?: $List$$Type<($RoomStructureInfo$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoomTemplate_ = $RoomTemplate$$Type;
}}
declare module "dev.compactmods.machines.api.room.RoomInstance" {
import {$AttachmentType, $AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IRoomBoundaries, $IRoomBoundaries$$Type} from "dev.compactmods.machines.api.room.spatial.IRoomBoundaries"
import {$CompactRoomCapability, $CompactRoomCapability$$Type} from "dev.compactmods.machines.api.room.capability.CompactRoomCapability"
import {$MachineColor, $MachineColor$$Type} from "dev.compactmods.machines.api.machine.MachineColor"
import {$IAttachmentHolder, $IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IForwardingAttachmentHolder, $IForwardingAttachmentHolder$$Type} from "dev.compactmods.machines.api.attachment.IForwardingAttachmentHolder"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RoomInstance extends $Record implements $IForwardingAttachmentHolder {

constructor(server: $MinecraftServer$$Type, levelKey: $ResourceKey$$Type<($Level)>, code: StringJS, defaultMachineColor: $MachineColor$$Type, boundaries: $IRoomBoundaries$$Type)

public "level"(): $ServerLevel
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "code"(): StringJS
public "server"(): $MinecraftServer
public "getCapability"<T, C>(arg0: $CompactRoomCapability$$Type<(T), (C)>, arg1: C): T
public "getCapability"<T, C>(arg0: $CompactRoomCapability$$Type<(T), (C)>): T
public "levelKey"(): $ResourceKey<($Level)>
public "boundaries"(): $IRoomBoundaries
public "defaultMachineColor"(): $MachineColor
public "attachmentHolder"(): $Supplier<($IAttachmentHolder)>
public "removeData"<T>(arg0: $AttachmentType$$Type<(T)>): T
public "getData"<T>(arg0: $AttachmentType$$Type<(T)>): T
public "setData"<T>(arg0: $AttachmentType$$Type<(T)>, arg1: T): T
public "hasData"(arg0: $AttachmentType$$Type<(any)>): boolean
public "hasAttachments"(): boolean
public "getExistingData"<T>(arg0: $AttachmentType$$Type<(T)>): $Optional<(T)>
public "removeData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
public "getData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
public "setData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>, arg1: T): T
public "syncData"(arg0: $Supplier$$Type<($AttachmentType$$Type<(any)>)>): void
public "syncData"(arg0: $AttachmentType$$Type<(any)>): void
public "hasData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): boolean
public "getExistingDataOrNull"<T>(arg0: $AttachmentType$$Type<(T)>): T
public "getExistingDataOrNull"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
public "getExistingData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoomInstance$$Type = ({"boundaries"?: $IRoomBoundaries$$Type, "server"?: $MinecraftServer$$Type, "levelKey"?: $ResourceKey$$Type<($Level)>, "code"?: StringJS, "defaultMachineColor"?: $MachineColor$$Type}) | ([boundaries?: $IRoomBoundaries$$Type, server?: $MinecraftServer$$Type, levelKey?: $ResourceKey$$Type<($Level)>, code?: StringJS, defaultMachineColor?: $MachineColor$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoomInstance_ = $RoomInstance$$Type;
}}
declare module "dev.compactmods.machines.api.shrinking.component.ShrinkingDeviceConfiguration" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ShrinkingDeviceConfiguration$AfterUseAction, $ShrinkingDeviceConfiguration$AfterUseAction$$Type} from "dev.compactmods.machines.api.shrinking.component.ShrinkingDeviceConfiguration$AfterUseAction"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ShrinkingDeviceConfiguration extends $Record {
static readonly "CODEC": $Codec<($ShrinkingDeviceConfiguration)>
static readonly "ALLOWED_DEPTH_DEFAULT": integer
static readonly "ALLOWED_DEPTH_MIN": integer
static readonly "DEFAULT_CONFIG": $ShrinkingDeviceConfiguration
static readonly "ALLOWED_DEPTH_MAX": integer
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ShrinkingDeviceConfiguration)>

constructor(maxAllowedDepth: integer, allowLoops: boolean, afterUseAction: $ShrinkingDeviceConfiguration$AfterUseAction$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "allowLoops"(): boolean
public static "basicNoDamage"(arg0: integer): $ShrinkingDeviceConfiguration
public static "basicDamaging"(arg0: integer): $ShrinkingDeviceConfiguration
public static "basicOneOff"(): $ShrinkingDeviceConfiguration
public "afterUseAction"(): $ShrinkingDeviceConfiguration$AfterUseAction
public "maxAllowedDepth"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShrinkingDeviceConfiguration$$Type = ({"afterUseAction"?: $ShrinkingDeviceConfiguration$AfterUseAction$$Type, "maxAllowedDepth"?: integer, "allowLoops"?: boolean}) | ([afterUseAction?: $ShrinkingDeviceConfiguration$AfterUseAction$$Type, maxAllowedDepth?: integer, allowLoops?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShrinkingDeviceConfiguration_ = $ShrinkingDeviceConfiguration$$Type;
}}
declare module "dev.compactmods.machines.api.room.template.RoomTemplateBuilder" {
import {$RoomTemplate, $RoomTemplate$$Type} from "dev.compactmods.machines.api.room.template.RoomTemplate"
import {$MachineColor, $MachineColor$$Type} from "dev.compactmods.machines.api.machine.MachineColor"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RoomDimensions, $RoomDimensions$$Type} from "dev.compactmods.machines.api.room.RoomDimensions"
import {$RoomStructureInfo$RoomStructurePlacement, $RoomStructureInfo$RoomStructurePlacement$$Type} from "dev.compactmods.machines.api.room.RoomStructureInfo$RoomStructurePlacement"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RoomTemplateBuilder {


public "build"(): $RoomTemplate
public "addStructure"(arg0: $ResourceLocation$$Type, arg1: $RoomStructureInfo$RoomStructurePlacement$$Type): $RoomTemplateBuilder
public "withFloor"(arg0: $BlockState$$Type): $RoomTemplateBuilder
public "defaultMachineColor"(arg0: $MachineColor$$Type): $RoomTemplateBuilder
public "withInternalSizeCubic"(arg0: integer): $RoomTemplateBuilder
public "withInternalSize"(arg0: $RoomDimensions$$Type): $RoomTemplateBuilder
public "withInternalSize"(arg0: integer, arg1: integer, arg2: integer): $RoomTemplateBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoomTemplateBuilder$$Type = ($RoomTemplateBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoomTemplateBuilder_ = $RoomTemplateBuilder$$Type;
}}
declare module "dev.compactmods.machines.api.attachment.IForwardingAttachmentHolder" {
import {$AttachmentType, $AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IAttachmentHolder, $IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"

export interface $IForwardingAttachmentHolder extends $IAttachmentHolder {

 "removeData"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "getData"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "setData"<T>(arg0: $AttachmentType$$Type<(T)>, arg1: T): T
 "hasData"(arg0: $AttachmentType$$Type<(any)>): boolean
 "hasAttachments"(): boolean
 "attachmentHolder"(): $Supplier<($IAttachmentHolder)>
 "getExistingData"<T>(arg0: $AttachmentType$$Type<(T)>): $Optional<(T)>
 "removeData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "getData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "setData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>, arg1: T): T
 "syncData"(arg0: $Supplier$$Type<($AttachmentType$$Type<(any)>)>): void
 "syncData"(arg0: $AttachmentType$$Type<(any)>): void
 "hasData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): boolean
 "getExistingDataOrNull"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "getExistingDataOrNull"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "getExistingData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): $Optional<(T)>

(): $Supplier$$Type<($IAttachmentHolder$$Type)>
}

export namespace $IForwardingAttachmentHolder {
const probejs$$marker: never
}
export class $IForwardingAttachmentHolder$$Static implements $IForwardingAttachmentHolder {


 "removeData"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "getData"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "setData"<T>(arg0: $AttachmentType$$Type<(T)>, arg1: T): T
 "hasData"(arg0: $AttachmentType$$Type<(any)>): boolean
 "hasAttachments"(): boolean
 "attachmentHolder"(): $Supplier<($IAttachmentHolder)>
 "getExistingData"<T>(arg0: $AttachmentType$$Type<(T)>): $Optional<(T)>
 "removeData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "getData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "setData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>, arg1: T): T
 "syncData"(arg0: $Supplier$$Type<($AttachmentType$$Type<(any)>)>): void
 "syncData"(arg0: $AttachmentType$$Type<(any)>): void
 "hasData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): boolean
 "getExistingDataOrNull"<T>(arg0: $AttachmentType$$Type<(T)>): T
 "getExistingDataOrNull"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
 "getExistingData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForwardingAttachmentHolder$$Type = (() => $Supplier$$Type<($IAttachmentHolder$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForwardingAttachmentHolder_ = $IForwardingAttachmentHolder$$Type;
}}
declare module "dev.compactmods.machines.api.machine.MachineColor" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MachineColor extends $Record {
static readonly "CODEC": $Codec<($MachineColor)>
static readonly "HEX_CODEC": $Codec<($MachineColor)>
static readonly "INT_CODEC": $Codec<($MachineColor)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($MachineColor)>

constructor(red: integer, green: integer, blue: integer)

public "rgb"(): integer
public "red"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "blue"(): integer
public "green"(): integer
public static "fromDyeColor"(arg0: $DyeColor$$Type): $MachineColor
public static "fromARGB"(arg0: integer): $MachineColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineColor$$Type = ({"red"?: integer, "blue"?: integer, "green"?: integer}) | ([red?: integer, blue?: integer, green?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineColor_ = $MachineColor$$Type;
}}
declare module "dev.compactmods.machines.machine.block.CompactMachineBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CompactMachineBlock extends $Block {
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

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactMachineBlock$$Type = ($CompactMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactMachineBlock_ = $CompactMachineBlock$$Type;
}}
declare module "dev.compactmods.machines.machine.item.BoundCompactMachineItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
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

export class $BoundCompactMachineItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "NBT_ROOM_DIMENSIONS": StringJS
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
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
export type $BoundCompactMachineItem$$Type = ($BoundCompactMachineItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundCompactMachineItem_ = $BoundCompactMachineItem$$Type;
}}
declare module "dev.compactmods.machines.api.room.RoomDimensions" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RoomDimensions extends $Record {
static readonly "CODEC": $Codec<($RoomDimensions)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RoomDimensions)>

constructor(arg0: integer)
constructor(width: integer, depth: integer, height: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "depth"(): integer
public "width"(): integer
public "height"(): integer
public static "cubic"(arg0: integer): $RoomDimensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoomDimensions$$Type = ({"width"?: integer, "depth"?: integer, "height"?: integer}) | ([width?: integer, depth?: integer, height?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoomDimensions_ = $RoomDimensions$$Type;
}}
declare module "dev.compactmods.machines.dimension.VoidAirBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$AirBlock, $AirBlock$$Type} from "net.minecraft.world.level.block.AirBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $VoidAirBlock extends $AirBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($AirBlock)>
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

constructor()

public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "canHarvestBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidAirBlock$$Type = ($VoidAirBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidAirBlock_ = $VoidAirBlock$$Type;
}}
declare module "dev.compactmods.machines.api.room.upgrade.RoomUpgradeInstance" {
import {$AttachmentType, $AttachmentType$$Type} from "net.neoforged.neoforge.attachment.AttachmentType"
import {$RoomInstance, $RoomInstance$$Type} from "dev.compactmods.machines.api.room.RoomInstance"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IAttachmentHolder, $IAttachmentHolder$$Type} from "net.neoforged.neoforge.attachment.IAttachmentHolder"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RoomUpgradeComponent, $RoomUpgradeComponent$$Type} from "dev.compactmods.machines.api.room.upgrade.RoomUpgradeComponent"
import {$IForwardingAttachmentHolder, $IForwardingAttachmentHolder$$Type} from "dev.compactmods.machines.api.attachment.IForwardingAttachmentHolder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RoomUpgradeInstance extends $Record implements $IForwardingAttachmentHolder {

constructor(roomInstance: $RoomInstance$$Type, upgradeID: $UUID$$Type, upgradeItem: $ItemStack$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "upgradeItem"(): $ItemStack
public "upgradeID"(): $UUID
public "roomInstance"(): $RoomInstance
public "attachmentHolder"(): $Supplier<($IAttachmentHolder)>
public "upgradeComponents"(): $List<($RoomUpgradeComponent)>
public "removeData"<T>(arg0: $AttachmentType$$Type<(T)>): T
public "getData"<T>(arg0: $AttachmentType$$Type<(T)>): T
public "setData"<T>(arg0: $AttachmentType$$Type<(T)>, arg1: T): T
public "hasData"(arg0: $AttachmentType$$Type<(any)>): boolean
public "hasAttachments"(): boolean
public "getExistingData"<T>(arg0: $AttachmentType$$Type<(T)>): $Optional<(T)>
public "removeData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
public "getData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
public "setData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>, arg1: T): T
public "syncData"(arg0: $Supplier$$Type<($AttachmentType$$Type<(any)>)>): void
public "syncData"(arg0: $AttachmentType$$Type<(any)>): void
public "hasData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): boolean
public "getExistingDataOrNull"<T>(arg0: $AttachmentType$$Type<(T)>): T
public "getExistingDataOrNull"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): T
public "getExistingData"<T>(arg0: $Supplier$$Type<($AttachmentType$$Type<(T)>)>): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoomUpgradeInstance$$Type = ({"upgradeID"?: $UUID$$Type, "roomInstance"?: $RoomInstance$$Type, "upgradeItem"?: $ItemStack$$Type}) | ([upgradeID?: $UUID$$Type, roomInstance?: $RoomInstance$$Type, upgradeItem?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoomUpgradeInstance_ = $RoomUpgradeInstance$$Type;
}}
declare module "dev.compactmods.gander.render.translucency.TranslucentRenderTargetLayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TranslucentRenderTargetLayer {


public "clear"(arg0: boolean): void
public "getLayer"(): integer
public "unbindRead"(): void
public "bindRead"(): void
public "unbindWrite"(): void
public "bindWrite"(arg0: boolean): void
get "layer"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslucentRenderTargetLayer$$Type = ($TranslucentRenderTargetLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslucentRenderTargetLayer_ = $TranslucentRenderTargetLayer$$Type;
}}
declare module "dev.compactmods.machines.room.block.SolidWallBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ProtectedWallBlock, $ProtectedWallBlock$$Type} from "dev.compactmods.machines.room.block.ProtectedWallBlock"

export class $SolidWallBlock extends $ProtectedWallBlock {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidWallBlock$$Type = ($SolidWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolidWallBlock_ = $SolidWallBlock$$Type;
}}
declare module "dev.compactmods.machines.machine.item.UnboundCompactMachineItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
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

export class $UnboundCompactMachineItem extends $BlockItem {
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

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDefaultInstance"(): $ItemStack
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "defaultInstance"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnboundCompactMachineItem$$Type = ($UnboundCompactMachineItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnboundCompactMachineItem_ = $UnboundCompactMachineItem$$Type;
}}
declare module "dev.compactmods.machines.mixin.CodecNbtFunctions" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $CodecNbtFunctions {

 "store"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>, arg2: $DynamicOps$$Type<($Tag$$Type)>, arg3: T): void
 "store"<T>(arg0: $MapCodec$$Type<(T)>, arg1: T): void
 "store"<T>(arg0: $MapCodec$$Type<(T)>, arg1: $DynamicOps$$Type<($Tag$$Type)>, arg2: T): void
 "store"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>, arg2: T): void
 "read"<T>(arg0: $MapCodec$$Type<(T)>): $Optional<(T)>
 "read"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>): $Optional<(T)>
 "read"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>, arg2: $DynamicOps$$Type<($Tag$$Type)>): $Optional<(T)>
 "read"<T>(arg0: $MapCodec$$Type<(T)>, arg1: $DynamicOps$$Type<($Tag$$Type)>): $Optional<(T)>
 "storeNullable"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>, arg2: T): void
 "storeNullable"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>, arg2: $DynamicOps$$Type<($Tag$$Type)>, arg3: T): void
}

export namespace $CodecNbtFunctions {
const probejs$$marker: never
}
export class $CodecNbtFunctions$$Static implements $CodecNbtFunctions {


 "store"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>, arg2: $DynamicOps$$Type<($Tag$$Type)>, arg3: T): void
 "store"<T>(arg0: $MapCodec$$Type<(T)>, arg1: T): void
 "store"<T>(arg0: $MapCodec$$Type<(T)>, arg1: $DynamicOps$$Type<($Tag$$Type)>, arg2: T): void
 "store"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>, arg2: T): void
 "read"<T>(arg0: $MapCodec$$Type<(T)>): $Optional<(T)>
 "read"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>): $Optional<(T)>
 "read"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>, arg2: $DynamicOps$$Type<($Tag$$Type)>): $Optional<(T)>
 "read"<T>(arg0: $MapCodec$$Type<(T)>, arg1: $DynamicOps$$Type<($Tag$$Type)>): $Optional<(T)>
 "storeNullable"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>, arg2: T): void
 "storeNullable"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>, arg2: $DynamicOps$$Type<($Tag$$Type)>, arg3: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecNbtFunctions$$Type = ($CodecNbtFunctions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecNbtFunctions_ = $CodecNbtFunctions$$Type;
}}
declare module "dev.compactmods.machines.api.room.upgrade.RoomUpgradeComponentType$Builder" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RoomUpgradeComponentType, $RoomUpgradeComponentType$$Type} from "dev.compactmods.machines.api.room.upgrade.RoomUpgradeComponentType"
import {$RoomUpgradeComponent, $RoomUpgradeComponent$$Type} from "dev.compactmods.machines.api.room.upgrade.RoomUpgradeComponent"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RoomUpgradeComponentType$Builder<T extends $RoomUpgradeComponent> {

constructor(arg0: $Supplier$$Type<(T)>, arg1: $MapCodec$$Type<(T)>)

public "build"(): $RoomUpgradeComponentType<(T)>
public "itemPredicate"(arg0: $Predicate$$Type<($ItemStack)>): $RoomUpgradeComponentType$Builder<(T)>
public "requiredFeatures"(arg0: $FeatureFlagSet$$Type): $RoomUpgradeComponentType$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoomUpgradeComponentType$Builder$$Type<T> = ($RoomUpgradeComponentType$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoomUpgradeComponentType$Builder_<T> = $RoomUpgradeComponentType$Builder$$Type<(T)>;
}}
declare module "dev.compactmods.machines.room.wall.BreakableWallBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BreakableWallBlock extends $Block {
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

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreakableWallBlock$$Type = ($BreakableWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BreakableWallBlock_ = $BreakableWallBlock$$Type;
}}
declare module "dev.compactmods.machines.api.shrinking.component.ShrinkingDeviceConfiguration$AfterUseAction" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $ShrinkingDeviceConfiguration$AfterUseAction extends $Enum<($ShrinkingDeviceConfiguration$AfterUseAction)> implements $StringRepresentable {
static readonly "CODEC": $Codec<($ShrinkingDeviceConfiguration$AfterUseAction)>
static readonly "BREAK": $ShrinkingDeviceConfiguration$AfterUseAction
static readonly "DAMAGE": $ShrinkingDeviceConfiguration$AfterUseAction
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ShrinkingDeviceConfiguration$AfterUseAction)>
static readonly "DO_NOTHING": $ShrinkingDeviceConfiguration$AfterUseAction


public static "values"(): ($ShrinkingDeviceConfiguration$AfterUseAction)[]
public static "valueOf"(arg0: StringJS): $ShrinkingDeviceConfiguration$AfterUseAction
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
export type $ShrinkingDeviceConfiguration$AfterUseAction$$Type = (("do_nothing") | ("damage") | ("break"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShrinkingDeviceConfiguration$AfterUseAction_ = $ShrinkingDeviceConfiguration$AfterUseAction$$Type;
}}
declare module "dev.compactmods.gander.level.mixin.StructureTemplateAccessor" {
import {$StructureTemplate$Palette, $StructureTemplate$Palette$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$List, $List$$Type} from "java.util.List"

export interface $StructureTemplateAccessor {

 "getPalettes"(): $List<($StructureTemplate$Palette)>

(): $List$$Type<($StructureTemplate$Palette$$Type)>
get "palettes"(): $List<($StructureTemplate$Palette)>
}

export namespace $StructureTemplateAccessor {
const probejs$$marker: never
}
export class $StructureTemplateAccessor$$Static implements $StructureTemplateAccessor {


 "getPalettes"(): $List<($StructureTemplate$Palette)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateAccessor$$Type = (() => $List$$Type<($StructureTemplate$Palette$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateAccessor_ = $StructureTemplateAccessor$$Type;
}}
declare module "dev.compactmods.machines.api.room.upgrade.RoomUpgradeComponentType" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$FeatureElement, $FeatureElement$$Type} from "net.minecraft.world.flag.FeatureElement"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RoomUpgradeComponent, $RoomUpgradeComponent$$Type} from "dev.compactmods.machines.api.room.upgrade.RoomUpgradeComponent"
import {$RoomUpgradeComponentType$Builder, $RoomUpgradeComponentType$Builder$$Type} from "dev.compactmods.machines.api.room.upgrade.RoomUpgradeComponentType$Builder"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RoomUpgradeComponentType<T extends $RoomUpgradeComponent> extends $Record implements $FeatureElement {
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($RoomUpgradeComponentType<(any)>)>)>

constructor(arg0: $Supplier$$Type<(T)>, codec: $MapCodec$$Type<(T)>, requiredFeatures: $FeatureFlagSet$$Type, itemstackFilter: $Predicate$$Type<($ItemStack)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "builder"<T extends $RoomUpgradeComponent>(arg0: $Supplier$$Type<(T)>, arg1: $MapCodec$$Type<(T)>): $RoomUpgradeComponentType$Builder<(T)>
public "constructor"(): $Supplier<(T)>
public "codec"(): $MapCodec<(T)>
public "canApplyTo"(arg0: $ItemStack$$Type): boolean
public "itemstackFilter"(): $Predicate<($ItemStack)>
public "requiredFeatures"(): $FeatureFlagSet
public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.CompactmachinesRoomUpgrades
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.CompactmachinesRoomUpgradesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoomUpgradeComponentType$$Type<T> = (Special.CompactmachinesRoomUpgrades) | ({"constructor"?: $Supplier$$Type<(any)>, "requiredFeatures"?: $FeatureFlagSet$$Type, "itemstackFilter"?: $Predicate$$Type<($ItemStack$$Type)>, "codec"?: $MapCodec$$Type<(any)>}) | ([arg?: $Supplier$$Type<(any)>, requiredFeatures?: $FeatureFlagSet$$Type, itemstackFilter?: $Predicate$$Type<($ItemStack$$Type)>, codec?: $MapCodec$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoomUpgradeComponentType_<T> = $RoomUpgradeComponentType$$Type<(T)>;
}}
declare module "dev.compactmods.machines.api.room.upgrade.event.RoomUpgradeComponentEvent" {
import {$RoomUpgradeInstance, $RoomUpgradeInstance$$Type} from "dev.compactmods.machines.api.room.upgrade.RoomUpgradeInstance"

export interface $RoomUpgradeComponentEvent {

 "handle"(arg0: $RoomUpgradeInstance$$Type): void

(arg0: $RoomUpgradeInstance): void
}

export namespace $RoomUpgradeComponentEvent {
const probejs$$marker: never
}
export class $RoomUpgradeComponentEvent$$Static implements $RoomUpgradeComponentEvent {


 "handle"(arg0: $RoomUpgradeInstance$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoomUpgradeComponentEvent$$Type = ((arg0: $RoomUpgradeInstance) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoomUpgradeComponentEvent_ = $RoomUpgradeComponentEvent$$Type;
}}
declare module "dev.compactmods.machines.api.room.spatial.IRoomBoundaries" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export interface $IRoomBoundaries {

 "outerBounds"(): $AABB
 "innerBounds"(): $AABB
 "defaultSpawn"(): $Vec3
 "innerChunkPositions"(): $Stream<($ChunkPos)>

(): $AABB$$Type
}

export namespace $IRoomBoundaries {
const probejs$$marker: never
}
export class $IRoomBoundaries$$Static implements $IRoomBoundaries {


 "outerBounds"(): $AABB
 "innerBounds"(): $AABB
 "defaultSpawn"(): $Vec3
 "innerChunkPositions"(): $Stream<($ChunkPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRoomBoundaries$$Type = (() => $AABB$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRoomBoundaries_ = $IRoomBoundaries$$Type;
}}
declare module "dev.compactmods.machines.api.room.upgrade.RoomUpgradeComponent" {
import {$RoomUpgradeComponentType, $RoomUpgradeComponentType$$Type} from "dev.compactmods.machines.api.room.upgrade.RoomUpgradeComponentType"
import {$TooltipProvider, $TooltipProvider$$Type} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$RoomUpgradeComponentEvent, $RoomUpgradeComponentEvent$$Type} from "dev.compactmods.machines.api.room.upgrade.event.RoomUpgradeComponentEvent"

export interface $RoomUpgradeComponent extends $TooltipProvider {

 "getType"(): $RoomUpgradeComponentType<(any)>
 "gatherEvents"(): $Stream<($RoomUpgradeComponentEvent)>
 "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
get "type"(): $RoomUpgradeComponentType<(any)>
}

export namespace $RoomUpgradeComponent {
const probejs$$marker: never
}
export class $RoomUpgradeComponent$$Static implements $RoomUpgradeComponent {


 "getType"(): $RoomUpgradeComponentType<(any)>
 "gatherEvents"(): $Stream<($RoomUpgradeComponentEvent)>
 "addToTooltip"(arg0: $Item$TooltipContext$$Type, arg1: $Consumer$$Type<($Component)>, arg2: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoomUpgradeComponent$$Type = ($RoomUpgradeComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoomUpgradeComponent_ = $RoomUpgradeComponent$$Type;
}}
declare module "dev.compactmods.machines.machine.block.UnboundCompactMachineBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CompactMachineBlock, $CompactMachineBlock$$Type} from "dev.compactmods.machines.machine.block.CompactMachineBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $UnboundCompactMachineBlock extends $CompactMachineBlock implements $EntityBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnboundCompactMachineBlock$$Type = ($UnboundCompactMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnboundCompactMachineBlock_ = $UnboundCompactMachineBlock$$Type;
}}
declare module "dev.compactmods.machines.machine.block.BoundCompactMachineBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CompactMachineBlock, $CompactMachineBlock$$Type} from "dev.compactmods.machines.machine.block.CompactMachineBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BoundCompactMachineBlock extends $CompactMachineBlock implements $EntityBlock {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundCompactMachineBlock$$Type = ($BoundCompactMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundCompactMachineBlock_ = $BoundCompactMachineBlock$$Type;
}}
declare module "dev.compactmods.gander.render.rendertypes.GanderCompositeRenderType" {
import {$RenderType$CompositeState, $RenderType$CompositeState$$Type} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$TranslucentRenderTargetLayer, $TranslucentRenderTargetLayer$$Type} from "dev.compactmods.gander.render.translucency.TranslucentRenderTargetLayer"

export interface $GanderCompositeRenderType {

 "state"(): $RenderType$CompositeState
 "targetingTranslucentRenderTarget"(arg0: $TranslucentRenderTargetLayer$$Type, arg1: $TranslucentRenderTargetLayer$$Type): $RenderType
}

export namespace $GanderCompositeRenderType {
function of(arg0: $RenderType$$Type): $GanderCompositeRenderType
const probejs$$marker: never
}
export class $GanderCompositeRenderType$$Static implements $GanderCompositeRenderType {


static "of"(arg0: $RenderType$$Type): $GanderCompositeRenderType
 "state"(): $RenderType$CompositeState
 "targetingTranslucentRenderTarget"(arg0: $TranslucentRenderTargetLayer$$Type, arg1: $TranslucentRenderTargetLayer$$Type): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GanderCompositeRenderType$$Type = ($GanderCompositeRenderType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GanderCompositeRenderType_ = $GanderCompositeRenderType$$Type;
}}
declare module "dev.compactmods.machines.room.block.ProtectedWallBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ProtectedWallBlock extends $Block {
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


public "canPlayerBreak"(arg0: $Player$$Type): boolean
public "canHarvestBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
public "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtectedWallBlock$$Type = ($ProtectedWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProtectedWallBlock_ = $ProtectedWallBlock$$Type;
}}
