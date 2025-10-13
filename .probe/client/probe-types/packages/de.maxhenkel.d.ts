declare module "de.maxhenkel.gravestone.blocks.GraveStoneBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IItemBlock, $IItemBlock$$Type} from "de.maxhenkel.gravestone.corelib.block.IItemBlock"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Death, $Death$$Type} from "de.maxhenkel.gravestone.corelib.death.Death"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $GraveStoneBlock extends $Block implements $EntityBlock, $IItemBlock, $SimpleWaterloggedBlock {
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
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "toItem"(): $Item
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "wasExploded"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "dropItems"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $NonNullList$$Type<($ItemStack$$Type)>): void
public "fillInventory"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $NonNullList$$Type<($ItemStack$$Type)>): void
public "fillPlayerInventory"(arg0: $Player$$Type, arg1: $Death$$Type): $NonNullList<(any)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
public "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
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
export type $GraveStoneBlock$$Type = ($GraveStoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraveStoneBlock_ = $GraveStoneBlock$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.common.Packet" {
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"

export interface $Packet<T extends $Packet<(any)>> {

 "toBytes"(arg0: $FriendlyByteBuf$$Type): void
 "getTTL"(): long
 "fromBytes"(arg0: $FriendlyByteBuf$$Type): T
get "tTL"(): long
}

export namespace $Packet {
const probejs$$marker: never
}
export class $Packet$$Static<T extends $Packet<(any)>> implements $Packet {


 "toBytes"(arg0: $FriendlyByteBuf$$Type): void
 "getTTL"(): long
 "fromBytes"(arg0: $FriendlyByteBuf$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Packet$$Type<T> = ($Packet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Packet_<T> = $Packet$$Type<(T)>;
}}
declare module "de.maxhenkel.voicechat.voice.common.Secret" {
import {$SecretKeySpec, $SecretKeySpec$$Type} from "javax.crypto.spec.SecretKeySpec"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $Secret {
static readonly "IV_SIZE_BYTES": integer
static readonly "CIPHER": StringJS
static readonly "SECRET_SIZE_BYTES": integer
static readonly "TAG_LEN_BITS": integer


public "getKeySpec"(): $SecretKeySpec
public "decrypt"(arg0: (byte)[]): (byte)[]
public "encrypt"(arg0: (byte)[]): (byte)[]
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "toBytes"(arg0: $ByteBuf$$Type): void
public static "fromBytes"(arg0: (byte)[]): $Secret
public static "fromBytes"(arg0: $ByteBuf$$Type): $Secret
public "getSecret"(): (byte)[]
public static "generateIV"(): (byte)[]
public static "generateNewRandomSecret"(): $Secret
get "keySpec"(): $SecretKeySpec
get "secret"(): (byte)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Secret$$Type = ($Secret);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Secret_ = $Secret$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.server.ServerGroupManager" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Server, $Server$$Type} from "de.maxhenkel.voicechat.voice.server.Server"
import {$Group, $Group$$Type} from "de.maxhenkel.voicechat.voice.server.Group"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ServerGroupManager {

constructor(arg0: $Server$$Type)

public "getGroup"(arg0: $UUID$$Type): $Group
public "getGroups"(): $Map<($UUID), ($Group)>
public "addGroup"(arg0: $Group$$Type, arg1: $ServerPlayer$$Type): void
public "removeGroup"(arg0: $UUID$$Type): boolean
public "onPlayerLoggedOut"(arg0: $ServerPlayer$$Type): void
public "onPlayerCompatibilityCheckSucceeded"(arg0: $ServerPlayer$$Type): void
public "joinGroup"(arg0: $Group$$Type, arg1: $ServerPlayer$$Type, arg2: StringJS): void
public "leaveGroup"(arg0: $ServerPlayer$$Type): void
public "cleanupGroups"(): void
public "getPlayerGroup"(arg0: $ServerPlayer$$Type): $Group
get "groups"(): $Map<($UUID), ($Group)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGroupManager$$Type = ($ServerGroupManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerGroupManager_ = $ServerGroupManager$$Type;
}}
declare module "de.maxhenkel.voicechat.plugins.impl.VolumeCategoryImpl" {
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$VolumeCategory, $VolumeCategory$$Type} from "de.maxhenkel.voicechat.api.VolumeCategory"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $VolumeCategoryImpl implements $VolumeCategory {
static readonly "ID_REGEX": $Pattern

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: StringJS, arg4: StringJS, arg5: ((integer)[])[])

public "getDisplayName"(): $Component
public "getDescription"(): StringJS
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "getId"(): StringJS
public static "fromBytes"(arg0: $FriendlyByteBuf$$Type): $VolumeCategoryImpl
public "getIcon"(): ((integer)[])[]
public "getSearchName"(): StringJS
public "getNameTranslationKey"(): StringJS
public "getDisplayDescription"(): $Component
public "getDescriptionTranslationKey"(): StringJS
get "displayName"(): $Component
get "description"(): StringJS
get "name"(): StringJS
get "id"(): StringJS
get "icon"(): ((integer)[])[]
get "searchName"(): StringJS
get "nameTranslationKey"(): StringJS
get "displayDescription"(): $Component
get "descriptionTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VolumeCategoryImpl$$Type = ($VolumeCategoryImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VolumeCategoryImpl_ = $VolumeCategoryImpl$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.client.TalkCache" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TalkCache {

constructor()

public "updateLevel"(arg0: $UUID$$Type, arg1: StringJS, arg2: boolean, arg3: (short)[]): void
public "isTalking"(arg0: $Entity$$Type): boolean
public "isTalking"(arg0: $UUID$$Type): boolean
public "isWhispering"(arg0: $UUID$$Type): boolean
public "isWhispering"(arg0: $Entity$$Type): boolean
public "updateCategoryVolume"(arg0: StringJS, arg1: double): void
/**
 * 
 * @deprecated
 */
public "updateTalking"(arg0: $UUID$$Type, arg1: boolean): void
public "setTimestampSupplier"(arg0: $Supplier$$Type<(long)>): void
public "getPlayerAudioLevel"(arg0: $UUID$$Type): double
public "getCategoryAudioLevel"(arg0: StringJS): double
set "timestampSupplier"(value: $Supplier$$Type<(long)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TalkCache$$Type = ($TalkCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TalkCache_ = $TalkCache$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.server.ServerCategoryManager" {
import {$CategoryManager, $CategoryManager$$Type} from "de.maxhenkel.voicechat.plugins.CategoryManager"
import {$Server, $Server$$Type} from "de.maxhenkel.voicechat.voice.server.Server"
import {$VolumeCategoryImpl, $VolumeCategoryImpl$$Type} from "de.maxhenkel.voicechat.plugins.impl.VolumeCategoryImpl"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ServerCategoryManager extends $CategoryManager {

constructor(arg0: $Server$$Type)

public "addCategory"(arg0: $VolumeCategoryImpl$$Type): void
public "removeCategory"(arg0: StringJS): $VolumeCategoryImpl
public "onPlayerCompatibilityCheckSucceeded"(arg0: $ServerPlayer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCategoryManager$$Type = ($ServerCategoryManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCategoryManager_ = $ServerCategoryManager$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.client.SoundManager" {
import {$List, $List$$Type} from "java.util.List"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export class $SoundManager {

constructor(arg0: StringJS)
constructor()

public "close"(): void
public "isClosed"(): boolean
public "getMaxGain"(): float
public static "checkAlcError"(arg0: long): boolean
public "runInContext"(arg0: $Executor$$Type, arg1: $Runnable$$Type): void
public "openContext"(): boolean
public "closeContext"(): void
public static "canEnumerate"(): boolean
public static "getAllSpeakers"(): $List<(StringJS)>
public static "checkAlError"(): boolean
public static "getAlcError"(arg0: integer): StringJS
public static "getDefaultSpeaker"(): StringJS
public static "cleanDeviceName"(arg0: StringJS): StringJS
get "closed"(): boolean
get "maxGain"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundManager$$Type = ($SoundManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundManager_ = $SoundManager$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.server.ClientConnection" {
import {$NetworkMessage, $NetworkMessage$$Type} from "de.maxhenkel.voicechat.voice.common.NetworkMessage"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Server, $Server$$Type} from "de.maxhenkel.voicechat.voice.server.Server"

export class $ClientConnection {

constructor(arg0: $UUID$$Type, arg1: $SocketAddress$$Type)

public "getAddress"(): $SocketAddress
public "send"(arg0: $Server$$Type, arg1: $NetworkMessage$$Type): void
public "getPlayerUUID"(): $UUID
public "setLastKeepAliveResponse"(arg0: long): void
public "getLastKeepAliveResponse"(): long
get "address"(): $SocketAddress
get "playerUUID"(): $UUID
set "lastKeepAliveResponse"(value: long)
get "lastKeepAliveResponse"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientConnection$$Type = ($ClientConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientConnection_ = $ClientConnection$$Type;
}}
declare module "de.maxhenkel.voicechat.net.Packet" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder, $StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket, $ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket, $ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider, $CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"

export interface $Packet<T extends $Packet<(T)>> extends $CustomPacketPayload {

 "type"(): $CustomPacketPayload$Type<(T)>
 "toBytes"(arg0: $FriendlyByteBuf$$Type): void
 "fromBytes"(arg0: $FriendlyByteBuf$$Type): T
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
}

export namespace $Packet {
function codec<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
function codec<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
function createType<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
const probejs$$marker: never
}
export class $Packet$$Static<T extends $Packet<(T)>> implements $Packet {


 "type"(): $CustomPacketPayload$Type<(T)>
 "toBytes"(arg0: $FriendlyByteBuf$$Type): void
 "fromBytes"(arg0: $FriendlyByteBuf$$Type): T
static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Packet$$Type<T> = ($Packet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Packet_<T> = $Packet$$Type<(T)>;
}}
declare module "de.maxhenkel.voicechat.events.ClientVoiceChatConnectedEvent" {
import {$ClientVoicechatConnection, $ClientVoicechatConnection$$Type} from "de.maxhenkel.voicechat.voice.client.ClientVoicechatConnection"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $ClientVoiceChatConnectedEvent extends $Event {

constructor(arg0: $ClientVoicechatConnection$$Type)

public "getClient"(): $ClientVoicechatConnection
get "client"(): $ClientVoicechatConnection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientVoiceChatConnectedEvent$$Type = ($ClientVoiceChatConnectedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientVoiceChatConnectedEvent_ = $ClientVoiceChatConnectedEvent$$Type;
}}
declare module "de.maxhenkel.gravestone.items.ObituaryItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Death, $Death$$Type} from "de.maxhenkel.gravestone.corelib.death.Death"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ObituaryItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "convert"(arg0: $ItemStack$$Type): void
public "toStack"(arg0: $Death$$Type): $ItemStack
public "fromStack"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): $Death
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObituaryItem$$Type = ($ObituaryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObituaryItem_ = $ObituaryItem$$Type;
}}
declare module "de.maxhenkel.voicechat.configbuilder.entry.ConfigEntry" {
import {$Config, $Config$$Type} from "de.maxhenkel.voicechat.configbuilder.Config"

export interface $ConfigEntry<T> {

 "reset"(): $ConfigEntry<(T)>
 "get"(): T
 "getDefault"(): T
 "getKey"(): StringJS
 "set"(arg0: T): $ConfigEntry<(T)>
 "save"(): $ConfigEntry<(T)>
 "comment"(...arg0: (StringJS)[]): $ConfigEntry<(T)>
 "getConfig"(): $Config
 "getComments"(): (StringJS)[]
 "saveSync"(): $ConfigEntry<(T)>
get "default"(): T
get "key"(): StringJS
get "config"(): $Config
get "comments"(): (StringJS)[]
}

export namespace $ConfigEntry {
const probejs$$marker: never
}
export class $ConfigEntry$$Static<T> implements $ConfigEntry {


 "reset"(): $ConfigEntry<(T)>
 "get"(): T
 "getDefault"(): T
 "getKey"(): StringJS
 "set"(arg0: T): $ConfigEntry<(T)>
 "save"(): $ConfigEntry<(T)>
 "comment"(...arg0: (StringJS)[]): $ConfigEntry<(T)>
 "getConfig"(): $Config
 "getComments"(): (StringJS)[]
 "saveSync"(): $ConfigEntry<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigEntry$$Type<T> = ($ConfigEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigEntry_<T> = $ConfigEntry$$Type<(T)>;
}}
declare module "de.maxhenkel.voicechat.api.ClientVoicechatSocket" {
import {$RawUdpPacket, $RawUdpPacket$$Type} from "de.maxhenkel.voicechat.api.RawUdpPacket"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"

export interface $ClientVoicechatSocket {

 "read"(): $RawUdpPacket
 "close"(): void
 "open"(): void
 "send"(arg0: (byte)[], arg1: $SocketAddress$$Type): void
 "isClosed"(): boolean
get "closed"(): boolean
}

export namespace $ClientVoicechatSocket {
const probejs$$marker: never
}
export class $ClientVoicechatSocket$$Static implements $ClientVoicechatSocket {


 "read"(): $RawUdpPacket
 "close"(): void
 "open"(): void
 "send"(arg0: (byte)[], arg1: $SocketAddress$$Type): void
 "isClosed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientVoicechatSocket$$Type = ($ClientVoicechatSocket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientVoicechatSocket_ = $ClientVoicechatSocket$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.client.AudioChannel" {
import {$BlockingQueue, $BlockingQueue$$Type} from "java.util.concurrent.BlockingQueue"
import {$ClientVoicechat, $ClientVoicechat$$Type} from "de.maxhenkel.voicechat.voice.client.ClientVoicechat"
import {$InitializationData, $InitializationData$$Type} from "de.maxhenkel.voicechat.voice.client.InitializationData"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Speaker, $Speaker$$Type} from "de.maxhenkel.voicechat.voice.client.speaker.Speaker"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$AudioPacketBuffer, $AudioPacketBuffer$$Type} from "de.maxhenkel.voicechat.voice.client.AudioPacketBuffer"
import {$SoundPacket, $SoundPacket$$Type} from "de.maxhenkel.voicechat.voice.common.SoundPacket"

export class $AudioChannel extends $Thread {
static readonly "MIN_PRIORITY": integer
static readonly "MAX_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor(arg0: $ClientVoicechat$$Type, arg1: $InitializationData$$Type, arg2: $UUID$$Type)

public "run"(): void
public "getQueue"(): $BlockingQueue<($SoundPacket<(any)>)>
public "isClosed"(): boolean
public "addToQueue"(arg0: $SoundPacket$$Type<(any)>): void
public "getChannelId"(): $UUID
public "closeAndKill"(): void
public "canKill"(): boolean
public "getLostPackets"(): long
public "getSpeaker"(): $Speaker
public "getPacketBuffer"(): $AudioPacketBuffer
get "queue"(): $BlockingQueue<($SoundPacket<(any)>)>
get "closed"(): boolean
get "channelId"(): $UUID
get "lostPackets"(): long
get "speaker"(): $Speaker
get "packetBuffer"(): $AudioPacketBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AudioChannel$$Type = ($AudioChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AudioChannel_ = $AudioChannel$$Type;
}}
declare module "de.maxhenkel.voicechat.events.ServerVoiceChatDisconnectedEvent" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $ServerVoiceChatDisconnectedEvent extends $Event {

constructor(arg0: $UUID$$Type)

public "getPlayerID"(): $UUID
get "playerID"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerVoiceChatDisconnectedEvent$$Type = ($ServerVoiceChatDisconnectedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerVoiceChatDisconnectedEvent_ = $ServerVoiceChatDisconnectedEvent$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.common.PlayerState" {
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"

export class $PlayerState {

constructor(arg0: $UUID$$Type, arg1: StringJS, arg2: boolean, arg3: boolean)

public "getName"(): StringJS
public "toString"(): StringJS
public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "setName"(arg0: StringJS): void
public "getUuid"(): $UUID
public static "fromBytes"(arg0: $FriendlyByteBuf$$Type): $PlayerState
public "getGroup"(): $UUID
public "setGroup"(arg0: $UUID$$Type): void
public "setUuid"(arg0: $UUID$$Type): void
public "hasGroup"(): boolean
public "isDisconnected"(): boolean
public "isDisabled"(): boolean
public "setDisabled"(arg0: boolean): void
public "setDisconnected"(arg0: boolean): void
get "name"(): StringJS
set "name"(value: StringJS)
get "uuid"(): $UUID
get "group"(): $UUID
set "group"(value: $UUID$$Type)
set "uuid"(value: $UUID$$Type)
get "disconnected"(): boolean
get "disabled"(): boolean
set "disabled"(value: boolean)
set "disconnected"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerState$$Type = ($PlayerState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerState_ = $PlayerState$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.client.ClientVoicechatConnection" {
import {$NetworkMessage, $NetworkMessage$$Type} from "de.maxhenkel.voicechat.voice.common.NetworkMessage"
import {$ClientVoicechat, $ClientVoicechat$$Type} from "de.maxhenkel.voicechat.voice.client.ClientVoicechat"
import {$InetAddress, $InetAddress$$Type} from "java.net.InetAddress"
import {$InitializationData, $InitializationData$$Type} from "de.maxhenkel.voicechat.voice.client.InitializationData"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$ClientVoicechatSocket, $ClientVoicechatSocket$$Type} from "de.maxhenkel.voicechat.api.ClientVoicechatSocket"

export class $ClientVoicechatConnection extends $Thread {
static readonly "MIN_PRIORITY": integer
static readonly "MAX_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor(arg0: $ClientVoicechat$$Type, arg1: $InitializationData$$Type)

public "getAddress"(): $InetAddress
public "getData"(): $InitializationData
public "getSocket"(): $ClientVoicechatSocket
public "isConnected"(): boolean
public "run"(): void
public "close"(): void
public "disconnect"(): void
public "isInitialized"(): boolean
public "sendToServer"(arg0: $NetworkMessage$$Type): boolean
public "checkTimeout"(): void
get "address"(): $InetAddress
get "data"(): $InitializationData
get "socket"(): $ClientVoicechatSocket
get "connected"(): boolean
get "initialized"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientVoicechatConnection$$Type = ($ClientVoicechatConnection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientVoicechatConnection_ = $ClientVoicechatConnection$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.common.SoundPacket" {
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Packet, $Packet$$Type} from "de.maxhenkel.voicechat.voice.common.Packet"

export class $SoundPacket<T extends $SoundPacket<(any)>> implements $Packet<(T)> {
static readonly "WHISPER_MASK": byte
static readonly "HAS_CATEGORY_MASK": byte

constructor(arg0: $UUID$$Type, arg1: $UUID$$Type, arg2: (byte)[], arg3: long, arg4: StringJS)
constructor()
constructor(arg0: $UUID$$Type, arg1: $UUID$$Type, arg2: (short)[], arg3: StringJS)

public "getData"(): (byte)[]
public "getSequenceNumber"(): long
public "getCategory"(): StringJS
public "getSender"(): $UUID
public "getChannelId"(): $UUID
public "isFromClientAudioChannel"(): boolean
public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "getTTL"(): long
public "fromBytes"(arg0: $FriendlyByteBuf$$Type): T
get "data"(): (byte)[]
get "sequenceNumber"(): long
get "category"(): StringJS
get "sender"(): $UUID
get "channelId"(): $UUID
get "fromClientAudioChannel"(): boolean
get "tTL"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundPacket$$Type<T> = ($SoundPacket<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundPacket_<T> = $SoundPacket$$Type<(T)>;
}}
declare module "de.maxhenkel.tradecycling.mixin.AbstractContainerScreenAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractContainerScreenAccessor {

 "getLeftPos"(): integer
 "getTopPos"(): integer
get "leftPos"(): integer
get "topPos"(): integer
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
export class $AbstractContainerScreenAccessor$$Static implements $AbstractContainerScreenAccessor {


 "getLeftPos"(): integer
 "getTopPos"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.server.PlayerStateManager" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Server, $Server$$Type} from "de.maxhenkel.voicechat.voice.server.Server"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$PlayerState, $PlayerState$$Type} from "de.maxhenkel.voicechat.voice.common.PlayerState"

export class $PlayerStateManager {

constructor(arg0: $Server$$Type)

public "getState"(arg0: $UUID$$Type): $PlayerState
public "getStates"(): $Collection<($PlayerState)>
public "setGroup"(arg0: $ServerPlayer$$Type, arg1: $UUID$$Type): void
public "onPlayerHide"(arg0: $ServerPlayer$$Type, arg1: $ServerPlayer$$Type): void
public "onPlayerShow"(arg0: $ServerPlayer$$Type, arg1: $ServerPlayer$$Type): void
public "onPlayerLoggedIn"(arg0: $ServerPlayer$$Type): void
public "onPlayerLoggedOut"(arg0: $ServerPlayer$$Type): void
public "onPlayerCompatibilityCheckSucceeded"(arg0: $ServerPlayer$$Type): void
public "onPlayerVoicechatConnect"(arg0: $ServerPlayer$$Type): void
public "onPlayerVoicechatDisconnect"(arg0: $UUID$$Type): void
public "broadcastState"(arg0: $ServerPlayer$$Type, arg1: $PlayerState$$Type): void
public "broadcastRemoveState"(arg0: $ServerPlayer$$Type): void
public static "defaultDisconnectedState"(arg0: $ServerPlayer$$Type): $PlayerState
get "states"(): $Collection<($PlayerState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerStateManager$$Type = ($PlayerStateManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerStateManager_ = $PlayerStateManager$$Type;
}}
declare module "de.maxhenkel.tradecycling.mixin.MerchantMenuAccessor" {
import {$Merchant, $Merchant$$Type} from "net.minecraft.world.item.trading.Merchant"
import {$MerchantContainer, $MerchantContainer$$Type} from "net.minecraft.world.inventory.MerchantContainer"

export interface $MerchantMenuAccessor {

 "getTrader"(): $Merchant
 "getTradeContainer"(): $MerchantContainer
get "trader"(): $Merchant
get "tradeContainer"(): $MerchantContainer
}

export namespace $MerchantMenuAccessor {
const probejs$$marker: never
}
export class $MerchantMenuAccessor$$Static implements $MerchantMenuAccessor {


 "getTrader"(): $Merchant
 "getTradeContainer"(): $MerchantContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantMenuAccessor$$Type = ($MerchantMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MerchantMenuAccessor_ = $MerchantMenuAccessor$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.common.MicPacket" {
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Packet, $Packet$$Type} from "de.maxhenkel.voicechat.voice.common.Packet"

export class $MicPacket implements $Packet<($MicPacket)> {

constructor(arg0: (byte)[], arg1: boolean, arg2: long)
constructor()

public "getData"(): (byte)[]
public "setData"(arg0: (byte)[]): void
public "getSequenceNumber"(): long
public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "getTTL"(): long
public "fromBytes"(arg0: $FriendlyByteBuf$$Type): $Packet<(any)>
public "isWhispering"(): boolean
get "data"(): (byte)[]
set "data"(value: (byte)[])
get "sequenceNumber"(): long
get "tTL"(): long
get "whispering"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicPacket$$Type = ($MicPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MicPacket_ = $MicPacket$$Type;
}}
declare module "de.maxhenkel.voicechat.config.ServerConfig" {
import {$ServerConfig$Codec, $ServerConfig$Codec$$Type} from "de.maxhenkel.voicechat.config.ServerConfig$Codec"
import {$ConfigEntry, $ConfigEntry$$Type} from "de.maxhenkel.voicechat.configbuilder.entry.ConfigEntry"
import {$ConfigBuilder, $ConfigBuilder$$Type} from "de.maxhenkel.voicechat.configbuilder.ConfigBuilder"

export class $ServerConfig {
 "groupsEnabled": $ConfigEntry<(boolean)>
 "keepAlive": $ConfigEntry<(integer)>
 "voiceChatCodec": $ConfigEntry<($ServerConfig$Codec)>
 "whisperDistance": $ConfigEntry<(double)>
 "voiceHost": $ConfigEntry<(StringJS)>
 "broadcastRange": $ConfigEntry<(double)>
 "voiceChatMtuSize": $ConfigEntry<(integer)>
 "voiceChatPort": $ConfigEntry<(integer)>
 "useNatives": $ConfigEntry<(boolean)>
 "allowRecording": $ConfigEntry<(boolean)>
 "voiceChatDistance": $ConfigEntry<(double)>
 "allowPings": $ConfigEntry<(boolean)>
 "voiceChatBindAddress": $ConfigEntry<(StringJS)>
 "spectatorPlayerPossession": $ConfigEntry<(boolean)>
 "loginTimeout": $ConfigEntry<(integer)>
 "spectatorInteraction": $ConfigEntry<(boolean)>
 "forceVoiceChat": $ConfigEntry<(boolean)>

constructor(arg0: $ConfigBuilder$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerConfig$$Type = ($ServerConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerConfig_ = $ServerConfig$$Type;
}}
declare module "de.maxhenkel.tradecycling.mixin.VillagerAccessor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $VillagerAccessor {

 "invokeUpdateSpecialPrices"(arg0: $Player$$Type): void

(arg0: $Player): void
}

export namespace $VillagerAccessor {
const probejs$$marker: never
}
export class $VillagerAccessor$$Static implements $VillagerAccessor {


 "invokeUpdateSpecialPrices"(arg0: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerAccessor$$Type = ((arg0: $Player) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerAccessor_ = $VillagerAccessor$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.client.AudioRecorder" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $AudioRecorder {

constructor(arg0: $Path$$Type, arg1: long)

public "getDuration"(): StringJS
public "getDuration"(arg0: long): StringJS
public static "create"(): $AudioRecorder
public "getLocation"(): $Path
public "close"(): void
public "getStorage"(): StringJS
public "getStorage"(arg0: long): StringJS
public "getStartTime"(): long
public "saveAndClose"(): void
public "appendChunk"(arg0: $UUID$$Type, arg1: long, arg2: (short)[]): void
public "getRecordedPlayerCount"(): integer
public "flushChunkThreaded"(arg0: $UUID$$Type): void
get "duration"(): StringJS
get "location"(): $Path
get "storage"(): StringJS
get "startTime"(): long
get "recordedPlayerCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AudioRecorder$$Type = ($AudioRecorder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AudioRecorder_ = $AudioRecorder$$Type;
}}
declare module "de.maxhenkel.voicechat.config.ServerConfig$Codec" {
import {$OpusEncoderMode, $OpusEncoderMode$$Type} from "de.maxhenkel.voicechat.api.opus.OpusEncoderMode"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$OpusEncoder$Application, $OpusEncoder$Application$$Type} from "de.maxhenkel.opus4j.OpusEncoder$Application"

export class $ServerConfig$Codec extends $Enum<($ServerConfig$Codec)> {
static readonly "RESTRICTED_LOWDELAY": $ServerConfig$Codec
static readonly "VOIP": $ServerConfig$Codec
static readonly "AUDIO": $ServerConfig$Codec


public "getMode"(): $OpusEncoderMode
public static "values"(): ($ServerConfig$Codec)[]
public static "valueOf"(arg0: StringJS): $ServerConfig$Codec
public "getApplication"(): $OpusEncoder$Application
get "mode"(): $OpusEncoderMode
get "application"(): $OpusEncoder$Application
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerConfig$Codec$$Type = (("voip") | ("audio") | ("restricted_lowdelay"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerConfig$Codec_ = $ServerConfig$Codec$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.client.InitializationData" {
import {$ServerConfig$Codec, $ServerConfig$Codec$$Type} from "de.maxhenkel.voicechat.config.ServerConfig$Codec"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Secret, $Secret$$Type} from "de.maxhenkel.voicechat.voice.common.Secret"
import {$SecretPacket, $SecretPacket$$Type} from "de.maxhenkel.voicechat.net.SecretPacket"

export class $InitializationData {

constructor(arg0: StringJS, arg1: $SecretPacket$$Type)

public "getKeepAlive"(): integer
public "getCodec"(): $ServerConfig$Codec
public "getMtuSize"(): integer
public "getServerPort"(): integer
public "allowRecording"(): boolean
public "getSecret"(): $Secret
public "getPlayerUUID"(): $UUID
public "groupsEnabled"(): boolean
public "getVoiceChatDistance"(): double
public "getServerIP"(): StringJS
get "keepAlive"(): integer
get "codec"(): $ServerConfig$Codec
get "mtuSize"(): integer
get "serverPort"(): integer
get "secret"(): $Secret
get "playerUUID"(): $UUID
get "voiceChatDistance"(): double
get "serverIP"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InitializationData$$Type = ($InitializationData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InitializationData_ = $InitializationData$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.client.ClientVoicechat" {
import {$AudioRecorder, $AudioRecorder$$Type} from "de.maxhenkel.voicechat.voice.client.AudioRecorder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$InitializationData, $InitializationData$$Type} from "de.maxhenkel.voicechat.voice.client.InitializationData"
import {$ClientVoicechatConnection, $ClientVoicechatConnection$$Type} from "de.maxhenkel.voicechat.voice.client.ClientVoicechatConnection"
import {$MicThread, $MicThread$$Type} from "de.maxhenkel.voicechat.voice.client.MicThread"
import {$SoundManager, $SoundManager$$Type} from "de.maxhenkel.voicechat.voice.client.SoundManager"
import {$SoundPacket, $SoundPacket$$Type} from "de.maxhenkel.voicechat.voice.common.SoundPacket"
import {$AudioChannel, $AudioChannel$$Type} from "de.maxhenkel.voicechat.voice.client.AudioChannel"
import {$TalkCache, $TalkCache$$Type} from "de.maxhenkel.voicechat.voice.client.TalkCache"

export class $ClientVoicechat {

constructor()

public "getConnection"(): $ClientVoicechatConnection
public "setRecording"(arg0: boolean): boolean
public "getRecorder"(): $AudioRecorder
public "connect"(arg0: $InitializationData$$Type): void
public "close"(): void
public "getStartTime"(): long
public "toggleRecording"(): boolean
public "onVoiceChatConnected"(arg0: $ClientVoicechatConnection$$Type): void
public "getSoundManager"(): $SoundManager
public "getMicThread"(): $MicThread
public "getTalkCache"(): $TalkCache
public "onVoiceChatDisconnected"(): void
public "getAudioChannels"(): $Map<($UUID), ($AudioChannel)>
public "processSoundPacket"(arg0: $SoundPacket$$Type<(any)>): void
public "closeAudioChannel"(arg0: $UUID$$Type): boolean
public "reloadAudio"(): void
public "closeMicThread"(): void
public "reloadSoundManager"(): void
public "getInitializationData"(): $InitializationData
get "connection"(): $ClientVoicechatConnection
set "recording"(value: boolean)
get "recorder"(): $AudioRecorder
get "startTime"(): long
get "soundManager"(): $SoundManager
get "micThread"(): $MicThread
get "talkCache"(): $TalkCache
get "audioChannels"(): $Map<($UUID), ($AudioChannel)>
get "initializationData"(): $InitializationData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientVoicechat$$Type = ($ClientVoicechat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientVoicechat_ = $ClientVoicechat$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.client.MicThread" {
import {$ClientVoicechat, $ClientVoicechat$$Type} from "de.maxhenkel.voicechat.voice.client.ClientVoicechat"
import {$MicrophoneException, $MicrophoneException$$Type} from "de.maxhenkel.voicechat.voice.client.MicrophoneException"
import {$ClientVoicechatConnection, $ClientVoicechatConnection$$Type} from "de.maxhenkel.voicechat.voice.client.ClientVoicechatConnection"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $MicThread extends $Thread {
static readonly "MIN_PRIORITY": integer
static readonly "MAX_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor(arg0: $ClientVoicechat$$Type, arg1: $ClientVoicechatConnection$$Type, arg2: $Consumer$$Type<($MicrophoneException)>)

public "run"(): void
public "close"(): void
public "getError"(arg0: $Consumer$$Type<($MicrophoneException)>): void
public "isClosed"(): boolean
public "isTalking"(): boolean
public "isWhispering"(): boolean
public "pollMic"(): (short)[]
public "pollProcessedAudio"(arg0: boolean): (short)[]
public "shouldTransmitAudio"(): boolean
public "setMicrophoneLocked"(arg0: boolean): void
get "closed"(): boolean
get "talking"(): boolean
get "whispering"(): boolean
set "microphoneLocked"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicThread$$Type = ($MicThread);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MicThread_ = $MicThread$$Type;
}}
declare module "de.maxhenkel.gravestone.corelib.death.PlayerDeathEvent" {
import {$Death, $Death$$Type} from "de.maxhenkel.gravestone.corelib.death.Death"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerDeathEvent extends $Event {

constructor(arg0: $Death$$Type, arg1: $ServerPlayer$$Type, arg2: $DamageSource$$Type)

public "getSource"(): $DamageSource
public "getPlayer"(): $ServerPlayer
public "getDeath"(): $Death
public "storeDeath"(): void
public "removeDrops"(): void
get "source"(): $DamageSource
get "player"(): $ServerPlayer
get "death"(): $Death
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDeathEvent$$Type = ($PlayerDeathEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDeathEvent_ = $PlayerDeathEvent$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.server.Server" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ClientConnection, $ClientConnection$$Type} from "de.maxhenkel.voicechat.voice.server.ClientConnection"
import {$Packet, $Packet$$Type} from "de.maxhenkel.voicechat.voice.common.Packet"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$PlayerState, $PlayerState$$Type} from "de.maxhenkel.voicechat.voice.common.PlayerState"
import {$ServerCategoryManager, $ServerCategoryManager$$Type} from "de.maxhenkel.voicechat.voice.server.ServerCategoryManager"
import {$NetworkMessage, $NetworkMessage$$Type} from "de.maxhenkel.voicechat.voice.common.NetworkMessage"
import {$VoicechatSocket, $VoicechatSocket$$Type} from "de.maxhenkel.voicechat.api.VoicechatSocket"
import {$Secret, $Secret$$Type} from "de.maxhenkel.voicechat.voice.common.Secret"
import {$MicPacket, $MicPacket$$Type} from "de.maxhenkel.voicechat.voice.common.MicPacket"
import {$PlayerStateManager, $PlayerStateManager$$Type} from "de.maxhenkel.voicechat.voice.server.PlayerStateManager"
import {$SoundPacket, $SoundPacket$$Type} from "de.maxhenkel.voicechat.voice.common.SoundPacket"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$PingManager, $PingManager$$Type} from "de.maxhenkel.voicechat.voice.server.PingManager"
import {$ServerGroupManager, $ServerGroupManager$$Type} from "de.maxhenkel.voicechat.voice.server.ServerGroupManager"

export class $Server extends $Thread {
static readonly "MIN_PRIORITY": integer
static readonly "MAX_PRIORITY": integer
static readonly "NORM_PRIORITY": integer

constructor(arg0: $MinecraftServer$$Type)

public "getPort"(): integer
public "getConnection"(arg0: $UUID$$Type): $ClientConnection
public "getSocket"(): $VoicechatSocket
public "run"(): void
public "close"(): void
public "getConnections"(): $Map<($UUID), ($ClientConnection)>
public "getServer"(): $MinecraftServer
public "broadcast"(arg0: $Collection$$Type<($ServerPlayer$$Type)>, arg1: $SoundPacket$$Type<(any)>, arg2: $ServerPlayer$$Type, arg3: $PlayerState$$Type, arg4: $UUID$$Type, arg5: StringJS): void
public "sendPacket"(arg0: $Packet$$Type<(any)>, arg1: $ClientConnection$$Type): boolean
public "isClosed"(): boolean
public "onMicPacket"(arg0: $UUID$$Type, arg1: $MicPacket$$Type): void
public "getSender"(arg0: $NetworkMessage$$Type): $ClientConnection
public "getSecret"(arg0: $UUID$$Type): $Secret
public "onPlayerHide"(arg0: $ServerPlayer$$Type, arg1: $ServerPlayer$$Type): void
public "onPlayerShow"(arg0: $ServerPlayer$$Type, arg1: $ServerPlayer$$Type): void
public "getBroadcastRange"(arg0: float): double
public "getPlayerStateManager"(): $PlayerStateManager
public "onPlayerLoggedIn"(arg0: $ServerPlayer$$Type): void
public "onPlayerLoggedOut"(arg0: $ServerPlayer$$Type): void
public "onPlayerCompatibilityCheckSucceeded"(arg0: $ServerPlayer$$Type): void
public "changePort"(arg0: integer): void
public "getPingManager"(): $PingManager
public "getGroupManager"(): $ServerGroupManager
public "sendSoundPacket"(arg0: $ServerPlayer$$Type, arg1: $PlayerState$$Type, arg2: $ServerPlayer$$Type, arg3: $PlayerState$$Type, arg4: $ClientConnection$$Type, arg5: $SoundPacket$$Type<(any)>, arg6: StringJS): void
public "getCategoryManager"(): $ServerCategoryManager
public "generateNewSecret"(arg0: $UUID$$Type): $Secret
public "onPlayerVoicechatConnect"(arg0: $ServerPlayer$$Type): void
public "onPlayerVoicechatDisconnect"(arg0: $UUID$$Type): void
public "hasSecret"(arg0: $UUID$$Type): boolean
public "sendPacketRaw"(arg0: $Packet$$Type<(any)>, arg1: $ClientConnection$$Type): void
public "disconnectClient"(arg0: $UUID$$Type): void
public "getUnconnectedSender"(arg0: $NetworkMessage$$Type): $ClientConnection
get "port"(): integer
get "socket"(): $VoicechatSocket
get "connections"(): $Map<($UUID), ($ClientConnection)>
get "server"(): $MinecraftServer
get "closed"(): boolean
get "playerStateManager"(): $PlayerStateManager
get "pingManager"(): $PingManager
get "groupManager"(): $ServerGroupManager
get "categoryManager"(): $ServerCategoryManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Server$$Type = ($Server);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Server_ = $Server$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.server.Group" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ClientGroup, $ClientGroup$$Type} from "de.maxhenkel.voicechat.voice.common.ClientGroup"
import {$Group$Type, $Group$Type$$Type} from "de.maxhenkel.voicechat.api.Group$Type"

export class $Group {

constructor()
constructor(arg0: $UUID$$Type, arg1: StringJS, arg2: StringJS, arg3: boolean, arg4: boolean, arg5: $Group$Type$$Type)
constructor(arg0: $UUID$$Type, arg1: StringJS, arg2: StringJS, arg3: boolean)
constructor(arg0: $UUID$$Type, arg1: StringJS, arg2: StringJS)
constructor(arg0: $UUID$$Type, arg1: StringJS)

public "isNormal"(): boolean
public "getName"(): StringJS
public "isHidden"(): boolean
public "isOpen"(): boolean
public "getId"(): $UUID
public "getType"(): $Group$Type
public "isPersistent"(): boolean
public "getPassword"(): StringJS
public "isIsolated"(): boolean
public "toClientGroup"(): $ClientGroup
get "normal"(): boolean
get "name"(): StringJS
get "hidden"(): boolean
get "open"(): boolean
get "id"(): $UUID
get "type"(): $Group$Type
get "persistent"(): boolean
get "password"(): StringJS
get "isolated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Group$$Type = ($Group);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Group_ = $Group$$Type;
}}
declare module "de.maxhenkel.gravestone.corelib.block.IItemBlock" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $IItemBlock {

 "toItem"(): $Item

(): $Item$$Type
}

export namespace $IItemBlock {
const probejs$$marker: never
}
export class $IItemBlock$$Static implements $IItemBlock {


 "toItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemBlock$$Type = (() => $Item$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemBlock_ = $IItemBlock$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.client.MicrophoneException" {
import {$IOException, $IOException$$Type} from "java.io.IOException"
import {$Exception, $Exception$$Type} from "java.lang.Exception"

export class $MicrophoneException extends $IOException {

constructor(arg0: StringJS)
constructor(arg0: $Exception$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MicrophoneException$$Type = ($MicrophoneException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MicrophoneException_ = $MicrophoneException$$Type;
}}
declare module "de.maxhenkel.voicechat.events.ServerVoiceChatConnectedEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ServerVoiceChatConnectedEvent extends $Event {

constructor(arg0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerVoiceChatConnectedEvent$$Type = ($ServerVoiceChatConnectedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerVoiceChatConnectedEvent_ = $ServerVoiceChatConnectedEvent$$Type;
}}
declare module "de.maxhenkel.voicechat.api.opus.OpusEncoderMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $OpusEncoderMode extends $Enum<($OpusEncoderMode)> {
static readonly "RESTRICTED_LOWDELAY": $OpusEncoderMode
static readonly "VOIP": $OpusEncoderMode
static readonly "AUDIO": $OpusEncoderMode


public static "values"(): ($OpusEncoderMode)[]
public static "valueOf"(arg0: StringJS): $OpusEncoderMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpusEncoderMode$$Type = (("voip") | ("audio") | ("restricted_lowdelay"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpusEncoderMode_ = $OpusEncoderMode$$Type;
}}
declare module "de.maxhenkel.opus4j.OpusEncoder$Application" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $OpusEncoder$Application extends $Enum<($OpusEncoder$Application)> {
static readonly "VOIP": $OpusEncoder$Application
static readonly "AUDIO": $OpusEncoder$Application
static readonly "LOW_DELAY": $OpusEncoder$Application


public static "values"(): ($OpusEncoder$Application)[]
public static "valueOf"(arg0: StringJS): $OpusEncoder$Application
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpusEncoder$Application$$Type = (("voip") | ("audio") | ("low_delay"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpusEncoder$Application_ = $OpusEncoder$Application$$Type;
}}
declare module "de.maxhenkel.voicechat.configbuilder.ConfigBuilder" {
import {$ConfigBuilder$Builder, $ConfigBuilder$Builder$$Type} from "de.maxhenkel.voicechat.configbuilder.ConfigBuilder$Builder"
import {$BooleanConfigEntry, $BooleanConfigEntry$$Type} from "de.maxhenkel.voicechat.configbuilder.entry.BooleanConfigEntry"
import {$DoubleConfigEntry, $DoubleConfigEntry$$Type} from "de.maxhenkel.voicechat.configbuilder.entry.DoubleConfigEntry"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IntegerConfigEntry, $IntegerConfigEntry$$Type} from "de.maxhenkel.voicechat.configbuilder.entry.IntegerConfigEntry"
import {$LongConfigEntry, $LongConfigEntry$$Type} from "de.maxhenkel.voicechat.configbuilder.entry.LongConfigEntry"
import {$ConfigEntry, $ConfigEntry$$Type} from "de.maxhenkel.voicechat.configbuilder.entry.ConfigEntry"
import {$StringConfigEntry, $StringConfigEntry$$Type} from "de.maxhenkel.voicechat.configbuilder.entry.StringConfigEntry"
import {$FloatConfigEntry, $FloatConfigEntry$$Type} from "de.maxhenkel.voicechat.configbuilder.entry.FloatConfigEntry"
import {$EnumConfigEntry, $EnumConfigEntry$$Type} from "de.maxhenkel.voicechat.configbuilder.entry.EnumConfigEntry"

export interface $ConfigBuilder {

 "header"(...arg0: (StringJS)[]): $ConfigBuilder
 "entry"<T>(arg0: StringJS, arg1: T, ...arg2: (StringJS)[]): $ConfigEntry<(T)>
 "enumEntry"<E extends $Enum<(E)>>(arg0: StringJS, arg1: E, ...arg2: (StringJS)[]): $EnumConfigEntry<(E)>
 "booleanEntry"(arg0: StringJS, arg1: boolean, ...arg2: (StringJS)[]): $BooleanConfigEntry
 "longEntry"(arg0: StringJS, arg1: long, ...arg2: (StringJS)[]): $LongConfigEntry
 "longEntry"(arg0: StringJS, arg1: long, arg2: long, arg3: long, ...arg4: (StringJS)[]): $LongConfigEntry
 "floatEntry"(arg0: StringJS, arg1: float, ...arg2: (StringJS)[]): $FloatConfigEntry
 "floatEntry"(arg0: StringJS, arg1: float, arg2: float, arg3: float, ...arg4: (StringJS)[]): $FloatConfigEntry
 "doubleEntry"(arg0: StringJS, arg1: double, arg2: double, arg3: double, ...arg4: (StringJS)[]): $DoubleConfigEntry
 "doubleEntry"(arg0: StringJS, arg1: double, ...arg2: (StringJS)[]): $DoubleConfigEntry
 "integerEntry"(arg0: StringJS, arg1: integer, arg2: integer, arg3: integer, ...arg4: (StringJS)[]): $IntegerConfigEntry
 "integerEntry"(arg0: StringJS, arg1: integer, ...arg2: (StringJS)[]): $IntegerConfigEntry
 "stringEntry"(arg0: StringJS, arg1: StringJS, ...arg2: (StringJS)[]): $StringConfigEntry
}

export namespace $ConfigBuilder {
function builder<C>(arg0: $Function$$Type<($ConfigBuilder), (C)>): $ConfigBuilder$Builder<(C)>
const probejs$$marker: never
}
export class $ConfigBuilder$$Static implements $ConfigBuilder {


 "header"(...arg0: (StringJS)[]): $ConfigBuilder
static "builder"<C>(arg0: $Function$$Type<($ConfigBuilder), (C)>): $ConfigBuilder$Builder<(C)>
 "entry"<T>(arg0: StringJS, arg1: T, ...arg2: (StringJS)[]): $ConfigEntry<(T)>
 "enumEntry"<E extends $Enum<(E)>>(arg0: StringJS, arg1: E, ...arg2: (StringJS)[]): $EnumConfigEntry<(E)>
 "booleanEntry"(arg0: StringJS, arg1: boolean, ...arg2: (StringJS)[]): $BooleanConfigEntry
 "longEntry"(arg0: StringJS, arg1: long, ...arg2: (StringJS)[]): $LongConfigEntry
 "longEntry"(arg0: StringJS, arg1: long, arg2: long, arg3: long, ...arg4: (StringJS)[]): $LongConfigEntry
 "floatEntry"(arg0: StringJS, arg1: float, ...arg2: (StringJS)[]): $FloatConfigEntry
 "floatEntry"(arg0: StringJS, arg1: float, arg2: float, arg3: float, ...arg4: (StringJS)[]): $FloatConfigEntry
 "doubleEntry"(arg0: StringJS, arg1: double, arg2: double, arg3: double, ...arg4: (StringJS)[]): $DoubleConfigEntry
 "doubleEntry"(arg0: StringJS, arg1: double, ...arg2: (StringJS)[]): $DoubleConfigEntry
 "integerEntry"(arg0: StringJS, arg1: integer, arg2: integer, arg3: integer, ...arg4: (StringJS)[]): $IntegerConfigEntry
 "integerEntry"(arg0: StringJS, arg1: integer, ...arg2: (StringJS)[]): $IntegerConfigEntry
 "stringEntry"(arg0: StringJS, arg1: StringJS, ...arg2: (StringJS)[]): $StringConfigEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBuilder$$Type = ($ConfigBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBuilder_ = $ConfigBuilder$$Type;
}}
declare module "de.maxhenkel.voicechat.api.VoicechatSocket" {
import {$RawUdpPacket, $RawUdpPacket$$Type} from "de.maxhenkel.voicechat.api.RawUdpPacket"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"

export interface $VoicechatSocket {

 "read"(): $RawUdpPacket
 "close"(): void
 "open"(arg0: integer, arg1: StringJS): void
 "getLocalPort"(): integer
 "send"(arg0: (byte)[], arg1: $SocketAddress$$Type): void
 "isClosed"(): boolean
get "localPort"(): integer
get "closed"(): boolean
}

export namespace $VoicechatSocket {
const probejs$$marker: never
}
export class $VoicechatSocket$$Static implements $VoicechatSocket {


 "read"(): $RawUdpPacket
 "close"(): void
 "open"(arg0: integer, arg1: StringJS): void
 "getLocalPort"(): integer
 "send"(arg0: (byte)[], arg1: $SocketAddress$$Type): void
 "isClosed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoicechatSocket$$Type = ($VoicechatSocket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoicechatSocket_ = $VoicechatSocket$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.client.AudioPacketBuffer" {
import {$BlockingQueue, $BlockingQueue$$Type} from "java.util.concurrent.BlockingQueue"
import {$SoundPacket, $SoundPacket$$Type} from "de.maxhenkel.voicechat.voice.common.SoundPacket"

export class $AudioPacketBuffer {

constructor(arg0: integer)

public "poll"(arg0: $BlockingQueue$$Type<($SoundPacket$$Type<(any)>)>): $SoundPacket<(any)>
public "getSize"(): integer
public "clear"(): void
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AudioPacketBuffer$$Type = ($AudioPacketBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AudioPacketBuffer_ = $AudioPacketBuffer$$Type;
}}
declare module "de.maxhenkel.voicechat.api.RawUdpPacket" {
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"

export interface $RawUdpPacket {

 "getData"(): (byte)[]
 "getTimestamp"(): long
 "getSocketAddress"(): $SocketAddress
get "data"(): (byte)[]
get "timestamp"(): long
get "socketAddress"(): $SocketAddress
}

export namespace $RawUdpPacket {
const probejs$$marker: never
}
export class $RawUdpPacket$$Static implements $RawUdpPacket {


 "getData"(): (byte)[]
 "getTimestamp"(): long
 "getSocketAddress"(): $SocketAddress
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawUdpPacket$$Type = ($RawUdpPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawUdpPacket_ = $RawUdpPacket$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.server.PingManager$PingListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PingManager$PingListener {

 "onPong"(arg0: integer, arg1: long): void
 "onTimeout"(arg0: integer): void
 "onFailedAttempt"(arg0: integer): void
}

export namespace $PingManager$PingListener {
const probejs$$marker: never
}
export class $PingManager$PingListener$$Static implements $PingManager$PingListener {


 "onPong"(arg0: integer, arg1: long): void
 "onTimeout"(arg0: integer): void
 "onFailedAttempt"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PingManager$PingListener$$Type = ($PingManager$PingListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PingManager$PingListener_ = $PingManager$PingListener$$Type;
}}
declare module "de.maxhenkel.gravestone.corelib.death.Death" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $Death {


public "getTimestamp"(): long
public "getDimension"(): StringJS
public "toString"(): StringJS
public "getId"(): $UUID
public "toNBT"(arg0: $HolderLookup$Provider$$Type, arg1: boolean): $CompoundTag
public "toNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getBlockPos"(): $BlockPos
public "getModel"(): byte
public static "fromPlayer"(arg0: $Player$$Type): $Death
public "getPosZ"(): double
public "getPosX"(): double
public "getPosY"(): double
public "getAllItems"(): $NonNullList<($ItemStack)>
public "getPlayerName"(): StringJS
public "getPlayerUUID"(): $UUID
public static "fromNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $Death
public "getEquipment"(): $NonNullList<($ItemStack)>
public "getExperience"(): integer
public "getAdditionalItems"(): $NonNullList<($ItemStack)>
public "getMainInventory"(): $NonNullList<($ItemStack)>
public "getArmorInventory"(): $NonNullList<($ItemStack)>
public "getOffHandInventory"(): $NonNullList<($ItemStack)>
public "processDrops"(arg0: $Collection$$Type<($ItemEntity$$Type)>): void
get "timestamp"(): long
get "dimension"(): StringJS
get "id"(): $UUID
get "blockPos"(): $BlockPos
get "model"(): byte
get "posZ"(): double
get "posX"(): double
get "posY"(): double
get "allItems"(): $NonNullList<($ItemStack)>
get "playerName"(): StringJS
get "playerUUID"(): $UUID
get "equipment"(): $NonNullList<($ItemStack)>
get "experience"(): integer
get "additionalItems"(): $NonNullList<($ItemStack)>
get "mainInventory"(): $NonNullList<($ItemStack)>
get "armorInventory"(): $NonNullList<($ItemStack)>
get "offHandInventory"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Death$$Type = ($Death);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Death_ = $Death$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.common.NetworkMessage" {
import {$RawUdpPacket, $RawUdpPacket$$Type} from "de.maxhenkel.voicechat.api.RawUdpPacket"
import {$SocketAddress, $SocketAddress$$Type} from "java.net.SocketAddress"
import {$Server, $Server$$Type} from "de.maxhenkel.voicechat.voice.server.Server"
import {$Secret, $Secret$$Type} from "de.maxhenkel.voicechat.voice.common.Secret"
import {$ClientConnection, $ClientConnection$$Type} from "de.maxhenkel.voicechat.voice.server.ClientConnection"
import {$Packet, $Packet$$Type} from "de.maxhenkel.voicechat.voice.common.Packet"

export class $NetworkMessage {
static readonly "MAGIC_BYTE": byte

constructor(arg0: long, arg1: $Packet$$Type<(any)>)
constructor(arg0: $Packet$$Type<(any)>)

public "getAddress"(): $SocketAddress
public "getTimestamp"(): long
public "write"(arg0: $Secret$$Type): (byte)[]
public "getTTL"(): long
public "getPacket"(): $Packet<($Packet<(any)>)>
public static "readFromBytes"(arg0: $SocketAddress$$Type, arg1: $Secret$$Type, arg2: (byte)[], arg3: long): $NetworkMessage
public "writeServer"(arg0: $Server$$Type, arg1: $ClientConnection$$Type): (byte)[]
public static "readPacketServer"(arg0: $RawUdpPacket$$Type, arg1: $Server$$Type): $NetworkMessage
get "address"(): $SocketAddress
get "timestamp"(): long
get "tTL"(): long
get "packet"(): $Packet<($Packet<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkMessage$$Type = ($NetworkMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkMessage_ = $NetworkMessage$$Type;
}}
declare module "de.maxhenkel.voicechat.net.SecretPacket" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ServerConfig$Codec, $ServerConfig$Codec$$Type} from "de.maxhenkel.voicechat.config.ServerConfig$Codec"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$Packet, $Packet$$Type} from "de.maxhenkel.voicechat.net.Packet"
import {$ServerConfig, $ServerConfig$$Type} from "de.maxhenkel.voicechat.config.ServerConfig"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder, $StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket, $ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket, $ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$Secret, $Secret$$Type} from "de.maxhenkel.voicechat.voice.common.Secret"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CustomPacketPayload$FallbackProvider, $CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"

export class $SecretPacket implements $Packet<($SecretPacket)> {
static readonly "SECRET": $CustomPacketPayload$Type<($SecretPacket)>

constructor()
constructor(arg0: $ServerPlayer$$Type, arg1: $Secret$$Type, arg2: integer, arg3: $ServerConfig$$Type)

public "type"(): $CustomPacketPayload$Type<($SecretPacket)>
public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "getKeepAlive"(): integer
public "fromBytes"(arg0: $FriendlyByteBuf$$Type): $SecretPacket
public "getCodec"(): $ServerConfig$Codec
public "getVoiceHost"(): StringJS
public "getMtuSize"(): integer
public "getServerPort"(): integer
public "allowRecording"(): boolean
public "getSecret"(): $Secret
public "getPlayerUUID"(): $UUID
public "groupsEnabled"(): boolean
public "getVoiceChatDistance"(): double
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
get "keepAlive"(): integer
get "voiceHost"(): StringJS
get "mtuSize"(): integer
get "serverPort"(): integer
get "secret"(): $Secret
get "playerUUID"(): $UUID
get "voiceChatDistance"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecretPacket$$Type = ($SecretPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecretPacket_ = $SecretPacket$$Type;
}}
declare module "de.maxhenkel.voicechat.events.ClientVoiceChatDisconnectedEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $ClientVoiceChatDisconnectedEvent extends $Event {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientVoiceChatDisconnectedEvent$$Type = ($ClientVoiceChatDisconnectedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientVoiceChatDisconnectedEvent_ = $ClientVoiceChatDisconnectedEvent$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.common.PingPacket" {
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Packet, $Packet$$Type} from "de.maxhenkel.voicechat.voice.common.Packet"

export class $PingPacket implements $Packet<($PingPacket)> {

constructor(arg0: $UUID$$Type, arg1: long)
constructor()

public "getTimestamp"(): long
public "toBytes"(arg0: $FriendlyByteBuf$$Type): void
public "getId"(): $UUID
public "fromBytes"(arg0: $FriendlyByteBuf$$Type): $PingPacket
public "getTTL"(): long
get "timestamp"(): long
get "id"(): $UUID
get "tTL"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PingPacket$$Type = ($PingPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PingPacket_ = $PingPacket$$Type;
}}
declare module "de.maxhenkel.voicechat.plugins.CategoryManager" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$VolumeCategoryImpl, $VolumeCategoryImpl$$Type} from "de.maxhenkel.voicechat.plugins.impl.VolumeCategoryImpl"

export class $CategoryManager {

constructor()

public "addCategory"(arg0: $VolumeCategoryImpl$$Type): void
public "removeCategory"(arg0: StringJS): $VolumeCategoryImpl
public "getCategories"(): $Collection<($VolumeCategoryImpl)>
get "categories"(): $Collection<($VolumeCategoryImpl)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CategoryManager$$Type = ($CategoryManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CategoryManager_ = $CategoryManager$$Type;
}}
declare module "de.maxhenkel.voicechat.events.VoiceChatCompatibilityCheckSucceededEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $VoiceChatCompatibilityCheckSucceededEvent extends $Event {

constructor(arg0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoiceChatCompatibilityCheckSucceededEvent$$Type = ($VoiceChatCompatibilityCheckSucceededEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoiceChatCompatibilityCheckSucceededEvent_ = $VoiceChatCompatibilityCheckSucceededEvent$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.client.speaker.Speaker" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"

export interface $Speaker {

 "close"(): void
 "open"(): void
 "play"(arg0: (short)[], arg1: float, arg2: $Vec3$$Type, arg3: StringJS, arg4: float): void
 "play"(arg0: (short)[], arg1: float, arg2: StringJS): void
}

export namespace $Speaker {
const probejs$$marker: never
}
export class $Speaker$$Static implements $Speaker {


 "close"(): void
 "open"(): void
 "play"(arg0: (short)[], arg1: float, arg2: $Vec3$$Type, arg3: StringJS, arg4: float): void
 "play"(arg0: (short)[], arg1: float, arg2: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Speaker$$Type = ($Speaker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Speaker_ = $Speaker$$Type;
}}
declare module "de.maxhenkel.voicechat.voice.server.PingManager" {
import {$Server, $Server$$Type} from "de.maxhenkel.voicechat.voice.server.Server"
import {$ClientConnection, $ClientConnection$$Type} from "de.maxhenkel.voicechat.voice.server.ClientConnection"
import {$PingManager$PingListener, $PingManager$PingListener$$Type} from "de.maxhenkel.voicechat.voice.server.PingManager$PingListener"
import {$PingPacket, $PingPacket$$Type} from "de.maxhenkel.voicechat.voice.common.PingPacket"

export class $PingManager {

constructor(arg0: $Server$$Type)

public "sendPing"(arg0: $ClientConnection$$Type, arg1: long, arg2: integer, arg3: $PingManager$PingListener$$Type): void
public "onPongPacket"(arg0: $PingPacket$$Type): void
public "checkTimeouts"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PingManager$$Type = ($PingManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PingManager_ = $PingManager$$Type;
}}
