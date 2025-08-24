declare module "dmr.DragonMounts.common.capability.types.NBTInterface" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $NBTInterface {

 "readNBT"(arg0: $CompoundTag$$Type): void
 "writeNBT"(): $CompoundTag
}

export namespace $NBTInterface {
const probejs$$marker: never
}
export class $NBTInterface$$Static implements $NBTInterface {


 "readNBT"(arg0: $CompoundTag$$Type): void
 "writeNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NBTInterface$$Type = ($NBTInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NBTInterface_ = $NBTInterface$$Type;
}}
declare module "dmr.DragonMounts.types.dragonBreeds.IDragonBreed$LootTableEntry" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $IDragonBreed$LootTableEntry extends $Record {

constructor(table: $ResourceLocation$$Type, chance: float, minAmount: integer, maxAmount: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "table"(): $ResourceLocation
public "chance"(): float
public "minAmount"(): integer
public "maxAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDragonBreed$LootTableEntry$$Type = ({"maxAmount"?: integer, "table"?: $ResourceLocation$$Type, "minAmount"?: integer, "chance"?: float}) | ([maxAmount?: integer, table?: $ResourceLocation$$Type, minAmount?: integer, chance?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDragonBreed$LootTableEntry_ = $IDragonBreed$LootTableEntry$$Type;
}}
declare module "dmr.DragonMounts.server.advancement.CustomTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CustomTrigger$Instance, $CustomTrigger$Instance$$Type} from "dmr.DragonMounts.server.advancement.CustomTrigger$Instance"

export class $CustomTrigger extends $SimpleCriterionTrigger<($CustomTrigger$Instance)> {

constructor(arg0: string)
constructor(arg0: $ResourceLocation$$Type)

public "trigger"(arg0: $ServerPlayer$$Type): void
public "getInstance"(): $CustomTrigger$Instance
public "codec"(): $Codec<($CustomTrigger$Instance)>
get "instance"(): $CustomTrigger$Instance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTrigger$$Type = ($CustomTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTrigger_ = $CustomTrigger$$Type;
}}
declare module "dmr.DragonMounts.server.items.DragonArmorItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DragonArmor, $DragonArmor$$Type} from "dmr.DragonMounts.types.armor.DragonArmor"

export class $DragonArmorItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getDescriptionId"(arg0: $ItemStack$$Type): string
public static "getArmorStack"(arg0: $DragonArmor$$Type): $ItemStack
public static "getArmorStack"(arg0: $DragonArmor$$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonArmorItem$$Type = ($DragonArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonArmorItem_ = $DragonArmorItem$$Type;
}}
declare module "dmr.DragonMounts.server.advancement.HatchTrigger$HatchTriggerInstance" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $HatchTrigger$HatchTriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($HatchTrigger$HatchTriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, id: string)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "test"(arg0: string): $HatchTrigger$HatchTriggerInstance
public static "test"(arg0: $Optional$$Type<($ContextAwarePredicate$$Type)>, arg1: string): $HatchTrigger$HatchTriggerInstance
public "matches"(arg0: $ServerPlayer$$Type, arg1: string): boolean
public "id"(): string
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatchTrigger$HatchTriggerInstance$$Type = ({"id"?: string, "player"?: ($ContextAwarePredicate$$Type)?}) | ([id?: string, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HatchTrigger$HatchTriggerInstance_ = $HatchTrigger$HatchTriggerInstance$$Type;
}}
declare module "dmr.DragonMounts.server.entity.dragon.AbstractDragonEntity" {
import {$MagniaProperties, $MagniaProperties$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$DragonAgroState, $DragonAgroState$$Type} from "dmr.DragonMounts.server.entity.DragonAgroState"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BodyRotationControl, $BodyRotationControl$$Type} from "net.minecraft.world.entity.ai.control.BodyRotationControl"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"
import {$MoverType, $MoverType$$Type} from "net.minecraft.world.entity.MoverType"
import {$MobSpawnType, $MobSpawnType$$Type} from "net.minecraft.world.entity.MobSpawnType"
import {$MoveControl, $MoveControl$$Type} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$TameableDragonEntity, $TameableDragonEntity$$Type} from "dmr.DragonMounts.server.entity.TameableDragonEntity"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$DragonAttributeComponent, $DragonAttributeComponent$$Type} from "dmr.DragonMounts.server.entity.dragon.DragonAttributeComponent"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$PositionTracker, $PositionTracker$$Type} from "net.minecraft.world.entity.ai.behavior.PositionTracker"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$ServerLevelAccessor, $ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$IDragonBreed$Variant, $IDragonBreed$Variant$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed$Variant"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Animal, $Animal$$Type} from "net.minecraft.world.entity.animal.Animal"
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$WalkAnimationState, $WalkAnimationState$$Type} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$IDragonBreed, $IDragonBreed$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$DMREggBlockEntity, $DMREggBlockEntity$$Type} from "dmr.DragonMounts.server.blockentities.DMREggBlockEntity"
import {$Entity$MoveFunction, $Entity$MoveFunction$$Type} from "net.minecraft.world.entity.Entity$MoveFunction"
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$SpawnGroupData, $SpawnGroupData$$Type} from "net.minecraft.world.entity.SpawnGroupData"
import {$SimpleContainer, $SimpleContainer$$Type} from "net.minecraft.world.SimpleContainer"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AgeableMob, $AgeableMob$$Type} from "net.minecraft.world.entity.AgeableMob"
import {$DragonInventoryHandler$DragonInventory, $DragonInventoryHandler$DragonInventory$$Type} from "dmr.DragonMounts.server.inventory.DragonInventoryHandler$DragonInventory"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$DifficultyInstance, $DifficultyInstance$$Type} from "net.minecraft.world.DifficultyInstance"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $AbstractDragonEntity extends $DragonAttributeComponent {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "ars_Nouveau$motions": $Stack<(any)>
 "yHeadRot": float
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
 "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": string
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": string
 "hurtDuration": integer
static readonly "TELEPORT_WHEN_DISTANCE_IS_SQ": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": string
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": string
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
static readonly "BABY_START_AGE": integer
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "yRot": float
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "targetSelector": $GoalSelector
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "xpReward": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
 "moveControl": $MoveControl
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
 "target": $LivingEntity
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean


public "remove"(arg0: $Entity$RemovalReason$$Type): void
public "getTarget"(): $LivingEntity
public "setTarget"(arg0: $LivingEntity$$Type): void
public "getOwner"(): $LivingEntity
public "tick"(): void
public "getVariant"(): $IDragonBreed$Variant
public "setVariant"(arg0: string): void
public "getDimensions"(arg0: $Pose$$Type): $EntityDimensions
public "getDismountLocationForPassenger"(arg0: $LivingEntity$$Type): $Vec3
public "resetLastPoseChangeTickToFullStand"(arg0: long): void
public "getControllingPassenger"(): $LivingEntity
public "getBoundingBoxForCulling"(): $AABB
public "openCustomInventoryScreen"(arg0: $Player$$Type): void
public "getDismountLocationInDirection"(arg0: $Vec3$$Type, arg1: $LivingEntity$$Type): $Vec3
public "updateContainerEquipment"(): void
public "resetLastPoseChangeTick"(arg0: long): void
public "setBreathSourcePosition"(arg0: $Vector3d$$Type): void
public "getBreathSourcePosition"(): $Vector3d
public "setBreathAttackPosition"(arg0: $Vec3$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "setInLove"(arg0: $Player$$Type): void
public "canMate"(arg0: $Animal$$Type): boolean
public "isServer"(): boolean
public "getScale"(): float
public "getInventory"(): $SimpleContainer
public "isShiftKeyDown"(): boolean
public "baseTick"(): void
public "fireImmune"(): boolean
public "getItemBySlot"(arg0: $EquipmentSlot$$Type): $ItemStack
public "canAttack"(arg0: $LivingEntity$$Type): boolean
public "getDeathSound"(): $SoundEvent
public "dropEquipment"(): void
public "getEatingSound"(arg0: $ItemStack$$Type): $SoundEvent
public "onClimbable"(): boolean
public "setItemSlot"(arg0: $EquipmentSlot$$Type, arg1: $ItemStack$$Type): void
public "getSpeed"(): float
public "getFlyingSpeed"(): float
public "doHurtTarget"(arg0: $Entity$$Type): boolean
public "isFlying"(): boolean
public "getBreed"(): $IDragonBreed
public "getStepSound"(): $SoundEvent
public "setCustomName"(arg0: $Component$$Type): void
public "positionRider"(arg0: $Entity$$Type, arg1: $Entity$MoveFunction$$Type): void
public "canSprint"(): boolean
public "isSaddled"(): boolean
public "setBaby"(arg0: boolean): void
public "isArmor"(arg0: $ItemStack$$Type): boolean
public "finalizeSpawn"(arg0: $ServerLevelAccessor$$Type, arg1: $DifficultyInstance$$Type, arg2: $MobSpawnType$$Type, arg3: $SpawnGroupData$$Type): $SpawnGroupData
public "swing"(arg0: $InteractionHand$$Type): void
public "canFly"(): boolean
public "ageUp"(arg0: integer, arg1: boolean): void
public "isFood"(arg0: $ItemStack$$Type): boolean
public "getAge"(): integer
public "setAge"(arg0: integer): void
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "isBaby"(): boolean
public "aiStep"(): void
public "onFlap"(): void
public "hasInventoryChanged"(arg0: $Container$$Type): boolean
public "getHealthRelative"(): double
public "setRidingPlayer"(arg0: $Player$$Type): void
public "setWanderTarget"(arg0: $Optional$$Type<(any)>): void
public "getDragonInventory"(): $DragonInventoryHandler$DragonInventory
public "updateAgeProperties"(): void
public "setHatchedAttributes"(arg0: $DMREggBlockEntity$$Type): void
public "setEggBreedAttributes"(arg0: $TameableDragonEntity$$Type, arg1: $Supplier$$Type<(any)>): void
public "updateAgeAttributes"(): void
public "setSpawnGroupId"(arg0: $UUID$$Type): void
public "getSpawnGroupId"(): $UUID
public "getWanderTarget"(): $Optional<(any)>
public "hasWanderTarget"(): boolean
public "setRandomlySitting"(arg0: boolean): void
public "isRandomlySitting"(): boolean
public "getMaxDeathTime"(): integer
public "getBreathTarget"(): $PositionTracker
public "canHarmWithBreath"(arg0: $LivingEntity$$Type): boolean
public "attackWithBreath"(arg0: $LivingEntity$$Type): void
public "stopBreathAttack"(): void
public "hasBreathTarget"(): boolean
public "hasBreathAttack"(): boolean
public "setBreathAttackBlock"(arg0: $BlockPos$$Type): void
public "setBreathAttackTarget"(arg0: $LivingEntity$$Type): void
public "renderDragonBreath"(): void
public "getHeadController"(): $AnimationController<(any)>
public "getAnimationController"(): $AnimationController<(any)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "isAffectedByFluids"(): boolean
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "isInvulnerableTo"(arg0: $DamageSource$$Type): boolean
public "causeFallDamage"(arg0: float, arg1: float, arg2: $DamageSource$$Type): boolean
public "maybeBackOffFromEdge"(arg0: $Vec3$$Type, arg1: $MoverType$$Type): $Vec3
public "getLightProbePosition"(arg0: float): $Vec3
public "refreshDimensions"(): void
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(any)>): void
public "setInSittingPose"(arg0: boolean): void
public "setOrderedToSit"(arg0: boolean): void
public "canDrownInFluidType"(arg0: $FluidType$$Type): boolean
public "updateOwnerData"(): void
public "createBodyControl"(): $BodyRotationControl
public "getPathfindingMalus"(arg0: $PathType$$Type): float
public "getAmbientSound"(): $SoundEvent
public "getBodyArmorItem"(): $ItemStack
public "setBodyArmorItem"(arg0: $ItemStack$$Type): void
public "containerChanged"(arg0: $Container$$Type): void
public "getWalkTargetValue"(arg0: $BlockPos$$Type, arg1: $LevelReader$$Type): float
public "getBreedOffspring"(arg0: $ServerLevel$$Type, arg1: $AgeableMob$$Type): $AgeableMob
public "spawnChildFromBreeding"(arg0: $ServerLevel$$Type, arg1: $Animal$$Type): void
public "getPickedResult"(arg0: $HitResult$$Type): $ItemStack
public "isSaddleable"(): boolean
public "equipSaddle"(arg0: $ItemStack$$Type, arg1: $SoundSource$$Type): void
public "hasChest"(): boolean
public "wasHatched"(): boolean
public "isNaturalSpawn"(): boolean
public "hasVariant"(): boolean
public "getVariantId"(): string
public "isTamingItem"(arg0: $ItemStack$$Type): boolean
public "tamedFor"(arg0: $Player$$Type, arg1: boolean): void
public "isFoodItem"(arg0: $ItemStack$$Type): boolean
public "isTamedFor"(arg0: $Player$$Type): boolean
public "equipArmor"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "isHatchling"(): boolean
public "stopSitting"(): void
public "getDragonUUID"(): $UUID
public "setDragonUUID"(arg0: $UUID$$Type): void
public "setRandomStats"(): void
public "getWingsSound"(): $SoundEvent
public "getAttackSound"(): $SoundEvent
public "getPoseTime"(): long
public "canChangePose"(): boolean
public "isSitting"(): boolean
public "isOrderedToSit"(): boolean
public "isNearGround"(): boolean
public "shouldFly"(): boolean
public "liftOff"(): void
public "setFlying"(arg0: boolean): void
public "setChest"(arg0: boolean): void
public "setSaddled"(arg0: boolean): void
public "inventoryEmpty"(): boolean
public "isWearingArmor"(): boolean
public "setArmor"(): void
public "equipChest"(arg0: $ItemStack$$Type, arg1: $SoundSource$$Type): void
public "wantsToAttack"(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type): boolean
public "isJuvenile"(): boolean
public "isAdult"(): boolean
public "getAgeProgress"(): float
public "canReproduce"(): boolean
public "getBreedId"(): string
public "setBreed"(arg0: $IDragonBreed$$Type): void
public "setHatched"(arg0: boolean): void
public "getDragon"(): $TameableDragonEntity
public "getTick"(arg0: any): double
public "setAgroState"(arg0: $DragonAgroState$$Type): void
public "getAgroState"(): $DragonAgroState
public static "tickLeash"<E extends ($Entity) & ($Leashable)>(arg0: E): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "lithium$getCachedFeetBlockState"(): $BlockState
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$resetDynamicLight"(): void
public static "is"(arg0: $Entity$$Type): boolean
public static "spawnedFromEndTrialSpawner"(arg0: $Entity$$Type): boolean
public static "setSpawnedFromEndTrialSpawner"(arg0: $Entity$$Type, arg1: boolean): void
public static "getMagniaProperties"(arg0: $Entity$$Type): $MagniaProperties
public static "canMagniaAffect"(arg0: $Entity$$Type): boolean
public static "getMagnetismFactor"(arg0: $Entity$$Type): float
public static "setDashed"(arg0: $Entity$$Type, arg1: boolean): void
public static "dashTicks"(arg0: $Entity$$Type): integer
public static "setDashTicks"(arg0: $Entity$$Type, arg1: integer): void
public static "dashed"(arg0: $Entity$$Type): boolean
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "target"(): $LivingEntity
set "target"(value: $LivingEntity$$Type)
get "owner"(): $LivingEntity
get "variant"(): $IDragonBreed$Variant
set "variant"(value: string)
get "controllingPassenger"(): $LivingEntity
get "boundingBoxForCulling"(): $AABB
set "breathSourcePosition"(value: $Vector3d$$Type)
get "breathSourcePosition"(): $Vector3d
set "breathAttackPosition"(value: $Vec3$$Type)
get "animatableInstanceCache"(): $AnimatableInstanceCache
set "inLove"(value: $Player$$Type)
get "server"(): boolean
get "scale"(): float
get "inventory"(): $SimpleContainer
get "shiftKeyDown"(): boolean
get "deathSound"(): $SoundEvent
get "speed"(): float
get "flyingSpeed"(): float
get "flying"(): boolean
get "breed"(): $IDragonBreed
get "stepSound"(): $SoundEvent
set "customName"(value: $Component$$Type)
get "saddled"(): boolean
set "baby"(value: boolean)
get "age"(): integer
set "age"(value: integer)
get "baby"(): boolean
get "healthRelative"(): double
set "ridingPlayer"(value: $Player$$Type)
set "wanderTarget"(value: $Optional$$Type<(any)>)
get "dragonInventory"(): $DragonInventoryHandler$DragonInventory
set "hatchedAttributes"(value: $DMREggBlockEntity$$Type)
set "spawnGroupId"(value: $UUID$$Type)
get "spawnGroupId"(): $UUID
get "wanderTarget"(): $Optional<(any)>
set "randomlySitting"(value: boolean)
get "randomlySitting"(): boolean
get "maxDeathTime"(): integer
get "breathTarget"(): $PositionTracker
set "breathAttackBlock"(value: $BlockPos$$Type)
set "breathAttackTarget"(value: $LivingEntity$$Type)
get "headController"(): $AnimationController<(any)>
get "animationController"(): $AnimationController<(any)>
get "affectedByFluids"(): boolean
set "inSittingPose"(value: boolean)
set "orderedToSit"(value: boolean)
get "ambientSound"(): $SoundEvent
get "bodyArmorItem"(): $ItemStack
set "bodyArmorItem"(value: $ItemStack$$Type)
get "saddleable"(): boolean
get "naturalSpawn"(): boolean
get "variantId"(): string
get "hatchling"(): boolean
get "dragonUUID"(): $UUID
set "dragonUUID"(value: $UUID$$Type)
get "wingsSound"(): $SoundEvent
get "attackSound"(): $SoundEvent
get "poseTime"(): long
get "sitting"(): boolean
get "orderedToSit"(): boolean
get "nearGround"(): boolean
set "flying"(value: boolean)
set "chest"(value: boolean)
set "saddled"(value: boolean)
get "wearingArmor"(): boolean
get "juvenile"(): boolean
get "adult"(): boolean
get "ageProgress"(): float
get "breedId"(): string
set "breed"(value: $IDragonBreed$$Type)
set "hatched"(value: boolean)
get "dragon"(): $TameableDragonEntity
set "agroState"(value: $DragonAgroState$$Type)
get "agroState"(): $DragonAgroState
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDragonEntity$$Type = ($AbstractDragonEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractDragonEntity_ = $AbstractDragonEntity$$Type;
}}
declare module "dmr.DragonMounts.server.items.DragonWhistleItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $DragonWhistleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $DyeColor$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getColor"(): $DyeColor
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getWhistleItem"(arg0: $DyeColor$$Type): $ItemStack
public static "getWhistleItem"(arg0: $DyeColor$$Type, arg1: integer): $ItemStack
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonWhistleItem$$Type = ($DragonWhistleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonWhistleItem_ = $DragonWhistleItem$$Type;
}}
declare module "dmr.DragonMounts.types.abilities.types.Ability" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$TameableDragonEntity, $TameableDragonEntity$$Type} from "dmr.DragonMounts.server.entity.TameableDragonEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $Ability {

 "type"(): string
 "initialize"(arg0: $TameableDragonEntity$$Type): void
 "close"(arg0: $TameableDragonEntity$$Type): void
 "getAttributes"(): $Map<($ResourceLocation), (double)>
 "tick"(arg0: $TameableDragonEntity$$Type): void
 "getTranslatedDescription"(): $Component
 "onMove"(arg0: $TameableDragonEntity$$Type): void
 "getTranslatedName"(): $Component

(): string
get "attributes"(): $Map<($ResourceLocation), (double)>
get "translatedDescription"(): $Component
get "translatedName"(): $Component
}

export namespace $Ability {
const CODEC: $Codec<($Ability)>
const probejs$$marker: never
}
export class $Ability$$Static implements $Ability {
static readonly "CODEC": $Codec<($Ability)>


 "type"(): string
 "initialize"(arg0: $TameableDragonEntity$$Type): void
 "close"(arg0: $TameableDragonEntity$$Type): void
 "getAttributes"(): $Map<($ResourceLocation), (double)>
 "tick"(arg0: $TameableDragonEntity$$Type): void
 "getTranslatedDescription"(): $Component
 "onMove"(arg0: $TameableDragonEntity$$Type): void
 "getTranslatedName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ability$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ability_ = $Ability$$Type;
}}
declare module "dmr.DragonMounts.types.dragonBreeds.IDragonBreed$Variant" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DragonBreathType, $DragonBreathType$$Type} from "dmr.DragonMounts.types.breath.DragonBreathType"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $IDragonBreed$Variant extends $Record {

constructor(id: string, skinTexture: $ResourceLocation$$Type, saddleTexture: $ResourceLocation$$Type, glowTexture: $ResourceLocation$$Type, eggTexture: $ResourceLocation$$Type, breathType: $DragonBreathType$$Type, primaryColor: string, secondaryColor: string, sizeModifier: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): string
public "primaryColor"(): string
public "secondaryColor"(): string
public "getPrimaryColor"(): integer
public "getSecondaryColor"(): integer
public "skinTexture"(): $ResourceLocation
public "breathType"(): $DragonBreathType
public "saddleTexture"(): $ResourceLocation
public "sizeModifier"(): float
public "eggTexture"(): $ResourceLocation
public "glowTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDragonBreed$Variant$$Type = ({"breathType"?: $DragonBreathType$$Type, "eggTexture"?: $ResourceLocation$$Type, "glowTexture"?: $ResourceLocation$$Type, "saddleTexture"?: $ResourceLocation$$Type, "skinTexture"?: $ResourceLocation$$Type, "sizeModifier"?: float, "secondaryColor"?: string, "primaryColor"?: string, "id"?: string}) | ([breathType?: $DragonBreathType$$Type, eggTexture?: $ResourceLocation$$Type, glowTexture?: $ResourceLocation$$Type, saddleTexture?: $ResourceLocation$$Type, skinTexture?: $ResourceLocation$$Type, sizeModifier?: float, secondaryColor?: string, primaryColor?: string, id?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDragonBreed$Variant_ = $IDragonBreed$Variant$$Type;
}}
declare module "dmr.DragonMounts.client.particle.particletypes.DragonBreathParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DragonBreathParticleOptions, $DragonBreathParticleOptions$$Type} from "dmr.DragonMounts.client.particle.particleoptions.DragonBreathParticleOptions"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $DragonBreathParticleType extends $ParticleType<($DragonBreathParticleOptions)> {

constructor(arg0: boolean)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($DragonBreathParticleOptions)>
public "codec"(): $MapCodec<($DragonBreathParticleOptions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonBreathParticleType$$Type = ($DragonBreathParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonBreathParticleType_ = $DragonBreathParticleType$$Type;
}}
declare module "dmr.DragonMounts.types.dragonBreeds.DragonBreed" {
import {$Habitat, $Habitat$$Type} from "dmr.DragonMounts.types.habitats.Habitat"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$DragonBreathType, $DragonBreathType$$Type} from "dmr.DragonMounts.types.breath.DragonBreathType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TameableDragonEntity, $TameableDragonEntity$$Type} from "dmr.DragonMounts.server.entity.TameableDragonEntity"
import {$IDragonBreed$Variant, $IDragonBreed$Variant$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed$Variant"
import {$Ability, $Ability$$Type} from "dmr.DragonMounts.types.abilities.types.Ability"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IDragonBreed, $IDragonBreed$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed"
import {$IDragonBreed$LootTableEntry, $IDragonBreed$LootTableEntry$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed$LootTableEntry"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $DragonBreed implements $IDragonBreed {

constructor()

public "getName"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): string
public "getAttributes"(): $Map<($ResourceLocation), (double)>
public "getVariants"(): $List<($IDragonBreed$Variant)>
public "getDragonAnimationLocation"(): $ResourceLocation
public "getAbilities"(): $List<($Ability)>
public "getAccessories"(): $List<(string)>
public "getLootTable"(): $List<($IDragonBreed$LootTableEntry)>
public "setId"(arg0: string): void
public "getDeathLootTable"(): $ResourceLocation
public "getSizeModifier"(): float
public "getBreedingItems"(): $List<($Item)>
public "getResourceLocation"(): $ResourceLocation
public "getAmbientSound"(): $SoundEvent
public "getDragonModelLocation"(): $ResourceLocation
public "getPrimaryColor"(): integer
public "getSecondaryColor"(): integer
public "getHatchParticles"(): $ParticleOptions
public static "setDragonTypeVariant"(arg0: $ItemStack$$Type, arg1: $IDragonBreed$$Type, arg2: $IDragonBreed$Variant$$Type): void
public static "setDragonType"(arg0: $ItemStack$$Type, arg1: $IDragonBreed$$Type): void
public static "getDragonType"(arg0: $ItemStack$$Type): $IDragonBreed
public "getHatchTime"(): integer
public "getTamingItems"(): $List<($Item)>
public "getImmunities"(): $List<(string)>
public "getGrowthTime"(): integer
public "getBreathType"(): $DragonBreathType
public "getHabitats"(): $List<($Habitat)>
public "getArmorTypeId"(): string
public static "getDragonTypeVariant"(arg0: $ItemStack$$Type): $IDragonBreed$Variant
public "getCachedVariants"(): $List<($IDragonBreed$Variant)>
public "getInventoryTexture"(): $ResourceLocation
public "getDefaultInventoryTexture"(): $ResourceLocation
public "initialize"(arg0: $TameableDragonEntity$$Type): void
public "close"(arg0: $TameableDragonEntity$$Type): void
public "tick"(arg0: $TameableDragonEntity$$Type): void
public "isHybrid"(): boolean
public "onMove"(arg0: $TameableDragonEntity$$Type): void
public "applyAttributes"(arg0: $TameableDragonEntity$$Type): void
get "name"(): $Component
get "id"(): string
get "attributes"(): $Map<($ResourceLocation), (double)>
get "variants"(): $List<($IDragonBreed$Variant)>
get "dragonAnimationLocation"(): $ResourceLocation
get "abilities"(): $List<($Ability)>
get "accessories"(): $List<(string)>
get "lootTable"(): $List<($IDragonBreed$LootTableEntry)>
set "id"(value: string)
get "deathLootTable"(): $ResourceLocation
get "sizeModifier"(): float
get "breedingItems"(): $List<($Item)>
get "resourceLocation"(): $ResourceLocation
get "ambientSound"(): $SoundEvent
get "dragonModelLocation"(): $ResourceLocation
get "primaryColor"(): integer
get "secondaryColor"(): integer
get "hatchParticles"(): $ParticleOptions
get "hatchTime"(): integer
get "tamingItems"(): $List<($Item)>
get "immunities"(): $List<(string)>
get "growthTime"(): integer
get "breathType"(): $DragonBreathType
get "habitats"(): $List<($Habitat)>
get "armorTypeId"(): string
get "cachedVariants"(): $List<($IDragonBreed$Variant)>
get "inventoryTexture"(): $ResourceLocation
get "defaultInventoryTexture"(): $ResourceLocation
get "hybrid"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.DmrBreeds
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.DmrBreedsTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonBreed$$Type = (Special.DmrBreeds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonBreed_ = $DragonBreed$$Type;
}}
declare module "dmr.DragonMounts.server.items.DragonSpawnEgg" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DeferredSpawnEggItem, $DeferredSpawnEggItem$$Type} from "net.neoforged.neoforge.common.DeferredSpawnEggItem"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SpawnEggItem, $SpawnEggItem$$Type} from "net.minecraft.world.item.SpawnEggItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IDragonBreed$Variant, $IDragonBreed$Variant$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed$Variant"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IDragonBreed, $IDragonBreed$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $DragonSpawnEgg extends $DeferredSpawnEggItem {
static readonly "DATA_ITEM_NAME": string
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "MAX_BAR_WIDTH": integer
static readonly "BY_ID": $Map<($EntityType<($Mob)>), ($SpawnEggItem)>
static readonly "DATA_PRIM_COLOR": string
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "defaultType": $EntityType<(any)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DATA_SEC_COLOR": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(arg0: $ItemStack$$Type): $Component
public static "create"(arg0: $IDragonBreed$$Type, arg1: $IDragonBreed$Variant$$Type): $ItemStack
public static "create"(arg0: $IDragonBreed$$Type): $ItemStack
public static "getColor"(arg0: $ItemStack$$Type, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonSpawnEgg$$Type = ($DragonSpawnEgg);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonSpawnEgg_ = $DragonSpawnEgg$$Type;
}}
declare module "dmr.DragonMounts.types.armor.DragonArmor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$IDragonBreed$LootTableEntry, $IDragonBreed$LootTableEntry$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed$LootTableEntry"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $DragonArmor {

constructor()

public "getName"(): $Component
public "getId"(): string
public "getLootTable"(): $List<($IDragonBreed$LootTableEntry)>
public "setId"(arg0: string): void
public static "setArmorType"(arg0: $ItemStack$$Type, arg1: $DragonArmor$$Type): void
public static "getArmorType"(arg0: $ItemStack$$Type): $DragonArmor
public "getProtection"(): integer
get "name"(): $Component
get "id"(): string
get "lootTable"(): $List<($IDragonBreed$LootTableEntry)>
set "id"(value: string)
get "protection"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.DmrArmor
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.DmrArmorTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonArmor$$Type = (Special.DmrArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonArmor_ = $DragonArmor$$Type;
}}
declare module "dmr.DragonMounts.types.breath.DragonBreathType" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Color, $Color$$Type} from "java.awt.Color"
import {$DragonBreathType$BreathEffect, $DragonBreathType$BreathEffect$$Type} from "dmr.DragonMounts.types.breath.DragonBreathType$BreathEffect"
import {$List, $List$$Type} from "java.util.List"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $DragonBreathType {

constructor()

public "getName"(): $Component
public "getId"(): string
public "getEffects"(): $List<($DragonBreathType$BreathEffect)>
public "getDamage"(): float
public "getFireTime"(): integer
public "setId"(arg0: string): void
public "getParticleDensity"(): integer
public "getDamageSource"(arg0: $LivingEntity$$Type): $DamageSource
public "getGradient"(): $List<($Color)>
public "getColorHexCodes"(): $List<(string)>
get "name"(): $Component
get "id"(): string
get "effects"(): $List<($DragonBreathType$BreathEffect)>
get "damage"(): float
get "fireTime"(): integer
set "id"(value: string)
get "particleDensity"(): integer
get "gradient"(): $List<($Color)>
get "colorHexCodes"(): $List<(string)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.DmrBreathTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.DmrBreathTypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonBreathType$$Type = (Special.DmrBreathTypes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonBreathType_ = $DragonBreathType$$Type;
}}
declare module "dmr.DragonMounts.server.blocks.DMREggBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IDragonBreed, $IDragonBreed$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$DMREggBlockEntity, $DMREggBlockEntity$$Type} from "dmr.DragonMounts.server.blockentities.DMREggBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DragonEggBlock, $DragonEggBlock$$Type} from "net.minecraft.world.level.block.DragonEggBlock"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IDragonBreed$Variant, $IDragonBreed$Variant$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed$Variant"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DustParticleOptions, $DustParticleOptions$$Type} from "net.minecraft.core.particles.DustParticleOptions"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $DMREggBlock extends $DragonEggBlock implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DragonEggBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "HATCHING": $BooleanProperty
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

public static "place"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $IDragonBreed$$Type, arg4: $IDragonBreed$Variant$$Type): $DMREggBlockEntity
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "addHatchingParticles"(arg0: $IDragonBreed$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "getHatchingParticles"(arg0: $IDragonBreed$$Type, arg1: $RandomSource$$Type): $ParticleOptions
public static "dustParticleFor"(arg0: $IDragonBreed$$Type, arg1: $RandomSource$$Type): $DustParticleOptions
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public "asHolder"(): $Holder<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DMREggBlock$$Type = ($DMREggBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DMREggBlock_ = $DMREggBlock$$Type;
}}
declare module "dmr.DragonMounts.server.entity.dragon.DragonSpawnComponent" {
import {$MagniaProperties, $MagniaProperties$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$MoveControl, $MoveControl$$Type} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Animal, $Animal$$Type} from "net.minecraft.world.entity.animal.Animal"
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$WalkAnimationState, $WalkAnimationState$$Type} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AgeableMob, $AgeableMob$$Type} from "net.minecraft.world.entity.AgeableMob"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$DragonAudioComponent, $DragonAudioComponent$$Type} from "dmr.DragonMounts.server.entity.dragon.DragonAudioComponent"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $DragonSpawnComponent extends $DragonAudioComponent {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "ars_Nouveau$motions": $Stack<(any)>
 "yHeadRot": float
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
 "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": string
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": string
 "hurtDuration": integer
static readonly "TELEPORT_WHEN_DISTANCE_IS_SQ": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": string
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": string
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
static readonly "BABY_START_AGE": integer
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "yRot": float
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "targetSelector": $GoalSelector
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "xpReward": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
 "moveControl": $MoveControl
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
 "target": $LivingEntity
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean


public "isSaddled"(): boolean
public "isSaddleable"(): boolean
public "equipSaddle"(arg0: $ItemStack$$Type, arg1: $SoundSource$$Type): void
public "isFlying"(): boolean
public "openCustomInventoryScreen"(arg0: $Player$$Type): void
public "containerChanged"(arg0: $Container$$Type): void
public "canAttack"(arg0: $LivingEntity$$Type): boolean
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "setInSittingPose"(arg0: boolean): void
public "setOrderedToSit"(arg0: boolean): void
public "isOrderedToSit"(): boolean
public "wantsToAttack"(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type): boolean
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getOwner"(): $LivingEntity
public "setInLove"(arg0: $Player$$Type): void
public "canMate"(arg0: $Animal$$Type): boolean
public "isFood"(arg0: $ItemStack$$Type): boolean
public "aiStep"(): void
public "getWalkTargetValue"(arg0: $BlockPos$$Type, arg1: $LevelReader$$Type): float
public "spawnChildFromBreeding"(arg0: $ServerLevel$$Type, arg1: $Animal$$Type): void
public "setBaby"(arg0: boolean): void
public "setAge"(arg0: integer): void
public "isBaby"(): boolean
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(any)>): void
public "getBreedOffspring"(arg0: $ServerLevel$$Type, arg1: $AgeableMob$$Type): $AgeableMob
public "getTarget"(): $LivingEntity
public "setTarget"(arg0: $LivingEntity$$Type): void
public "tick"(): void
public "getControllingPassenger"(): $LivingEntity
public "baseTick"(): void
public "getItemBySlot"(arg0: $EquipmentSlot$$Type): $ItemStack
public "setItemSlot"(arg0: $EquipmentSlot$$Type, arg1: $ItemStack$$Type): void
public "doHurtTarget"(arg0: $Entity$$Type): boolean
public "getPathfindingMalus"(arg0: $PathType$$Type): float
public "getBodyArmorItem"(): $ItemStack
public "setBodyArmorItem"(arg0: $ItemStack$$Type): void
public static "tickLeash"<E extends ($Entity) & ($Leashable)>(arg0: E): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "getDimensions"(arg0: $Pose$$Type): $EntityDimensions
public "getBoundingBoxForCulling"(): $AABB
public "getScale"(): float
public "getDeathSound"(): $SoundEvent
public "getEatingSound"(arg0: $ItemStack$$Type): $SoundEvent
public "onClimbable"(): boolean
public "getSpeed"(): float
public "swing"(arg0: $InteractionHand$$Type): void
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "isInvulnerableTo"(arg0: $DamageSource$$Type): boolean
public "causeFallDamage"(arg0: float, arg1: float, arg2: $DamageSource$$Type): boolean
public "canDrownInFluidType"(arg0: $FluidType$$Type): boolean
public static "tickEntity"(entity: $LivingEntity$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "lithium$getCachedFeetBlockState"(): $BlockState
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$resetDynamicLight"(): void
public static "is"(arg0: $Entity$$Type): boolean
public static "spawnedFromEndTrialSpawner"(arg0: $Entity$$Type): boolean
public static "setSpawnedFromEndTrialSpawner"(arg0: $Entity$$Type, arg1: boolean): void
public static "getMagniaProperties"(arg0: $Entity$$Type): $MagniaProperties
public static "canMagniaAffect"(arg0: $Entity$$Type): boolean
public static "getMagnetismFactor"(arg0: $Entity$$Type): float
public static "setDashed"(arg0: $Entity$$Type, arg1: boolean): void
public static "dashTicks"(arg0: $Entity$$Type): integer
public static "setDashTicks"(arg0: $Entity$$Type, arg1: integer): void
public static "dashed"(arg0: $Entity$$Type): boolean
public "getDismountLocationForPassenger"(arg0: $LivingEntity$$Type): $Vec3
public "isShiftKeyDown"(): boolean
public "fireImmune"(): boolean
public "setCustomName"(arg0: $Component$$Type): void
public "canSprint"(): boolean
public "getLightProbePosition"(arg0: float): $Vec3
public "refreshDimensions"(): void
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getPickedResult"(arg0: $HitResult$$Type): $ItemStack
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "saddled"(): boolean
get "saddleable"(): boolean
get "flying"(): boolean
set "inSittingPose"(value: boolean)
set "orderedToSit"(value: boolean)
get "orderedToSit"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "owner"(): $LivingEntity
set "inLove"(value: $Player$$Type)
set "baby"(value: boolean)
set "age"(value: integer)
get "baby"(): boolean
get "target"(): $LivingEntity
set "target"(value: $LivingEntity$$Type)
get "controllingPassenger"(): $LivingEntity
get "bodyArmorItem"(): $ItemStack
set "bodyArmorItem"(value: $ItemStack$$Type)
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
get "boundingBoxForCulling"(): $AABB
get "scale"(): float
get "deathSound"(): $SoundEvent
get "speed"(): float
get "shiftKeyDown"(): boolean
set "customName"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonSpawnComponent$$Type = ($DragonSpawnComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonSpawnComponent_ = $DragonSpawnComponent$$Type;
}}
declare module "dmr.DragonMounts.server.entity.TameableDragonEntity" {
import {$MagniaProperties, $MagniaProperties$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Brain, $Brain$$Type} from "net.minecraft.world.entity.ai.Brain"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MoveControl, $MoveControl$$Type} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$DimensionTransition, $DimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition"
import {$AbstractDragonEntity, $AbstractDragonEntity$$Type} from "dmr.DragonMounts.server.entity.dragon.AbstractDragonEntity"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$WalkAnimationState, $WalkAnimationState$$Type} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$TamableAnimal, $TamableAnimal$$Type} from "net.minecraft.world.entity.TamableAnimal"

export class $TameableDragonEntity extends $AbstractDragonEntity {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "ars_Nouveau$motions": $Stack<(any)>
 "yHeadRot": float
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
 "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": string
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": string
 "hurtDuration": integer
static readonly "TELEPORT_WHEN_DISTANCE_IS_SQ": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": string
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": string
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
static readonly "BABY_START_AGE": integer
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "yRot": float
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "targetSelector": $GoalSelector
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "xpReward": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
 "moveControl": $MoveControl
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
 "target": $LivingEntity
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean

constructor(arg0: $EntityType$$Type<($TamableAnimal$$Type)>, arg1: $Level$$Type)

public "getBrain"(): $Brain<($TameableDragonEntity)>
public "baseTick"(): void
public "mobInteract"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $InteractionResult
public "changeDimension"(arg0: $DimensionTransition$$Type): $Entity
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(any)>): void
public "removeWhenFarAway"(arg0: double): boolean
public static "tickLeash"<E extends ($Entity) & ($Leashable)>(arg0: E): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "lithium$getCachedFeetBlockState"(): $BlockState
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$resetDynamicLight"(): void
public static "is"(arg0: $Entity$$Type): boolean
public static "spawnedFromEndTrialSpawner"(arg0: $Entity$$Type): boolean
public static "setSpawnedFromEndTrialSpawner"(arg0: $Entity$$Type, arg1: boolean): void
public static "getMagniaProperties"(arg0: $Entity$$Type): $MagniaProperties
public static "canMagniaAffect"(arg0: $Entity$$Type): boolean
public static "getMagnetismFactor"(arg0: $Entity$$Type): float
public static "setDashed"(arg0: $Entity$$Type, arg1: boolean): void
public static "dashTicks"(arg0: $Entity$$Type): integer
public static "setDashTicks"(arg0: $Entity$$Type, arg1: integer): void
public static "dashed"(arg0: $Entity$$Type): boolean
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "brain"(): $Brain<($TameableDragonEntity)>
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TameableDragonEntity$$Type = ($TameableDragonEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TameableDragonEntity_ = $TameableDragonEntity$$Type;
}}
declare module "dmr.DragonMounts.server.advancement.CustomTrigger$Instance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $CustomTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($CustomTrigger$Instance)>

constructor(id: $ResourceLocation$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(): boolean
public "id"(): $ResourceLocation
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTrigger$Instance$$Type = ({"id"?: $ResourceLocation$$Type}) | ([id?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTrigger$Instance_ = $CustomTrigger$Instance$$Type;
}}
declare module "dmr.DragonMounts.server.blockentities.DMREggBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$IDragonBreed, $IDragonBreed$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DMREggBlockEntity extends $BlockEntity {
 "tickCount": integer
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getOwner"(): string
public "setOwner"(arg0: string): void
public "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "setMaxScaleAttribute"(arg0: double): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getBreed"(): $IDragonBreed
public "getCustomName"(): $Component
public "setCustomName"(arg0: $Component$$Type): void
public "hatch"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): void
public "setHealthAttribute"(arg0: double): void
public "setSpeedAttribute"(arg0: double): void
public "setDamageAttribute"(arg0: double): void
public "getHealthAttribute"(): double
public "getSpeedAttribute"(): double
public "getDamageAttribute"(): double
public "getMaxScaleAttribute"(): double
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "setVariantId"(arg0: string): void
public "setBreedId"(arg0: string): void
public "setHatchTime"(arg0: integer): void
public "getHatchTime"(): integer
public "getVariantId"(): string
public "getBreedId"(): string
public "setBreed"(arg0: $IDragonBreed$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "owner"(): string
set "owner"(value: string)
set "maxScaleAttribute"(value: double)
get "breed"(): $IDragonBreed
get "customName"(): $Component
set "customName"(value: $Component$$Type)
set "healthAttribute"(value: double)
set "speedAttribute"(value: double)
set "damageAttribute"(value: double)
get "healthAttribute"(): double
get "speedAttribute"(): double
get "damageAttribute"(): double
get "maxScaleAttribute"(): double
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
set "variantId"(value: string)
set "breedId"(value: string)
set "hatchTime"(value: integer)
get "hatchTime"(): integer
get "variantId"(): string
get "breedId"(): string
set "breed"(value: $IDragonBreed$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DMREggBlockEntity$$Type = ($DMREggBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DMREggBlockEntity_ = $DMREggBlockEntity$$Type;
}}
declare module "dmr.DragonMounts.server.items.BlankDragonEggItemBlock" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlankDragonEggItemBlock extends $BlockItem {
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

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescriptionId"(): string
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlankDragonEggItemBlock$$Type = ($BlankDragonEggItemBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlankDragonEggItemBlock_ = $BlankDragonEggItemBlock$$Type;
}}
declare module "dmr.DragonMounts.server.entity.DragonAgroState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $DragonAgroState extends $Enum<($DragonAgroState)> {
static readonly "PASSIVE": $DragonAgroState
static readonly "AGGRESSIVE": $DragonAgroState
static readonly "NEUTRAL": $DragonAgroState


public static "values"(): ($DragonAgroState)[]
public static "valueOf"(arg0: string): $DragonAgroState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonAgroState$$Type = (("passive") | ("neutral") | ("aggressive"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonAgroState_ = $DragonAgroState$$Type;
}}
declare module "dmr.DragonMounts.server.entity.dragon.DragonAudioComponent" {
import {$MagniaProperties, $MagniaProperties$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MoveControl, $MoveControl$$Type} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$DragonMountingComponent, $DragonMountingComponent$$Type} from "dmr.DragonMounts.server.entity.dragon.DragonMountingComponent"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Animal, $Animal$$Type} from "net.minecraft.world.entity.animal.Animal"
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$WalkAnimationState, $WalkAnimationState$$Type} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AgeableMob, $AgeableMob$$Type} from "net.minecraft.world.entity.AgeableMob"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $DragonAudioComponent extends $DragonMountingComponent {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "ars_Nouveau$motions": $Stack<(any)>
 "yHeadRot": float
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
 "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": string
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": string
 "hurtDuration": integer
static readonly "TELEPORT_WHEN_DISTANCE_IS_SQ": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": string
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": string
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
static readonly "BABY_START_AGE": integer
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "yRot": float
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "targetSelector": $GoalSelector
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "xpReward": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
 "moveControl": $MoveControl
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
 "target": $LivingEntity
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean


public "isSaddled"(): boolean
public "isSaddleable"(): boolean
public "equipSaddle"(arg0: $ItemStack$$Type, arg1: $SoundSource$$Type): void
public "isFlying"(): boolean
public "openCustomInventoryScreen"(arg0: $Player$$Type): void
public "containerChanged"(arg0: $Container$$Type): void
public "canAttack"(arg0: $LivingEntity$$Type): boolean
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "setInSittingPose"(arg0: boolean): void
public "setOrderedToSit"(arg0: boolean): void
public "isOrderedToSit"(): boolean
public "wantsToAttack"(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type): boolean
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getOwner"(): $LivingEntity
public "setInLove"(arg0: $Player$$Type): void
public "canMate"(arg0: $Animal$$Type): boolean
public "isFood"(arg0: $ItemStack$$Type): boolean
public "aiStep"(): void
public "getWalkTargetValue"(arg0: $BlockPos$$Type, arg1: $LevelReader$$Type): float
public "spawnChildFromBreeding"(arg0: $ServerLevel$$Type, arg1: $Animal$$Type): void
public "setBaby"(arg0: boolean): void
public "setAge"(arg0: integer): void
public "isBaby"(): boolean
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(any)>): void
public "getBreedOffspring"(arg0: $ServerLevel$$Type, arg1: $AgeableMob$$Type): $AgeableMob
public "getTarget"(): $LivingEntity
public "setTarget"(arg0: $LivingEntity$$Type): void
public "tick"(): void
public "getControllingPassenger"(): $LivingEntity
public "baseTick"(): void
public "getItemBySlot"(arg0: $EquipmentSlot$$Type): $ItemStack
public "setItemSlot"(arg0: $EquipmentSlot$$Type, arg1: $ItemStack$$Type): void
public "doHurtTarget"(arg0: $Entity$$Type): boolean
public "getPathfindingMalus"(arg0: $PathType$$Type): float
public "getBodyArmorItem"(): $ItemStack
public "setBodyArmorItem"(arg0: $ItemStack$$Type): void
public static "tickLeash"<E extends ($Entity) & ($Leashable)>(arg0: E): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "getDimensions"(arg0: $Pose$$Type): $EntityDimensions
public "getBoundingBoxForCulling"(): $AABB
public "getScale"(): float
public "onClimbable"(): boolean
public "getSpeed"(): float
public "swing"(arg0: $InteractionHand$$Type): void
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "isInvulnerableTo"(arg0: $DamageSource$$Type): boolean
public "causeFallDamage"(arg0: float, arg1: float, arg2: $DamageSource$$Type): boolean
public "canDrownInFluidType"(arg0: $FluidType$$Type): boolean
public static "tickEntity"(entity: $LivingEntity$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "lithium$getCachedFeetBlockState"(): $BlockState
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$resetDynamicLight"(): void
public static "is"(arg0: $Entity$$Type): boolean
public static "spawnedFromEndTrialSpawner"(arg0: $Entity$$Type): boolean
public static "setSpawnedFromEndTrialSpawner"(arg0: $Entity$$Type, arg1: boolean): void
public static "getMagniaProperties"(arg0: $Entity$$Type): $MagniaProperties
public static "canMagniaAffect"(arg0: $Entity$$Type): boolean
public static "getMagnetismFactor"(arg0: $Entity$$Type): float
public static "setDashed"(arg0: $Entity$$Type, arg1: boolean): void
public static "dashTicks"(arg0: $Entity$$Type): integer
public static "setDashTicks"(arg0: $Entity$$Type, arg1: integer): void
public static "dashed"(arg0: $Entity$$Type): boolean
public "getDismountLocationForPassenger"(arg0: $LivingEntity$$Type): $Vec3
public "isShiftKeyDown"(): boolean
public "fireImmune"(): boolean
public "setCustomName"(arg0: $Component$$Type): void
public "canSprint"(): boolean
public "getLightProbePosition"(arg0: float): $Vec3
public "refreshDimensions"(): void
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getPickedResult"(arg0: $HitResult$$Type): $ItemStack
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "saddled"(): boolean
get "saddleable"(): boolean
get "flying"(): boolean
set "inSittingPose"(value: boolean)
set "orderedToSit"(value: boolean)
get "orderedToSit"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "owner"(): $LivingEntity
set "inLove"(value: $Player$$Type)
set "baby"(value: boolean)
set "age"(value: integer)
get "baby"(): boolean
get "target"(): $LivingEntity
set "target"(value: $LivingEntity$$Type)
get "controllingPassenger"(): $LivingEntity
get "bodyArmorItem"(): $ItemStack
set "bodyArmorItem"(value: $ItemStack$$Type)
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
get "boundingBoxForCulling"(): $AABB
get "scale"(): float
get "speed"(): float
get "shiftKeyDown"(): boolean
set "customName"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonAudioComponent$$Type = ($DragonAudioComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonAudioComponent_ = $DragonAudioComponent$$Type;
}}
declare module "dmr.DragonMounts.server.advancement.HatchCountTrigger$HatchCountTriggerInstance" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $HatchCountTrigger$HatchCountTriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($HatchCountTrigger$HatchCountTriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, count: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "test"(arg0: integer): $HatchCountTrigger$HatchCountTriggerInstance
public static "test"(arg0: $Optional$$Type<($ContextAwarePredicate$$Type)>, arg1: integer): $HatchCountTrigger$HatchCountTriggerInstance
public "matches"(arg0: $ServerPlayer$$Type, arg1: integer): boolean
public "count"(): integer
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatchCountTrigger$HatchCountTriggerInstance$$Type = ({"count"?: integer, "player"?: ($ContextAwarePredicate$$Type)?}) | ([count?: integer, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HatchCountTrigger$HatchCountTriggerInstance_ = $HatchCountTrigger$HatchCountTriggerInstance$$Type;
}}
declare module "dmr.DragonMounts.types.breath.DragonBreathType$BreathEffect" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DragonBreathType$BreathEffect {

constructor()

public "getDuration"(): integer
public "getAmplifier"(): integer
public "getChance"(): float
public "getEffectId"(): string
get "duration"(): integer
get "amplifier"(): integer
get "chance"(): float
get "effectId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonBreathType$BreathEffect$$Type = ($DragonBreathType$BreathEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonBreathType$BreathEffect_ = $DragonBreathType$BreathEffect$$Type;
}}
declare module "dmr.DragonMounts.types.dragonBreeds.IDragonBreed" {
import {$Habitat, $Habitat$$Type} from "dmr.DragonMounts.types.habitats.Habitat"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$DragonBreathType, $DragonBreathType$$Type} from "dmr.DragonMounts.types.breath.DragonBreathType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IDragonBreed$Variant, $IDragonBreed$Variant$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed$Variant"
import {$TameableDragonEntity, $TameableDragonEntity$$Type} from "dmr.DragonMounts.server.entity.TameableDragonEntity"
import {$Ability, $Ability$$Type} from "dmr.DragonMounts.types.abilities.types.Ability"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IDragonBreed$LootTableEntry, $IDragonBreed$LootTableEntry$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed$LootTableEntry"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export interface $IDragonBreed {

 "getName"(): $Component
 "initialize"(arg0: $TameableDragonEntity$$Type): void
 "getId"(): string
 "close"(arg0: $TameableDragonEntity$$Type): void
 "getAttributes"(): $Map<($ResourceLocation), (double)>
 "tick"(arg0: $TameableDragonEntity$$Type): void
 "getVariants"(): $List<($IDragonBreed$Variant)>
 "getDragonAnimationLocation"(): $ResourceLocation
 "getAbilities"(): $List<($Ability)>
 "getAccessories"(): $List<(string)>
 "getLootTable"(): $List<($IDragonBreed$LootTableEntry)>
 "isHybrid"(): boolean
 "setId"(arg0: string): void
 "onMove"(arg0: $TameableDragonEntity$$Type): void
 "getDeathLootTable"(): $ResourceLocation
 "getSizeModifier"(): float
 "getBreedingItems"(): $List<($Item)>
 "getResourceLocation"(): $ResourceLocation
 "getAmbientSound"(): $SoundEvent
 "applyAttributes"(arg0: $TameableDragonEntity$$Type): void
 "getDragonModelLocation"(): $ResourceLocation
 "getPrimaryColor"(): integer
 "getSecondaryColor"(): integer
 "getHatchParticles"(): $ParticleOptions
 "getHatchTime"(): integer
 "getTamingItems"(): $List<($Item)>
 "getImmunities"(): $List<(string)>
 "getGrowthTime"(): integer
 "getBreathType"(): $DragonBreathType
 "getHabitats"(): $List<($Habitat)>
 "getArmorTypeId"(): string
 "getInventoryTexture"(): $ResourceLocation
get "name"(): $Component
get "id"(): string
get "attributes"(): $Map<($ResourceLocation), (double)>
get "variants"(): $List<($IDragonBreed$Variant)>
get "dragonAnimationLocation"(): $ResourceLocation
get "abilities"(): $List<($Ability)>
get "accessories"(): $List<(string)>
get "lootTable"(): $List<($IDragonBreed$LootTableEntry)>
get "hybrid"(): boolean
set "id"(value: string)
get "deathLootTable"(): $ResourceLocation
get "sizeModifier"(): float
get "breedingItems"(): $List<($Item)>
get "resourceLocation"(): $ResourceLocation
get "ambientSound"(): $SoundEvent
get "dragonModelLocation"(): $ResourceLocation
get "primaryColor"(): integer
get "secondaryColor"(): integer
get "hatchParticles"(): $ParticleOptions
get "hatchTime"(): integer
get "tamingItems"(): $List<($Item)>
get "immunities"(): $List<(string)>
get "growthTime"(): integer
get "breathType"(): $DragonBreathType
get "habitats"(): $List<($Habitat)>
get "armorTypeId"(): string
get "inventoryTexture"(): $ResourceLocation
}

export namespace $IDragonBreed {
const probejs$$marker: never
}
export class $IDragonBreed$$Static implements $IDragonBreed {


 "getName"(): $Component
 "initialize"(arg0: $TameableDragonEntity$$Type): void
 "getId"(): string
 "close"(arg0: $TameableDragonEntity$$Type): void
 "getAttributes"(): $Map<($ResourceLocation), (double)>
 "tick"(arg0: $TameableDragonEntity$$Type): void
 "getVariants"(): $List<($IDragonBreed$Variant)>
 "getDragonAnimationLocation"(): $ResourceLocation
 "getAbilities"(): $List<($Ability)>
 "getAccessories"(): $List<(string)>
 "getLootTable"(): $List<($IDragonBreed$LootTableEntry)>
 "isHybrid"(): boolean
 "setId"(arg0: string): void
 "onMove"(arg0: $TameableDragonEntity$$Type): void
 "getDeathLootTable"(): $ResourceLocation
 "getSizeModifier"(): float
 "getBreedingItems"(): $List<($Item)>
 "getResourceLocation"(): $ResourceLocation
 "getAmbientSound"(): $SoundEvent
 "applyAttributes"(arg0: $TameableDragonEntity$$Type): void
 "getDragonModelLocation"(): $ResourceLocation
 "getPrimaryColor"(): integer
 "getSecondaryColor"(): integer
 "getHatchParticles"(): $ParticleOptions
 "getHatchTime"(): integer
 "getTamingItems"(): $List<($Item)>
 "getImmunities"(): $List<(string)>
 "getGrowthTime"(): integer
 "getBreathType"(): $DragonBreathType
 "getHabitats"(): $List<($Habitat)>
 "getArmorTypeId"(): string
 "getInventoryTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDragonBreed$$Type = ($IDragonBreed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDragonBreed_ = $IDragonBreed$$Type;
}}
declare module "dmr.DragonMounts.server.advancement.HatchCountTrigger" {
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$HatchCountTrigger$HatchCountTriggerInstance, $HatchCountTrigger$HatchCountTriggerInstance$$Type} from "dmr.DragonMounts.server.advancement.HatchCountTrigger$HatchCountTriggerInstance"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $HatchCountTrigger extends $SimpleCriterionTrigger<($HatchCountTrigger$HatchCountTriggerInstance)> {

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: integer): void
public static "instance"(arg0: $ContextAwarePredicate$$Type, arg1: integer): $Criterion<($HatchCountTrigger$HatchCountTriggerInstance)>
public "codec"(): $Codec<($HatchCountTrigger$HatchCountTriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatchCountTrigger$$Type = ($HatchCountTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HatchCountTrigger_ = $HatchCountTrigger$$Type;
}}
declare module "dmr.DragonMounts.server.entity.dragon.DragonAttributeComponent" {
import {$MagniaProperties, $MagniaProperties$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$MobSpawnType, $MobSpawnType$$Type} from "net.minecraft.world.entity.MobSpawnType"
import {$MoveControl, $MoveControl$$Type} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DragonSpawnComponent, $DragonSpawnComponent$$Type} from "dmr.DragonMounts.server.entity.dragon.DragonSpawnComponent"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$ServerLevelAccessor, $ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Animal, $Animal$$Type} from "net.minecraft.world.entity.animal.Animal"
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$WalkAnimationState, $WalkAnimationState$$Type} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$SpawnGroupData, $SpawnGroupData$$Type} from "net.minecraft.world.entity.SpawnGroupData"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AgeableMob, $AgeableMob$$Type} from "net.minecraft.world.entity.AgeableMob"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$DifficultyInstance, $DifficultyInstance$$Type} from "net.minecraft.world.DifficultyInstance"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $DragonAttributeComponent extends $DragonSpawnComponent {
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE_THRESHOLD": float
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
static readonly "MAX_PICKUP_LOOT_CHANCE": float
 "ars_Nouveau$motions": $Stack<(any)>
 "yHeadRot": float
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
 "goalSelector": $GoalSelector
 "swingingArm": $InteractionHand
static readonly "ID_TAG": string
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": string
 "hurtDuration": integer
static readonly "TELEPORT_WHEN_DISTANCE_IS_SQ": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": string
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": string
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
static readonly "BABY_START_AGE": integer
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "BOARDING_COOLDOWN": integer
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "ambientSoundTime": integer
 "yRot": float
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "targetSelector": $GoalSelector
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "xpReward": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
 "moveControl": $MoveControl
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
 "target": $LivingEntity
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean


public "isSaddled"(): boolean
public "isSaddleable"(): boolean
public "equipSaddle"(arg0: $ItemStack$$Type, arg1: $SoundSource$$Type): void
public "isFlying"(): boolean
public "openCustomInventoryScreen"(arg0: $Player$$Type): void
public "containerChanged"(arg0: $Container$$Type): void
public "canAttack"(arg0: $LivingEntity$$Type): boolean
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "setInSittingPose"(arg0: boolean): void
public "setOrderedToSit"(arg0: boolean): void
public "isOrderedToSit"(): boolean
public "wantsToAttack"(arg0: $LivingEntity$$Type, arg1: $LivingEntity$$Type): boolean
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "getOwner"(): $LivingEntity
public "setInLove"(arg0: $Player$$Type): void
public "canMate"(arg0: $Animal$$Type): boolean
public "isFood"(arg0: $ItemStack$$Type): boolean
public "aiStep"(): void
public "getWalkTargetValue"(arg0: $BlockPos$$Type, arg1: $LevelReader$$Type): float
public "spawnChildFromBreeding"(arg0: $ServerLevel$$Type, arg1: $Animal$$Type): void
public "setBaby"(arg0: boolean): void
public "finalizeSpawn"(arg0: $ServerLevelAccessor$$Type, arg1: $DifficultyInstance$$Type, arg2: $MobSpawnType$$Type, arg3: $SpawnGroupData$$Type): $SpawnGroupData
public "setAge"(arg0: integer): void
public "isBaby"(): boolean
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(any)>): void
public "getBreedOffspring"(arg0: $ServerLevel$$Type, arg1: $AgeableMob$$Type): $AgeableMob
public "getTarget"(): $LivingEntity
public "setTarget"(arg0: $LivingEntity$$Type): void
public "tick"(): void
public "getControllingPassenger"(): $LivingEntity
public "baseTick"(): void
public "getItemBySlot"(arg0: $EquipmentSlot$$Type): $ItemStack
public "setItemSlot"(arg0: $EquipmentSlot$$Type, arg1: $ItemStack$$Type): void
public "doHurtTarget"(arg0: $Entity$$Type): boolean
public "getPathfindingMalus"(arg0: $PathType$$Type): float
public "getBodyArmorItem"(): $ItemStack
public "setBodyArmorItem"(arg0: $ItemStack$$Type): void
public static "tickLeash"<E extends ($Entity) & ($Leashable)>(arg0: E): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "getDimensions"(arg0: $Pose$$Type): $EntityDimensions
public "getBoundingBoxForCulling"(): $AABB
public "getScale"(): float
public "getDeathSound"(): $SoundEvent
public "getEatingSound"(arg0: $ItemStack$$Type): $SoundEvent
public "onClimbable"(): boolean
public "getSpeed"(): float
public "swing"(arg0: $InteractionHand$$Type): void
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "isInvulnerableTo"(arg0: $DamageSource$$Type): boolean
public "causeFallDamage"(arg0: float, arg1: float, arg2: $DamageSource$$Type): boolean
public "canDrownInFluidType"(arg0: $FluidType$$Type): boolean
public static "tickEntity"(entity: $LivingEntity$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "lithium$getCachedFeetBlockState"(): $BlockState
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$resetDynamicLight"(): void
public static "is"(arg0: $Entity$$Type): boolean
public static "spawnedFromEndTrialSpawner"(arg0: $Entity$$Type): boolean
public static "setSpawnedFromEndTrialSpawner"(arg0: $Entity$$Type, arg1: boolean): void
public static "getMagniaProperties"(arg0: $Entity$$Type): $MagniaProperties
public static "canMagniaAffect"(arg0: $Entity$$Type): boolean
public static "getMagnetismFactor"(arg0: $Entity$$Type): float
public static "setDashed"(arg0: $Entity$$Type, arg1: boolean): void
public static "dashTicks"(arg0: $Entity$$Type): integer
public static "setDashTicks"(arg0: $Entity$$Type, arg1: integer): void
public static "dashed"(arg0: $Entity$$Type): boolean
public "getDismountLocationForPassenger"(arg0: $LivingEntity$$Type): $Vec3
public "isShiftKeyDown"(): boolean
public "fireImmune"(): boolean
public "setCustomName"(arg0: $Component$$Type): void
public "canSprint"(): boolean
public "getLightProbePosition"(arg0: float): $Vec3
public "refreshDimensions"(): void
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getPickedResult"(arg0: $HitResult$$Type): $ItemStack
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "saddled"(): boolean
get "saddleable"(): boolean
get "flying"(): boolean
set "inSittingPose"(value: boolean)
set "orderedToSit"(value: boolean)
get "orderedToSit"(): boolean
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "owner"(): $LivingEntity
set "inLove"(value: $Player$$Type)
set "baby"(value: boolean)
set "age"(value: integer)
get "baby"(): boolean
get "target"(): $LivingEntity
set "target"(value: $LivingEntity$$Type)
get "controllingPassenger"(): $LivingEntity
get "bodyArmorItem"(): $ItemStack
set "bodyArmorItem"(value: $ItemStack$$Type)
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
get "boundingBoxForCulling"(): $AABB
get "scale"(): float
get "deathSound"(): $SoundEvent
get "speed"(): float
get "shiftKeyDown"(): boolean
set "customName"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonAttributeComponent$$Type = ($DragonAttributeComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonAttributeComponent_ = $DragonAttributeComponent$$Type;
}}
declare module "dmr.DragonMounts.types.habitats.Habitat" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$RecordCodecBuilder, $RecordCodecBuilder$$Type} from "com.mojang.serialization.codecs.RecordCodecBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $Habitat {

 "type"(): string
 "getHabitatPoints"(arg0: $Level$$Type, arg1: $BlockPos$$Type): integer
}

export namespace $Habitat {
const WORLD_HEIGHT: string
const NEARBY_BLOCKS: string
const PICKY: string
const TIME_OF_DAY: string
const CODEC: $Codec<($Habitat)>
const IN_FLUID: string
const LIGHT: string
const BIOMES: string
const DRAGON_BREATH: string
const REGISTRY: $Map<(string), ($MapCodec<($Habitat)>)>
function register(arg0: string, arg1: $Codec$$Type<($Habitat$$Type)>): string
function withPoints<T extends $Habitat>(arg0: integer, arg1: $Function$$Type<(T), (integer)>): $RecordCodecBuilder<(T), (integer)>
function withMultiplier<T extends $Habitat>(arg0: float, arg1: $Function$$Type<(T), (float)>): $RecordCodecBuilder<(T), (float)>
const probejs$$marker: never
}
export class $Habitat$$Static implements $Habitat {
static readonly "WORLD_HEIGHT": string
static readonly "NEARBY_BLOCKS": string
static readonly "PICKY": string
static readonly "TIME_OF_DAY": string
static readonly "CODEC": $Codec<($Habitat)>
static readonly "IN_FLUID": string
static readonly "LIGHT": string
static readonly "BIOMES": string
static readonly "DRAGON_BREATH": string
static readonly "REGISTRY": $Map<(string), ($MapCodec<($Habitat)>)>


 "type"(): string
static "register"(arg0: string, arg1: $Codec$$Type<($Habitat$$Type)>): string
 "getHabitatPoints"(arg0: $Level$$Type, arg1: $BlockPos$$Type): integer
static "withPoints"<T extends $Habitat>(arg0: integer, arg1: $Function$$Type<(T), (integer)>): $RecordCodecBuilder<(T), (integer)>
static "withMultiplier"<T extends $Habitat>(arg0: float, arg1: $Function$$Type<(T), (float)>): $RecordCodecBuilder<(T), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Habitat$$Type = ($Habitat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Habitat_ = $Habitat$$Type;
}}
declare module "dmr.DragonMounts.server.inventory.DragonInventoryHandler$DragonInventory" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.ContainerListener"
import {$NBTInterface, $NBTInterface$$Type} from "dmr.DragonMounts.common.capability.types.NBTInterface"
import {$SimpleContainer, $SimpleContainer$$Type} from "net.minecraft.world.SimpleContainer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $DragonInventoryHandler$DragonInventory implements $NBTInterface, $ContainerListener {
static readonly "SADDLE_SLOT": integer
static readonly "ARMOR_SLOT": integer
static readonly "INVENTORY_SIZE": integer
static readonly "CHEST_SLOT": integer
 "inventory": $SimpleContainer

constructor(arg0: $Level$$Type)
constructor(arg0: $HolderLookup$Provider$$Type)

public "isDirty"(): boolean
public "setDirty"(arg0: boolean): void
public "getInventorySize"(): integer
public "containerChanged"(arg0: $Container$$Type): void
public "readNBT"(arg0: $CompoundTag$$Type): void
public "writeNBT"(): $CompoundTag
get "dirty"(): boolean
set "dirty"(value: boolean)
get "inventorySize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonInventoryHandler$DragonInventory$$Type = ($DragonInventoryHandler$DragonInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonInventoryHandler$DragonInventory_ = $DragonInventoryHandler$DragonInventory$$Type;
}}
declare module "dmr.DragonMounts.server.advancement.HatchTrigger" {
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$HatchTrigger$HatchTriggerInstance, $HatchTrigger$HatchTriggerInstance$$Type} from "dmr.DragonMounts.server.advancement.HatchTrigger$HatchTriggerInstance"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $HatchTrigger extends $SimpleCriterionTrigger<($HatchTrigger$HatchTriggerInstance)> {

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: string): void
public static "instance"(arg0: $ContextAwarePredicate$$Type, arg1: string): $Criterion<($HatchTrigger$HatchTriggerInstance)>
public "codec"(): $Codec<($HatchTrigger$HatchTriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatchTrigger$$Type = ($HatchTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HatchTrigger_ = $HatchTrigger$$Type;
}}
declare module "dmr.DragonMounts.server.blocks.BlankEggBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IDragonBreed, $IDragonBreed$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DragonEggBlock, $DragonEggBlock$$Type} from "net.minecraft.world.level.block.DragonEggBlock"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BlankEggBlock extends $DragonEggBlock implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DragonEggBlock)>
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

public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "teleport"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "addHatchingParticles"(arg0: $IDragonBreed$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public "asHolder"(): $Holder<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlankEggBlock$$Type = ($BlankEggBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlankEggBlock_ = $BlankEggBlock$$Type;
}}
declare module "dmr.DragonMounts.client.particle.particleoptions.DragonBreathParticleOptions" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$DragonBreathType, $DragonBreathType$$Type} from "dmr.DragonMounts.types.breath.DragonBreathType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $DragonBreathParticleOptions implements $ParticleOptions {
static readonly "VECTOR3F_LIST_CODEC": $Codec<($List<($Vector3f)>)>
static readonly "CODEC": $MapCodec<($DragonBreathParticleOptions)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($DragonBreathParticleOptions)>

constructor(arg0: $DragonBreathType$$Type)
constructor(arg0: $List$$Type<($Vector3f$$Type)>)

public "getType"(): $ParticleType<(any)>
public "getGradientColors"(): $List<($Vector3f)>
get "type"(): $ParticleType<(any)>
get "gradientColors"(): $List<($Vector3f)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DragonBreathParticleOptions$$Type = ($DragonBreathParticleOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonBreathParticleOptions_ = $DragonBreathParticleOptions$$Type;
}}
declare module "dmr.DragonMounts.server.items.DragonEggItemBlock" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IDragonBreed$Variant, $IDragonBreed$Variant$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed$Variant"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IDragonBreed, $IDragonBreed$$Type} from "dmr.DragonMounts.types.dragonBreeds.IDragonBreed"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $DragonEggItemBlock extends $BlockItem {
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

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getDescriptionId"(arg0: $ItemStack$$Type): string
public static "getDragonEggStack"(arg0: $IDragonBreed$$Type, arg1: integer, arg2: $IDragonBreed$Variant$$Type): $ItemStack
public static "getDragonEggStack"(arg0: $IDragonBreed$$Type): $ItemStack
public static "getDragonEggStack"(arg0: $IDragonBreed$$Type, arg1: $IDragonBreed$Variant$$Type): $ItemStack
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
export type $DragonEggItemBlock$$Type = ($DragonEggItemBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DragonEggItemBlock_ = $DragonEggItemBlock$$Type;
}}
