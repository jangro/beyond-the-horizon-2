declare module "dev.gigaherz.graph3.GraphObject" {
import {$Mergeable, $Mergeable$$Type} from "dev.gigaherz.graph3.Mergeable"
import {$Graph, $Graph$$Type} from "dev.gigaherz.graph3.Graph"

export interface $GraphObject<T extends $Mergeable<(T)>> {

 "getGraph"(): $Graph<(T)>
 "setGraph"(arg0: $Graph$$Type<(T)>): void
get "graph"(): $Graph<(T)>
set "graph"(value: $Graph$$Type<(T)>)
}

export namespace $GraphObject {
const probejs$$marker: never
}
export class $GraphObject$$Static<T extends $Mergeable<(T)>> implements $GraphObject {


 "getGraph"(): $Graph<(T)>
 "setGraph"(arg0: $Graph$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphObject$$Type<T> = ($GraphObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GraphObject_<T> = $GraphObject$$Type<(T)>;
}}
declare module "dev.gigaherz.graph3.ContextDataFactory" {
import {$Mergeable, $Mergeable$$Type} from "dev.gigaherz.graph3.Mergeable"
import {$Graph, $Graph$$Type} from "dev.gigaherz.graph3.Graph"

export interface $ContextDataFactory<T extends $Mergeable<(T)>> {

 "create"(arg0: $Graph$$Type<(T)>): T

(arg0: $Graph<(T)>): T
}

export namespace $ContextDataFactory {
const probejs$$marker: never
}
export class $ContextDataFactory$$Static<T extends $Mergeable<(T)>> implements $ContextDataFactory {


 "create"(arg0: $Graph$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextDataFactory$$Type<T> = ((arg0: $Graph<(T)>) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextDataFactory_<T> = $ContextDataFactory$$Type<(T)>;
}}
declare module "dev.gigaherz.graph3.Mergeable$Dummy" {
import {$Mergeable, $Mergeable$$Type} from "dev.gigaherz.graph3.Mergeable"

export class $Mergeable$Dummy implements $Mergeable<($Mergeable$Dummy)> {


public "copy"(): $Mergeable<(any)>
public "mergeWith"(arg0: $Mergeable$$Type<(any)>): $Mergeable<(any)>
public "mergeWith"(arg0: $Mergeable$Dummy$$Type): $Mergeable$Dummy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mergeable$Dummy$$Type = ($Mergeable$Dummy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mergeable$Dummy_ = $Mergeable$Dummy$$Type;
}}
declare module "dev.gigaherz.packingtape.tape.TapeItem" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $TapeItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getMaxDamage"(arg0: $ItemStack$$Type): integer
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TapeItem$$Type = ($TapeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TapeItem_ = $TapeItem$$Type;
}}
declare module "dev.gigaherz.graph3.Graph" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Mergeable, $Mergeable$$Type} from "dev.gigaherz.graph3.Mergeable"
import {$GraphObject, $GraphObject$$Type} from "dev.gigaherz.graph3.GraphObject"
import {$ContextDataFactory, $ContextDataFactory$$Type} from "dev.gigaherz.graph3.ContextDataFactory"

export class $Graph<T extends $Mergeable<(T)>> {

constructor()

public "getObjects"(): $Collection<($GraphObject<(T)>)>
public "remove"(arg0: $GraphObject$$Type<(T)>): void
public "contains"(arg0: $GraphObject$$Type<(T)>): boolean
public static "connect"<T extends $Mergeable<(T)>>(arg0: $GraphObject$$Type<(T)>, arg1: $GraphObject$$Type<(T)>): void
public static "connect"<T extends $Mergeable<(T)>>(arg0: $GraphObject$$Type<(T)>, arg1: $GraphObject$$Type<(T)>, arg2: $ContextDataFactory$$Type<(T)>): void
public static "connect"<T extends $Mergeable<(T)>>(arg0: $GraphObject$$Type<(T)>, arg1: $GraphObject$$Type<(T)>, arg2: $Supplier$$Type<($Graph$$Type<(T)>)>, arg3: $ContextDataFactory$$Type<(T)>): void
public static "integrate"<T extends $Mergeable<(T)>>(arg0: $GraphObject$$Type<(T)>, arg1: $List$$Type<($GraphObject$$Type<(T)>)>, arg2: $Supplier$$Type<($Graph$$Type<(T)>)>, arg3: $ContextDataFactory$$Type<(T)>): void
public static "integrate"<T extends $Mergeable<(T)>>(arg0: $GraphObject$$Type<(T)>, arg1: $List$$Type<($GraphObject$$Type<(T)>)>): void
public static "integrate"<T extends $Mergeable<(T)>>(arg0: $GraphObject$$Type<(T)>, arg1: $List$$Type<($GraphObject$$Type<(T)>)>, arg2: $ContextDataFactory$$Type<(T)>): void
public "getContextData"(): T
public "setContextData"(arg0: T): void
public "addNodeAndEdges"(arg0: $GraphObject$$Type<(T)>, arg1: $Iterable$$Type<($GraphObject$$Type<(T)>)>): void
public "addDirectedEdges"(arg0: $GraphObject$$Type<(T)>, arg1: $Iterable$$Type<($GraphObject$$Type<(T)>)>): void
public "removeSingleEdge"(arg0: $GraphObject$$Type<(T)>, arg1: $GraphObject$$Type<(T)>): void
public "addSingleEdge"(arg0: $GraphObject$$Type<(T)>, arg1: $GraphObject$$Type<(T)>): void
public "acquireObjects"(): $Collection<($GraphObject<(T)>)>
public "releaseObjects"(): void
public "getNeighbours"(arg0: $GraphObject$$Type<(T)>): $Collection<($GraphObject<(T)>)>
public "removeNonDirectionalSingleEdge"(arg0: $GraphObject$$Type<(T)>, arg1: $GraphObject$$Type<(T)>): void
public "getNonDirectionalNeighbours"(arg0: $GraphObject$$Type<(T)>): $Collection<($GraphObject<(T)>)>
get "objects"(): $Collection<($GraphObject<(T)>)>
get "contextData"(): T
set "contextData"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Graph$$Type<T> = ($Graph<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Graph_<T> = $Graph$$Type<(T)>;
}}
declare module "dev.gigaherz.packingtape.tape.PackagedBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PackagedBlock extends $Block implements $EntityBlock {
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
 "descriptionId": string
static readonly "UNPACKING": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): $ItemInteractionResult
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
/**
 * 
 * @deprecated
 */
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "findFacingProperty"(arg0: $BlockState$$Type): $EnumProperty<($Direction)>
public static "setTileEntityNBT"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $CompoundTag$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PackagedBlock$$Type = ($PackagedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PackagedBlock_ = $PackagedBlock$$Type;
}}
declare module "dev.gigaherz.graph3.Mergeable" {
import {$Mergeable$Dummy, $Mergeable$Dummy$$Type} from "dev.gigaherz.graph3.Mergeable$Dummy"

export interface $Mergeable<T extends $Mergeable<(T)>> {

 "copy"(): T
 "mergeWith"(arg0: T): T
}

export namespace $Mergeable {
const DUMMY: $Mergeable$Dummy
const probejs$$marker: never
}
export class $Mergeable$$Static<T extends $Mergeable<(T)>> implements $Mergeable {
static readonly "DUMMY": $Mergeable$Dummy


 "copy"(): T
 "mergeWith"(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mergeable$$Type<T> = ($Mergeable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mergeable_<T> = $Mergeable$$Type<(T)>;
}}
