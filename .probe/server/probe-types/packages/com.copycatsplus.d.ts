declare module "com.copycatsplus.copycats.content.copycat.sliding_door.CopycatSlidingDoorBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$DoubleBlockHalf, $DoubleBlockHalf$$Type} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$DoorHingeSide, $DoorHingeSide$$Type} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$SlidingDoorBlock, $SlidingDoorBlock$$Type} from "com.simibubi.create.content.decoration.slidingDoor.SlidingDoorBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$DoorBlock, $DoorBlock$$Type} from "net.minecraft.world.level.block.DoorBlock"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$CopycatSlidingDoorBlockEntity, $CopycatSlidingDoorBlockEntity$$Type} from "com.copycatsplus.copycats.content.copycat.sliding_door.CopycatSlidingDoorBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatSlidingDoorBlock extends $SlidingDoorBlock implements $ICopycatBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "VISIBLE": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "TRAIN_SET_TYPE": $Supplier<($BlockSetType)>
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "UPDATE_ALL": integer
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static "CT": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "GLASS_SET_TYPE": $Supplier<($BlockSetType)>
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type, type: $BlockSetType$$Type, folds: boolean)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public static "metal"(properties: $BlockBehaviour$Properties$$Type, folds: boolean): $CopycatSlidingDoorBlock
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<($CopycatSlidingDoorBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "createDoorBlock"(arg0: $BlockSetType$$Type, arg1: $BlockBehaviour$Properties$$Type): $DoorBlock
public "asHolder"(): $Holder<(any)>
get "blockEntityType"(): $BlockEntityType<($CopycatSlidingDoorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlidingDoorBlock$$Type = ($CopycatSlidingDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlidingDoorBlock_ = $CopycatSlidingDoorBlock$$Type;
}}
declare module "com.copycatsplus.copycats.CCBlockStateProperties$Side" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $CCBlockStateProperties$Side extends $Enum<($CCBlockStateProperties$Side)> implements $StringRepresentable {
static readonly "LEFT": $CCBlockStateProperties$Side
static readonly "RIGHT": $CCBlockStateProperties$Side


public static "values"(): ($CCBlockStateProperties$Side)[]
public static "valueOf"(name: StringJS): $CCBlockStateProperties$Side
public "getOpposite"(): $CCBlockStateProperties$Side
public "isRight"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "opposite"(): $CCBlockStateProperties$Side
get "right"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCBlockStateProperties$Side$$Type = (("left") | ("right"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCBlockStateProperties$Side_ = $CCBlockStateProperties$Side$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable, $IWrenchable$$Type} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$TransformableBlock, $TransformableBlock$$Type} from "com.simibubi.create.api.contraption.transformable.TransformableBlock"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $ICopycatBlock extends $IWrenchable, $IStateType, $TransformableBlock {

 "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
 "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
 "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
 "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
 "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
 "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
 "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
 "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
 "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
 "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
 "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
 "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
 "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
 "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
 "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
 "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
 "isAcceptedRegardless"(material: $BlockState$$Type): boolean
 "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
 "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
 "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
 "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
 "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
 "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
 "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "stateType"(): $StateType
}

export namespace $ICopycatBlock {
function getAppearance(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
function getMaterial(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
function wrappedColor(): $BlockColor
function hidesNeighborFace(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
function getRequiredItemsForLayer(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
function playRotateSound(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
function playRemoveSound(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
const probejs$$marker: never
}
export class $ICopycatBlock$$Static implements $ICopycatBlock {


 "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
 "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
 "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
 "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
 "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
 "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
 "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
 "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
static "wrappedColor"(): $BlockColor
 "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
 "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
 "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
 "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
 "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
 "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
 "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
 "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
 "isAcceptedRegardless"(material: $BlockState$$Type): boolean
 "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
 "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
 "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
 "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
 "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
 "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "stateType"(): $StateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICopycatBlock$$Type = ($ICopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICopycatBlock_ = $ICopycatBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.sliding_door.CopycatSlidingDoorBlockEntity" {
import {$LerpedFloat, $LerpedFloat$$Type} from "net.createmod.catnip.animation.LerpedFloat"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter, $HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$SlidingDoorBlockEntity, $SlidingDoorBlockEntity$$Type} from "com.simibubi.create.content.decoration.slidingDoor.SlidingDoorBlockEntity"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CopycatSlidingDoorBlockEntity extends $SlidingDoorBlockEntity implements $ICopycatBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(typeIn: $BlockEntityType$$Type<(any)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
public "write"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "read"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "onLoad"(): void
public "getModelData"(): $ModelData
public "getMaterial"(): $BlockState
public "animation"(): $LerpedFloat
public "isCTEnabled"(): boolean
public "writeSafe"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "getConsumedItem"(): $ItemStack
public "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
public "setMaterialInternal"(material: $BlockState$$Type): void
public "setCTEnabledInternal"(value: boolean): void
public "shouldRenderSpecial"(state: $BlockState$$Type): boolean
public "setConsumedItemInternal"(consumedItem: $ItemStack$$Type): void
public "getLevel"(): $Level
public "setLevel"(arg0: $Level$$Type): void
public "getBlock"(): $ICopycatBlock
public "init"(): void
public static "write"(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
public static "write"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public static "read"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "accept"(other: $BlockEntity$$Type): void
public "setBlockState"(arg0: $BlockState$$Type): void
public "getBlockPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "setMaterial"(blockState: $BlockState$$Type): void
public "cycleMaterial"(): boolean
public "setCTEnabled"(value: boolean): void
public "notifyUpdate"(): void
public static "writeSafe"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "setConsumedItem"(stack: $ItemStack$$Type): void
public "hasCustomMaterial"(): boolean
public "blockHolderGetter"(): $HolderGetter<($Block)>
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "modelData"(): $ModelData
get "material"(): $BlockState
get "cTEnabled"(): boolean
get "consumedItem"(): $ItemStack
set "materialInternal"(value: $BlockState$$Type)
set "cTEnabledInternal"(value: boolean)
set "consumedItemInternal"(value: $ItemStack$$Type)
get "level"(): $Level
set "level"(value: $Level$$Type)
get "block"(): $ICopycatBlock
set "blockState"(value: $BlockState$$Type)
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
set "material"(value: $BlockState$$Type)
set "cTEnabled"(value: boolean)
set "consumedItem"(value: $ItemStack$$Type)
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlidingDoorBlockEntity$$Type = ($CopycatSlidingDoorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlidingDoorBlockEntity_ = $CopycatSlidingDoorBlockEntity$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.trapdoor.CopycatTrapdoorBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$TrapDoorBlock, $TrapDoorBlock$$Type} from "net.minecraft.world.level.block.TrapDoorBlock"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatTrapdoorBlock extends $TrapDoorBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TrapDoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(type: $BlockSetType$$Type, properties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "stateType"(): $StateType
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatTrapdoorBlock$$Type = ($CopycatTrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatTrapdoorBlock_ = $CopycatTrapdoorBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.beam.CopycatBeamBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CopycatBeamBlock extends $CCWaterloggedCopycatBlock implements $IStateType {
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBeamBlock$$Type = ($CopycatBeamBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBeamBlock_ = $CopycatBeamBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.fence_gate.CopycatFenceGateBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$FenceGateBlock, $FenceGateBlock$$Type} from "net.minecraft.world.level.block.FenceGateBlock"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatFenceGateBlock extends $FenceGateBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "IN_WALL": $BooleanProperty
readonly "closeSound": $SoundEvent
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FenceGateBlock)>
readonly "openSound": $SoundEvent
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "collisionExtendsVertically"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, collidingEntity: $Entity$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "stateType"(): $StateType
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFenceGateBlock$$Type = ($CopycatFenceGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatFenceGateBlock_ = $CopycatFenceGateBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.stacked_half_layer.CopycatStackedHalfLayerBlock" {
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CopycatStackedHalfLayerBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement {
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "defaultProperty"(): StringJS
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "canBeReplaced"(state: $BlockState$$Type, context: $BlockPlaceContext$$Type): boolean
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "getColorIndex"(property: StringJS): integer
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "storageProperties"(): $Set<(StringJS)>
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatStackedHalfLayerBlock$$Type = ($CopycatStackedHalfLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatStackedHalfLayerBlock_ = $CopycatStackedHalfLayerBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.pressure_plate.CopycatPressurePlateBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$PressurePlateBlock, $PressurePlateBlock$$Type} from "net.minecraft.world.level.block.PressurePlateBlock"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CopycatPressurePlateBlock extends $PressurePlateBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PressurePlateBlock)>
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
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(type: $BlockSetType$$Type, properties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "stateType"(): $StateType
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatPressurePlateBlock$$Type = ($CopycatPressurePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatPressurePlateBlock_ = $CopycatPressurePlateBlock$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ICustomCTBlocking {

 "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
 "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
}

export namespace $ICustomCTBlocking {
const probejs$$marker: never
}
export class $ICustomCTBlocking$$Static implements $ICustomCTBlocking {


 "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
 "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomCTBlocking$$Type = ($ICustomCTBlocking);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomCTBlocking_ = $ICustomCTBlocking$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter, $HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CCCopycatBlockEntity extends $SmartBlockEntity implements $ICopycatBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(type: $BlockEntityType$$Type<(any)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "getLevel"(): $Level
public "setLevel"(level: $Level$$Type): void
public "write"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "read"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "onLoad"(): void
public "getModelData"(): $ModelData
public "setBlockState"(blockState: $BlockState$$Type): void
public "getMaterial"(): $BlockState
public "getBlockPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "addBehaviours"(behaviours: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "isCTEnabled"(): boolean
public "notifyUpdate"(): void
public "writeSafe"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "getConsumedItem"(): $ItemStack
public "blockHolderGetter"(): $HolderGetter<($Block)>
public "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
public "setMaterialInternal"(material: $BlockState$$Type): void
public "setCTEnabledInternal"(value: boolean): void
public "setConsumedItemInternal"(consumedItem: $ItemStack$$Type): void
public "getBlock"(): $ICopycatBlock
public "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
public "init"(): void
public static "write"(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
public static "write"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public static "read"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "accept"(other: $BlockEntity$$Type): void
public "setMaterial"(blockState: $BlockState$$Type): void
public "cycleMaterial"(): boolean
public "setCTEnabled"(value: boolean): void
public static "writeSafe"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "setConsumedItem"(stack: $ItemStack$$Type): void
public "hasCustomMaterial"(): boolean
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "level"(): $Level
set "level"(value: $Level$$Type)
get "modelData"(): $ModelData
set "blockState"(value: $BlockState$$Type)
get "material"(): $BlockState
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
get "cTEnabled"(): boolean
get "consumedItem"(): $ItemStack
set "materialInternal"(value: $BlockState$$Type)
set "cTEnabledInternal"(value: boolean)
set "consumedItemInternal"(value: $ItemStack$$Type)
get "block"(): $ICopycatBlock
set "material"(value: $BlockState$$Type)
set "cTEnabled"(value: boolean)
set "consumedItem"(value: $ItemStack$$Type)
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCCopycatBlockEntity$$Type = ($CCCopycatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCCopycatBlockEntity_ = $CCCopycatBlockEntity$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.stairs.CopycatStairsBlock$FaceShape" {
import {$Direction$AxisDirection, $Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $CopycatStairsBlock$FaceShape {
 "topNegative": boolean
 "bottomNegative": boolean
 "topPositive": boolean
 "bottomPositive": boolean

constructor()

public "rotate"(angle: integer): $CopycatStairsBlock$FaceShape
public "rotate"(angle: float): $CopycatStairsBlock$FaceShape
public "isFull"(): boolean
public "equals"(obj: any): boolean
public "set"(bottomNegative: boolean, bottomPositive: boolean, topNegative: boolean, topPositive: boolean): $CopycatStairsBlock$FaceShape
public "fillRight"(relativeTo: $Direction$$Type): $CopycatStairsBlock$FaceShape
public "fillLeft"(relativeTo: $Direction$$Type): $CopycatStairsBlock$FaceShape
public "fillPositive"(): $CopycatStairsBlock$FaceShape
public "fillNegative"(): $CopycatStairsBlock$FaceShape
public "countBlocks"(): integer
public "fillAll"(): $CopycatStairsBlock$FaceShape
public "fillTop"(): $CopycatStairsBlock$FaceShape
public "fillTop"(direction: $Direction$AxisDirection$$Type): $CopycatStairsBlock$FaceShape
public "fillRow"(top: boolean): $CopycatStairsBlock$FaceShape
public "fillRow"(top: boolean, direction: $Direction$AxisDirection$$Type): $CopycatStairsBlock$FaceShape
public "fillBottom"(direction: $Direction$AxisDirection$$Type): $CopycatStairsBlock$FaceShape
public "fillBottom"(): $CopycatStairsBlock$FaceShape
public "canConnect"(): boolean
public "fillColumn"(direction: $Direction$AxisDirection$$Type): $CopycatStairsBlock$FaceShape
get "full"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatStairsBlock$FaceShape$$Type = ($CopycatStairsBlock$FaceShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatStairsBlock$FaceShape_ = $CopycatStairsBlock$FaceShape$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.CopycatTransformableState" {
import {$List, $List$$Type} from "java.util.List"
import {$CopycatTransformableState$Part, $CopycatTransformableState$Part$$Type} from "com.copycatsplus.copycats.foundation.copycat.CopycatTransformableState$Part"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $CopycatTransformableState<T> {
 "parts": $List<($CopycatTransformableState$Part<(T)>)>

constructor()

public static "create"<T>(consumer: $Consumer$$Type<($CopycatTransformableState<(T)>)>): $CopycatTransformableState<(T)>
public "transform"(transform: $StructureTransform$$Type): $CopycatTransformableState<(T)>
public "untransform"(transform: $StructureTransform$$Type): $CopycatTransformableState<(T)>
public "addPart"(x: integer, y: integer, z: integer): $CopycatTransformableState$Part<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatTransformableState$$Type<T> = ($CopycatTransformableState<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatTransformableState_<T> = $CopycatTransformableState$$Type<(T)>;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.CopycatTransformableState$Part" {
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"

export class $CopycatTransformableState$Part<T> {
 "data": T
 "vector": $Vec3i

constructor(x: integer, y: integer, z: integer)

public "getData"(): T
public "setData"(data: T): $CopycatTransformableState$Part<(T)>
public "transform"(transform: $StructureTransform$$Type): $CopycatTransformableState$Part<(T)>
public "isTop"(): boolean
public "rotateY"(facing: $Direction$$Type): $CopycatTransformableState$Part<(T)>
public "rotateY"(facing: $Direction$$Type, origin: $Direction$$Type): $CopycatTransformableState$Part<(T)>
public "untransform"(transform: $StructureTransform$$Type): $CopycatTransformableState$Part<(T)>
public "isRight"(facing: $Direction$$Type): boolean
public "getFacing"(): $Direction
public "getHorizontalFacing"(): $Direction
get "data"(): T
set "data"(value: T)
get "top"(): boolean
get "facing"(): $Direction
get "horizontalFacing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatTransformableState$Part$$Type<T> = ($CopycatTransformableState$Part<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatTransformableState$Part_<T> = $CopycatTransformableState$Part$$Type<(T)>;
}}
declare module "com.copycatsplus.copycats.content.copycat.slice.CopycatSliceBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatSliceBlock extends $CCWaterloggedCopycatBlock implements $SpecialBlockItemRequirement, $IStateType {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSliceBlock$$Type = ($CopycatSliceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSliceBlock_ = $CopycatSliceBlock$$Type;
}}
declare module "com.copycatsplus.copycats.mixin.copycat.sliding_door.SlidingDoorBlockEntityAccessor" {
import {$LerpedFloat, $LerpedFloat$$Type} from "net.createmod.catnip.animation.LerpedFloat"

export interface $SlidingDoorBlockEntityAccessor {

 "getAnimation"(): $LerpedFloat

(): $LerpedFloat$$Type
get "animation"(): $LerpedFloat
}

export namespace $SlidingDoorBlockEntityAccessor {
const probejs$$marker: never
}
export class $SlidingDoorBlockEntityAccessor$$Static implements $SlidingDoorBlockEntityAccessor {


 "getAnimation"(): $LerpedFloat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlidingDoorBlockEntityAccessor$$Type = (() => $LerpedFloat$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlidingDoorBlockEntityAccessor_ = $SlidingDoorBlockEntityAccessor$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.IStateType" {
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"

/**
 * 
 * @deprecated
 */
export interface $IStateType {

 "stateType"(): $StateType
}

export namespace $IStateType {
const probejs$$marker: never
}
export class $IStateType$$Static implements $IStateType {


 "stateType"(): $StateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStateType$$Type = ($IStateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStateType_ = $IStateType$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.MultiStateCopycatBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MultiStateCopycatBlockEntity, $MultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MultiStateCopycatBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IBlockExtension, $IBlockExtension$$Type} from "net.neoforged.neoforge.common.extensions.IBlockExtension"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $MultiStateCopycatBlock extends $Block implements $IMultiStateCopycatBlock, $IBE<($MultiStateCopycatBlockEntity)>, $IBlockExtension {
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

public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "transform"(arg0: $BlockState$$Type, arg1: $StructureTransform$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, state: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, renderView: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, sourceState: $BlockState$$Type, sourcePos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getTicker"<S extends $BlockEntity>(p_153212_: $Level$$Type, p_153213_: $BlockState$$Type, p_153214_: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getBlockEntityClass"(): $Class<($MultiStateCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($MultiStateCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "defaultProperty"(): StringJS
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "canOcclude"(property: StringJS, level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "wrappedColor"(): $BlockColor
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "stateType"(): $StateType
public "vectorScale"(arg0: $BlockState$$Type): $Vec3i
public "partExists"(arg0: $BlockState$$Type, arg1: StringJS): boolean
public "fillEmptyParts"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, material: $BlockState$$Type): void
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getColorIndex"(arg0: StringJS): integer
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $IMultiStateCopycatBlockEntity
public "getAcceptedBlockState"(property: StringJS, pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public "getPartialFaceShape"(arg0: $BlockGetter$$Type, arg1: $BlockState$$Type, arg2: StringJS, arg3: $Direction$$Type): $VoxelShape
public "getVectorFromProperty"(arg0: $BlockState$$Type, arg1: StringJS): $Vec3i
public "transformStorage"(arg0: $BlockState$$Type, arg1: $IMultiStateCopycatBlockEntity$$Type, arg2: $StructureTransform$$Type): void
public "getPropertyFromRender"(renderingProperty: StringJS, state: $BlockState$$Type, level: $BlockGetter$$Type, vector: $Vec3i$$Type, blockPos: $BlockPos$$Type): StringJS
public "storageProperties"(): $Set<(StringJS)>
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public "canConnectTexturesToward"(property: StringJS, reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hit: $BlockHitResult$$Type, targetingSolid: boolean): StringJS
public "getPropertyFromInteraction"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $Vec3i$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type, arg5: $Vec3$$Type): StringJS
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hitVec: $Vec3$$Type, face: $Direction$$Type, targetingSolid: boolean): StringJS
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $MultiStateCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($MultiStateCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MultiStateCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MultiStateCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($MultiStateCopycatBlockEntity)>): void
public "asHolder"(): $Holder<(any)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
get "blockEntityClass"(): $Class<($MultiStateCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($MultiStateCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiStateCopycatBlock$$Type = ($MultiStateCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiStateCopycatBlock_ = $MultiStateCopycatBlock$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MaterialItemStorage, $MaterialItemStorage$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter, $HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IMultiStateCopycatBlockEntity extends $ICopycatBlockEntity {

 "getBlock"(): $IMultiStateCopycatBlock
 "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
 "init"(): void
 "getMaterial"(): $BlockState
 "setMaterial"(property: StringJS, blockState: $BlockState$$Type): void
 "cycleMaterial"(property: StringJS): boolean
 "isCTEnabled"(): boolean
 "setEnableCT"(property: StringJS, value: boolean): void
 "setConsumedItem"(property: StringJS, itemStack: $ItemStack$$Type): void
 "getConsumedItem"(): $ItemStack
 "hasCustomMaterial"(): boolean
 "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
 "getMaterialItemStorage"(): $MaterialItemStorage
 "setMaterialInternal"(material: $BlockState$$Type): void
 "setCTEnabledInternal"(value: boolean): void
 "setMaterialItemStorageInternal"(arg0: $MaterialItemStorage$$Type): void
 "setConsumedItemInternal"(consumedItem: $ItemStack$$Type): void
 "getLevel"(): $Level
 "setLevel"(arg0: $Level$$Type): void
 "accept"(other: $BlockEntity$$Type): void
 "onLoad"(): void
 "setBlockState"(arg0: $BlockState$$Type): void
 "getBlockPos"(): $BlockPos
 "getBlockState"(): $BlockState
 "setMaterial"(blockState: $BlockState$$Type): void
 "cycleMaterial"(): boolean
 "setCTEnabled"(value: boolean): void
 "notifyUpdate"(): void
 "setConsumedItem"(stack: $ItemStack$$Type): void
 "blockHolderGetter"(): $HolderGetter<($Block)>
 "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
get "block"(): $IMultiStateCopycatBlock
get "material"(): $BlockState
get "cTEnabled"(): boolean
get "consumedItem"(): $ItemStack
get "materialItemStorage"(): $MaterialItemStorage
set "materialInternal"(value: $BlockState$$Type)
set "cTEnabledInternal"(value: boolean)
set "materialItemStorageInternal"(value: $MaterialItemStorage$$Type)
set "consumedItemInternal"(value: $ItemStack$$Type)
get "level"(): $Level
set "level"(value: $Level$$Type)
set "blockState"(value: $BlockState$$Type)
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
set "material"(value: $BlockState$$Type)
set "cTEnabled"(value: boolean)
set "consumedItem"(value: $ItemStack$$Type)
}

export namespace $IMultiStateCopycatBlockEntity {
function write(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
function read(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
function writeSafe(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
function write(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
function write(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
function read(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
function writeSafe(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
const probejs$$marker: never
}
export class $IMultiStateCopycatBlockEntity$$Static implements $IMultiStateCopycatBlockEntity {


 "getBlock"(): $IMultiStateCopycatBlock
 "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
 "init"(): void
static "write"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
static "read"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
 "getMaterial"(): $BlockState
 "setMaterial"(property: StringJS, blockState: $BlockState$$Type): void
 "cycleMaterial"(property: StringJS): boolean
 "isCTEnabled"(): boolean
 "setEnableCT"(property: StringJS, value: boolean): void
static "writeSafe"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
 "setConsumedItem"(property: StringJS, itemStack: $ItemStack$$Type): void
 "getConsumedItem"(): $ItemStack
 "hasCustomMaterial"(): boolean
 "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
 "getMaterialItemStorage"(): $MaterialItemStorage
 "setMaterialInternal"(material: $BlockState$$Type): void
 "setCTEnabledInternal"(value: boolean): void
 "setMaterialItemStorageInternal"(arg0: $MaterialItemStorage$$Type): void
 "setConsumedItemInternal"(consumedItem: $ItemStack$$Type): void
 "getLevel"(): $Level
 "setLevel"(arg0: $Level$$Type): void
static "write"(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
static "write"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
static "read"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
 "accept"(other: $BlockEntity$$Type): void
 "onLoad"(): void
 "setBlockState"(arg0: $BlockState$$Type): void
 "getBlockPos"(): $BlockPos
 "getBlockState"(): $BlockState
 "setMaterial"(blockState: $BlockState$$Type): void
 "cycleMaterial"(): boolean
 "setCTEnabled"(value: boolean): void
 "notifyUpdate"(): void
static "writeSafe"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
 "setConsumedItem"(stack: $ItemStack$$Type): void
 "blockHolderGetter"(): $HolderGetter<($Block)>
 "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateCopycatBlockEntity$$Type = ($IMultiStateCopycatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiStateCopycatBlockEntity_ = $IMultiStateCopycatBlockEntity$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.cogwheel.CopycatCogWheelBlockEntity" {
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BracketedKineticBlockEntity, $BracketedKineticBlockEntity$$Type} from "com.simibubi.create.content.kinetics.simpleRelays.BracketedKineticBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$MaterialItemStorage, $MaterialItemStorage$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$$Type} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$HolderGetter, $HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CopycatCogWheelBlockEntity extends $BracketedKineticBlockEntity implements $IMultiStateCopycatBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(type: $BlockEntityType$$Type<(any)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
public "write"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "read"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "onLoad"(): void
public "getModelData"(): $ModelData
public "writeSafe"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
public "getMaterialItemStorage"(): $MaterialItemStorage
public "setMaterialItemStorageInternal"(storage: $MaterialItemStorage$$Type): void
public "getBlock"(): $IMultiStateCopycatBlock
public "init"(): void
public static "write"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public static "read"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "getMaterial"(): $BlockState
public "setMaterial"(property: StringJS, blockState: $BlockState$$Type): void
public "cycleMaterial"(property: StringJS): boolean
public "isCTEnabled"(): boolean
public "setEnableCT"(property: StringJS, value: boolean): void
public static "writeSafe"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "setConsumedItem"(property: StringJS, itemStack: $ItemStack$$Type): void
public "getConsumedItem"(): $ItemStack
public "hasCustomMaterial"(): boolean
public "setMaterialInternal"(material: $BlockState$$Type): void
public "setCTEnabledInternal"(value: boolean): void
public "setConsumedItemInternal"(consumedItem: $ItemStack$$Type): void
public "getLevel"(): $Level
public "setLevel"(arg0: $Level$$Type): void
public static "write"(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
public static "write"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public static "read"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "accept"(other: $BlockEntity$$Type): void
public "setBlockState"(arg0: $BlockState$$Type): void
public "getBlockPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "setMaterial"(blockState: $BlockState$$Type): void
public "cycleMaterial"(): boolean
public "setCTEnabled"(value: boolean): void
public "notifyUpdate"(): void
public static "writeSafe"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "setConsumedItem"(stack: $ItemStack$$Type): void
public "blockHolderGetter"(): $HolderGetter<($Block)>
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "modelData"(): $ModelData
get "materialItemStorage"(): $MaterialItemStorage
set "materialItemStorageInternal"(value: $MaterialItemStorage$$Type)
get "block"(): $IMultiStateCopycatBlock
get "material"(): $BlockState
get "cTEnabled"(): boolean
get "consumedItem"(): $ItemStack
set "materialInternal"(value: $BlockState$$Type)
set "cTEnabledInternal"(value: boolean)
set "consumedItemInternal"(value: $ItemStack$$Type)
get "level"(): $Level
set "level"(value: $Level$$Type)
set "blockState"(value: $BlockState$$Type)
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
set "material"(value: $BlockState$$Type)
set "cTEnabled"(value: boolean)
set "consumedItem"(value: $ItemStack$$Type)
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatCogWheelBlockEntity$$Type = ($CopycatCogWheelBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatCogWheelBlockEntity_ = $CopycatCogWheelBlockEntity$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.vertical_slope.CopycatVerticalSlopeBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICustomCTBlocking, $ICustomCTBlocking$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatVerticalSlopeBlock extends $CCWaterloggedCopycatBlock implements $IStateType, $ICustomCTBlocking {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalSlopeBlock$$Type = ($CopycatVerticalSlopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalSlopeBlock_ = $CopycatVerticalSlopeBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.pane.CopycatPaneBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICustomCTBlocking, $ICustomCTBlocking$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$ConnectedGlassPaneBlock, $ConnectedGlassPaneBlock$$Type} from "com.simibubi.create.content.decoration.palettes.ConnectedGlassPaneBlock"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IronBarsBlock, $IronBarsBlock$$Type} from "net.minecraft.world.level.block.IronBarsBlock"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CopycatPaneBlock extends $ConnectedGlassPaneBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType, $ICustomCTBlocking {
 "shapeByIndex": ($VoxelShape)[]
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($IronBarsBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "collisionShapeByIndex": ($VoxelShape)[]
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "propertyForDirection"(direction: $Direction$$Type): $BooleanProperty
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "stateType"(): $StateType
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatPaneBlock$$Type = ($CopycatPaneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatPaneBlock_ = $CopycatPaneBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.board.CopycatBoxItem" {
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

export class $CopycatBoxItem extends $BlockItem {
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

constructor(builder: $Item$Properties$$Type)

public "registerBlocks"(map: $Map$$Type<($Block$$Type), ($Item$$Type)>, self: $Item$$Type): void
public "getDescriptionId"(): StringJS
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBoxItem$$Type = ($CopycatBoxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBoxItem_ = $CopycatBoxItem$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.shaft.CopycatShaftBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ShaftBlock, $ShaftBlock$$Type} from "com.simibubi.create.content.kinetics.simpleRelays.ShaftBlock"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICustomCTBlocking, $ICustomCTBlocking$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$KineticBlockEntity, $KineticBlockEntity$$Type} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CopycatShaftBlock extends $ShaftBlock implements $ICopycatBlock, $ICustomCTBlocking {
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
static readonly "placementHelperId": integer
 "hasCollision": boolean
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
get "blockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatShaftBlock$$Type = ($CopycatShaftBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatShaftBlock_ = $CopycatShaftBlock$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.StateType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

/**
 * 
 * @deprecated
 */
export class $StateType extends $Enum<($StateType)> {
static readonly "SINGULAR": $StateType
static readonly "MULTI": $StateType


public static "values"(): ($StateType)[]
public static "valueOf"(name: StringJS): $StateType
public static "getTypeFromBlock"(block: $Block$$Type): $StateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateType$$Type = (("singular") | ("multi"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateType_ = $StateType$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.vertical_stairs.CopycatVerticalStairBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ICustomCTBlocking, $ICustomCTBlocking$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CopycatStairsBlock$FaceShape, $CopycatStairsBlock$FaceShape$$Type} from "com.copycatsplus.copycats.content.copycat.stairs.CopycatStairsBlock$FaceShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$CCBlockStateProperties$VerticalStairShape, $CCBlockStateProperties$VerticalStairShape$$Type} from "com.copycatsplus.copycats.CCBlockStateProperties$VerticalStairShape"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$CCBlockStateProperties$Side, $CCBlockStateProperties$Side$$Type} from "com.copycatsplus.copycats.CCBlockStateProperties$Side"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatVerticalStairBlock extends $CCWaterloggedCopycatBlock implements $ICustomCTBlocking, $IStateType {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "SIDE": $EnumProperty<($CCBlockStateProperties$Side)>
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $EnumProperty<($CCBlockStateProperties$VerticalStairShape)>
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public static "getFaceShape"(state: $BlockState$$Type, face: $Direction$$Type): $CopycatStairsBlock$FaceShape
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public static "isStairs"(state: $BlockState$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "useShapeForLightOcclusion"(pState: $BlockState$$Type): boolean
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalStairBlock$$Type = ($CopycatVerticalStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalStairBlock_ = $CopycatVerticalStairBlock$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TransformableBlockEntity, $TransformableBlockEntity$$Type} from "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$IMergeableBE, $IMergeableBE$$Type} from "com.simibubi.create.foundation.blockEntity.IMergeableBE"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter, $HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockEntityItemRequirement, $SpecialBlockEntityItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockEntityItemRequirement"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$PartialSafeNBT, $PartialSafeNBT$$Type} from "com.simibubi.create.api.schematic.nbt.PartialSafeNBT"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ICopycatBlockEntity extends $SpecialBlockEntityItemRequirement, $TransformableBlockEntity, $PartialSafeNBT, $IMergeableBE {

 "getLevel"(): $Level
 "setLevel"(arg0: $Level$$Type): void
 "getBlock"(): $ICopycatBlock
 "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
 "init"(): void
 "accept"(other: $BlockEntity$$Type): void
 "onLoad"(): void
 "setBlockState"(arg0: $BlockState$$Type): void
 "getMaterial"(): $BlockState
 "getBlockPos"(): $BlockPos
 "getBlockState"(): $BlockState
 "setMaterial"(blockState: $BlockState$$Type): void
 "cycleMaterial"(): boolean
 "isCTEnabled"(): boolean
 "setCTEnabled"(value: boolean): void
 "notifyUpdate"(): void
 "setConsumedItem"(stack: $ItemStack$$Type): void
 "getConsumedItem"(): $ItemStack
 "hasCustomMaterial"(): boolean
 "blockHolderGetter"(): $HolderGetter<($Block)>
 "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
 "setMaterialInternal"(arg0: $BlockState$$Type): void
 "setCTEnabledInternal"(arg0: boolean): void
 "setConsumedItemInternal"(arg0: $ItemStack$$Type): void
 "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
get "level"(): $Level
set "level"(value: $Level$$Type)
get "block"(): $ICopycatBlock
set "blockState"(value: $BlockState$$Type)
get "material"(): $BlockState
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
set "material"(value: $BlockState$$Type)
get "cTEnabled"(): boolean
set "cTEnabled"(value: boolean)
set "consumedItem"(value: $ItemStack$$Type)
get "consumedItem"(): $ItemStack
set "materialInternal"(value: $BlockState$$Type)
set "cTEnabledInternal"(value: boolean)
set "consumedItemInternal"(value: $ItemStack$$Type)
}

export namespace $ICopycatBlockEntity {
function write(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
function write(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
function read(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
function writeSafe(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
const probejs$$marker: never
}
export class $ICopycatBlockEntity$$Static implements $ICopycatBlockEntity {


 "getLevel"(): $Level
 "setLevel"(arg0: $Level$$Type): void
 "getBlock"(): $ICopycatBlock
 "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
 "init"(): void
static "write"(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
static "write"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
static "read"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
 "accept"(other: $BlockEntity$$Type): void
 "onLoad"(): void
 "setBlockState"(arg0: $BlockState$$Type): void
 "getMaterial"(): $BlockState
 "getBlockPos"(): $BlockPos
 "getBlockState"(): $BlockState
 "setMaterial"(blockState: $BlockState$$Type): void
 "cycleMaterial"(): boolean
 "isCTEnabled"(): boolean
 "setCTEnabled"(value: boolean): void
 "notifyUpdate"(): void
static "writeSafe"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
 "setConsumedItem"(stack: $ItemStack$$Type): void
 "getConsumedItem"(): $ItemStack
 "hasCustomMaterial"(): boolean
 "blockHolderGetter"(): $HolderGetter<($Block)>
 "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
 "setMaterialInternal"(arg0: $BlockState$$Type): void
 "setCTEnabledInternal"(arg0: boolean): void
 "setConsumedItemInternal"(arg0: $ItemStack$$Type): void
 "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICopycatBlockEntity$$Type = ($ICopycatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICopycatBlockEntity_ = $ICopycatBlockEntity$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ICopycatBlock$OnRemoveHandler {

 "handle"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void

(arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $BlockState, arg4: boolean): void
}

export namespace $ICopycatBlock$OnRemoveHandler {
const probejs$$marker: never
}
export class $ICopycatBlock$OnRemoveHandler$$Static implements $ICopycatBlock$OnRemoveHandler {


 "handle"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICopycatBlock$OnRemoveHandler$$Type = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $BlockState, arg4: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICopycatBlock$OnRemoveHandler_ = $ICopycatBlock$OnRemoveHandler$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.button.CopycatButtonBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$AttachFace, $AttachFace$$Type} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$ButtonBlock, $ButtonBlock$$Type} from "net.minecraft.world.level.block.ButtonBlock"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatButtonBlock extends $ButtonBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "type": $BlockSetType
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ButtonBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
readonly "ticksToStayPressed": integer
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
 "hasCollision": boolean

constructor(type: $BlockSetType$$Type, ticksToStayPressed: integer, properties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "stateType"(): $StateType
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatButtonBlock$$Type = ($CopycatButtonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatButtonBlock_ = $CopycatButtonBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.board.CopycatCatwalkItem" {
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

export class $CopycatCatwalkItem extends $BlockItem {
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

constructor(builder: $Item$Properties$$Type)

public "registerBlocks"(map: $Map$$Type<($Block$$Type), ($Item$$Type)>, self: $Item$$Type): void
public "getDescriptionId"(): StringJS
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatCatwalkItem$$Type = ($CopycatCatwalkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatCatwalkItem_ = $CopycatCatwalkItem$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $IMultiStateCopycatBlock extends $ICopycatBlock, $IStateType {

 "defaultProperty"(): StringJS
 "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
 "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
 "canOcclude"(property: StringJS, level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
 "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
 "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
 "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
 "stateType"(): $StateType
 "vectorScale"(arg0: $BlockState$$Type): $Vec3i
 "partExists"(arg0: $BlockState$$Type, arg1: StringJS): boolean
 "fillEmptyParts"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, material: $BlockState$$Type): void
 "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
 "getColorIndex"(arg0: StringJS): integer
 "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $IMultiStateCopycatBlockEntity
 "getAcceptedBlockState"(property: StringJS, pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
 "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
 "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
 "getPartialFaceShape"(arg0: $BlockGetter$$Type, arg1: $BlockState$$Type, arg2: StringJS, arg3: $Direction$$Type): $VoxelShape
 "getVectorFromProperty"(arg0: $BlockState$$Type, arg1: StringJS): $Vec3i
 "transformStorage"(arg0: $BlockState$$Type, arg1: $IMultiStateCopycatBlockEntity$$Type, arg2: $StructureTransform$$Type): void
 "getPropertyFromRender"(renderingProperty: StringJS, state: $BlockState$$Type, level: $BlockGetter$$Type, vector: $Vec3i$$Type, blockPos: $BlockPos$$Type): StringJS
 "storageProperties"(): $Set<(StringJS)>
 "canConnectTexturesToward"(property: StringJS, reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
 "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hit: $BlockHitResult$$Type, targetingSolid: boolean): StringJS
 "getPropertyFromInteraction"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $Vec3i$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type, arg5: $Vec3$$Type): StringJS
 "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hitVec: $Vec3$$Type, face: $Direction$$Type, targetingSolid: boolean): StringJS
 "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
 "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
 "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
 "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
 "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
 "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
 "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
 "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
 "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
 "isAcceptedRegardless"(material: $BlockState$$Type): boolean
 "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
 "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
 "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
 "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
 "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
}

export namespace $IMultiStateCopycatBlock {
function getAppearance(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
function getMaterial(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
function wrappedColor(): $BlockColor
function getRequiredItemsForParts(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
function getAppearance(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
function getMaterial(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
function hidesNeighborFace(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
function getRequiredItemsForLayer(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
function playRotateSound(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
function playRemoveSound(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
const probejs$$marker: never
}
export class $IMultiStateCopycatBlock$$Static implements $IMultiStateCopycatBlock {


 "defaultProperty"(): StringJS
static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
 "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
 "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
 "canOcclude"(property: StringJS, level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
 "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
 "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
static "wrappedColor"(): $BlockColor
 "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
 "stateType"(): $StateType
 "vectorScale"(arg0: $BlockState$$Type): $Vec3i
 "partExists"(arg0: $BlockState$$Type, arg1: StringJS): boolean
 "fillEmptyParts"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, material: $BlockState$$Type): void
 "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
 "getColorIndex"(arg0: StringJS): integer
 "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $IMultiStateCopycatBlockEntity
 "getAcceptedBlockState"(property: StringJS, pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
 "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
 "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
 "getPartialFaceShape"(arg0: $BlockGetter$$Type, arg1: $BlockState$$Type, arg2: StringJS, arg3: $Direction$$Type): $VoxelShape
 "getVectorFromProperty"(arg0: $BlockState$$Type, arg1: StringJS): $Vec3i
 "transformStorage"(arg0: $BlockState$$Type, arg1: $IMultiStateCopycatBlockEntity$$Type, arg2: $StructureTransform$$Type): void
 "getPropertyFromRender"(renderingProperty: StringJS, state: $BlockState$$Type, level: $BlockGetter$$Type, vector: $Vec3i$$Type, blockPos: $BlockPos$$Type): StringJS
 "storageProperties"(): $Set<(StringJS)>
static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
 "canConnectTexturesToward"(property: StringJS, reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
 "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hit: $BlockHitResult$$Type, targetingSolid: boolean): StringJS
 "getPropertyFromInteraction"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $Vec3i$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type, arg5: $Vec3$$Type): StringJS
 "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hitVec: $Vec3$$Type, face: $Direction$$Type, targetingSolid: boolean): StringJS
 "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
 "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
 "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
 "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
 "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
 "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
 "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
 "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
 "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
 "isAcceptedRegardless"(material: $BlockState$$Type): boolean
 "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
 "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
 "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
 "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateCopycatBlock$$Type = ($IMultiStateCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiStateCopycatBlock_ = $IMultiStateCopycatBlock$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage$MaterialItem" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MaterialItemStorage$MaterialItem {

constructor(material: $BlockState$$Type, consumedItem: $ItemStack$$Type)
constructor(material: $BlockState$$Type, consumedItem: $ItemStack$$Type, enableCT: boolean)

public static "deserialize"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): $MaterialItemStorage$MaterialItem
public "serialize"(registries: $HolderLookup$Provider$$Type): $CompoundTag
public "serializeSafe"(registries: $HolderLookup$Provider$$Type): $CompoundTag
public "consumedItem"(): $ItemStack
public "setMaterial"(material: $BlockState$$Type): void
public "enableCT"(): boolean
public "setEnableCT"(enableCT: boolean): void
public "material"(): $BlockState
public "setConsumedItem"(stack: $ItemStack$$Type): void
public "hasCustomMaterial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialItemStorage$MaterialItem$$Type = ($MaterialItemStorage$MaterialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialItemStorage$MaterialItem_ = $MaterialItemStorage$MaterialItem$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.vertical_slice.CopycatVerticalSliceBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatVerticalSliceBlock extends $CCWaterloggedCopycatBlock implements $SpecialBlockItemRequirement, $IStateType {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalSliceBlock$$Type = ($CopycatVerticalSliceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalSliceBlock_ = $CopycatVerticalSliceBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.ghost_block.CopycatGhostBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CCCopycatBlock, $CCCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CopycatGhostBlock extends $CCCopycatBlock implements $IStateType {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "canConnectTexturesToward"(blockAndTintGetter: $BlockAndTintGetter$$Type, blockPos: $BlockPos$$Type, blockPos1: $BlockPos$$Type, blockState: $BlockState$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatGhostBlock$$Type = ($CopycatGhostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatGhostBlock_ = $CopycatGhostBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.slab.CopycatSlabBlock$FaceShape" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$SlabType, $SlabType$$Type} from "net.minecraft.world.level.block.state.properties.SlabType"

export class $CopycatSlabBlock$FaceShape extends $Enum<($CopycatSlabBlock$FaceShape)> {
static readonly "TOP": $CopycatSlabBlock$FaceShape
static readonly "BOTTOM": $CopycatSlabBlock$FaceShape
static readonly "NONE": $CopycatSlabBlock$FaceShape
static readonly "FULL": $CopycatSlabBlock$FaceShape


public static "values"(): ($CopycatSlabBlock$FaceShape)[]
public static "valueOf"(name: StringJS): $CopycatSlabBlock$FaceShape
public static "fullOrNone"(value: boolean): $CopycatSlabBlock$FaceShape
public "hasContact"(): boolean
public static "forSlabSide"(type: $SlabType$$Type): $CopycatSlabBlock$FaceShape
public static "canConnect"(shape1: $CopycatSlabBlock$FaceShape$$Type, shape2: $CopycatSlabBlock$FaceShape$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlabBlock$FaceShape$$Type = (("full") | ("top") | ("bottom") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlabBlock$FaceShape_ = $CopycatSlabBlock$FaceShape$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.MultiStateCopycatBlockEntity" {
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$HolderGetter, $HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$MaterialItemStorage, $MaterialItemStorage$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $MultiStateCopycatBlockEntity extends $SmartBlockEntity implements $IMultiStateCopycatBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(type: $BlockEntityType$$Type<(any)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "write"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "read"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "onLoad"(): void
public "getModelData"(): $ModelData
public "migrateData"(copycatBlockEntity: $ICopycatBlockEntity$$Type): void
public "addBehaviours"(behaviours: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "writeSafe"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
public "getMaterialItemStorage"(): $MaterialItemStorage
public "setMaterialItemStorageInternal"(storage: $MaterialItemStorage$$Type): void
public "getBlock"(): $IMultiStateCopycatBlock
public "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
public "init"(): void
public static "write"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public static "read"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "getMaterial"(): $BlockState
public "setMaterial"(property: StringJS, blockState: $BlockState$$Type): void
public "cycleMaterial"(property: StringJS): boolean
public "isCTEnabled"(): boolean
public "setEnableCT"(property: StringJS, value: boolean): void
public static "writeSafe"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "setConsumedItem"(property: StringJS, itemStack: $ItemStack$$Type): void
public "getConsumedItem"(): $ItemStack
public "hasCustomMaterial"(): boolean
public "setMaterialInternal"(material: $BlockState$$Type): void
public "setCTEnabledInternal"(value: boolean): void
public "setConsumedItemInternal"(consumedItem: $ItemStack$$Type): void
public "getLevel"(): $Level
public "setLevel"(arg0: $Level$$Type): void
public static "write"(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
public static "write"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public static "read"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "accept"(other: $BlockEntity$$Type): void
public "setBlockState"(arg0: $BlockState$$Type): void
public "getBlockPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "setMaterial"(blockState: $BlockState$$Type): void
public "cycleMaterial"(): boolean
public "setCTEnabled"(value: boolean): void
public "notifyUpdate"(): void
public static "writeSafe"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "setConsumedItem"(stack: $ItemStack$$Type): void
public "blockHolderGetter"(): $HolderGetter<($Block)>
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "modelData"(): $ModelData
get "materialItemStorage"(): $MaterialItemStorage
set "materialItemStorageInternal"(value: $MaterialItemStorage$$Type)
get "block"(): $IMultiStateCopycatBlock
get "material"(): $BlockState
get "cTEnabled"(): boolean
get "consumedItem"(): $ItemStack
set "materialInternal"(value: $BlockState$$Type)
set "cTEnabledInternal"(value: boolean)
set "consumedItemInternal"(value: $ItemStack$$Type)
get "level"(): $Level
set "level"(value: $Level$$Type)
set "blockState"(value: $BlockState$$Type)
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
set "material"(value: $BlockState$$Type)
set "cTEnabled"(value: boolean)
set "consumedItem"(value: $ItemStack$$Type)
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiStateCopycatBlockEntity$$Type = ($MultiStateCopycatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiStateCopycatBlockEntity_ = $MultiStateCopycatBlockEntity$$Type;
}}
declare module "com.copycatsplus.copycats.mixin.copycat.VoxelShapeAccessor" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$DoubleList, $DoubleList$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleList"
import {$DiscreteVoxelShape, $DiscreteVoxelShape$$Type} from "net.minecraft.world.phys.shapes.DiscreteVoxelShape"

export interface $VoxelShapeAccessor {

 "copycats$getShape"(): $DiscreteVoxelShape
 "copycats$setShape"(arg0: $DiscreteVoxelShape$$Type): void
 "copycats$callGetCoords"(arg0: $Direction$Axis$$Type): $DoubleList
}

export namespace $VoxelShapeAccessor {
const probejs$$marker: never
}
export class $VoxelShapeAccessor$$Static implements $VoxelShapeAccessor {


 "copycats$getShape"(): $DiscreteVoxelShape
 "copycats$setShape"(arg0: $DiscreteVoxelShape$$Type): void
 "copycats$callGetCoords"(arg0: $Direction$Axis$$Type): $DoubleList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeAccessor$$Type = ($VoxelShapeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeAccessor_ = $VoxelShapeAccessor$$Type;
}}
declare module "com.copycatsplus.copycats.CCBlockStateProperties$VerticalStairShape" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $CCBlockStateProperties$VerticalStairShape extends $Enum<($CCBlockStateProperties$VerticalStairShape)> implements $StringRepresentable {
static readonly "OUTER_BOTTOM": $CCBlockStateProperties$VerticalStairShape
static readonly "STRAIGHT": $CCBlockStateProperties$VerticalStairShape
static readonly "OUTER_TOP": $CCBlockStateProperties$VerticalStairShape
static readonly "INNER_BOTTOM": $CCBlockStateProperties$VerticalStairShape
static readonly "INNER_TOP": $CCBlockStateProperties$VerticalStairShape


public static "values"(): ($CCBlockStateProperties$VerticalStairShape)[]
public static "valueOf"(name: StringJS): $CCBlockStateProperties$VerticalStairShape
public "isTop"(): boolean
public "isOuter"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "top"(): boolean
get "outer"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCBlockStateProperties$VerticalStairShape$$Type = (("straight") | ("outer_top") | ("outer_bottom") | ("inner_top") | ("inner_bottom"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCBlockStateProperties$VerticalStairShape_ = $CCBlockStateProperties$VerticalStairShape$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.fence.CopycatFenceBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$FenceBlock, $FenceBlock$$Type} from "net.minecraft.world.level.block.FenceBlock"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CopycatFenceBlock extends $FenceBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
 "shapeByIndex": ($VoxelShape)[]
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FenceBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "collisionShapeByIndex": ($VoxelShape)[]
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public static "byDirection"(direction: $Direction$$Type): $BooleanProperty
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "collisionExtendsVertically"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, collidingEntity: $Entity$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "stateType"(): $StateType
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFenceBlock$$Type = ($CopycatFenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatFenceBlock_ = $CopycatFenceBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.board.CopycatBoardBlock" {
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ICustomCTBlocking, $ICustomCTBlocking$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CopycatBoardBlock extends $WaterloggedMultiStateCopycatBlock implements $ICustomCTBlocking, $SpecialBlockItemRequirement {
static "DOWN": $BooleanProperty
static "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static "UP": $BooleanProperty
static "SOUTH": $BooleanProperty
static "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "defaultProperty"(): StringJS
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public static "byDirection"(direction: $Direction$$Type): $BooleanProperty
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "getColorIndex"(property: StringJS): integer
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "getPropertyFromRender"(renderingProperty: StringJS, state: $BlockState$$Type, level: $BlockGetter$$Type, vector: $Vec3i$$Type, blockPos: $BlockPos$$Type): StringJS
public "storageProperties"(): $Set<(StringJS)>
public static "directionToProperty"(direction: $Direction$$Type): StringJS
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(property: StringJS, reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBoardBlock$$Type = ($CopycatBoardBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBoardBlock_ = $CopycatBoardBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.block.CopycatBlockBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CCCopycatBlock, $CCCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CopycatBlockBlock extends $CCCopycatBlock implements $IStateType {
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

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBlockBlock$$Type = ($CopycatBlockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBlockBlock_ = $CopycatBlockBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.vertical_step.CopycatVerticalStepBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatVerticalStepBlock extends $CCWaterloggedCopycatBlock implements $IStateType {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalStepBlock$$Type = ($CopycatVerticalStepBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalStepBlock_ = $CopycatVerticalStepBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.ladder.CopycatLadderBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$LadderBlock, $LadderBlock$$Type} from "net.minecraft.world.level.block.LadderBlock"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatLadderBlock extends $LadderBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static "RAILS": $BooleanProperty
static readonly "CODEC": $MapCodec<($LadderBlock)>
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
static "STEPS": $BooleanProperty

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getStateForPlacement"(pContext: $BlockPlaceContext$$Type): $BlockState
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getOcclusionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(blockAndTintGetter: $BlockAndTintGetter$$Type, blockPos: $BlockPos$$Type, blockPos1: $BlockPos$$Type, blockState: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "stateType"(): $StateType
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatLadderBlock$$Type = ($CopycatLadderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatLadderBlock_ = $CopycatLadderBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.fluid_pipe.CopycatFluidPipeBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$FluidPipeBlock, $FluidPipeBlock$$Type} from "com.simibubi.create.content.fluids.pipes.FluidPipeBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$FluidPipeBlockEntity, $FluidPipeBlockEntity$$Type} from "com.simibubi.create.content.fluids.pipes.FluidPipeBlockEntity"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CopycatFluidPipeBlock extends $FluidPipeBlock implements $ICopycatBlock {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FluidPipeBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRotation: $Rotation$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<($FluidPipeBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
get "blockEntityType"(): $BlockEntityType<($FluidPipeBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFluidPipeBlock$$Type = ($CopycatFluidPipeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatFluidPipeBlock_ = $CopycatFluidPipeBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.flat_pane.CopycatFlatPaneBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICustomCTBlocking, $ICustomCTBlocking$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CopycatFlatPaneBlock extends $CCWaterloggedCopycatBlock implements $IStateType, $ICustomCTBlocking {
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFlatPaneBlock$$Type = ($CopycatFlatPaneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatFlatPaneBlock_ = $CopycatFlatPaneBlock$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Set, $Set$$Type} from "java.util.Set"
import {$MaterialItemStorage$MaterialItem, $MaterialItemStorage$MaterialItem$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage$MaterialItem"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MaterialItemStorage {


public static "create"(properties: $Set$$Type<(StringJS)>): $MaterialItemStorage
public "deserialize"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): boolean
public "serialize"(registries: $HolderLookup$Provider$$Type): $CompoundTag
public "getMaterialMap"(): $Map<(StringJS), ($BlockState)>
public "serializeSafe"(registries: $HolderLookup$Provider$$Type): $CompoundTag
public "remapStorage"(keyMapper: $Function$$Type<(StringJS), (StringJS)>): void
public "hasCustomMaterial"(property: StringJS): boolean
public "getAllProperties"(): $Set<(StringJS)>
public "storeMaterialItem"(property: StringJS, materialItem: $MaterialItemStorage$MaterialItem$$Type): void
public "getMaterialItem"(property: StringJS): $MaterialItemStorage$MaterialItem
public "getAllMaterialItems"(): $Set<($MaterialItemStorage$MaterialItem)>
public "getAllMaterials"(): $Set<($BlockState)>
public "getAllConsumedItems"(): $List<($ItemStack)>
get "materialMap"(): $Map<(StringJS), ($BlockState)>
get "allProperties"(): $Set<(StringJS)>
get "allMaterialItems"(): $Set<($MaterialItemStorage$MaterialItem)>
get "allMaterials"(): $Set<($BlockState)>
get "allConsumedItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialItemStorage$$Type = ($MaterialItemStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialItemStorage_ = $MaterialItemStorage$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.slope_layer.CopycatSlopeLayerBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatSlopeLayerBlock extends $CCWaterloggedCopycatBlock implements $SpecialBlockItemRequirement, $IStateType {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getShadeBrightness"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): float
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlopeLayerBlock$$Type = ($CopycatSlopeLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlopeLayerBlock_ = $CopycatSlopeLayerBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.slab.CopycatSlabBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SlabType, $SlabType$$Type} from "net.minecraft.world.level.block.state.properties.SlabType"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$CopycatSlabBlock$FaceShape, $CopycatSlabBlock$FaceShape$$Type} from "com.copycatsplus.copycats.content.copycat.slab.CopycatSlabBlock$FaceShape"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CopycatTransformableState, $CopycatTransformableState$$Type} from "com.copycatsplus.copycats.foundation.copycat.CopycatTransformableState"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$MaterialItemStorage$MaterialItem, $MaterialItemStorage$MaterialItem$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage$MaterialItem"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CopycatSlabBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement {
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "SLAB_TYPE": $EnumProperty<($SlabType)>

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "defaultProperty"(): StringJS
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public static "getFaceShape"(state: $BlockState$$Type, face: $Direction$$Type): $CopycatSlabBlock$FaceShape
public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "getColorIndex"(property: StringJS): integer
public static "getApparentDirection"(state: $BlockState$$Type): $Direction
public static "setApparentDirection"(state: $BlockState$$Type, direction: $Direction$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public static "toTransformableState"(state: $BlockState$$Type): $CopycatTransformableState<(void)>
public static "toTransformableStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type): $CopycatTransformableState<($MaterialItemStorage$MaterialItem)>
public static "fromTransformableState"(state: $BlockState$$Type, transformableState: $CopycatTransformableState$$Type<(void)>): $BlockState
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "storageProperties"(): $Set<(StringJS)>
public static "fromTransformableStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transformableState: $CopycatTransformableState$$Type<($MaterialItemStorage$MaterialItem$$Type)>): void
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlabBlock$$Type = ($CopycatSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlabBlock_ = $CopycatSlabBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.byte_panel.CopycatBytePanelBlock" {
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Vector2i, $Vector2i$$Type} from "org.joml.Vector2i"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatBytePanelBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement {
static "TOP_LEFT": $BooleanProperty
static "BOTTOM_RIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static "TOP_RIGHT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static "BOTTOM_LEFT": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public static "getProperty"(horizontal: integer, vertical: integer): StringJS
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "defaultProperty"(): StringJS
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "canBeReplaced"(state: $BlockState$$Type, context: $BlockPlaceContext$$Type): boolean
public static "getHorizontal"(facing: $Direction$$Type): $Direction
public static "getVertical"(facing: $Direction$$Type): $Direction
public static "getVector"(property: StringJS): $Vector2i
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public static "fromProperty"(property: StringJS): $BooleanProperty
public "getColorIndex"(property: StringJS): integer
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "storageProperties"(): $Set<(StringJS)>
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBytePanelBlock$$Type = ($CopycatBytePanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBytePanelBlock_ = $CopycatBytePanelBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.bytes.CopycatByteBlock" {
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$CopycatByteBlock$Byte, $CopycatByteBlock$Byte$$Type} from "com.copycatsplus.copycats.content.copycat.bytes.CopycatByteBlock$Byte"

export class $CopycatByteBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement {
static "TOP_NW": $BooleanProperty
static "TOP_SE": $BooleanProperty
static "BOTTOM_NE": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "allBytes": $List<($CopycatByteBlock$Byte)>
 "descriptionId": StringJS
static "TOP_NE": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "byteMap": $Map<(StringJS), ($CopycatByteBlock$Byte)>
static "BOTTOM_NW": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "BOTTOM_SE": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static "TOP_SW": $BooleanProperty
static readonly "INSTANT": float
static "BOTTOM_SW": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "defaultProperty"(): StringJS
public static "bite"(x: boolean, y: boolean, z: boolean): $CopycatByteBlock$Byte
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public static "byByte"(bite: $CopycatByteBlock$Byte$$Type): $BooleanProperty
public static "byByte"(x: boolean, y: boolean, z: boolean): $BooleanProperty
public static "getByteFromVec"(vec: $Vec3$$Type, pos: $BlockPos$$Type): $CopycatByteBlock$Byte
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "getColorIndex"(property: StringJS): integer
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "storageProperties"(): $Set<(StringJS)>
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatByteBlock$$Type = ($CopycatByteBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatByteBlock_ = $CopycatByteBlock$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CCCopycatBlock extends $Block implements $IBE<($CCCopycatBlockEntity)>, $ICopycatBlock {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "transform"(arg0: $BlockState$$Type, arg1: $StructureTransform$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public static "getMaterial"(level: $BlockGetter$$Type, pos: $BlockPos$$Type): $BlockState
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "stateType"(): $StateType
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCCopycatBlock$$Type = ($CCCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCCopycatBlock_ = $CCCopycatBlock$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.CopycatBaseBlock" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CopycatBaseBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "BASE_TYPE_COUNT": integer
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
static readonly "BASE_TYPE": $IntegerProperty
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBaseBlock$$Type = ($CopycatBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBaseBlock_ = $CopycatBaseBlock$$Type;
}}
declare module "com.copycatsplus.copycats.mixin.foundation.copycat.ChunkAccessAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $ChunkAccessAccessor {

 "getBlockEntities"(): $Map<($BlockPos), ($BlockEntity)>

(): $Map$$Type<($BlockPos$$Type), ($BlockEntity$$Type)>
get "blockEntities"(): $Map<($BlockPos), ($BlockEntity)>
}

export namespace $ChunkAccessAccessor {
const probejs$$marker: never
}
export class $ChunkAccessAccessor$$Static implements $ChunkAccessAccessor {


 "getBlockEntities"(): $Map<($BlockPos), ($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkAccessAccessor$$Type = (() => $Map$$Type<($BlockPos$$Type), ($BlockEntity$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkAccessAccessor_ = $ChunkAccessAccessor$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.slope.CopycatSlopeBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICustomCTBlocking, $ICustomCTBlocking$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatSlopeBlock extends $CCWaterloggedCopycatBlock implements $IStateType, $ICustomCTBlocking {
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
static readonly "HALF": $EnumProperty<($Half)>
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlopeBlock$$Type = ($CopycatSlopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlopeBlock_ = $CopycatSlopeBlock$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.WrappedCopycatBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$CopycatBlock, $CopycatBlock$$Type} from "com.simibubi.create.content.decoration.copycat.CopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WrappedCopycatBlock extends $CopycatBlock {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getWrapped"(): $ICopycatBlock
public "setWrapped"(wrapped: $ICopycatBlock$$Type): void
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
get "wrapped"(): $ICopycatBlock
set "wrapped"(value: $ICopycatBlock$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedCopycatBlock$$Type = ($WrappedCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedCopycatBlock_ = $WrappedCopycatBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.vertical_half_layer.CopycatVerticalHalfLayerBlock" {
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CopycatVerticalHalfLayerBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement {
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
static readonly "FACING": $EnumProperty<($Direction)>
 "hasCollision": boolean

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "defaultProperty"(): StringJS
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "canBeReplaced"(state: $BlockState$$Type, context: $BlockPlaceContext$$Type): boolean
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "getColorIndex"(property: StringJS): integer
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "storageProperties"(): $Set<(StringJS)>
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalHalfLayerBlock$$Type = ($CopycatVerticalHalfLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalHalfLayerBlock_ = $CopycatVerticalHalfLayerBlock$$Type;
}}
declare module "com.copycatsplus.copycats.mixin.foundation.copycat.BlockEntityAccessor" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $BlockEntityAccessor {

 "callSaveMetadata"(arg0: $CompoundTag$$Type): void

(arg0: $CompoundTag): void
}

export namespace $BlockEntityAccessor {
const probejs$$marker: never
}
export class $BlockEntityAccessor$$Static implements $BlockEntityAccessor {


 "callSaveMetadata"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityAccessor$$Type = ((arg0: $CompoundTag) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityAccessor_ = $BlockEntityAccessor$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.fluid_pipe.CopycatGlassFluidPipeBlock" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$StraightPipeBlockEntity, $StraightPipeBlockEntity$$Type} from "com.simibubi.create.content.fluids.pipes.StraightPipeBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$GlassFluidPipeBlock, $GlassFluidPipeBlock$$Type} from "com.simibubi.create.content.fluids.pipes.GlassFluidPipeBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CopycatGlassFluidPipeBlock extends $GlassFluidPipeBlock implements $ICopycatBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "ALT": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "toRegularPipe"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<($StraightPipeBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAxisOf"(arg0: $BlockState$$Type): $Direction$Axis
public "asHolder"(): $Holder<(any)>
get "blockEntityType"(): $BlockEntityType<($StraightPipeBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatGlassFluidPipeBlock$$Type = ($CopycatGlassFluidPipeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatGlassFluidPipeBlock_ = $CopycatGlassFluidPipeBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.half_panel.CopycatHalfPanelBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatHalfPanelBlock extends $CCWaterloggedCopycatBlock implements $IStateType {
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
static readonly "OFFSET": $DirectionProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public static "getOffsetAxis"(facing: $Direction$$Type, offset: $Direction$$Type): $Direction$Axis
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "getOffsetFacing"(facing: $Direction$$Type, offset: $Direction$$Type): $Direction
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatHalfPanelBlock$$Type = ($CopycatHalfPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatHalfPanelBlock_ = $CopycatHalfPanelBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.stairs.CopycatStairsBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$StairsShape, $StairsShape$$Type} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$CopycatStairsBlock$FaceShape, $CopycatStairsBlock$FaceShape$$Type} from "com.copycatsplus.copycats.content.copycat.stairs.CopycatStairsBlock$FaceShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$StairBlock, $StairBlock$$Type} from "net.minecraft.world.level.block.StairBlock"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICustomCTBlocking, $ICustomCTBlocking$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatStairsBlock extends $StairBlock implements $ICopycatBlock, $ICustomCTBlocking, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StairBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getFaceShape"(state: $BlockState$$Type, face: $Direction$$Type): $CopycatStairsBlock$FaceShape
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "stateType"(): $StateType
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatStairsBlock$$Type = ($CopycatStairsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatStairsBlock_ = $CopycatStairsBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.pressure_plate.CopycatWeightedPressurePlate" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$WeightedPressurePlateBlock, $WeightedPressurePlateBlock$$Type} from "net.minecraft.world.level.block.WeightedPressurePlateBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CopycatWeightedPressurePlate extends $WeightedPressurePlateBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WeightedPressurePlateBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "maxWeight": integer
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

constructor(maxWeight: integer, type: $BlockSetType$$Type, pProperties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "stateType"(): $StateType
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatWeightedPressurePlate$$Type = ($CopycatWeightedPressurePlate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatWeightedPressurePlate_ = $CopycatWeightedPressurePlate$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.door.CopycatDoorBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$DoubleBlockHalf, $DoubleBlockHalf$$Type} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$DoorHingeSide, $DoorHingeSide$$Type} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$DoorBlock, $DoorBlock$$Type} from "net.minecraft.world.level.block.DoorBlock"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatDoorBlock extends $DoorBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "UPDATE_ALL": integer
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static "CT": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(type: $BlockSetType$$Type, properties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getTicker"<S extends $BlockEntity>(p_153212_: $Level$$Type, p_153213_: $BlockState$$Type, p_153214_: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "stateType"(): $StateType
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "createDoorBlock"(arg0: $BlockSetType$$Type, arg1: $BlockBehaviour$Properties$$Type): $DoorBlock
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatDoorBlock$$Type = ($CopycatDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatDoorBlock_ = $CopycatDoorBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.layer.CopycatLayerBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatLayerBlock extends $CCWaterloggedCopycatBlock implements $SpecialBlockItemRequirement, $IStateType {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getShadeBrightness"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): float
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatLayerBlock$$Type = ($CopycatLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatLayerBlock_ = $CopycatLayerBlock$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$$Type} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$MultiStateCopycatBlock, $MultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MultiStateCopycatBlock"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $WaterloggedMultiStateCopycatBlock extends $MultiStateCopycatBlock implements $ProperWaterloggedBlock {
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

public "updateShape"(pState: $BlockState$$Type, pDirection: $Direction$$Type, pNeighborState: $BlockState$$Type, pLevel: $LevelAccessor$$Type, pCurrentPos: $BlockPos$$Type, pNeighborPos: $BlockPos$$Type): $BlockState
public "getFluidState"(pState: $BlockState$$Type): $FluidState
public "getStateForPlacement"(pContext: $BlockPlaceContext$$Type): $BlockState
public "fluidState"(arg0: $BlockState$$Type): $FluidState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterloggedMultiStateCopycatBlock$$Type = ($WaterloggedMultiStateCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterloggedMultiStateCopycatBlock_ = $WaterloggedMultiStateCopycatBlock$$Type;
}}
declare module "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CCCopycatBlock, $CCCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$$Type} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CCWaterloggedCopycatBlock extends $CCCopycatBlock implements $ProperWaterloggedBlock {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "updateShape"(pState: $BlockState$$Type, pDirection: $Direction$$Type, pNeighborState: $BlockState$$Type, pLevel: $LevelAccessor$$Type, pCurrentPos: $BlockPos$$Type, pNeighborPos: $BlockPos$$Type): $BlockState
public "getFluidState"(pState: $BlockState$$Type): $FluidState
public "getStateForPlacement"(pContext: $BlockPlaceContext$$Type): $BlockState
public "fluidState"(arg0: $BlockState$$Type): $FluidState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCWaterloggedCopycatBlock$$Type = ($CCWaterloggedCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCWaterloggedCopycatBlock_ = $CCWaterloggedCopycatBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.cogwheel.CopycatCogWheelBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IBlockExtension, $IBlockExtension$$Type} from "net.neoforged.neoforge.common.extensions.IBlockExtension"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$CopycatCogWheelBlockEntity, $CopycatCogWheelBlockEntity$$Type} from "com.copycatsplus.copycats.content.copycat.cogwheel.CopycatCogWheelBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$CogWheelBlock, $CogWheelBlock$$Type} from "com.simibubi.create.content.kinetics.simpleRelays.CogWheelBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"

export class $CopycatCogWheelBlock extends $CogWheelBlock implements $IMultiStateCopycatBlock, $IBlockExtension {
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>


public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public static "small"(properties: $BlockBehaviour$Properties$$Type): $CopycatCogWheelBlock
public "defaultProperty"(): StringJS
public static "large"(properties: $BlockBehaviour$Properties$$Type): $CopycatCogWheelBlock
public "fallOn"(pLevel: $Level$$Type, state: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, renderView: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, sourceState: $BlockState$$Type, sourcePos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getColorIndex"(property: StringJS): integer
public "getAcceptedBlockState"(property: StringJS, pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<($CopycatCogWheelBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "storageProperties"(): $Set<(StringJS)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(property: StringJS, reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "canOcclude"(property: StringJS, level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "wrappedColor"(): $BlockColor
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "stateType"(): $StateType
public "fillEmptyParts"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, material: $BlockState$$Type): void
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $IMultiStateCopycatBlockEntity
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public "getPropertyFromRender"(renderingProperty: StringJS, state: $BlockState$$Type, level: $BlockGetter$$Type, vector: $Vec3i$$Type, blockPos: $BlockPos$$Type): StringJS
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hit: $BlockHitResult$$Type, targetingSolid: boolean): StringJS
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hitVec: $Vec3$$Type, face: $Direction$$Type, targetingSolid: boolean): StringJS
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "isSmallCog"(arg0: $Block$$Type): boolean
public static "isSmallCog"(arg0: $BlockState$$Type): boolean
public static "isLargeCog"(arg0: $Block$$Type): boolean
public static "isLargeCog"(arg0: $BlockState$$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$$Type): boolean
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
get "blockEntityType"(): $BlockEntityType<($CopycatCogWheelBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatCogWheelBlock$$Type = ($CopycatCogWheelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatCogWheelBlock_ = $CopycatCogWheelBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.half_layer.CopycatHalfLayerBlock" {
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CopycatTransformableState, $CopycatTransformableState$$Type} from "com.copycatsplus.copycats.foundation.copycat.CopycatTransformableState"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$MaterialItemStorage$MaterialItem, $MaterialItemStorage$MaterialItem$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage$MaterialItem"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CopycatHalfLayerBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "POSITIVE_LAYERS": $IntegerProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "NEGATIVE_LAYERS": $IntegerProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "defaultProperty"(): StringJS
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "getColorIndex"(property: StringJS): integer
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public static "toTransformableState"(state: $BlockState$$Type): $CopycatTransformableState<(integer)>
public static "toTransformableStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type): $CopycatTransformableState<($MaterialItemStorage$MaterialItem)>
public static "fromTransformableState"(state: $BlockState$$Type, transformableState: $CopycatTransformableState$$Type<(integer)>): $BlockState
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "storageProperties"(): $Set<(StringJS)>
public static "fromTransformableStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transformableState: $CopycatTransformableState$$Type<($MaterialItemStorage$MaterialItem$$Type)>): void
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "asHolder"(): $Holder<(any)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatHalfLayerBlock$$Type = ($CopycatHalfLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatHalfLayerBlock_ = $CopycatHalfLayerBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.wall.CopycatWallBlock" {
import {$WallSide, $WallSide$$Type} from "net.minecraft.world.level.block.state.properties.WallSide"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$WallBlock, $WallBlock$$Type} from "net.minecraft.world.level.block.WallBlock"
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler, $ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$StateType, $StateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CopycatWallBlock extends $WallBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
 "shapeByIndex": $Map<($BlockState), ($VoxelShape)>
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UP": $BooleanProperty
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "collisionShapeByIndex": $Map<($BlockState), ($VoxelShape)>
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public static "byDirection"(direction: $Direction$$Type): $EnumProperty<($WallSide)>
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "collisionExtendsVertically"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, collidingEntity: $Entity$$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "stateType"(): $StateType
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatWallBlock$$Type = ($CopycatWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatWallBlock_ = $CopycatWallBlock$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.bytes.CopycatByteBlock$Byte" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CopycatByteBlock$Byte extends $Record {

constructor(x: boolean, y: boolean, z: boolean)

public "relative"(direction: $Direction$$Type): $CopycatByteBlock$Byte
public "y"(): boolean
public "get"(axis: $Direction$Axis$$Type): boolean
public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): boolean
public "set"(axis: $Direction$Axis$$Type, value: boolean): $CopycatByteBlock$Byte
public "copy"(): $CopycatByteBlock$Byte
public "z"(): boolean
public "mirror"(mirror: $Mirror$$Type): $CopycatByteBlock$Byte
public "rotateY"(rotation: $Rotation$$Type): $CopycatByteBlock$Byte
public "rotateZ"(rotation: $Rotation$$Type): $CopycatByteBlock$Byte
public "rotateX"(rotation: $Rotation$$Type): $CopycatByteBlock$Byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatByteBlock$Byte$$Type = ({"z"?: boolean, "x"?: boolean, "y"?: boolean}) | ([z?: boolean, x?: boolean, y?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatByteBlock$Byte_ = $CopycatByteBlock$Byte$$Type;
}}
declare module "com.copycatsplus.copycats.content.copycat.corner_slice.CopycatCornerSliceBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$ItemRequirement, $ItemRequirement$$Type} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$SpecialBlockItemRequirement, $SpecialBlockItemRequirement$$Type} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$StructureTransform, $StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType, $IStateType$$Type} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatCornerSliceBlock extends $CCWaterloggedCopycatBlock implements $IStateType, $SpecialBlockItemRequirement {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatCornerSliceBlock$$Type = ($CopycatCornerSliceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatCornerSliceBlock_ = $CopycatCornerSliceBlock$$Type;
}}
