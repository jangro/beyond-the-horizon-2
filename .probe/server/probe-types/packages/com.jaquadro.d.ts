declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributesModifiable" {
import {$LockAttribute, $LockAttribute$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.LockAttribute"
import {$IDrawerAttributes, $IDrawerAttributes$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributes"

export interface $IDrawerAttributesModifiable extends $IDrawerAttributes {

 "setPriority"(arg0: integer): boolean
 "setIsShowingQuantity"(arg0: boolean): boolean
 "setHasFillLevel"(arg0: boolean): boolean
 "setIsDictConvertible"(arg0: boolean): boolean
 "setIsUnlimitedStorage"(arg0: boolean): boolean
 "setIsUnlimitedVending"(arg0: boolean): boolean
 "setIsBalancedFill"(arg0: boolean): boolean
 "setItemLocked"(arg0: $LockAttribute$$Type, arg1: boolean): boolean
 "setIsConcealed"(arg0: boolean): boolean
 "setIsSealed"(arg0: boolean): boolean
 "setIsVoid"(arg0: boolean): boolean
 "isSealed"(): boolean
 "getPriority"(): integer
 "isVoid"(): boolean
 "isShowingQuantity"(): boolean
 "isUnlimitedStorage"(): boolean
 "isUnlimitedVending"(): boolean
 "isDictConvertible"(): boolean
 "isConcealed"(): boolean
 "canItemLock"(arg0: $LockAttribute$$Type): boolean
 "isBalancedFill"(): boolean
 "isItemLocked"(arg0: $LockAttribute$$Type): boolean
 "hasFillLevel"(): boolean
set "priority"(value: integer)
get "sealed"(): boolean
get "priority"(): integer
get "void"(): boolean
get "showingQuantity"(): boolean
get "unlimitedStorage"(): boolean
get "unlimitedVending"(): boolean
get "dictConvertible"(): boolean
get "concealed"(): boolean
get "balancedFill"(): boolean
}

export namespace $IDrawerAttributesModifiable {
const probejs$$marker: never
}
export class $IDrawerAttributesModifiable$$Static implements $IDrawerAttributesModifiable {


 "setPriority"(arg0: integer): boolean
 "setIsShowingQuantity"(arg0: boolean): boolean
 "setHasFillLevel"(arg0: boolean): boolean
 "setIsDictConvertible"(arg0: boolean): boolean
 "setIsUnlimitedStorage"(arg0: boolean): boolean
 "setIsUnlimitedVending"(arg0: boolean): boolean
 "setIsBalancedFill"(arg0: boolean): boolean
 "setItemLocked"(arg0: $LockAttribute$$Type, arg1: boolean): boolean
 "setIsConcealed"(arg0: boolean): boolean
 "setIsSealed"(arg0: boolean): boolean
 "setIsVoid"(arg0: boolean): boolean
 "isSealed"(): boolean
 "getPriority"(): integer
 "isVoid"(): boolean
 "isShowingQuantity"(): boolean
 "isUnlimitedStorage"(): boolean
 "isUnlimitedVending"(): boolean
 "isDictConvertible"(): boolean
 "isConcealed"(): boolean
 "canItemLock"(arg0: $LockAttribute$$Type): boolean
 "isBalancedFill"(): boolean
 "isItemLocked"(arg0: $LockAttribute$$Type): boolean
 "hasFillLevel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributesModifiable$$Type = ($IDrawerAttributesModifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerAttributesModifiable_ = $IDrawerAttributesModifiable$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacing" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockMeta, $BlockMeta$$Type} from "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMeta"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMetaFacing extends $BlockMeta {
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacing$$Type = ($BlockMetaFacing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacing_ = $BlockMetaFacing$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockDrawers" {
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$FaceSlotBlock, $FaceSlotBlock$$Type} from "com.jaquadro.minecraft.storagedrawers.block.FaceSlotBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockType, $BlockType$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.BlockType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IDrawerConfig, $IDrawerConfig$$Type} from "com.jaquadro.minecraft.storagedrawers.api.config.IDrawerConfig"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$FaceSlotBlock$InteractContext, $FaceSlotBlock$InteractContext$$Type} from "com.jaquadro.minecraft.storagedrawers.block.FaceSlotBlock$InteractContext"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$INetworked, $INetworked$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockDrawers extends $FaceSlotBlock implements $INetworked, $EntityBlock {
readonly "indGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
readonly "slotGeometry": ($AABB)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "labelGeometry": ($AABB)[]
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "indBaseGeometry": ($AABB)[]
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: integer, arg1: boolean, arg2: $IDrawerConfig$$Type, arg3: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "putSlot"(arg0: $FaceSlotBlock$InteractContext$$Type, arg1: boolean): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "repartitionBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): boolean
public "getStorageUnits"(): integer
public "interactPullDrawer"(arg0: $FaceSlotBlock$InteractContext$$Type): boolean
public "interactReturnDrawer"(arg0: $FaceSlotBlock$InteractContext$$Type, arg1: $ItemStack$$Type): boolean
public "useSlotInvertible"(arg0: $FaceSlotBlock$InteractContext$$Type): $Optional<($InteractionResult)>
public "isHalfDepth"(): boolean
public "getDrawerCount"(): integer
public "getNameTypeKey"(): string
public "useSlot"(arg0: $FaceSlotBlock$InteractContext$$Type): $Optional<($InteractionResult)>
public "takeSlot"(arg0: $FaceSlotBlock$InteractContext$$Type, arg1: boolean): $InteractionResult
public "retrimType"(): $BlockType
public "retrimBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): boolean
public "asHolder"(): $Holder<(any)>
get "storageUnits"(): integer
get "halfDepth"(): boolean
get "drawerCount"(): integer
get "nameTypeKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDrawers$$Type = ($BlockDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockDrawers_ = $BlockDrawers$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedMaterials" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FrameMaterial, $FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"

export interface $IFramedMaterials {

 "getHostBlock"(): $ItemStack
 "getMaterial"(arg0: $FrameMaterial$$Type): $ItemStack
 "setHostBlock"(arg0: $ItemStack$$Type): void
 "setMaterial"(arg0: $FrameMaterial$$Type, arg1: $ItemStack$$Type): void
get "hostBlock"(): $ItemStack
set "hostBlock"(value: $ItemStack$$Type)
}

export namespace $IFramedMaterials {
const probejs$$marker: never
}
export class $IFramedMaterials$$Static implements $IFramedMaterials {


 "getHostBlock"(): $ItemStack
 "getMaterial"(arg0: $FrameMaterial$$Type): $ItemStack
 "setHostBlock"(arg0: $ItemStack$$Type): void
 "setMaterial"(arg0: $FrameMaterial$$Type, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedMaterials$$Type = ($IFramedMaterials);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFramedMaterials_ = $IFramedMaterials$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSizedOpen" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$EnumCompDrawer, $EnumCompDrawer$$Type} from "com.jaquadro.minecraft.storagedrawers.block.EnumCompDrawer"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockMetaFacingSized, $BlockMetaFacingSized$$Type} from "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSized"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMetaFacingSizedOpen extends $BlockMetaFacingSized {
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
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
static readonly "HALF": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedOpen$$Type = ($BlockMetaFacingSizedOpen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacingSizedOpen_ = $BlockMetaFacingSizedOpen$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeIllumination" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"

export class $ItemUpgradeIllumination extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeIllumination$$Type = ($ItemUpgradeIllumination);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeIllumination_ = $ItemUpgradeIllumination$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.LockAttribute" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export class $LockAttribute extends $Enum<($LockAttribute)> {
static readonly "LOCK_EMPTY": $LockAttribute
static readonly "LOCK_POPULATED": $LockAttribute


public static "values"(): ($LockAttribute)[]
public static "valueOf"(arg0: string): $LockAttribute
public static "getEnumSet"(arg0: integer): $EnumSet<($LockAttribute)>
public static "getBitfield"(arg0: $EnumSet$$Type<($LockAttribute$$Type)>): integer
public "getFlagValue"(): integer
get "flagValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockAttribute$$Type = (("lock_populated") | ("lock_empty"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockAttribute_ = $LockAttribute$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockFramingTable" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$EnumFramingTablePart, $EnumFramingTablePart$$Type} from "com.jaquadro.minecraft.storagedrawers.block.EnumFramingTablePart"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$DoubleBlockCombiner$BlockType, $DoubleBlockCombiner$BlockType$$Type} from "net.minecraft.world.level.block.DoubleBlockCombiner$BlockType"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockFramingTable extends $HorizontalDirectionalBlock implements $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockFramingTable)>
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
static readonly "PART": $EnumProperty<($EnumFramingTablePart)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "getBlockType"(arg0: $BlockState$$Type): $DoubleBlockCombiner$BlockType
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public static "getConnectedDirection"(arg0: $BlockState$$Type): $Direction
public static "getTableDirection"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Direction
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramingTable$$Type = ($BlockFramingTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramingTable_ = $BlockFramingTable$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.framed.BlockFramedControllerIO" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FrameMaterial, $FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IFramedBlock, $IFramedBlock$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlock"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockControllerIO, $BlockControllerIO$$Type} from "com.jaquadro.minecraft.storagedrawers.block.BlockControllerIO"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$IFramedBlockEntity, $IFramedBlockEntity$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockFramedControllerIO extends $BlockControllerIO implements $IFramedBlock {
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedControllerIO$$Type = ($BlockFramedControllerIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedControllerIO_ = $BlockFramedControllerIO$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.framed.BlockFramedTrim" {
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FrameMaterial, $FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IFramedBlock, $IFramedBlock$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlock"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockTrim, $BlockTrim$$Type} from "com.jaquadro.minecraft.storagedrawers.block.BlockTrim"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IFramedBlockEntity, $IFramedBlockEntity$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BlockFramedTrim extends $BlockTrim implements $EntityBlock, $IFramedBlock {
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
public "canUseForRetrim"(): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "asHolder"(): $Holder<(any)>
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedTrim$$Type = ($BlockFramedTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedTrim_ = $BlockFramedTrim$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributes" {
import {$LockAttribute, $LockAttribute$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.LockAttribute"

export interface $IDrawerAttributes {

 "isSealed"(): boolean
 "getPriority"(): integer
 "isVoid"(): boolean
 "isShowingQuantity"(): boolean
 "isUnlimitedStorage"(): boolean
 "isUnlimitedVending"(): boolean
 "isDictConvertible"(): boolean
 "isConcealed"(): boolean
 "canItemLock"(arg0: $LockAttribute$$Type): boolean
 "isBalancedFill"(): boolean
 "isItemLocked"(arg0: $LockAttribute$$Type): boolean
 "hasFillLevel"(): boolean
get "sealed"(): boolean
get "priority"(): integer
get "void"(): boolean
get "showingQuantity"(): boolean
get "unlimitedStorage"(): boolean
get "unlimitedVending"(): boolean
get "dictConvertible"(): boolean
get "concealed"(): boolean
get "balancedFill"(): boolean
}

export namespace $IDrawerAttributes {
const probejs$$marker: never
}
export class $IDrawerAttributes$$Static implements $IDrawerAttributes {


 "isSealed"(): boolean
 "getPriority"(): integer
 "isVoid"(): boolean
 "isShowingQuantity"(): boolean
 "isUnlimitedStorage"(): boolean
 "isUnlimitedVending"(): boolean
 "isDictConvertible"(): boolean
 "isConcealed"(): boolean
 "canItemLock"(arg0: $LockAttribute$$Type): boolean
 "isBalancedFill"(): boolean
 "isItemLocked"(arg0: $LockAttribute$$Type): boolean
 "hasFillLevel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributes$$Type = ($IDrawerAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerAttributes_ = $IDrawerAttributes$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemDetachedDrawer" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$IPortable, $IPortable$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.IPortable"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemDetachedDrawer extends $Item implements $IPortable {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getDescription"(): $Component
public "canFitInsideContainerItems"(): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getDefaultInstance"(): $ItemStack
public "getDescriptionId"(): string
public "isHeavy"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type): boolean
get "description"(): $Component
get "defaultInstance"(): $ItemStack
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDetachedDrawer$$Type = ($ItemDetachedDrawer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDetachedDrawer_ = $ItemDetachedDrawer$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemShroudKey" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey, $ItemKey$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemShroudKey extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemShroudKey$$Type = ($ItemShroudKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemShroudKey_ = $ItemShroudKey$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeOneStack" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"

export class $ItemUpgradeOneStack extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeOneStack$$Type = ($ItemUpgradeOneStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeOneStack_ = $ItemUpgradeOneStack$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.config.IDrawerConfig" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDrawerConfig {

 "getUnitsPerSlot"(): integer

(): integer
get "unitsPerSlot"(): integer
}

export namespace $IDrawerConfig {
const probejs$$marker: never
}
export class $IDrawerConfig$$Static implements $IDrawerConfig {


 "getUnitsPerSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerConfig$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerConfig_ = $IDrawerConfig$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.EnumCompDrawer" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IDrawerGeometry, $IDrawerGeometry$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerGeometry"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $EnumCompDrawer extends $Enum<($EnumCompDrawer)> implements $IDrawerGeometry, $StringRepresentable {
static readonly "OPEN2": $EnumCompDrawer
static readonly "OPEN3": $EnumCompDrawer
static readonly "OPEN1": $EnumCompDrawer


public "toString"(): string
public static "values"(): ($EnumCompDrawer)[]
public static "valueOf"(arg0: string): $EnumCompDrawer
public static "byMetadata"(arg0: integer): $EnumCompDrawer
public "getSerializedName"(): string
public static "byOpenSlots"(arg0: integer): $EnumCompDrawer
public "isHalfDepth"(): boolean
public "getDrawerCount"(): integer
public "getOpenSlots"(): integer
public "getMetadata"(): integer
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "serializedName"(): string
get "halfDepth"(): boolean
get "drawerCount"(): integer
get "openSlots"(): integer
get "metadata"(): integer
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumCompDrawer$$Type = (("open1") | ("open2") | ("open3"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumCompDrawer_ = $EnumCompDrawer$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerGroup" {
import {$ChameleonCapability, $ChameleonCapability$$Type} from "com.texelsaurus.minecraft.chameleon.capabilities.ChameleonCapability"
import {$IDrawerCapabilityProvider, $IDrawerCapabilityProvider$$Type} from "com.jaquadro.minecraft.storagedrawers.api.capabilities.IDrawerCapabilityProvider"
import {$IDrawer, $IDrawer$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawer"

export interface $IDrawerGroup extends $IDrawerCapabilityProvider {

 "hasMissingDrawers"(): boolean
 "getDrawerCount"(): integer
 "getDrawer"(arg0: integer): $IDrawer
 "isGroupValid"(): boolean
 "getAccessibleDrawerSlots"(): (integer)[]
 "getCapability"<T>(arg0: $ChameleonCapability$$Type<(T)>): T
get "drawerCount"(): integer
get "groupValid"(): boolean
get "accessibleDrawerSlots"(): (integer)[]
}

export namespace $IDrawerGroup {
const probejs$$marker: never
}
export class $IDrawerGroup$$Static implements $IDrawerGroup {


 "hasMissingDrawers"(): boolean
 "getDrawerCount"(): integer
 "getDrawer"(arg0: integer): $IDrawer
 "isGroupValid"(): boolean
 "getAccessibleDrawerSlots"(): (integer)[]
 "getCapability"<T>(arg0: $ChameleonCapability$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerGroup$$Type = ($IDrawerGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerGroup_ = $IDrawerGroup$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeConversion" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"

export class $ItemUpgradeConversion extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeConversion$$Type = ($ItemUpgradeConversion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeConversion_ = $ItemUpgradeConversion$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.KeyType" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $KeyType extends $Record {
static readonly "PERSONAL": $KeyType
static readonly "CODEC": $Codec<($KeyType)>
static readonly "CONCEALMENT": $KeyType
static readonly "QUANTIFY": $KeyType
static readonly "DRAWER": $KeyType

constructor(name: string)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public static "values"(): $Stream<($KeyType)>
public "hashCode"(): integer
public "isEnabled"(): boolean
public static "register"(arg0: $KeyType$$Type): $KeyType
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyType$$Type = ({"name"?: string}) | ([name?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyType_ = $KeyType$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityTrim" {
import {$BaseBlockEntity, $BaseBlockEntity$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.BaseBlockEntity"
import {$IFramedMaterials, $IFramedMaterials$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedMaterials"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$IFramedBlockEntity, $IFramedBlockEntity$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntityTrim extends $BaseBlockEntity implements $IFramedBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "material"(): $IFramedMaterials
public "dataPacketRequiresRenderUpdate"(): boolean
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTrim$$Type = ($BlockEntityTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityTrim_ = $BlockEntityTrim$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity" {
import {$IFramedMaterials, $IFramedMaterials$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedMaterials"

export interface $IFramedBlockEntity {

 "material"(): $IFramedMaterials

(): $IFramedMaterials$$Type
}

export namespace $IFramedBlockEntity {
const probejs$$marker: never
}
export class $IFramedBlockEntity$$Static implements $IFramedBlockEntity {


 "material"(): $IFramedMaterials
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedBlockEntity$$Type = (() => $IFramedMaterials$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFramedBlockEntity_ = $IFramedBlockEntity$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.IPortable" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IPortable {

 "isHeavy"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type): boolean

(arg0: $HolderLookup$Provider, arg1: $ItemStack): boolean
}

export namespace $IPortable {
const probejs$$marker: never
}
export class $IPortable$$Static implements $IPortable {


 "isHeavy"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPortable$$Type = ((arg0: $HolderLookup$Provider, arg1: $ItemStack) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPortable_ = $IPortable$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.UpgradeData" {
import {$IDrawerAttributesModifiable, $IDrawerAttributesModifiable$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributesModifiable"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityDataShim, $BlockEntityDataShim$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.BlockEntityDataShim"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnumUpgradeRedstone, $EnumUpgradeRedstone$$Type} from "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeRedstone"

export class $UpgradeData extends $BlockEntityDataShim {

constructor(arg0: integer)

public "write"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $CompoundTag
public "read"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "hasRemoteUpgrade"(): boolean
public "getStorageMultiplier"(): integer
public "hasPortabilityUpgrade"(): boolean
public "setDrawerAttributes"(arg0: $IDrawerAttributesModifiable$$Type): void
public "getRemoteUpgrade"(): $ItemStack
public "unbindRemoteUpgrade"(): void
public "hasOneStackUpgrade"(): boolean
public "getRedstoneType"(): $EnumUpgradeRedstone
public "hasbalancedFillUpgrade"(): boolean
public "hasVendingUpgrade"(): boolean
public "canRemoveUpgrade"(arg0: integer): boolean
public "hasUnlimitedUpgrade"(): boolean
public "hasConversionUpgrade"(): boolean
public "hasIlluminationUpgrade"(): boolean
public "canAddUpgrade"(arg0: $ItemStack$$Type): boolean
public "addUpgrade"(arg0: $ItemStack$$Type): boolean
public "hasEmptySlot"(): boolean
public "canSwapUpgrade"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setUpgrade"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getUpgrade"(arg0: integer): $ItemStack
public "getSlotCount"(): integer
public "updateRemoteUpgradeBinding"(arg0: $ItemStack$$Type): void
get "storageMultiplier"(): integer
set "drawerAttributes"(value: $IDrawerAttributesModifiable$$Type)
get "remoteUpgrade"(): $ItemStack
get "redstoneType"(): $EnumUpgradeRedstone
get "slotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeData$$Type = ($UpgradeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeData_ = $UpgradeData$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.framed.BlockFramedCompDrawers" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FrameMaterial, $FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IFramedBlock, $IFramedBlock$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlock"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IDrawerConfig, $IDrawerConfig$$Type} from "com.jaquadro.minecraft.storagedrawers.api.config.IDrawerConfig"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$EnumCompDrawer, $EnumCompDrawer$$Type} from "com.jaquadro.minecraft.storagedrawers.block.EnumCompDrawer"
import {$BlockCompDrawers, $BlockCompDrawers$$Type} from "com.jaquadro.minecraft.storagedrawers.block.BlockCompDrawers"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$IFramedBlockEntity, $IFramedBlockEntity$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockFramedCompDrawers extends $BlockCompDrawers implements $IFramedBlock {
readonly "indGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
readonly "slotGeometry": ($AABB)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "labelGeometry": ($AABB)[]
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockCompDrawers)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "indBaseGeometry": ($AABB)[]
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$$Type)
constructor(arg0: integer, arg1: boolean, arg2: $IDrawerConfig$$Type, arg3: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "asHolder"(): $Holder<(any)>
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedCompDrawers$$Type = ($BlockFramedCompDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedCompDrawers_ = $BlockFramedCompDrawers$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockStandardDrawers" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockDrawers, $BlockDrawers$$Type} from "com.jaquadro.minecraft.storagedrawers.block.BlockDrawers"
import {$IDrawerConfig, $IDrawerConfig$$Type} from "com.jaquadro.minecraft.storagedrawers.api.config.IDrawerConfig"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IFramedSourceBlock, $IFramedSourceBlock$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedSourceBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityDrawers, $BlockEntityDrawers$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityDrawers"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockStandardDrawers extends $BlockDrawers implements $IFramedSourceBlock {
readonly "indGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
readonly "slotGeometry": ($AABB)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "labelGeometry": ($AABB)[]
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockStandardDrawers)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "indBaseGeometry": ($AABB)[]
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$$Type)
constructor(arg0: integer, arg1: boolean, arg2: $IDrawerConfig$$Type, arg3: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntityDrawers
public "codec"(): $MapCodec<($BlockStandardDrawers)>
public "repartitionBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): boolean
public "setMatKey"(arg0: $ResourceLocation$$Type): $BlockStandardDrawers
public "setMatKey"(arg0: string): $BlockStandardDrawers
public "getMatKey"(): string
public "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
public "getNameMatKey"(): string
public "retrimBlock"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): boolean
public "asHolder"(): $Holder<(any)>
set "matKey"(value: $ResourceLocation$$Type)
set "matKey"(value: string)
get "matKey"(): string
get "nameMatKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStandardDrawers$$Type = ($BlockStandardDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStandardDrawers_ = $BlockStandardDrawers$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemFramedTrim" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemTrim, $ItemTrim$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemTrim"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ItemFramedTrim extends $ItemTrim {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFramedTrim$$Type = ($ItemFramedTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFramedTrim_ = $ItemFramedTrim$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockCompDrawers" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockDrawers, $BlockDrawers$$Type} from "com.jaquadro.minecraft.storagedrawers.block.BlockDrawers"
import {$IDrawerConfig, $IDrawerConfig$$Type} from "com.jaquadro.minecraft.storagedrawers.api.config.IDrawerConfig"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$EnumCompDrawer, $EnumCompDrawer$$Type} from "com.jaquadro.minecraft.storagedrawers.block.EnumCompDrawer"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IFramedSourceBlock, $IFramedSourceBlock$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedSourceBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityDrawers, $BlockEntityDrawers$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityDrawers"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$INetworked, $INetworked$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockCompDrawers extends $BlockDrawers implements $INetworked, $IFramedSourceBlock {
readonly "indGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
readonly "slotGeometry": ($AABB)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "labelGeometry": ($AABB)[]
static readonly "SLOTS": $EnumProperty<($EnumCompDrawer)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockCompDrawers)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "indBaseGeometry": ($AABB)[]
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$$Type)
constructor(arg0: integer, arg1: boolean, arg2: $IDrawerConfig$$Type, arg3: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntityDrawers
public "codec"(): $MapCodec<($BlockCompDrawers)>
public "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCompDrawers$$Type = ($BlockCompDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCompDrawers_ = $BlockCompDrawers$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.MaterialData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IFramedMaterials, $IFramedMaterials$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedMaterials"
import {$BlockEntityDataShim, $BlockEntityDataShim$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.BlockEntityDataShim"
import {$FrameMaterial, $FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $MaterialData extends $BlockEntityDataShim implements $IFramedMaterials {
static readonly "CODEC": $Codec<($MaterialData)>
static readonly "EMPTY": $MaterialData
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MaterialData)>

constructor(arg0: $IFramedMaterials$$Type)
constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)
constructor()

public "clear"(): void
public "isEmpty"(): boolean
public "write"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $CompoundTag
public "read"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "read"(arg0: $ItemStack$$Type): void
public "getHostBlock"(): $ItemStack
public "getMaterial"(arg0: $FrameMaterial$$Type): $ItemStack
public "getSide"(): $ItemStack
public "setSide"(arg0: $ItemStack$$Type): void
public "getEffectiveSide"(): $ItemStack
public "getEffectiveFront"(): $ItemStack
public "getEffectiveTrim"(): $ItemStack
public "getFront"(): $ItemStack
public "allMatOpaque"(): boolean
public "setTrim"(arg0: $ItemStack$$Type): void
public "isMatOpaque"(arg0: $ItemStack$$Type): boolean
public "getFrameBase"(): $ItemStack
public "getTrim"(): $ItemStack
public "setFrameBase"(arg0: $ItemStack$$Type): void
public "setFront"(arg0: $ItemStack$$Type): void
public "setHostBlock"(arg0: $ItemStack$$Type): void
public "setMaterial"(arg0: $FrameMaterial$$Type, arg1: $ItemStack$$Type): void
get "empty"(): boolean
get "hostBlock"(): $ItemStack
get "side"(): $ItemStack
set "side"(value: $ItemStack$$Type)
get "effectiveSide"(): $ItemStack
get "effectiveFront"(): $ItemStack
get "effectiveTrim"(): $ItemStack
get "front"(): $ItemStack
set "trim"(value: $ItemStack$$Type)
get "frameBase"(): $ItemStack
get "trim"(): $ItemStack
set "frameBase"(value: $ItemStack$$Type)
set "front"(value: $ItemStack$$Type)
set "hostBlock"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialData$$Type = ($MaterialData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialData_ = $MaterialData$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeCreative" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $EnumUpgradeCreative extends $Enum<($EnumUpgradeCreative)> implements $StringRepresentable {
static readonly "STORAGE": $EnumUpgradeCreative
static readonly "VENDING": $EnumUpgradeCreative


public "toString"(): string
public static "values"(): ($EnumUpgradeCreative)[]
public static "valueOf"(arg0: string): $EnumUpgradeCreative
public static "byMetadata"(arg0: integer): $EnumUpgradeCreative
public "getSerializedName"(): string
public "getMetadata"(): integer
public "getUnlocalizedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "serializedName"(): string
get "metadata"(): integer
get "unlocalizedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeCreative$$Type = (("store") | ("vend"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumUpgradeCreative_ = $EnumUpgradeCreative$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export interface $IDrawer {

 "isEmpty"(): boolean
 "isEnabled"(): boolean
 "copy"(): $IDrawer
 "isMissing"(): boolean
 "getStoredItemPrototype"(): $ItemStack
 "getStoredItemCount"(): integer
 "getStoredItemStackSize"(): integer
 "setStoredItemCount"(arg0: integer): void
 "canItemBeStoredManual"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): boolean
 "getRemainingCapacity"(): integer
 "canItemBeStored"(arg0: $ItemStack$$Type): boolean
 "canItemBeStored"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): boolean
 "canDetach"(): boolean
 "setStoredItem"(arg0: $ItemStack$$Type, arg1: integer): $IDrawer
 "setStoredItem"(arg0: $ItemStack$$Type): $IDrawer
 "getMaxCapacity"(arg0: $ItemStack$$Type): integer
 "getMaxCapacity"(): integer
 "setDetached"(arg0: boolean): void
 "getAcceptingRemainingCapacity"(): integer
 "getAcceptingMaxCapacity"(arg0: $ItemStack$$Type): integer
 "canItemBeExtracted"(arg0: $ItemStack$$Type): boolean
 "canItemBeExtracted"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): boolean
 "adjustStoredItemCount"(arg0: integer): integer
get "empty"(): boolean
get "enabled"(): boolean
get "missing"(): boolean
get "storedItemPrototype"(): $ItemStack
get "storedItemCount"(): integer
get "storedItemStackSize"(): integer
set "storedItemCount"(value: integer)
get "remainingCapacity"(): integer
set "storedItem"(value: $ItemStack$$Type)
get "maxCapacity"(): integer
set "detached"(value: boolean)
get "acceptingRemainingCapacity"(): integer
}

export namespace $IDrawer {
const probejs$$marker: never
}
export class $IDrawer$$Static implements $IDrawer {


 "isEmpty"(): boolean
 "isEnabled"(): boolean
 "copy"(): $IDrawer
 "isMissing"(): boolean
 "getStoredItemPrototype"(): $ItemStack
 "getStoredItemCount"(): integer
 "getStoredItemStackSize"(): integer
 "setStoredItemCount"(arg0: integer): void
 "canItemBeStoredManual"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): boolean
 "getRemainingCapacity"(): integer
 "canItemBeStored"(arg0: $ItemStack$$Type): boolean
 "canItemBeStored"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): boolean
 "canDetach"(): boolean
 "setStoredItem"(arg0: $ItemStack$$Type, arg1: integer): $IDrawer
 "setStoredItem"(arg0: $ItemStack$$Type): $IDrawer
 "getMaxCapacity"(arg0: $ItemStack$$Type): integer
 "getMaxCapacity"(): integer
 "setDetached"(arg0: boolean): void
 "getAcceptingRemainingCapacity"(): integer
 "getAcceptingMaxCapacity"(arg0: $ItemStack$$Type): integer
 "canItemBeExtracted"(arg0: $ItemStack$$Type): boolean
 "canItemBeExtracted"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): boolean
 "adjustStoredItemCount"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawer$$Type = ($IDrawer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawer_ = $IDrawer$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMeta" {
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

export class $BlockMeta extends $Block {
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
export type $BlockMeta$$Type = ($BlockMeta);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMeta_ = $BlockMeta$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.EnumFramingTablePart" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $EnumFramingTablePart extends $Enum<($EnumFramingTablePart)> implements $StringRepresentable {
static readonly "LEFT": $EnumFramingTablePart
static readonly "RIGHT": $EnumFramingTablePart


public "toString"(): string
public static "values"(): ($EnumFramingTablePart)[]
public static "valueOf"(arg0: string): $EnumFramingTablePart
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumFramingTablePart$$Type = (("left") | ("right"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumFramingTablePart_ = $EnumFramingTablePart$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerGeometry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IDrawerGeometry {

 "isHalfDepth"(): boolean
 "getDrawerCount"(): integer
get "halfDepth"(): boolean
get "drawerCount"(): integer
}

export namespace $IDrawerGeometry {
const probejs$$marker: never
}
export class $IDrawerGeometry$$Static implements $IDrawerGeometry {


 "isHalfDepth"(): boolean
 "getDrawerCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerGeometry$$Type = ($IDrawerGeometry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerGeometry_ = $IDrawerGeometry$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeStorage" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $EnumUpgradeStorage extends $Enum<($EnumUpgradeStorage)> implements $StringRepresentable {
static readonly "GOLD": $EnumUpgradeStorage
static readonly "EMERALD": $EnumUpgradeStorage
static readonly "OBSIDIAN": $EnumUpgradeStorage
static readonly "NETHERITE": $EnumUpgradeStorage
static readonly "DIAMOND": $EnumUpgradeStorage
static readonly "IRON": $EnumUpgradeStorage
static readonly "COPPER": $EnumUpgradeStorage


public "toString"(): string
public static "values"(): ($EnumUpgradeStorage)[]
public static "valueOf"(arg0: string): $EnumUpgradeStorage
public "getLevel"(): integer
public static "byMetadata"(arg0: integer): $EnumUpgradeStorage
public "getSerializedName"(): string
public "getMetadata"(): integer
public static "byLevel"(arg0: integer): $EnumUpgradeStorage
public "getUnlocalizedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "level"(): integer
get "serializedName"(): string
get "metadata"(): integer
get "unlocalizedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeStorage$$Type = (("obsidian") | ("iron") | ("gold") | ("diamond") | ("emerald") | ("copper") | ("netherite"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumUpgradeStorage_ = $EnumUpgradeStorage$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.framed.BlockFramedStandardDrawers" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FrameMaterial, $FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IFramedBlock, $IFramedBlock$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlock"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockType, $BlockType$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.BlockType"
import {$BlockStandardDrawers, $BlockStandardDrawers$$Type} from "com.jaquadro.minecraft.storagedrawers.block.BlockStandardDrawers"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IDrawerConfig, $IDrawerConfig$$Type} from "com.jaquadro.minecraft.storagedrawers.api.config.IDrawerConfig"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IFramedBlockEntity, $IFramedBlockEntity$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockFramedStandardDrawers extends $BlockStandardDrawers implements $IFramedBlock {
readonly "indGeometry": ($AABB)[]
readonly "countGeometry": ($AABB)[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": string
readonly "slotGeometry": ($AABB)[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
readonly "labelGeometry": ($AABB)[]
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockStandardDrawers)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "indBaseGeometry": ($AABB)[]
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: $BlockBehaviour$Properties$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: boolean, arg2: integer, arg3: $BlockBehaviour$Properties$$Type)
constructor(arg0: integer, arg1: boolean, arg2: $IDrawerConfig$$Type, arg3: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
public "retrimType"(): $BlockType
public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "asHolder"(): $Holder<(any)>
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedStandardDrawers$$Type = ($BlockFramedStandardDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedStandardDrawers_ = $BlockFramedStandardDrawers$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.BlockEntityDataShim" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BlockEntityDataShim {

constructor()

public "write"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $CompoundTag
public "read"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityDataShim$$Type = ($BlockEntityDataShim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityDataShim_ = $BlockEntityDataShim$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemPersonalKey" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey, $ItemKey$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemPersonalKey extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: string, arg1: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "getSecurityProviderKey"(): string
get "enabled"(): boolean
get "securityProviderKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPersonalKey$$Type = ($ItemPersonalKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPersonalKey_ = $ItemPersonalKey$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSized" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockMetaFacing, $BlockMetaFacing$$Type} from "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacing"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMetaFacingSized extends $BlockMetaFacing {
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
static readonly "HALF": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSized$$Type = ($BlockMetaFacingSized);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacingSized_ = $BlockMetaFacingSized$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemTrim" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ItemTrim extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
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

public "getName"(arg0: $ItemStack$$Type): $Component
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTrim$$Type = ($ItemTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTrim_ = $ItemTrim$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IDrawerGroup, $IDrawerGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerGroup"
import {$List, $List$$Type} from "java.util.List"
import {$INetworked, $INetworked$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$IDrawerAttributesGroupControl, $IDrawerAttributesGroupControl$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributesGroupControl"

export interface $IControlGroup {

 "getBoundControlGroup"(): $IControlGroup
 "invalidateRemoteNode"(arg0: $INetworked$$Type): void
 "getBoundRemoteNodes"(): $List<($INetworked)>
 "validateRemoteNode"(arg0: $INetworked$$Type): void
 "addRemoteNode"(arg0: $INetworked$$Type): boolean
 "getDrawerGroup"(): $IDrawerGroup
 "getGroupControllableAttributes"(arg0: $Player$$Type): $IDrawerAttributesGroupControl
get "boundControlGroup"(): $IControlGroup
get "boundRemoteNodes"(): $List<($INetworked)>
get "drawerGroup"(): $IDrawerGroup
}

export namespace $IControlGroup {
const probejs$$marker: never
}
export class $IControlGroup$$Static implements $IControlGroup {


 "getBoundControlGroup"(): $IControlGroup
 "invalidateRemoteNode"(arg0: $INetworked$$Type): void
 "getBoundRemoteNodes"(): $List<($INetworked)>
 "validateRemoteNode"(arg0: $INetworked$$Type): void
 "addRemoteNode"(arg0: $INetworked$$Type): boolean
 "getDrawerGroup"(): $IDrawerGroup
 "getGroupControllableAttributes"(arg0: $Player$$Type): $IDrawerAttributesGroupControl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IControlGroup$$Type = ($IControlGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IControlGroup_ = $IControlGroup$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemFramedDrawers" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$ItemDrawers, $ItemDrawers$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemDrawers"

export class $ItemFramedDrawers extends $ItemDrawers {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFramedDrawers$$Type = ($ItemFramedDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFramedDrawers_ = $ItemFramedDrawers$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.IProtectable" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ISecurityProvider, $ISecurityProvider$$Type} from "com.jaquadro.minecraft.storagedrawers.api.security.ISecurityProvider"

export interface $IProtectable {

 "getOwner"(): $UUID
 "setOwner"(arg0: $UUID$$Type): boolean
 "setSecurityProvider"(arg0: $ISecurityProvider$$Type): boolean
 "getSecurityProvider"(): $ISecurityProvider
get "owner"(): $UUID
set "owner"(value: $UUID$$Type)
set "securityProvider"(value: $ISecurityProvider$$Type)
get "securityProvider"(): $ISecurityProvider
}

export namespace $IProtectable {
const probejs$$marker: never
}
export class $IProtectable$$Static implements $IProtectable {


 "getOwner"(): $UUID
 "setOwner"(arg0: $UUID$$Type): boolean
 "setSecurityProvider"(arg0: $ISecurityProvider$$Type): boolean
 "getSecurityProvider"(): $ISecurityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProtectable$$Type = ($IProtectable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProtectable_ = $IProtectable$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.BaseBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockEntityDataShim, $BlockEntityDataShim$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.BlockEntityDataShim"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BaseBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getUpdatePacket"(): $Packet<(any)>
public "markBlockForUpdate"(): void
public "injectPortableData"(arg0: $BlockEntityDataShim$$Type): void
public "readPortable"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "injectData"(arg0: $BlockEntityDataShim$$Type): void
public "writePortable"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $CompoundTag
public "hasDataPacket"(): boolean
public "markBlockForRenderUpdate"(): void
public "markBlockForUpdateClient"(): void
public "dataPacketRequiresRenderUpdate"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntity$$Type = ($BaseBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntity_ = $BaseBlockEntity$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeRedstone" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $EnumUpgradeRedstone extends $Enum<($EnumUpgradeRedstone)> implements $StringRepresentable {
static readonly "COMBINED": $EnumUpgradeRedstone
static readonly "MIN": $EnumUpgradeRedstone
static readonly "MAX": $EnumUpgradeRedstone


public "toString"(): string
public static "values"(): ($EnumUpgradeRedstone)[]
public static "valueOf"(arg0: string): $EnumUpgradeRedstone
public static "byMetadata"(arg0: integer): $EnumUpgradeRedstone
public "getSerializedName"(): string
public "getMetadata"(): integer
public "getUnlocalizedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "serializedName"(): string
get "metadata"(): integer
get "unlocalizedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumUpgradeRedstone$$Type = (("combined") | ("max") | ("min"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumUpgradeRedstone_ = $EnumUpgradeRedstone$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributesGroupControl" {
import {$LockAttribute, $LockAttribute$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.LockAttribute"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export interface $IDrawerAttributesGroupControl {

 "toggleItemLocked"(arg0: $EnumSet$$Type<($LockAttribute$$Type)>, arg1: $LockAttribute$$Type): boolean
 "toggleConcealed"(): boolean
 "setIsShowingQuantity"(arg0: boolean): boolean
 "setItemLocked"(arg0: $EnumSet$$Type<($LockAttribute$$Type)>, arg1: $LockAttribute$$Type, arg2: boolean): boolean
 "setIsConcealed"(arg0: boolean): boolean
 "toggleIsShowingQuantity"(): boolean
set "isShowingQuantity"(value: boolean)
set "isConcealed"(value: boolean)
}

export namespace $IDrawerAttributesGroupControl {
const probejs$$marker: never
}
export class $IDrawerAttributesGroupControl$$Static implements $IDrawerAttributesGroupControl {


 "toggleItemLocked"(arg0: $EnumSet$$Type<($LockAttribute$$Type)>, arg1: $LockAttribute$$Type): boolean
 "toggleConcealed"(): boolean
 "setIsShowingQuantity"(arg0: boolean): boolean
 "setItemLocked"(arg0: $EnumSet$$Type<($LockAttribute$$Type)>, arg1: $LockAttribute$$Type, arg2: boolean): boolean
 "setIsConcealed"(arg0: boolean): boolean
 "toggleIsShowingQuantity"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerAttributesGroupControl$$Type = ($IDrawerAttributesGroupControl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerAttributesGroupControl_ = $IDrawerAttributesGroupControl$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked" {
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"

export interface $INetworked {

 "getBoundControlGroup"(): $IControlGroup
 "canRecurseSearch"(): boolean
 "unbindControlGroup"(): void
 "supportsDirectControllerLink"(): boolean
get "boundControlGroup"(): $IControlGroup
}

export namespace $INetworked {
const probejs$$marker: never
}
export class $INetworked$$Static implements $INetworked {


 "getBoundControlGroup"(): $IControlGroup
 "canRecurseSearch"(): boolean
 "unbindControlGroup"(): void
 "supportsDirectControllerLink"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetworked$$Type = ($INetworked);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetworked_ = $INetworked$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.framed.BlockFramedController" {
import {$BlockController, $BlockController$$Type} from "com.jaquadro.minecraft.storagedrawers.block.BlockController"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FrameMaterial, $FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IFramedBlock, $IFramedBlock$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlock"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$IFramedBlockEntity, $IFramedBlockEntity$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockFramedController extends $BlockController implements $IFramedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockController)>
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
public "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
public "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
public "asHolder"(): $Holder<(any)>
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFramedController$$Type = ($BlockFramedController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFramedController_ = $BlockFramedController$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedSourceBlock" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IFramedSourceBlock {

 "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack

(arg0: $ItemStack, arg1: $ItemStack, arg2: $ItemStack, arg3: $ItemStack): $ItemStack$$Type
}

export namespace $IFramedSourceBlock {
const probejs$$marker: never
}
export class $IFramedSourceBlock$$Static implements $IFramedSourceBlock {


 "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedSourceBlock$$Type = ((arg0: $ItemStack, arg1: $ItemStack, arg2: $ItemStack, arg3: $ItemStack) => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFramedSourceBlock_ = $IFramedSourceBlock$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeFillLevel" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"

export class $ItemUpgradeFillLevel extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeFillLevel$$Type = ($ItemUpgradeFillLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeFillLevel_ = $ItemUpgradeFillLevel$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.capabilities.IItemRepository" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IItemRepository$ItemRecord, $IItemRepository$ItemRecord$$Type} from "com.jaquadro.minecraft.storagedrawers.api.capabilities.IItemRepository$ItemRecord"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $IItemRepository {

 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "extractItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): $ItemStack
 "extractItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "getStoredItemCount"(arg0: $ItemStack$$Type): integer
 "getStoredItemCount"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): integer
 "getItemCapacity"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): integer
 "getItemCapacity"(arg0: $ItemStack$$Type): integer
 "getAllItems"(): $NonNullList<($IItemRepository$ItemRecord)>
 "getRemainingItemCapacity"(arg0: $ItemStack$$Type): integer
 "getRemainingItemCapacity"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): integer
get "allItems"(): $NonNullList<($IItemRepository$ItemRecord)>
}

export namespace $IItemRepository {
const probejs$$marker: never
}
export class $IItemRepository$$Static implements $IItemRepository {


 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
 "extractItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean): $ItemStack
 "extractItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: boolean, arg3: $Predicate$$Type<($ItemStack)>): $ItemStack
 "getStoredItemCount"(arg0: $ItemStack$$Type): integer
 "getStoredItemCount"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): integer
 "getItemCapacity"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): integer
 "getItemCapacity"(arg0: $ItemStack$$Type): integer
 "getAllItems"(): $NonNullList<($IItemRepository$ItemRecord)>
 "getRemainingItemCapacity"(arg0: $ItemStack$$Type): integer
 "getRemainingItemCapacity"(arg0: $ItemStack$$Type, arg1: $Predicate$$Type<($ItemStack)>): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRepository$$Type = ($IItemRepository);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemRepository_ = $IItemRepository$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityController" {
import {$BlockController, $BlockController$$Type} from "com.jaquadro.minecraft.storagedrawers.block.BlockController"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IDrawerGroup, $IDrawerGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerGroup"
import {$List, $List$$Type} from "java.util.List"
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$ISecurityProvider, $ISecurityProvider$$Type} from "com.jaquadro.minecraft.storagedrawers.api.security.ISecurityProvider"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IDrawerAttributesGroupControl, $IDrawerAttributesGroupControl$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributesGroupControl"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ChameleonCapability, $ChameleonCapability$$Type} from "com.texelsaurus.minecraft.chameleon.capabilities.ChameleonCapability"
import {$BaseBlockEntity, $BaseBlockEntity$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.BaseBlockEntity"
import {$IFramedMaterials, $IFramedMaterials$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedMaterials"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$IItemRepository, $IItemRepository$$Type} from "com.jaquadro.minecraft.storagedrawers.api.capabilities.IItemRepository"
import {$IDrawer, $IDrawer$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawer"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$IFramedBlockEntity, $IFramedBlockEntity$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$INetworked, $INetworked$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntityController extends $BaseBlockEntity implements $IDrawerGroup, $IControlGroup, $IFramedBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getBlock"(): $BlockController
public "setRemoved"(): void
public "getCapability"<T>(arg0: $ChameleonCapability$$Type<(T)>): T
public "clearProtection"(): void
public "toggleProtection"(arg0: $GameProfile$$Type, arg1: $ISecurityProvider$$Type): void
public "getBoundControlGroup"(): $IControlGroup
public "invalidateRemoteNode"(arg0: $INetworked$$Type): void
public "getBoundRemoteNodes"(): $List<($INetworked)>
public "validateRemoteNode"(arg0: $INetworked$$Type): void
public "getGroupForDrawerSlot"(arg0: integer): $IDrawerGroup
public "getItemRepository"(): $IItemRepository
public "getDrawerCount"(): integer
public "getDrawer"(arg0: integer): $IDrawer
public "printDebugInfo"(): void
public "addRemoteNode"(arg0: $INetworked$$Type): boolean
public "isGroupValid"(): boolean
public "readFixed"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "getDrawerGroup"(): $IDrawerGroup
public "isValidIO"(arg0: $BlockPos$$Type): boolean
public "updateCache"(): void
public "onEntityLoad"(): void
public "material"(): $IFramedMaterials
public "interactPutItemsIntoInventory"(arg0: $Player$$Type): integer
public "getGroupControllableAttributes"(arg0: $Player$$Type): $IDrawerAttributesGroupControl
public "getAccessibleDrawerSlots"(): (integer)[]
public "dataPacketRequiresRenderUpdate"(): boolean
public "hasMissingDrawers"(): boolean
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "block"(): $BlockController
get "boundControlGroup"(): $IControlGroup
get "boundRemoteNodes"(): $List<($INetworked)>
get "itemRepository"(): $IItemRepository
get "drawerCount"(): integer
get "groupValid"(): boolean
get "drawerGroup"(): $IDrawerGroup
get "accessibleDrawerSlots"(): (integer)[]
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityController$$Type = ($BlockEntityController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityController_ = $BlockEntityController$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemKey" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemKey extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getDescription"(): $Component
public "isEnabled"(): boolean
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "createAttributes"(): $ItemAttributeModifiers
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
get "description"(): $Component
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemKey$$Type = ($ItemKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemKey_ = $ItemKey$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockKeyButton" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FaceAttachedHorizontalDirectionalBlock, $FaceAttachedHorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.FaceAttachedHorizontalDirectionalBlock"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$KeyType, $KeyType$$Type} from "com.jaquadro.minecraft.storagedrawers.block.KeyType"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$AttachFace, $AttachFace$$Type} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockKeyButton extends $FaceAttachedHorizontalDirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockKeyButton)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
 "hasCollision": boolean

constructor(arg0: $KeyType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "codec"(): $MapCodec<($BlockKeyButton)>
public "press"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockKeyButton$$Type = ($BlockKeyButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockKeyButton_ = $BlockKeyButton$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.capabilities.IDrawerCapabilityProvider" {
import {$ChameleonCapability, $ChameleonCapability$$Type} from "com.texelsaurus.minecraft.chameleon.capabilities.ChameleonCapability"

export interface $IDrawerCapabilityProvider {

 "getCapability"<T>(arg0: $ChameleonCapability$$Type<(T)>): T
}

export namespace $IDrawerCapabilityProvider {
const probejs$$marker: never
}
export class $IDrawerCapabilityProvider$$Static implements $IDrawerCapabilityProvider {


 "getCapability"<T>(arg0: $ChameleonCapability$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawerCapabilityProvider$$Type = ($IDrawerCapabilityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawerCapabilityProvider_ = $IDrawerCapabilityProvider$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradePortability" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"

export class $ItemUpgradePortability extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradePortability$$Type = ($ItemUpgradePortability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradePortability_ = $ItemUpgradePortability$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemPriorityKey" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey, $ItemKey$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemPriorityKey extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: integer, arg1: integer, arg2: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getNextKey"(): $ItemPriorityKey
get "enabled"(): boolean
get "nextKey"(): $ItemPriorityKey
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPriorityKey$$Type = ($ItemPriorityKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPriorityKey_ = $ItemPriorityKey$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockController" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityController, $BlockEntityController$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityController"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$KeyType, $KeyType$$Type} from "com.jaquadro.minecraft.storagedrawers.block.KeyType"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$IFramedSourceBlock, $IFramedSourceBlock$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedSourceBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$INetworked, $INetworked$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BlockController extends $HorizontalDirectionalBlock implements $INetworked, $EntityBlock, $IFramedSourceBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlockController)>
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntityController
public "toggle"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $KeyType$$Type): void
public "toggle"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $Item$$Type): boolean
public "codec"(): $MapCodec<($BlockController)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
public "togglePersonal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: string): void
public "getBoundControlGroup"(): $IControlGroup
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "supportsDirectControllerLink"(): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "boundControlGroup"(): $IControlGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockController$$Type = ($BlockController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockController_ = $BlockController$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemDrawerPuller" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey, $ItemKey$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemDrawerPuller extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawerPuller$$Type = ($ItemDrawerPuller);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDrawerPuller_ = $ItemDrawerPuller$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemQuantifyKey" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey, $ItemKey$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemQuantifyKey extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemQuantifyKey$$Type = ($ItemQuantifyKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemQuantifyKey_ = $ItemQuantifyKey$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockTrim" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IFramedSourceBlock, $IFramedSourceBlock$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedSourceBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$INetworked, $INetworked$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockTrim extends $Block implements $INetworked, $IFramedSourceBlock {
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "canUseForRetrim"(): boolean
public "setMatKey"(arg0: $ResourceLocation$$Type): $BlockTrim
public "setMatKey"(arg0: string): $BlockTrim
public "getNameTypeKey"(): string
public "getMatKey"(): string
public "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
public "getNameMatKey"(): string
public "getBoundControlGroup"(): $IControlGroup
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "supportsDirectControllerLink"(): boolean
public "asHolder"(): $Holder<(any)>
set "matKey"(value: $ResourceLocation$$Type)
set "matKey"(value: string)
get "nameTypeKey"(): string
get "matKey"(): string
get "nameMatKey"(): string
get "boundControlGroup"(): $IControlGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrim$$Type = ($BlockTrim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTrim_ = $BlockTrim$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemDrawerKey" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemKey, $ItemKey$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ItemDrawerKey extends $ItemKey {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawerKey$$Type = ($ItemDrawerKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDrawerKey_ = $ItemDrawerKey$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.capabilities.IItemRepository$ItemRecord" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $IItemRepository$ItemRecord {
readonly "itemPrototype": $ItemStack
readonly "count": integer

constructor(arg0: $ItemStack$$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemRepository$ItemRecord$$Type = ($IItemRepository$ItemRecord);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemRepository$ItemRecord_ = $IItemRepository$ItemRecord$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $FrameMaterial extends $Enum<($FrameMaterial)> implements $StringRepresentable {
static readonly "SIDE": $FrameMaterial
static readonly "TRIM": $FrameMaterial
static readonly "FRONT": $FrameMaterial


public static "values"(): ($FrameMaterial)[]
public static "valueOf"(arg0: string): $FrameMaterial
public "getSerializedName"(): string
public "getTagKey"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "serializedName"(): string
get "tagKey"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameMaterial$$Type = (("side") | ("trim") | ("front"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrameMaterial_ = $FrameMaterial$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeBalance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $ItemUpgradeBalance extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getDescription"(): $Component
public "isEnabled"(): boolean
get "description"(): $Component
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeBalance$$Type = ($ItemUpgradeBalance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeBalance_ = $ItemUpgradeBalance$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlock" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$StateDefinition, $StateDefinition$$Type} from "net.minecraft.world.level.block.state.StateDefinition"
import {$IFramedBlockEntity, $IFramedBlockEntity$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FrameMaterial, $FrameMaterial$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.FrameMaterial"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFramedBlock {

 "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
 "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
 "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
get "stateDefinition"(): $StateDefinition<($Block), ($BlockState)>
}

export namespace $IFramedBlock {
const probejs$$marker: never
}
export class $IFramedBlock$$Static implements $IFramedBlock {


 "getStateDefinition"(): $StateDefinition<($Block), ($BlockState)>
 "getFramedBlockEntity"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IFramedBlockEntity
 "supportsFrameMaterial"(arg0: $FrameMaterial$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFramedBlock$$Type = ($IFramedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFramedBlock_ = $IFramedBlock$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSizedSlotted" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockMetaFacingSized, $BlockMetaFacingSized$$Type} from "com.jaquadro.minecraft.storagedrawers.block.meta.BlockMetaFacingSized"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockMetaFacingSizedSlotted extends $BlockMetaFacingSized {
static readonly "SLOTS": $IntegerProperty
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
static readonly "HALF": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMetaFacingSizedSlotted$$Type = ($BlockMetaFacingSizedSlotted);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMetaFacingSizedSlotted_ = $BlockMetaFacingSizedSlotted$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeRedstone" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$EnumUpgradeRedstone, $EnumUpgradeRedstone$$Type} from "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeRedstone"

export class $ItemUpgradeRedstone extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $EnumUpgradeRedstone
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $EnumUpgradeRedstone$$Type, arg1: $Item$Properties$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeRedstone$$Type = ($ItemUpgradeRedstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeRedstone_ = $ItemUpgradeRedstone$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.storage.BlockType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $BlockType extends $Enum<($BlockType)> {
static readonly "Trim": $BlockType
static readonly "Drawers": $BlockType


public static "values"(): ($BlockType)[]
public static "valueOf"(arg0: string): $BlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockType$$Type = (("drawers") | ("trim"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockType_ = $BlockType$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemDrawers" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPortable, $IPortable$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.IPortable"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ItemDrawers extends $BlockItem implements $IPortable {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
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

public "getDescription"(): $Component
public "getName"(arg0: $ItemStack$$Type): $Component
public "canFitInsideContainerItems"(): boolean
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isHeavy"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrawers$$Type = ($ItemDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDrawers_ = $ItemDrawers$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeCreative" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumUpgradeCreative, $EnumUpgradeCreative$$Type} from "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeCreative"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"

export class $ItemUpgradeCreative extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "type": $EnumUpgradeCreative
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $EnumUpgradeCreative$$Type, arg1: $Item$Properties$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeCreative$$Type = ($ItemUpgradeCreative);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeCreative_ = $ItemUpgradeCreative$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.api.security.ISecurityProvider" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IProtectable, $IProtectable$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.IProtectable"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export interface $ISecurityProvider {

 "hasAccess"(arg0: $Player$$Type, arg1: $IProtectable$$Type): boolean
 "hasOwnership"(arg0: $GameProfile$$Type, arg1: $IProtectable$$Type): boolean
 "getProviderID"(): string
get "providerID"(): string
}

export namespace $ISecurityProvider {
const probejs$$marker: never
}
export class $ISecurityProvider$$Static implements $ISecurityProvider {


 "hasAccess"(arg0: $Player$$Type, arg1: $IProtectable$$Type): boolean
 "hasOwnership"(arg0: $GameProfile$$Type, arg1: $IProtectable$$Type): boolean
 "getProviderID"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISecurityProvider$$Type = ($ISecurityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISecurityProvider_ = $ISecurityProvider$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.FaceSlotBlock$InteractContext" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FaceSlotBlock$InteractContext {
 "hit": $BlockHitResult
 "level": $Level
 "pos": $BlockPos
 "state": $BlockState
 "slot": integer
 "player": $Player

constructor(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type, arg5: integer)

public "getCheckedEntity"<BE extends $BlockEntity>(arg0: $Class$$Type<(BE)>): BE
public "getCheckedEntity"<BE extends $BlockEntity, B extends $Block>(arg0: $Class$$Type<(BE)>, arg1: $Class$$Type<(B)>): BE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceSlotBlock$InteractContext$$Type = ($FaceSlotBlock$InteractContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaceSlotBlock$InteractContext_ = $FaceSlotBlock$InteractContext$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeVoid" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"

export class $ItemUpgradeVoid extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeVoid$$Type = ($ItemUpgradeVoid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeVoid_ = $ItemUpgradeVoid$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityDrawers" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IDrawerGroup, $IDrawerGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerGroup"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$IDrawerAttributes, $IDrawerAttributes$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawerAttributes"
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$ISecurityProvider, $ISecurityProvider$$Type} from "com.jaquadro.minecraft.storagedrawers.api.security.ISecurityProvider"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Nameable, $Nameable$$Type} from "net.minecraft.world.Nameable"
import {$ChameleonCapability, $ChameleonCapability$$Type} from "com.texelsaurus.minecraft.chameleon.capabilities.ChameleonCapability"
import {$UpgradeData, $UpgradeData$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.tiledata.UpgradeData"
import {$IFramedMaterials, $IFramedMaterials$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedMaterials"
import {$BaseBlockEntity, $BaseBlockEntity$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.BaseBlockEntity"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$IDrawer, $IDrawer$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IDrawer"
import {$IProtectable, $IProtectable$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.attribute.IProtectable"
import {$IFramedBlockEntity, $IFramedBlockEntity$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedBlockEntity"
import {$INetworked, $INetworked$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"

export class $BlockEntityDrawers extends $BaseBlockEntity implements $IDrawerGroup, $IProtectable, $INetworked, $IFramedBlockEntity, $Nameable {
static readonly "ATTACHMENTS_NBT_KEY": string


public "getName"(): $Component
public "getOwner"(): $UUID
public "setOwner"(arg0: $UUID$$Type): boolean
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "getCustomName"(): $Component
public "getCapability"<T>(arg0: $ChameleonCapability$$Type<(T)>): T
public "setChanged"(): void
public "getGroup"(): $IDrawerGroup
public static "getGroup"(arg0: $BlockEntityDrawers$$Type): $IDrawerGroup
public "getRedstoneLevel"(): integer
public "setSecurityProvider"(arg0: $ISecurityProvider$$Type): boolean
public "takeItemsFromSlot"(arg0: integer, arg1: integer): $ItemStack
public "interactReplaceDrawer"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getBoundControlGroup"(): $IControlGroup
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public static "getDrawerAttributes"(arg0: $BlockEntityDrawers$$Type): $IDrawerAttributes
public "getDrawerAttributes"(): $IDrawerAttributes
public "getDrawerCapacity"(): integer
public "putItemsIntoSlot"(arg0: integer, arg1: $ItemStack$$Type, arg2: integer): integer
public "getSecurityProvider"(): $ISecurityProvider
public "clientUpdateCount"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "getDrawerCount"(): integer
public "readPortable"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "isRedstone"(): boolean
/**
 * 
 * @deprecated
 */
public "getDrawer"(arg0: integer): $IDrawer
public "writePortable"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $CompoundTag
public "isGroupValid"(): boolean
public "onEntityLoad"(): void
public "upgrades"(): $UpgradeData
public "material"(): $IFramedMaterials
public "interactPutItemsIntoSlot"(arg0: integer, arg1: $Player$$Type): integer
public "getEffectiveDrawerCapacity"(): integer
public "validateBoundController"(): void
public "supportsDirectControllerLink"(): boolean
public "interactPutCurrentItemIntoSlot"(arg0: integer, arg1: $Player$$Type): integer
/**
 * 
 * @deprecated
 */
public "getAccessibleDrawerSlots"(): (integer)[]
public "dataPacketRequiresRenderUpdate"(): boolean
public "interactPutCurrentInventoryIntoSlot"(arg0: integer, arg1: $Player$$Type): integer
public "hasMissingDrawers"(): boolean
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "name"(): $Component
get "owner"(): $UUID
set "owner"(value: $UUID$$Type)
get "customName"(): $Component
get "group"(): $IDrawerGroup
get "redstoneLevel"(): integer
set "securityProvider"(value: $ISecurityProvider$$Type)
get "boundControlGroup"(): $IControlGroup
get "drawerAttributes"(): $IDrawerAttributes
get "drawerCapacity"(): integer
get "securityProvider"(): $ISecurityProvider
get "drawerCount"(): integer
get "redstone"(): boolean
get "groupValid"(): boolean
get "effectiveDrawerCapacity"(): integer
get "accessibleDrawerSlots"(): (integer)[]
get "displayName"(): $Component
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityDrawers$$Type = ($BlockEntityDrawers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityDrawers_ = $BlockEntityDrawers$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeStorage" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$EnumUpgradeStorage, $EnumUpgradeStorage$$Type} from "com.jaquadro.minecraft.storagedrawers.item.EnumUpgradeStorage"

export class $ItemUpgradeStorage extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
readonly "level": $EnumUpgradeStorage
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $EnumUpgradeStorage$$Type, arg1: $Item$Properties$$Type)

public "getDescription"(): $Component
public "isEnabled"(): boolean
get "description"(): $Component
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeStorage$$Type = ($ItemUpgradeStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeStorage_ = $ItemUpgradeStorage$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ItemUpgrade extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getDescription"(): $Component
public "isEnabled"(): boolean
public "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getAllowMultiple"(): boolean
public "setAllowMultiple"(arg0: boolean): void
public "getUpgradeGroup"(): integer
get "description"(): $Component
get "enabled"(): boolean
get "allowMultiple"(): boolean
set "allowMultiple"(value: boolean)
get "upgradeGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgrade$$Type = ($ItemUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgrade_ = $ItemUpgrade$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.BlockControllerIO" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IFramedSourceBlock, $IFramedSourceBlock$$Type} from "com.jaquadro.minecraft.storagedrawers.api.framing.IFramedSourceBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityController, $BlockEntityController$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityController"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$INetworked, $INetworked$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockControllerIO extends $Block implements $INetworked, $EntityBlock, $IFramedSourceBlock {
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "makeFramedItem"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
public "getController"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $BlockEntityController
public "getBoundControlGroup"(): $IControlGroup
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "supportsDirectControllerLink"(): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "boundControlGroup"(): $IControlGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockControllerIO$$Type = ($BlockControllerIO);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockControllerIO_ = $BlockControllerIO$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.block.FaceSlotBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IControlGroup, $IControlGroup$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.IControlGroup"
import {$FaceSlotBlock$InteractContext, $FaceSlotBlock$InteractContext$$Type} from "com.jaquadro.minecraft.storagedrawers.block.FaceSlotBlock$InteractContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$$Type} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$INetworked, $INetworked$$Type} from "com.jaquadro.minecraft.storagedrawers.api.storage.INetworked"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FaceSlotBlock extends $HorizontalDirectionalBlock implements $INetworked, $EntityBlock {
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean


public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "putSlot"(arg0: $FaceSlotBlock$InteractContext$$Type, arg1: boolean): $InteractionResult
public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "useSlotInvertible"(arg0: $FaceSlotBlock$InteractContext$$Type): $Optional<($InteractionResult)>
public "useSlot"(arg0: $FaceSlotBlock$InteractContext$$Type): $Optional<($InteractionResult)>
public "takeSlot"(arg0: $FaceSlotBlock$InteractContext$$Type, arg1: boolean): $InteractionResult
public "rightAction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "leftAction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getFaceSlot"(arg0: $BlockState$$Type, arg1: $BlockHitResult$$Type): integer
public "getBoundControlGroup"(): $IControlGroup
public "canRecurseSearch"(): boolean
public "unbindControlGroup"(): void
public "supportsDirectControllerLink"(): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "boundControlGroup"(): $IControlGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceSlotBlock$$Type = ($FaceSlotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaceSlotBlock_ = $FaceSlotBlock$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemKeyring" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemKey, $ItemKey$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemKey"
import {$RegistryEntry, $RegistryEntry$$Type} from "com.texelsaurus.minecraft.chameleon.registry.RegistryEntry"

export class $ItemKeyring extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $RegistryEntry$$Type<($ItemKey$$Type)>, arg1: $Item$Properties$$Type)

public "getDescription"(): $Component
public "getName"(arg0: $ItemStack$$Type): $Component
public "getKey"(): $ItemStack
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "onDestroyed"(arg0: $ItemEntity$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public static "getKeyring"(arg0: $ItemStack$$Type): $ItemStack
get "description"(): $Component
get "key"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemKeyring$$Type = ($ItemKeyring);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemKeyring_ = $ItemKeyring$$Type;
}}
declare module "com.jaquadro.minecraft.storagedrawers.item.ItemUpgradeRemote" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityController, $BlockEntityController$$Type} from "com.jaquadro.minecraft.storagedrawers.block.tile.BlockEntityController"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemUpgrade, $ItemUpgrade$$Type} from "com.jaquadro.minecraft.storagedrawers.item.ItemUpgrade"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export class $ItemUpgradeRemote extends $ItemUpgrade {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: boolean, arg2: $Item$Properties$$Type)

public "isEnabled"(): boolean
public "isBound"(): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "setBoundController"(arg0: $ItemStack$$Type, arg1: $BlockEntityController$$Type): $ItemStack
public static "getBoundPosition"(arg0: $ItemStack$$Type): $BlockPos
public static "getBoundController"(arg0: $ItemStack$$Type, arg1: $LevelAccessor$$Type): $BlockEntityController
public static "copyControllerBinding"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
public static "validateInventory"(arg0: $Inventory$$Type, arg1: $Level$$Type): void
public "isGroupUpgrade"(): boolean
public static "setUnbound"(arg0: $ItemStack$$Type): $ItemStack
get "enabled"(): boolean
get "bound"(): boolean
get "groupUpgrade"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUpgradeRemote$$Type = ($ItemUpgradeRemote);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUpgradeRemote_ = $ItemUpgradeRemote$$Type;
}}
