declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS$ImpactParticleContext" {
import {$SpellProjectileJS, $SpellProjectileJS$$Type} from "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS"

export class $SpellProjectileJS$ImpactParticleContext {
readonly "x": double
readonly "y": double
readonly "z": double
readonly "entity": $SpellProjectileJS

constructor(arg0: $SpellProjectileJS$$Type, arg1: double, arg2: double, arg3: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellProjectileJS$ImpactParticleContext$$Type = ($SpellProjectileJS$ImpactParticleContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellProjectileJS$ImpactParticleContext_ = $SpellProjectileJS$ImpactParticleContext$$Type;
}}
declare module "com.squoshi.irons_spells_js.item.CustomStaff$Builder$StaffTierBuilder" {
import {$CustomStaff$Builder$StaffTierEnum, $CustomStaff$Builder$StaffTierEnum$$Type} from "com.squoshi.irons_spells_js.item.CustomStaff$Builder$StaffTierEnum"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $CustomStaff$Builder$StaffTierBuilder {

constructor()

public "addAttribute"(arg0: $Holder$$Type<($Attribute)>, arg1: double, arg2: $AttributeModifier$Operation$$Type): $CustomStaff$Builder$StaffTierBuilder
public "setDamage"(arg0: float): $CustomStaff$Builder$StaffTierBuilder
public "setSpeed"(arg0: float): $CustomStaff$Builder$StaffTierBuilder
public "useBaseTier"(arg0: $CustomStaff$Builder$StaffTierEnum$$Type, arg1: boolean): $CustomStaff$Builder$StaffTierBuilder
set "damage"(value: float)
set "speed"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomStaff$Builder$StaffTierBuilder$$Type = ($CustomStaff$Builder$StaffTierBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomStaff$Builder$StaffTierBuilder_ = $CustomStaff$Builder$StaffTierBuilder$$Type;
}}
declare module "com.squoshi.irons_spells_js.spell.AbstractSpellWrapper" {
import {$AbstractSpellWrapper$SpellStatus, $AbstractSpellWrapper$SpellStatus$$Type} from "com.squoshi.irons_spells_js.spell.AbstractSpellWrapper$SpellStatus"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $AbstractSpellWrapper {

}

export namespace $AbstractSpellWrapper {
function exists(arg0: $ResourceKey$$Type<($AbstractSpell)>): boolean
function of(arg0: $ResourceKey$$Type<($AbstractSpell)>): $AbstractSpell
function isEnabled(arg0: $ResourceKey$$Type<($AbstractSpell)>): boolean
function checkStatus(arg0: $ResourceKey$$Type<($AbstractSpell)>): $AbstractSpellWrapper$SpellStatus
function isSpell(arg0: any): boolean
function ofHolder(arg0: $Holder$$Type<($AbstractSpell)>): $Holder<($AbstractSpell)>
const probejs$$marker: never
}
export class $AbstractSpellWrapper$$Static implements $AbstractSpellWrapper {


/**
 *     Returns whether a spell is registered or not.
 */
static "exists"(arg0: $ResourceKey$$Type<($AbstractSpell)>): boolean
/**
 *     Returns a spell registry object.
 */
static "of"(arg0: $ResourceKey$$Type<($AbstractSpell)>): $AbstractSpell
/**
 *     Returns whether a spell is enabled in the config or not.
 */
static "isEnabled"(arg0: $ResourceKey$$Type<($AbstractSpell)>): boolean
/**
 *     Returns either `ENABLED`, `DISABLED`, or `UNREGISTERED`, based on the spell inputted.
 */
static "checkStatus"(arg0: $ResourceKey$$Type<($AbstractSpell)>): $AbstractSpellWrapper$SpellStatus
/**
 *     Returns whether an object is a spell or not.
 */
static "isSpell"(arg0: any): boolean
static "ofHolder"(arg0: $Holder$$Type<($AbstractSpell)>): $Holder<($AbstractSpell)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpellWrapper$$Type = ($AbstractSpellWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSpellWrapper_ = $AbstractSpellWrapper$$Type;
}}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastContext" {
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CustomSpell$PreCastContext extends $Record {

constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getPlayerMagicData: $MagicData$$Type)

public "getLevel"(): $Level
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$PreCastContext$$Type = ({"getSpellLevel"?: integer, "getLevel"?: $Level$$Type, "getPlayerMagicData"?: $MagicData$$Type, "getEntity"?: $LivingEntity$$Type}) | ([getSpellLevel?: integer, getLevel?: $Level$$Type, getPlayerMagicData?: $MagicData$$Type, getEntity?: $LivingEntity$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$PreCastContext_ = $CustomSpell$PreCastContext$$Type;
}}
declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellCastingMobJS" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$SpellCastingMobJSBuilder, $SpellCastingMobJSBuilder$$Type} from "com.squoshi.irons_spells_js.compat.entityjs.entity.builder.SpellCastingMobJSBuilder"
import {$MagniaProperties, $MagniaProperties$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$MoveControl, $MoveControl$$Type} from "net.minecraft.world.entity.ai.control.MoveControl"
import {$PartEntity, $PartEntity$$Type} from "net.neoforged.neoforge.entity.PartEntity"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$IMagicEntity, $IMagicEntity$$Type} from "io.redspace.ironsspellbooks.api.entity.IMagicEntity"
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$IAnimatableJS, $IAnimatableJS$$Type} from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileWeaponItem, $ProjectileWeaponItem$$Type} from "net.minecraft.world.item.ProjectileWeaponItem"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SpellData, $SpellData$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$SyncedSpellData, $SyncedSpellData$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.SyncedSpellData"
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SerializableDataTicket, $SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$PartEntityJS, $PartEntityJS$$Type} from "net.liopyu.entityjs.entities.nonliving.entityjs.PartEntityJS"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Brain$Provider, $Brain$Provider$$Type} from "net.minecraft.world.entity.ai.Brain$Provider"
import {$PathfinderMob, $PathfinderMob$$Type} from "net.minecraft.world.entity.PathfinderMob"
import {$ClientboundAddEntityPacket, $ClientboundAddEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAddEntityPacket"
import {$WalkAnimationState, $WalkAnimationState$$Type} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$BaseLivingEntityBuilder, $BaseLivingEntityBuilder$$Type} from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$LivingEntity$Fallsounds, $LivingEntity$Fallsounds$$Type} from "net.minecraft.world.entity.LivingEntity$Fallsounds"
import {$Leashable, $Leashable$$Type} from "net.minecraft.world.entity.Leashable"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LightningBolt, $LightningBolt$$Type} from "net.minecraft.world.entity.LightningBolt"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $SpellCastingMobJS extends $PathfinderMob implements $IAnimatableJS, $IMagicEntity {
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
static readonly "ID_TAG": StringJS
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
 "persistenceRequired": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
static readonly "PASSENGERS_TAG": StringJS
readonly "partEntities": ($PartEntityJS<(any)>)[]
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
 "castingSpell": $SpellData
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
 "entityJs$builder": any
static readonly "BODY_ARMOR_OFFSET": integer
 "tickCount": integer
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
 "hasUsedSingleAttack": boolean
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
 "drinkTime": integer
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
readonly "spells": $HashMap<(any), (any)>
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "target": $LivingEntity
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean

constructor(arg0: $SpellCastingMobJSBuilder$$Type, arg1: $EntityType$$Type<($SpellCastingMobJS$$Type)>, arg2: $Level$$Type)

public "entityName"(): StringJS
public "tick"(): void
public "setTarget"(arg0: $LivingEntity$$Type): void
public "jump"(): void
public "ate"(): void
public "heal"(arg0: float): void
public "die"(arg0: $DamageSource$$Type): void
public "travel"(arg0: $Vec3$$Type): void
public "aiStep"(): void
public "lerpTo"(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float, arg5: integer): void
public "eat"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: $FoodProperties$$Type): $ItemStack
public "setId"(arg0: integer): void
public "canHoldItem"(arg0: $ItemStack$$Type): boolean
public "canBeLeashed"(): boolean
public "lavaHurt"(): void
public "playerTouch"(arg0: $Player$$Type): void
public "canCollideWith"(arg0: $Entity$$Type): boolean
public "thunderHit"(arg0: $ServerLevel$$Type, arg1: $LightningBolt$$Type): void
public "attackable"(): boolean
public "canTakeItem"(arg0: $ItemStack$$Type): boolean
public "startSleeping"(arg0: $BlockPos$$Type): void
public "isOnSameTeam"(arg0: $Entity$$Type): boolean
public "canTrample"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: float): boolean
public "onAddedToLevel"(): void
public "getParts"(): ($PartEntity<(any)>)[]
public "getFallSounds"(): $LivingEntity$Fallsounds
public "getEatingSound"(arg0: $ItemStack$$Type): $SoundEvent
public "onClimbable"(): boolean
public "setSprinting"(arg0: boolean): void
public "doHurtTarget"(arg0: $Entity$$Type): boolean
public "canFreeze"(): boolean
public "stopRiding"(): void
public "rideTick"(): void
public "onItemPickup"(arg0: $ItemEntity$$Type): void
public "hasLineOfSight"(arg0: $Entity$$Type): boolean
public "isPushable"(): boolean
public "onEnterCombat"(): void
public "onLeaveCombat"(): void
public "getMainArm"(): $HumanoidArm
public "isFreezing"(): boolean
public "mayInteract"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "canJump"(): boolean
public "isSleeping"(): boolean
public "brainProvider"(): $Brain$Provider<(any)>
public "canAttackType"(arg0: $EntityType$$Type<(any)>): boolean
public "onEquipItem"(arg0: $EquipmentSlot$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "canAttack"(arg0: $LivingEntity$$Type): boolean
public "onEffectAdded"(arg0: $MobEffectInstance$$Type, arg1: $Entity$$Type): void
public "canBeAffected"(arg0: $MobEffectInstance$$Type): boolean
public "stopSleeping"(): void
public "actuallyHurt"(arg0: $DamageSource$$Type, arg1: float): void
public "getScale"(): float
public "getBuilder"(): $BaseLivingEntityBuilder<(any)>
public "tickPart"(arg0: StringJS, arg1: double, arg2: double, arg3: double): void
public "getMagicData"(): $MagicData
public "isCasting"(): boolean
public "cancelCast"(): void
public "castComplete"(): void
public "getWalkTargetValue"(arg0: $BlockPos$$Type, arg1: $LevelReader$$Type): float
public "isDrinkingPotion"(): boolean
public "startDrinkingPotion"(): void
public "setSyncedSpellData"(arg0: $SyncedSpellData$$Type): void
public "initiateCastSpell"(arg0: $AbstractSpell$$Type, arg1: integer): void
public "getHasUsedSingleAttack"(): boolean
public "setHasUsedSingleAttack"(arg0: boolean): void
public "startAutoSpinAttack"(arg0: integer): void
public "removeWhenFarAway"(arg0: double): boolean
public "isPersistenceRequired"(): boolean
public "getAttackBoundingBox"(): $AABB
public "isGlowing"(): boolean
public "shouldDropExperience"(): boolean
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "getVisibilityPercent"(arg0: $Entity$$Type): double
public "onClientRemoval"(): void
public "dampensVibrations"(): boolean
public "showVehicleHealth"(): boolean
public "canChangeDimensions"(arg0: $Level$$Type, arg1: $Level$$Type): boolean
public "onRemovedFromLevel"(): void
public "isMultipartEntity"(): boolean
public "isInvertedHealAndHarm"(): boolean
public "isInvulnerableTo"(arg0: $DamageSource$$Type): boolean
public "getMaxFallDistance"(): integer
public "causeFallDamage"(arg0: float, arg1: float, arg2: $DamageSource$$Type): boolean
public "calculateFallDamage"(arg0: float, arg1: float): integer
public "getJumpBoostPower"(): float
public "canStandOnFluid"(arg0: $FluidState$$Type): boolean
public "isSensitiveToWater"(): boolean
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$$Type<(any)>): void
public "isAffectedByPotions"(): boolean
public "shouldRiderFaceForward"(arg0: $Player$$Type): boolean
public "recreateFromPacket"(arg0: $ClientboundAddEntityPacket$$Type): void
public "canDisableShield"(): boolean
public "setTeleportLocationBehindTarget"(arg0: integer): boolean
public "getControllingPassenger"(): $LivingEntity
public "canFireProjectileWeapon"(arg0: $ProjectileWeaponItem$$Type): boolean
public "getAmbientSoundInterval"(): integer
public "onJump"(): void
/**
 * Calls a triggerable animation to be played anywhere.
 */
public "triggerAnimation"(arg0: StringJS, arg1: StringJS): void
public "canFireProjectileWeaponPredicate"(arg0: $ProjectileWeaponItem$$Type): boolean
public "setBurningDashDirectionData"(): void
public "notifyDangerousProjectile"(arg0: $Projectile$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "ableToJump"(): boolean
public "setThisJumping"(arg0: boolean): void
public "shouldJump"(): boolean
public "canFireProjectileWeapons"(arg0: $ProjectileWeaponItem$$Type): boolean
public "getEntityType"(): $EntityType<(any)>
public "getTick"(arg0: any): double
public "getTypeId"(): $ResourceKey<($EntityType<(any)>)>
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
/**
 * 
 * @deprecated
 */
public "getItemBySlot"(arg0: $EquipmentSlot$$Type): $ItemStack
public "self"(): $LivingEntity
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public "triggerAnim"(arg0: StringJS, arg1: StringJS): void
public "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
public "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
public "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
public static "tickLeash"<E extends ($Entity) & ($Leashable)>(arg0: E): void
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "setLookupToggle"(value: boolean): void
public "getLookupToggle"(): boolean
public "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public "lithium$getCachedFeetBlockState"(): $BlockState
public static "is"(arg0: $Entity$$Type): boolean
public static "spawnedFromEndTrialSpawner"(arg0: $Entity$$Type): boolean
public static "setSpawnedFromEndTrialSpawner"(arg0: $Entity$$Type, arg1: boolean): void
public static "getMagniaProperties"(arg0: $Entity$$Type): $MagniaProperties
public static "canMagniaAffect"(arg0: $Entity$$Type): boolean
public static "getMagnetismFactor"(arg0: $Entity$$Type): float
public static "dashed"(arg0: $Entity$$Type): boolean
public static "setDashed"(arg0: $Entity$$Type, arg1: boolean): void
public static "dashTicks"(arg0: $Entity$$Type): integer
public static "setDashTicks"(arg0: $Entity$$Type, arg1: integer): void
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$resetDynamicLight"(): void
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
set "target"(value: $LivingEntity$$Type)
set "id"(value: integer)
get "parts"(): ($PartEntity<(any)>)[]
get "fallSounds"(): $LivingEntity$Fallsounds
set "sprinting"(value: boolean)
get "pushable"(): boolean
get "mainArm"(): $HumanoidArm
get "freezing"(): boolean
get "sleeping"(): boolean
get "scale"(): float
get "builder"(): $BaseLivingEntityBuilder<(any)>
get "magicData"(): $MagicData
get "casting"(): boolean
get "drinkingPotion"(): boolean
set "syncedSpellData"(value: $SyncedSpellData$$Type)
get "hasUsedSingleAttack"(): boolean
set "hasUsedSingleAttack"(value: boolean)
get "persistenceRequired"(): boolean
get "attackBoundingBox"(): $AABB
get "glowing"(): boolean
get "multipartEntity"(): boolean
get "invertedHealAndHarm"(): boolean
get "maxFallDistance"(): integer
get "jumpBoostPower"(): float
get "sensitiveToWater"(): boolean
get "affectedByPotions"(): boolean
set "teleportLocationBehindTarget"(value: integer)
get "controllingPassenger"(): $LivingEntity
get "ambientSoundInterval"(): integer
get "animatableInstanceCache"(): $AnimatableInstanceCache
set "thisJumping"(value: boolean)
get "entityType"(): $EntityType<(any)>
get "typeId"(): $ResourceKey<($EntityType<(any)>)>
get "boneResetTime"(): double
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCastingMobJS$$Type = ($SpellCastingMobJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellCastingMobJS_ = $SpellCastingMobJS$$Type;
}}
declare module "com.squoshi.irons_spells_js.item.CustomSpellBook" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CustomSpellBook$Builder, $CustomSpellBook$Builder$$Type} from "com.squoshi.irons_spells_js.item.CustomSpellBook$Builder"
import {$SpellBook, $SpellBook$$Type} from "io.redspace.ironsspellbooks.item.SpellBook"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $CustomSpellBook extends $SpellBook {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $CustomSpellBook$Builder$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "isUnique"(): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "initializeSpellContainer"(arg0: $ItemStack$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "unique"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpellBook$$Type = ($CustomSpellBook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpellBook_ = $CustomSpellBook$$Type;
}}
declare module "com.squoshi.irons_spells_js.event.SpellPostCastEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$KubeEntityEvent, $KubeEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeEntityEvent"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $SpellPostCastEventJS implements $KubeEntityEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $AbstractSpell$$Type, arg2: integer, arg3: $MagicData$$Type)

public "getLevel"(): $Level
public "getEntity"(): $Entity
public "getSpellLevel"(): integer
public "getMagicData"(): $MagicData
public "getSpell"(): $AbstractSpell
public "getPlayer"(): $Player
public "getServer"(): $MinecraftServer
public "getRegistries"(): $RegistryAccess
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
get "level"(): $Level
get "entity"(): $Entity
get "spellLevel"(): integer
get "magicData"(): $MagicData
get "spell"(): $AbstractSpell
get "player"(): $Player
get "server"(): $MinecraftServer
get "registries"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPostCastEventJS$$Type = ($SpellPostCastEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellPostCastEventJS_ = $SpellPostCastEventJS$$Type;
}}
declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.builder.SpellCastingMobBuilder" {
import {$List, $List$$Type} from "java.util.List"
import {$SpawnPlacements$SpawnPredicate, $SpawnPlacements$SpawnPredicate$$Type} from "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate"
import {$SpawnPlacementType, $SpawnPlacementType$$Type} from "net.minecraft.world.entity.SpawnPlacementType"
import {$BaseLivingEntityBuilder, $BaseLivingEntityBuilder$$Type} from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ContextUtils$PartEntityParams, $ContextUtils$PartEntityParams$$Type} from "net.liopyu.entityjs.util.ContextUtils$PartEntityParams"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$GeoLayerJSBuilder, $GeoLayerJSBuilder$$Type} from "net.liopyu.entityjs.client.living.model.GeoLayerJSBuilder"
import {$PathfinderMob, $PathfinderMob$$Type} from "net.minecraft.world.entity.PathfinderMob"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$PathfinderMobBuilder, $PathfinderMobBuilder$$Type} from "net.liopyu.entityjs.builders.living.entityjs.PathfinderMobBuilder"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IAnimatableJS, $IAnimatableJS$$Type} from "net.liopyu.entityjs.entities.living.entityjs.IAnimatableJS"
import {$EventBasedSpawnModifier$BiomeSpawn, $EventBasedSpawnModifier$BiomeSpawn$$Type} from "net.liopyu.entityjs.util.implementation.EventBasedSpawnModifier$BiomeSpawn"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"

export class $SpellCastingMobBuilder<T extends ($PathfinderMob) & ($IAnimatableJS)> extends $PathfinderMobBuilder<(T)> {
readonly "partEntityParamsList": $List<($ContextUtils$PartEntityParams<(T)>)>
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation
 "spawnPredicate": $SpawnPlacements$SpawnPredicate<($Entity)>
readonly "layerList": $List<($GeoLayerJSBuilder<(T)>)>
static readonly "thisList": $List<($BaseLivingEntityBuilder<(any)>)>
 "registryKey": $ResourceKey<($Registry<(T)>)>
 "heightMap": $Heightmap$Types
static readonly "spawnList": $List<($BaseLivingEntityBuilder<(any)>)>
static readonly "biomeSpawnList": $List<($EventBasedSpawnModifier$BiomeSpawn)>
readonly "glowingLayerList": $List<($GeoLayerJSBuilder<(T)>)>
 "placementType": $SpawnPlacementType

constructor(arg0: $ResourceLocation$$Type)

/**
 * Sets a callback function to determine whether the entity is currently casting.
 * 
 * Example usage:
 * ```javascript
 * spellEntityBuilder.isCasting(entity => {
 *     return true;
 * });
 * ```
 */
public "isCasting"(arg0: $Function$$Type<($LivingEntity), (any)>): $SpellCastingMobBuilder<(T)>
/**
 * Sets a callback function to be executed when the entity stops casting a spell.
 * 
 * Example usage:
 * ```javascript
 * spellEntityBuilder.onCancelledCast(entity => {
 *     // Custom logic to handle the entity cancelling their spell casts
 * });
 * ```
 */
public "onCancelledCast"(arg0: $Consumer$$Type<($LivingEntity)>): $SpellCastingMobBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCastingMobBuilder$$Type<T> = ($SpellCastingMobBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellCastingMobBuilder_<T> = $SpellCastingMobBuilder$$Type<(T)>;
}}
declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.builder.SpellProjectileJSBuilder" {
import {$SpellProjectileJS, $SpellProjectileJS$$Type} from "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS"
import {$SpellProjectileJS$ImpactParticleContext, $SpellProjectileJS$ImpactParticleContext$$Type} from "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS$ImpactParticleContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$SpellProjectileJS$OnAntiMagicContext, $SpellProjectileJS$OnAntiMagicContext$$Type} from "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS$OnAntiMagicContext"
import {$List, $List$$Type} from "java.util.List"
import {$ProjectileEntityBuilder, $ProjectileEntityBuilder$$Type} from "net.liopyu.entityjs.builders.nonliving.entityjs.ProjectileEntityBuilder"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $SpellProjectileJSBuilder extends $ProjectileEntityBuilder<($SpellProjectileJS)> {
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation
 "canShootFromDispenser": boolean
static readonly "thisList": $List<($ProjectileEntityBuilder<(any)>)>
 "registryKey": $ResourceKey<($Registry<(T)>)>

constructor(arg0: $ResourceLocation$$Type)

/**
 * Sets the impact sound for the entity using a string representation.
 * 
 * Example usage:
 * ```javascript
 * builder.setImpactSound("minecraft:entity.generic.swim");
 * ```
 */
public "setImpactSound"(arg0: any): $SpellProjectileJSBuilder
public "onAntiMagic"(arg0: $Consumer$$Type<($SpellProjectileJS$OnAntiMagicContext)>): $SpellProjectileJSBuilder
/**
 * A consumer determining the trailing particles behind the spell.
 * 
 * Example usage:
 * ```javascript
 * builder.trailParticles(entity => {
 *     // Logic for spawning trailing particles
 * });
 * ```
 */
public "trailParticles"(arg0: $Consumer$$Type<($SpellProjectileJS)>): $SpellProjectileJSBuilder
/**
 * A consumer determining the impact particles for the spell.
 * 
 * Example usage:
 * ```javascript
 * builder.impactParticles(context => {
 *     const {x, y, z, entity} = context
 *     // Logic for spawning impact particles
 * });
 * ```
 */
public "impactParticles"(arg0: $Consumer$$Type<($SpellProjectileJS$ImpactParticleContext)>): $SpellProjectileJSBuilder
set "impactSound"(value: any)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellProjectileJSBuilder$$Type = ($SpellProjectileJSBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellProjectileJSBuilder_ = $SpellProjectileJSBuilder$$Type;
}}
declare module "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$TierBuilder" {
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum, $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum$$Type} from "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $CustomMagicSwordItem$TierBuilder {

constructor()

public "addAttribute"(arg0: $Holder$$Type<($Attribute)>, arg1: double, arg2: $AttributeModifier$Operation$$Type): $CustomMagicSwordItem$TierBuilder
public "setDamage"(arg0: float): $CustomMagicSwordItem$TierBuilder
public "setSpeed"(arg0: float): $CustomMagicSwordItem$TierBuilder
public "setUses"(arg0: integer): $CustomMagicSwordItem$TierBuilder
public "setRepairIngredient"(arg0: $Supplier$$Type<($Ingredient$$Type)>): $CustomMagicSwordItem$TierBuilder
public "setEnchantmentValue"(arg0: integer): $CustomMagicSwordItem$TierBuilder
public "useBaseTier"(arg0: $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum$$Type, arg1: boolean): $CustomMagicSwordItem$TierBuilder
public "setIncorrectBlocksForDrops"(arg0: $TagKey$$Type<($Block)>): $CustomMagicSwordItem$TierBuilder
set "damage"(value: float)
set "speed"(value: float)
set "uses"(value: integer)
set "repairIngredient"(value: $Supplier$$Type<($Ingredient$$Type)>)
set "enchantmentValue"(value: integer)
set "incorrectBlocksForDrops"(value: $TagKey$$Type<($Block)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMagicSwordItem$TierBuilder$$Type = ($CustomMagicSwordItem$TierBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMagicSwordItem$TierBuilder_ = $CustomMagicSwordItem$TierBuilder$$Type;
}}
declare module "com.squoshi.irons_spells_js.event.SpellSelectionEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SpellData, $SpellData$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$SpellSelectionManager, $SpellSelectionManager$$Type} from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager"
import {$KubePlayerEvent, $KubePlayerEvent$$Type} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$SpellSelectionManager$SpellSelectionEvent, $SpellSelectionManager$SpellSelectionEvent$$Type} from "io.redspace.ironsspellbooks.api.magic.SpellSelectionManager$SpellSelectionEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $SpellSelectionEventJS implements $KubePlayerEvent {

constructor(arg0: $SpellSelectionManager$SpellSelectionEvent$$Type)

/**
 *     Returns the player that cast the spell.
 */
public "getEntity"(): $LivingEntity
public "getManager"(): $SpellSelectionManager
/**
 *     Adds spell option to the end of a player's spell bar.
 */
public "addSelectionOption"(arg0: $SpellData$$Type, arg1: StringJS, arg2: integer): void
/**
 *     Adds spell option to the end of a player's spell bar.
 */
public "addSelectionOption"(arg0: $SpellData$$Type, arg1: StringJS, arg2: integer, arg3: integer): void
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getServer"(): $MinecraftServer
public "getRegistries"(): $RegistryAccess
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
get "entity"(): $LivingEntity
get "manager"(): $SpellSelectionManager
get "player"(): $Player
get "level"(): $Level
get "server"(): $MinecraftServer
get "registries"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSelectionEventJS$$Type = ($SpellSelectionEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSelectionEventJS_ = $SpellSelectionEventJS$$Type;
}}
declare module "com.squoshi.irons_spells_js.item.CustomStaff$Builder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemBuilder$UseCallback, $ItemBuilder$UseCallback$$Type} from "dev.latvian.mods.kubejs.item.ItemBuilder$UseCallback"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ItemBuilder, $ItemBuilder$$Type} from "dev.latvian.mods.kubejs.item.ItemBuilder"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$CustomStaff$Builder$StaffTierBuilder, $CustomStaff$Builder$StaffTierBuilder$$Type} from "com.squoshi.irons_spells_js.item.CustomStaff$Builder$StaffTierBuilder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $CustomStaff$Builder extends $ItemBuilder {
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation
 "registryKey": $ResourceKey<($Registry<(T)>)>

constructor(arg0: $ResourceLocation$$Type)

/**
 * **NOT SUPPORTED**
 */
public "use"(arg0: $ItemBuilder$UseCallback$$Type): $ItemBuilder
public "setTier"(arg0: $Consumer$$Type<($CustomStaff$Builder$StaffTierBuilder)>): this
public "setEnchantmentValue"(arg0: integer): this
set "tier"(value: $Consumer$$Type<($CustomStaff$Builder$StaffTierBuilder)>)
set "enchantmentValue"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomStaff$Builder$$Type = ($CustomStaff$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomStaff$Builder_ = $CustomStaff$Builder$$Type;
}}
declare module "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum extends $Enum<($CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum)> {
static readonly "LEGIONNAIRE_FLAMBERGE": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "DREADSWORD": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "CRYSTAL_MAGEHUNTER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "DECREPIT_FLAMBERGE": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "MISERY": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "DECREPIT_SCYTHE": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "METAL_MAGEHUNTER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "CLAYMORE": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "TRUTHSEEKER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "HELLRAZOR": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "SPELLBREAKER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
static readonly "AMETHYST_RAPIER": $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum


public static "values"(): ($CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum)[]
public static "valueOf"(arg0: StringJS): $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum$$Type = (("hellrazor") | ("legionnaire_flamberge") | ("decrepit_flamberge") | ("decrepit_scythe") | ("dreadsword") | ("misery") | ("metal_magehunter") | ("crystal_magehunter") | ("spellbreaker") | ("truthseeker") | ("claymore") | ("amethyst_rapier"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum_ = $CustomMagicSwordItem$TierBuilder$ExtendedWeaponTierEnum$$Type;
}}
declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.builder.SpellCastingMobJSBuilder" {
import {$List, $List$$Type} from "java.util.List"
import {$SpawnPlacements$SpawnPredicate, $SpawnPlacements$SpawnPredicate$$Type} from "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate"
import {$SpawnPlacementType, $SpawnPlacementType$$Type} from "net.minecraft.world.entity.SpawnPlacementType"
import {$BaseLivingEntityBuilder, $BaseLivingEntityBuilder$$Type} from "net.liopyu.entityjs.builders.living.BaseLivingEntityBuilder"
import {$SpellCastingMobBuilder, $SpellCastingMobBuilder$$Type} from "com.squoshi.irons_spells_js.compat.entityjs.entity.builder.SpellCastingMobBuilder"
import {$ContextUtils$PartEntityParams, $ContextUtils$PartEntityParams$$Type} from "net.liopyu.entityjs.util.ContextUtils$PartEntityParams"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$GeoLayerJSBuilder, $GeoLayerJSBuilder$$Type} from "net.liopyu.entityjs.client.living.model.GeoLayerJSBuilder"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EventBasedSpawnModifier$BiomeSpawn, $EventBasedSpawnModifier$BiomeSpawn$$Type} from "net.liopyu.entityjs.util.implementation.EventBasedSpawnModifier$BiomeSpawn"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$SpellCastingMobJS, $SpellCastingMobJS$$Type} from "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellCastingMobJS"

export class $SpellCastingMobJSBuilder extends $SpellCastingMobBuilder<($SpellCastingMobJS)> {
readonly "partEntityParamsList": $List<($ContextUtils$PartEntityParams<(T)>)>
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation
 "spawnPredicate": $SpawnPlacements$SpawnPredicate<($Entity)>
readonly "layerList": $List<($GeoLayerJSBuilder<(T)>)>
static readonly "thisList": $List<($BaseLivingEntityBuilder<(any)>)>
 "registryKey": $ResourceKey<($Registry<(T)>)>
 "heightMap": $Heightmap$Types
static readonly "spawnList": $List<($BaseLivingEntityBuilder<(any)>)>
static readonly "biomeSpawnList": $List<($EventBasedSpawnModifier$BiomeSpawn)>
readonly "glowingLayerList": $List<($GeoLayerJSBuilder<(T)>)>
 "placementType": $SpawnPlacementType

constructor(arg0: $ResourceLocation$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellCastingMobJSBuilder$$Type = ($SpellCastingMobJSBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellCastingMobJSBuilder_ = $SpellCastingMobJSBuilder$$Type;
}}
declare module "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$Builder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CustomMagicSwordItem$TierBuilder, $CustomMagicSwordItem$TierBuilder$$Type} from "com.squoshi.irons_spells_js.item.CustomMagicSwordItem$TierBuilder"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ItemBuilder, $ItemBuilder$$Type} from "dev.latvian.mods.kubejs.item.ItemBuilder"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $CustomMagicSwordItem$Builder extends $ItemBuilder {
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation
 "registryKey": $ResourceKey<($Registry<(T)>)>

constructor(arg0: $ResourceLocation$$Type)

public "addSpell"(arg0: $Holder$$Type<($AbstractSpell)>, arg1: integer): $CustomMagicSwordItem$Builder
public "setTier"(arg0: $Consumer$$Type<($CustomMagicSwordItem$TierBuilder)>): $CustomMagicSwordItem$Builder
set "tier"(value: $Consumer$$Type<($CustomMagicSwordItem$TierBuilder)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMagicSwordItem$Builder$$Type = ($CustomMagicSwordItem$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomMagicSwordItem$Builder_ = $CustomMagicSwordItem$Builder$$Type;
}}
declare module "com.squoshi.irons_spells_js.entity.attribute.SpellAttributeBuilderJS" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$List, $List$$Type} from "java.util.List"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$AttributeBuilder$Range, $AttributeBuilder$Range$$Type} from "dev.latvian.mods.kubejs.entity.AttributeBuilder$Range"
import {$AttributeBuilder, $AttributeBuilder$$Type} from "dev.latvian.mods.kubejs.entity.AttributeBuilder"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $SpellAttributeBuilderJS extends $AttributeBuilder {
 "registryKey": $ResourceKey<($Registry<(T)>)>
 "sourceLine": $SourceLine
readonly "predicateList": $List<($Predicate<($EntityType<(any)>)>)>
 "defaultValue": $Either<($AttributeBuilder$Range), (boolean)>
readonly "id": $ResourceLocation

constructor(arg0: $ResourceLocation$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellAttributeBuilderJS$$Type = ($SpellAttributeBuilderJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellAttributeBuilderJS_ = $SpellAttributeBuilderJS$$Type;
}}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastClientContext" {
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CustomSpell$PreCastClientContext extends $Record {

constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getHand: $InteractionHand$$Type, getPlayerMagicData: $MagicData$$Type)

public "getLevel"(): $Level
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getEntity"(): $LivingEntity
public "getHand"(): $InteractionHand
public "getSpellLevel"(): integer
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "hand"(): $InteractionHand
get "spellLevel"(): integer
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$PreCastClientContext$$Type = ({"getHand"?: $InteractionHand$$Type, "getLevel"?: $Level$$Type, "getPlayerMagicData"?: $MagicData$$Type, "getEntity"?: $LivingEntity$$Type, "getSpellLevel"?: integer}) | ([getHand?: $InteractionHand$$Type, getLevel?: $Level$$Type, getPlayerMagicData?: $MagicData$$Type, getEntity?: $LivingEntity$$Type, getSpellLevel?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$PreCastClientContext_ = $CustomSpell$PreCastClientContext$$Type;
}}
declare module "com.squoshi.irons_spells_js.spell.school.SchoolTypeJSBuilder" {
import {$SchoolType, $SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$BuilderBase, $BuilderBase$$Type} from "dev.latvian.mods.kubejs.registry.BuilderBase"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DamageType, $DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"

export class $SchoolTypeJSBuilder extends $BuilderBase<($SchoolType)> {
 "registryKey": $ResourceKey<($Registry<(T)>)>
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation

constructor(arg0: $ResourceLocation$$Type)

/**
 *         Sets the name of the school. It requires a `Component`, which allows custom colors and formatting. You can also use `Text`.
 */
public "setName"(arg0: $Component$$Type): $SchoolTypeJSBuilder
/**
 *         Disables looting.
 */
public "disableLooting"(): $SchoolTypeJSBuilder
public "addFocusItems"(...arg0: ($Item$$Type)[]): $SchoolTypeJSBuilder
/**
 *         Sets the damage type of the school. It takes either a String, ResourceLocation, or just a DamageType.
 *         Damage types can be created using datapacks or server scripts, or you can use an existing damage type.
 */
public "setDamageType"(arg0: $ResourceKey$$Type<($DamageType)>): $SchoolTypeJSBuilder
/**
 *         Sets require learning to true.
 */
public "requiresLearning"(): $SchoolTypeJSBuilder
/**
 *         Sets the ID of the item tag used for the focus item.
 *         ⚠️ Default tag is `${mod_id}:${school_name}_focus` ⚠️️
 */
public "setDefaultFocusTag"(arg0: $TagKey$$Type<($Item)>): $SchoolTypeJSBuilder
public "addFocusItemTags"(...arg0: ($TagKey$$Type<($Item$$Type)>)[]): $SchoolTypeJSBuilder
/**
 *         Sets the power attribute of the school. It takes either a String, ResourceLocation, or just an Attribute.
 */
public "setPowerAttribute"(arg0: $Holder$$Type<($Attribute)>): $SchoolTypeJSBuilder
/**
 *         Sets the resistance attribute of the school. It takes either a String, ResourceLocation, or just an Attribute.
 */
public "setResistanceAttribute"(arg0: $Holder$$Type<($Attribute)>): $SchoolTypeJSBuilder
/**
 *         Sets the default cast sound of the school. It takes either a String, ResourceLocation, or just a SoundEvent.
 */
public "setDefaultCastSound"(arg0: $Holder$$Type<($SoundEvent)>): $SchoolTypeJSBuilder
set "name"(value: $Component$$Type)
set "damageType"(value: $ResourceKey$$Type<($DamageType)>)
set "defaultFocusTag"(value: $TagKey$$Type<($Item)>)
set "powerAttribute"(value: $Holder$$Type<($Attribute)>)
set "resistanceAttribute"(value: $Holder$$Type<($Attribute)>)
set "defaultCastSound"(value: $Holder$$Type<($SoundEvent)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchoolTypeJSBuilder$$Type = ($SchoolTypeJSBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchoolTypeJSBuilder_ = $SchoolTypeJSBuilder$$Type;
}}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell$CastContext" {
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CustomSpell$CastContext extends $Record {

constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getCastSource: $CastSource$$Type, getPlayerMagicData: $MagicData$$Type)

public "getLevel"(): $Level
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getCastSource"(): $CastSource
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "castSource"(): $CastSource
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$CastContext$$Type = ({"getCastSource"?: $CastSource$$Type, "getEntity"?: $LivingEntity$$Type, "getLevel"?: $Level$$Type, "getPlayerMagicData"?: $MagicData$$Type, "getSpellLevel"?: integer}) | ([getCastSource?: $CastSource$$Type, getEntity?: $LivingEntity$$Type, getLevel?: $Level$$Type, getPlayerMagicData?: $MagicData$$Type, getSpellLevel?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$CastContext_ = $CustomSpell$CastContext$$Type;
}}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell$Builder" {
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SchoolType, $SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$CastType, $CastType$$Type} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$CustomSpell$PreCastContext, $CustomSpell$PreCastContext$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastContext"
import {$BuilderBase, $BuilderBase$$Type} from "dev.latvian.mods.kubejs.registry.BuilderBase"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$CustomSpell$CastContext, $CustomSpell$CastContext$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell$CastContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$CustomSpell$CastClientContext, $CustomSpell$CastClientContext$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell$CastClientContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$SpellRarity, $SpellRarity$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import {$CustomSpell$PreCastClientContext, $CustomSpell$PreCastClientContext$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastClientContext"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$CustomSpell$PreCastTargetingContext, $CustomSpell$PreCastTargetingContext$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastTargetingContext"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$CustomSpell, $CustomSpell$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell"

export class $CustomSpell$Builder extends $BuilderBase<($CustomSpell)> {
 "registryKey": $ResourceKey<($Registry<(T)>)>
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation

constructor(arg0: $ResourceLocation$$Type)

/**
 *     Sets the callback for when the spell is cast. This is what the spell does when it is casted.
 */
public "onCast"(arg0: $Consumer$$Type<($CustomSpell$CastContext)>): $CustomSpell$Builder
/**
 *     Sets the rarity of the spell. Can be `COMMON`, `UNCOMMON`, `RARE`, `EPIC`, or `LEGENDARY`.
 */
public "setMinRarity"(arg0: $SpellRarity$$Type): $CustomSpell$Builder
/**
 *     Sets the max level of the spell. Goes up to `10` from `1`.
 */
public "setMaxLevel"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets the school of the spell. The different schools each are a resource location.
 * 
 *     Example: `.setSchool(SchoolRegistry.BLOOD_RESOURCE`
 *     Another example: `setSchool('irons_spellbooks:blood')`
 */
public "setSchool"(arg0: $Holder$$Type<($SchoolType)>): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is about to be cast. This is what the spell does before it is casted.
 */
public "onPreCast"(arg0: $Consumer$$Type<($CustomSpell$PreCastContext)>): $CustomSpell$Builder
/**
 *     Sets whether or not the spell needs to be learned before it can be casted.
 */
public "needsLearning"(arg0: boolean): $CustomSpell$Builder
/**
 *     Sets the cast type. Can be `CONTINUOUS`, `INSTANT`, `LONG`, or `NONE`.
 */
public "setCastType"(arg0: $CastType$$Type): $CustomSpell$Builder
/**
 *     Sets the sound that the spell will play when it starts casting.
 */
public "setStartSound"(arg0: $Holder$$Type<($SoundEvent)>): $CustomSpell$Builder
/**
 *     Sets the sound that the spell will play after it is done casting.
 */
public "setFinishSound"(arg0: $Holder$$Type<($SoundEvent)>): $CustomSpell$Builder
/**
 *     Sets the cast time. This is used for `LONG` or `CONTINUOUS` spell types.
 */
public "setCastTime"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets the unique info for the spell. It is what is displayed on the spell in-game, e.g how some spells have damage values listed.
 */
public "setUniqueInfo"(arg0: $BiFunction$$Type<(integer), ($LivingEntity), ($List$$Type<($MutableComponent$$Type)>)>): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is cast on the client side. This is what the spell does when it is casted.
 */
public "onClientCast"(arg0: $Consumer$$Type<($CustomSpell$CastClientContext)>): $CustomSpell$Builder
/**
 *     Sets the predicate for whether or not the spell can be crafted by a player.
 */
public "canBeCraftedBy"(arg0: $Predicate$$Type<($Player)>): $CustomSpell$Builder
/**
 *     Sets the pre-cast conditions for the spell. It is a Predicate, which means it requires a boolean return value. This can be used for targeting spells and for cancelling the spell before it is casted.
 * 
 *     Example: ```js
 *     .checkPreCastConditions(ctx => {
 *         return ISSUtils.preCastTargetHelper(ctx.level, ctx.entity, ctx.playerMagicData, ctx.spell, 48, 0.35)
 *     })
 *     ```
 */
public "checkPreCastConditions"(arg0: $Predicate$$Type<($CustomSpell$PreCastTargetingContext)>): $CustomSpell$Builder
/**
 *     Sets the cooldown of the spell in seconds. Cannot be a decimal value for some reason.
 */
public "setCooldownSeconds"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets the callback for when the spell is about to be cast on the client side. This is what the spell does before it is casted.
 */
public "onPreClientCast"(arg0: $Consumer$$Type<($CustomSpell$PreCastClientContext)>): $CustomSpell$Builder
/**
 *     Sets the mana cost per the spell's level. For example, you could input `10` into this method, and each level of the spell will multiply that value by the level.
 */
public "setManaCostPerLevel"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets the base spell power. Can be from `1` to `10`. The spell power per level adds on to this.
 */
public "setBaseSpellPower"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets the spell power per level.
 */
public "setSpellPowerPerLevel"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets the base mana cost. The mana cost per level adds on to this.
 */
public "setBaseManaCost"(arg0: integer): $CustomSpell$Builder
/**
 *     Sets whether or not the spell can be looted from a loot table.
 */
public "setAllowLooting"(arg0: boolean): $CustomSpell$Builder
/**
 *     Sets the cast start animation for the spell.
 */
public "setCastStartAnimation"(arg0: StringJS, arg1: boolean, arg2: boolean): $CustomSpell$Builder
/**
 *     Sets the cast finish animation for the spell.
 */
public "setCastFinishAnimation"(arg0: StringJS, arg1: boolean, arg2: boolean): $CustomSpell$Builder
set "minRarity"(value: $SpellRarity$$Type)
set "maxLevel"(value: integer)
set "school"(value: $Holder$$Type<($SchoolType)>)
set "castType"(value: $CastType$$Type)
set "startSound"(value: $Holder$$Type<($SoundEvent)>)
set "finishSound"(value: $Holder$$Type<($SoundEvent)>)
set "castTime"(value: integer)
set "uniqueInfo"(value: $BiFunction$$Type<(integer), ($LivingEntity), ($List$$Type<($MutableComponent$$Type)>)>)
set "cooldownSeconds"(value: integer)
set "manaCostPerLevel"(value: integer)
set "baseSpellPower"(value: integer)
set "spellPowerPerLevel"(value: integer)
set "baseManaCost"(value: integer)
set "allowLooting"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$Builder$$Type = ($CustomSpell$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$Builder_ = $CustomSpell$Builder$$Type;
}}
declare module "com.squoshi.irons_spells_js.spell.AbstractSpellWrapper$SpellStatus" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $AbstractSpellWrapper$SpellStatus extends $Enum<($AbstractSpellWrapper$SpellStatus)> {
static readonly "DISABLED": $AbstractSpellWrapper$SpellStatus
static readonly "UNREGISTERED": $AbstractSpellWrapper$SpellStatus
static readonly "REGISTERED": $AbstractSpellWrapper$SpellStatus
static readonly "ENABLED": $AbstractSpellWrapper$SpellStatus


public static "values"(): ($AbstractSpellWrapper$SpellStatus)[]
public static "valueOf"(arg0: StringJS): $AbstractSpellWrapper$SpellStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSpellWrapper$SpellStatus$$Type = (("registered") | ("unregistered") | ("enabled") | ("disabled"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSpellWrapper$SpellStatus_ = $AbstractSpellWrapper$SpellStatus$$Type;
}}
declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS$OnAntiMagicContext" {
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SpellProjectileJS$OnAntiMagicContext extends $Record {

constructor(getMagicData: $MagicData$$Type, getEntity: $Entity$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getEntity"(): $Entity
public "getMagicData"(): $MagicData
get "entity"(): $Entity
get "magicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellProjectileJS$OnAntiMagicContext$$Type = ({"getMagicData"?: $MagicData$$Type, "getEntity"?: $Entity$$Type}) | ([getMagicData?: $MagicData$$Type, getEntity?: $Entity$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellProjectileJS$OnAntiMagicContext_ = $SpellProjectileJS$OnAntiMagicContext$$Type;
}}
declare module "com.squoshi.irons_spells_js.compat.entityjs.entity.SpellProjectileJS" {
import {$IProjectileEntityJS, $IProjectileEntityJS$$Type} from "net.liopyu.entityjs.entities.nonliving.entityjs.IProjectileEntityJS"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MoverType, $MoverType$$Type} from "net.minecraft.world.entity.MoverType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$SpellProjectileJSBuilder, $SpellProjectileJSBuilder$$Type} from "com.squoshi.irons_spells_js.compat.entityjs.entity.builder.SpellProjectileJSBuilder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$AntiMagicSusceptible, $AntiMagicSusceptible$$Type} from "io.redspace.ironsspellbooks.entity.mobs.AntiMagicSusceptible"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$BaseNonAnimatableEntityBuilder, $BaseNonAnimatableEntityBuilder$$Type} from "net.liopyu.entityjs.builders.nonliving.BaseNonAnimatableEntityBuilder"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$LightningBolt, $LightningBolt$$Type} from "net.minecraft.world.entity.LightningBolt"
import {$AbstractMagicProjectile, $AbstractMagicProjectile$$Type} from "io.redspace.ironsspellbooks.entity.spells.AbstractMagicProjectile"

export class $SpellProjectileJS extends $AbstractMagicProjectile implements $IProjectileEntityJS, $AntiMagicSusceptible {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack<(any)>
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "leftOwner": boolean
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "deltaMovementOld": $Vec3
 "yOld": double
 "builder": $SpellProjectileJSBuilder
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "ownerUUID": $UUID
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "hasBeenShot": boolean
 "cachedOwner": $Entity
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $SpellProjectileJSBuilder$$Type, arg1: $EntityType$$Type<($AbstractMagicProjectile$$Type)>, arg2: $Level$$Type)
constructor(arg0: $EntityType$$Type<($AbstractMagicProjectile$$Type)>, arg1: $Level$$Type, arg2: $LivingEntity$$Type)

public "push"(arg0: $Entity$$Type): void
public "entityName"(): StringJS
public "tick"(): void
public "move"(arg0: $MoverType$$Type, arg1: $Vec3$$Type): void
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "lerpTo"(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float, arg5: integer): void
public "setDamage"(arg0: float): void
public "lavaHurt"(): void
public "playerTouch"(arg0: $Player$$Type): void
public "canCollideWith"(arg0: $Entity$$Type): boolean
public "thunderHit"(arg0: $ServerLevel$$Type, arg1: $LightningBolt$$Type): void
public "getDamage"(): float
public "isAttackable"(): boolean
public "canTrample"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: float): boolean
public "onAddedToLevel"(): void
public "setSprinting"(arg0: boolean): void
public "getSpeed"(): float
public "canFreeze"(): boolean
public "stopRiding"(): void
public "rideTick"(): void
public "isPushable"(): boolean
public "isFreezing"(): boolean
public "mayInteract"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "setSpeed"(arg0: float): void
public "onAntiMagic"(arg0: $MagicData$$Type): void
public "trailParticles"(): void
public "getImpactSound"(): $Optional<($Holder<($SoundEvent)>)>
public "shootFromRotation"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): void
public "isGlowing"(): boolean
public "addAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "onClientRemoval"(): void
public "dampensVibrations"(): boolean
public "showVehicleHealth"(): boolean
public "canChangeDimensions"(arg0: $Level$$Type, arg1: $Level$$Type): boolean
public "onRemovedFromLevel"(): void
public "isInvulnerableTo"(arg0: $DamageSource$$Type): boolean
public "getMaxFallDistance"(): integer
public "causeFallDamage"(arg0: float, arg1: float, arg2: $DamageSource$$Type): boolean
public "shouldRenderAtSqrDistance"(arg0: double): boolean
public "getControllingPassenger"(): $LivingEntity
public "impactParticles"(arg0: double, arg1: double, arg2: double): void
public "getProjectileBuilder"(): $BaseNonAnimatableEntityBuilder<(any)>
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
set "damage"(value: float)
get "damage"(): float
get "attackable"(): boolean
set "sprinting"(value: boolean)
get "speed"(): float
get "pushable"(): boolean
get "freezing"(): boolean
set "speed"(value: float)
get "impactSound"(): $Optional<($Holder<($SoundEvent)>)>
get "glowing"(): boolean
get "maxFallDistance"(): integer
get "controllingPassenger"(): $LivingEntity
get "projectileBuilder"(): $BaseNonAnimatableEntityBuilder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellProjectileJS$$Type = ($SpellProjectileJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellProjectileJS_ = $SpellProjectileJS$$Type;
}}
declare module "com.squoshi.irons_spells_js.item.CustomSpellBook$Builder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ItemBuilder, $ItemBuilder$$Type} from "dev.latvian.mods.kubejs.item.ItemBuilder"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $CustomSpellBook$Builder extends $ItemBuilder {
 "sourceLine": $SourceLine
readonly "id": $ResourceLocation
 "registryKey": $ResourceKey<($Registry<(T)>)>

constructor(arg0: $ResourceLocation$$Type)

/**
 * Adds a default attribute to the item. Can be used multiple times.
 * The modifier operation can be either `ADD_MULTIPLIED_BASE`, `ADD_MULTIPLIED_TOTAL` or `ADD_VALUE`.
 */
public "addAttribute"(arg0: $Holder$$Type<($Attribute)>, arg1: double, arg2: $AttributeModifier$Operation$$Type): this
/**
 * Adds a default spell to the item. Can be used multiple times. It takes a spell ID (or a spell object) and the spell level.
 * This will turn into Unique Spellbook.
 */
public "addSpell"(arg0: $Holder$$Type<($AbstractSpell)>, arg1: integer): this
/**
 * Sets the maximum amount of spell slots the spell book can have.
 */
public "setMaxSpellSlots"(arg0: integer): this
/**
 * Sets an affinity that will make this spell a +1 level boost.
 */
public "setAffinitySpell"(arg0: $Holder$$Type<($AbstractSpell)>): this
set "maxSpellSlots"(value: integer)
set "affinitySpell"(value: $Holder$$Type<($AbstractSpell)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpellBook$Builder$$Type = ($CustomSpellBook$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpellBook$Builder_ = $CustomSpellBook$Builder$$Type;
}}
declare module "com.squoshi.irons_spells_js.event.SpellPreCastEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SchoolType, $SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$KubeEntityEvent, $KubeEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeEntityEvent"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $SpellPreCastEventJS extends $Event implements $KubeEntityEvent, $ICancellableEvent {

constructor(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer, arg3: $SchoolType$$Type, arg4: $CastSource$$Type)

/**
 *     Returns the player that cast the spell.
 */
public "getEntity"(): $Entity
/**
 *     Returns the school type of the spell that was cast.
 */
public "getSchoolType"(): $SchoolType
/**
 *     Returns the new spell level of the spell that was cast.
 */
public "getSpellLevel"(): integer
/**
 *     Returns the cast source.
 */
public "getCastSource"(): $CastSource
/**
 *     Returns the spell ID of the spell that was cast.
 */
public "getSpellId"(): StringJS
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
public "getServer"(): $MinecraftServer
public "getRegistries"(): $RegistryAccess
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
get "entity"(): $Entity
get "schoolType"(): $SchoolType
get "spellLevel"(): integer
get "castSource"(): $CastSource
get "spellId"(): StringJS
get "level"(): $Level
get "player"(): $Player
get "canceled"(): boolean
set "canceled"(value: boolean)
get "server"(): $MinecraftServer
get "registries"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPreCastEventJS$$Type = ($SpellPreCastEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellPreCastEventJS_ = $SpellPreCastEventJS$$Type;
}}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell$PreCastTargetingContext" {
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CustomSpell$PreCastTargetingContext extends $Record {

constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getPlayerMagicData: $MagicData$$Type, getSpell: $AbstractSpell$$Type)

public "getLevel"(): $Level
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getSpell"(): $AbstractSpell
public "getPlayerMagicData"(): $MagicData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "spell"(): $AbstractSpell
get "playerMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$PreCastTargetingContext$$Type = ({"getSpell"?: $AbstractSpell$$Type, "getEntity"?: $LivingEntity$$Type, "getLevel"?: $Level$$Type, "getPlayerMagicData"?: $MagicData$$Type, "getSpellLevel"?: integer}) | ([getSpell?: $AbstractSpell$$Type, getEntity?: $LivingEntity$$Type, getLevel?: $Level$$Type, getPlayerMagicData?: $MagicData$$Type, getSpellLevel?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$PreCastTargetingContext_ = $CustomSpell$PreCastTargetingContext$$Type;
}}
declare module "com.squoshi.irons_spells_js.item.CustomStaff$Builder$StaffTierEnum" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StaffTier, $StaffTier$$Type} from "io.redspace.ironsspellbooks.item.weapons.StaffTier"

export class $CustomStaff$Builder$StaffTierEnum extends $Enum<($CustomStaff$Builder$StaffTierEnum)> {
static readonly "BLOOD_STAFF": $CustomStaff$Builder$StaffTierEnum
static readonly "ICE_STAFF": $CustomStaff$Builder$StaffTierEnum
static readonly "LIGHTNING_ROD": $CustomStaff$Builder$StaffTierEnum
static readonly "GRAYBEARD": $CustomStaff$Builder$StaffTierEnum
static readonly "ARTIFICER": $CustomStaff$Builder$StaffTierEnum


public static "values"(): ($CustomStaff$Builder$StaffTierEnum)[]
public static "valueOf"(arg0: StringJS): $CustomStaff$Builder$StaffTierEnum
public "getTier"(): $StaffTier
get "tier"(): $StaffTier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomStaff$Builder$StaffTierEnum$$Type = (("graybeard") | ("artificer") | ("ice_staff") | ("lightning_rod") | ("blood_staff"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomStaff$Builder$StaffTierEnum_ = $CustomStaff$Builder$StaffTierEnum$$Type;
}}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell$CastClientContext" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICastData, $ICastData$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CustomSpell$CastClientContext extends $Record {

constructor(getLevel: $Level$$Type, getSpellLevel: integer, getEntity: $LivingEntity$$Type, getCastData: $ICastData$$Type)

public "getLevel"(): $Level
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getEntity"(): $LivingEntity
public "getSpellLevel"(): integer
public "getCastData"(): $ICastData
get "level"(): $Level
get "entity"(): $LivingEntity
get "spellLevel"(): integer
get "castData"(): $ICastData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$CastClientContext$$Type = ({"getSpellLevel"?: integer, "getLevel"?: $Level$$Type, "getCastData"?: $ICastData$$Type, "getEntity"?: $LivingEntity$$Type}) | ([getSpellLevel?: integer, getLevel?: $Level$$Type, getCastData?: $ICastData$$Type, getEntity?: $LivingEntity$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell$CastClientContext_ = $CustomSpell$CastClientContext$$Type;
}}
declare module "com.squoshi.irons_spells_js.event.ChangeManaEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$KubePlayerEvent, $KubePlayerEvent$$Type} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$ChangeManaEvent, $ChangeManaEvent$$Type} from "io.redspace.ironsspellbooks.api.events.ChangeManaEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $ChangeManaEventJS implements $KubePlayerEvent {

constructor(arg0: $ChangeManaEvent$$Type)

public "getEntity"(): $LivingEntity
/**
 *     Returns the float mana value that the value was before it was changed.
 */
public "getOldMana"(): float
/**
 *     Returns the float mana value that the value changed to after it was changed.
 */
public "getNewMana"(): float
/**
 *     Changes the value that the mana will change to during the event.
 */
public "setNewMana"(arg0: float): void
/**
 *     Returns the player's current MagicData.
 */
public "getMagicData"(): $MagicData
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getServer"(): $MinecraftServer
public "getRegistries"(): $RegistryAccess
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
get "entity"(): $LivingEntity
get "oldMana"(): float
get "newMana"(): float
set "newMana"(value: float)
get "magicData"(): $MagicData
get "player"(): $Player
get "level"(): $Level
get "server"(): $MinecraftServer
get "registries"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeManaEventJS$$Type = ($ChangeManaEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChangeManaEventJS_ = $ChangeManaEventJS$$Type;
}}
declare module "com.squoshi.irons_spells_js.spell.MagicEntityKJS" {
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"

export interface $MagicEntityKJS {

 "getMagicData"(): $MagicData
get "magicData"(): $MagicData
}

export namespace $MagicEntityKJS {
const probejs$$marker: never
}
export class $MagicEntityKJS$$Static implements $MagicEntityKJS {


 "getMagicData"(): $MagicData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicEntityKJS$$Type = ($MagicEntityKJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicEntityKJS_ = $MagicEntityKJS$$Type;
}}
declare module "com.squoshi.irons_spells_js.event.SpellOnCastEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SpellOnCastEvent, $SpellOnCastEvent$$Type} from "io.redspace.ironsspellbooks.api.events.SpellOnCastEvent"
import {$KubePlayerEvent, $KubePlayerEvent$$Type} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SchoolType, $SchoolType$$Type} from "io.redspace.ironsspellbooks.api.spells.SchoolType"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $SpellOnCastEventJS implements $KubePlayerEvent {

constructor(arg0: $SpellOnCastEvent$$Type)

/**
 *     Returns the player that cast the spell.
 */
public "getEntity"(): $LivingEntity
/**
 *     Returns the school type of the spell that was cast.
 */
public "getSchoolType"(): $SchoolType
/**
 *     Returns the new spell level of the spell that was cast.
 */
public "getSpellLevel"(): integer
/**
 *     Returns the cast source.
 */
public "getCastSource"(): $CastSource
/**
 *     Returns the new mana cost.
 */
public "getManaCost"(): integer
/**
 *     Sets the new spell level of the spell that was cast.
 */
public "setSpellLevel"(arg0: integer): void
/**
 *     Sets the new mana cost.
 */
public "setManaCost"(arg0: integer): void
/**
 *     Returns the spell ID of the spell that was cast.
 */
public "getSpellId"(): StringJS
/**
 *     Returns the original spell level of the spell that was cast.
 */
public "getOriginalSpellLevel"(): integer
/**
 *     Returns the original mana cost.
 */
public "getOriginalManaCost"(): integer
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getServer"(): $MinecraftServer
public "getRegistries"(): $RegistryAccess
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
get "entity"(): $LivingEntity
get "schoolType"(): $SchoolType
get "spellLevel"(): integer
get "castSource"(): $CastSource
get "manaCost"(): integer
set "spellLevel"(value: integer)
set "manaCost"(value: integer)
get "spellId"(): StringJS
get "originalSpellLevel"(): integer
get "originalManaCost"(): integer
get "player"(): $Player
get "level"(): $Level
get "server"(): $MinecraftServer
get "registries"(): $RegistryAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellOnCastEventJS$$Type = ($SpellOnCastEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellOnCastEventJS_ = $SpellOnCastEventJS$$Type;
}}
declare module "com.squoshi.irons_spells_js.spell.CustomSpell" {
import {$AnimationHolder, $AnimationHolder$$Type} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$CastType, $CastType$$Type} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CastSource, $CastSource$$Type} from "io.redspace.ironsspellbooks.api.spells.CastSource"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CustomSpell$Builder, $CustomSpell$Builder$$Type} from "com.squoshi.irons_spells_js.spell.CustomSpell$Builder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MagicData, $MagicData$$Type} from "io.redspace.ironsspellbooks.api.magic.MagicData"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$DefaultConfig, $DefaultConfig$$Type} from "io.redspace.ironsspellbooks.api.config.DefaultConfig"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICastData, $ICastData$$Type} from "io.redspace.ironsspellbooks.api.spells.ICastData"
import {$AbstractSpell, $AbstractSpell$$Type} from "io.redspace.ironsspellbooks.api.spells.AbstractSpell"

export class $CustomSpell extends $AbstractSpell {
static readonly "ELDRITCH_OBFUSCATED_STYLE": $Style

constructor(arg0: $CustomSpell$Builder$$Type)

public "onCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $CastSource$$Type, arg4: $MagicData$$Type): void
public "getCastType"(): $CastType
public "onClientCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $ICastData$$Type): void
public "getUniqueInfo"(arg0: integer, arg1: $LivingEntity$$Type): $List<($MutableComponent)>
public "canBeCraftedBy"(arg0: $Player$$Type): boolean
public "allowLooting"(): boolean
public "requiresLearning"(): boolean
public "onClientPreCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type, arg4: $MagicData$$Type): void
public "checkPreCastConditions"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): boolean
public "onServerPreCast"(arg0: $Level$$Type, arg1: integer, arg2: $LivingEntity$$Type, arg3: $MagicData$$Type): void
public "getSpellResource"(): $ResourceLocation
public "getDefaultConfig"(): $DefaultConfig
public "getCastStartSound"(): $Optional<($SoundEvent)>
public "getCastFinishSound"(): $Optional<($SoundEvent)>
public "getCastStartAnimation"(): $AnimationHolder
public "getCastFinishAnimation"(): $AnimationHolder
get "castType"(): $CastType
get "spellResource"(): $ResourceLocation
get "defaultConfig"(): $DefaultConfig
get "castStartSound"(): $Optional<($SoundEvent)>
get "castFinishSound"(): $Optional<($SoundEvent)>
get "castStartAnimation"(): $AnimationHolder
get "castFinishAnimation"(): $AnimationHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSpell$$Type = ($CustomSpell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomSpell_ = $CustomSpell$$Type;
}}
