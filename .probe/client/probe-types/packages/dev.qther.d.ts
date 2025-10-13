declare module "dev.qther.ars_controle.item.RemoteItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ModItem, $ModItem$$Type} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IRadialProvider, $IRadialProvider$$Type} from "com.hollingsworth.arsnouveau.api.item.IRadialProvider"

export class $RemoteItem extends $ModItem implements $IRadialProvider {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(arg0: $ItemStack$$Type): $Component
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onRadialKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public "forKey"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoteItem$$Type = ($RemoteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RemoteItem_ = $RemoteItem$$Type;
}}
declare module "dev.qther.ars_controle.mixin.LevelRendererInvoker" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"

export interface $LevelRendererInvoker {

}

export namespace $LevelRendererInvoker {
function invokeRenderShape(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $VoxelShape$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: float, arg8: float, arg9: float): void
const probejs$$marker: never
}
export class $LevelRendererInvoker$$Static implements $LevelRendererInvoker {


static "invokeRenderShape"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $VoxelShape$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: float, arg8: float, arg9: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererInvoker$$Type = ($LevelRendererInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererInvoker_ = $LevelRendererInvoker$$Type;
}}
declare module "dev.qther.ars_controle.block.ContextualAnalogSignalling" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ContextualAnalogSignalling {

 "hasAnalogOutputSignalGivenContext"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean

(arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState, arg3: $Direction): boolean
}

export namespace $ContextualAnalogSignalling {
const probejs$$marker: never
}
export class $ContextualAnalogSignalling$$Static implements $ContextualAnalogSignalling {


 "hasAnalogOutputSignalGivenContext"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextualAnalogSignalling$$Type = ((arg0: $LevelAccessor, arg1: $BlockPos, arg2: $BlockState, arg3: $Direction) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextualAnalogSignalling_ = $ContextualAnalogSignalling$$Type;
}}
declare module "dev.qther.ars_controle.block.WarpingSpellPrismBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPrismaticBlock, $IPrismaticBlock$$Type} from "com.hollingsworth.arsnouveau.api.block.IPrismaticBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ModBlock, $ModBlock$$Type} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WarpingSpellPrismBlock extends $ModBlock implements $IPrismaticBlock, $EntityBlock {
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

constructor()

public "onHit"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "changeSpellLevel"(arg0: $ServerLevel$$Type, arg1: $EntityProjectileSpell$$Type): $EntityProjectileSpell
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarpingSpellPrismBlock$$Type = ($WarpingSpellPrismBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WarpingSpellPrismBlock_ = $WarpingSpellPrismBlock$$Type;
}}
declare module "dev.qther.ars_controle.item.PortableBrazierRelayItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RitualBrazierTile, $RitualBrazierTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.RitualBrazierTile"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AbstractRitual, $AbstractRitual$$Type} from "com.hollingsworth.arsnouveau.api.ritual.AbstractRitual"
import {$ModItem, $ModItem$$Type} from "com.hollingsworth.arsnouveau.common.items.ModItem"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PortableBrazierRelayItem extends $ModItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "clearCache"(): void
public "getName"(arg0: $ItemStack$$Type): $Component
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "getBrazier"(arg0: $Entity$$Type, arg1: $ItemStack$$Type): $RitualBrazierTile
public static "canRelay"(arg0: $AbstractRitual$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getRelayedRituals"(): $Map<($AbstractRitual), ($Player)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableBrazierRelayItem$$Type = ($PortableBrazierRelayItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PortableBrazierRelayItem_ = $PortableBrazierRelayItem$$Type;
}}
declare module "dev.qther.ars_controle.block.ScryersLinkageBlock" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$TickableModBlock, $TickableModBlock$$Type} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ContextualAnalogSignalling, $ContextualAnalogSignalling$$Type} from "dev.qther.ars_controle.block.ContextualAnalogSignalling"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ScryersLinkageBlock extends $TickableModBlock implements $EntityBlock, $ContextualAnalogSignalling {
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

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "never"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "hasAnalogOutputSignalGivenContext"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScryersLinkageBlock$$Type = ($ScryersLinkageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScryersLinkageBlock_ = $ScryersLinkageBlock$$Type;
}}
declare module "dev.qther.ars_controle.block.TemporalStabilitySensorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ModBlock, $ModBlock$$Type} from "com.hollingsworth.arsnouveau.common.block.ModBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TemporalStabilitySensorBlock extends $ModBlock {
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

constructor()

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalStabilitySensorBlock$$Type = ($TemporalStabilitySensorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalStabilitySensorBlock_ = $TemporalStabilitySensorBlock$$Type;
}}
declare module "dev.qther.ars_controle.block.ScrollHolderBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$ModBlock, $ModBlock$$Type} from "com.hollingsworth.arsnouveau.common.block.ModBlock"

export class $ScrollHolderBlock extends $ModBlock implements $EntityBlock {
static readonly "HAS_SCROLL": $BooleanProperty
static readonly "DOWN": $VoxelShape
static readonly "WEST": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "NORTH": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UP": $VoxelShape
static readonly "SOUTH": $VoxelShape
static readonly "EAST": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrollHolderBlock$$Type = ($ScrollHolderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScrollHolderBlock_ = $ScrollHolderBlock$$Type;
}}
declare module "dev.qther.ars_controle.mixin.AbstractRitualInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractRitualInvoker {

 "invokeTick"(): void

(): void
}

export namespace $AbstractRitualInvoker {
const probejs$$marker: never
}
export class $AbstractRitualInvoker$$Static implements $AbstractRitualInvoker {


 "invokeTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRitualInvoker$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRitualInvoker_ = $AbstractRitualInvoker$$Type;
}}
