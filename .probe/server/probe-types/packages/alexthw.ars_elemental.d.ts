declare module "alexthw.ars_elemental.common.items.Debugger" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ISchoolFocus, $ISchoolFocus$$Type} from "com.alexthw.sauce.api.item.ISchoolFocus"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ElementalFocus, $ElementalFocus$$Type} from "alexthw.ars_elemental.common.items.foci.ElementalFocus"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $Debugger extends $ElementalFocus {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onLeftClickEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): boolean
public static "getFirstFocus"(arg0: $Player$$Type): $ISchoolFocus
public static "getFociSchools"(arg0: $LivingEntity$$Type): $Set<($SpellSchool)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Debugger$$Type = ($Debugger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Debugger_ = $Debugger$$Type;
}}
declare module "alexthw.ars_elemental.recipe.NetheriteUpgradeRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$NetheriteUpgradeRecipe, $NetheriteUpgradeRecipe$$Type} from "alexthw.ars_elemental.recipe.NetheriteUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $NetheriteUpgradeRecipe$Serializer implements $RecipeSerializer<($NetheriteUpgradeRecipe)> {
static "CODEC": $MapCodec<($NetheriteUpgradeRecipe)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($NetheriteUpgradeRecipe)>

constructor()

public "codec"(): $MapCodec<($NetheriteUpgradeRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($NetheriteUpgradeRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteUpgradeRecipe$Serializer$$Type = ($NetheriteUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetheriteUpgradeRecipe$Serializer_ = $NetheriteUpgradeRecipe$Serializer$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.mermaid_block.MermaidRock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SummonBlock, $SummonBlock$$Type} from "com.hollingsworth.arsnouveau.common.block.SummonBlock"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $MermaidRock extends $SummonBlock implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "shape": $VoxelShape
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "asHolder"(): $Holder<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MermaidRock$$Type = ($MermaidRock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MermaidRock_ = $MermaidRock$$Type;
}}
declare module "alexthw.ars_elemental.mixin.FoxInvoker" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $FoxInvoker {

 "callTrusts"(arg0: $UUID$$Type): boolean
 "callAddTrustedUUID"(arg0: $UUID$$Type): void
}

export namespace $FoxInvoker {
const probejs$$marker: never
}
export class $FoxInvoker$$Static implements $FoxInvoker {


 "callTrusts"(arg0: $UUID$$Type): boolean
 "callAddTrustedUUID"(arg0: $UUID$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoxInvoker$$Type = ($FoxInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoxInvoker_ = $FoxInvoker$$Type;
}}
declare module "alexthw.ars_elemental.common.items.bangles.EarthBangles" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ISchoolBangle, $ISchoolBangle$$Type} from "com.alexthw.sauce.api.item.ISchoolBangle"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ElementalCurio, $ElementalCurio$$Type} from "alexthw.ars_elemental.common.items.ElementalCurio"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $EarthBangles extends $ElementalCurio implements $ISchoolBangle {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getSchool"(): $SpellSchool
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public static "hasBangle"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $SpellSchool$$Type): boolean
public static "getBangles"(arg0: $Level$$Type, arg1: $Entity$$Type): $Set<($SpellSchool)>
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "getSchools"(): $Set<($SpellSchool)>
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "school"(): $SpellSchool
get "schools"(): $Set<($SpellSchool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EarthBangles$$Type = ($EarthBangles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EarthBangles_ = $EarthBangles$$Type;
}}
declare module "alexthw.ars_elemental.common.items.FlashjackCharm" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbstractSummonCharm, $AbstractSummonCharm$$Type} from "com.hollingsworth.arsnouveau.api.item.AbstractSummonCharm"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SummoningTile, $SummoningTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.SummoningTile"

export class $FlashjackCharm extends $AbstractSummonCharm {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOnBlock"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $SummoningTile$$Type, arg3: $BlockPos$$Type): $InteractionResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlashjackCharm$$Type = ($FlashjackCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlashjackCharm_ = $FlashjackCharm$$Type;
}}
declare module "alexthw.ars_elemental.common.mob_effects.VenomEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $VenomEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VenomEffect$$Type = ($VenomEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VenomEffect_ = $VenomEffect$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.prism.HomingPrismLens" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$AbstractPrismLens, $AbstractPrismLens$$Type} from "alexthw.ars_elemental.common.blocks.prism.AbstractPrismLens"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $HomingPrismLens extends $AbstractPrismLens {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canConvert"(arg0: $EntityProjectileSpell$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "shoot"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type, arg3: $Vec3$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HomingPrismLens$$Type = ($HomingPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HomingPrismLens_ = $HomingPrismLens$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.prism.SpellMirror" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$SpellPrismBlock, $SpellPrismBlock$$Type} from "com.hollingsworth.arsnouveau.common.block.SpellPrismBlock"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SpellMirror extends $SpellPrismBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onHit"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellMirror$$Type = ($SpellMirror);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellMirror_ = $SpellMirror$$Type;
}}
declare module "alexthw.ars_elemental.common.items.bangles.WaterBangles" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ISchoolBangle, $ISchoolBangle$$Type} from "com.alexthw.sauce.api.item.ISchoolBangle"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ElementalCurio, $ElementalCurio$$Type} from "alexthw.ars_elemental.common.items.ElementalCurio"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $WaterBangles extends $ElementalCurio implements $ISchoolBangle {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getSchool"(): $SpellSchool
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public static "hasBangle"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $SpellSchool$$Type): boolean
public static "getBangles"(arg0: $Level$$Type, arg1: $Entity$$Type): $Set<($SpellSchool)>
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "getSchools"(): $Set<($SpellSchool)>
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "school"(): $SpellSchool
get "schools"(): $Set<($SpellSchool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterBangles$$Type = ($WaterBangles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterBangles_ = $WaterBangles$$Type;
}}
declare module "alexthw.ars_elemental.common.mob_effects.EnderferenceEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$EntityTeleportEvent, $EntityTeleportEvent$$Type} from "net.neoforged.neoforge.event.entity.EntityTeleportEvent"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $EnderferenceEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "enderference"(arg0: $EntityTeleportEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderferenceEffect$$Type = ($EnderferenceEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderferenceEffect_ = $EnderferenceEffect$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.prism.ArcPrismLens" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$AbstractPrismLens, $AbstractPrismLens$$Type} from "alexthw.ars_elemental.common.blocks.prism.AbstractPrismLens"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ArcPrismLens extends $AbstractPrismLens {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canConvert"(arg0: $EntityProjectileSpell$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "shoot"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type, arg3: $Vec3$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcPrismLens$$Type = ($ArcPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcPrismLens_ = $ArcPrismLens$$Type;
}}
declare module "alexthw.ars_elemental.common.mob_effects.LightningLureEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $LightningLureEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public static "fallLightning"(arg0: $LivingEntity$$Type): void
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightningLureEffect$$Type = ($LightningLureEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightningLureEffect_ = $LightningLureEffect$$Type;
}}
declare module "alexthw.ars_elemental.world.QuartzSpikeFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $QuartzSpikeFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzSpikeFeature$$Type = ($QuartzSpikeFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzSpikeFeature_ = $QuartzSpikeFeature$$Type;
}}
declare module "alexthw.ars_elemental.common.items.CasterHolder" {
import {$IDyeable, $IDyeable$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.IDyeable"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CurioHolder, $CurioHolder$$Type} from "alexthw.ars_elemental.common.items.CurioHolder"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $CasterHolder extends $CurioHolder implements $IDyeable {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "openContainer"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "onDye"(arg0: $ItemStack$$Type, arg1: $DyeColor$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CasterHolder$$Type = ($CasterHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CasterHolder_ = $CasterHolder$$Type;
}}
declare module "alexthw.ars_elemental.mixin.ZombieInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ZombieInvoker {

 "callStartUnderWaterConversion"(arg0: integer): void

(arg0: integer): void
}

export namespace $ZombieInvoker {
const probejs$$marker: never
}
export class $ZombieInvoker$$Static implements $ZombieInvoker {


 "callStartUnderWaterConversion"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZombieInvoker$$Type = ((arg0: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZombieInvoker_ = $ZombieInvoker$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.prism.ChainingPrismLens" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbstractPrismLens, $AbstractPrismLens$$Type} from "alexthw.ars_elemental.common.blocks.prism.AbstractPrismLens"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Spell$Mutable, $Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ICasterTool, $ICasterTool$$Type} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ChainingPrismLens extends $AbstractPrismLens implements $ICasterTool {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canConvert"(arg0: $EntityProjectileSpell$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "shoot"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type, arg3: $Vec3$$Type): void
public "addTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "sendSetMessage"(arg0: $Player$$Type): void
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(any)>
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(any)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(any)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChainingPrismLens$$Type = ($ChainingPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChainingPrismLens_ = $ChainingPrismLens$$Type;
}}
declare module "alexthw.ars_elemental.common.items.bangles.AirBangles" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ISchoolBangle, $ISchoolBangle$$Type} from "com.alexthw.sauce.api.item.ISchoolBangle"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ElementalCurio, $ElementalCurio$$Type} from "alexthw.ars_elemental.common.items.ElementalCurio"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $AirBangles extends $ElementalCurio implements $ISchoolBangle {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getSchool"(): $SpellSchool
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public static "hasBangle"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $SpellSchool$$Type): boolean
public static "getBangles"(arg0: $Level$$Type, arg1: $Entity$$Type): $Set<($SpellSchool)>
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "getSchools"(): $Set<($SpellSchool)>
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "school"(): $SpellSchool
get "schools"(): $Set<($SpellSchool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AirBangles$$Type = ($AirBangles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AirBangles_ = $AirBangles$$Type;
}}
declare module "alexthw.ars_elemental.common.items.armor.ArmorSet" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"

export class $ArmorSet {
static readonly "resistanceMap": $Map<($SpellSchool), ($SpellSchool)>
static readonly "weaknessMap": $Map<($SpellSchool), ($SpellSchool)>

constructor()

public "getName"(): StringJS
public "getHat"(): $Item
public "getLegs"(): $Item
public "getBoots"(): $Item
public "getChest"(): $Item
public "getTranslationKey"(): StringJS
public "getArmorFromSlot"(arg0: $EquipmentSlot$$Type): $Item
get "name"(): StringJS
get "hat"(): $Item
get "legs"(): $Item
get "boots"(): $Item
get "chest"(): $Item
get "translationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorSet$$Type = ($ArmorSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorSet_ = $ArmorSet$$Type;
}}
declare module "alexthw.ars_elemental.common.items.ElementalCurio" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICurioItem, $ICurioItem$$Type} from "top.theillusivec4.curios.api.type.capability.ICurioItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$EnderMan, $EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"

export class $ElementalCurio extends $Item implements $ICurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "canEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type, arg2: $ItemStack$$Type): boolean
public "getEquipSound"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ICurio$SoundInfo
public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "curioBreak"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "canSync"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "writeSyncData"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $CompoundTag
public "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type, arg2: $ItemStack$$Type): void
public "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "canUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$$Type): $ICurio$DropRule
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "hasCurioCapability"(arg0: $ItemStack$$Type): boolean
public "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
public "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
public "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
public "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
public "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
public "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalCurio$$Type = ($ElementalCurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalCurio_ = $ElementalCurio$$Type;
}}
declare module "alexthw.ars_elemental.common.items.bangles.FireBangles" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ISchoolBangle, $ISchoolBangle$$Type} from "com.alexthw.sauce.api.item.ISchoolBangle"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ElementalCurio, $ElementalCurio$$Type} from "alexthw.ars_elemental.common.items.ElementalCurio"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $FireBangles extends $ElementalCurio implements $ISchoolBangle {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getSchool"(): $SpellSchool
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public static "hasBangle"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $SpellSchool$$Type): boolean
public static "getBangles"(arg0: $Level$$Type, arg1: $Entity$$Type): $Set<($SpellSchool)>
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "getSchools"(): $Set<($SpellSchool)>
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "school"(): $SpellSchool
get "schools"(): $Set<($SpellSchool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBangles$$Type = ($FireBangles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireBangles_ = $FireBangles$$Type;
}}
declare module "alexthw.ars_elemental.common.items.SirenCharm" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbstractSummonCharm, $AbstractSummonCharm$$Type} from "com.hollingsworth.arsnouveau.api.item.AbstractSummonCharm"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SummoningTile, $SummoningTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.SummoningTile"

export class $SirenCharm extends $AbstractSummonCharm {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOnBlock"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $SummoningTile$$Type, arg3: $BlockPos$$Type): $InteractionResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SirenCharm$$Type = ($SirenCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SirenCharm_ = $SirenCharm$$Type;
}}
declare module "alexthw.ars_elemental.common.mob_effects.BubbleShieldEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $BubbleShieldEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BubbleShieldEffect$$Type = ($BubbleShieldEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BubbleShieldEffect_ = $BubbleShieldEffect$$Type;
}}
declare module "alexthw.ars_elemental.common.mob_effects.RepelEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $RepelEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepelEffect$$Type = ($RepelEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepelEffect_ = $RepelEffect$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.prism.AdvancedPrism" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Position, $Position$$Type} from "net.minecraft.core.Position"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$SpellPrismBlock, $SpellPrismBlock$$Type} from "com.hollingsworth.arsnouveau.common.block.SpellPrismBlock"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AdvancedPrism extends $SpellPrismBlock implements $EntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "onHit"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getDispensePosition"(arg0: $BlockPos$$Type, arg1: $Vec3$$Type): $Position
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedPrism$$Type = ($AdvancedPrism);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedPrism_ = $AdvancedPrism$$Type;
}}
declare module "alexthw.ars_elemental.common.items.CurioHolder" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICurioItem, $ICurioItem$$Type} from "top.theillusivec4.curios.api.type.capability.ICurioItem"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$EnderMan, $EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$SlotReference, $SlotReference$$Type} from "com.hollingsworth.arsnouveau.api.item.inv.SlotReference"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"

export class $CurioHolder extends $Item implements $ICurioItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "canStore"(arg0: $ItemStack$$Type): boolean
public "openContainer"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public static "isEquipped"(arg0: $Player$$Type): $SlotReference
public "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "canEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type, arg2: $ItemStack$$Type): boolean
public "getEquipSound"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ICurio$SoundInfo
public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "curioBreak"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "canSync"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "writeSyncData"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $CompoundTag
public "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type, arg2: $ItemStack$$Type): void
public "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "canUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
public "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$$Type): $ICurio$DropRule
public "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "hasCurioCapability"(arg0: $ItemStack$$Type): boolean
public "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
public "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
public "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
public "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
public "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "makesPiglinsNeutral"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
public "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
public "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioHolder$$Type = ($CurioHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioHolder_ = $CurioHolder$$Type;
}}
declare module "alexthw.ars_elemental.common.mob_effects.LifeLinkEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LivingHealEvent, $LivingHealEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingHealEvent"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$EffectCure, $EffectCure$$Type} from "net.neoforged.neoforge.common.EffectCure"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingDamageEvent$Pre, $LivingDamageEvent$Pre$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDamageEvent$Pre"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Set, $Set$$Type} from "java.util.Set"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $LifeLinkEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "healForHeal"(arg0: $LivingHealEvent$$Type): void
public "hurtForHurt"(arg0: $LivingDamageEvent$Pre$$Type): void
public "fillEffectCures"(arg0: $Set$$Type<($EffectCure$$Type)>, arg1: $MobEffectInstance$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LifeLinkEffect$$Type = ($LifeLinkEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LifeLinkEffect_ = $LifeLinkEffect$$Type;
}}
declare module "alexthw.ars_elemental.common.items.bangles.BaseBangle" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ISpellModifierItem, $ISpellModifierItem$$Type} from "com.hollingsworth.arsnouveau.api.item.ISpellModifierItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ElementalCurio, $ElementalCurio$$Type} from "alexthw.ars_elemental.common.items.ElementalCurio"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $BaseBangle extends $ElementalCurio implements $ISpellModifierItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBangle$$Type = ($BaseBangle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBangle_ = $BaseBangle$$Type;
}}
declare module "alexthw.ars_elemental.common.mob_effects.MagicFireEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$IMobEffectExtension, $IMobEffectExtension$$Type} from "net.neoforged.neoforge.common.extensions.IMobEffectExtension"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $MagicFireEffect extends $MobEffect implements $IMobEffectExtension {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagicFireEffect$$Type = ($MagicFireEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagicFireEffect_ = $MagicFireEffect$$Type;
}}
declare module "alexthw.ars_elemental.common.items.foci.NecroticFocus" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LivingDeathEvent, $LivingDeathEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingDeathEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ElementalCurio, $ElementalCurio$$Type} from "alexthw.ars_elemental.common.items.ElementalCurio"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SpellCastEvent, $SpellCastEvent$$Type} from "com.hollingsworth.arsnouveau.api.event.SpellCastEvent"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ISchoolFocus, $ISchoolFocus$$Type} from "com.alexthw.sauce.api.item.ISchoolFocus"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $NecroticFocus extends $ElementalCurio implements $ISchoolFocus {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "spawnDeathPoof"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type): void
public static "lifeSteal"(arg0: $LivingDeathEvent$$Type): void
public static "hasFocus"(arg0: $Level$$Type, arg1: $Entity$$Type): boolean
public "getDiscount"(): double
public static "castSpell"(arg0: $SpellCastEvent$$Type): void
public "getSchool"(): $SpellSchool
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public static "getFirstFocus"(arg0: $Player$$Type): $ISchoolFocus
public static "getFociSchools"(arg0: $LivingEntity$$Type): $Set<($SpellSchool)>
public "getSchools"(): $Set<($SpellSchool)>
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "discount"(): double
get "school"(): $SpellSchool
get "schools"(): $Set<($SpellSchool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NecroticFocus$$Type = ($NecroticFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NecroticFocus_ = $NecroticFocus$$Type;
}}
declare module "alexthw.ars_elemental.common.mob_effects.WaterGraveEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $WaterGraveEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterGraveEffect$$Type = ($WaterGraveEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterGraveEffect_ = $WaterGraveEffect$$Type;
}}
declare module "alexthw.ars_elemental.common.items.bangles.AnimaBangles" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ISchoolBangle, $ISchoolBangle$$Type} from "com.alexthw.sauce.api.item.ISchoolBangle"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ElementalCurio, $ElementalCurio$$Type} from "alexthw.ars_elemental.common.items.ElementalCurio"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $AnimaBangles extends $ElementalCurio implements $ISchoolBangle {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getSchool"(): $SpellSchool
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public static "hasBangle"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $SpellSchool$$Type): boolean
public static "getBangles"(arg0: $Level$$Type, arg1: $Entity$$Type): $Set<($SpellSchool)>
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "getSchools"(): $Set<($SpellSchool)>
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "school"(): $SpellSchool
get "schools"(): $Set<($SpellSchool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimaBangles$$Type = ($AnimaBangles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimaBangles_ = $AnimaBangles$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.prism.RainbowPrismLens" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$AbstractPrismLens, $AbstractPrismLens$$Type} from "alexthw.ars_elemental.common.blocks.prism.AbstractPrismLens"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $RainbowPrismLens extends $AbstractPrismLens {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canConvert"(arg0: $EntityProjectileSpell$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "shoot"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type, arg3: $Vec3$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RainbowPrismLens$$Type = ($RainbowPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RainbowPrismLens_ = $RainbowPrismLens$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.SporeBlossomGround" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SporeBlossomGround extends $Block {
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SporeBlossomGround$$Type = ($SporeBlossomGround);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SporeBlossomGround_ = $SporeBlossomGround$$Type;
}}
declare module "alexthw.ars_elemental.common.items.armor.ElementalArmor" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ArmorSet, $ArmorSet$$Type} from "alexthw.ars_elemental.common.items.armor.ArmorSet"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$IElementalArmor, $IElementalArmor$$Type} from "com.alexthw.sauce.api.item.IElementalArmor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider, $GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$AnimatedMagicArmor, $AnimatedMagicArmor$$Type} from "com.hollingsworth.arsnouveau.common.armor.AnimatedMagicArmor"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$IManaDiscountEquipment, $IManaDiscountEquipment$$Type} from "com.hollingsworth.arsnouveau.api.mana.IManaDiscountEquipment"

export class $ElementalArmor extends $AnimatedMagicArmor implements $IElementalArmor, $IManaDiscountEquipment {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "model": $GeoModel<($AnimatedMagicArmor)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type, arg1: $SpellSchool$$Type, arg2: $Holder$$Type<($ArmorMaterial)>, arg3: $Item$Properties$$Type)

public "getMinTier"(): integer
public "getSchool"(): $SpellSchool
public "getTier"(): StringJS
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public static "getArmorSetFromElement"(arg0: $SpellSchool$$Type, arg1: StringJS): $ArmorSet
public "addArmorSetDescription"(arg0: $ArmorSet$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "getManaDiscount"(arg0: $ItemStack$$Type, arg1: $Spell$$Type): integer
public "addInformationAfterShift"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "doAbsorb"(arg0: $DamageSource$$Type): boolean
public "getDiscount"(arg0: $List$$Type<($AbstractSpellPart$$Type)>): double
public "fillAbsorptions"(arg0: $DamageSource$$Type, arg1: $HashMap$$Type<($SpellSchool$$Type), (integer)>): boolean
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "getManaDiscount"(arg0: $ItemStack$$Type): integer
public "getSchools"(): $Set<($SpellSchool)>
public static "getId"(arg0: $ItemStack$$Type): long
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "minTier"(): integer
get "school"(): $SpellSchool
get "tier"(): StringJS
get "schools"(): $Set<($SpellSchool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalArmor$$Type = ($ElementalArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalArmor_ = $ElementalArmor$$Type;
}}
declare module "alexthw.ars_elemental.common.items.FirenandoCharm" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbstractSummonCharm, $AbstractSummonCharm$$Type} from "com.hollingsworth.arsnouveau.api.item.AbstractSummonCharm"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SummoningTile, $SummoningTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.SummoningTile"

export class $FirenandoCharm extends $AbstractSummonCharm {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOnBlock"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $InteractionResult
public "useOnSummonTile"(arg0: $UseOnContext$$Type, arg1: $Level$$Type, arg2: $SummoningTile$$Type, arg3: $BlockPos$$Type): $InteractionResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirenandoCharm$$Type = ($FirenandoCharm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirenandoCharm_ = $FirenandoCharm$$Type;
}}
declare module "alexthw.ars_elemental.common.items.caster_tools.SpellHorn" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ISpellModifierItem, $ISpellModifierItem$$Type} from "com.hollingsworth.arsnouveau.api.item.ISpellModifierItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Spell$Mutable, $Spell$Mutable$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell$Mutable"
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$AbstractCaster, $AbstractCaster$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCaster"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider, $GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ICasterTool, $ICasterTool$$Type} from "com.hollingsworth.arsnouveau.api.item.ICasterTool"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$GeoItem, $GeoItem$$Type} from "software.bernie.geckolib.animatable.GeoItem"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$SerializableDataTicket, $SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"

export class $SpellHorn extends $Item implements $GeoItem, $ISpellModifierItem, $ICasterTool {
 "factory": $AnimatableInstanceCache
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "onUseTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getMinUseDuration"(): integer
public "getMaxUseDuration"(): integer
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "isScribedSpellValid"(arg0: $AbstractCaster$$Type<(any)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$$Type): boolean
public "scribeModifiedSpell"(arg0: $AbstractCaster$$Type<(any)>, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: $Spell$Mutable$$Type): void
public "sendInvalidMessage"(arg0: $Player$$Type): void
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public static "getId"(arg0: $ItemStack$$Type): long
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public "getTick"(arg0: any): double
public "isPerspectiveAware"(): boolean
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public "onScribe"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $ItemStack$$Type): boolean
public "sendSetMessage"(arg0: $Player$$Type): void
public "getInformation"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getSpellCaster"(arg0: $ItemStack$$Type): $AbstractCaster<(any)>
public "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
public "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
public "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "getRenderProvider"(): any
public "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public "shouldDisplay"(arg0: $ItemStack$$Type): boolean
public "onQuickCast"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type, arg2: $InteractionHand$$Type, arg3: integer): void
/**
 * 
 * @deprecated
 */
public "canQuickCast"(): boolean
public "onNextKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onPreviousKeyPressed"(arg0: $ItemStack$$Type, arg1: $ServerPlayer$$Type): void
public "onOpenBookMenuKeyPressed"(arg0: $ItemStack$$Type, arg1: $Player$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
get "minUseDuration"(): integer
get "maxUseDuration"(): integer
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellHorn$$Type = ($SpellHorn);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellHorn_ = $SpellHorn$$Type;
}}
declare module "alexthw.ars_elemental.recipe.HeadCutRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe, $CustomRecipe$$Type} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $HeadCutRecipe extends $CustomRecipe {

constructor(arg0: $ItemStack$$Type, arg1: $ResourceLocation$$Type, arg2: integer)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "result"(): $ItemStack
public "getType"(): $RecipeType<(any)>
public "chance"(): integer
public "mob"(): $ResourceLocation
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadCutRecipe$$Type = ($HeadCutRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadCutRecipe_ = $HeadCutRecipe$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.prism.PiercingPrismLens" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$AbstractPrismLens, $AbstractPrismLens$$Type} from "alexthw.ars_elemental.common.blocks.prism.AbstractPrismLens"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $PiercingPrismLens extends $AbstractPrismLens {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canConvert"(arg0: $EntityProjectileSpell$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "shoot"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type, arg3: $Vec3$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiercingPrismLens$$Type = ($PiercingPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiercingPrismLens_ = $PiercingPrismLens$$Type;
}}
declare module "alexthw.ars_elemental.common.mob_effects.EnthrallEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$EffectCure, $EffectCure$$Type} from "net.neoforged.neoforge.common.EffectCure"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $EnthrallEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "onEffectAdded"(arg0: $LivingEntity$$Type, arg1: integer): void
public "applyEffectTick"(arg0: $LivingEntity$$Type, arg1: integer): boolean
public "fillEffectCures"(arg0: $Set$$Type<($EffectCure$$Type)>, arg1: $MobEffectInstance$$Type): void
public "shouldApplyEffectTickThisTick"(arg0: integer, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnthrallEffect$$Type = ($EnthrallEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnthrallEffect_ = $EnthrallEffect$$Type;
}}
declare module "alexthw.ars_elemental.world.BlackstoneFormation" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $BlackstoneFormation extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackstoneFormation$$Type = ($BlackstoneFormation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlackstoneFormation_ = $BlackstoneFormation$$Type;
}}
declare module "alexthw.ars_elemental.common.items.bangles.SummonBangles" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ISchoolBangle, $ISchoolBangle$$Type} from "com.alexthw.sauce.api.item.ISchoolBangle"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ElementalCurio, $ElementalCurio$$Type} from "alexthw.ars_elemental.common.items.ElementalCurio"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SummonBangles extends $ElementalCurio implements $ISchoolBangle {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getSchool"(): $SpellSchool
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public static "hasBangle"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $SpellSchool$$Type): boolean
public static "getBangles"(arg0: $Level$$Type, arg1: $Entity$$Type): $Set<($SpellSchool)>
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "getSchools"(): $Set<($SpellSchool)>
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "school"(): $SpellSchool
get "schools"(): $Set<($SpellSchool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SummonBangles$$Type = ($SummonBangles);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SummonBangles_ = $SummonBangles$$Type;
}}
declare module "alexthw.ars_elemental.common.items.armor.MediumArmorE" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ElementalArmor, $ElementalArmor$$Type} from "alexthw.ars_elemental.common.items.armor.ElementalArmor"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$AnimatedMagicArmor, $AnimatedMagicArmor$$Type} from "com.hollingsworth.arsnouveau.common.armor.AnimatedMagicArmor"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $MediumArmorE extends $ElementalArmor {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "model": $GeoModel<($AnimatedMagicArmor)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type, arg1: $SpellSchool$$Type, arg2: $Item$Properties$$Type)

public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public static "getId"(arg0: $ItemStack$$Type): long
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MediumArmorE$$Type = ($MediumArmorE);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MediumArmorE_ = $MediumArmorE$$Type;
}}
declare module "alexthw.ars_elemental.common.items.foci.ElementalFocus" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ElementalCurio, $ElementalCurio$$Type} from "alexthw.ars_elemental.common.items.ElementalCurio"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ISchoolFocus, $ISchoolFocus$$Type} from "com.alexthw.sauce.api.item.ISchoolFocus"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $ElementalFocus extends $ElementalCurio implements $ISchoolFocus {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $SpellSchool$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getEquipSound"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ICurio$SoundInfo
public "getDiscount"(): double
public "getSchool"(): $SpellSchool
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public static "getFirstFocus"(arg0: $Player$$Type): $ISchoolFocus
public static "getFociSchools"(arg0: $LivingEntity$$Type): $Set<($SpellSchool)>
public "getSchools"(): $Set<($SpellSchool)>
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "discount"(): double
get "school"(): $SpellSchool
get "schools"(): $Set<($SpellSchool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalFocus$$Type = ($ElementalFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalFocus_ = $ElementalFocus$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.EverfullUrnBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TickableModBlock, $TickableModBlock$$Type} from "com.hollingsworth.arsnouveau.common.block.TickableModBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BucketPickup, $BucketPickup$$Type} from "net.minecraft.world.level.block.BucketPickup"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $EverfullUrnBlock extends $TickableModBlock implements $BucketPickup {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public "getPickupSound"(): $Optional<($SoundEvent)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "asHolder"(): $Holder<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverfullUrnBlock$$Type = ($EverfullUrnBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EverfullUrnBlock_ = $EverfullUrnBlock$$Type;
}}
declare module "alexthw.ars_elemental.common.mob_effects.OrderEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MaxManaCalcEvent, $MaxManaCalcEvent$$Type} from "com.hollingsworth.arsnouveau.api.event.MaxManaCalcEvent"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$EffectCure, $EffectCure$$Type} from "net.neoforged.neoforge.common.EffectCure"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Set, $Set$$Type} from "java.util.Set"
import {$SpellCastEvent, $SpellCastEvent$$Type} from "com.hollingsworth.arsnouveau.api.event.SpellCastEvent"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $OrderEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

public "block"(arg0: $SpellCastEvent$$Type): void
public "punish"(arg0: $MaxManaCalcEvent$$Type): void
public "fillEffectCures"(arg0: $Set$$Type<($EffectCure$$Type)>, arg1: $MobEffectInstance$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrderEffect$$Type = ($OrderEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrderEffect_ = $OrderEffect$$Type;
}}
declare module "alexthw.ars_elemental.common.items.NecroEssence" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $NecroEssence extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NecroEssence$$Type = ($NecroEssence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NecroEssence_ = $NecroEssence$$Type;
}}
declare module "alexthw.ars_elemental.common.items.foci.GreaterElementalFocus" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ElementalFocus, $ElementalFocus$$Type} from "alexthw.ars_elemental.common.items.foci.ElementalFocus"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ISchoolFocus, $ISchoolFocus$$Type} from "com.alexthw.sauce.api.item.ISchoolFocus"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $GreaterElementalFocus extends $ElementalFocus {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $SpellSchool$$Type)

public "getDiscount"(): double
public "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
public "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public static "getFirstFocus"(arg0: $Player$$Type): $ISchoolFocus
public static "getFociSchools"(arg0: $LivingEntity$$Type): $Set<($SpellSchool)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "discount"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GreaterElementalFocus$$Type = ($GreaterElementalFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GreaterElementalFocus_ = $GreaterElementalFocus$$Type;
}}
declare module "alexthw.ars_elemental.recipe.HeadCutRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$HeadCutRecipe, $HeadCutRecipe$$Type} from "alexthw.ars_elemental.recipe.HeadCutRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $HeadCutRecipe$Serializer implements $RecipeSerializer<($HeadCutRecipe)> {
static "CODEC": $MapCodec<($HeadCutRecipe)>
static readonly "STREAM": $StreamCodec<($RegistryFriendlyByteBuf), ($HeadCutRecipe)>

constructor()

public "codec"(): $MapCodec<($HeadCutRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($HeadCutRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadCutRecipe$Serializer$$Type = ($HeadCutRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadCutRecipe$Serializer_ = $HeadCutRecipe$Serializer$$Type;
}}
declare module "alexthw.ars_elemental.recipe.NetheriteUpgradeRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$ApparatusRecipeInput, $ApparatusRecipeInput$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ApparatusRecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnchantingApparatusRecipe, $EnchantingApparatusRecipe$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantingApparatusRecipe"
import {$IEnchantingRecipe, $IEnchantingRecipe$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.IEnchantingRecipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $NetheriteUpgradeRecipe extends $EnchantingApparatusRecipe {

constructor(arg0: $Ingredient$$Type, arg1: $List$$Type<($Ingredient$$Type)>, arg2: integer)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "excludeJei"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $ApparatusRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public static "getRecipe"(arg0: $Level$$Type, arg1: $ApparatusRecipeInput$$Type): $RecipeHolder<($IEnchantingRecipe)>
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteUpgradeRecipe$$Type = ($NetheriteUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetheriteUpgradeRecipe_ = $NetheriteUpgradeRecipe$$Type;
}}
declare module "alexthw.ars_elemental.common.mob_effects.FrozenEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FrozenEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrozenEffect$$Type = ($FrozenEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrozenEffect_ = $FrozenEffect$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.prism.AbstractPrismLens" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SpellPrismLens, $SpellPrismLens$$Type} from "com.alexthw.sauce.api.item.SpellPrismLens"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $AbstractPrismLens extends $Item implements $SpellPrismLens {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: StringJS)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canConvert"(arg0: $EntityProjectileSpell$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "shoot"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type, arg3: $Vec3$$Type): void
public "addTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPrismLens$$Type = ($AbstractPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPrismLens_ = $AbstractPrismLens$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.prism.DecelerationPrismLens" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$AbstractPrismLens, $AbstractPrismLens$$Type} from "alexthw.ars_elemental.common.blocks.prism.AbstractPrismLens"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $DecelerationPrismLens extends $AbstractPrismLens {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canConvert"(arg0: $EntityProjectileSpell$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "shoot"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type, arg3: $Vec3$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecelerationPrismLens$$Type = ($DecelerationPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecelerationPrismLens_ = $DecelerationPrismLens$$Type;
}}
declare module "alexthw.ars_elemental.common.blocks.prism.AccelerationPrismLens" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$AbstractPrismLens, $AbstractPrismLens$$Type} from "alexthw.ars_elemental.common.blocks.prism.AbstractPrismLens"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $AccelerationPrismLens extends $AbstractPrismLens {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "canConvert"(arg0: $EntityProjectileSpell$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
public "shoot"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type, arg3: $Vec3$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccelerationPrismLens$$Type = ($AccelerationPrismLens);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccelerationPrismLens_ = $AccelerationPrismLens$$Type;
}}
