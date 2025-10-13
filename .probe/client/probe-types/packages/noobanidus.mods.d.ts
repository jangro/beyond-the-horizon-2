declare module "noobanidus.mods.lootr.common.advancement.LootedStatTrigger" {
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ILootedStatTrigger, $ILootedStatTrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.ILootedStatTrigger"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LootedStatTrigger$TriggerInstance, $LootedStatTrigger$TriggerInstance$$Type} from "noobanidus.mods.lootr.common.advancement.LootedStatTrigger$TriggerInstance"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export class $LootedStatTrigger extends $SimpleCriterionTrigger<($LootedStatTrigger$TriggerInstance)> implements $ILootedStatTrigger {

constructor()

public "trigger"(player: $ServerPlayer$$Type): void
public static "looted"(count: integer): $Criterion<($LootedStatTrigger$TriggerInstance)>
public "codec"(): $Codec<($LootedStatTrigger$TriggerInstance)>
public "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootedStatTrigger$$Type = ($LootedStatTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootedStatTrigger_ = $LootedStatTrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.block.TrophyBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrophyBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "rotate"(p_60530_: $BlockState$$Type, p_60531_: $Rotation$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "mirror"(p_60528_: $BlockState$$Type, p_60529_: $Mirror$$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrophyBlock$$Type = ($TrophyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrophyBlock_ = $TrophyBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.advancement.ContainerTrigger$TriggerInstance" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ContainerTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($ContainerTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(player: $ServerPlayer$$Type, container: $UUID$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerTrigger$TriggerInstance_ = $ContainerTrigger$TriggerInstance$$Type;
}}
declare module "noobanidus.mods.lootr.common.advancement.ContainerTrigger" {
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ITrigger, $ITrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.ITrigger"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ContainerTrigger$TriggerInstance, $ContainerTrigger$TriggerInstance$$Type} from "noobanidus.mods.lootr.common.advancement.ContainerTrigger$TriggerInstance"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"
import {$IContainerTrigger, $IContainerTrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.IContainerTrigger"

export class $ContainerTrigger extends $SimpleCriterionTrigger<($ContainerTrigger$TriggerInstance)> implements $IContainerTrigger {

constructor()

public "trigger"(player: $ServerPlayer$$Type, condition: $UUID$$Type): void
public static "looted"(trigger: $ITrigger$$Type): $Criterion<($ContainerTrigger$TriggerInstance)>
public "codec"(): $Codec<($ContainerTrigger$TriggerInstance)>
public "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerTrigger$$Type = ($ContainerTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerTrigger_ = $ContainerTrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.api.advancement.ILootedStatTrigger" {
import {$ITrigger, $ITrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.ITrigger"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export interface $ILootedStatTrigger extends $ITrigger {

 "trigger"(arg0: $ServerPlayer$$Type): void
 "getTrigger"(): $CriterionTrigger<(any)>

(arg0: $ServerPlayer): void
}

export namespace $ILootedStatTrigger {
const probejs$$marker: never
}
export class $ILootedStatTrigger$$Static implements $ILootedStatTrigger {


 "trigger"(arg0: $ServerPlayer$$Type): void
 "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootedStatTrigger$$Type = ((arg0: $ServerPlayer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootedStatTrigger_ = $ILootedStatTrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.block.LootrBarrelBlock" {
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
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BarrelBlock, $BarrelBlock$$Type} from "net.minecraft.world.level.block.BarrelBlock"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LootrBarrelBlock extends $BarrelBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BarrelBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
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

constructor(p_49046_: $BlockBehaviour$Properties$$Type)

public "tick"(pState: $BlockState$$Type, pLevel: $ServerLevel$$Type, pPos: $BlockPos$$Type, pRandom: $RandomSource$$Type): void
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, trace: $BlockHitResult$$Type): $InteractionResult
public "playerDestroy"(level: $Level$$Type, player: $Player$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type, itemStack: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "triggerEvent"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, id: integer, param: integer): boolean
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "hasAnalogOutputSignal"(pState: $BlockState$$Type): boolean
public "getDestroyProgress"(pBlockState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getAnalogOutputSignal"(pBlockState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type): integer
public "getExplosionResistance"(): float
public "asHolder"(): $Holder<(any)>
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrBarrelBlock$$Type = ($LootrBarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootrBarrelBlock_ = $LootrBarrelBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.api.advancement.IAdvancementTrigger" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ITrigger, $ITrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.ITrigger"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export interface $IAdvancementTrigger extends $ITrigger {

 "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type): void
 "getTrigger"(): $CriterionTrigger<(any)>

(arg0: $ServerPlayer, arg1: $ResourceLocation): void
}

export namespace $IAdvancementTrigger {
const probejs$$marker: never
}
export class $IAdvancementTrigger$$Static implements $IAdvancementTrigger {


 "trigger"(arg0: $ServerPlayer$$Type, arg1: $ResourceLocation$$Type): void
 "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdvancementTrigger$$Type = ((arg0: $ServerPlayer, arg1: $ResourceLocation) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdvancementTrigger_ = $IAdvancementTrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.block.LootrShulkerBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ShulkerBoxBlock, $ShulkerBoxBlock$$Type} from "net.minecraft.world.level.block.ShulkerBoxBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $LootrShulkerBlock extends $ShulkerBoxBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ShulkerBoxBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "CONTENTS": $ResourceLocation
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, trace: $BlockHitResult$$Type): $InteractionResult
public "playerDestroy"(level: $Level$$Type, player: $Player$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type, itemStack: $ItemStack$$Type): void
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getColor"(): $DyeColor
public "hasAnalogOutputSignal"(pState: $BlockState$$Type): boolean
public "getDestroyProgress"(p_60466_: $BlockState$$Type, p_60467_: $Player$$Type, p_60468_: $BlockGetter$$Type, p_60469_: $BlockPos$$Type): float
public "getAnalogOutputSignal"(pBlockState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type): integer
public "getExplosionResistance"(): float
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "appendHoverText"(p_56193_: $ItemStack$$Type, p_339693_: $Item$TooltipContext$$Type, p_56195_: $List$$Type<($Component$$Type)>, p_56196_: $TooltipFlag$$Type): void
public "asHolder"(): $Holder<(any)>
get "color"(): $DyeColor
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrShulkerBlock$$Type = ($LootrShulkerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootrShulkerBlock_ = $LootrShulkerBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.api.advancement.IContainerTrigger" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ITrigger, $ITrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.ITrigger"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export interface $IContainerTrigger extends $ITrigger {

 "trigger"(arg0: $ServerPlayer$$Type, arg1: $UUID$$Type): void
 "getTrigger"(): $CriterionTrigger<(any)>

(arg0: $ServerPlayer, arg1: $UUID): void
}

export namespace $IContainerTrigger {
const probejs$$marker: never
}
export class $IContainerTrigger$$Static implements $IContainerTrigger {


 "trigger"(arg0: $ServerPlayer$$Type, arg1: $UUID$$Type): void
 "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerTrigger$$Type = ((arg0: $ServerPlayer, arg1: $UUID) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerTrigger_ = $IContainerTrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.mixins.MixinDimensionDataStorage" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$SavedData, $SavedData$$Type} from "net.minecraft.world.level.saveddata.SavedData"

export interface $MixinDimensionDataStorage {

 "getCache"(): $Map<(StringJS), ($SavedData)>

(): $Map$$Type<(StringJS), ($SavedData$$Type)>
get "cache"(): $Map<(StringJS), ($SavedData)>
}

export namespace $MixinDimensionDataStorage {
const probejs$$marker: never
}
export class $MixinDimensionDataStorage$$Static implements $MixinDimensionDataStorage {


 "getCache"(): $Map<(StringJS), ($SavedData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinDimensionDataStorage$$Type = (() => $Map$$Type<(StringJS), ($SavedData$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinDimensionDataStorage_ = $MixinDimensionDataStorage$$Type;
}}
declare module "noobanidus.mods.lootr.common.mixins.AccessorMixinDimensionDataStorage" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$SavedData, $SavedData$$Type} from "net.minecraft.world.level.saveddata.SavedData"

export interface $AccessorMixinDimensionDataStorage {

 "getCache"(): $Map<(StringJS), ($SavedData)>

(): $Map$$Type<(StringJS), ($SavedData$$Type)>
get "cache"(): $Map<(StringJS), ($SavedData)>
}

export namespace $AccessorMixinDimensionDataStorage {
const probejs$$marker: never
}
export class $AccessorMixinDimensionDataStorage$$Static implements $AccessorMixinDimensionDataStorage {


 "getCache"(): $Map<(StringJS), ($SavedData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinDimensionDataStorage$$Type = (() => $Map$$Type<(StringJS), ($SavedData$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMixinDimensionDataStorage_ = $AccessorMixinDimensionDataStorage$$Type;
}}
declare module "noobanidus.mods.lootr.common.block.LootrTrappedChestBlock" {
import {$ChestType, $ChestType$$Type} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChestBlock, $ChestBlock$$Type} from "net.minecraft.world.level.block.ChestBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LootrTrappedChestBlock extends $ChestBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "EVENT_SET_OPEN_COUNT": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, trace: $BlockHitResult$$Type): $InteractionResult
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "playerDestroy"(level: $Level$$Type, player: $Player$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type, itemStack: $ItemStack$$Type): void
public "newBlockEntity"(pPos: $BlockPos$$Type, pState: $BlockState$$Type): $BlockEntity
public "isSignalSource"(pState: $BlockState$$Type): boolean
public "getSignal"(pBlockState: $BlockState$$Type, pBlockAccess: $BlockGetter$$Type, pPos: $BlockPos$$Type, pSide: $Direction$$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getDestroyProgress"(p_60466_: $BlockState$$Type, p_60467_: $Player$$Type, p_60468_: $BlockGetter$$Type, p_60469_: $BlockPos$$Type): float
public "getAnalogOutputSignal"(pBlockState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type): integer
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getDirectSignal"(pBlockState: $BlockState$$Type, pBlockAccess: $BlockGetter$$Type, pPos: $BlockPos$$Type, pSide: $Direction$$Type): integer
public "getExplosionResistance"(): float
public "asHolder"(): $Holder<(any)>
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrTrappedChestBlock$$Type = ($LootrTrappedChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootrTrappedChestBlock_ = $LootrTrappedChestBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.api.advancement.ITrigger" {
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export interface $ITrigger {

 "getTrigger"(): $CriterionTrigger<(any)>
get "trigger"(): $CriterionTrigger<(any)>
}

export namespace $ITrigger {
const probejs$$marker: never
}
export class $ITrigger$$Static implements $ITrigger {


 "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrigger$$Type = ($ITrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITrigger_ = $ITrigger$$Type;
}}
declare module "noobanidus.mods.lootr.neoforge.block.LootrNeoForgeBarrelBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootrBarrelBlock, $LootrBarrelBlock$$Type} from "noobanidus.mods.lootr.common.block.LootrBarrelBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BarrelBlock, $BarrelBlock$$Type} from "net.minecraft.world.level.block.BarrelBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootrNeoForgeBarrelBlock extends $LootrBarrelBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BarrelBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
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

constructor(p_49046_: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrNeoForgeBarrelBlock$$Type = ($LootrNeoForgeBarrelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootrNeoForgeBarrelBlock_ = $LootrNeoForgeBarrelBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.advancement.AdvancementTrigger$TriggerInstance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AdvancementTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($AdvancementTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, advancement: $Optional$$Type<($ResourceLocation$$Type)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(advancementId: $ResourceLocation$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "advancement"(): $Optional<($ResourceLocation)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "advancement"?: ($ResourceLocation$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, advancement?: ($ResourceLocation$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementTrigger$TriggerInstance_ = $AdvancementTrigger$TriggerInstance$$Type;
}}
declare module "noobanidus.mods.lootr.common.advancement.AdvancementTrigger" {
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$IAdvancementTrigger, $IAdvancementTrigger$$Type} from "noobanidus.mods.lootr.common.api.advancement.IAdvancementTrigger"
import {$AdvancementTrigger$TriggerInstance, $AdvancementTrigger$TriggerInstance$$Type} from "noobanidus.mods.lootr.common.advancement.AdvancementTrigger$TriggerInstance"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTrigger, $CriterionTrigger$$Type} from "net.minecraft.advancements.CriterionTrigger"

export class $AdvancementTrigger extends $SimpleCriterionTrigger<($AdvancementTrigger$TriggerInstance)> implements $IAdvancementTrigger {

constructor()

public static "completed"(advancementId: $ResourceLocation$$Type): $Criterion<($AdvancementTrigger$TriggerInstance)>
public "trigger"(player: $ServerPlayer$$Type, advancementId: $ResourceLocation$$Type): void
public "codec"(): $Codec<($AdvancementTrigger$TriggerInstance)>
public "getTrigger"(): $CriterionTrigger<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementTrigger$$Type = ($AdvancementTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementTrigger_ = $AdvancementTrigger$$Type;
}}
declare module "noobanidus.mods.lootr.common.block.LootrInventoryBlock" {
import {$ChestType, $ChestType$$Type} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChestBlock, $ChestBlock$$Type} from "net.minecraft.world.level.block.ChestBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LootrInventoryBlock extends $ChestBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "EVENT_SET_OPEN_COUNT": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "tick"(pState: $BlockState$$Type, pLevel: $ServerLevel$$Type, pPos: $BlockPos$$Type, pRandom: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, trace: $BlockHitResult$$Type): $InteractionResult
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "playerDestroy"(level: $Level$$Type, player: $Player$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type, itemStack: $ItemStack$$Type): void
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "isSignalSource"(pState: $BlockState$$Type): boolean
public "getSignal"(pBlockState: $BlockState$$Type, pBlockAccess: $BlockGetter$$Type, pPos: $BlockPos$$Type, pSide: $Direction$$Type): integer
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(pState: $BlockState$$Type): boolean
public "getDestroyProgress"(p_60466_: $BlockState$$Type, p_60467_: $Player$$Type, p_60468_: $BlockGetter$$Type, p_60469_: $BlockPos$$Type): float
public "getAnalogOutputSignal"(pBlockState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type): integer
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getDirectSignal"(pBlockState: $BlockState$$Type, pBlockAccess: $BlockGetter$$Type, pPos: $BlockPos$$Type, pSide: $Direction$$Type): integer
public "getExplosionResistance"(): float
public "asHolder"(): $Holder<(any)>
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrInventoryBlock$$Type = ($LootrInventoryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootrInventoryBlock_ = $LootrInventoryBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.mixins.AccessorMixinBaseContainerBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $AccessorMixinBaseContainerBlockEntity {

 "invokeGetItems"(): $NonNullList<($ItemStack)>
 "getLockKey"(): $LockCode
 "setLockKey"(arg0: $LockCode$$Type): void
get "lockKey"(): $LockCode
set "lockKey"(value: $LockCode$$Type)
}

export namespace $AccessorMixinBaseContainerBlockEntity {
const probejs$$marker: never
}
export class $AccessorMixinBaseContainerBlockEntity$$Static implements $AccessorMixinBaseContainerBlockEntity {


 "invokeGetItems"(): $NonNullList<($ItemStack)>
 "getLockKey"(): $LockCode
 "setLockKey"(arg0: $LockCode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinBaseContainerBlockEntity$$Type = ($AccessorMixinBaseContainerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMixinBaseContainerBlockEntity_ = $AccessorMixinBaseContainerBlockEntity$$Type;
}}
declare module "noobanidus.mods.lootr.common.advancement.LootedStatTrigger$TriggerInstance" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LootedStatTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($LootedStatTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, score: $MinMaxBounds$Ints$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(player: $ServerPlayer$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "score"(): $MinMaxBounds$Ints
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootedStatTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "score"?: $MinMaxBounds$Ints$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, score?: $MinMaxBounds$Ints$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootedStatTrigger$TriggerInstance_ = $LootedStatTrigger$TriggerInstance$$Type;
}}
declare module "noobanidus.mods.lootr.common.block.LootrChestBlock" {
import {$ChestType, $ChestType$$Type} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChestBlock, $ChestBlock$$Type} from "net.minecraft.world.level.block.ChestBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LootrChestBlock extends $ChestBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "EVENT_SET_OPEN_COUNT": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ChestType)>
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "tick"(pState: $BlockState$$Type, pLevel: $ServerLevel$$Type, pPos: $BlockPos$$Type, pRandom: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, trace: $BlockHitResult$$Type): $InteractionResult
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "playerDestroy"(level: $Level$$Type, player: $Player$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type, itemStack: $ItemStack$$Type): void
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(pLevel: $Level$$Type, pState: $BlockState$$Type, pBlockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(pState: $BlockState$$Type): boolean
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getAnalogOutputSignal"(pBlockState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type): integer
public "getMenuProvider"(state: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getExplosionResistance"(): float
public "asHolder"(): $Holder<(any)>
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootrChestBlock$$Type = ($LootrChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootrChestBlock_ = $LootrChestBlock$$Type;
}}
declare module "noobanidus.mods.lootr.common.mixins.AccessorMixinVehicleEntity" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $AccessorMixinVehicleEntity {

 "invokeGetDropItem"(): $Item

(): $Item$$Type
}

export namespace $AccessorMixinVehicleEntity {
const probejs$$marker: never
}
export class $AccessorMixinVehicleEntity$$Static implements $AccessorMixinVehicleEntity {


 "invokeGetDropItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMixinVehicleEntity$$Type = (() => $Item$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMixinVehicleEntity_ = $AccessorMixinVehicleEntity$$Type;
}}
