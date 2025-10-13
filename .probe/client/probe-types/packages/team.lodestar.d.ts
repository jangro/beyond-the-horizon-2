declare module "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure$StructurePiece" {
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiBlockStructure$StructurePiece {
readonly "offset": $Vec3i
readonly "state": $BlockState

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: $BlockState$$Type)

public "place"(arg0: $BlockPos$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type): void
public "place"(arg0: $BlockPos$$Type, arg1: $Level$$Type): void
public "canPlace"(arg0: $BlockPlaceContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockStructure$StructurePiece$$Type = ($MultiBlockStructure$StructurePiece);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiBlockStructure$StructurePiece_ = $MultiBlockStructure$StructurePiece$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.SimpleParticleOptions$ParticleSpritePicker" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $SimpleParticleOptions$ParticleSpritePicker extends $Enum<($SimpleParticleOptions$ParticleSpritePicker)> {
static readonly "WITH_AGE": $SimpleParticleOptions$ParticleSpritePicker
static readonly "LAST_INDEX": $SimpleParticleOptions$ParticleSpritePicker
static readonly "WITH_AGE_INVERSE": $SimpleParticleOptions$ParticleSpritePicker
static readonly "FIRST_INDEX": $SimpleParticleOptions$ParticleSpritePicker
static readonly "RANDOM_SPRITE": $SimpleParticleOptions$ParticleSpritePicker


public static "values"(): ($SimpleParticleOptions$ParticleSpritePicker)[]
public static "valueOf"(arg0: StringJS): $SimpleParticleOptions$ParticleSpritePicker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleParticleOptions$ParticleSpritePicker$$Type = (("first_index") | ("last_index") | ("with_age") | ("with_age_inverse") | ("random_sprite"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleParticleOptions$ParticleSpritePicker_ = $SimpleParticleOptions$ParticleSpritePicker$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ScreenParticle, $ScreenParticle$$Type} from "team.lodestar.lodestone.systems.particle.screen.base.ScreenParticle"
import {$LodestoneScreenParticleRenderType, $LodestoneScreenParticleRenderType$$Type} from "team.lodestar.lodestone.systems.particle.render_types.LodestoneScreenParticleRenderType"

export class $ScreenParticleHolder {
readonly "particles": $Map<($LodestoneScreenParticleRenderType), ($ArrayList<($ScreenParticle)>)>

constructor()

public "tick"(): void
public "isEmpty"(): boolean
public "addFrom"(arg0: $ScreenParticleHolder$$Type): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenParticleHolder$$Type = ($ScreenParticleHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenParticleHolder_ = $ScreenParticleHolder$$Type;
}}
declare module "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectExtraData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NetworkedParticleEffectExtraData {

}

export namespace $NetworkedParticleEffectExtraData {
const probejs$$marker: never
}
export class $NetworkedParticleEffectExtraData$$Static implements $NetworkedParticleEffectExtraData {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedParticleEffectExtraData$$Type = ($NetworkedParticleEffectExtraData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkedParticleEffectExtraData_ = $NetworkedParticleEffectExtraData$$Type;
}}
declare module "team.lodestar.lodestone.systems.worldevent.WorldEventInstance" {
import {$WorldEventType, $WorldEventType$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $WorldEventInstance {
 "dirty": boolean
 "discarded": boolean
 "level": $Level
 "frozen": boolean
 "type": $WorldEventType
 "uuid": $UUID

constructor(arg0: $WorldEventType$$Type)

public "tick"(arg0: $Level$$Type): void
public "isFrozen"(): boolean
public static "sync"<T extends $WorldEventInstance>(arg0: T): void
public "sync"(arg0: $Level$$Type): void
public static "sync"<T extends $WorldEventInstance>(arg0: T, arg1: $ServerPlayer$$Type): void
public "getLevel"(): $Level
public "end"(arg0: $Level$$Type): void
public "start"(arg0: $Level$$Type): void
public "deserializeNBT"(arg0: $CompoundTag$$Type): $WorldEventInstance
public "serializeNBT"(): $CompoundTag
public "setDirty"(): void
public "synchronizeNBT"(): $CompoundTag
get "frozen"(): boolean
get "level"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventInstance$$Type = ($WorldEventInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldEventInstance_ = $WorldEventInstance$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.tools.LodestoneHoeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LodestoneItemProperties, $LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HoeItem, $HoeItem$$Type} from "net.minecraft.world.item.HoeItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $LodestoneHoeItem extends $HoeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneHoeItem$$Type = ($LodestoneHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneHoeItem_ = $LodestoneHoeItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPayload" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$NetworkedParticleEffectColorData, $NetworkedParticleEffectColorData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectColorData"
import {$NetworkedParticleEffectPositionData, $NetworkedParticleEffectPositionData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPositionData"
import {$List, $List$$Type} from "java.util.List"
import {$NetworkedParticleEffectExtraData, $NetworkedParticleEffectExtraData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectExtraData"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$IPayloadContext, $IPayloadContext$$Type} from "net.neoforged.neoforge.network.handling.IPayloadContext"
import {$StreamMemberEncoder, $StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$OneSidedPayloadData, $OneSidedPayloadData$$Type} from "team.lodestar.lodestone.systems.network.OneSidedPayloadData"
import {$CustomPacketPayload$FallbackProvider, $CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$NetworkedParticleEffectType, $NetworkedParticleEffectType$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType"

export class $NetworkedParticleEffectPayload extends $OneSidedPayloadData {

constructor(arg0: $FriendlyByteBuf$$Type)
constructor(arg0: $NetworkedParticleEffectType$$Type<(any)>, arg1: $NetworkedParticleEffectPositionData$$Type, arg2: $NetworkedParticleEffectColorData$$Type, arg3: $NetworkedParticleEffectExtraData$$Type)

public "handle"(arg0: $IPayloadContext$$Type): void
public "serialize"(arg0: $FriendlyByteBuf$$Type): void
public "getEffectType"(arg0: StringJS): $NetworkedParticleEffectType<(any)>
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedParticleEffectPayload$$Type = ($NetworkedParticleEffectPayload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkedParticleEffectPayload_ = $NetworkedParticleEffectPayload$$Type;
}}
declare module "team.lodestar.lodestone.systems.easing.Easing$Back" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Easing$Elastic, $Easing$Elastic$$Type} from "team.lodestar.lodestone.systems.easing.Easing$Elastic"
import {$Easing, $Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"

export class $Easing$Back extends $Easing {
static readonly "CUBIC_IN_OUT": $Easing
static readonly "BOUNCE_IN": $Easing
static readonly "QUAD_IN": $Easing
static readonly "ELASTIC_IN": $Easing$Elastic
static readonly "QUINTIC_IN_OUT": $Easing
static readonly "SINE_OUT": $Easing
static readonly "QUARTIC_OUT": $Easing
static readonly "QUINTIC_IN": $Easing
static readonly "QUARTIC_IN_OUT": $Easing
static readonly "EXPO_IN": $Easing
static readonly "BOUNCE_IN_OUT": $Easing
static readonly "CIRC_OUT": $Easing
static readonly "BACK_IN_OUT": $Easing$Back
static readonly "SINE_IN_OUT": $Easing
static readonly "CODEC": $Codec<($Easing)>
static readonly "CIRC_IN_OUT": $Easing
static readonly "EASINGS": $HashMap<(StringJS), ($Easing)>
static readonly "QUAD_IN_OUT": $Easing
static readonly "BACK_IN": $Easing$Back
static readonly "ELASTIC_OUT": $Easing$Elastic
static readonly "QUINTIC_OUT": $Easing
static readonly "ELASTIC_IN_OUT": $Easing$Elastic
static readonly "CUBIC_OUT": $Easing
static readonly "QUAD_OUT": $Easing
static readonly "BACK_OUT": $Easing$Back
static readonly "BOUNCE_OUT": $Easing
static readonly "SINE_IN": $Easing
static readonly "DEFAULT_OVERSHOOT": float
static readonly "QUARTIC_IN": $Easing
readonly "name": StringJS
static readonly "EXPO_IN_OUT": $Easing
static readonly "CIRC_IN": $Easing
static readonly "LINEAR": $Easing
static readonly "CUBIC_IN": $Easing
static readonly "EXPO_OUT": $Easing

constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: float)

public "setOvershoot"(arg0: float): void
public "getOvershoot"(): float
set "overshoot"(value: float)
get "overshoot"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Easing$Back$$Type = ($Easing$Back);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Easing$Back_ = $Easing$Back$$Type;
}}
declare module "team.lodestar.lodestone.events.types.worldevent.WorldEventTickEvent" {
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$WorldEventInstance, $WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"
import {$WorldEventInstanceEvent, $WorldEventInstanceEvent$$Type} from "team.lodestar.lodestone.events.types.worldevent.WorldEventInstanceEvent"

export class $WorldEventTickEvent extends $WorldEventInstanceEvent implements $ICancellableEvent {

constructor(arg0: $WorldEventInstance$$Type, arg1: $Level$$Type)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventTickEvent$$Type = ($WorldEventTickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldEventTickEvent_ = $WorldEventTickEvent$$Type;
}}
declare module "team.lodestar.lodestone.systems.network.OneSidedPayloadData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$LodestoneNetworkPayloadData, $LodestoneNetworkPayloadData$$Type} from "team.lodestar.lodestone.systems.network.LodestoneNetworkPayloadData"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$IPayloadContext, $IPayloadContext$$Type} from "net.neoforged.neoforge.network.handling.IPayloadContext"
import {$StreamMemberEncoder, $StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider, $CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"

export class $OneSidedPayloadData extends $LodestoneNetworkPayloadData {

constructor()

public "handle"(arg0: $IPayloadContext$$Type): void
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OneSidedPayloadData$$Type = ($OneSidedPayloadData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OneSidedPayloadData_ = $OneSidedPayloadData$$Type;
}}
declare module "team.lodestar.lodestone.handlers.ItemEventHandler$IEventResponder" {
import {$LivingDeathEvent, $LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingDamageEvent$Pre, $LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$LivingIncomingDamageEvent, $LivingIncomingDamageEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingIncomingDamageEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AddAttributeTooltipsEvent, $AddAttributeTooltipsEvent$$Type} from "net.neoforged.neoforge.client.event.AddAttributeTooltipsEvent"
import {$LivingDamageEvent$Post, $LivingDamageEvent$Post$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Post"

export interface $ItemEventHandler$IEventResponder {

 "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
 "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
}

export namespace $ItemEventHandler$IEventResponder {
const probejs$$marker: never
}
export class $ItemEventHandler$IEventResponder$$Static implements $ItemEventHandler$IEventResponder {


 "incomingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "incomingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "outgoingDamageEvent"(arg0: $LivingIncomingDamageEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "outgoingDamageEvent"(arg0: $LivingDamageEvent$Pre$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "incomingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "outgoingDeathEvent"(arg0: $LivingDeathEvent$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "modifyAttributeTooltipEvent"(arg0: $AddAttributeTooltipsEvent$$Type): void
 "finalizedIncomingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "finalizedOutgoingDamageEvent"(arg0: $LivingDamageEvent$Post$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEventHandler$IEventResponder$$Type = ($ItemEventHandler$IEventResponder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEventHandler$IEventResponder_ = $ItemEventHandler$IEventResponder$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.tools.LodestonePickaxeItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LodestoneItemProperties, $LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PickaxeItem, $PickaxeItem$$Type} from "net.minecraft.world.item.PickaxeItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $LodestonePickaxeItem extends $PickaxeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestonePickaxeItem$$Type = ($LodestonePickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestonePickaxeItem_ = $LodestonePickaxeItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.LodestoneItemProperties" {
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$FeatureFlag, $FeatureFlag$$Type} from "net.minecraft.world.flag.FeatureFlag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$DataComponentMap$Builder, $DataComponentMap$Builder$$Type} from "net.minecraft.core.component.DataComponentMap$Builder"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Interner, $Interner$$Type} from "com.google.common.collect.Interner"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $LodestoneItemProperties extends $Item$Properties {
 "components": $DataComponentMap$Builder
static readonly "TAB_SORTING": $Map<($ResourceKey<($CreativeModeTab)>), ($List<($ResourceLocation)>)>
static readonly "COMPONENT_INTERNER": $Interner<($DataComponentMap)>

constructor(arg0: $DeferredHolder$$Type<($CreativeModeTab$$Type), ($CreativeModeTab$$Type)>)
constructor(arg0: $ResourceKey$$Type<($CreativeModeTab)>)
constructor()

public "attributes"(arg0: $ItemAttributeModifiers$$Type): $LodestoneItemProperties
public "component"(arg0: $DataComponentType$$Type<(any)>, arg1: any): $Item$Properties
public "rarity"(arg0: $Rarity$$Type): $LodestoneItemProperties
public "food"(arg0: $FoodProperties$$Type): $LodestoneItemProperties
public "craftRemainder"(arg0: $Item$$Type): $Item$Properties
public "stacksTo"(arg0: integer): $Item$Properties
public "durability"(arg0: integer): $LodestoneItemProperties
public "fireResistant"(): $Item$Properties
public "setNoRepair"(): $LodestoneItemProperties
public "mergeAttributes"(arg0: $ItemAttributeModifiers$$Type): $LodestoneItemProperties
public static "populateItemGroups"(arg0: $BuildCreativeModeTabContentsEvent$$Type): void
public static "addToTabSorting"(arg0: $ResourceLocation$$Type, arg1: $Item$Properties$$Type): void
public "jukeboxPlayable"(arg0: $ResourceKey$$Type<(any)>): $Item$Properties
public "requiredFeatures"(...arg0: ($FeatureFlag$$Type)[]): $LodestoneItemProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneItemProperties$$Type = ($LodestoneItemProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneItemProperties_ = $LodestoneItemProperties$$Type;
}}
declare module "team.lodestar.lodestone.systems.block.LodestoneDirectionalBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$DirectionalBlock, $DirectionalBlock$$Type} from "net.minecraft.world.level.block.DirectionalBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneDirectionalBlock extends $DirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LodestoneDirectionalBlock)>
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneDirectionalBlock$$Type = ($LodestoneDirectionalBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneDirectionalBlock_ = $LodestoneDirectionalBlock$$Type;
}}
declare module "team.lodestar.lodestone.recipe.NBTCarryRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$NBTCarryRecipe, $NBTCarryRecipe$$Type} from "team.lodestar.lodestone.recipe.NBTCarryRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $NBTCarryRecipe$Serializer implements $RecipeSerializer<($NBTCarryRecipe)> {
static readonly "CODEC": $MapCodec<($NBTCarryRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($NBTCarryRecipe)>

constructor()

public "codec"(): $MapCodec<($NBTCarryRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($NBTCarryRecipe)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $NBTCarryRecipe
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $NBTCarryRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTCarryRecipe$Serializer$$Type = ($NBTCarryRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTCarryRecipe$Serializer_ = $NBTCarryRecipe$Serializer$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$GenericParticleData, $GenericParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$SpinParticleDataBuilder, $SpinParticleDataBuilder$$Type} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleDataBuilder"
import {$Easing, $Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"

export class $SpinParticleData extends $GenericParticleData {
readonly "endingValue": float
readonly "startToMiddleEasing": $Easing
 "valueMultiplier": float
readonly "spinOffset": float
 "coefficientMultiplier": float
readonly "middleValue": float
readonly "coefficient": float
readonly "middleToEndEasing": $Easing
readonly "startingValue": float


public static "create"(arg0: float): $SpinParticleDataBuilder
public static "create"(arg0: float, arg1: float): $SpinParticleDataBuilder
public static "create"(arg0: float, arg1: float, arg2: float): $SpinParticleDataBuilder
public "copy"(): $GenericParticleData
public "bake"(): $SpinParticleData
public "immutable"(): $GenericParticleData
public static "createRandomDirection"(arg0: $RandomSource$$Type, arg1: float, arg2: float, arg3: float): $SpinParticleDataBuilder
public static "createRandomDirection"(arg0: $RandomSource$$Type, arg1: float): $SpinParticleDataBuilder
public static "createRandomDirection"(arg0: $RandomSource$$Type, arg1: float, arg2: float): $SpinParticleDataBuilder
public "overrideCoefficientMultiplier"(arg0: float): $SpinParticleData
public "overrideValueMultiplier"(arg0: float): $SpinParticleData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpinParticleData$$Type = ($SpinParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpinParticleData_ = $SpinParticleData$$Type;
}}
declare module "team.lodestar.lodestone.systems.recipe.LodestoneRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $LodestoneRecipeSerializer<T extends $Recipe<(any)>> implements $RecipeSerializer<(T)> {

constructor(arg0: $MapCodec$$Type<(T)>)

public "codec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneRecipeSerializer$$Type<T> = ($LodestoneRecipeSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneRecipeSerializer_<T> = $LodestoneRecipeSerializer$$Type<(T)>;
}}
declare module "team.lodestar.lodestone.systems.rendering.trail.TrailPointBuilder" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$List, $List$$Type} from "java.util.List"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Vector4f, $Vector4f$$Type} from "org.joml.Vector4f"
import {$TrailPoint, $TrailPoint$$Type} from "team.lodestar.lodestone.systems.rendering.trail.TrailPoint"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $TrailPointBuilder {
readonly "trailLength": $Supplier<(integer)>

constructor(arg0: $Supplier$$Type<(integer)>)

public static "create"(arg0: $Supplier$$Type<(integer)>): $TrailPointBuilder
public static "create"(arg0: integer): $TrailPointBuilder
public "build"(arg0: $Matrix4f$$Type): $List<($Vector4f)>
public "build"(arg0: $Matrix4f$$Type, arg1: float): $List<($Vector4f)>
public "getOrigin"(): $Vec3
public "run"(arg0: $Consumer$$Type<($TrailPoint)>): $TrailPointBuilder
public "getTrailPoints"(): $List<($TrailPoint)>
public "setOrigin"(arg0: $Vec3$$Type): $TrailPointBuilder
public "addTrailPoint"(arg0: $TrailPoint$$Type): $TrailPointBuilder
public "addTrailPoint"(arg0: $Vec3$$Type): $TrailPointBuilder
public "tickTrailPoints"(): $TrailPointBuilder
get "origin"(): $Vec3
get "trailPoints"(): $List<($TrailPoint)>
set "origin"(value: $Vec3$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailPointBuilder$$Type = ($TrailPointBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrailPointBuilder_ = $TrailPointBuilder$$Type;
}}
declare module "team.lodestar.lodestone.systems.recipe.LodestoneRecipeType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $LodestoneRecipeType<T extends $Recipe<(any)>> implements $RecipeType<(T)> {
readonly "id": $ResourceLocation

constructor(arg0: $ResourceLocation$$Type)

public "toString"(): StringJS
public static "findRecipe"<T extends $RecipeInput, K extends $Recipe<(T)>>(arg0: $Level$$Type, arg1: $RecipeType$$Type<(K)>, arg2: $Predicate$$Type<(K)>): K
public static "getRecipe"<T extends $RecipeInput, K extends $Recipe<(T)>>(arg0: $Level$$Type, arg1: $RecipeType$$Type<(K)>, arg2: T): K
public static "getRecipes"<T extends $RecipeInput, K extends $Recipe<(T)>>(arg0: $Level$$Type, arg1: $RecipeType$$Type<(K)>): $List<(K)>
public static "getRecipeHolders"<T extends $RecipeInput, K extends $Recipe<(T)>>(arg0: $Level$$Type, arg1: $RecipeType$$Type<(K)>): $List<($RecipeHolder<(K)>)>
public static "register"<T extends $Recipe<(any)>>(arg0: StringJS): $RecipeType<(T)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$$Type): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneRecipeType$$Type<T> = ($LodestoneRecipeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneRecipeType_<T> = $LodestoneRecipeType$$Type<(T)>;
}}
declare module "team.lodestar.lodestone.systems.entity.LodestoneBoatEntity" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Boat$Status, $Boat$Status$$Type} from "net.minecraft.world.entity.vehicle.Boat$Status"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Leashable$LeashData, $Leashable$LeashData$$Type} from "net.minecraft.world.entity.Leashable$LeashData"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Boat, $Boat$$Type} from "net.minecraft.world.entity.vehicle.Boat"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $LodestoneBoatEntity extends $Boat {
 "inputUp": boolean
static readonly "TIME_TO_EJECT": integer
 "lerpYRot": double
 "xRot": float
 "hasImpulse": boolean
static readonly "PADDLE_RIGHT": integer
 "ars_Nouveau$motions": $Stack<(any)>
 "tickCount": integer
 "an_isRewinding": boolean
static readonly "DATA_ID_TYPE": $EntityDataAccessor<(integer)>
 "noPhysics": boolean
 "yo": double
 "inputRight": boolean
 "lastYd": double
 "bubbleColumnDirectionIsDown": boolean
static readonly "DATA_ID_PADDLE_RIGHT": $EntityDataAccessor<(boolean)>
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BUBBLE_TIME": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
static readonly "PADDLE_SOUND_TIME": double
 "outOfControlTicks": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "PADDLE_LEFT": integer
 "leashData": $Leashable$LeashData
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "oldStatus": $Boat$Status
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "isAboveBubbleColumn": boolean
 "inputDown": boolean
 "hurtMarked": boolean
 "deltaRotation": float
 "status": $Boat$Status
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "DATA_ID_PADDLE_LEFT": $EntityDataAccessor<(boolean)>
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "inputLeft": boolean
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DATA_ID_BUBBLE_TIME": $EntityDataAccessor<(integer)>
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "lerpSteps": integer
 "yOld": double
 "landFriction": float
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
 "bubbleAngleO": float
 "invFriction": float
static readonly "DEFAULT_BB_HEIGHT": float
 "lerpX": double
readonly "paddlePositions": (float)[]
 "lerpZ": double
 "lerpY": double
 "bubbleAngle": float
 "lerpXRot": double
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "PADDLE_SPEED": float
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
 "waterLevel": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "bubbleMultiplier": float
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

/**
 * 
 * @deprecated
 */
constructor(arg0: $EntityType$$Type<($LodestoneBoatEntity$$Type)>, arg1: $Level$$Type, arg2: $Supplier$$Type<($Item$$Type)>, arg3: $Supplier$$Type<($Item$$Type)>)
constructor(arg0: $EntityType$$Type<($LodestoneBoatEntity$$Type)>, arg1: $Level$$Type, arg2: $Supplier$$Type<($Item$$Type)>)

public "getDropItem"(): $Item
public static "tickLeash"<E extends ($Entity) & ($Leashable)>(arg0: E): void
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "dropItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBoatEntity$$Type = ($LodestoneBoatEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBoatEntity_ = $LodestoneBoatEntity$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.LodestoneBoatItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LodestoneBoatEntity, $LodestoneBoatEntity$$Type} from "team.lodestar.lodestone.systems.entity.LodestoneBoatEntity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $LodestoneBoatItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $Supplier$$Type<($EntityType$$Type<($LodestoneBoatEntity$$Type)>)>)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBoatItem$$Type = ($LodestoneBoatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBoatItem_ = $LodestoneBoatItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.multiblock.ILodestoneMultiblockComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILodestoneMultiblockComponent {

}

export namespace $ILodestoneMultiblockComponent {
const probejs$$marker: never
}
export class $ILodestoneMultiblockComponent$$Static implements $ILodestoneMultiblockComponent {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILodestoneMultiblockComponent$$Type = ($ILodestoneMultiblockComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILodestoneMultiblockComponent_ = $ILodestoneMultiblockComponent$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleDataBuilder" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$GenericParticleDataBuilder, $GenericParticleDataBuilder$$Type} from "team.lodestar.lodestone.systems.particle.data.GenericParticleDataBuilder"
import {$GenericParticleData, $GenericParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$Easing, $Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"

export class $SpinParticleDataBuilder extends $GenericParticleDataBuilder {


public "build"(): $GenericParticleData
public "setEasing"(arg0: $Easing$$Type, arg1: $Easing$$Type): $GenericParticleDataBuilder
public "setEasing"(arg0: $Easing$$Type): $GenericParticleDataBuilder
public "setSpinOffset"(arg0: float): $SpinParticleDataBuilder
public "setCoefficient"(arg0: float): $GenericParticleDataBuilder
public "randomSpinOffset"(arg0: $RandomSource$$Type): $SpinParticleDataBuilder
set "easing"(value: $Easing$$Type)
set "spinOffset"(value: float)
set "coefficient"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpinParticleDataBuilder$$Type = ($SpinParticleDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpinParticleDataBuilder_ = $SpinParticleDataBuilder$$Type;
}}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$LodestoneLayerToken" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export class $LodestoneBlockFiller$LodestoneLayerToken {
readonly "index": $UUID

constructor(arg0: $UUID$$Type)
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$LodestoneLayerToken$$Type = ($LodestoneBlockFiller$LodestoneLayerToken);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller$LodestoneLayerToken_ = $LodestoneBlockFiller$LodestoneLayerToken$$Type;
}}
declare module "team.lodestar.lodestone.systems.worldevent.WorldEventType" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$WorldEventInstance, $WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"
import {$WorldEventType$EventInstanceSupplier, $WorldEventType$EventInstanceSupplier$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventType$EventInstanceSupplier"

export class $WorldEventType {
readonly "clientSynced": boolean
readonly "supplier": $WorldEventType$EventInstanceSupplier<(any)>
readonly "id": $ResourceLocation

constructor(arg0: $ResourceLocation$$Type, arg1: $WorldEventType$EventInstanceSupplier$$Type<(any)>, arg2: boolean)
constructor(arg0: $ResourceLocation$$Type, arg1: $WorldEventType$EventInstanceSupplier$$Type<(any)>)

public "createInstance"(arg0: $CompoundTag$$Type): $WorldEventInstance
public "isClientSynced"(): boolean
get "clientSynced"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.LodestoneWorldEventType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.LodestoneWorldEventTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventType$$Type = (Special.LodestoneWorldEventType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldEventType_ = $WorldEventType$$Type;
}}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$EntryPlacementPredicate" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $LodestoneBlockFiller$EntryPlacementPredicate {

 "canPlace"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean

(arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState): boolean
}

export namespace $LodestoneBlockFiller$EntryPlacementPredicate {
const probejs$$marker: never
}
export class $LodestoneBlockFiller$EntryPlacementPredicate$$Static implements $LodestoneBlockFiller$EntryPlacementPredicate {


 "canPlace"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$EntryPlacementPredicate$$Type = ((arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller$EntryPlacementPredicate_ = $LodestoneBlockFiller$EntryPlacementPredicate$$Type;
}}
declare module "team.lodestar.lodestone.systems.block.LodestoneEntityBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$$Type} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $LodestoneEntityBlock<T extends $LodestoneBlockEntity> extends $Block implements $EntityBlock {
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
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "setBlockEntity"(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>): $LodestoneEntityBlock<(T)>
public "getTicker"<Y extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(Y)>): $BlockEntityTicker<(Y)>
public "onBlockBroken"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "hasTileEntity"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
set "blockEntity"(value: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneEntityBlock$$Type<T> = ($LodestoneEntityBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneEntityBlock_<T> = $LodestoneEntityBlock$$Type<(T)>;
}}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$LodestoneBlockFillerLayer" {
import {$LodestoneBlockFiller$BlockStateEntry, $LodestoneBlockFiller$BlockStateEntry$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntry"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$LodestoneBlockFiller$LodestoneLayerToken, $LodestoneBlockFiller$LodestoneLayerToken$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$LodestoneLayerToken"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$LodestoneBlockFiller$BlockStateEntryBuilder, $LodestoneBlockFiller$BlockStateEntryBuilder$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntryBuilder"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"

export class $LodestoneBlockFiller$LodestoneBlockFillerLayer extends $HashMap<($BlockPos), ($LodestoneBlockFiller$BlockStateEntry)> {
readonly "layerToken": $LodestoneBlockFiller$LodestoneLayerToken

constructor(arg0: $LodestoneBlockFiller$LodestoneLayerToken$$Type)

public "put"(arg0: $BlockPos$$Type, arg1: $LodestoneBlockFiller$BlockStateEntryBuilder$$Type): $LodestoneBlockFiller$BlockStateEntry
public "replace"(arg0: $BlockPos$$Type, arg1: $Function$$Type<($LodestoneBlockFiller$BlockStateEntry), ($LodestoneBlockFiller$BlockStateEntry$$Type)>): void
public "fill"(arg0: $LevelAccessor$$Type): void
public "putIfAbsent"(arg0: $BlockPos$$Type, arg1: $LodestoneBlockFiller$BlockStateEntryBuilder$$Type): $LodestoneBlockFiller$BlockStateEntry
public "equals"(arg0: any): boolean
public "hashCode"(): integer
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
export type $LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type = ($LodestoneBlockFiller$LodestoneBlockFillerLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller$LodestoneBlockFillerLayer_ = $LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticle" {
import {$ParticleRenderType, $ParticleRenderType$$Type} from "net.minecraft.client.particle.ParticleRenderType"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SimpleParticleOptions$ParticleSpritePicker, $SimpleParticleOptions$ParticleSpritePicker$$Type} from "team.lodestar.lodestone.systems.particle.SimpleParticleOptions$ParticleSpritePicker"
import {$RenderHandler$LodestoneRenderLayer, $RenderHandler$LodestoneRenderLayer$$Type} from "team.lodestar.lodestone.handlers.RenderHandler$LodestoneRenderLayer"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$WorldParticleOptions, $WorldParticleOptions$$Type} from "team.lodestar.lodestone.systems.particle.world.options.WorldParticleOptions"
import {$ParticleEngine$MutableSpriteSet, $ParticleEngine$MutableSpriteSet$$Type} from "net.minecraft.client.particle.ParticleEngine$MutableSpriteSet"
import {$SpriteSet, $SpriteSet$$Type} from "net.minecraft.client.particle.SpriteSet"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SpinParticleData, $SpinParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$TextureSheetParticle, $TextureSheetParticle$$Type} from "net.minecraft.client.particle.TextureSheetParticle"
import {$GenericParticleData, $GenericParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$LodestoneParticleBehavior, $LodestoneParticleBehavior$$Type} from "team.lodestar.lodestone.systems.particle.world.behaviors.LodestoneParticleBehavior"
import {$ColorParticleData, $ColorParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $LodestoneWorldParticle extends $TextureSheetParticle {
readonly "renderActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
readonly "colorData": $ColorParticleData
readonly "tickActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
readonly "transparencyData": $GenericParticleData
readonly "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
readonly "spinData": $SpinParticleData
readonly "particleLight": integer
readonly "renderLayer": $RenderHandler$LodestoneRenderLayer
 "gravity": float
readonly "lengthData": $GenericParticleData
 "lifeDelay": integer
readonly "spriteSet": $ParticleEngine$MutableSpriteSet
readonly "renderType": $ParticleRenderType
readonly "behavior": $LodestoneParticleBehavior
readonly "scaleData": $GenericParticleData
 "age": integer

constructor(arg0: $ClientLevel$$Type, arg1: $WorldParticleOptions$$Type, arg2: $ParticleEngine$MutableSpriteSet$$Type, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double)

public "tick"(): void
public "tick"(arg0: integer): void
public "getRandom"(): $RandomSource
public "getY"(): double
public "getX"(): double
public "getZ"(): double
public "getRed"(): float
public "getU0"(): float
public "getU1"(): float
public "getV0"(): float
public "getV1"(): float
public "getAge"(): integer
public "render"(arg0: $VertexConsumer$$Type, arg1: $Camera$$Type, arg2: float): void
public "getLightColor"(arg0: float): integer
public "getAlpha"(): float
public "getRenderType"(): $ParticleRenderType
public "getXMotion"(): double
public "getYMotion"(): double
public "getZMotion"(): double
public "getORoll"(): float
public "getXOld"(): double
public "getYOld"(): double
public "getZOld"(): double
public "getQuadLength"(arg0: float): float
public "pickColor"(arg0: float): void
public "pickSprite"(arg0: integer): void
public "getLifetime"(): integer
public "getRoll"(): float
public "getGreen"(): float
public "getBlue"(): float
public "setParticleSpeed"(arg0: $Vec3$$Type): void
public "getVertexConsumer"(arg0: $VertexConsumer$$Type): $VertexConsumer
public "getSpritePicker"(): $SimpleParticleOptions$ParticleSpritePicker
public "setParticlePosition"(arg0: $Vec3$$Type): void
public "getParticleSpeed"(): $Vec3
public "getParticlePosition"(): $Vec3
public "setSpriteFromInverseAge"(arg0: $SpriteSet$$Type): void
get "random"(): $RandomSource
get "y"(): double
get "x"(): double
get "z"(): double
get "red"(): float
get "u0"(): float
get "u1"(): float
get "v0"(): float
get "v1"(): float
get "age"(): integer
get "alpha"(): float
get "renderType"(): $ParticleRenderType
get "xMotion"(): double
get "yMotion"(): double
get "zMotion"(): double
get "oRoll"(): float
get "xOld"(): double
get "yOld"(): double
get "zOld"(): double
get "lifetime"(): integer
get "roll"(): float
get "green"(): float
get "blue"(): float
set "particleSpeed"(value: $Vec3$$Type)
get "spritePicker"(): $SimpleParticleOptions$ParticleSpritePicker
set "particlePosition"(value: $Vec3$$Type)
get "particleSpeed"(): $Vec3
get "particlePosition"(): $Vec3
set "spriteFromInverseAge"(value: $SpriteSet$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneWorldParticle$$Type = ($LodestoneWorldParticle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneWorldParticle_ = $LodestoneWorldParticle$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.world.type.LodestoneWorldParticleType" {
import {$AbstractLodestoneParticleType, $AbstractLodestoneParticleType$$Type} from "team.lodestar.lodestone.systems.particle.world.type.AbstractLodestoneParticleType"
import {$WorldParticleOptions, $WorldParticleOptions$$Type} from "team.lodestar.lodestone.systems.particle.world.options.WorldParticleOptions"

export class $LodestoneWorldParticleType extends $AbstractLodestoneParticleType<($WorldParticleOptions)> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneWorldParticleType$$Type = ($LodestoneWorldParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneWorldParticleType_ = $LodestoneWorldParticleType$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataBuilder" {
import {$ColorParticleData, $ColorParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"
import {$Easing, $Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"

export class $ColorParticleDataBuilder {


public "build"(): $ColorParticleData
public "setEasing"(arg0: $Easing$$Type): $ColorParticleDataBuilder
public "setCoefficient"(arg0: float): $ColorParticleDataBuilder
set "easing"(value: $Easing$$Type)
set "coefficient"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorParticleDataBuilder$$Type = ($ColorParticleDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorParticleDataBuilder_ = $ColorParticleDataBuilder$$Type;
}}
declare module "team.lodestar.lodestone.systems.rendering.IVertexBuffer" {
import {$VertexBuffer, $VertexBuffer$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$FloatBuffer, $FloatBuffer$$Type} from "java.nio.FloatBuffer"
import {$VertexBuffer$Usage, $VertexBuffer$Usage$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer$Usage"
import {$ShaderInstance, $ShaderInstance$$Type} from "net.minecraft.client.renderer.ShaderInstance"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IVertexBuffer {

 "drawInstanced"(arg0: integer): void
 "addAttributeVBO"(arg0: integer, arg1: $FloatBuffer$$Type, arg2: $VertexBuffer$Usage$$Type, arg3: $Consumer$$Type<(integer)>): void
 "drawWithShaderInstanced"(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type, arg2: $ShaderInstance$$Type, arg3: integer): void
}

export namespace $IVertexBuffer {
function cast(arg0: $VertexBuffer$$Type): $IVertexBuffer
const probejs$$marker: never
}
export class $IVertexBuffer$$Static implements $IVertexBuffer {


static "cast"(arg0: $VertexBuffer$$Type): $IVertexBuffer
 "drawInstanced"(arg0: integer): void
 "addAttributeVBO"(arg0: integer, arg1: $FloatBuffer$$Type, arg2: $VertexBuffer$Usage$$Type, arg3: $Consumer$$Type<(integer)>): void
 "drawWithShaderInstanced"(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type, arg2: $ShaderInstance$$Type, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVertexBuffer$$Type = ($IVertexBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVertexBuffer_ = $IVertexBuffer$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.world.type.AbstractLodestoneParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$WorldParticleOptions, $WorldParticleOptions$$Type} from "team.lodestar.lodestone.systems.particle.world.options.WorldParticleOptions"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AbstractLodestoneParticleType<T extends $WorldParticleOptions> extends $ParticleType<(T)> {


public "getType"(): $AbstractLodestoneParticleType<(T)>
public "codec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
get "type"(): $AbstractLodestoneParticleType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractLodestoneParticleType$$Type<T> = ($AbstractLodestoneParticleType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractLodestoneParticleType_<T> = $AbstractLodestoneParticleType$$Type<(T)>;
}}
declare module "team.lodestar.lodestone.systems.blockentity.IItemHandlerSupplier" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $IItemHandlerSupplier {

 "getInventory"(arg0: $Direction$$Type): $IItemHandler

(arg0: $Direction): $IItemHandler$$Type
}

export namespace $IItemHandlerSupplier {
const probejs$$marker: never
}
export class $IItemHandlerSupplier$$Static implements $IItemHandlerSupplier {


 "getInventory"(arg0: $Direction$$Type): $IItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerSupplier$$Type = ((arg0: $Direction) => $IItemHandler$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerSupplier_ = $IItemHandlerSupplier$$Type;
}}
declare module "team.lodestar.lodestone.events.types.worldevent.WorldEventRenderEvent" {
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$WorldEventRenderer, $WorldEventRenderer$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventRenderer"
import {$WorldEventInstance, $WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"
import {$WorldEventInstanceEvent, $WorldEventInstanceEvent$$Type} from "team.lodestar.lodestone.events.types.worldevent.WorldEventInstanceEvent"

export class $WorldEventRenderEvent extends $WorldEventInstanceEvent {

constructor(arg0: $WorldEventInstance$$Type, arg1: $WorldEventRenderer$$Type<($WorldEventInstance$$Type)>, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: float)

public "getRenderer"(): $WorldEventRenderer<($WorldEventInstance)>
public "getPoseStack"(): $PoseStack
public "getMultiBufferSource"(): $MultiBufferSource
public "getPartialTicks"(): float
get "renderer"(): $WorldEventRenderer<($WorldEventInstance)>
get "poseStack"(): $PoseStack
get "multiBufferSource"(): $MultiBufferSource
get "partialTicks"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventRenderEvent$$Type = ($WorldEventRenderEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldEventRenderEvent_ = $WorldEventRenderEvent$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.tools.magic.MagicHoeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LodestoneItemProperties, $LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$LodestoneHoeItem, $LodestoneHoeItem$$Type} from "team.lodestar.lodestone.systems.item.tools.LodestoneHoeItem"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $MagicHoeItem extends $LodestoneHoeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: $LodestoneItemProperties$$Type)

public static "aether$getTillables"(): $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicHoeItem$$Type = ($MagicHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicHoeItem_ = $MagicHoeItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.worldevent.WorldEventType$EventInstanceSupplier" {
import {$WorldEventInstance, $WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"

export interface $WorldEventType$EventInstanceSupplier<T extends $WorldEventInstance> {

 "getInstance"(): T

(): T
get "instance"(): T
}

export namespace $WorldEventType$EventInstanceSupplier {
const probejs$$marker: never
}
export class $WorldEventType$EventInstanceSupplier$$Static<T extends $WorldEventInstance> implements $WorldEventType$EventInstanceSupplier {


 "getInstance"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventType$EventInstanceSupplier$$Type<T> = (() => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldEventType$EventInstanceSupplier_<T> = $WorldEventType$EventInstanceSupplier$$Type<(T)>;
}}
declare module "team.lodestar.lodestone.systems.multiblock.MultiBlockComponentEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$$Type} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IItemHandlerSupplier, $IItemHandlerSupplier$$Type} from "team.lodestar.lodestone.systems.blockentity.IItemHandlerSupplier"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiBlockComponentEntity extends $LodestoneBlockEntity implements $IItemHandlerSupplier {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "corePos": $BlockPos

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getInventory"(arg0: $Direction$$Type): $IItemHandler
public "onUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $ItemInteractionResult
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "onBreak"(arg0: $Player$$Type): void
public "onUseWithoutItem"(arg0: $Player$$Type): $InteractionResult
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockComponentEntity$$Type = ($MultiBlockComponentEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiBlockComponentEntity_ = $MultiBlockComponentEntity$$Type;
}}
declare module "team.lodestar.lodestone.events.types.worldevent.WorldEventInstanceEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$WorldEventInstance, $WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"

export class $WorldEventInstanceEvent extends $Event {

constructor(arg0: $WorldEventInstance$$Type, arg1: $Level$$Type)

public "getLevel"(): $Level
public "getWorldEvent"(): $WorldEventInstance
get "level"(): $Level
get "worldEvent"(): $WorldEventInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventInstanceEvent$$Type = ($WorldEventInstanceEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldEventInstanceEvent_ = $WorldEventInstanceEvent$$Type;
}}
declare module "team.lodestar.lodestone.systems.blockentity.ItemHolderBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LodestoneBlockEntityInventory, $LodestoneBlockEntityInventory$$Type} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$$Type} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IItemHandlerSupplier, $IItemHandlerSupplier$$Type} from "team.lodestar.lodestone.systems.blockentity.IItemHandlerSupplier"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemHolderBlockEntity extends $LodestoneBlockEntity implements $IItemHandlerSupplier {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "inventory": $LodestoneBlockEntityInventory

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getInventory"(arg0: $Direction$$Type): $IItemHandler
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "onBreak"(arg0: $Player$$Type): void
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHolderBlockEntity$$Type = ($ItemHolderBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHolderBlockEntity_ = $ItemHolderBlockEntity$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.tools.magic.MagicPickaxeItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LodestoneItemProperties, $LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LodestonePickaxeItem, $LodestonePickaxeItem$$Type} from "team.lodestar.lodestone.systems.item.tools.LodestonePickaxeItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $MagicPickaxeItem extends $LodestonePickaxeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: $LodestoneItemProperties$$Type)

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicPickaxeItem$$Type = ($MagicPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicPickaxeItem_ = $MagicPickaxeItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.attribute.LodestoneRangedAttribute" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LodestoneAttributeBuilder, $LodestoneAttributeBuilder$$Type} from "team.lodestar.lodestone.systems.attribute.LodestoneAttributeBuilder"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$RangedAttribute, $RangedAttribute$$Type} from "net.minecraft.world.entity.ai.attributes.RangedAttribute"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $LodestoneRangedAttribute extends $RangedAttribute {
static readonly "CODEC": $Codec<($Holder<($Attribute)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Attribute)>)>


public static "create"(arg0: $ResourceLocation$$Type, arg1: double, arg2: double, arg3: double): $LodestoneAttributeBuilder
public "getBaseId"(): $ResourceLocation
public "toValueComponent"(arg0: $AttributeModifier$Operation$$Type, arg1: double, arg2: $TooltipFlag$$Type): $MutableComponent
public static "isNullOrAddition"(arg0: $AttributeModifier$Operation$$Type): boolean
get "baseId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneRangedAttribute$$Type = ($LodestoneRangedAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneRangedAttribute_ = $LodestoneRangedAttribute$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.world.options.LodestoneTerrainParticleOptions" {
import {$ParticleRenderType, $ParticleRenderType$$Type} from "net.minecraft.client.particle.ParticleRenderType"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SimpleParticleOptions$ParticleSpritePicker, $SimpleParticleOptions$ParticleSpritePicker$$Type} from "team.lodestar.lodestone.systems.particle.SimpleParticleOptions$ParticleSpritePicker"
import {$RenderHandler$LodestoneRenderLayer, $RenderHandler$LodestoneRenderLayer$$Type} from "team.lodestar.lodestone.handlers.RenderHandler$LodestoneRenderLayer"
import {$WorldParticleOptions, $WorldParticleOptions$$Type} from "team.lodestar.lodestone.systems.particle.world.options.WorldParticleOptions"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SpinParticleData, $SpinParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$LodestoneTerrainParticleType, $LodestoneTerrainParticleType$$Type} from "team.lodestar.lodestone.systems.particle.world.type.LodestoneTerrainParticleType"
import {$GenericParticleData, $GenericParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$LodestoneParticleBehavior, $LodestoneParticleBehavior$$Type} from "team.lodestar.lodestone.systems.particle.world.behaviors.LodestoneParticleBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LodestoneWorldParticle, $LodestoneWorldParticle$$Type} from "team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticle"
import {$ColorParticleData, $ColorParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneTerrainParticleOptions extends $WorldParticleOptions {
readonly "spawnActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "noClip": boolean
readonly "blockState": $BlockState
readonly "renderActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
static readonly "DEFAULT_COLOR": $ColorParticleData
 "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
readonly "type": $ParticleType<(any)>
 "shouldCull": boolean
static readonly "DEFAULT_GENERIC": $GenericParticleData
 "lengthData": $GenericParticleData
 "behavior": $LodestoneParticleBehavior
 "renderType": $ParticleRenderType
 "scaleData": $GenericParticleData
readonly "blockPos": $BlockPos
 "colorData": $ColorParticleData
readonly "tickActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "transparencyData": $GenericParticleData
 "lifetimeSupplier": $Supplier<(integer)>
 "spinData": $SpinParticleData
 "particleLight": integer
 "renderLayer": $RenderHandler$LodestoneRenderLayer
 "frictionStrengthSupplier": $Supplier<(float)>
 "gravityStrengthSupplier": $Supplier<(float)>
static readonly "DEFAULT_SPIN": $SpinParticleData
 "lifeDelaySupplier": $Supplier<(integer)>

constructor(arg0: $Supplier$$Type<($LodestoneTerrainParticleType$$Type)>, arg1: $BlockState$$Type)
constructor(arg0: $ParticleType$$Type<($LodestoneTerrainParticleOptions$$Type)>, arg1: $BlockState$$Type)
constructor(arg0: $Supplier$$Type<($LodestoneTerrainParticleType$$Type)>, arg1: $BlockState$$Type, arg2: $BlockPos$$Type)
constructor(arg0: $ParticleType$$Type<($LodestoneTerrainParticleOptions$$Type)>, arg1: $BlockState$$Type, arg2: $BlockPos$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneTerrainParticleOptions$$Type = ($LodestoneTerrainParticleOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneTerrainParticleOptions_ = $LodestoneTerrainParticleOptions$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.LodestoneFuelItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $LodestoneFuelItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
readonly "fuel": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: integer)

public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(any)>): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneFuelItem$$Type = ($LodestoneFuelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneFuelItem_ = $LodestoneFuelItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.worldevent.WorldEventRenderer" {
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$WorldEventInstance, $WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"

export class $WorldEventRenderer<T extends $WorldEventInstance> {

constructor()

public "render"(arg0: T, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: float): void
public "canRender"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventRenderer$$Type<T> = ($WorldEventRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldEventRenderer_<T> = $WorldEventRenderer$$Type<(T)>;
}}
declare module "team.lodestar.lodestone.systems.item.LodestoneCombatItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LodestoneItemProperties, $LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TieredItem, $TieredItem$$Type} from "net.minecraft.world.item.TieredItem"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneCombatItem extends $TieredItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public "postHurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): void
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "canPerformAction"(arg0: $ItemStack$$Type, arg1: $ItemAbility$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneCombatItem$$Type = ($LodestoneCombatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneCombatItem_ = $LodestoneCombatItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.tools.LodestoneShovelItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LodestoneItemProperties, $LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ShovelItem, $ShovelItem$$Type} from "net.minecraft.world.item.ShovelItem"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneShovelItem extends $ShovelItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneShovelItem$$Type = ($LodestoneShovelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneShovelItem_ = $LodestoneShovelItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.screen.base.ScreenParticle" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BufferBuilder, $BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"
import {$LodestoneScreenParticleRenderType, $LodestoneScreenParticleRenderType$$Type} from "team.lodestar.lodestone.systems.particle.render_types.LodestoneScreenParticleRenderType"

export class $ScreenParticle {
readonly "level": $ClientLevel
 "yMotion": double
 "lifetime": integer
 "roll": float
 "xMotion": double
 "xMoved": double
 "friction": float
 "oRoll": float
 "yMoved": double
readonly "random": $RandomSource
 "bCol": float
 "removed": boolean
 "size": float
 "yOld": double
 "gravity": float
 "gCol": float
 "alpha": float
 "xOld": double
 "x": double
 "y": double
 "rCol": float
 "age": integer

constructor(arg0: $ClientLevel$$Type, arg1: double, arg2: double, arg3: double, arg4: double)

public "tick"(): void
public "setSize"(arg0: float): $ScreenParticle
public "setColor"(arg0: float, arg1: float, arg2: float): void
public "remove"(): void
public "isAlive"(): boolean
public "render"(arg0: $BufferBuilder$$Type): void
public "getRenderType"(): $LodestoneScreenParticleRenderType
public "setLifetime"(arg0: integer): void
public "getLifetime"(): integer
public "setParticleSpeed"(arg0: double, arg1: double): void
set "size"(value: float)
get "alive"(): boolean
get "renderType"(): $LodestoneScreenParticleRenderType
set "lifetime"(value: integer)
get "lifetime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenParticle$$Type = ($ScreenParticle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenParticle_ = $ScreenParticle$$Type;
}}
declare module "team.lodestar.lodestone.systems.attribute.LodestoneAttributeBuilder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute$Sentiment, $Attribute$Sentiment$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute$Sentiment"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"

export class $LodestoneAttributeBuilder {
 "sentiment": $Attribute$Sentiment
readonly "minValue": double
readonly "defaultValue": double
readonly "maxValue": double
 "forcePercentage": boolean
readonly "id": $ResourceLocation
 "isBase": boolean
 "syncable": boolean

constructor(arg0: $ResourceLocation$$Type, arg1: double)
constructor(arg0: $ResourceLocation$$Type, arg1: double, arg2: double, arg3: double)

public "build"(): $Attribute
public "setSyncable"(arg0: boolean): $LodestoneAttributeBuilder
public "setSentiment"(arg0: $Attribute$Sentiment$$Type): $LodestoneAttributeBuilder
public "setAsBaseAttribute"(): $LodestoneAttributeBuilder
public "forcePercentageDisplay"(): $LodestoneAttributeBuilder
set "syncable"(value: boolean)
set "sentiment"(value: $Attribute$Sentiment$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneAttributeBuilder$$Type = ($LodestoneAttributeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneAttributeBuilder_ = $LodestoneAttributeBuilder$$Type;
}}
declare module "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$MultiBlockStructure$StructurePiece, $MultiBlockStructure$StructurePiece$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure$StructurePiece"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $MultiBlockStructure {
readonly "structurePieces": $ArrayList<($MultiBlockStructure$StructurePiece)>

constructor(arg0: $ArrayList$$Type<($MultiBlockStructure$StructurePiece$$Type)>)

public "place"(arg0: $BlockPlaceContext$$Type): void
public static "of"(...arg0: ($MultiBlockStructure$StructurePiece$$Type)[]): $MultiBlockStructure
public "canPlace"(arg0: $BlockPlaceContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockStructure$$Type = ($MultiBlockStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiBlockStructure_ = $MultiBlockStructure$$Type;
}}
declare module "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tick"(): void
public "update"(arg0: $Level$$Type): void
public "onPlace"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type): void
public "onUse"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $ItemInteractionResult
public "loadWithLevel"(arg0: $Consumer$$Type<($Level)>): void
public "onEntityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "onUseWithItem"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type): $ItemInteractionResult
public "onClone"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "onBreak"(arg0: $Player$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "onNeighborUpdate"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "getUpdatePacket"(): $Packet<(any)>
public "triggerLevelConsumers"(): void
public "onUseWithoutItem"(arg0: $Player$$Type): $InteractionResult
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockEntity$$Type = ($LodestoneBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockEntity_ = $LodestoneBlockEntity$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.SimpleParticleOptions" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$SimpleParticleOptions$ParticleSpritePicker, $SimpleParticleOptions$ParticleSpritePicker$$Type} from "team.lodestar.lodestone.systems.particle.SimpleParticleOptions$ParticleSpritePicker"
import {$GenericParticleData, $GenericParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$ColorParticleData, $ColorParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"
import {$SpinParticleData, $SpinParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData"

export class $SimpleParticleOptions {
 "colorData": $ColorParticleData
static readonly "DEFAULT_COLOR": $ColorParticleData
 "transparencyData": $GenericParticleData
 "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
 "lifetimeSupplier": $Supplier<(integer)>
 "spinData": $SpinParticleData
static readonly "DEFAULT_GENERIC": $GenericParticleData
 "lengthData": $GenericParticleData
 "frictionStrengthSupplier": $Supplier<(float)>
 "scaleData": $GenericParticleData
 "gravityStrengthSupplier": $Supplier<(float)>
static readonly "DEFAULT_SPIN": $SpinParticleData
 "lifeDelaySupplier": $Supplier<(integer)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleParticleOptions$$Type = ($SimpleParticleOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleParticleOptions_ = $SimpleParticleOptions$$Type;
}}
declare module "team.lodestar.lodestone.recipe.NBTCarryRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $NBTCarryRecipe extends $ShapedRecipe {
 "result": $ItemStack
readonly "pattern": $ShapedRecipePattern
readonly "copyFrom": $Ingredient
static readonly "NAME": StringJS

constructor(arg0: $ShapedRecipe$$Type, arg1: $Ingredient$$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTCarryRecipe$$Type = ($NBTCarryRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTCarryRecipe_ = $NBTCarryRecipe$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.tools.magic.MagicAxeItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LodestoneItemProperties, $LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$LodestoneAxeItem, $LodestoneAxeItem$$Type} from "team.lodestar.lodestone.systems.item.tools.LodestoneAxeItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $MagicAxeItem extends $LodestoneAxeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: $LodestoneItemProperties$$Type)

public static "getStrippables"(): $Map<($Block), ($Block)>
public static "setStrippables"(strippedBlocks: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicAxeItem$$Type = ($MagicAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicAxeItem_ = $MagicAxeItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.block.sign.LodestoneWallSignBlock" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$WallSignBlock, $WallSignBlock$$Type} from "net.minecraft.world.level.block.WallSignBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneWallSignBlock extends $WallSignBlock implements $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallSignBlock)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $WoodType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneWallSignBlock$$Type = ($LodestoneWallSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneWallSignBlock_ = $LodestoneWallSignBlock$$Type;
}}
declare module "team.lodestar.lodestone.events.types.worldevent.WorldEventDiscardEvent" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$WorldEventInstance, $WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"
import {$WorldEventInstanceEvent, $WorldEventInstanceEvent$$Type} from "team.lodestar.lodestone.events.types.worldevent.WorldEventInstanceEvent"

export class $WorldEventDiscardEvent extends $WorldEventInstanceEvent {

constructor(arg0: $WorldEventInstance$$Type, arg1: $Level$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventDiscardEvent$$Type = ($WorldEventDiscardEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldEventDiscardEvent_ = $WorldEventDiscardEvent$$Type;
}}
declare module "team.lodestar.lodestone.systems.easing.Easing" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Easing$Back, $Easing$Back$$Type} from "team.lodestar.lodestone.systems.easing.Easing$Back"
import {$Easing$Elastic, $Easing$Elastic$$Type} from "team.lodestar.lodestone.systems.easing.Easing$Elastic"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"

export class $Easing {
static readonly "CUBIC_IN_OUT": $Easing
static readonly "BOUNCE_IN": $Easing
static readonly "QUAD_IN": $Easing
static readonly "ELASTIC_IN": $Easing$Elastic
static readonly "QUINTIC_IN_OUT": $Easing
static readonly "SINE_OUT": $Easing
static readonly "QUARTIC_OUT": $Easing
static readonly "QUINTIC_IN": $Easing
static readonly "QUARTIC_IN_OUT": $Easing
static readonly "EXPO_IN": $Easing
static readonly "BOUNCE_IN_OUT": $Easing
static readonly "CIRC_OUT": $Easing
static readonly "BACK_IN_OUT": $Easing$Back
static readonly "SINE_IN_OUT": $Easing
static readonly "CODEC": $Codec<($Easing)>
static readonly "CIRC_IN_OUT": $Easing
static readonly "EASINGS": $HashMap<(StringJS), ($Easing)>
static readonly "QUAD_IN_OUT": $Easing
static readonly "BACK_IN": $Easing$Back
static readonly "ELASTIC_OUT": $Easing$Elastic
static readonly "QUINTIC_OUT": $Easing
static readonly "ELASTIC_IN_OUT": $Easing$Elastic
static readonly "CUBIC_OUT": $Easing
static readonly "QUAD_OUT": $Easing
static readonly "BACK_OUT": $Easing$Back
static readonly "BOUNCE_OUT": $Easing
static readonly "SINE_IN": $Easing
static readonly "QUARTIC_IN": $Easing
readonly "name": StringJS
static readonly "EXPO_IN_OUT": $Easing
static readonly "CIRC_IN": $Easing
static readonly "LINEAR": $Easing
static readonly "CUBIC_IN": $Easing
static readonly "EXPO_OUT": $Easing

constructor(arg0: StringJS)

public static "valueOf"(arg0: StringJS): $Easing
public "clamped"(arg0: float, arg1: float, arg2: float, arg3: float): float
public "clamped"(arg0: float, arg1: float, arg2: float): float
public "clamped"(arg0: double, arg1: double, arg2: double): float
public "clamped"(arg0: double, arg1: double, arg2: double, arg3: double): float
public "ease"(arg0: double, arg1: double, arg2: double, arg3: double): float
public "ease"(arg0: float, arg1: float, arg2: float): float
public "ease"(arg0: double, arg1: double, arg2: double): float
public "ease"(arg0: float, arg1: float, arg2: float, arg3: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Easing$$Type = ($Easing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Easing_ = $Easing$$Type;
}}
declare module "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPositionData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $NetworkedParticleEffectPositionData {
static readonly "CODEC": $Codec<($NetworkedParticleEffectPositionData)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($NetworkedParticleEffectPositionData)>

constructor(arg0: double, arg1: double, arg2: double)
constructor(arg0: $Vec3$$Type)
constructor(arg0: $Entity$$Type)
constructor(arg0: $BlockPos$$Type)

public "getAsVector"(): $Vec3
public "getAsBlockPos"(): $BlockPos
public "getPosZ"(): double
public "getPosX"(): double
public "getPosY"(): double
get "asVector"(): $Vec3
get "asBlockPos"(): $BlockPos
get "posZ"(): double
get "posX"(): double
get "posY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedParticleEffectPositionData$$Type = ($NetworkedParticleEffectPositionData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkedParticleEffectPositionData_ = $NetworkedParticleEffectPositionData$$Type;
}}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntry" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneBlockFiller$BlockStateEntry {


public "place"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): void
public "getState"(): $BlockState
public "canPlace"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
public "tryDiscard"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
get "state"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$BlockStateEntry$$Type = ($LodestoneBlockFiller$BlockStateEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller$BlockStateEntry_ = $LodestoneBlockFiller$BlockStateEntry$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.data.GenericParticleDataBuilder" {
import {$GenericParticleData, $GenericParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$Easing, $Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"

export class $GenericParticleDataBuilder {


public "build"(): $GenericParticleData
public "setEasing"(arg0: $Easing$$Type, arg1: $Easing$$Type): $GenericParticleDataBuilder
public "setEasing"(arg0: $Easing$$Type): $GenericParticleDataBuilder
public "setCoefficient"(arg0: float): $GenericParticleDataBuilder
set "easing"(value: $Easing$$Type)
set "coefficient"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericParticleDataBuilder$$Type = ($GenericParticleDataBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericParticleDataBuilder_ = $GenericParticleDataBuilder$$Type;
}}
declare module "team.lodestar.lodestone.systems.rendering.trail.TrailPoint" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vector4f, $Vector4f$$Type} from "org.joml.Vector4f"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"

export class $TrailPoint {

constructor(arg0: $Vec3$$Type)
constructor(arg0: $Vec3$$Type, arg1: integer)

public "tick"(): void
public "move"(arg0: $Vec3$$Type): void
public "getPosition"(): $Vec3
public "getAge"(): integer
public "setPosition"(arg0: $Vec3$$Type): void
public "getMatrixPosition"(arg0: $Matrix4f$$Type): $Vector4f
public static "getMatrixPosition"(arg0: $Vec3$$Type, arg1: $Matrix4f$$Type): $Vector4f
public "getInterpolatedPosition"(arg0: float): $Vec3
public "getInterpolatedMatrixPosition"(arg0: $Matrix4f$$Type, arg1: float): $Vector4f
get "position"(): $Vec3
get "age"(): integer
set "position"(value: $Vec3$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailPoint$$Type = ($TrailPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrailPoint_ = $TrailPoint$$Type;
}}
declare module "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectColorData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ColorParticleData, $ColorParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $NetworkedParticleEffectColorData {
static readonly "CODEC": $Codec<($NetworkedParticleEffectColorData)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($NetworkedParticleEffectColorData)>

constructor(arg0: $List$$Type<($ColorParticleData$$Type)>)
constructor(...arg0: ($ColorParticleData$$Type)[])

public "getColor"(): $ColorParticleData
public static "fromColors"(arg0: $List$$Type<($ColorParticleData$$Type)>): $NetworkedParticleEffectColorData
public "getColors"(): $List<($ColorParticleData)>
public static "fromColor"(arg0: $ColorParticleData$$Type): $NetworkedParticleEffectColorData
get "color"(): $ColorParticleData
get "colors"(): $List<($ColorParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedParticleEffectColorData$$Type = ($NetworkedParticleEffectColorData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkedParticleEffectColorData_ = $NetworkedParticleEffectColorData$$Type;
}}
declare module "team.lodestar.lodestone.systems.block.LodestoneLogBlock" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneLogBlock extends $RotatedPillarBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "stripped": $Supplier<($Block)>
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Block$$Type)>)
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneLogBlock$$Type = ($LodestoneLogBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneLogBlock_ = $LodestoneLogBlock$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.tools.magic.MagicSwordItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LodestoneItemProperties, $LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$LodestoneSwordItem, $LodestoneSwordItem$$Type} from "team.lodestar.lodestone.systems.item.tools.LodestoneSwordItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $MagicSwordItem extends $LodestoneSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: $LodestoneItemProperties$$Type)

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicSwordItem$$Type = ($MagicSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicSwordItem_ = $MagicSwordItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.multiblock.IMultiBlockCore" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MultiBlockStructure, $MultiBlockStructure$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IMultiBlockCore {

 "getStructure"(): $MultiBlockStructure
 "isModular"(): boolean
 "setupMultiblock"(arg0: $BlockPos$$Type): void
 "destroyMultiblock"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
 "getComponentPositions"(): $ArrayList<($BlockPos)>
get "structure"(): $MultiBlockStructure
get "modular"(): boolean
set "upMultiblock"(value: $BlockPos$$Type)
get "componentPositions"(): $ArrayList<($BlockPos)>
}

export namespace $IMultiBlockCore {
const probejs$$marker: never
}
export class $IMultiBlockCore$$Static implements $IMultiBlockCore {


 "getStructure"(): $MultiBlockStructure
 "isModular"(): boolean
 "setupMultiblock"(arg0: $BlockPos$$Type): void
 "destroyMultiblock"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
 "getComponentPositions"(): $ArrayList<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiBlockCore$$Type = ($IMultiBlockCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiBlockCore_ = $IMultiBlockCore$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.tools.magic.MagicShovelItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LodestoneItemProperties, $LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$LodestoneShovelItem, $LodestoneShovelItem$$Type} from "team.lodestar.lodestone.systems.item.tools.LodestoneShovelItem"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MagicShovelItem extends $LodestoneShovelItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static "FLATTENABLES": $Map<($Block), ($BlockState)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: float, arg4: $LodestoneItemProperties$$Type)

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicShovelItem$$Type = ($MagicShovelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicShovelItem_ = $MagicShovelItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.world.type.LodestoneItemCrumbsParticleType" {
import {$AbstractLodestoneParticleType, $AbstractLodestoneParticleType$$Type} from "team.lodestar.lodestone.systems.particle.world.type.AbstractLodestoneParticleType"
import {$LodestoneItemCrumbsParticleOptions, $LodestoneItemCrumbsParticleOptions$$Type} from "team.lodestar.lodestone.systems.particle.world.options.LodestoneItemCrumbsParticleOptions"

export class $LodestoneItemCrumbsParticleType extends $AbstractLodestoneParticleType<($LodestoneItemCrumbsParticleOptions)> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneItemCrumbsParticleType$$Type = ($LodestoneItemCrumbsParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneItemCrumbsParticleType_ = $LodestoneItemCrumbsParticleType$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.render_types.LodestoneScreenParticleRenderType" {
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$BufferBuilder, $BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"
import {$Tesselator, $Tesselator$$Type} from "com.mojang.blaze3d.vertex.Tesselator"

export interface $LodestoneScreenParticleRenderType {

 "begin"(arg0: $Tesselator$$Type, arg1: $TextureManager$$Type): $BufferBuilder
 "end"(arg0: $BufferBuilder$$Type): void
}

export namespace $LodestoneScreenParticleRenderType {
const ADDITIVE: $LodestoneScreenParticleRenderType
const LUMITRANSPARENT: $LodestoneScreenParticleRenderType
const TRANSPARENT: $LodestoneScreenParticleRenderType
const probejs$$marker: never
}
export class $LodestoneScreenParticleRenderType$$Static implements $LodestoneScreenParticleRenderType {
static readonly "ADDITIVE": $LodestoneScreenParticleRenderType
static readonly "LUMITRANSPARENT": $LodestoneScreenParticleRenderType
static readonly "TRANSPARENT": $LodestoneScreenParticleRenderType


 "begin"(arg0: $Tesselator$$Type, arg1: $TextureManager$$Type): $BufferBuilder
 "end"(arg0: $BufferBuilder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneScreenParticleRenderType$$Type = ($LodestoneScreenParticleRenderType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneScreenParticleRenderType_ = $LodestoneScreenParticleRenderType$$Type;
}}
declare module "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType$ParticleEffectBuilder" {
import {$Color, $Color$$Type} from "java.awt.Color"
import {$NetworkedParticleEffectColorData, $NetworkedParticleEffectColorData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectColorData"
import {$NetworkedParticleEffectPositionData, $NetworkedParticleEffectPositionData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPositionData"
import {$List, $List$$Type} from "java.util.List"
import {$NetworkedParticleEffectExtraData, $NetworkedParticleEffectExtraData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectExtraData"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$NetworkedParticleEffectPayload, $NetworkedParticleEffectPayload$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPayload"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$NetworkedParticleEffectType, $NetworkedParticleEffectType$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType"
import {$ColorParticleData, $ColorParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $NetworkedParticleEffectType$ParticleEffectBuilder<T extends $NetworkedParticleEffectExtraData> {

constructor(arg0: $NetworkedParticleEffectType$$Type<(T)>)

public "at"(arg0: $Entity$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "at"(arg0: $Vec3$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "at"(arg0: $BlockPos$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "at"(arg0: $NetworkedParticleEffectPositionData$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "color"(arg0: $ColorParticleData$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "color"(arg0: $NetworkedParticleEffectColorData$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "color"(arg0: $Color$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "color"(arg0: $List$$Type<($ColorParticleData$$Type)>): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "spawn"(arg0: $Consumer$$Type<($NetworkedParticleEffectPayload)>): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "spawn"(arg0: $ServerLevel$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "customData"(arg0: T): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedParticleEffectType$ParticleEffectBuilder$$Type<T> = ($NetworkedParticleEffectType$ParticleEffectBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkedParticleEffectType$ParticleEffectBuilder_<T> = $NetworkedParticleEffectType$ParticleEffectBuilder$$Type<(T)>;
}}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntryBuilder" {
import {$LodestoneBlockFiller$BlockStateEntry, $LodestoneBlockFiller$BlockStateEntry$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntry"
import {$LodestoneBlockFiller$EntryDiscardPredicate, $LodestoneBlockFiller$EntryDiscardPredicate$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$EntryDiscardPredicate"
import {$LodestoneBlockFiller$EntryPlacementPredicate, $LodestoneBlockFiller$EntryPlacementPredicate$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$EntryPlacementPredicate"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneBlockFiller$BlockStateEntryBuilder {

constructor(arg0: $BlockState$$Type)

public "build"(): $LodestoneBlockFiller$BlockStateEntry
public "setForcePlace"(): $LodestoneBlockFiller$BlockStateEntryBuilder
public "setForcePlace"(arg0: boolean): $LodestoneBlockFiller$BlockStateEntryBuilder
public "setDiscardPredicate"(arg0: $LodestoneBlockFiller$EntryDiscardPredicate$$Type): $LodestoneBlockFiller$BlockStateEntryBuilder
public "setPlacementPredicate"(arg0: $LodestoneBlockFiller$EntryPlacementPredicate$$Type): $LodestoneBlockFiller$BlockStateEntryBuilder
set "forcePlace"(value: boolean)
set "discardPredicate"(value: $LodestoneBlockFiller$EntryDiscardPredicate$$Type)
set "placementPredicate"(value: $LodestoneBlockFiller$EntryPlacementPredicate$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$BlockStateEntryBuilder$$Type = ($LodestoneBlockFiller$BlockStateEntryBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller$BlockStateEntryBuilder_ = $LodestoneBlockFiller$BlockStateEntryBuilder$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ColorParticleDataBuilder, $ColorParticleDataBuilder$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleDataBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$Easing, $Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"

export class $ColorParticleData {
readonly "r2": float
readonly "b2": float
static readonly "CODEC": $Codec<($ColorParticleData)>
 "coefficientMultiplier": float
readonly "g1": float
readonly "g2": float
readonly "colorCoefficient": float
readonly "r1": float
readonly "b1": float
readonly "colorCurveEasing": $Easing


public static "create"(arg0: $Color$$Type, arg1: $Color$$Type): $ColorParticleDataBuilder
public static "create"(arg0: float, arg1: float, arg2: float): $ColorParticleDataBuilder
public static "create"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): $ColorParticleDataBuilder
public static "create"(arg0: $Color$$Type): $ColorParticleDataBuilder
public "copy"(): $ColorParticleDataBuilder
public "invert"(): $ColorParticleDataBuilder
public "getProgress"(arg0: float, arg1: float): float
public "getEndingColor"(): $Color
public "getStartingColor"(): $Color
public "multiplyCoefficient"(arg0: float): $ColorParticleData
public "overrideCoefficientMultiplier"(arg0: float): $ColorParticleData
public static "createGrayParticleColor"(arg0: $RandomSource$$Type): $ColorParticleData
get "endingColor"(): $Color
get "startingColor"(): $Color
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorParticleData$$Type = ($ColorParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorParticleData_ = $ColorParticleData$$Type;
}}
declare module "team.lodestar.lodestone.handlers.screenparticle.ParticleEmitterHandler$ItemParticleSupplier" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ScreenParticleHolder, $ScreenParticleHolder$$Type} from "team.lodestar.lodestone.systems.particle.screen.ScreenParticleHolder"

export interface $ParticleEmitterHandler$ItemParticleSupplier {

 "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
 "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
}

export namespace $ParticleEmitterHandler$ItemParticleSupplier {
const probejs$$marker: never
}
export class $ParticleEmitterHandler$ItemParticleSupplier$$Static implements $ParticleEmitterHandler$ItemParticleSupplier {


 "spawnLateParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
 "spawnEarlyParticles"(arg0: $ScreenParticleHolder$$Type, arg1: $Level$$Type, arg2: float, arg3: $ItemStack$$Type, arg4: float, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEmitterHandler$ItemParticleSupplier$$Type = ($ParticleEmitterHandler$ItemParticleSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEmitterHandler$ItemParticleSupplier_ = $ParticleEmitterHandler$ItemParticleSupplier$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.world.options.LodestoneItemCrumbsParticleOptions" {
import {$ParticleRenderType, $ParticleRenderType$$Type} from "net.minecraft.client.particle.ParticleRenderType"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LodestoneItemCrumbsParticleType, $LodestoneItemCrumbsParticleType$$Type} from "team.lodestar.lodestone.systems.particle.world.type.LodestoneItemCrumbsParticleType"
import {$SimpleParticleOptions$ParticleSpritePicker, $SimpleParticleOptions$ParticleSpritePicker$$Type} from "team.lodestar.lodestone.systems.particle.SimpleParticleOptions$ParticleSpritePicker"
import {$RenderHandler$LodestoneRenderLayer, $RenderHandler$LodestoneRenderLayer$$Type} from "team.lodestar.lodestone.handlers.RenderHandler$LodestoneRenderLayer"
import {$WorldParticleOptions, $WorldParticleOptions$$Type} from "team.lodestar.lodestone.systems.particle.world.options.WorldParticleOptions"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SpinParticleData, $SpinParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$GenericParticleData, $GenericParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$LodestoneParticleBehavior, $LodestoneParticleBehavior$$Type} from "team.lodestar.lodestone.systems.particle.world.behaviors.LodestoneParticleBehavior"
import {$LodestoneWorldParticle, $LodestoneWorldParticle$$Type} from "team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticle"
import {$ColorParticleData, $ColorParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $LodestoneItemCrumbsParticleOptions extends $WorldParticleOptions {
readonly "spawnActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "noClip": boolean
readonly "stack": $ItemStack
readonly "renderActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "colorData": $ColorParticleData
readonly "tickActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
static readonly "DEFAULT_COLOR": $ColorParticleData
 "transparencyData": $GenericParticleData
 "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
 "lifetimeSupplier": $Supplier<(integer)>
readonly "type": $ParticleType<(any)>
 "spinData": $SpinParticleData
 "particleLight": integer
 "renderLayer": $RenderHandler$LodestoneRenderLayer
 "shouldCull": boolean
static readonly "DEFAULT_GENERIC": $GenericParticleData
 "lengthData": $GenericParticleData
 "behavior": $LodestoneParticleBehavior
 "renderType": $ParticleRenderType
 "frictionStrengthSupplier": $Supplier<(float)>
 "scaleData": $GenericParticleData
 "gravityStrengthSupplier": $Supplier<(float)>
static readonly "DEFAULT_SPIN": $SpinParticleData
 "lifeDelaySupplier": $Supplier<(integer)>

constructor(arg0: $ParticleType$$Type<($LodestoneItemCrumbsParticleOptions$$Type)>, arg1: $ItemStack$$Type)
constructor(arg0: $Supplier$$Type<($LodestoneItemCrumbsParticleType$$Type)>, arg1: $ItemStack$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneItemCrumbsParticleOptions$$Type = ($LodestoneItemCrumbsParticleOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneItemCrumbsParticleOptions_ = $LodestoneItemCrumbsParticleOptions$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.world.type.LodestoneTerrainParticleType" {
import {$AbstractLodestoneParticleType, $AbstractLodestoneParticleType$$Type} from "team.lodestar.lodestone.systems.particle.world.type.AbstractLodestoneParticleType"
import {$LodestoneTerrainParticleOptions, $LodestoneTerrainParticleOptions$$Type} from "team.lodestar.lodestone.systems.particle.world.options.LodestoneTerrainParticleOptions"

export class $LodestoneTerrainParticleType extends $AbstractLodestoneParticleType<($LodestoneTerrainParticleOptions)> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneTerrainParticleType$$Type = ($LodestoneTerrainParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneTerrainParticleType_ = $LodestoneTerrainParticleType$$Type;
}}
declare module "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$NetworkedParticleEffectColorData, $NetworkedParticleEffectColorData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectColorData"
import {$NetworkedParticleEffectPositionData, $NetworkedParticleEffectPositionData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectPositionData"
import {$NetworkedParticleEffectExtraData, $NetworkedParticleEffectExtraData$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectExtraData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$NetworkedParticleEffectType$ParticleEffectBuilder, $NetworkedParticleEffectType$ParticleEffectBuilder$$Type} from "team.lodestar.lodestone.systems.network.particle.NetworkedParticleEffectType$ParticleEffectBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $NetworkedParticleEffectType<T extends $NetworkedParticleEffectExtraData> {
static readonly "CODEC": $Codec<($NetworkedParticleEffectType<(any)>)>
static readonly "EFFECT_TYPES": $Map<(StringJS), ($NetworkedParticleEffectType<(any)>)>

constructor(arg0: StringJS)

public "getId"(): StringJS
public "act"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $NetworkedParticleEffectPositionData$$Type, arg3: $NetworkedParticleEffectColorData$$Type, arg4: T): void
public "getExtraCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectExtraData)>)>
public "getColorCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectColorData)>)>
public "createEffect"(arg0: $BlockPos$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "createEffect"(arg0: $Vec3$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "createEffect"(arg0: $Entity$$Type): $NetworkedParticleEffectType$ParticleEffectBuilder<(T)>
public "getPositionCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectPositionData)>)>
public "getDefaultExtraData"(): $Optional<($NetworkedParticleEffectExtraData)>
get "id"(): StringJS
get "extraCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectExtraData)>)>
get "colorCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectColorData)>)>
get "positionCodec"(): $Optional<($StreamCodec<($ByteBuf), ($NetworkedParticleEffectPositionData)>)>
get "defaultExtraData"(): $Optional<($NetworkedParticleEffectExtraData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedParticleEffectType$$Type<T> = ($NetworkedParticleEffectType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkedParticleEffectType_<T> = $NetworkedParticleEffectType$$Type<(T)>;
}}
declare module "team.lodestar.lodestone.systems.item.LodestoneArmorItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers$Entry, $ItemAttributeModifiers$Entry$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers$Entry"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $LodestoneArmorItem extends $ArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: integer, arg3: $Item$Properties$$Type)

public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "createExtraAttributes"(): $List<($ItemAttributeModifiers$Entry)>
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneArmorItem$$Type = ($LodestoneArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneArmorItem_ = $LodestoneArmorItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.easing.Easing$Elastic" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Easing$Back, $Easing$Back$$Type} from "team.lodestar.lodestone.systems.easing.Easing$Back"
import {$Easing, $Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"

export class $Easing$Elastic extends $Easing {
static readonly "CUBIC_IN_OUT": $Easing
static readonly "BOUNCE_IN": $Easing
static readonly "QUAD_IN": $Easing
static readonly "ELASTIC_IN": $Easing$Elastic
static readonly "QUINTIC_IN_OUT": $Easing
static readonly "SINE_OUT": $Easing
static readonly "QUARTIC_OUT": $Easing
static readonly "QUINTIC_IN": $Easing
static readonly "QUARTIC_IN_OUT": $Easing
static readonly "EXPO_IN": $Easing
static readonly "BOUNCE_IN_OUT": $Easing
static readonly "CIRC_OUT": $Easing
static readonly "BACK_IN_OUT": $Easing$Back
static readonly "SINE_IN_OUT": $Easing
static readonly "CODEC": $Codec<($Easing)>
static readonly "CIRC_IN_OUT": $Easing
static readonly "EASINGS": $HashMap<(StringJS), ($Easing)>
static readonly "QUAD_IN_OUT": $Easing
static readonly "BACK_IN": $Easing$Back
static readonly "ELASTIC_OUT": $Easing$Elastic
static readonly "QUINTIC_OUT": $Easing
static readonly "ELASTIC_IN_OUT": $Easing$Elastic
static readonly "CUBIC_OUT": $Easing
static readonly "QUAD_OUT": $Easing
static readonly "BACK_OUT": $Easing$Back
static readonly "BOUNCE_OUT": $Easing
static readonly "SINE_IN": $Easing
static readonly "QUARTIC_IN": $Easing
readonly "name": StringJS
static readonly "EXPO_IN_OUT": $Easing
static readonly "CIRC_IN": $Easing
static readonly "LINEAR": $Easing
static readonly "CUBIC_IN": $Easing
static readonly "EXPO_OUT": $Easing

constructor(arg0: StringJS, arg1: float, arg2: float)
constructor(arg0: StringJS)

public "getAmplitude"(): float
public "setAmplitude"(arg0: float): void
public "setPeriod"(arg0: float): void
public "getPeriod"(): float
get "amplitude"(): float
set "amplitude"(value: float)
set "period"(value: float)
get "period"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Easing$Elastic$$Type = ($Easing$Elastic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Easing$Elastic_ = $Easing$Elastic$$Type;
}}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$LodestoneBlockFiller$LodestoneLayerToken, $LodestoneBlockFiller$LodestoneLayerToken$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$LodestoneLayerToken"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$LodestoneBlockFiller$LodestoneBlockFillerLayer, $LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$LodestoneBlockFillerLayer"
import {$LodestoneBlockFiller$BlockStateEntryBuilder, $LodestoneBlockFiller$BlockStateEntryBuilder$$Type} from "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$BlockStateEntryBuilder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneBlockFiller extends $ArrayList<($LodestoneBlockFiller$LodestoneBlockFillerLayer)> {
static readonly "MAIN": $LodestoneBlockFiller$LodestoneLayerToken

constructor(arg0: $Collection$$Type<($LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type)>)
constructor(...arg0: ($LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type)[])
constructor()

public static "create"(arg0: $BlockState$$Type): $LodestoneBlockFiller$BlockStateEntryBuilder
public "fill"(arg0: $LevelAccessor$$Type): $LodestoneBlockFiller$LodestoneBlockFillerLayer
public "getLayer"(arg0: $LodestoneBlockFiller$LodestoneLayerToken$$Type): $LodestoneBlockFiller$LodestoneBlockFillerLayer
public "addLayers"(...arg0: ($LodestoneBlockFiller$LodestoneLayerToken$$Type)[]): $LodestoneBlockFiller
public "addLayers"(...arg0: ($LodestoneBlockFiller$LodestoneBlockFillerLayer$$Type)[]): $LodestoneBlockFiller
public "getMainLayer"(): $LodestoneBlockFiller$LodestoneBlockFillerLayer
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
get "mainLayer"(): $LodestoneBlockFiller$LodestoneBlockFillerLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$$Type = ($LodestoneBlockFiller);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller_ = $LodestoneBlockFiller$$Type;
}}
declare module "team.lodestar.lodestone.handlers.RenderHandler$LodestoneRenderLayer" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $RenderHandler$LodestoneRenderLayer {

constructor(arg0: $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>, arg1: $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>)

public "getTarget"(): $MultiBufferSource$BufferSource
public "getBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
public "getParticleTarget"(): $MultiBufferSource$BufferSource
public "getParticleBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
get "target"(): $MultiBufferSource$BufferSource
get "buffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
get "particleTarget"(): $MultiBufferSource$BufferSource
get "particleBuffers"(): $SequencedMap<($RenderType), ($ByteBufferBuilder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderHandler$LodestoneRenderLayer$$Type = ($RenderHandler$LodestoneRenderLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderHandler$LodestoneRenderLayer_ = $RenderHandler$LodestoneRenderLayer$$Type;
}}
declare module "team.lodestar.lodestone.systems.worldgen.LodestoneBlockFiller$EntryDiscardPredicate" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $LodestoneBlockFiller$EntryDiscardPredicate {

 "shouldDiscard"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean

(arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState): boolean
}

export namespace $LodestoneBlockFiller$EntryDiscardPredicate {
const probejs$$marker: never
}
export class $LodestoneBlockFiller$EntryDiscardPredicate$$Static implements $LodestoneBlockFiller$EntryDiscardPredicate {


 "shouldDiscard"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockFiller$EntryDiscardPredicate$$Type = ((arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockFiller$EntryDiscardPredicate_ = $LodestoneBlockFiller$EntryDiscardPredicate$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.tools.LodestoneAxeItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LodestoneItemProperties, $LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$AxeItem, $AxeItem$$Type} from "net.minecraft.world.item.AxeItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $LodestoneAxeItem extends $AxeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "STRIPPABLES": $Map<($Block), ($Block)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public static "getStrippables"(): $Map<($Block), ($Block)>
public static "setStrippables"(strippedBlocks: $Map$$Type<($Block$$Type), ($Block$$Type)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneAxeItem$$Type = ($LodestoneAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneAxeItem_ = $LodestoneAxeItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.tools.LodestoneSwordItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LodestoneItemProperties, $LodestoneItemProperties$$Type} from "team.lodestar.lodestone.systems.item.LodestoneItemProperties"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$SwordItem, $SwordItem$$Type} from "net.minecraft.world.item.SwordItem"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $LodestoneSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Tier$$Type, arg1: float, arg2: float, arg3: $LodestoneItemProperties$$Type)

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneSwordItem$$Type = ($LodestoneSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneSwordItem_ = $LodestoneSwordItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.multiblock.HorizontalDirectionStructure" {
import {$MultiBlockStructure, $MultiBlockStructure$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$MultiBlockStructure$StructurePiece, $MultiBlockStructure$StructurePiece$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure$StructurePiece"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $HorizontalDirectionStructure extends $MultiBlockStructure {
readonly "structurePieces": $ArrayList<($MultiBlockStructure$StructurePiece)>

constructor(arg0: $ArrayList$$Type<($MultiBlockStructure$StructurePiece$$Type)>)

public "place"(arg0: $BlockPlaceContext$$Type): void
public static "of"(...arg0: ($MultiBlockStructure$StructurePiece$$Type)[]): $HorizontalDirectionStructure
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalDirectionStructure$$Type = ($HorizontalDirectionStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalDirectionStructure_ = $HorizontalDirectionStructure$$Type;
}}
declare module "team.lodestar.lodestone.systems.multiblock.MultiblockComponentBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ILodestoneMultiblockComponent, $ILodestoneMultiblockComponent$$Type} from "team.lodestar.lodestone.systems.multiblock.ILodestoneMultiblockComponent"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$MultiBlockComponentEntity, $MultiBlockComponentEntity$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockComponentEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$LodestoneEntityBlock, $LodestoneEntityBlock$$Type} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiblockComponentBlock extends $LodestoneEntityBlock<($MultiBlockComponentEntity)> implements $ILodestoneMultiblockComponent {
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
export type $MultiblockComponentBlock$$Type = ($MultiblockComponentBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiblockComponentBlock_ = $MultiblockComponentBlock$$Type;
}}
declare module "team.lodestar.lodestone.events.types.worldevent.WorldEventCreationEvent" {
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$WorldEventInstance, $WorldEventInstance$$Type} from "team.lodestar.lodestone.systems.worldevent.WorldEventInstance"
import {$WorldEventInstanceEvent, $WorldEventInstanceEvent$$Type} from "team.lodestar.lodestone.events.types.worldevent.WorldEventInstanceEvent"

export class $WorldEventCreationEvent extends $WorldEventInstanceEvent implements $ICancellableEvent {

constructor(arg0: $WorldEventInstance$$Type, arg1: $Level$$Type)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldEventCreationEvent$$Type = ($WorldEventCreationEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldEventCreationEvent_ = $WorldEventCreationEvent$$Type;
}}
declare module "team.lodestar.lodestone.systems.block.WaterLoggedEntityBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$$Type} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$LodestoneEntityBlock, $LodestoneEntityBlock$$Type} from "team.lodestar.lodestone.systems.block.LodestoneEntityBlock"

export class $WaterLoggedEntityBlock<T extends $LodestoneBlockEntity> extends $LodestoneEntityBlock<(T)> implements $SimpleWaterloggedBlock {
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterLoggedEntityBlock$$Type<T> = ($WaterLoggedEntityBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterLoggedEntityBlock_<T> = $WaterLoggedEntityBlock$$Type<(T)>;
}}
declare module "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntityInventory" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$$Type} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $LodestoneBlockEntityInventory extends $ItemStackHandler {
 "contentsChangeBehavior": $Runnable
readonly "allowedItemSize": integer
 "blockEntity": $LodestoneBlockEntity
readonly "slotCount": integer
 "autoSync": boolean
 "nonEmptyItemStacks": $ArrayList<($ItemStack)>
 "inputPredicate": $Predicate<($ItemStack)>

constructor(arg0: $LodestoneBlockEntity$$Type, arg1: integer, arg2: integer)

public "getStacks"(): $NonNullList<($ItemStack)>
public "load"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "load"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type, arg2: StringJS): void
public "clear"(): void
public "isEmpty"(): boolean
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type, arg2: StringJS): void
public "save"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "insertItem"(arg0: $ItemStack$$Type): $ItemStack
public "extractItem"(arg0: $ServerLevel$$Type, arg1: $ItemStack$$Type, arg2: $Player$$Type): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "interact"(arg0: $ServerLevel$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $ItemStack
public "getSlots"(): integer
public "dumpItems"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "dumpItems"(arg0: $Level$$Type, arg1: $Vec3$$Type): void
public "hasEmptySlots"(): boolean
public "onContentsChanged"(arg0: $Runnable$$Type): $LodestoneBlockEntityInventory
public "onContentsChanged"(arg0: integer): void
public "giveItemToPlayer"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: integer): void
public "takeItemFromPlayer"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $ItemStack
public "setInputPredicate"(arg0: $Predicate$$Type<($ItemStack)>): $LodestoneBlockEntityInventory
public "getEmptySlotCount"(): integer
public "getFirstEmptyItemIndex"(): integer
public "getFilledSlotCount"(): integer
public "updateInventoryCaches"(): void
public "getNonEmptyStacks"(): $ArrayList<($ItemStack)>
public "triggerBlockEntityUpdate"(): $LodestoneBlockEntityInventory
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
get "stacks"(): $NonNullList<($ItemStack)>
get "empty"(): boolean
get "slots"(): integer
set "inputPredicate"(value: $Predicate$$Type<($ItemStack)>)
get "emptySlotCount"(): integer
get "firstEmptyItemIndex"(): integer
get "filledSlotCount"(): integer
get "nonEmptyStacks"(): $ArrayList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneBlockEntityInventory$$Type = ($LodestoneBlockEntityInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneBlockEntityInventory_ = $LodestoneBlockEntityInventory$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.data.GenericParticleData" {
import {$GenericParticleDataBuilder, $GenericParticleDataBuilder$$Type} from "team.lodestar.lodestone.systems.particle.data.GenericParticleDataBuilder"
import {$Easing, $Easing$$Type} from "team.lodestar.lodestone.systems.easing.Easing"

export class $GenericParticleData {
readonly "endingValue": float
readonly "startToMiddleEasing": $Easing
 "valueMultiplier": float
 "coefficientMultiplier": float
readonly "middleValue": float
readonly "coefficient": float
readonly "middleToEndEasing": $Easing
readonly "startingValue": float


public static "create"(arg0: float, arg1: float): $GenericParticleDataBuilder
public static "create"(arg0: float): $GenericParticleDataBuilder
public static "create"(arg0: float, arg1: float, arg2: float): $GenericParticleDataBuilder
public "getValue"(arg0: float, arg1: float): float
public "copy"(): $GenericParticleData
public "bake"(): $GenericParticleData
public "getProgress"(arg0: float, arg1: float): float
public "immutable"(): $GenericParticleData
public "multiplyValue"(arg0: float): $GenericParticleData
public "multiplyCoefficient"(arg0: float): $GenericParticleData
public "overrideCoefficientMultiplier"(arg0: float): $GenericParticleData
public "isTrinary"(): boolean
public "getCoefficient"(): float
public "getValueMultiplier"(): float
public static "constrictTransparency"(arg0: $GenericParticleData$$Type): $GenericParticleData
public "overrideValueMultiplier"(arg0: float): $GenericParticleData
get "trinary"(): boolean
get "coefficient"(): float
get "valueMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericParticleData$$Type = ($GenericParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericParticleData_ = $GenericParticleData$$Type;
}}
declare module "team.lodestar.lodestone.systems.multiblock.MultiBlockCoreEntity" {
import {$MultiBlockStructure, $MultiBlockStructure$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IMultiBlockCore, $IMultiBlockCore$$Type} from "team.lodestar.lodestone.systems.multiblock.IMultiBlockCore"
import {$LodestoneBlockEntity, $LodestoneBlockEntity$$Type} from "team.lodestar.lodestone.systems.blockentity.LodestoneBlockEntity"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiBlockCoreEntity extends $LodestoneBlockEntity implements $IMultiBlockCore {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "structure": $MultiBlockStructure

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $MultiBlockStructure$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getStructure"(): $MultiBlockStructure
public "onBreak"(arg0: $Player$$Type): void
public "getComponentPositions"(): $ArrayList<($BlockPos)>
public "isModular"(): boolean
public "setupMultiblock"(arg0: $BlockPos$$Type): void
public "destroyMultiblock"(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "structure"(): $MultiBlockStructure
get "componentPositions"(): $ArrayList<($BlockPos)>
get "modular"(): boolean
set "upMultiblock"(value: $BlockPos$$Type)
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBlockCoreEntity$$Type = ($MultiBlockCoreEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiBlockCoreEntity_ = $MultiBlockCoreEntity$$Type;
}}
declare module "team.lodestar.lodestone.systems.multiblock.MultiBlockItem" {
import {$MultiBlockStructure, $MultiBlockStructure$$Type} from "team.lodestar.lodestone.systems.multiblock.MultiBlockStructure"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $MultiBlockItem extends $BlockItem {
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
readonly "structure": $Supplier<($MultiBlockStructure)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: $Supplier$$Type<($MultiBlockStructure$$Type)>)

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
export type $MultiBlockItem$$Type = ($MultiBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiBlockItem_ = $MultiBlockItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.particle.world.behaviors.LodestoneParticleBehavior" {
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$LodestoneWorldParticle, $LodestoneWorldParticle$$Type} from "team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticle"

export interface $LodestoneParticleBehavior {

 "tick"(arg0: $LodestoneWorldParticle$$Type): void
 "render"(arg0: $LodestoneWorldParticle$$Type, arg1: $VertexConsumer$$Type, arg2: $Camera$$Type, arg3: float): void

(arg0: $LodestoneWorldParticle, arg1: $VertexConsumer, arg2: $Camera, arg3: float): void
}

export namespace $LodestoneParticleBehavior {
const probejs$$marker: never
}
export class $LodestoneParticleBehavior$$Static implements $LodestoneParticleBehavior {


 "tick"(arg0: $LodestoneWorldParticle$$Type): void
 "render"(arg0: $LodestoneWorldParticle$$Type, arg1: $VertexConsumer$$Type, arg2: $Camera$$Type, arg3: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneParticleBehavior$$Type = ((arg0: $LodestoneWorldParticle, arg1: $VertexConsumer, arg2: $Camera, arg3: float) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneParticleBehavior_ = $LodestoneParticleBehavior$$Type;
}}
declare module "team.lodestar.lodestone.systems.block.sign.LodestoneStandingSignBlock" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$StandingSignBlock, $StandingSignBlock$$Type} from "net.minecraft.world.level.block.StandingSignBlock"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LodestoneStandingSignBlock extends $StandingSignBlock implements $EntityBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StandingSignBlock)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $WoodType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LodestoneStandingSignBlock$$Type = ($LodestoneStandingSignBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneStandingSignBlock_ = $LodestoneStandingSignBlock$$Type;
}}
declare module "team.lodestar.lodestone.systems.item.LodestoneFuelBlockItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
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

export class $LodestoneFuelBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
readonly "fuel": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: integer)

public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(any)>): integer
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
export type $LodestoneFuelBlockItem$$Type = ($LodestoneFuelBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneFuelBlockItem_ = $LodestoneFuelBlockItem$$Type;
}}
declare module "team.lodestar.lodestone.systems.recipe.LodestoneInWorldRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $LodestoneInWorldRecipe<T extends $RecipeInput> implements $Recipe<(T)> {
readonly "output": $ItemStack

constructor(arg0: $RecipeSerializer$$Type<(any)>, arg1: $RecipeType$$Type<(any)>, arg2: $ItemStack$$Type)
constructor(arg0: $RecipeSerializer$$Type<(any)>, arg1: $RecipeType$$Type<(any)>)

public "getType"(): $RecipeType<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: T, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "matches"(arg0: T, arg1: $Level$$Type): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
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
export type $LodestoneInWorldRecipe$$Type<T> = ($LodestoneInWorldRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LodestoneInWorldRecipe_<T> = $LodestoneInWorldRecipe$$Type<(T)>;
}}
declare module "team.lodestar.lodestone.systems.particle.world.options.WorldParticleOptions" {
import {$ParticleRenderType, $ParticleRenderType$$Type} from "net.minecraft.client.particle.ParticleRenderType"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$LodestoneWorldParticleType, $LodestoneWorldParticleType$$Type} from "team.lodestar.lodestone.systems.particle.world.type.LodestoneWorldParticleType"
import {$SimpleParticleOptions$ParticleSpritePicker, $SimpleParticleOptions$ParticleSpritePicker$$Type} from "team.lodestar.lodestone.systems.particle.SimpleParticleOptions$ParticleSpritePicker"
import {$RenderHandler$LodestoneRenderLayer, $RenderHandler$LodestoneRenderLayer$$Type} from "team.lodestar.lodestone.handlers.RenderHandler$LodestoneRenderLayer"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SpinParticleData, $SpinParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.spin.SpinParticleData"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$GenericParticleData, $GenericParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.GenericParticleData"
import {$LodestoneParticleBehavior, $LodestoneParticleBehavior$$Type} from "team.lodestar.lodestone.systems.particle.world.behaviors.LodestoneParticleBehavior"
import {$LodestoneWorldParticle, $LodestoneWorldParticle$$Type} from "team.lodestar.lodestone.systems.particle.world.LodestoneWorldParticle"
import {$SimpleParticleOptions, $SimpleParticleOptions$$Type} from "team.lodestar.lodestone.systems.particle.SimpleParticleOptions"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$ColorParticleData, $ColorParticleData$$Type} from "team.lodestar.lodestone.systems.particle.data.color.ColorParticleData"

export class $WorldParticleOptions extends $SimpleParticleOptions implements $ParticleOptions {
readonly "spawnActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "noClip": boolean
readonly "renderActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
 "colorData": $ColorParticleData
readonly "tickActors": $Collection<($Consumer<($LodestoneWorldParticle)>)>
static readonly "DEFAULT_COLOR": $ColorParticleData
 "transparencyData": $GenericParticleData
 "spritePicker": $SimpleParticleOptions$ParticleSpritePicker
 "lifetimeSupplier": $Supplier<(integer)>
readonly "type": $ParticleType<(any)>
 "spinData": $SpinParticleData
 "particleLight": integer
 "renderLayer": $RenderHandler$LodestoneRenderLayer
 "shouldCull": boolean
static readonly "DEFAULT_GENERIC": $GenericParticleData
 "lengthData": $GenericParticleData
 "behavior": $LodestoneParticleBehavior
 "renderType": $ParticleRenderType
 "frictionStrengthSupplier": $Supplier<(float)>
 "scaleData": $GenericParticleData
 "gravityStrengthSupplier": $Supplier<(float)>
static readonly "DEFAULT_SPIN": $SpinParticleData
 "lifeDelaySupplier": $Supplier<(integer)>

constructor(arg0: $ParticleType$$Type<(any)>)
constructor(arg0: $Supplier$$Type<($LodestoneWorldParticleType$$Type)>)

public "getType"(): $ParticleType<(any)>
public "setBehavior"(arg0: $LodestoneParticleBehavior$$Type): $WorldParticleOptions
public "setBehaviorIfDefault"(arg0: $LodestoneParticleBehavior$$Type): $WorldParticleOptions
get "type"(): $ParticleType<(any)>
set "behavior"(value: $LodestoneParticleBehavior$$Type)
set "behaviorIfDefault"(value: $LodestoneParticleBehavior$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldParticleOptions$$Type = ($WorldParticleOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldParticleOptions_ = $WorldParticleOptions$$Type;
}}
